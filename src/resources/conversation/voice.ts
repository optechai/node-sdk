// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Voice extends APIResource {
  /**
   * @example
   * ```ts
   * await client.conversation.voice.outbound({
   *   phoneNumber: '+61400000000',
   *   workflowId: 'workflowId',
   * });
   * ```
   */
  outbound(body: VoiceOutboundParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/conversation/voice/outbound', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface VoiceOutboundParams {
  /**
   * The phone number to call
   */
  phoneNumber: string;

  /**
   * The ID of the workflow to use for the call
   */
  workflowId: string;

  /**
   * The ID of the brand to make the call from
   */
  brandId?: string;

  /**
   * The input data to pass to the workflow
   */
  inputData?: unknown;
}

export declare namespace Voice {
  export { type VoiceOutboundParams as VoiceOutboundParams };
}
