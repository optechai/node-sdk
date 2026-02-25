// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Lorikeet } from '../client';

export abstract class APIResource {
  protected _client: Lorikeet;

  constructor(client: Lorikeet) {
    this._client = client;
  }
}
