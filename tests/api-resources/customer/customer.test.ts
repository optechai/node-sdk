// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { generateSignature } from '@lorikeetai/node-sdk/lib/generate-signature';

const client = new Lorikeet({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customer', () => {
  test('create', async () => {
    const responsePromise = client.customer.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.customer.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateConsent: sends the typed update with client authentication', async () => {
    const body = {
      customerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      channelType: 'VOICE' as const,
      consentStatus: 'OPTED_OUT' as const,
      source: 'crm_sync',
      effectiveAt: '2026-08-17T10:00:00.000Z',
    };
    const fetchMock = jest.fn(async (_input: string | URL | Request, _init?: RequestInit) => {
      return new Response(
        JSON.stringify({
          id: '282bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ...body,
          expiresAt: null,
          createdAt: '2026-08-17T10:00:01.000Z',
          updatedAt: '2026-08-17T10:00:01.000Z',
        }),
        { headers: { 'content-type': 'application/json' } },
      );
    });
    const authenticatedClient = new Lorikeet({
      clientID: 'My Client ID',
      clientSecret: 'My Client Secret',
      baseURL: 'https://api.example.com',
      fetch: fetchMock,
    });

    await expect(authenticatedClient.customer.updateConsent(body)).resolves.toMatchObject({
      customerId: body.customerId,
      consentStatus: 'OPTED_OUT',
    });
    const [input, init] = fetchMock.mock.calls[0]!;
    expect(input.toString()).toBe('https://api.example.com/v1/customer/consent');
    expect(init?.method).toBe('PUT');
    expect(init?.body).toBe(JSON.stringify(body));

    const headers = new Headers(init?.headers);
    expect(headers.get('authorization')).toBe('Bearer My Client ID');
    expect(headers.get('x-lorikeet-signature')).toBe(
      generateSignature(JSON.stringify(body), 'My Client Secret'),
    );
  });

  test('get', async () => {
    const responsePromise = client.customer.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customer.get(
        {
          email: 'email',
          externalUserId: 'externalUserId',
          phoneNumber: 'phoneNumber',
          remoteId: 'remoteId',
          subscriberCustomerId: 'subscriberCustomerId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Lorikeet.NotFoundError);
  });

  test('token', async () => {
    const responsePromise = client.customer.token({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
