# Dipshit

Daily satirical record of presidential dipshittery. Astro static site at https://dipshit.news.

## Workflow

- **Daily writer (Buddy):** scans mainstream wires (AP / Reuters / Politico / WaPo / Newsweek / WRAL / etc.) for the previous day's most mockable presidential moment. Drafts a post in one of the personas' voices. Opens a PR.
- **Editor (Matt):** reads, edits voice if needed, merges to `main`.
- **Deploy:** push to `main` triggers GitHub Actions → Bunny storage upload → pull-zone purge. Live in ~1 minute.

## Editorial rules

- **Real events only.** Underlying fact must be sourced to a mainstream wire and linked in frontmatter (`sourceUrl`, `sourcePublisher`).
- **Satire is the editorial layer.** Voice mocks the conduct; the facts don't get embellished.
- **Punch up, not down.** Powerful institutions and public figures, never ordinary people.
- **President-agnostic.** Headlines and copy refer to "the President," not the sitting officeholder by name. No party signifiers (red/blue/donkey/elephant). The joke is institutional.
- **Specifically dumb, not broadly outraging.** Concrete moments — a homophone gaffe, a fictional sandwich chain, a wrong-calendar holiday. Not generalized policy outrage.
- **No identity-based attacks.** Mock the conduct, not the demographic.
- **House style.** Active voice. Simple words. Short sentences. No em-dashes. Headlines end with a period. Section headers end with a period.

## Stupid Score

Every article carries a 0–100 Stupid Score. The score is editorial — not a sum of the rubric. The rubric (5 rows, max 100) is a diagnostic breakdown:

| Criterion | Cap |
|---|---|
| Factual basis | 25 |
| Self-awareness | 20 |
| Staff containment | 20 |
| Recovery attempt | 15 |
| Public spectacle | 20 |

Lower rubric scores = worse performance on that axis (i.e., contributing to the overall stupidity).

## Personas

Personas live in `src/content/personas/`. Each article sets `author: <persona-slug>` in frontmatter. Articles render a byline + bio block + dedicated author page.

Current roster:
- `carla-boone` — West-Texas Correspondent. Dry, deadpan, restrained sarcasm.
- `frank-dalton` — Boardwalk Affairs. Big personality, mock outrage, rhythmic storytelling.
- `vincent-crowe` — Institutional Decay. Surgical, noir, restraint instead of volume.

## Local dev

```
yarn install
yarn dev
```

## Build

```
yarn build
```

Output goes to `dist/`. The deploy workflow picks it up and uploads to the `dipshit-news` Bunny storage zone, then purges pull zone 5690058.

## Stack

- Astro 5 (static), content collections (`articles`, `personas`)
- Self-hosted fonts via `@fontsource` (Playfair Display / Crimson Pro / IBM Plex Mono)
- Sitemap (`@astrojs/sitemap`) and RSS (`@astrojs/rss`)
- Bunny CDN (pull zone `dipshit-news` / storage zone `dipshit-news`)

## Performance target

Lighthouse 100 / 100 / 100 / 100 (perf, a11y, best practices, SEO). Run the audit on every PR before merging.
