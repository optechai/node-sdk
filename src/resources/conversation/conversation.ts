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

export class Conversation extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

Conversation.Chat = Chat;

export declare namespace Conversation {
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
