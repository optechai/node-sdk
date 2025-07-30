// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Suggestion extends APIResource {
  createWorkflow(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/suggestion/workflow', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  retrieveTone(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/suggestion/tone', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
