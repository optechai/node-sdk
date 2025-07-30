// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FeatureFlags extends APIResource {
  /**
   * @example
   * ```ts
   * await client.admin.featureFlags.create({
   *   flagName: 'flagName',
   *   subscriberId: 'subscriberId',
   * });
   * ```
   */
  create(body: FeatureFlagCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/admin/feature-flags', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * @example
   * ```ts
   * await client.admin.featureFlags.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/admin/feature-flags', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * @example
   * ```ts
   * await client.admin.featureFlags.delete({
   *   flagName: 'flagName',
   *   subscriberId: 'subscriberId',
   * });
   * ```
   */
  delete(body: FeatureFlagDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete('/v1/admin/feature-flags', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface FeatureFlagCreateParams {
  /**
   * The feature flag name
   */
  flagName: string;

  /**
   * Subscriber id to modify
   */
  subscriberId: string;
}

export interface FeatureFlagDeleteParams {
  /**
   * The feature flag name
   */
  flagName: string;

  /**
   * Subscriber id to modify
   */
  subscriberId: string;
}

export declare namespace FeatureFlags {
  export {
    type FeatureFlagCreateParams as FeatureFlagCreateParams,
    type FeatureFlagDeleteParams as FeatureFlagDeleteParams,
  };
}
