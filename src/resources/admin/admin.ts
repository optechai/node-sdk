// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as FeatureFlagsAPI from './feature-flags';
import { FeatureFlagCreateParams, FeatureFlagDeleteParams, FeatureFlags } from './feature-flags';
import * as SubscriberAPI from './subscriber';
import { Subscriber, SubscriberSetupParams } from './subscriber';

export class Admin extends APIResource {
  subscriber: SubscriberAPI.Subscriber = new SubscriberAPI.Subscriber(this._client);
  featureFlags: FeatureFlagsAPI.FeatureFlags = new FeatureFlagsAPI.FeatureFlags(this._client);

  /**
   * @example
   * ```ts
   * await client.admin.checkHealth();
   * ```
   */
  checkHealth(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/admin/healthz', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get all subscribers
   *
   * @example
   * ```ts
   * await client.admin.listSubscribers();
   * ```
   */
  listSubscribers(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/admin/subscribers', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

Admin.Subscriber = Subscriber;
Admin.FeatureFlags = FeatureFlags;

export declare namespace Admin {
  export { Subscriber as Subscriber, type SubscriberSetupParams as SubscriberSetupParams };

  export {
    FeatureFlags as FeatureFlags,
    type FeatureFlagCreateParams as FeatureFlagCreateParams,
    type FeatureFlagDeleteParams as FeatureFlagDeleteParams,
  };
}
