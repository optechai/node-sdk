// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Authorization extends APIResource {
  getURL(providerId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/oauth/authorization/url/${providerId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
