# Du bist genug — Audio-Companion Website

## Projekt-Überblick

Companion-Website zum Buch "Du bist genug — aber das Gehirn weiß es noch nicht".
Leser scannen QR-Codes im Buch → landen auf der Kapitelseite → hören die Audio-Übung.
Kein Marketing, kein Backend, kein CMS — reines Begleitmedium.

**Live-URL:** https://book-project-1mq.pages.dev  
**GitHub:** https://github.com/Foldepp/Book_Project  
**Deployment:** Cloudflare Pages (automatisch bei Push auf `master`)

---

## Stack

- **Astro 6** — statischer Build (`npm run build` → `dist/`)
- **Cloudflare Pages** — Hosting + Serverless Functions
- **Cloudflare Pages Functions** — für KI-API (`functions/api/empfehlung.ts`)
- **OpenRouter API** — LLM-Zugang für Übungsempfehlung
- **Vitest** — Unit-Tests (`npm test`)
- **Playwright** — E2E-Tests (`npm run test:e2e`)

**Wichtig:** Kein `@astrojs/cloudflare` Adapter. Der Adapter funktioniert nicht auf Windows arm64 (fehlende workerd binary). Stattdessen: Cloudflare Pages Functions im `functions/`-Verzeichnis, Astro bleibt rein statisch.

---

## Cloudflare Pages Build-Config

| Einstellung | Wert |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `NODE_VERSION=20` (Environment Variable) |

**package-lock.json ist in .gitignore** — Node-Version-Konflikt zwischen lokalem Node 24 und Cloudflare Node 22. Cloudflare führt `npm install` selbst aus.

---

## Environment Variables (Cloudflare Dashboard)

| Variable | Beschreibung |
|---|---|
| `OPENROUTER_API_KEY` | API-Key für OpenRouter (kostenlose Modelle) |

Zu setzen unter: Cloudflare → Pages → book-project-1mq → Settings → Environment Variables.

---

## KI-Feature (Übungsempfehlung)

**Endpoint:** `POST /api/empfehlung`  
**Datei:** `functions/api/empfehlung.ts`  
**Seite:** `src/pages/empfehlung.astro`

### Modell-Fallback-Kette (bei 429/503 weiter zum nächsten)
1. `qwen/qwen3.6-plus:free`
2. `nvidia/nemotron-3-super-120b-a12b:free`
3. `arcee-ai/trinity-large-preview:free`

### Response-Format des KI-Prompts
Das Modell gibt am Ende zurück:
```
SLUG: 03
ALT: 07 – kurze Begründung
ALT: 12 – kurze Begründung
```
Wird server-seitig per Regex geparst.

### Inhalts-Datei für KI-Kontext
`src/data/uebungen-content.ts` — exportiert den kompletten Übungstext als String.
Wird aus `uebungen.md` generiert (node-Script).

---

## Kapitel-Datenstruktur

Alle Inhalte in `src/data/chapters.ts`. Einzige Datei für Content-Änderungen.

```typescript
{
  nummer: 1,
  slug: '01',              // NIEMALS ändern — QR-Codes sind gedruckt
  titel: 'Titel — Untertitel',
  kapitelkontext: 'Ein bis zwei Sätze.',
  beduerfnis: 'runterkommen',   // 'runterkommen' | 'stabilisieren' | 'nachspueren'
  dauer: '5min',                // '2min' | '5min' | '10min'
  audioSandra: '/audio/B1K1_Sandra.mp3',   // leer lassen bis fertig
  audioCarsten: '/audio/B1K1_Carsten.mp3', // leer lassen bis fertig
  textalternative: 'Vollständige Übungsanleitung.\n\nZweiter Absatz.',  // \n\n = Absatz
  aktiv: true,   // false = Seite erreichbar, aber nicht in Übersicht
}
```

**Audio-Dateien:** `public/audio/` — Namenskonvention: `B{Buch}K{Kapitel}_{Stimme}.mp3`  
Aktuell vorhanden: `B1K1_Sandra.mp3`, `B1K1_Carsten.mp3` (als Platzhalter für alle 16 Kapitel)

---

## Design-System

Vollständig dokumentiert in `docs/design-system/`:
- `DESIGN-TOKENS.md` — Farben, Radien, Schatten, Transitions
- `TYPOGRAPHY.md` — Fonts, alle Textstile
- `COMPONENTS.md` — alle UI-Komponenten
- `LAYOUT.md` — Seitenstruktur, Breakpoints
- `global.css` — komplette CSS-Datei
- `templates/` — alle .astro-Dateien als Kopie

**Fonts:** Noto Serif + Manrope + Material Symbols Outlined (Google Fonts)  
**Primärfarbe:** `#516447` (Olivgrün) als `--color-accent`

---

## Wichtige Lektionen aus der Entwicklung

1. **Immer committen vor dem Push.** Lokale Datei-Änderungen werden von Cloudflare nicht gesehen — nur committed Code zählt.
2. **Astro Scoped CSS gilt nicht für dynamisch per JS erstellte DOM-Elemente.** Lösung: Elemente als `hidden` im HTML vorrendern.
3. **Kein `@astrojs/cloudflare` Adapter auf Windows arm64.** Cloudflare Pages Functions stattdessen.
4. **package-lock.json in .gitignore** — Node-Version-Konflikt vermeiden.

---

## URL-Routing

| Route | Datei |
|---|---|
| `/` | `src/pages/index.astro` |
| `/kapitel` | `src/pages/kapitel/index.astro` |
| `/kapitel/01` … `/kapitel/16` | `src/pages/kapitel/[slug].astro` |
| `/empfehlung` | `src/pages/empfehlung.astro` |
| `/sicherheit` | `src/pages/sicherheit.astro` |
| `POST /api/empfehlung` | `functions/api/empfehlung.ts` |
