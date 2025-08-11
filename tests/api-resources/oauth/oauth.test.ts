// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { Response } from 'node-fetch';

const client = new Lorikeet({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  test('authorize: only required params', async () => {
    const responsePromise = client.oauth.authorize({ client_id: 'client_id', redirect_uri: 'redirect_uri' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('authorize: required and optional params', async () => {
    const response = await client.oauth.authorize({ client_id: 'client_id', redirect_uri: 'redirect_uri' });
  });

  test('callback: only required params', async () => {
    const responsePromise = client.oauth.callback({ code: 'code', state: 'state' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('callback: required and optional params', async () => {
    const response = await client.oauth.callback({ code: 'code', state: 'state' });
  });

  test('createToken', async () => {
    const responsePromise = client.oauth.createToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createToken: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.oauth.createToken({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Lorikeet.NotFoundError,
    );
  });

  test('revokeToken', async () => {
    const responsePromise = client.oauth.revokeToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revokeToken: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.oauth.revokeToken({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Lorikeet.NotFoundError,
    );
  });
});
