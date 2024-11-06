// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChatAPI from './chat';
import { Chat } from './chat';
import * as EmailAPI from './email';
import { Email } from './email';

export class Conversation extends APIResource {
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

Conversation.Email = Email;
Conversation.Chat = Chat;

export declare namespace Conversation {
  export { Email as Email };

  export { Chat as Chat };
}
