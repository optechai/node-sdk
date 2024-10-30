// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource'
import * as Core from '../../core'
import * as ChatAPI from './chat'

export class Chat extends APIResource {
  generate(body: ChatGenerateParams, options?: Core.RequestOptions): Core.APIPromise<ChatGenerateResponse> {
    return this._client.post('/conversation/chat/message', { body, ...options })
  }

  get(query: ChatGetParams, options?: Core.RequestOptions): Core.APIPromise<ChatGetResponse> {
    return this._client.get('/conversation/chat/message', { query, ...options })
  }

  start(body: ChatStartParams, options?: Core.RequestOptions): Core.APIPromise<ChatStartResponse> {
    return this._client.post('/conversation/chat/create', { body, ...options })
  }
}

export interface ChatGenerateResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string

  /**
   * The timestamp of the message
   */
  createdAt: string

  /**
   * The message to be sent
   */
  message: string
}

export interface ChatGetResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string

  /**
   * The timestamp of the message
   */
  createdAt: string

  /**
   * The message to be sent
   */
  message: string
}

export interface ChatStartResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string

  /**
   * The timestamp of the conversation creation
   */
  createdAt: string
}

export interface ChatGenerateParams {
  /**
   * The ID of the conversation
   */
  conversationId: string

  /**
   * The message to be sent
   */
  message: string
}

export interface ChatGetParams {
  conversationId: string

  /**
   * The ID of the conversation
   */
  conversationPollParam: ChatGetParams.ConversationPollParam
}

export namespace ChatGetParams {
  /**
   * The ID of the conversation
   */
  export interface ConversationPollParam {
    /**
     * The ID of the conversation
     */
    conversationId: string
  }
}

export interface ChatStartParams {
  /**
   * The ID of the customer
   */
  customerId: string
}

export namespace Chat {
  export import ChatGenerateResponse = ChatAPI.ChatGenerateResponse
  export import ChatGetResponse = ChatAPI.ChatGetResponse
  export import ChatStartResponse = ChatAPI.ChatStartResponse
  export import ChatGenerateParams = ChatAPI.ChatGenerateParams
  export import ChatGetParams = ChatAPI.ChatGetParams
  export import ChatStartParams = ChatAPI.ChatStartParams
}
