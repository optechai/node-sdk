// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Remote extends APIResource {
  /**
   * @example
   * ```ts
   * const remote = await client.customer.remote.update(
   *   'remoteId',
   * );
   * ```
   */
  update(
    pathRemoteId: string,
    body: RemoteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RemoteUpdateResponse> {
    return this._client.patch(`/v1/customer/remote/${pathRemoteId}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const remote = await client.customer.remote.get('remoteId');
   * ```
   */
  get(remoteId: string, options?: Core.RequestOptions): Core.APIPromise<RemoteGetResponse> {
    return this._client.get(`/v1/customer/remote/${remoteId}`, options);
  }
}

export interface RemoteUpdateResponse {
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
   * The phone number of the customer (in international / E.164 format)
   */
  phoneNumber?: string;

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

export interface RemoteGetResponse {
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
   * The phone number of the customer (in international / E.164 format)
   */
  phoneNumber?: string;

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

export interface RemoteUpdateParams {
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
   * The phone number of the customer (in international / E.164 format)
   */
  phoneNumber?: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  body_remoteId?: string;

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

export declare namespace Remote {
  export {
    type RemoteUpdateResponse as RemoteUpdateResponse,
    type RemoteGetResponse as RemoteGetResponse,
    type RemoteUpdateParams as RemoteUpdateParams,
  };
}
