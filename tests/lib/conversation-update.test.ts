import Lorikeet from '@lorikeetai/node-sdk';

const clientID = 'My Client ID';
const clientSecret = 'My Client Secret';

const jsonResponse = (body: unknown) =>
  new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } });

describe('conversation.update', () => {
  test('issues a PATCH with the update body', async () => {
    const updateResponse = {
      conversationId: 'abc123',
      csatCollectedAt: '2024-01-15T10:35:00.000Z',
      csatCollectionMethod: 'api' as const,
      csatDidThatHelp: true,
      csatScore: 5,
      title: 'Billing question',
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

    const response = await client.conversation.update('abc123', {
      csatScore: 5,
      csatCollectedAt: '2024-01-15T10:35:00.000Z',
      csatDidThatHelp: true,
      title: 'Billing question',
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe('https://api.example.com/v1/conversation/abc123');
    expect(init?.method).toBe('PATCH');
    expect(JSON.parse(String(init?.body))).toEqual({
      csatScore: 5,
      csatCollectedAt: '2024-01-15T10:35:00.000Z',
      csatDidThatHelp: true,
      title: 'Billing question',
    });
    expect(response).toEqual(updateResponse);
  });

  test('requires csatScore when csatCollectedAt is present', () => {
    const acceptsParams = (params: Lorikeet.Conversation.ConversationUpdateParams) => params;

    expect(acceptsParams({ csatScore: 1 })).toEqual({ csatScore: 1 });
    expect(acceptsParams({ csatScore: 5, csatCollectedAt: '2024-01-15T10:35:00.000Z' })).toEqual({
      csatScore: 5,
      csatCollectedAt: '2024-01-15T10:35:00.000Z',
    });
    expect(acceptsParams({ csatDidThatHelp: false })).toEqual({ csatDidThatHelp: false });
    expect(acceptsParams({ title: 'Billing question' })).toEqual({ title: 'Billing question' });
    expect(acceptsParams({ csatDidThatHelp: true, title: 'Billing question' })).toEqual({
      csatDidThatHelp: true,
      title: 'Billing question',
    });

    if (false) {
      // @ts-expect-error At least one mutable field is required.
      acceptsParams({});
      // @ts-expect-error csatScore must be an integer from 1 through 5.
      acceptsParams({ csatScore: 0 });
      // @ts-expect-error csatCollectedAt requires csatScore.
      acceptsParams({ csatCollectedAt: '2024-01-15T10:35:00.000Z' });
      // @ts-expect-error csatCollectedAt requires csatScore.
      acceptsParams({ title: 'Billing question', csatCollectedAt: '2024-01-15T10:35:00.000Z' });
      // @ts-expect-error csatCollectedAt requires csatScore.
      acceptsParams({ csatDidThatHelp: true, csatCollectedAt: '2024-01-15T10:35:00.000Z' });
    }
  });
});
