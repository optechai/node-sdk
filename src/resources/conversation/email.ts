// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Email extends APIResource {
  start(body: EmailStartParams, options?: Core.RequestOptions): Core.APIPromise<EmailStartResponse> {
    return this._client.post('/v1/conversation/email/create', { body, ...options });
  }
}

export interface EmailStartResponse {
  /**
   * The ID of the conversation
   */
  conversationId: unknown;

  /**
   * The timestamp of the when the conversation was created in our system.
   */
  createdAt: string;
}

export interface EmailStartParams {
  /**
   * The ID of the customer. If omitted, a new customer will be created.
   */
  customerId: unknown;

  /**
   * The public key associated with this agent
   */
  publicKey: string;

  /**
   * The timestamp of the when the conversation was created in our system.
   */
  subject?: string;
}

export declare namespace Email {
  export { type EmailStartResponse as EmailStartResponse, type EmailStartParams as EmailStartParams };
}
