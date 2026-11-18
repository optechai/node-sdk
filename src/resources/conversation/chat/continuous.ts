import { APIResource } from '../../../core/resource';
import * as ChatAPI from '../chat';
import * as ConversationAPI from '../conversation';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Preview: one continuous conversation per customer on a chat channel. Enabled
 * per account and may change before general release.
 */
export class Continuous extends APIResource {
  /**
   * Send a customer message without a `conversationId`. Lorikeet adds it to the
   * customer's current conversation on the channel, or starts a new one, and
   * returns the conversation it used.
   *
   * Replies arrive through `MESSAGE_SENT` webhooks, or poll
   * {@link ChatAPI.Chat.get} with the returned `conversationId`.
   *
   * @example
   * ```ts
   * const response = await client.conversation.chat.continuous.generate({
   *   customerId: 'customerId',
   *   publicKey: 'publicKey',
   *   message: 'message',
   * });
   * ```
   */
  generate(body: ContinuousGenerateParams, options?: RequestOptions): APIPromise<ContinuousGenerateResponse> {
    return this._client.post('/v1/conversation/chat/continuous/message', { body, ...options });
  }
}

export interface ContinuousGenerateResponse extends ChatAPI.ChatGenerateResponse {
  /**
   * Whether this message started a new conversation
   */
  isNewConversation: boolean;
}

export interface ContinuousGenerateParams {
  /**
   * The ID of the customer whose current conversation receives the message
   */
  customerId: string;

  /**
   * The public key of the chat channel. Each channel has its own conversation per
   * customer.
   */
  publicKey: string;

  /**
   * The message sent by the customer. This endpoint supports markdown.
   */
  message: string;

  /**
   * Attachments to be sent with the message
   */
  attachments?: Array<ConversationAPI.AttachmentDto>;

  /**
   * Any additional customer information that has changed in the course of the
   * conversation
   */
  customer?: ChatAPI.ChatGenerateParams.Customer;

  /**
   * The variables to be passed to the conversation - this can be used by workflows
   */
  variables?: { [key: string]: unknown };
}

export declare namespace Continuous {
  export {
    type ContinuousGenerateResponse as ContinuousGenerateResponse,
    type ContinuousGenerateParams as ContinuousGenerateParams,
  };
}
