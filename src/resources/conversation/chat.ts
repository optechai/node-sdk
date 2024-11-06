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
  conversationId: unknown;

  /**
   * The timestamp of when the message was created in our system.
   */
  createdAt: string;

  /**
   * The message to be sent back to the user. If empty, the message is still being
   * processed.
   */
  message: string;
}

export interface ChatGetResponse {
  /**
   * The ID of the conversation
   */
  conversationId: unknown;

  /**
   * The timestamp of when the message was created in our system.
   */
  createdAt: string;

  /**
   * The message to be sent back to the user. If empty, the message is still being
   * processed.
   */
  message: string;
}

export interface ChatStartResponse {
  /**
   * The ID of the conversation
   */
  conversationId: unknown;

  /**
   * The timestamp of the when the conversation was created in our system.
   */
  createdAt: string;
}

export interface ChatGenerateParams {
  /**
   * The ID of the conversation
   */
  conversationId: unknown;

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
  customerId: unknown;

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
