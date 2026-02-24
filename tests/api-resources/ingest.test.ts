// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';

const client = new Lorikeet({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ingest', () => {
  test('submit: only required params', async () => {
    const responsePromise = client.ingest.submit('workflowId', {
      toolId: 'toolId',
      ticketId: 'ticketId',
      inputHash: 'inputHash',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submit: required and optional params', async () => {
    const response = await client.ingest.submit('workflowId', {
      toolId: 'toolId',
      ticketId: 'ticketId',
      inputHash: 'inputHash',
    });
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
});
