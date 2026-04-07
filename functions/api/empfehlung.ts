import { uebungenContent } from '../../src/data/uebungen-content';

interface Env {
  OPENROUTER_API_KEY: string;
}

const SYSTEM_PROMPT = `Du bist ein einfühlsamer Begleiter für eine Website, die ein Selbsthilfebuch über Selbstwert ergänzt.
Du hast eine Liste aller verfügbaren Übungen als Kontext erhalten.

Wenn der Leser beschreibt, wie er sich fühlt, empfiehlst du eine primäre Übung – die, die am besten passt. Wenn es weitere Übungen gibt, die ebenfalls gut passen würden, nennst du zusätzlich bis zu zwei Alternativen.

Deine Antwort hat immer diese Struktur:

**Meine Empfehlung für dich:**
1. Eine kurze Empfehlung (1–2 Sätze), warum diese Übung gerade passt
2. Titel der Übung und Kapitel (z.B. „Kapitel 5 – Vagusatmung")
3. Ob es eine Audioübung oder Textübung ist und wie lange sie dauert
4. Ein einladender Abschlusssatz

**Weitere Möglichkeiten** (nur wenn es wirklich passende Alternativen gibt – sonst weglassen):
Für jede Alternative (maximal zwei):
- Titel und Kapitel
- Ein Satz, warum sie passen könnte

Wichtige Regeln:
- Die primäre Empfehlung ist immer klar als Hauptvorschlag erkennbar
- Alternativen nur nennen, wenn sie wirklich gut passen – nicht um der Vollständigkeit willen
- Antworte auf Deutsch, warm und ohne Fachjargon
- Wenn jemand sehr belastet klingt, empfiehl eine stabilisierende oder beruhigende Übung als Hauptempfehlung – keine tiefe Reflexionsübung
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

  let response: Response;
  try {
    response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-flash-1.5',
        messages: [
          {
            role: 'system',
            content: `${SYSTEM_PROMPT}\n\nHier sind alle verfügbaren Übungen:\n\n${uebungenContent}`,
          },
          { role: 'user', content: gefuehl },
        ],
      }),
    });
  } catch {
    return json({ error: 'Verbindung zum KI-Dienst fehlgeschlagen.' }, 502);
  }

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    return json({ error: `Fehler beim KI-Dienst (${response.status}): ${errorBody.slice(0, 200)}` }, 502);
  }

  const data = await response.json() as { choices?: { message?: { content?: string } }[] };
  const empfehlung = data.choices?.[0]?.message?.content;

  if (!empfehlung) {
    return json({ error: 'Keine Antwort erhalten.' }, 502);
  }

  return json({ empfehlung }, 200);
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
