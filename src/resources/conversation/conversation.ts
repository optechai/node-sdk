// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
}

Conversation.Email = Email;
Conversation.Chat = Chat;

export declare namespace Conversation {
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
