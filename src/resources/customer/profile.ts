// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Profile extends APIResource {
  /**
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
  [key: string]: string | boolean | number | unknown | Array<unknown> | null;
};

export interface ProfileSyncParams {
  /**
   * The profile data to update - should be provided as key value object
   */
  data: { [key: string]: string | boolean | number | unknown | Array<unknown> };
}

export declare namespace Profile {
  export { type ProfileSyncResponse as ProfileSyncResponse, type ProfileSyncParams as ProfileSyncParams };
}
