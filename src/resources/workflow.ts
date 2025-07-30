// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Workflow extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/workflow', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  update(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/workflow', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  get(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/workflow/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
