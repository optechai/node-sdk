// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lorikeet from '@lorikeetai/node-sdk';
import { generateSignature } from '@lorikeetai/node-sdk/lib/generate-signature';

const clientID = 'My Client ID';
const clientSecret = 'My Client Secret';

describe('resource web', () => {
  test('create: sends the call request with client authentication', async () => {
    const body = {
      customerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      publicKey: 'public-key-123',
      agentId: 'agent-123',
    };
    const created = {
      conversationId: 'conversation-123',
      wsUrl: 'wss://livekit.example.com',
      token: 'livekit-token',
    };
    const fetchMock = jest.fn(async (_input: string | URL | Request, _init?: RequestInit) => {
      return new Response(JSON.stringify(created), {
        headers: { 'content-type': 'application/json' },
      });
    });
    const client = new Lorikeet({
      clientID,
      clientSecret,
      baseURL: 'https://api.example.com',
      fetch: fetchMock,
    });

    await expect(client.conversation.voice.web.create(body)).resolves.toEqual(created);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [input, init] = fetchMock.mock.calls[0]!;
    expect(input.toString()).toBe('https://api.example.com/v1/conversation/voice/web/create');
    expect(init?.method).toBe('POST');
    expect(init?.body).toBe(JSON.stringify(body));

    const headers = new Headers(init?.headers);
    expect(headers.get('authorization')).toBe(`Bearer ${clientID}`);
    expect(headers.get('x-lorikeet-signature')).toBe(generateSignature(JSON.stringify(body), clientSecret));
  });
});
