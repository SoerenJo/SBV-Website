# Schwerbehindertenvertretung Susanne Jorczik – Website

Statische Website (reines HTML/CSS/JS, kein Build-Schritt) der Schwerbehindertenvertretung
für Lehrkräfte an Gymnasien, Weiterbildungskollegs und Zentren für schulpraktische
Lehrerausbildung bei der Bezirksregierung Arnsberg.

**Live:** https://sbv-gy-arnsberg.com/

## Deployment

Gehostet über Cloudflare Pages, Quelle: `master`-Branch, Root-Verzeichnis. Jeder Push auf
`master` löst automatisch einen neuen Build/Deploy aus (kein manueller Schritt nötig).

## Lokal ansehen

```bash
python3 serve.py
```
und dann `http://localhost:4173` öffnen. (Config dafür liegt auch in `.claude/launch.json`.)

Die Seiten sind intern ohne `.html`-Endung verlinkt (z.B. `/aktuelles`), passend zu Cloudflare
Pages' Clean-URL-Verhalten in Produktion. `serve.py` bildet dieses Verhalten lokal nach
(`python3 -m http.server` allein würde bei diesen Links "Cannot GET /..." liefern).

## Seitenübersicht

| Seite | Datei | Funktion |
|---|---|---|
| Start | `index.html` | Startseite mit Vorstellung und Kurzbeschreibung der Vertrauensperson |
| Über uns | `ueber-uns.html` | Stellt Susanne Jorczik und Jörg Strugalla (Stellv.) als Vertrauenspersonen vor |
| Aktuelles | `aktuelles.html` | Einladung zur Versammlung und aktuelle Termine |
| **Antragsstellung** (Dropdown) | | |
| ↳ Was ist eine Behinderung? | `was-ist-eine-behinderung.html` | Definition „Behinderung“ nach § 2 Abs. 1 SGB IX |
| ↳ Antrag auf Schwerbehinderung | `antrag-schwerbehinderung.html` | Erst- und Änderungsantrag auf den Schwerbehindertenausweis |
| ↳ Antrag auf Gleichstellung | `antrag-gleichstellung.html` | Antrag auf Gleichstellung bei der Bundesagentur für Arbeit |
| Teilzeit – Teildienstfähigkeit | `teilzeit.html` | Infos zu Teildienstfähigkeit und Teilzeitbeschäftigung |
| Amtsarzt/Amtsärztin | `amtsarzt.html` | Wann Lehrkräfte mit dem Amtsarzt zu tun haben und wie die SBV unterstützt |
| Ressourcen | `downloads.html` | Formulare, Anträge und Merkblätter zum Download |
| Impressum | `impressum.html` | Impressum |
| Datenschutz | `datenschutz.html` | Datenschutzerklärung |

## Ordnerstruktur

- `assets/css/style.css` – gesamtes Stylesheet (ein einziger Breakpoint bei 960px)
- `assets/img/` – Bilder, Logo, Favicon
- `assets/js/nav.js` – Mobile-Menü- und Dropdown-Verhalten
- `assets/dokumente/` – die auf `downloads.html` verlinkten PDF/DOCX-Dateien (webtaugliche Dateinamen)
- `Dokumente/` – Originaldateien der Downloads (Ursprungsnamen, inkl. Umlaute/Leerzeichen), Quelle für `assets/dokumente/`
