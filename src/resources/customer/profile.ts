// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Profile extends APIResource {
  /**
   * @example
   * ```ts
   * const response = await client.customer.profile.sync(
   *   '123e4567-e89b-12d3-a456-426614174000',
   *   { data: { foo: 'string' } },
   * );
   * ```
   */
  sync(
    id: string,
    body: ProfileSyncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileSyncResponse> {
    return this._client.put(`/v1/customer/profile/${id}`, { body, ...options });
  }
}

export interface ProfileSyncResponse {
  /**
   * The id of the customer in the subscriber system
   */
  id: string;

  /**
   * The timestamp of the when the customer was created in our system
   */
  createdAt: string;

  /**
   * The URL of the customer avatar
   */
  avatarUrl?: string;

  /**
   * The display name of the customer
   */
  displayName?: string;

  /**
   * The email of the customer
   */
  email?: string;

  /**
   * The first name of the customer
   */
  firstName?: string;

  /**
   * The last name of the customer
   */
  lastName?: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  remoteId?: string;

  /**
   * The id of the customer in your own primary database or a unique identifier, for
   * example a cookie
   */
  subscriberCustomerId?: string;

  /**
   * A token that can be used to authenticate the customer in the your system, like a
   * JWT
   */
  subscriberToken?: string;
}

export interface ProfileSyncParams {
  /**
   * The profile data to update - should be provided as key value object
   */
  data: { [key: string]: string | boolean | number | unknown | Array<unknown> };
}

export declare namespace Profile {
  export { type ProfileSyncResponse as ProfileSyncResponse, type ProfileSyncParams as ProfileSyncParams };
}
