// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';

const client = new Lorikeet({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profile', () => {
  test('sync: only required params', async () => {
    const responsePromise = client.customer.profile.sync('123e4567-e89b-12d3-a456-426614174000', {
      data: { foo: 'string' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sync: required and optional params', async () => {
    const response = await client.customer.profile.sync('123e4567-e89b-12d3-a456-426614174000', {
      data: { foo: 'string' },
    });
  });
});
