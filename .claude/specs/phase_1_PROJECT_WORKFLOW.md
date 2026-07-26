# Project Workflow — Execution Tracking (Phase 1: README)

Living document. Update checkboxes and Status as work progresses. Scope: Phase 1 (README) only.

## Dependencies
GitHub profile repo (`<username>/<username>`) · valid platform handles (GitHub, LeetCode, Codeforces, CodeChef) · hosted third-party widgets (Readme Stats, Streak Stats, leetcard, codeforces-readme-stats, CodeChef widget, activity-graph, Shields.io). No package manager, hosting, or CI required.

## Task Checklist — Phase 1: Premium README
- [ ] Collect and confirm real platform handles. *(defaults staged in `profile-config.json`; edit and push — GitHub Actions regenerates `README.md` automatically via `.github/workflows/generate-readme.yml`)*
- [x] Replace placeholder usernames in `README.md`. *(pending final swap once handles above are confirmed)*
- [x] Add hero: name, role, tech stack, current focus, social links.
- [x] Add GitHub stats + streak widgets (shared theme).
- [x] Add LeetCode, Codeforces, CodeChef profile widgets.
- [x] Add contribution activity graph.
- [x] Add repo showcase (top / most-starred / recent) via widgets.
- [x] Add tech-stack badges.
- [x] Add descriptive alt text to every widget image.
- [ ] Verify light/dark and mobile rendering on GitHub.

## Manual & Automated Testing
- **Manual:** visually verify every widget renders with live data; no broken handles/links; check GitHub light, dark, and mobile views.
- **Automated (optional):** link checker over the README to catch dead widget/social URLs.

## Progress Tracking
| Item | Status |
|------|--------|
| Handles confirmed | In progress (defaults staged, awaiting user edits) |
| README sections built | Done |
| Rendering verified | Not started |
| Committed & live | Not started |

Update Status: Not started → In progress → Done.

## Deployment Tasks
- [ ] Commit `README.md` to the profile repo.
- [ ] Confirm the profile page renders correctly on GitHub.

## Upcoming Phases (not scoped here)
- **Phase 2 —** Companion Next.js portfolio page + `portfolio.json`.
- **Phase 3 —** Automated refresh (GitHub Actions / Vercel Cron) + hosting.
- **Later —** AI insights, resume generator, recommender, RAG assistant, timeline, analytics DB.

## Constraint
~1-week effort; hosted third-party widgets embedded in Markdown only; no custom code, backend, or DB.

## Out of Scope
Everything under Upcoming Phases; no web app, database, or automation in Phase 1.
