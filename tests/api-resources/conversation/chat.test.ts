// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { Response } from 'node-fetch';

const client = new Lorikeet({
  clientSecret: 'My Client Secret',
  clientId: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  test('generate: only required params', async () => {
    const responsePromise = client.conversation.chat.generate({
      attachments: [{ name: 'example.jpg', type: 'image/jpeg', url: 'https://example.com/example.jpg' }],
      conversationId: 'conversationId',
      message: 'message',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generate: required and optional params', async () => {
    const response = await client.conversation.chat.generate({
      attachments: [{ name: 'example.jpg', type: 'image/jpeg', url: 'https://example.com/example.jpg' }],
      conversationId: 'conversationId',
      message: 'message',
      customer: {
        avatarUrl: 'https://example.com/image.jpg',
        displayName: 'Lori Keet',
        email: 'lori@keet.com',
        firstName: 'Lori',
        lastName: 'Keet',
        phoneNumber: '+14155552671',
        remoteId: '1234567890',
        subscriberCustomerId: '1234567890',
        subscriberToken: 'subscriberToken',
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.conversation.chat.get({ conversationId: 'conversationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.conversation.chat.get({ conversationId: 'conversationId' });
  });

  test('start: only required params', async () => {
    const responsePromise = client.conversation.chat.start({
      customerId: 'customerId',
      publicKey: 'publicKey',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('start: required and optional params', async () => {
    const response = await client.conversation.chat.start({
      customerId: 'customerId',
      publicKey: 'publicKey',
      subject: 'Question about order tracking number',
    });
  });
});
