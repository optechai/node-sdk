// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuthorizationAPI from './authorization';
import { Authorization } from './authorization';

export class OAuth extends APIResource {
  authorization: AuthorizationAPI.Authorization = new AuthorizationAPI.Authorization(this._client);

  callback(query: OAuthCallbackParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/oauth/callback', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OAuthCallbackParams {
  code: string;

  state: string;
}

OAuth.Authorization = Authorization;

export declare namespace OAuth {
  export { type OAuthCallbackParams as OAuthCallbackParams };

  export { Authorization as Authorization };
}
