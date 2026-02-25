// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationAPI from './conversation';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { pollUntil } from '../../lib/poll-until';
import { DeferredAsyncIterable } from '../../lib/promise';
import { EventSource } from 'eventsource';

export class Chat extends APIResource {
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
  generate(body: ChatGenerateParams, options?: RequestOptions): APIPromise<ChatGenerateResponse> {
    return this._client.post('/v1/conversation/chat/message', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const chat = await client.conversation.chat.get({
   *   conversationId: 'conversationId',
   * });
   * ```
   */
  get(query: ChatGetParams, options?: RequestOptions): APIPromise<ChatGetResponse> {
    return this._client.get('/v1/conversation/chat/message', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.conversation.chat.start({
   *   customerId: 'customerId',
   *   publicKey: 'publicKey',
   * });
   * ```
   */
  start(body: ChatStartParams, options?: RequestOptions): APIPromise<ChatStartResponse> {
    return this._client.post('/v1/conversation/chat/create', { body, ...options });
  }

  /**
   * Send a message and poll until a response is ready.
   *
   * This is a convenience wrapper that calls {@link Chat.generate} then {@link Chat.poll}.
   */
  message(body: ChatGenerateParams, options?: RequestOptions): APIPromise<ChatGetResponse> {
    return this.generate(body, options).then((response) =>
      this.poll({ conversationId: response.conversationId }, options),
    ) as APIPromise<ChatGetResponse>;
  }

  /**
   * Poll until the conversation has a bot response ready.
   *
   * Stops when `latestMessageType` is `BOT_RESPONSE` or `PENDING_RESPONSE`,
   * or when `status` is `Escalated` or `Error`.
   */
  poll(query: ChatGetParams, options?: RequestOptions): APIPromise<ChatGetResponse> {
    return pollUntil<ChatGetResponse>(
      () => this._client.get('/v1/conversation/chat/message', { query, ...options }),
      {
        timeout: options?.timeout || 180_000,
        interval: 2_000,
        condition: (conversation) => {
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
    ) as APIPromise<ChatGetResponse>;
  }

  /**
   * Create a persistent stream of updates for a conversation.
   *
   * Responses from the bot will arrive as events. Consuming clients must aggregate
   * multiple chunks into a single message based on the `messageId` field.
   *
   * This stream is open indefinitely and does not automatically close — avoid
   * blocking other operations while listening to events from this generator.
   *
   * @example
   * ```ts
   * for await (const evt of client.conversation.chat.streamUpdates({ conversationId: 'abc123' })) {
   *   console.log(evt);
   * }
   * ```
   */
  streamUpdates(params: ChatStreamParams): AsyncIterable<ChatStreamEvent> {
    const queries = new URLSearchParams();
    queries.set('sseMessageTypes', 'new-message,message-chunk,message-complete');
    queries.set('ticketMessageTypes', 'BOT_RESPONSE');
    const url = `${this._client.baseURL}/v1/ticket/sse/${params.conversationId}?${queries.toString()}`;
    const eventSource = new EventSource(url);
    const output = new DeferredAsyncIterable<ChatStreamEvent>();

    eventSource.addEventListener('error', (evt) => {
      output.reject(evt);
    });

    eventSource.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      switch (data.type) {
        case 'new-message':
          output.push({
            type: 'new-message',
            createdAt: data.createdAt,
            messageId: data.messageId,
            content: data.content,
          });
          break;
        case 'message-chunk':
          output.push({
            type: 'message-chunk',
            contentDelta: data.contentDelta,
            messageId: data.messageId,
          });
          break;
        case 'message-complete':
          output.push({
            type: 'message-complete',
            messageId: data.messageId,
          });
          break;
        default:
          break;
      }
    });

    return output;
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

export interface ChatGenerateParams {
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
  customer?: ChatGenerateParams.Customer;

  /**
   * The variables to be passed to the conversation - this can be used by workflows
   */
  variables?: { [key: string]: unknown };
}

export namespace ChatGenerateParams {
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
     * The phone number of the customer (in international / E.164 format)
     */
    phoneNumber?: string;

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
   * The subject of the conversation.
   */
  subject?: string;

  /**
   * The UUID of the workflow to trigger.
   */
  workflowId?: string;
}

export interface ChatStreamParams {
  /**
   * The ID of the conversation you need to stream.
   */
  conversationId: string;
}

/**
 * Signal that a new response message has been created and new chunks
 * for this response for the messageId will follow.
 */
export interface ChatStreamNewMessageEvent {
  type: 'new-message';
  createdAt: string;
  messageId: string;
  content: string;
}

/**
 * A chunk of text response for the message with the given messageId.
 */
export interface ChatStreamMessageChunkEvent {
  type: 'message-chunk';
  contentDelta: string;
  messageId: string;
}

/**
 * All chunks for a message have been received and no more chunks will follow for this message.
 */
export interface ChatStreamMessageCompleteEvent {
  type: 'message-complete';
  messageId: string;
}

export type ChatStreamEvent =
  | ChatStreamNewMessageEvent
  | ChatStreamMessageChunkEvent
  | ChatStreamMessageCompleteEvent;

export declare namespace Chat {
  export {
    type ChatGenerateResponse as ChatGenerateResponse,
    type ChatGetResponse as ChatGetResponse,
    type ChatStartResponse as ChatStartResponse,
    type ChatGenerateParams as ChatGenerateParams,
    type ChatGetParams as ChatGetParams,
    type ChatStartParams as ChatStartParams,
    type ChatStreamParams as ChatStreamParams,
    type ChatStreamEvent as ChatStreamEvent,
    type ChatStreamNewMessageEvent as ChatStreamNewMessageEvent,
    type ChatStreamMessageChunkEvent as ChatStreamMessageChunkEvent,
    type ChatStreamMessageCompleteEvent as ChatStreamMessageCompleteEvent,
  };
}
