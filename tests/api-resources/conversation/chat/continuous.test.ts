import Lorikeet from '@lorikeetai/node-sdk';
import { generateSignature } from '@lorikeetai/node-sdk/lib/generate-signature';

const clientID = 'My Client ID';
const clientSecret = 'My Client Secret';

describe('resource continuous', () => {
  test('generate: sends the message with client authentication', async () => {
    const body = {
      customerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      publicKey: 'public-key-123',
      message: 'Where is my order?',
      variables: { routingTags: ['uk'] },
    };
    const generated = {
      conversationId: 'conversation-123',
      createdAt: '2026-11-18T00:00:00.000Z',
      events: [],
      latestMessageType: 'CUSTOMER',
      link: 'https://app.lorikeetcx.ai/ticket/conversation-123',
      messages: [],
      status: 'Processing',
      tags: [],
      updatedAt: '2026-11-18T00:00:00.000Z',
      isNewConversation: true,
    };
    const fetchMock = jest.fn(async (_input: string | URL | Request, _init?: RequestInit) => {
      return new Response(JSON.stringify(generated), {
        headers: { 'content-type': 'application/json' },
      });
    });
    const client = new Lorikeet({
      clientID,
      clientSecret,
      baseURL: 'https://api.example.com',
      fetch: fetchMock,
    });

    await expect(client.conversation.chat.continuous.generate(body)).resolves.toEqual(generated);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [input, init] = fetchMock.mock.calls[0]!;
    expect(input.toString()).toBe('https://api.example.com/v1/conversation/chat/continuous/message');
    expect(init?.method).toBe('POST');
    expect(init?.body).toBe(JSON.stringify(body));

    const headers = new Headers(init?.headers);
    expect(headers.get('authorization')).toBe(`Bearer ${clientID}`);
    expect(headers.get('x-lorikeet-signature')).toBe(generateSignature(JSON.stringify(body), clientSecret));
  });
});
