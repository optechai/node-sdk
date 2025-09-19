// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { Response } from 'node-fetch';

const client = new Lorikeet({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.conversation.create({
      phoneNumber: '0412745903',
      state: { foo: 'string' },
      'x-lorikeet-voice-public-key': 'x-lorikeet-voice-public-key',
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
    const response = await client.conversation.create({
      phoneNumber: '0412745903',
      state: { foo: 'string' },
      'x-lorikeet-voice-public-key': 'x-lorikeet-voice-public-key',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      remoteId: '1234567890',
    });
  });

  test('retrieveTranscript: only required params', async () => {
    const responsePromise = client.conversation.retrieveTranscript('ticketId', {
      'x-lorikeet-voice-public-key': 'x-lorikeet-voice-public-key',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveTranscript: required and optional params', async () => {
    const response = await client.conversation.retrieveTranscript('ticketId', {
      'x-lorikeet-voice-public-key': 'x-lorikeet-voice-public-key',
    });
  });
});
