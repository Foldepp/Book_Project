# Du bist genug — Audio-Companion Website

## Business Requirements

- MVP einer Companion-Website zum Buch "Du bist genug — aber das Gehirn weiß es noch nicht"
- Leser scannen im Buch einen QR-Code → landen auf der Kapitelseite → hören die Audio-Übung
- Kein Marketing, kein Funnel, keine Newsletter — ausschließlich Begleitmedium zum Buch
- Startseite mit kurzem Willkommenstext und drei Einstiegs-Buttons ("Ich bin gerade im Buch" / "Ich möchte eine Übung starten" / "Ich möchte mich erst orientieren")
- Übersichtsseite (/kapitel) mit allen Kapiteln als Karten, filterbar nach Bedürfnis (Runterkommen / Stabilisieren / Nachspüren) und Dauer (2 / 5 / 10 Minuten) — ohne Seitenreload
- Detailseite pro Kapitel (/kapitel/01 etc.) mit Audio-Player, kurzem Einleitungstext und vollständiger Übungsanleitung als Text (gleichwertiger Kanal — keine Zusammenfassung)
- Wenn noch keine Audio-Datei hinterlegt ist: freundlicher Platzhalter-Hinweis statt kaputter Player
- Sicherheitsseite (/sicherheit) mit Platzhaltertext — auf jeder Übungsseite muss ein dezenter Link dazu sichtbar sein ("Pause — zu viel?")
- Die Website muss sofort startfähig sein und im Browser angezeigt werden können — auch ohne echte Audio-Dateien
- Zwei bis drei Beispielkapitel mit Platzhalterinhalt anlegen, damit die Seite sofort etwas zeigt
- Die URL-Slugs (/kapitel/01 etc.) sind nach Druckfreigabe unveränderlich — QR-Codes sind gedruckt

## Technical Details

- Statische Website mit Astro (kein Server, kein CMS, kein Backend, keine Auth)
- Alle Kapitelinhalte stehen in einer einzigen Datei `src/data/chapters.ts` — kein Login, kein Studio
- Ein neues Kapitel hinzufügen = einen Eintrag in dieser Datei kopieren und Werte anpassen
- Audio-Dateien als externe URLs in der chapters.ts (kann erstmal leer bleiben)
- Mobile-first — 375px Basis-Breakpoint, Desktop nachrangig
- Deployment: Cloudflare Pages (statischer Build via `npm run build` → `dist/`)
- Keine Datenbank, kein User-Management, keine serverseitige Logik

## Chapter Data Structure

Each chapter is one entry in `src/data/chapters.ts`. This is the only file that needs to be edited to add or update content. Here is the exact structure — one entry per chapter:

```typescript
{
  nummer: 1,           // Kapitel-Nummer als Zahl
  slug: '01',          // immer zweistellig — NIEMALS ändern nach Druckfreigabe
  titel: 'Titel der Übung',
  kapitelkontext: 'Ein bis zwei Sätze, die den Leser abholen. Kein Spoiler, keine Anleitung.',
  beduerfnis: 'runterkommen',  // 'runterkommen' | 'stabilisieren' | 'nachspueren'
  dauer: '5min',               // '2min' | '5min' | '10min'
  audioUrl: '',                // direkte MP3-URL — leer lassen bis Audio hochgeladen
  textalternative: 'Vollständige Übungsanleitung als Text. Dieselbe Qualität wie das Audio.',
  aktiv: false,        // auf true setzen wenn Audio-URL und Text vollständig sind
}
```

`aktiv: false` bedeutet: die Seite existiert und ist per URL erreichbar, erscheint aber nicht in der Übersicht. So können Seiten vorbereitet werden, bevor das Audio fertig ist.

## Color Scheme

- Background: `#FEF7EE` — warmes Creme, Seitenhintergrund
- Surface: `#FFFCF8` — Karten-Hintergrund
- Accent: `#7BAF9E` — gedämpftes Grün, Buttons und Hervorhebungen
- Accent Light: `#E8F2EF` — aktive Filter, Hinweis-Boxen
- Text: `#3D3530` — warmes Dunkelbraun, Fließtext
- Text Muted: `#8A7A72` — Nebentext, Labels, Metadaten
- Border: `#E8DDD6` — Rahmen, Trennlinien

## Strategy

1. Write plan with success criteria for each phase to be checked off. Include project scaffolding, including .gitignore, and rigorous unit testing.
2. Execute the plan ensuring all criteria are met
3. Carry out extensive integration testing with Playwright or similar, fixing defects
4. Only complete when the MVP is finished and tested, with the server running and ready for the user

## Coding standards

1. Use latest versions of libraries and idiomatic approaches as of today
2. Keep it simple - NEVER over-engineer, ALWAYS simplify, NO unnecessary defensive programming. No extra features - focus on simplicity.
3. Be concise. Keep README minimal. IMPORTANT: no emojis ever
