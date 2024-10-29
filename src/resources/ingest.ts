// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Ingest extends APIResource {
  validate(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ingest/validate', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
