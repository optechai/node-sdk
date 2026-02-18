// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthorizationAPI from './authorization';
import { Authorization } from './authorization';

export class OAuth extends APIResource {
  authorization: AuthorizationAPI.Authorization = new AuthorizationAPI.Authorization(this._client);
}

OAuth.Authorization = Authorization;

export declare namespace OAuth {
  export { Authorization as Authorization };
}
