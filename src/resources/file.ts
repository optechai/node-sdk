// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class File extends APIResource {
  retrieve(fileId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/file/${fileId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  upload(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/v1/file/upload', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
