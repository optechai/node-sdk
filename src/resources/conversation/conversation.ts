// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource'
import * as ChatAPI from './chat'

export class Conversation extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client)
}

export namespace Conversation {
  export import Chat = ChatAPI.Chat
  export import ChatGenerateResponse = ChatAPI.ChatGenerateResponse
  export import ChatGetResponse = ChatAPI.ChatGetResponse
  export import ChatStartResponse = ChatAPI.ChatStartResponse
  export import ChatGenerateParams = ChatAPI.ChatGenerateParams
  export import ChatGetParams = ChatAPI.ChatGetParams
  export import ChatStartParams = ChatAPI.ChatStartParams
}
