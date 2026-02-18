// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Generate a new API key pair (clientId + clientSecret) for the authenticated
   * subscriber. The clientSecret is only returned once on creation.
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.create();
   * ```
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/v1/api-keys', { body, ...options });
  }

  /**
   * List all API keys for the authenticated subscriber. Secrets are masked.
   *
   * @example
   * ```ts
   * const apiKeys = await client.apiKeys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/v1/api-keys', options);
  }

  /**
   * Permanently delete an API key. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.apiKeys.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/api-keys/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details of a specific API key. Secret is masked.
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<APIKeyGetResponse> {
    return this._client.get(path`/v1/api-keys/${id}`, options);
  }
}

export interface APIKeyCreateResponse {
  /**
   * Unique identifier for the API key
   */
  id: string;

  /**
   * Public client ID used in API requests
   */
  clientId: string;

  /**
   * Secret key for signing requests. Only returned on creation - store securely.
   */
  clientSecret: string;

  /**
   * Timestamp when the API key was created
   */
  createdAt: string;

  /**
   * Environment label for the API key
   */
  env: string;
}

export interface APIKeyListResponse {
  /**
   * List of API keys
   */
  keys: Array<APIKeyListResponse.Key>;
}

export namespace APIKeyListResponse {
  export interface Key {
    /**
     * Unique identifier for the API key
     */
    id: string;

    /**
     * Public client ID used in API requests
     */
    clientId: string;

    /**
     * Masked preview of the secret key
     */
    clientSecretPreview: string;

    /**
     * Timestamp when the API key was created
     */
    createdAt: string;

    /**
     * Environment label for the API key
     */
    env: string;
  }
}

export interface APIKeyGetResponse {
  /**
   * Unique identifier for the API key
   */
  id: string;

  /**
   * Public client ID used in API requests
   */
  clientId: string;

  /**
   * Masked preview of the secret key
   */
  clientSecretPreview: string;

  /**
   * Timestamp when the API key was created
   */
  createdAt: string;

  /**
   * Environment label for the API key
   */
  env: string;
}

export interface APIKeyCreateParams {
  /**
   * Environment label for the API key (e.g., "api", "production", "staging")
   */
  env?: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyGetResponse as APIKeyGetResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
  };
}
