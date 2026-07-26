# TRD — Technical Requirements (Phase 1: README)

## System Architecture
A single Markdown `README.md` in the GitHub profile repo (`<username>/<username>`) that embeds **live, hosted third-party widget image URLs**. No build step, no server, no datastore. GitHub's image proxy (camo) caches the rendered widgets; each widget regenerates on its own host.

## Stack / Libraries
None. Pure GitHub-Flavored Markdown. No frontend framework, package manager, or dependencies this phase.

## Widget / API Contracts
Consumed purely as query-param image URLs (handles centralized in the URLs):
- GitHub Readme Stats + Streak Stats.
- LeetCode via leetcard / community GraphQL widget.
- Codeforces via codeforces-readme-stats.
- CodeChef via profile/scraper widget.
- GitHub activity-graph widget.
- Shields.io for tech badges.

## Authentication Strategy
None. Public, read-only widgets only. No tokens in the README.

## Refresh / Automation
Widgets are self-updating (regenerated server-side per request). Optional: a lightweight GitHub Actions cron to bust the camo cache if staleness is observed — not required to ship.

## Deployment Strategy
Commit `README.md` to the profile repo. No hosting, CI build, or Vercel needed.

## Out of Scope (later phases)
Next.js/TypeScript/Tailwind/Framer Motion, companion portfolio page, API routes, `portfolio.json`, Vercel, database, self-generated SVG, AI/RAG.

## Constraint
Markdown + third-party hosted widgets only; zero custom code or infrastructure.
