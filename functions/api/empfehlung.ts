import { uebungenContent } from '../../src/data/uebungen-content';
import { chapters } from '../../src/data/chapters';

interface Env {
  OPENROUTER_API_KEY: string;
}

const SYSTEM_PROMPT = `Du bist ein einfühlsamer Begleiter für eine Website, die ein Selbsthilfebuch über Selbstwert ergänzt.
Du hast eine Liste aller verfügbaren Übungen als Kontext erhalten.

Wenn der Leser beschreibt, wie er sich fühlt, antwortest du mit genau zwei Dingen:

1. Einem einzigen warmen Satz, warum die Übung gerade passt. Kein Titel, keine Details — nur der Grund.
2. Darunter, auf einer eigenen Zeile: SLUG: [zweistellige Kapitelnummer, z.B. 05]

Wenn es eine oder zwei weitere Übungen gibt, die ebenfalls gut passen, fügst du nach dem SLUG noch an:
ALT: [Kapitelnummer] – [ein Satz warum]
ALT: [Kapitelnummer] – [ein Satz warum]

Wichtige Regeln:
- Antworte auf Deutsch, warm und ohne Fachjargon
- Wenn jemand sehr belastet klingt, empfiehl eine stabilisierende oder beruhigende Übung – keine tiefe Reflexionsübung
- Mach keinen Druck. Der Leser entscheidet selbst, ob er die Übung macht.`;

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  let gefuehl: string | undefined;
  try {
    const body = await request.json() as { gefuehl?: unknown };
    gefuehl = typeof body.gefuehl === 'string' ? body.gefuehl.trim() : undefined;
  } catch {
    return json({ error: 'Ungültige Anfrage.' }, 400);
  }

  if (!gefuehl) {
    return json({ error: 'Bitte beschreib kurz, wie es dir geht.' }, 400);
  }

  const apiKey = env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return json({ error: 'API-Schlüssel nicht konfiguriert.' }, 500);
  }

  const models = [
    'google/gemma-4-31b-it:free',
    'nvidia/nemotron-3-super-120b-a12b:free',
    'arcee-ai/trinity-large-preview:free',
  ];

  const messages = [
    {
      role: 'system',
      content: `${SYSTEM_PROMPT}\n\nHier sind alle verfügbaren Übungen:\n\n${uebungenContent}`,
    },
    { role: 'user', content: gefuehl },
  ];

  let response: Response | null = null;
  for (const model of models) {
    try {
      response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model, messages }),
      });
    } catch {
      continue;
    }
    if (response.ok) break;
    if (response.status !== 429 && response.status !== 503 && response.status !== 404) break;
  }

  if (!response) {
    return json({ error: 'Verbindung zum KI-Dienst fehlgeschlagen.' }, 502);
  }

  if (!response.ok) {
    return json({ error: 'Der KI-Dienst ist gerade überlastet. Bitte versuch es in einem Moment noch einmal.' }, 503);
  }

  const data = await response.json() as { choices?: { message?: { content?: string } }[] };
  const raw = data.choices?.[0]?.message?.content;

  if (!raw) {
    return json({ error: 'Keine Antwort erhalten.' }, 502);
  }

  const slugMatch = raw.match(/SLUG:\s*(\d{1,2})/);
  const slug = slugMatch ? slugMatch[1].padStart(2, '0') : null;

  const altMatches = [...raw.matchAll(/ALT:\s*(\d{1,2})\s*[–-]\s*(.+)/g)];
  const alternativen = altMatches.slice(0, 2).map((m) => ({
    slug: m[1].padStart(2, '0'),
    grund: m[2].trim(),
  }));

  const empfehlung = raw
    .replace(/\n?SLUG:\s*\d{1,2}.*$/m, '')
    .replace(/\n?ALT:.*$/gm, '')
    .trim();

  const chapter = slug ? chapters.find((c) => c.slug === slug) : null;
  const altChapters = alternativen.map((a) => {
    const c = chapters.find((ch) => ch.slug === a.slug);
    return c ? { slug: a.slug, titel: c.titel, beduerfnis: c.beduerfnis, dauer: c.dauer, grund: a.grund } : null;
  }).filter(Boolean);

  return json({
    empfehlung,
    slug,
    titel: chapter?.titel ?? null,
    beduerfnis: chapter?.beduerfnis ?? null,
    dauer: chapter?.dauer ?? null,
    alternativen: altChapters,
  }, 200);
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
