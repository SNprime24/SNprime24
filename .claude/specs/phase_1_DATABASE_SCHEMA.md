# Database Schema (Phase 1: README)

**Not applicable — Phase 1 has no database and no persisted data.** All stats are fetched live by third-party widgets at render time. The only structured data is the set of platform handles embedded in the widget URLs, documented here as a config reference for implementation and future migration.

## Entities
Conceptual only (kept in the README's widget URLs, not stored):
- **handle** — one per platform.

## Fields
- **handle**: `platform` (github | leetcode | codeforces | codechef), `username`.

## Relationships
None. Flat list of handles.

## Primary Keys
Logical key: `platform` (one handle per platform).

## Indexing Strategy
N/A — no datastore, no queries.

## Security Considerations
Public, read-only handles only. No PII, credentials, or API tokens in the README; any future automation tokens live in CI secrets.

## Out of Scope (later phases)
`portfolio.json` model (profile, projects, social links, cached stats), Supabase/PostgreSQL, historical trend tables, migrations, write APIs.

## Constraint
No storage layer this phase; handles map cleanly to future relational tables.
