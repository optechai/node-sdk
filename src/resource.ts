// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Lorikeet } from './index';

export class APIResource {
  protected _client: Lorikeet;
  private _events: Map<string, ((...args: any[]) => void)[]> = new Map();

  constructor(client: Lorikeet) {
    this._client = client;
  }

  protected _on(event: string, listener: (...args: any[]) => void): void {
    this._events.set(event, [...(this._events.get(event) ?? []), listener]);
  }

  protected _emit(event: string, ...args: any[]): void {
    const handlers = this._events.get(event);
    if (!handlers) {
      return;
    }

    handlers.forEach((listener) => listener(...args));
  }
}
