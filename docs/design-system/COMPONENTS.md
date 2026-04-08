# Components

---

## 1. Base Layout (`layouts/Base.astro`)

Wrapper für alle Seiten. Enthält `<html>`, `<head>`, `<body>`, Header, Blobs, `<main>`, Footer.

### Header
```html
<header class="site-header">
  <nav class="site-nav">
    <a href="/" class="brand">Du bist genug</a>
    <div class="nav-links">
      <a href="/kapitel">Übungen</a>
      <a href="/empfehlung">Empfehlung</a>
      <a href="/sicherheit">Pause</a>
    </div>
  </nav>
</header>
```
- `position: sticky; top: 0; z-index: 50`
- Hintergrund: `rgba(255, 252, 247, 0.7)` + `backdrop-filter: blur(12px)`
- Border-bottom: `1px solid var(--color-border)`
- Brand: Noto Serif, italic, 1.25rem, `var(--color-accent)`
- Nav-Links: Manrope, 0.875rem, `var(--color-text-muted)` → hover `var(--color-accent)`

### Hintergrund-Blobs
```html
<div class="blob blob-1"></div>
<div class="blob blob-2"></div>
```
- `position: fixed; border-radius: 50%; filter: blur(80px); opacity: 0.25; pointer-events: none; z-index: 0`
- Blob 1: 480×480px, oben rechts (`top: 5%; right: -8%`), Gradient `#d4e9c4 → #ece1d2`
- Blob 2: 560×560px, unten links (`bottom: -15%; left: -8%`), Gradient `#ece1d2 → #d4e9c4`
- `<main>` und `<footer>`: `position: relative; z-index: 1` (über Blobs)

### Footer
```html
<footer class="site-footer">
  <span class="footer-brand">Du bist genug</span>
  <a href="/sicherheit" class="footer-safety">Pause — zu viel?</a>
</footer>
```
- Flex row, space-between, border-top `1px solid var(--color-border)`
- Max-width `var(--max-width)`, zentriert, padding `1.5rem`
- Footer-Brand: Noto Serif, italic, 0.875rem, gedämpft
- Footer-Safety: 0.8125rem, gedämpft, kein underline, `border-bottom: 1px solid var(--color-border-solid)`; hover → `var(--color-text)`

---

## 2. ChapterCard (`components/ChapterCard.astro`)

Klickbare Übungskarte. Wird auf `/kapitel` und in der Empfehlungsseite verwendet.

### HTML-Struktur
```html
<a href="/kapitel/{slug}" class="card" data-beduerfnis="{value}" data-dauer="{value}">
  <div class="card-meta">
    <span class="tag">{Bedürfnis-Label}</span>
    <span class="tag tag-dauer">
      <span class="material-symbols-outlined">schedule</span>
      {Dauer-Label}
    </span>
  </div>
  <h2>{titel}</h2>
  <p>{kapitelkontext}</p>
</a>
```

### CSS
```css
.card {
  display: block;
  background-color: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);   /* 1rem */
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 4px 24px rgba(81, 100, 71, 0.08);
  opacity: 1;
}
.card-meta { display: flex; gap: 0.5rem; margin-bottom: 0.875rem; }
.tag {
  display: inline-flex; align-items: center; gap: 0.25rem;
  font-size: 0.75rem; font-family: var(--font-body); font-weight: 500;
  letter-spacing: 0.03em; color: var(--color-text-muted);
  background-color: var(--color-surface-high);
  border-radius: var(--radius-lg);   /* 0.75rem */
  padding: 3px 10px;
}
.tag .material-symbols-outlined { font-size: 14px; }
h2 { font-size: 1.125rem; margin-bottom: 0.5rem; color: var(--color-text); }
p  { font-size: 0.9375rem; color: var(--color-text-muted); margin-bottom: 0; line-height: 1.65; }
```

### Data-Attribute (für FilterBar)
- `data-beduerfnis`: `runterkommen` | `stabilisieren` | `nachspueren`
- `data-dauer`: `2min` | `5min` | `10min`

---

## 3. FilterBar (`components/FilterBar.astro`)

Zwei Filtergruppen (Bedürfnis + Dauer) mit Pill-Buttons. Nur sichtbar mit JavaScript.

### HTML-Struktur
```html
<div class="filter-bar">
  <div class="filter-group">
    <span class="filter-label">Bedürfnis</span>
    <div class="filter-buttons">
      <button type="button" data-filter-type="beduerfnis" data-filter-value="runterkommen">Runterkommen</button>
      <button type="button" data-filter-type="beduerfnis" data-filter-value="stabilisieren">Stabilisieren</button>
      <button type="button" data-filter-type="beduerfnis" data-filter-value="nachspueren">Nachspüren</button>
    </div>
  </div>
  <div class="filter-group">
    <span class="filter-label">Dauer</span>
    <div class="filter-buttons">
      <button type="button" data-filter-type="dauer" data-filter-value="2min">2 Min.</button>
      <button type="button" data-filter-type="dauer" data-filter-value="5min">5 Min.</button>
      <button type="button" data-filter-type="dauer" data-filter-value="10min">10 Min.</button>
    </div>
  </div>
</div>
<noscript><style>.filter-bar { display: none; }</style></noscript>
```

### CSS
```css
.filter-bar { display: flex; flex-direction: column; gap: 0.625rem; }
.filter-group { display: flex; align-items: center; gap: 0.625rem; flex-wrap: wrap; }
.filter-label {
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--color-text-muted);
  min-width: 72px; font-family: var(--font-body);
}
button {
  font-size: 0.8125rem; font-family: var(--font-body); font-weight: 500;
  color: var(--color-text-muted);
  background-color: var(--color-surface-low);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  padding: 5px 14px;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s, border-color 0.15s;
}
button:hover { border-color: var(--color-accent); color: var(--color-text); }
button.active {
  background-color: var(--color-accent-light);
  border-color: var(--color-accent);
  color: var(--color-text);
}
```

### Filterlogik (JavaScript in `kapitel/index.astro`)
Zustand: `{ beduerfnis: string|null, dauer: string|null }`. Toggle: Klick auf aktiven Button → setzt auf `null`. Karte versteckt wenn `data-beduerfnis` oder `data-dauer` nicht mit Zustand übereinstimmt.

---

## 4. AudioPlayer (`components/AudioPlayer.astro`)

Benutzerdefinierter HTML5-Audio-Player. Props: `audioSandra: string`, `audioCarsten: string`, `textalternative: string`.

### Zustände
- **Kein Audio** (beide Props leer): Zeigt Platzhalter-Box mit `hourglass_empty`-Icon
- **Eine Stimme**: Kein Voice-Toggle, direkt Player
- **Zwei Stimmen**: Voice-Toggle (Sandra / Carsten) oben

### HTML-Struktur (mit Audio)
```html
<div class="player-bento">
  <!-- Nur wenn hasBoth: -->
  <div class="voice-toggle" role="group" aria-label="Stimme wählen">
    <button class="voice-btn active" data-voice="sandra">Sandra</button>
    <button class="voice-btn" data-voice="carsten">Carsten</button>
  </div>

  <div class="controls-row">
    <div class="skip-group">
      <button id="replay-10" class="skip-btn" aria-label="10 Sekunden zurück">
        <span class="material-symbols-outlined">replay_10</span>
      </button>
      <button id="forward-30" class="skip-btn" aria-label="30 Sekunden vor">
        <span class="material-symbols-outlined">forward_30</span>
      </button>
    </div>
  </div>

  <div class="main-controls">
    <button id="play-btn" class="play-btn" aria-label="Abspielen">
      <span class="material-symbols-outlined play-icon" id="play-icon">play_arrow</span>
    </button>
    <div class="progress-area">
      <div class="time-row">
        <span id="current-time" class="time">0:00</span>
        <span id="duration" class="time">—</span>
      </div>
      <div class="progress-track" id="progress-track" role="progressbar">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
    </div>
  </div>

  <audio id="chapter-audio" preload="metadata">
    <source src="{initialSrc}" type="audio/mpeg" />
  </audio>
</div>

<!-- Immer vorhanden (auch ohne Audio): -->
<details class="text-alternative">
  <summary>
    <span>Übungstext lesen</span>
    <span class="material-symbols-outlined expand-icon">expand_more</span>
  </summary>
  <div class="text-content">
    <p>...</p>
  </div>
</details>
```

### Wichtige CSS-Werte
```css
.player-bento {
  background-color: var(--color-surface-low);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);   /* 2rem */
  padding: 2rem;
  display: flex; flex-direction: column; gap: 1.5rem;
}
.voice-btn {
  padding: 0.375rem 1.125rem;
  border-radius: 9999px;
  background-color: var(--color-surface-high);
  color: var(--color-text-muted);
  font-size: 0.875rem; font-weight: 500;
}
.voice-btn.active {
  border-color: var(--color-accent);
  background-color: var(--color-accent-light);
  color: var(--color-text);
}
.skip-btn {
  width: 2.75rem; height: 2.75rem;
  border-radius: 9999px;
  background-color: var(--color-surface-high);
}
.play-btn {
  width: 5rem; height: 5rem;
  border-radius: 9999px;
  background-color: var(--color-accent);
  color: #fff;
  box-shadow: 0 8px 24px rgba(81, 100, 71, 0.2);
}
.play-btn:hover { transform: scale(1.05); box-shadow: 0 12px 32px rgba(81,100,71,0.28); }
.play-icon { font-size: 2rem; }
.progress-track {
  height: 6px;
  background-color: var(--color-surface-highest);
  border-radius: 9999px;
  cursor: pointer;
  overflow: hidden;
}
.progress-fill {
  background-color: var(--color-accent);
  transition: width 0.1s linear;
}
```

### Text-Alternative (`<details>`)
```css
.text-alternative {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.text-alternative summary {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.125rem 1.5rem;
  font-family: var(--font-body); font-weight: 600; font-size: 0.9375rem;
  color: var(--color-text-muted);
  background-color: var(--color-surface-low);
  cursor: pointer; list-style: none; user-select: none;
}
.text-alternative[open] .expand-icon { transform: rotate(180deg); }
.text-content {
  padding: 1.5rem;
  background-color: var(--color-surface-low);
  border-top: 1px solid var(--color-border);
  display: flex; flex-direction: column; gap: 0.875rem;
}
.text-content p { font-size: 0.9375rem; line-height: 1.75; color: var(--color-text-muted); }
```

### JavaScript-Verhalten
- Play/Pause: Toggled `audio.paused`, ändert Icon zwischen `play_arrow` ↔ `pause`, FILL 0 ↔ 1
- Replay -10s: `audio.currentTime = Math.max(0, currentTime - 10)`
- Forward +30s: `audio.currentTime = Math.min(duration, currentTime + 30)`
- Progress-Click: Berechnet Prozentsatz via `getBoundingClientRect`
- Voice-Toggle: Setzt `audio.src`, `audio.load()`, behält Position und Play-Zustand

---

## 5. Einstiegs-Buttons (Startseite)

```html
<nav class="entry-nav">
  <a href="/kapitel" class="entry-btn">
    <span class="entry-icon material-symbols-outlined">menu_book</span>
    <span>Ich bin gerade im Buch</span>
  </a>
  <!-- weitere Buttons ... -->
</nav>
```
```css
.entry-btn {
  display: flex; align-items: center; gap: 1rem;
  background-color: var(--color-surface-low);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);   /* 0.5rem */
  padding: 1.125rem 1.5rem;
  font-size: 1rem; font-weight: 500; font-family: var(--font-body);
  text-decoration: none; color: var(--color-text);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.entry-btn:hover {
  border-color: var(--color-accent);
  box-shadow: 0 4px 16px rgba(81, 100, 71, 0.08);
  opacity: 1;
}
.entry-icon { font-size: 20px; color: var(--color-accent); flex-shrink: 0; }
```
Desktop (≥640px): `flex-direction: row; flex-wrap: wrap;` auf `.entry-nav`, `.entry-btn` mit `flex: 1; min-width: 200px;`

---

## 6. Support-Card (Sicherheitsseite)

```html
<div class="support-card">
  <div class="support-label">Telefonseelsorge — kostenlos, 24/7</div>
  <div class="support-numbers">
    <span>0800 111 0 111</span>
    <span class="separator">|</span>
    <span>0800 111 0 222</span>
  </div>
</div>
```
```css
.support-card {
  background-color: var(--color-accent-light);
  border-radius: var(--radius-xl);
  padding: 1.25rem 1.5rem;
  display: flex; flex-direction: column; gap: 0.375rem;
}
.support-label {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--color-accent); font-family: var(--font-body);
}
.support-numbers {
  font-weight: 600; color: var(--color-text); font-family: var(--font-body);
  display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;
}
.separator { color: var(--color-text-muted); font-weight: 300; }
```

---

## 7. Nächste-Übung-Karte (`[slug].astro`)

```html
<div class="next-section">
  <a href="/kapitel/{slug}" class="next-card">
    <div class="next-label">Nächste Übung</div>
    <div class="next-title">
      {titel}
      <span class="material-symbols-outlined next-arrow">arrow_forward</span>
    </div>
  </a>
</div>
```
```css
.next-card {
  display: flex; flex-direction: column; gap: 0.375rem;
  background-color: var(--color-surface-high);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 1.25rem 1.5rem;
  text-decoration: none; color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.next-card:hover { border-color: var(--color-accent); box-shadow: 0 4px 16px rgba(81,100,71,0.08); opacity: 1; }
.next-card:hover .next-arrow { transform: translateX(4px); }
.next-label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted); }
.next-title { font-weight: 600; font-size: 1rem; color: var(--color-text); display: flex; align-items: center; justify-content: space-between; }
.next-arrow { font-size: 20px; color: var(--color-accent); transition: transform 0.2s; }
```

---

## 8. Formular (Empfehlungsseite)

```html
<form id="empfehlung-form">
  <textarea id="gefuehl-input" name="gefuehl" rows="4" required
    placeholder="Beschreib kurz, wie es dir gerade geht…"></textarea>
  <p class="datenschutz">Deine Eingabe wird an einen KI-Dienst übertragen und nicht gespeichert.</p>
  <button type="submit" id="submit-btn">Übung finden</button>
</form>
```
```css
form { display: flex; flex-direction: column; gap: 0.875rem; margin-top: 1.75rem; max-width: 36rem; }
textarea {
  width: 100%; padding: 1rem 1.125rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background-color: #fff;
  font-family: var(--font-body); font-size: 1rem; line-height: 1.7;
  resize: vertical; min-height: 120px;
}
textarea:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(81,100,71,0.1); }
button[type="submit"] {
  align-self: flex-start;
  background-color: var(--color-accent); color: #fff;
  border: none; border-radius: 9999px;
  padding: 0.75rem 1.75rem;
  font-family: var(--font-body); font-size: 0.9375rem; font-weight: 600;
  box-shadow: 0 4px 16px rgba(81,100,71,0.2);
}
button[type="submit"]:hover:not(:disabled) { transform: scale(1.03); box-shadow: 0 6px 20px rgba(81,100,71,0.28); opacity: 1; }
button[type="submit"]:disabled { opacity: 0.5; cursor: not-allowed; }
```

---

## 9. Ergebnis-Cards (Empfehlungsseite)

Identisch mit ChapterCard-Styling, aber inline in `empfehlung.astro`. Zusätzlich `.alt-grund`-Paragraph für Alternativ-Begründung:
```css
.alt-grund { font-size: 0.9375rem; color: var(--color-text-muted); margin-top: 0.5rem; line-height: 1.65; }
```
Alternativen-Bereich hat Abschnitts-Label:
```css
.alternativen-label {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--color-text-muted); font-family: var(--font-body);
  margin-bottom: 0.75rem;
}
```
