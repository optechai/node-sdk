// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Ticket extends APIResource {
  retrieveSse(
    ticketId: string,
    query: TicketRetrieveSseParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/v1/ticket/sse/${ticketId}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface TicketRetrieveSseParams {
  sseMessageTypes: Array<string>;

  ticketEventTypes: Array<string>;

  ticketMessageTypes: Array<string>;
}

export declare namespace Ticket {
  export { type TicketRetrieveSseParams as TicketRetrieveSseParams };
}
