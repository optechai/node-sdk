// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChatAPI from './chat';

export class Chat extends APIResource {
  /**
   * Retrieves the latest conversation message for a given conversation ID.
   */
  generate(
    conversationId: string,
    body: ChatGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationMessage> {
    return this._client.post(`/conversation/chat/${conversationId}/generate`, { body, ...options });
  }

  /**
   * Retrieves the latest conversation message for a given conversation ID.
   */
  get(conversationId: string, options?: Core.RequestOptions): Core.APIPromise<ConversationMessage> {
    return this._client.get(`/conversation/chat/${conversationId}`, options);
  }

  /**
   * Generates a new conversation ID.
   */
  start(body: ChatStartParams, options?: Core.RequestOptions): Core.APIPromise<ChatStartResponse> {
    return this._client.post('/conversation/chat/start', { body, ...options });
  }
}

export interface ConversationMessage {
  actions?: Array<ConversationMessage.Action>;

  /**
   * The message content.
   */
  message?: string;

  /**
   * The timestamp of the message.
   */
  timestamp?: string;
}

export namespace ConversationMessage {
  export interface Action {
    /**
     * The label of the action.
     */
    label?: string;

    /**
     * The type of action.
     */
    type?: string;

    /**
     * The value of the action.
     */
    value?: string;
  }
}

export interface ChatStartResponse {
  /**
   * The unique identifier of the created conversation.
   */
  conversationId?: string;
}

export type ChatGenerateParams = unknown;

export type ChatStartParams = unknown;

export namespace Chat {
  export import ConversationMessage = ChatAPI.ConversationMessage;
  export import ChatStartResponse = ChatAPI.ChatStartResponse;
  export import ChatGenerateParams = ChatAPI.ChatGenerateParams;
  export import ChatStartParams = ChatAPI.ChatStartParams;
}
