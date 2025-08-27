// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { Response } from 'node-fetch';

const client = new Lorikeet({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource voice', () => {
  test('outbound: only required params', async () => {
    const responsePromise = client.conversation.voice.outbound({
      phoneNumber: '+61400000000',
      workflowId: 'workflowId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('outbound: required and optional params', async () => {
    const response = await client.conversation.voice.outbound({
      phoneNumber: '+61400000000',
      workflowId: 'workflowId',
      brandId: 'brandId',
      inputData: {},
    });
  });
});
