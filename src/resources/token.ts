// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Token extends APIResource {
  create(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ingest/token', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
