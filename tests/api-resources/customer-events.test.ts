// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { generateSignature } from '@lorikeetai/node-sdk/lib/generate-signature';

const clientID = 'My Client ID';
const clientSecret = 'My Client Secret';

describe('resource customerEvents', () => {
  test('ingest: sends the typed Event with client authentication', async () => {
    const sourceEventId = '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e';
    const body = {
      sourceEventId,
      eventType: 'payment_failed' as const,
      occurredAt: '2026-08-13T03:00:00.000Z',
      customer: { subscriberCustomerId: 'customer-123' },
      data: {
        amountMinorUnits: 2500,
        currency: 'AUD',
        failureCode: 'insufficient_funds',
      },
    };
    const fetchMock = jest.fn(async (_input: string | URL | Request, _init?: RequestInit) => {
      return new Response(JSON.stringify({ id: 'event-123', sourceEventId, created: true }), {
        headers: { 'content-type': 'application/json' },
      });
    });
    const client = new Lorikeet({
      clientID,
      clientSecret,
      baseURL: 'https://api.example.com',
      fetch: fetchMock,
    });

    await expect(client.customerEvents.ingest(body)).resolves.toEqual({
      id: 'event-123',
      sourceEventId,
      created: true,
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [input, init] = fetchMock.mock.calls[0]!;
    expect(input.toString()).toBe('https://api.example.com/v1/customer-events');
    expect(init?.method).toBe('POST');
    expect(init?.body).toBe(JSON.stringify(body));

    const headers = new Headers(init?.headers);
    expect(headers.get('authorization')).toBe(`Bearer ${clientID}`);
    expect(headers.get('x-lorikeet-signature')).toBe(generateSignature(JSON.stringify(body), clientSecret));
  });
});
