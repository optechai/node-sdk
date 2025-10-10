// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { pollUntil } from '@lorikeetai/node-sdk/lib/poll-until';
import * as ConversationAPI from './conversation';

export class Email extends APIResource {
  /**
   * @example
   * ```ts
   * const response = await client.conversation.email.generate({
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
  generate(body: EmailGenerateParams, options?: Core.RequestOptions): Core.APIPromise<EmailGenerateResponse> {
    return this._client.post('/v1/conversation/email/message', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const email = await client.conversation.email.get({
   *   conversationId: 'conversationId',
   * });
   * ```
   */
  get(query: EmailGetParams, options?: Core.RequestOptions): Core.APIPromise<EmailGetResponse> {
    return this._client.get('/v1/conversation/email/message', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.conversation.email.start({
   *   customerId: 'customerId',
   *   publicKey: 'publicKey',
   * });
   * ```
   */
  start(body: EmailStartParams, options?: Core.RequestOptions): Core.APIPromise<EmailStartResponse> {
    return this._client.post('/v1/conversation/email/create', { body, ...options });
  }

  /**
   * __chat.get__
   *
   * Polls until it returns a BOT chat message for a conversation.
   */
  poll(query: EmailGetParams, options?: Core.RequestOptions): Core.APIPromise<EmailGetResponse> {
    return pollUntil<EmailGetResponse>(
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
    ) as Core.APIPromise<EmailGetResponse>;
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
  events: Array<ConversationAPI.TicketEvent>;

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
  messages: Array<ConversationAPI.TicketMessageDto>;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';

  /**
   * The tags of the conversation
   */
  tags: Array<string>;

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
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
  events: Array<ConversationAPI.TicketEvent>;

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
  messages: Array<ConversationAPI.TicketMessageDto>;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';

  /**
   * The tags of the conversation
   */
  tags: Array<string>;

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
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
  events: Array<ConversationAPI.TicketEvent>;

  /**
   * The url of the conversation in the Lorikeet dashboard
   */
  link: string;

  /**
   * The status of the conversation
   */
  status: 'Unprocessed' | 'Processing' | 'Unhandled' | 'Responded' | 'Error' | 'Escalated' | 'Processed';

  /**
   * The tags of the conversation
   */
  tags: Array<string>;
}

export interface EmailGenerateParams {
  /**
   * Attachments to be sent with the message
   */
  attachments: Array<ConversationAPI.AttachmentDto>;

  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The message to be sent to the user (customer or agent). This endpoint supports
   * markdown.
   */
  message: string;

  /**
   * Any additional customer information, that has changed in the course of the
   * conversation. Required if the message is sent by the customer to the agent. Must
   * be omitted if the message is sent by the agent to the customer.
   */
  customer?: EmailGenerateParams.Customer;
}

export namespace EmailGenerateParams {
  /**
   * Any additional customer information, that has changed in the course of the
   * conversation. Required if the message is sent by the customer to the agent. Must
   * be omitted if the message is sent by the agent to the customer.
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
   * The subject of the conversation.
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
