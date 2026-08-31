// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints related to customer data
 */
export class Profile extends APIResource {
  /**
   * Replaces the whole profile state from the caller-held `data`. Because this reads
   * as a full replace rather than a merge, callers that only want to change a subset
   * of keys, or need to know which MEMORY-scoped keys were rejected, should use
   * PATCH profile/:id instead. With `observedAt`, a MEMORY-scoped key omitted from
   * `data` is deleted unless its recorded observation is newer than `observedAt`, in
   * which case the previous value is kept.
   *
   * @example
   * ```ts
   * const response = await client.customer.profile.sync(
   *   '123e4567-e89b-12d3-a456-426614174000',
   *   { data: { foo: 'string' } },
   * );
   * ```
   */
  sync(id: string, body: ProfileSyncParams, options?: RequestOptions): APIPromise<ProfileSyncResponse> {
    return this._client.put(path`/v1/customer/profile/${id}`, { body, ...options });
  }
}

export type ProfileSyncResponse = {
  [key: string]: string | boolean | number | { [key: string]: unknown } | Array<unknown> | null;
};

export interface ProfileSyncParams {
  /**
   * The profile data to update - should be provided as key value object. Cannot
   * include the reserved key \_\_lorikeetMemoryObservedAt.
   */
  data: { [key: string]: string | boolean | number | { [key: string]: unknown } | Array<unknown> | null };

  /**
   * For MEMORY-scoped keys only: the wall-clock time these values were observed. A
   * key is skipped in favour of a newer already-recorded observation; use PATCH
   * profile/:id to see which keys were skipped.
   */
  observedAt?: string;
}

export declare namespace Profile {
  export { type ProfileSyncResponse as ProfileSyncResponse, type ProfileSyncParams as ProfileSyncParams };
}
