// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Ingest extends APIResource {
  submit(
    toolId: string,
    ticketId: string,
    inputHash: string,
    workflowId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/ingest/${toolId}/${ticketId}/${inputHash}/${workflowId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

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
    });
  }
}

export interface IngestTestParams {
  /**
   * The input data to simulate a test response for.
   */
  inputs: unknown;

  /**
   * Optional execution environment ID for integration endpoint tools.
   */
  envId?: string;
}

export declare namespace Ingest {
  export { type IngestTestParams as IngestTestParams };
}
