interface PollUntilOptions<TData> {
  /** The maximum time to wait for the condition to be met. */
  timeout?: number;

  /** The interval between each poll. */
  interval?: number;

  /**
   *
   * @param result The result of the polling function.
   * @returns
   */
  condition: (result: TData) => boolean;
}

/** Utility function to poll an endpoint. */
export const pollUntil = async <T>(
  fn: () => Promise<T>,
  { condition = (result) => !!result, interval = 100, timeout = 5000 }: PollUntilOptions<T>,
): Promise<T> => {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    const result = await fn();
    if (condition(result)) {
      return result;
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  throw new Error(`Polling timed out`);
};
