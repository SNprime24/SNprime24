# PRD — Product Requirements (Phase 1: README)

## Product Goal
Ship a premium, self-updating GitHub profile README that aggregates GitHub and competitive-programming stats into one professional developer identity — reusing existing hosted widgets, no custom code.

## User Types
- **Primary:** Recruiters, hiring managers, open-source maintainers evaluating skills quickly.
- **Secondary:** Fellow developers, students, potential collaborators.

## Core Features
- Hero block: name, role, tech stack, current focus, social links.
- GitHub stats + contribution streak widgets.
- LeetCode, Codeforces, CodeChef profile widgets.
- Contribution activity graph.
- Repo showcase (top / most-starred / recently updated) via widgets.
- Tech-stack badges.

## User Stories
- As a recruiter, I see a candidate's full profile without visiting five sites.
- As the developer, my profile reflects current stats without manual edits.

## Acceptance Criteria
- README renders every widget with accurate live data.
- Stats stay current with zero manual editing.
- Real handles used; no broken/placeholder widgets.

## Out of Scope (later phases)
Companion portfolio page / web app, AI insights, resume generator, project recommender, RAG assistant, coding timeline, authentication, analytics database.

## Constraint
Ship in ~1 week using only hosted third-party widgets embedded in Markdown.
