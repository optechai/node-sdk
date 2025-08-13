// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { pollUntil } from '@lorikeetai/node-sdk/lib/poll-until';
import * as ConversationAPI from './conversation';

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
   * __chat.poll__
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

  /**
   * __chat.stream__
   *
   * Stream chat events for a conversation over Server-Sent Events (SSE).
   * Returns an async generator that emits decoded text chunks (no parsing).
   * Use with `for await`; don’t `await` the call itself.
   *
   * @template T - Payload type (default: `string`)
   * @param params.conversationId - Conversation/ticket ID to subscribe to.
   * @param options - Optional request options; sets `Accept: text/event-stream`.
   * @returns AsyncGenerator<T>
   */

  /**
   * @example
   * ```ts
   * for await (const evt of client.conversation.chat.stream({ conversationId: 'abc123' })) {
   *   console.log(evt);
   * }
   * ```
   */
  async *stream<T = string>(
    params: ChatStreamParams,
    options?: Core.RequestOptions,
  ): AsyncGenerator<T, void, unknown> {
    // Keep your Prism “required query” workaround if needed; undefined keys will be omitted.
    const responsePromise = this._client.get(`/v1/ticket/sse/${params.conversationId}`, {
      query: {
        sseMessageTypes: undefined,
        ticketEventTypes: undefined,
        ticketMessageTypes: undefined,
      },
      ...options,
      headers: {
        ...(options?.headers ?? {}),
        Accept: 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform', // help avoid proxy buffering
      },
    });

    // Get the raw Response (no JSON parsing)
    const raw = await (responsePromise as Core.APIPromise<void>).asResponse();
    const body: any = raw.body;
    if (!raw.ok || !body) throw new Error(`SSE HTTP ${raw.status}`);

    const decoder = new TextDecoder();

    try {
      if (typeof body.getReader === 'function') {
        const reader = body.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            const text = decoder.decode(value, { stream: true });
            if (text) yield text as unknown as T;
          }
          // flush any remaining decoder state
          const tail = decoder.decode();
          if (tail) yield tail as unknown as T;
        } finally {
          try {
            reader.releaseLock();
          } catch {}
          try {
            await body.cancel?.();
          } catch {}
        }
      } else if (typeof body[Symbol.asyncIterator] === 'function') {
        try {
          for await (const chunk of body as AsyncIterable<Uint8Array | Buffer | string>) {
            const text =
              typeof chunk === 'string' ? chunk : decoder.decode(chunk as Uint8Array, { stream: true });
            if (text) yield text as unknown as T;
          }
          const tail = decoder.decode();
          if (tail) yield tail as unknown as T;
        } finally {
          try {
            body.destroy?.();
          } catch {}
        }
      } else {
        throw new Error('Unsupported response body type for SSE');
      }
    } finally {
      // nothing else to clean
    }
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

export interface ChatStreamParams {
  /**
   * The ID of the conversation you need to stream.
   */
  conversationId: string;
}

export declare namespace Chat {
  export {
    type ChatGenerateResponse as ChatGenerateResponse,
    type ChatGetResponse as ChatGetResponse,
    type ChatStartResponse as ChatStartResponse,
    type ChatGenerateParams as ChatGenerateParams,
    type ChatGetParams as ChatGetParams,
    type ChatStartParams as ChatStartParams,
    type ChatStreamParams as ChatStreamParams,
  };
}
