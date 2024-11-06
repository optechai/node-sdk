// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { Response } from 'node-fetch';

const client = new Lorikeet({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customer', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customer.create({
      email: 'lori@keet.com',
      firstName: 'Lori',
      lastName: 'Keet',
      remoteId: '1234567890',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.customer.create({
      email: 'lori@keet.com',
      firstName: 'Lori',
      lastName: 'Keet',
      remoteId: '1234567890',
      displayName: 'Lori Keet',
    });
  });
});
