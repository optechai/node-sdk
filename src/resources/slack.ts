// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Slack extends APIResource {
  retrieveChannels(subscriberId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/slack/channels/${subscriberId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  retrieveInstallation(subscriberId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/slack/install/${subscriberId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
