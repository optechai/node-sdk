// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints for ingesting Customer Events
 */
export class CustomerEvents extends APIResource {
  /**
   * Ingest a Customer Event. Reusing a source Event ID returns the Event already stored.
   *
   * @example
   * ```ts
   * const event = await client.customerEvents.ingest({
   *   sourceEventId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   eventType: 'payment_failed',
   *   customer: { subscriberCustomerId: 'customer-123' },
   *   data: {
   *     amountMinorUnits: 2500,
   *     currency: 'AUD',
   *     failureCode: 'insufficient_funds',
   *   },
   * });
   * ```
   */
  ingest(body: CustomerEventIngestParams, options?: RequestOptions): APIPromise<CustomerEventIngestResponse> {
    return this._client.post('/v1/customer-events', { body, ...options });
  }
}

export interface CustomerEventIngestResponse {
  /**
   * The Lorikeet ID of the stored Customer Event.
   */
  id: string;

  /**
   * The source Event ID supplied in the request.
   */
  sourceEventId: string;

  /**
   * Whether this request created the Customer Event.
   */
  created: boolean;
}

export interface CustomerEventCustomer {
  /**
   * The Lorikeet Customer ID.
   */
  customerId?: string;

  /**
   * The Customer ID in the Subscriber's ticketing system.
   */
  remoteId?: string;

  /**
   * The Customer ID in the Subscriber's primary system.
   */
  subscriberCustomerId?: string;

  email?: string;

  phoneNumber?: string;
}

export interface CustomerEventPaymentFailedData {
  [key: string]: unknown;

  /**
   * The failed payment amount in the currency's minor unit.
   */
  amountMinorUnits: number;

  /**
   * The three-letter ISO 4217 currency code.
   */
  currency: string;

  /**
   * The source system's failure code.
   */
  failureCode: string;
}

export interface CustomerEventIngestParams {
  /**
   * A stable UUID supplied by the Event producer.
   */
  sourceEventId: string;

  eventType: 'payment_failed';

  customer: CustomerEventCustomer;

  data: CustomerEventPaymentFailedData;

  /**
   * When the Event occurred in the source system. Defaults to receipt time.
   */
  occurredAt?: string;
}

export declare namespace CustomerEvents {
  export {
    type CustomerEventIngestResponse as CustomerEventIngestResponse,
    type CustomerEventCustomer as CustomerEventCustomer,
    type CustomerEventPaymentFailedData as CustomerEventPaymentFailedData,
    type CustomerEventIngestParams as CustomerEventIngestParams,
  };
}
