// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';
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
import { Voice, VoiceOutboundParams, VoiceOutboundResponse } from './voice';

export class Conversation extends APIResource {
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  voice: VoiceAPI.Voice = new VoiceAPI.Voice(this._client);

  /**
   * Update fields on a conversation, such as a CSAT score collected in your own UI.
   * Requires server-to-server API credentials.
   *
   * @example
   * ```ts
   * const conversation = await client.conversation.update(
   *   'conversationId',
   *   { csatScore: 5 },
   * );
   * ```
   */
  update(
    conversationID: string,
    body: ConversationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationUpdateResponse> {
    return this._client.patch(path`/v1/conversation/${conversationID}`, { body, ...options });
  }
}

export interface ConversationUpdateParams {
  /**
   * Customer satisfaction score for the conversation, from 1 (very dissatisfied) to
   * 5 (very satisfied). Use this to record a CSAT response collected in your own UI.
   */
  csatScore?: number;

  /**
   * When the CSAT response was collected (ISO 8601 format). Defaults to the time of
   * the request. Requires csatScore.
   */
  csatCollectedAt?: string;

  /**
   * The customer's answer to a "did that help?" style prompt.
   */
  csatDidThatHelp?: boolean;

  /**
   * The title of the conversation.
   */
  title?: string;
}

export interface ConversationUpdateResponse {
  /**
   * The ID of the conversation
   */
  conversationId: string;

  /**
   * Customer satisfaction score for the conversation
   */
  csatScore: number | null;

  /**
   * When the CSAT response was collected (ISO 8601 format)
   */
  csatCollectedAt: string | null;

  /**
   * How the CSAT was collected
   */
  csatCollectionMethod: 'workflow' | 'widget_inactivity' | 'widget_close' | 'api' | null;

  /**
   * The customer's answer to a "did that help?" style prompt
   */
  csatDidThatHelp: boolean | null;

  /**
   * The title of the conversation
   */
  title: string | null;

  /**
   * The timestamp of when the conversation was last updated in our system.
   */
  updatedAt: string;
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

Conversation.Email = Email;
Conversation.Chat = Chat;
Conversation.Voice = Voice;

export declare namespace Conversation {
  export {
    type AttachmentDto as AttachmentDto,
    type TicketEvent as TicketEvent,
    type TicketMessageDto as TicketMessageDto,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationUpdateResponse as ConversationUpdateResponse,
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

  export {
    Voice as Voice,
    type VoiceOutboundResponse as VoiceOutboundResponse,
    type VoiceOutboundParams as VoiceOutboundParams,
  };
}
