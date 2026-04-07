import { describe, it, expect, vi, afterEach } from 'vitest';
import { onRequestPost } from '../../functions/api/empfehlung';

const mockEnv = { OPENROUTER_API_KEY: 'test-key' };

function makeRequest(body: unknown): Request {
  return new Request('https://example.com/api/empfehlung', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('onRequestPost', () => {
  it('returns 400 for missing gefuehl', async () => {
    const res = await onRequestPost({ request: makeRequest({}), env: mockEnv });
    expect(res.status).toBe(400);
    const body = await res.json() as { error: string };
    expect(body.error).toMatch(/beschreib/i);
  });

  it('returns 400 for whitespace-only gefuehl', async () => {
    const res = await onRequestPost({ request: makeRequest({ gefuehl: '   ' }), env: mockEnv });
    expect(res.status).toBe(400);
  });

  it('returns 400 for invalid JSON body', async () => {
    const request = new Request('https://example.com/api/empfehlung', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not json',
    });
    const res = await onRequestPost({ request, env: mockEnv });
    expect(res.status).toBe(400);
  });

  it('returns 500 when API key is missing', async () => {
    const res = await onRequestPost({
      request: makeRequest({ gefuehl: 'Ich bin gestresst.' }),
      env: { OPENROUTER_API_KEY: '' },
    });
    expect(res.status).toBe(500);
  });

  it('returns empfehlung on successful OpenRouter response', async () => {
    const mockResponse = {
      choices: [{ message: { content: 'Ich empfehle die Vagusatmung aus Kapitel 5.' } }],
    };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    }));

    const res = await onRequestPost({
      request: makeRequest({ gefuehl: 'Ich bin total gestresst.' }),
      env: mockEnv,
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { empfehlung: string };
    expect(body.empfehlung).toContain('Vagusatmung');
  });

  it('returns 502 when OpenRouter responds with an error status', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    const res = await onRequestPost({
      request: makeRequest({ gefuehl: 'Ich bin müde.' }),
      env: mockEnv,
    });

    expect(res.status).toBe(502);
  });

  it('returns 502 when fetch throws a network error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network failure')));

    const res = await onRequestPost({
      request: makeRequest({ gefuehl: 'Ich bin müde.' }),
      env: mockEnv,
    });

    expect(res.status).toBe(502);
  });

  it('sends system prompt and uebungen content to OpenRouter', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ choices: [{ message: { content: 'Empfehlung.' } }] }),
    });
    vi.stubGlobal('fetch', mockFetch);

    await onRequestPost({
      request: makeRequest({ gefuehl: 'Ich fühle mich leer.' }),
      env: mockEnv,
    });

    const [url, options] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://openrouter.ai/api/v1/chat/completions');

    const body = JSON.parse(options.body as string) as {
      model: string;
      messages: { role: string; content: string }[];
    };
    expect(body.model).toBe('google/gemini-flash-1.5');
    expect(body.messages[0].role).toBe('system');
    expect(body.messages[0].content).toContain('Kapitel');
    expect(body.messages[1].role).toBe('user');
    expect(body.messages[1].content).toBe('Ich fühle mich leer.');
  });
});
