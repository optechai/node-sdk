// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Ingest extends APIResource {
  submit(workflowID: string, params: IngestSubmitParams, options?: RequestOptions): APIPromise<void> {
    const { toolId, ticketId, inputHash } = params;
    return this._client.post(path`/ingest/${toolId}/${ticketId}/${inputHash}/${workflowID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  test(toolID: string, body: IngestTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ingest/test/${toolID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  validate(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ingest/validate', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IngestSubmitParams {
  toolId: string;

  ticketId: string;

  inputHash: string;
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
  export { type IngestSubmitParams as IngestSubmitParams, type IngestTestParams as IngestTestParams };
}
