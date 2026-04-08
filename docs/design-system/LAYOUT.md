# Layout

---

## Seitenstruktur (HTML)

```
<html lang="de">
  <head>          ← BaseHead: meta, fonts, favicon
  <body>
    <header>      ← Sticky, z-index: 50
      <nav>       ← site-nav: brand + nav-links
    <div.blob-1>  ← Fixed, z-index: 0
    <div.blob-2>  ← Fixed, z-index: 0
    <main>        ← position: relative; z-index: 1
      <slot />    ← Seiteninhalt
    <footer>      ← site-footer: brand-left, safety-link-right
```

---

## Container-Logik

Nur ein einziger Contentbereich (`<main>`) mit zentriertem max-width:

```css
main {
  width: 100%;
  max-width: var(--max-width);   /* 52rem = 832px */
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
  position: relative;
  z-index: 1;
}
```

Ebenso `.site-nav` und `.site-footer`:
```css
.site-nav, .site-footer {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.25rem 1.5rem;   /* nav */
  padding: 1.5rem;            /* footer */
}
```

Kein Grid-System. Alle Seiten verwenden einfaches vertikales Stacking (`flex-direction: column`).

---

## Breakpoints

Nur ein Breakpoint im gesamten Projekt:

| Name | Wert |
|---|---|
| Desktop | `min-width: 640px` |

Änderungen ab Desktop:
- `h1` global: `3rem` (statt `2.25rem`)
- `h2` global: `1.375rem` (statt `1.25rem`)
- `h1` Startseite: `3.75rem` (statt `2.75rem`)
- `h1` Kapitelseite: `3.5rem` (statt `2.5rem`)
- `.entry-nav`: `flex-direction: row; flex-wrap: wrap`
- `.entry-btn`: `flex: 1; min-width: 200px`

---

## Seiten-Layouts im Detail

### Startseite (`/`)

```
back-link (kein back-link, entfällt)
.home (flex column, gap: 1.5rem, padding-top: 2rem)
  ├── .eyebrow          "AUDIO-BEGLEITUNG ZUM BUCH"
  ├── h1                "Du bist genug — aber das Gehirn weiß es noch nicht"
  │                     (zweite Zeile via <br>, kursiv + olivgrün via em)
  ├── p.intro           Einleitungstext, max-width: 34rem
  └── nav.entry-nav     3 Einstiegs-Buttons (flex column → row ≥640px)
```

### Übungsindex (`/kapitel`)

```
.back-link              "← Zurück"
.eyebrow                "ALLE ÜBUNGEN"
h1                      "Womit möchtest du heute beginnen?"
                        (em: "heute beginnen?")
<FilterBar />           (Bedürfnis + Dauer Filter-Pills)
.card-grid              flex column, gap: 0.875rem, margin-top: 1.5rem
  └── <ChapterCard />   × n Karten
p.empty-hint            (hidden, erscheint wenn 0 Karten sichtbar)
```

### Kapitelseite (`/kapitel/[slug]`)

```
.back-link              "← Alle Übungen"
.breadcrumb             "KAPITEL {nummer}"
h1                      Titel (ggf. mit <br> + em nach —)
.tags                   flex wrap, gap: 0.5rem, margin-bottom: 1.75rem
  ├── .tag              Bedürfnis
  └── .tag              Uhr-Icon + Dauer
p.context               Kontexttext, max-width: 38rem, margin-bottom: 2rem
<AudioPlayer />         Bento-Player
.next-section           margin-top: 3rem
  └── .next-card        (nur wenn nicht letzte Kapitel)
```

### Empfehlungsseite (`/empfehlung`)

```
.back-link              "← Zurück"
.eyebrow                "PERSÖNLICHE EMPFEHLUNG"
h1                      "Wie geht es dir gerade?"
                        (em: "gerade?")
form                    max-width: 36rem
  ├── textarea
  ├── p.datenschutz
  └── button[submit]
#result-area            (hidden → sichtbar nach Submit)
  ├── #loading-text     (hidden während Laden)
  ├── #empfehlung-output
  │   ├── p.empfehlung-satz
  │   ├── a#uebung-card     (Haupt-Empfehlung)
  │   └── #alternativen-bereich
  │       ├── p.alternativen-label
  │       └── #alternativen-liste (bis zu 2 Karten)
  └── p#error-text      (nur bei Fehler)
```

### Sicherheitsseite (`/sicherheit`)

```
.back-link              "← Zurück zu den Übungen"
.eyebrow                "INNEZUHALTEN IST RICHTIG"
h1                      "Pause — zu viel?" (em kursiv olivgrün)
.content                flex column, gap: 1rem, max-width: 36rem
  ├── p                 × 3 Textabsätze
  ├── .support-card     Telefonseelsorge-Karte (grüner Hintergrund)
  └── p                 Abschlusstext
```

---

## Abstände zwischen Sektionen

| Element | Abstand |
|---|---|
| Eyebrow → h1 | `margin-bottom: 0.75rem` auf `.eyebrow` |
| h1 → erster Content | `margin-top: 1.75rem` auf Container (je nach Seite) |
| h1 → Tags (Kapitelseite) | `margin-bottom: 1.25rem` auf `h1` |
| Tags → Kontexttext | via `margin-bottom: 1.75rem` auf `.tags` |
| Kontexttext → AudioPlayer | `margin-bottom: 2rem` auf `.context` |
| AudioPlayer → Next-Card | `margin-top: 3rem` auf `.next-section` |
| Karten-Grid-Gap | `0.875rem` |
| Form-Elemente-Gap | `0.875rem` |
| Result-Area → oben | `margin-top: 2.5rem` |

---

## Hintergrund-Schichten (Z-Index-Reihenfolge)

| Ebene | z-index | Element |
|---|---|---|
| Hintergrund | 0 | `.blob-1`, `.blob-2` (fixed) |
| Inhalt | 1 | `<main>`, `<footer>` (relative) |
| Header | 50 | `.site-header` (sticky) |

---

## Body-Layout

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
```
Footer klebt am Ende dank `flex: 1` auf `main` (via global `main { flex: 1 }`).
