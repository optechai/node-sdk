// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Subscriber extends APIResource {
  /**
   * @example
   * ```ts
   * await client.admin.subscriber.setup({
   *   clerkOrganizationId: '123456',
   *   name: 'Acme Inc.',
   * });
   * ```
   */
  setup(body: SubscriberSetupParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/admin/subscriber/setup', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SubscriberSetupParams {
  /**
   * Clert organization ID
   */
  clerkOrganizationId: string;

  /**
   * Name of the subscriber
   */
  name: string;

  /**
   * Ticket pipeline configuration
   */
  modality?: 'email' | 'chat' | 'phone';

  /**
   * Segmentation strategy
   */
  segmentationStrategy?: string;
}

export declare namespace Subscriber {
  export { type SubscriberSetupParams as SubscriberSetupParams };
}
