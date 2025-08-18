/**
 * Create a promise that can be resolved or rejected from outside the promise.
 * Useful for creating a promise that proxies callbacks like websockets or event emitters.
 * @example
 * const ready = new DeferredPromise()
 * const websocket = new WebSocket('ws://localhost:8080')
 * websocket.on('open', () => ready.resolve())
 * websocket.on('error', (error) => ready.reject(error))
 *
 * // Blocks until the websocket is ready
 * await ready.promise
 */
export class DeferredPromise<T = void> {
  public promise: Promise<T>;
  public resolve!: (value: T) => void;
  public reject!: (reason?: any) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

/**
 * Create an async iterable that can be published to and completed from outside the constructor.
 * Useful for creating async iterators that can be controlled externally.
 * @example
 * const iterable = new DeferredAsyncIterable<string>()
 *
 * // Push values from external source
 * iterable.push('hello')
 * iterable.push('world')
 * iterable.complete()
 *
 * // Consume the iterator
 * for await (const value of iterable) {
 *   console.log(value) // 'hello', 'world'
 * }
 */
export class DeferredAsyncIterable<T> implements AsyncIterable<T> {
  private readonly donePromise = new DeferredPromise<void>();
  private queue: T[] = [];
  private next = new DeferredPromise<void>();
  private isComplete = false;

  /**
   * Push a value to the iterator
   */
  push(value: T): void {
    if (this.isComplete) {
      throw new Error('Cannot push to completed iterator');
    }

    this.queue.push(value);
    this.next.resolve();
    this.next = new DeferredPromise<void>();
  }

  /**
   * Complete the iterator, causing it to finish
   */
  complete(): void {
    this.isComplete = true;
    this.donePromise.resolve();
    this.next.resolve();
  }

  /**
   * Reject the iterator with an error
   */
  reject(error: unknown): void {
    this.isComplete = true;
    this.donePromise.reject(error);
    this.next.reject(error);
  }

  get done() {
    return this.donePromise.promise;
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    for (;;) {
      try {
        await this.next.promise;
        yield* this.queue;
        this.queue = [];
        if (this.isComplete) {
          return;
        }
      } catch (error) {
        // If the next iteration went wrong, try to yield
        // the values we have so far.
        yield* this.queue;
        this.queue = [];
        throw error;
      }
    }
  }
}
