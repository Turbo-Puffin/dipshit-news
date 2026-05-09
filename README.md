# Dipshit News

Daily satirical record of presidential dipshittery. Astro static site, deployed to Bunny CDN at https://dipshit.news.

## Workflow

- **Daily writer (Buddy):** scans mainstream wires (AP / Reuters / Politico / WaPo) for the previous day's most mockable presidential moment. Drafts a post in one of the personas' voices. Opens a PR.
- **Editor (Matt):** reads, edits voice if needed, merges to `main`.
- **Deploy:** push to `main` triggers GitHub Actions → Bunny storage upload → pull-zone purge. Live in ~1 minute.

## Editorial rules

- **Underlying fact must be true.** Sourced from a mainstream wire, linked in frontmatter (`sourceUrl`).
- **Satire is the editorial layer.** The voice mocks; the facts don't get embellished.
- **Punch up, not down.** Targets are powerful institutions and public figures, not ordinary people.
- **No identity-based attacks.** Mock the conduct, not the demographic.
- **House style:** active voice, simple words, short sentences, no em-dashes, no "this is not X, this is Y."

## Local dev

```bash
yarn install
yarn dev
```

## Stack

- Astro 5 with content collections (posts + personas)
- Sitemap + RSS
- Bunny CDN (pull zone `dipshit-news`, storage zone `dipshit-news`)

## Personas

Personas live in `src/content/personas/`. Each post sets `author: <persona-slug>` in frontmatter. Posts surface a byline + bio block + dedicated author page.

Current roster:
- `carla-boone` — West Texas, exhausted intelligence, dry deadpan.
