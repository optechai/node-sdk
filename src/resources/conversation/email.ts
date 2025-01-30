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
   * The events that have occurred in the conversation. Can be used for deriving more
   * information about the conversation.
   */
  events: Array<EmailGenerateResponse.Event>;

  /**
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'BOT_RESPONSE' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | null;

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: Array<EmailGenerateResponse.Message>;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace EmailGenerateResponse {
  export interface Event {
    /**
     * The ID of the event
     */
    id: string;

    /**
     * The timestamp of the event
     */
    createdAt: string;

    /**
     * Any specific data associated with the event
     */
    data: unknown;

    /**
     * The type of the event
     */
    type:
      | 'ASSIGNED'
      | 'CLOSED'
      | 'ESCALATED'
      | 'ESCALATION_REQUEST'
      | 'PROCESSING_CANCELLED'
      | 'HOSTILE_MESSAGE';
  }

  export interface Message {
    /**
     * The ID of the conversation message
     */
    id: string;

    /**
     * Attachments that were attached to the message
     */
    attachments: Array<Message.Attachment>;

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
    type: 'CUSTOMER' | 'BOT_RESPONSE' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE';
  }

  export namespace Message {
    export interface Attachment {
      /**
       * The name of the attachment
       */
      name: string;

      /**
       * The type of the attachment
       */
      type: string;

      /**
       * The URL of the attachment
       */
      url: string;
    }
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
   * The events that have occurred in the conversation. Can be used for deriving more
   * information about the conversation.
   */
  events: Array<EmailGetResponse.Event>;

  /**
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'BOT_RESPONSE' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | null;

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: Array<EmailGetResponse.Message>;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace EmailGetResponse {
  export interface Event {
    /**
     * The ID of the event
     */
    id: string;

    /**
     * The timestamp of the event
     */
    createdAt: string;

    /**
     * Any specific data associated with the event
     */
    data: unknown;

    /**
     * The type of the event
     */
    type:
      | 'ASSIGNED'
      | 'CLOSED'
      | 'ESCALATED'
      | 'ESCALATION_REQUEST'
      | 'PROCESSING_CANCELLED'
      | 'HOSTILE_MESSAGE';
  }

  export interface Message {
    /**
     * The ID of the conversation message
     */
    id: string;

    /**
     * Attachments that were attached to the message
     */
    attachments: Array<Message.Attachment>;

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
    type: 'CUSTOMER' | 'BOT_RESPONSE' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE';
  }

  export namespace Message {
    export interface Attachment {
      /**
       * The name of the attachment
       */
      name: string;

      /**
       * The type of the attachment
       */
      type: string;

      /**
       * The URL of the attachment
       */
      url: string;
    }
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

  /**
   * The events that have occurred in the conversation. Can be used for deriving more
   * information about the conversation.
   */
  events: Array<EmailStartResponse.Event>;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';
}

export namespace EmailStartResponse {
  export interface Event {
    /**
     * The ID of the event
     */
    id: string;

    /**
     * The timestamp of the event
     */
    createdAt: string;

    /**
     * Any specific data associated with the event
     */
    data: unknown;

    /**
     * The type of the event
     */
    type:
      | 'ASSIGNED'
      | 'CLOSED'
      | 'ESCALATED'
      | 'ESCALATION_REQUEST'
      | 'PROCESSING_CANCELLED'
      | 'HOSTILE_MESSAGE';
  }
}

export interface EmailGenerateParams {
  /**
   * Attachments to be sent with the message
   */
  attachments: Array<EmailGenerateParams.Attachment>;

  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The message to be sent to the user. This endpoint supports markdown.
   */
  message: string;

  /**
   * Any additional customer information, that has changed in the course of the
   * conversation.
   */
  customer?: EmailGenerateParams.Customer;
}

export namespace EmailGenerateParams {
  export interface Attachment {
    /**
     * The name of the attachment
     */
    name: string;

    /**
     * The type of the attachment
     */
    type: string;

    /**
     * The URL of the attachment
     */
    url: string;
  }

  /**
   * Any additional customer information, that has changed in the course of the
   * conversation.
   */
  export interface Customer {
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
  }
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
