// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Customer extends APIResource {
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerCreateResponse> {
    return this._client.post('/v1/customer', { body, ...options });
  }

  update(
    id: string,
    body: CustomerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerUpdateResponse> {
    return this._client.put(`/v1/customer/${id}`, { body, ...options });
  }

  get(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerGetResponse> {
    return this._client.get(`/v1/customer/${id}`, options);
  }

  token(body: CustomerTokenParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/v1/customer/token', {
      body,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
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
   * The email of the customer
   */
  email: string;

  /**
   * The first name of the customer
   */
  firstName: string;

  /**
   * The last name of the customer
   */
  lastName: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  remoteId: string;

  /**
   * The id of the customer in your own primary database or a unique identifier, for
   * example a cookie
   */
  subscriberCustomerId: string;

  /**
   * The display name of the customer
   */
  displayName?: string;
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
   * The email of the customer
   */
  email: string;

  /**
   * The first name of the customer
   */
  firstName: string;

  /**
   * The last name of the customer
   */
  lastName: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  remoteId: string;

  /**
   * The id of the customer in your own primary database or a unique identifier, for
   * example a cookie
   */
  subscriberCustomerId: string;

  /**
   * The display name of the customer
   */
  displayName?: string;
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
   * The email of the customer
   */
  email: string;

  /**
   * The first name of the customer
   */
  firstName: string;

  /**
   * The last name of the customer
   */
  lastName: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  remoteId: string;

  /**
   * The id of the customer in your own primary database or a unique identifier, for
   * example a cookie
   */
  subscriberCustomerId: string;

  /**
   * The display name of the customer
   */
  displayName?: string;
}

export type CustomerTokenResponse = string;

export interface CustomerCreateParams {
  /**
   * The email of the customer
   */
  email: string;

  /**
   * The first name of the customer
   */
  firstName: string;

  /**
   * The last name of the customer
   */
  lastName: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  remoteId: string;

  /**
   * The id of the customer in your own primary database or a unique identifier, for
   * example a cookie
   */
  subscriberCustomerId: string;

  /**
   * The display name of the customer
   */
  displayName?: string;
}

export interface CustomerUpdateParams {
  /**
   * The email of the customer
   */
  email: string;

  /**
   * The first name of the customer
   */
  firstName: string;

  /**
   * The last name of the customer
   */
  lastName: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  remoteId: string;

  /**
   * The id of the customer in your own primary database or a unique identifier, for
   * example a cookie
   */
  subscriberCustomerId: string;

  /**
   * The display name of the customer
   */
  displayName?: string;
}

export interface CustomerTokenParams {
  /**
   * The email of the customer
   */
  email: string;

  /**
   * The first name of the customer
   */
  firstName: string;

  /**
   * The last name of the customer
   */
  lastName: string;

  /**
   * The id of the customer in the ticketing system. For the SDK this needs to be
   * stable and unique
   */
  remoteId: string;

  /**
   * The id of the customer in your own primary database or a unique identifier, for
   * example a cookie
   */
  subscriberCustomerId: string;

  /**
   * The display name of the customer
   */
  displayName?: string;
}

export declare namespace Customer {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerGetResponse as CustomerGetResponse,
    type CustomerTokenResponse as CustomerTokenResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerTokenParams as CustomerTokenParams,
  };
}
