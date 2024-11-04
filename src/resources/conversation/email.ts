// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Email extends APIResource {
  start(body: EmailStartParams, options?: Core.RequestOptions): Core.APIPromise<EmailStartResponse> {
    return this._client.post('/conversation/email/create', { body, ...options });
  }
}

export interface EmailStartResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The timestamp of the when the conversation was created in our system.
   */
  createdAt: string;
}

export interface EmailStartParams {
  /**
   * The ID of the customer. If omitted, a new customer will be created.
   */
  customerId: string;
}

export declare namespace Email {
  export { type EmailStartResponse as EmailStartResponse, type EmailStartParams as EmailStartParams };
}
