// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Webhooks extends APIResource {
  createLori(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/webhooks/lori', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
