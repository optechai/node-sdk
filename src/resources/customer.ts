// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Customer extends APIResource {
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerCreateResponse> {
    return this._client.post('/v1/customer', { body, ...options });
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
  id: unknown;

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
   * The id of the customer in the subscriber system
   */
  remoteId: string;

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
   * The id of the customer in the subscriber system
   */
  remoteId: string;

  /**
   * The display name of the customer
   */
  displayName?: string;
}

export interface CustomerTokenParams {
  /**
   * The email of the user.
   */
  email: string;

  /**
   * The first name of the user.
   */
  firstName: string;

  /**
   * The last name of the user.
   */
  lastName: string;

  /**
   * The unique identifier of the user in your ticketing system.
   */
  remoteId: string;
}

export declare namespace Customer {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerTokenResponse as CustomerTokenResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerTokenParams as CustomerTokenParams,
  };
}
