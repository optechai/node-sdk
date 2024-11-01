// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource'
import * as Core from '../core'

export class Token extends APIResource {
  create(body: TokenCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ingest/token', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    })
  }
}

export interface TokenCreateParams {
  /**
   * The email of the user.
   */
  email: string

  /**
   * The first name of the user.
   */
  firstName: string

  /**
   * The last name of the user.
   */
  lastName: string

  /**
   * The unique identifier of the user in your system.
   */
  remoteId: string
}

export declare namespace Token {
  export { type TokenCreateParams as TokenCreateParams }
}
