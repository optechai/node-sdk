// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { Response } from 'node-fetch';
import Lorikeet from '@lorikeetai/node-sdk';

const client = new Lorikeet({
  clientSecret: 'My Client Secret',
  clientId: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ingest', () => {
  test('retrieve', async () => {
    const responsePromise = client.ingest.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.ingest.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Lorikeet.NotFoundError,
    );
  });

  test('submit', async () => {
    const responsePromise = client.ingest.submit('toolId', 'ticketId', 'inputHash', 'workflowId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ingest.submit('toolId', 'ticketId', 'inputHash', 'workflowId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Lorikeet.NotFoundError);
  });

  test('test: only required params', async () => {
    const responsePromise = client.ingest.test({}, { inputs: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('test: required and optional params', async () => {
    const response = await client.ingest.test(
      {},
      {
        inputs: {},
        envId: 'envId',
      },
    );
  });

  test('validate', async () => {
    const responsePromise = client.ingest.validate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.ingest.validate({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Lorikeet.NotFoundError,
    );
  });
});
