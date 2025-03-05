// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Chat extends APIResource {
  generate(body: ChatGenerateParams, options?: Core.RequestOptions): Core.APIPromise<ChatGenerateResponse> {
    return this._client.post('/v1/conversation/chat/message', { body, ...options });
  }

  get(query: ChatGetParams, options?: Core.RequestOptions): Core.APIPromise<ChatGetResponse> {
    return this._client.get('/v1/conversation/chat/message', { query, ...options });
  }

  start(body: ChatStartParams, options?: Core.RequestOptions): Core.APIPromise<ChatStartResponse> {
    return this._client.post('/v1/conversation/chat/create', { body, ...options });
  }
}

export interface ChatGenerateResponse {
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
  events: Array<ChatGenerateResponse.Event>;

  /**
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'BOT_RESPONSE' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | null;

  /**
   * The url of the conversation in the Lorikeet dashboard
   */
  link: string;

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: Array<ChatGenerateResponse.Message>;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace ChatGenerateResponse {
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

export interface ChatGetResponse {
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
  events: Array<ChatGetResponse.Event>;

  /**
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'BOT_RESPONSE' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | null;

  /**
   * The url of the conversation in the Lorikeet dashboard
   */
  link: string;

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: Array<ChatGetResponse.Message>;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace ChatGetResponse {
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

export interface ChatStartResponse {
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
  events: Array<ChatStartResponse.Event>;

  /**
   * The url of the conversation in the Lorikeet dashboard
   */
  link: string;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';
}

export namespace ChatStartResponse {
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

export interface ChatGenerateParams {
  /**
   * Attachments to be sent with the message
   */
  attachments: Array<ChatGenerateParams.Attachment>;

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
  customer?: ChatGenerateParams.Customer;
}

export namespace ChatGenerateParams {
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
}

export interface ChatGetParams {
  /**
   * The ID of the conversation you need to poll.
   */
  conversationId: string;
}

export interface ChatStartParams {
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

export declare namespace Chat {
  export {
    type ChatGenerateResponse as ChatGenerateResponse,
    type ChatGetResponse as ChatGetResponse,
    type ChatStartResponse as ChatStartResponse,
    type ChatGenerateParams as ChatGenerateParams,
    type ChatGetParams as ChatGetParams,
    type ChatStartParams as ChatStartParams,
  };
}
