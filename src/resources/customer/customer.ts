// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProfileAPI from './profile';
import { Profile, ProfileSyncParams, ProfileSyncResponse } from './profile';
import * as RemoteAPI from './remote';
import { Remote, RemoteGetResponse, RemoteUpdateParams, RemoteUpdateResponse } from './remote';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints related to customer data
 */
export class Customer extends APIResource {
  remote: RemoteAPI.Remote = new RemoteAPI.Remote(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);

  /**
   * @example
   * ```ts
   * const customer = await client.customer.create();
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerCreateResponse> {
    return this._client.post('/v1/customer', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const customer = await client.customer.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    id: string,
    body: CustomerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateResponse> {
    return this._client.put(path`/v1/customer/${id}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const customer = await client.customer.get();
   * ```
   */
  get(
    query: CustomerGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerGetResponse> {
    return this._client.get('/v1/customer', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.customer.token();
   * ```
   */
  token(body: CustomerTokenParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/v1/customer/token', { body, ...options });
  }

  /**
   * Applies the update immediately. For VOICE, SMS, and WHATSAPP, an unexpired
   * OPTED_OUT update also cancels active outbound follow-up jobs for the Customer on
   * that channel.
   *
   * @example
   * ```ts
   * const response = await client.customer.updateConsent({
   *   channelType: 'VOICE',
   *   consentStatus: 'OPTED_OUT',
   *   customerId: '11111111-1111-4111-8111-111111111111',
   *   effectiveAt: '2026-08-17T10:00:00.000Z',
   *   source: 'crm_sync',
   * });
   * ```
   */
  updateConsent(
    body: CustomerUpdateConsentParams,
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateConsentResponse> {
    return this._client.put('/v1/customer/consent', { body, ...options });
  }
}

export interface CustomerCreateResponse {
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
   * The messaging-platform user id of the customer (e.g. the WhatsApp BSUID). Not a
   * phone number.
   */
  externalUserId?: string;

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
  remoteId?: { [key: string]: unknown };

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

export interface CustomerUpdateResponse {
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
   * The messaging-platform user id of the customer (e.g. the WhatsApp BSUID). Not a
   * phone number.
   */
  externalUserId?: string;

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
  remoteId?: { [key: string]: unknown };

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

export interface CustomerGetResponse {
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
   * The messaging-platform user id of the customer (e.g. the WhatsApp BSUID). Not a
   * phone number.
   */
  externalUserId?: string;

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
  remoteId?: { [key: string]: unknown };

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

export type CustomerTokenResponse = string;

export interface CustomerUpdateConsentResponse {
  /**
   * The consent record ID.
   */
  id: string;

  /**
   * The outbound channel whose consent state is being updated.
   */
  channelType: 'VOICE' | 'SMS' | 'WHATSAPP' | 'EMAIL';

  /**
   * The resulting consent state.
   */
  consentStatus: 'OPTED_IN' | 'OPTED_OUT' | 'UNKNOWN';

  createdAt: string;

  /**
   * The Lorikeet Customer ID.
   */
  customerId: string;

  /**
   * When the consent decision took effect. This is an audit timestamp; the update is
   * applied immediately.
   */
  effectiveAt: string;

  /**
   * The external system or process that supplied the decision.
   */
  source: string;

  updatedAt: string;

  /**
   * When this consent record expires. An unexpired OPTED_OUT record suppresses
   * outbound contact.
   */
  expiresAt?: string | null;
}

export interface CustomerCreateParams {
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
  remoteId?: { [key: string]: unknown };

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

export interface CustomerUpdateParams {
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
  remoteId?: { [key: string]: unknown };

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

export interface CustomerGetParams {
  /**
   * The email address of the customer
   */
  email?: string;

  /**
   * The messaging-platform user id of the customer (e.g. the WhatsApp BSUID). Not a
   * phone number.
   */
  externalUserId?: string;

  /**
   * The phone number of the customer
   */
  phoneNumber?: string;

  /**
   * The remote id of the customer in your system
   */
  remoteId?: string;

  /**
   * The id of the customer in your own primary database or a unique identifier
   */
  subscriberCustomerId?: string;
}

export interface CustomerTokenParams {
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
   * The expiry of the conversation initialization token, if not provided it will be
   * set to 1 hour
   */
  expiry?: string;

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
  remoteId?: { [key: string]: unknown };

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

export interface CustomerUpdateConsentParams {
  /**
   * The outbound channel whose consent state is being updated.
   */
  channelType: 'VOICE' | 'SMS' | 'WHATSAPP' | 'EMAIL';

  /**
   * The resulting consent state.
   */
  consentStatus: 'OPTED_IN' | 'OPTED_OUT' | 'UNKNOWN';

  /**
   * The Lorikeet Customer ID.
   */
  customerId: string;

  /**
   * When the consent decision took effect. This is an audit timestamp; the update is
   * applied immediately.
   */
  effectiveAt: string;

  /**
   * The external system or process that supplied the decision.
   */
  source: string;

  /**
   * When this consent record expires. An unexpired OPTED_OUT record suppresses
   * outbound contact.
   */
  expiresAt?: string | null;
}

Customer.Remote = Remote;
Customer.Profile = Profile;

export declare namespace Customer {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerGetResponse as CustomerGetResponse,
    type CustomerTokenResponse as CustomerTokenResponse,
    type CustomerUpdateConsentResponse as CustomerUpdateConsentResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerGetParams as CustomerGetParams,
    type CustomerTokenParams as CustomerTokenParams,
    type CustomerUpdateConsentParams as CustomerUpdateConsentParams,
  };

  export {
    Remote as Remote,
    type RemoteUpdateResponse as RemoteUpdateResponse,
    type RemoteGetResponse as RemoteGetResponse,
    type RemoteUpdateParams as RemoteUpdateParams,
  };

  export {
    Profile as Profile,
    type ProfileSyncResponse as ProfileSyncResponse,
    type ProfileSyncParams as ProfileSyncParams,
  };
}
