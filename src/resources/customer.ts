// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Customer extends APIResource {
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerCreateResponse> {
    return this._client.post('/v1/customer', { body, ...options });
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
  remoteId: unknown;

  /**
   * The display name of the customer
   */
  displayName?: string;
}

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
  remoteId: unknown;

  /**
   * The display name of the customer
   */
  displayName?: string;
}

export declare namespace Customer {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerCreateParams as CustomerCreateParams,
  };
}
