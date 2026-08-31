// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints for ingesting subscriber data
 */
export class Ingest extends APIResource {
  submit(workflowID: string, params: IngestSubmitParams, options?: RequestOptions): APIPromise<void> {
    const { toolId, ticketId, inputHash, ...body } = params;
    return this._client.post(path`/ingest/${toolId}/${ticketId}/${inputHash}/${workflowID}`, {
      body,
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
  /**
   * Path param
   */
  toolId: string;

  /**
   * Path param
   */
  ticketId: string;

  /**
   * Path param
   */
  inputHash: string;

  /**
   * Body param: The completed asynchronous tool response data.
   */
  data: { [key: string]: unknown };
}

export interface IngestTestParams {
  /**
   * The input data to simulate a test response for.
   */
  inputs: { [key: string]: unknown };

  /**
   * Optional execution environment ID for integration endpoint tools.
   */
  envId?: string;
}

export declare namespace Ingest {
  export { type IngestSubmitParams as IngestSubmitParams, type IngestTestParams as IngestTestParams };
}
