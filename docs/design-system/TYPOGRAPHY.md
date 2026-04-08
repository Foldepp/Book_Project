# Typography

---

## Font-Familien

| Token | Stack | Quelle |
|---|---|---|
| `--font-serif` | `'Noto Serif', Georgia, serif` | Google Fonts |
| `--font-body` | `'Manrope', system-ui, sans-serif` | Google Fonts |

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;600;800&family=Material+Symbols+Outlined:wght,FILL@300,0..1&display=swap" rel="stylesheet" />
```

**Noto Serif Varianten:** 400 normal, 700 normal, 400 italic  
**Manrope Varianten:** 300, 400, 500, 600, 800  
**Material Symbols Outlined:** variable (wght 300, FILL 0 bis 1)

---

## Textstile nach Typ

### h1 — Seitenüberschrift
```css
font-family: var(--font-serif);
font-size: 2.25rem;          /* global base */
font-size: 2.75rem;          /* index.astro scoped override */
font-size: 3.75rem;          /* index.astro ≥640px */
font-size: 2.5rem;           /* [slug].astro */
font-size: 3.5rem;           /* [slug].astro ≥640px */
line-height: 1.1;
font-weight: 400;
color: var(--color-text);
```
- `h1 em`: `color: var(--color-accent)`, `font-style: italic` — kursiver Akzent-Teil
- Mehrzeilige Titel: Trennung mit `<br />` nach dem Gedankenstrich

### h2 — Karten-Titel
```css
font-family: var(--font-serif);
font-size: 1.125rem;
line-height: 1.3;
font-weight: 400;
color: var(--color-text);
margin-bottom: 0;
```
- In `global.css` base: `1.25rem` / `1.375rem ≥640px`
- ChapterCard überschreibt auf `1.125rem`

### Eyebrow / Breadcrumb-Label
```css
font-family: var(--font-body);
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: var(--color-text-muted);
margin-bottom: 0.75rem;
```
Verwendet als `.eyebrow` (Startseite, Übungsindex, Sicherheitsseite) und `.breadcrumb` (Kapitelseite, leicht anderes letter-spacing: `0.1em`).

### Intro-/Kontexttext (größerer Fließtext)
```css
font-size: 1.0625rem;        /* Startseite .intro, sicherheit .content */
font-size: 1.125rem;         /* [slug].astro .context */
line-height: 1.7–1.8;
color: var(--color-text-muted);
```

### Standard-Fließtext
```css
font-family: var(--font-body);
font-size: 1rem;
line-height: 1.6;
color: var(--color-text);
```

### Kleiner Fließtext / Datenschutz-Hinweis
```css
font-size: 0.8125rem;
color: var(--color-text-muted);
font-family: var(--font-body);
```

### Tags / Chips
```css
font-family: var(--font-body);
font-size: 0.75rem;          /* ChapterCard, [slug] */
font-size: 0.8125rem;        /* [slug] scoped .tag */
font-weight: 500;
letter-spacing: 0.02–0.03em;
color: var(--color-text-muted);
```

### Filter-Label
```css
font-family: var(--font-body);
font-size: 0.75rem;
font-weight: 600;
letter-spacing: 0.06em;
text-transform: uppercase;
color: var(--color-text-muted);
```

### Filter-Buttons / Pill-Buttons
```css
font-family: var(--font-body);
font-size: 0.8125rem;
font-weight: 500;
color: var(--color-text-muted);
```

### Navigation (Header)
```css
font-family: var(--font-body);
font-size: 0.875rem;
letter-spacing: 0.01em;
color: var(--color-text-muted);
```

### Brand (Header & Footer)
```css
font-family: var(--font-serif);
font-style: italic;
font-size: 1.25rem;          /* Header */
font-size: 0.875rem;         /* Footer */
color: var(--color-accent);  /* Header */
color: var(--color-text-muted); /* Footer */
```

### Back-Link
```css
font-size: 0.8125rem;
font-weight: 500;
color: var(--color-text-muted);
text-decoration: none;
```
Hover: `color: var(--color-text)`

### Zeiten (Audio-Player)
```css
font-family: var(--font-body);
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.04em;
color: var(--color-text-muted);
```

### Nächste-Übung-Label (Next-Card)
```css
font-family: var(--font-body);
font-size: 0.6875rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: var(--color-text-muted);
```

### Nächste-Übung-Titel
```css
font-family: var(--font-body);
font-weight: 600;
font-size: 1rem;
color: var(--color-text);
```

---

## Material Symbols

Icon-Font mit variablen Achsen. Globale Einstellung:
```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  user-select: none;
}
```

Verwendete Icons: `menu_book`, `psychology`, `explore`, `schedule`, `replay_10`, `forward_30`, `play_arrow`, `pause`, `expand_more`, `arrow_forward`, `hourglass_empty`

Inline-Größen:
- Standard-Icons in Tags: `font-size: 14–15px`
- Skip-Buttons: `font-size: 20px`
- Play-Icon: `font-size: 2rem`
- Entry-Icons: `font-size: 20px`

---

## Breakpoints

| Breakpoint | Wert |
|---|---|
| Mobile → Desktop | `min-width: 640px` |

Nur ein einziger Breakpoint im gesamten Projekt.
