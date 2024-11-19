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
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | 'BOT_RESPONSE';

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: ChatGenerateResponse.Messages;

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace ChatGenerateResponse {
  /**
   * The full list of messages. This endpoint supports markdown.
   */
  export interface Messages {
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
   * The latest message type - useful for polling
   */
  latestMessageType: 'CUSTOMER' | 'PENDING_RESPONSE' | 'DRAFT_RESPONSE' | 'BOT_RESPONSE';

  /**
   * The full list of messages. This endpoint supports markdown.
   */
  messages: ChatGetResponse.Messages;

  /**
   * The timestamp of when the ticket was last updated in our system.
   */
  updatedAt: string;
}

export namespace ChatGetResponse {
  /**
   * The full list of messages. This endpoint supports markdown.
   */
  export interface Messages {
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

export interface ChatStartResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The timestamp of the when the conversation was created in our system.
   */
  createdAt: string;
}

export interface ChatGenerateParams {
  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * The message to be sent to the user. This endpoint supports markdown.
   */
  message: string;
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
