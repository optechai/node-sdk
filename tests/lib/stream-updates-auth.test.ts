import Lorikeet from '@lorikeetai/node-sdk';
import { generateSignature } from '@lorikeetai/node-sdk/lib/generate-signature';
import { EventSource } from 'eventsource';

jest.mock('eventsource', () => ({
  EventSource: jest.fn().mockImplementation(() => ({ addEventListener: jest.fn() })),
}));

const clientID = 'My Client ID';
const clientSecret = 'My Client Secret';

describe('conversation.chat.streamUpdates auth', () => {
  afterEach(() => jest.clearAllMocks());

  test('opens the SSE stream with client_id + empty-body HMAC signature headers', async () => {
    const client = new Lorikeet({ clientID, clientSecret, baseURL: 'https://api.example.com' });

    client.conversation.chat.streamUpdates({ conversationId: 'abc123' });

    expect(EventSource).toHaveBeenCalledTimes(1);
    const [url, options] = (EventSource as unknown as jest.Mock).mock.calls[0]!;
    expect(url).toContain('/v1/ticket/sse/abc123');
    expect(typeof options.fetch).toBe('function');

    const fetchSpy = jest.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null));
    await options.fetch('https://api.example.com/v1/ticket/sse/abc123', {
      headers: { Accept: 'text/event-stream' },
    });

    const passedInit = fetchSpy.mock.calls[0]![1]!;
    const headers = passedInit.headers as Record<string, string>;
    expect(headers['Authorization']).toBe(`Bearer ${clientID}`);
    expect(headers['x-lorikeet-signature']).toBe(generateSignature(undefined, clientSecret));
    expect(headers['Accept']).toBe('text/event-stream'); // eventsource's own headers preserved
    fetchSpy.mockRestore();
  });
});
