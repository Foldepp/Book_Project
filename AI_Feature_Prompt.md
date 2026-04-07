# Coding-Prompt: KI-Übungsempfehlung

Dieser Prompt ist für Antigravity / eine Coding-AI gedacht.
Einfach vollständig kopieren und einfügen.

---

## PROMPT

Ich möchte auf meiner Website ein KI-Feature hinzufügen, das Besuchern eine passende Übung empfiehlt.

**Was das Feature tun soll:**
Der Besucher gibt in einem Textfeld ein, wie er sich gerade fühlt (z.B. „Ich bin total gestresst und komme nicht runter" oder „Ich fühle mich leer und weiß nicht, was ich brauche"). Die KI liest alle verfügbaren Übungen, wählt die am besten passende aus und erklärt kurz warum.

---

**API:**
- Anbieter: OpenRouter (https://openrouter.ai/api/v1)
- Endpoint: `https://openrouter.ai/api/v1/chat/completions`
- API-Key: steht in der `.env`-Datei als `OPENROUTER_API_KEY`
- Modell: `google/gemini-flash-1.5` (günstig und schnell, kann aber geändert werden)

---

**Wissensbasis:**
Die Datei `uebungen.md` im Projektordner enthält alle Übungen strukturiert.
Diese Datei soll beim Start der Anwendung eingelesen und vollständig als Kontext an die KI übergeben werden.

---

**Technische Umsetzung:**

1. Ein neuer API-Endpunkt (z.B. `/api/empfehlung`) der folgendes tut:
   - Die `uebungen.md` einlesen
   - Die Nutzereingabe entgegennehmen
   - Beides zusammen an OpenRouter schicken
   - Die Antwort zurückgeben

2. Folgenden System-Prompt verwenden:

```
Du bist ein einfühlsamer Begleiter für eine Website, die ein Selbsthilfebuch über Selbstwert ergänzt.
Du hast eine Liste aller verfügbaren Übungen als Kontext erhalten.

Wenn der Leser beschreibt, wie er sich fühlt, empfiehlst du genau eine Übung – die, die am besten passt.

Deine Antwort hat immer diese Struktur:
1. Eine kurze Empfehlung (1–2 Sätze), warum diese Übung gerade passt
2. Titel der Übung und Kapitel (z.B. „Kapitel 5 – Vagusatmung")
3. Ob es eine Audioübung oder Textübung ist und wie lange sie dauert
4. Ein einladender Abschlusssatz

Wichtige Regeln:
- Empfehle immer nur eine einzige Übung
- Antworte auf Deutsch, warm und ohne Fachjargon
- Wenn jemand sehr belastet klingt, empfiehl eine stabilisierende oder beruhigende Übung – keine tiefe Reflexionsübung
- Mach keinen Druck. Der Leser entscheidet selbst, ob er die Übung macht.
```

3. Auf der Seite folgende UI einbauen:
   - Überschrift: „Welche Übung passt gerade zu dir?"
   - Textarea mit Placeholder: „Beschreib kurz, wie es dir gerade geht…"
   - Button: „Übung finden"
   - Antwort-Bereich darunter, der nach dem Laden erscheint
   - Während die KI antwortet: Ladeindikator anzeigen
   - Kleine Hinweiszeile unter dem Eingabefeld: „Deine Eingabe wird an einen KI-Dienst übertragen und nicht gespeichert."

---

**Was nicht gebaut werden soll:**
- Kein Chat-Verlauf, keine Gesprächshistorie
- Kein Login
- Keine Speicherung von Eingaben
- Kein Styling-Aufwand – einfaches, sauberes Design reicht

---

**Projektkontext:**
Das ist eine Begleitwebsite zu einem Selbsthilfebuch über Selbstwert. Die Leser scannen QR-Codes im Buch und landen auf dieser Website. Das Feature soll ihnen helfen, die richtige Übung zu finden, wenn sie nicht sicher sind, was sie gerade brauchen.
