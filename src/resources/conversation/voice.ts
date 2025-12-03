// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Voice extends APIResource {
  /**
   * @example
   * ```ts
   * await client.conversation.voice.outbound({
   *   phoneNumber: '+61400000000',
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
   * The phone number to call in E.164 format. If a customer ID is not provided, the
   * customer will be looked up by phone number. If no customer is found, a new
   * customer will be created.
   */
  phoneNumber: string;

  /**
   * The ID of the brand to make the call from
   */
  brandId?: string;

  /**
   * The ID of the customer to call. If not provided, the customer will be looked up
   * by phone number. If no customer is found, a new customer will be created.
   */
  customerId?: string;

  /**
   * Input data to pass to workflows. Should include values for input fields defined
   * by both the chosen opening workflow and - if configured - the voicemail detected
   * workflow.
   */
  inputData?: unknown;

  /**
   * The ID of the workflow to use for the call
   */
  workflowId?: string;
}

export declare namespace Voice {
  export { type VoiceOutboundParams as VoiceOutboundParams };
}
