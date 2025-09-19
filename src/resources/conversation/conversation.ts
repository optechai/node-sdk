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
import * as VoiceAPI from './voice';
import { Voice, VoiceOutboundParams } from './voice';

export class Conversation extends APIResource {
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  voice: VoiceAPI.Voice = new VoiceAPI.Voice(this._client);

  /**
   * @example
   * ```ts
   * const conversation = await client.conversation.create({
   *   phoneNumber: '0412745903',
   *   state: { foo: 'string' },
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

export interface AttachmentDto {
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

export interface TicketEvent {
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
    | 'NEW_TICKET'
    | 'CALL_ENDED';
}

export interface TicketMessageDto {
  /**
   * The ID of the conversation message
   */
  id: string;

  /**
   * Attachments that were attached to the message
   */
  attachments: Array<AttachmentDto>;

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
   * Body param: The phone number of the customer
   */
  phoneNumber: string;

  /**
   * Body param: The custom attributes of the customer - should be provided as key
   * value object
   */
  state: { [key: string]: string | boolean | number | unknown | Array<unknown> };

  /**
   * Header param:
   */
  'x-lorikeet-voice-public-key': string;

  /**
   * Body param: The email of the customer
   */
  email?: string;

  /**
   * Body param: The first name of the customer
   */
  firstName?: string;

  /**
   * Body param: The last name of the customer
   */
  lastName?: string;

  /**
   * Body param: The remoteId of your customer
   */
  remoteId?: string;
}

export interface ConversationRetrieveTranscriptParams {
  'x-lorikeet-voice-public-key': string;
}

Conversation.Email = Email;
Conversation.Chat = Chat;
Conversation.Voice = Voice;

export declare namespace Conversation {
  export {
    type AttachmentDto as AttachmentDto,
    type TicketEvent as TicketEvent,
    type TicketMessageDto as TicketMessageDto,
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

  export { Voice as Voice, type VoiceOutboundParams as VoiceOutboundParams };
}
