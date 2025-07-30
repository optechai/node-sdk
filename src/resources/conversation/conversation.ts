// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChatAPI from './chat';
import {
  Chat,
  ChatGenerateParams,
  ChatGenerateResponse,
  ChatGetParams,
  ChatGetResponse,
  ChatStartParams,
  ChatStartResponse,
} from './chat';
import * as EmailAPI from './email';
import {
  Email,
  EmailGenerateParams,
  EmailGenerateResponse,
  EmailGetParams,
  EmailGetResponse,
  EmailStartParams,
  EmailStartResponse,
} from './email';

export class Conversation extends APIResource {
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);

  /**
   * @example
   * ```ts
   * const conversation = await client.conversation.create({
   *   customerId: '1234567890',
   *   phoneNumber: '0412745903',
   *   'x-lorikeet-voice-public-key':
   *     'x-lorikeet-voice-public-key',
   * });
   * ```
   */
  create(
    params: ConversationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationCreateResponse> {
    const { 'x-lorikeet-voice-public-key': xLorikeetVoicePublicKey, ...body } = params;
    return this._client.post('/v1/conversation/new', {
      body,
      ...options,
      headers: { 'x-lorikeet-voice-public-key': xLorikeetVoicePublicKey, ...options?.headers },
    });
  }

  /**
   * @example
   * ```ts
   * const response =
   *   await client.conversation.retrieveTranscript('ticketId', {
   *     'x-lorikeet-voice-public-key':
   *       'x-lorikeet-voice-public-key',
   *   });
   * ```
   */
  retrieveTranscript(
    ticketId: string,
    params: ConversationRetrieveTranscriptParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationRetrieveTranscriptResponse> {
    const { 'x-lorikeet-voice-public-key': xLorikeetVoicePublicKey } = params;
    return this._client.get(`/v1/conversation/transcript/${ticketId}`, {
      ...options,
      headers: { 'x-lorikeet-voice-public-key': xLorikeetVoicePublicKey, ...options?.headers },
    });
  }
}

export interface ConversationCreateResponse {
  /**
   * The id of the ticket created
   */
  ticketId: string;
}

export interface ConversationRetrieveTranscriptResponse {
  /**
   * The custom attributes of the conversation
   */
  customAttributes: unknown;

  /**
   * The transcript of the conversation
   */
  transcript: string;
}

export interface ConversationCreateParams {
  /**
   * Body param: The id of the customer in the ticketing system
   */
  customerId: unknown;

  /**
   * Body param: The phone number of the customer
   */
  phoneNumber: string;

  /**
   * Header param:
   */
  'x-lorikeet-voice-public-key': string;
}

export interface ConversationRetrieveTranscriptParams {
  'x-lorikeet-voice-public-key': string;
}

Conversation.Email = Email;
Conversation.Chat = Chat;

export declare namespace Conversation {
  export {
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationRetrieveTranscriptResponse as ConversationRetrieveTranscriptResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationRetrieveTranscriptParams as ConversationRetrieveTranscriptParams,
  };

  export {
    Email as Email,
    type EmailGenerateResponse as EmailGenerateResponse,
    type EmailGetResponse as EmailGetResponse,
    type EmailStartResponse as EmailStartResponse,
    type EmailGenerateParams as EmailGenerateParams,
    type EmailGetParams as EmailGetParams,
    type EmailStartParams as EmailStartParams,
  };

  export {
    Chat as Chat,
    type ChatGenerateResponse as ChatGenerateResponse,
    type ChatGetResponse as ChatGetResponse,
    type ChatStartResponse as ChatStartResponse,
    type ChatGenerateParams as ChatGenerateParams,
    type ChatGetParams as ChatGetParams,
    type ChatStartParams as ChatStartParams,
  };
}
