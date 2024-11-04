// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource'
import * as Core from '../core'

export class Ingest extends APIResource {
  test(toolId: unknown, body: IngestTestParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/ingest/test/${toolId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  validate(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ingest/validate', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    })
  }
}

export interface IngestTestParams {
  /**
   * The data to simulate a test response for.
   */
  inputs: unknown;

  /**
   * The subscriber id to simulate a test response for.
   */
  subscriberId: string;
}

export declare namespace Ingest {
  export { type IngestTestParams as IngestTestParams };
}
