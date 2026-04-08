# Design Tokens

Alle Tokens sind als CSS Custom Properties in `:root` in `global.css` definiert.

---

## Farben

| Token | Wert | Verwendung |
|---|---|---|
| `--color-bg` | `#fffcf7` | Seitenhintergrund |
| `--color-surface` | `#fffcf7` | Identisch mit bg (Alias) |
| `--color-surface-low` | `#fcf9f3` | Leicht abgesetzte Flächen (Audio-Player, Textarea-Hintergrund) |
| `--color-surface-container` | `#f6f4ec` | Mittlere Container-Ebene |
| `--color-surface-high` | `#f0eee5` | Tags, erhöhte Chips |
| `--color-surface-highest` | `#eae9de` | Progress-Track, stärkste Abhebung |
| `--color-accent` | `#516447` | Primärfarbe (Olivgrün) — Buttons, Links, Icons, aktive Zustände |
| `--color-accent-light` | `#d4e9c4` | Heller Akzent — aktive Filter, Support-Card-Hintergrund |
| `--color-text` | `#373831` | Haupttext (fast schwarz, warm) |
| `--color-text-muted` | `#64655d` | Sekundärtext, Labels, Captions |
| `--color-border` | `#e0dfd5` | Standardrahmen |
| `--color-border-solid` | `#babab0` | Stärkerer Rahmen (Footer-Safety-Link) |

### Blob-Farben (Hintergrundeffekte)
| Blob | Gradient |
|---|---|
| Blob 1 (oben rechts) | `linear-gradient(135deg, #d4e9c4 0%, #ece1d2 100%)` |
| Blob 2 (unten links) | `linear-gradient(135deg, #ece1d2 0%, #d4e9c4 100%)` |

---

## Border-Radien

| Token | Wert | Verwendung |
|---|---|---|
| `--radius` | `0.5rem` | Einstiegs-Buttons auf der Startseite |
| `--radius-lg` | `0.75rem` | Tags / Chips |
| `--radius-xl` | `1rem` | Karten (ChapterCard, Result-Cards, Support-Card, Text-Alternative) |
| `--radius-2xl` | `2rem` | Audio-Player-Bento-Box |
| `9999px` | — | Pill-Buttons (Filter, Voice-Toggle, Submit-Button), Skip-Buttons |

---

## Abstände (Spacing)

Kein Token-System — direkte `rem`-Werte. Häufig verwendete Werte:

| Kontext | Wert |
|---|---|
| Seiten-Padding horizontal | `1.5rem` |
| Seiten-Padding vertikal oben | `3rem` |
| Seiten-Padding vertikal unten | `4rem` |
| Gap zwischen Karten | `0.875rem` |
| Gap zwischen Form-Elementen | `0.875rem` |
| Abstand Eyebrow → h1 | `0.75rem` (margin-bottom auf `.eyebrow`) |
| Abstand h1 → Content | `1.75rem` (margin-top) |
| Innen-Padding Karten | `1.5rem` |
| Innen-Padding Audio-Player | `2rem` |

---

## Schatten

| Kontext | Wert |
|---|---|
| Karten hover | `0 4px 24px rgba(81, 100, 71, 0.08)` |
| Play-Button ruhend | `0 8px 24px rgba(81, 100, 71, 0.2)` |
| Play-Button hover | `0 12px 32px rgba(81, 100, 71, 0.28)` |
| Submit-Button ruhend | `0 4px 16px rgba(81, 100, 71, 0.2)` |
| Submit-Button hover | `0 6px 20px rgba(81, 100, 71, 0.28)` |
| Karten Entry-Nav hover | `0 4px 16px rgba(81, 100, 71, 0.08)` |

---

## Opazitäten

| Kontext | Wert |
|---|---|
| Blobs (Hintergrund-Effekte) | `0.25` |
| Header-Hintergrund (blur) | `rgba(255, 252, 247, 0.7)` |
| Links hover (global) | `opacity: 0.8` |
| Disabled-Buttons | `opacity: 0.5` |

---

## Transitions

| Element | Wert |
|---|---|
| Karten (border, shadow) | `0.2s` |
| Buttons (bg, color, border) | `0.15s` |
| Play-Button (transform, shadow) | `0.2s` |
| Submit-Button (transform, shadow) | `0.2s` |
| Nav-Links (color) | `0.15s` |
| Progress-Fill (width) | `0.1s linear` |
| Expand-Icon (transform) | `0.2s` |
| Next-Arrow (transform) | `0.2s` |

---

## Max-Width

| Token | Wert | Verwendung |
|---|---|---|
| `--max-width` | `52rem` | `<main>` und `.site-nav` — zentrierter Content-Bereich |
