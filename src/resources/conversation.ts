// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ConversationAPI from './conversation';

export class Conversation extends APIResource {
  /**
   * Adds a message to an existing conversation using the conversation ID.
   */
  message(
    conversationId: string,
    body: ConversationMessageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationMessageResponse> {
    return this._client.post(`/conversation/${conversationId}/message`, { body, ...options });
  }

  /**
   * Generates a new conversation ID.
   */
  start(options?: Core.RequestOptions): Core.APIPromise<ConversationStartResponse> {
    return this._client.post('/conversation/start', options);
  }
}

export interface ConversationMessageResponse {
  /**
   * The ID of the conversation the message was added to.
   */
  conversationId?: string;

  /**
   * The content of the message.
   */
  message?: string;

  /**
   * The unique identifier of the added message.
   */
  messageId?: string;
}

export interface ConversationStartResponse {
  /**
   * The unique identifier of the created conversation.
   */
  conversationId?: string;
}

export interface ConversationMessageParams {
  /**
   * The message text to add to the conversation.
   */
  message?: string;
}

export namespace Conversation {
  export import ConversationMessageResponse = ConversationAPI.ConversationMessageResponse;
  export import ConversationStartResponse = ConversationAPI.ConversationStartResponse;
  export import ConversationMessageParams = ConversationAPI.ConversationMessageParams;
}
