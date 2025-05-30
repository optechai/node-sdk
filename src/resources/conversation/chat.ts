// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { pollUntil } from '@lorikeetai/node-sdk/lib/poll-until';

export class Chat extends APIResource {
  /**
   * __chat.generate__
   *
   * Generate a chat message for a conversation. This endpoint will return immediately, polling will be required to get the response.
   *
   * The `latestMessageType` field in the response can be used to determine if the response is ready.
   *
   * If the `latestMessageType` is `BOT_RESPONSE`, the response is ready.
   * For a more ergonomic way to poll, use the `message` method.
   *
   * ** WARNING ** This endpoint is not idempotent. If you call it multiple times, you will generate multiple messages.
   *
   * @see {@link Chat.message}
   */

  /**
   * @example
   * ```ts
   * const response = await client.conversation.chat.generate({
   *   attachments: [
   *     {
   *       name: 'example.jpg',
   *       type: 'image/jpeg',
   *       url: 'https://example.com/example.jpg',
   *     },
   *   ],
   *   conversationId: 'conversationId',
   *   message: 'message',
   * });
   * ```
   */
  generate(body: ChatGenerateParams, options?: Core.RequestOptions): Core.APIPromise<ChatGenerateResponse> {
    return this._client.post('/v1/conversation/chat/message', { body, ...options });
  }

  /**
   * __chat.get__
   *
   * Returns a chat message for a conversation. This endpoint will return the latest state of the conversation.
   */

  /**
   * @example
   * ```ts
   * const chat = await client.conversation.chat.get({
   *   conversationId: 'conversationId',
   * });
   * ```
   */
  get(query: ChatGetParams, options?: Core.RequestOptions): Core.APIPromise<ChatGetResponse> {
    return this._client.get('/v1/conversation/chat/message', { query, ...options });
  }

  /**
   * __chat.start__
   *
   * Start a chat conversation. This endpoint will return immediately.
   *
   * The `conversationId` field in the response can be used to generate messages.
   *
   * ** WARNING ** This endpoint is not idempotent. If you call it multiple times, you will generate multiple conversations.
   */

  /**
   * @example
   * ```ts
   * const response = await client.conversation.chat.start({
   *   customerId: 'customerId',
   *   publicKey: 'publicKey',
   * });
   * ```
   */
  start(body: ChatStartParams, options?: Core.RequestOptions): Core.APIPromise<ChatStartResponse> {
    return this._client.post('/v1/conversation/chat/create', { body, ...options });
  }

  /**
   * Returns a chat message for a conversation. This endpoint will poll until a response is ready.
   *
   * When it return the response is the latest message type that is of type `BOT_RESPONSE`.
   *
   * @see {@link Chat.poll}
   */
  message(body: ChatGenerateParams, options?: Core.RequestOptions): Core.APIPromise<ChatGetResponse> {
    return this.generate(body, options).then((response) =>
      this.poll({ conversationId: response.conversationId }, options),
    ) as Core.APIPromise<ChatGetResponse>;
  }

  /**
   * __chat.get__
   *
   * Polls until it returns a BOT chat message for a conversation.
   */
  poll(query: ChatGetParams, options?: Core.RequestOptions): Core.APIPromise<ChatGetResponse> {
    return pollUntil<ChatGetResponse>(
      () => this._client.get('/v1/conversation/chat/message', { query, ...options }),
      {
        timeout: options?.timeout || 180_000,
        interval: 2_000,
        condition: (conversation) => {
          // Don't poll if the conversation is escalated or in error
          if (conversation.status === 'Escalated' || conversation.status === 'Error') {
            return true;
          }

          if (
            conversation.latestMessageType === 'BOT_RESPONSE' ||
            conversation.latestMessageType === 'PENDING_RESPONSE'
          ) {
            return true;
          }

          return false;
        },
      },
    ) as Core.APIPromise<ChatGetResponse>;
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
      | 'HOSTILE_MESSAGE'
      | 'NEW_TICKET';
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
      | 'HOSTILE_MESSAGE'
      | 'NEW_TICKET';
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
      | 'HOSTILE_MESSAGE'
      | 'NEW_TICKET';
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
