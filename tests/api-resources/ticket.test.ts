// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { Response } from 'node-fetch';

const client = new Lorikeet({
  clientSecret: 'My Client Secret',
  signature: 'My Signature',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ticket', () => {
  test('retrieveSse: only required params', async () => {
    const responsePromise = client.ticket.retrieveSse('ticketId', {
      sseMessageTypes: ['string'],
      ticketEventTypes: ['string'],
      ticketMessageTypes: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveSse: required and optional params', async () => {
    const response = await client.ticket.retrieveSse('ticketId', {
      sseMessageTypes: ['string'],
      ticketEventTypes: ['string'],
      ticketMessageTypes: ['string'],
    });
  });
});
