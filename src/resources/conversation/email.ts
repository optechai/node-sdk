// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Email extends APIResource {
  generate(body: EmailGenerateParams, options?: Core.RequestOptions): Core.APIPromise<EmailGenerateResponse> {
    return this._client.post('/v1/conversation/email/message', { body, ...options });
  }

  get(query: EmailGetParams, options?: Core.RequestOptions): Core.APIPromise<EmailGetResponse> {
    return this._client.get('/v1/conversation/email/message', { query, ...options });
  }

  start(body: EmailStartParams, options?: Core.RequestOptions): Core.APIPromise<EmailStartResponse> {
    return this._client.post('/v1/conversation/email/create', { body, ...options });
  }
}

export interface EmailGenerateResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The timestamp of the when the conversation was created in our system.
   */
  createdAt: string;

  /**
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | 'BOT_RESPONSE';

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: Array<EmailGenerateResponse.Message>;

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace EmailGenerateResponse {
  export interface Message {
    /**
     * The ID of the conversation message
     */
    id: string;

    /**
     * The content of the message. Markdown on plain text.
     */
    content: string;

    /**
     * The timestamp of the message.
     */
    createdAt: string;

    /**
     * The raw content of the message. Usually HTML.
     */
    rawContent: string;

    /**
     * The type of the message
     */
    type: 'CUSTOMER' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | 'BOT_RESPONSE';
  }
}

export interface EmailGetResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The timestamp of the when the conversation was created in our system.
   */
  createdAt: string;

  /**
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | 'BOT_RESPONSE';

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: Array<EmailGetResponse.Message>;

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace EmailGetResponse {
  export interface Message {
    /**
     * The ID of the conversation message
     */
    id: string;

    /**
     * The content of the message. Markdown on plain text.
     */
    content: string;

    /**
     * The timestamp of the message.
     */
    createdAt: string;

    /**
     * The raw content of the message. Usually HTML.
     */
    rawContent: string;

    /**
     * The type of the message
     */
    type: 'CUSTOMER' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | 'BOT_RESPONSE';
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

export interface EmailGenerateParams {
  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The message to be sent to the user. This endpoint supports markdown.
   */
  message: string;
}

export interface EmailGetParams {
  /**
   * The ID of the conversation you need to poll.
   */
  conversationId: string;
}

export interface EmailStartParams {
  /**
   * The ID of the customer. If omitted, a new customer will be created.
   */
  customerId: string;

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
  export {
    type EmailGenerateResponse as EmailGenerateResponse,
    type EmailGetResponse as EmailGetResponse,
    type EmailStartResponse as EmailStartResponse,
    type EmailGenerateParams as EmailGenerateParams,
    type EmailGetParams as EmailGetParams,
    type EmailStartParams as EmailStartParams,
  };
}
