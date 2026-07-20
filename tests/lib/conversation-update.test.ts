import Lorikeet from '@lorikeetai/node-sdk';

const clientID = 'My Client ID';
const clientSecret = 'My Client Secret';

const jsonResponse = (body: unknown) =>
  new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } });

describe('conversation.update', () => {
  test('issues a PATCH to /v1/conversation/:conversationId with the update body', async () => {
    const updateResponse = {
      conversationId: 'abc123',
      csatScore: 5,
      csatCollectedAt: '2024-01-15T10:35:00.000Z',
      csatCollectionMethod: 'api',
      csatDidThatHelp: null,
      title: null,
      updatedAt: '2024-01-15T10:35:00.000Z',
    };
    const fetchMock = jest.fn(async (_url: string | URL | Request, _init?: RequestInit) =>
      jsonResponse(updateResponse),
    );
    const client = new Lorikeet({
      clientID,
      clientSecret,
      baseURL: 'https://api.example.com',
      fetch: fetchMock,
    });

    const response = await client.conversation.update('abc123', { csatScore: 5 });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe('https://api.example.com/v1/conversation/abc123');
    expect(init?.method?.toUpperCase()).toBe('PATCH');
    expect(JSON.parse(String(init?.body))).toEqual({ csatScore: 5 });
    expect(response).toEqual(updateResponse);
  });

  test('passes through all updatable fields', async () => {
    const fetchMock = jest.fn(async (_url: string | URL | Request, _init?: RequestInit) =>
      jsonResponse({
        conversationId: 'abc123',
        csatScore: 4,
        csatCollectedAt: '2024-01-15T10:35:00.000Z',
        csatCollectionMethod: 'api',
        csatDidThatHelp: true,
        title: 'Billing question',
        updatedAt: '2024-01-15T10:35:00.000Z',
      }),
    );
    const client = new Lorikeet({
      clientID,
      clientSecret,
      baseURL: 'https://api.example.com',
      fetch: fetchMock,
    });

    await client.conversation.update('abc123', {
      csatScore: 4,
      csatCollectedAt: '2024-01-15T10:35:00.000Z',
      csatDidThatHelp: true,
      title: 'Billing question',
    });

    const [, init] = fetchMock.mock.calls[0]!;
    expect(JSON.parse(String(init?.body))).toEqual({
      csatScore: 4,
      csatCollectedAt: '2024-01-15T10:35:00.000Z',
      csatDidThatHelp: true,
      title: 'Billing question',
    });
  });
});
