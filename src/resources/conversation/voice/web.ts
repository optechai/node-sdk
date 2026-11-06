// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Endpoints for managing conversations
 */
export class Web extends APIResource {
  /**
   * Start an in-app voice call for a customer. Join the call from any LiveKit client
   * with the returned `wsUrl` and `token`. Requires server-to-server API credentials.
   *
   * @example
   * ```ts
   * const web = await client.conversation.voice.web.create({
   *   customerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   publicKey: 'publicKey',
   * });
   * ```
   */
  create(body: WebCreateParams, options?: RequestOptions): APIPromise<WebCreateResponse> {
    return this._client.post('/v1/conversation/voice/web/create', { body, ...options });
  }
}

export interface WebCreateResponse {
  /**
   * The ID of the conversation that was created
   */
  conversationId: string;

  /**
   * The LiveKit access token for joining the call
   */
  token: string;

  /**
   * The LiveKit WebSocket URL to connect to
   */
  wsUrl: string;
}

export interface WebCreateParams {
  /**
   * The ID of the agent to use for the call. Cannot be combined with workflowId.
   */
  agentId?: string;

  /**
   * The ID of the customer making the call
   */
  customerId: string;

  /**
   * The public key of the Voice Widget to call through
   */
  publicKey: string;

  /**
   * The ID of the workflow to use for the call. Cannot be combined with agentId.
   */
  workflowId?: string;
}

export declare namespace Web {
  export { type WebCreateResponse as WebCreateResponse, type WebCreateParams as WebCreateParams };
}
