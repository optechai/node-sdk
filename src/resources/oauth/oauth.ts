// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuthorizationAPI from './authorization';
import { Authorization } from './authorization';

export class OAuth extends APIResource {
  authorization: AuthorizationAPI.Authorization = new AuthorizationAPI.Authorization(this._client);

  authorize(query: OAuthAuthorizeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/oauth/authorize', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  callback(query: OAuthCallbackParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/oauth/callback', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  createToken(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/oauth/token', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  revokeToken(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/oauth/revoke', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OAuthAuthorizeParams {
  client_id: string;

  redirect_uri: string;
}

export interface OAuthCallbackParams {
  code: string;

  state: string;
}

OAuth.Authorization = Authorization;

export declare namespace OAuth {
  export {
    type OAuthAuthorizeParams as OAuthAuthorizeParams,
    type OAuthCallbackParams as OAuthCallbackParams,
  };

  export { Authorization as Authorization };
}
