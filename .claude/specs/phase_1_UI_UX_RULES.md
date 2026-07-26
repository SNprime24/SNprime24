# UI/UX Rules — Design & UX Standards (Phase 1: README)

## Design Principles
- Clean, scannable, recruiter-friendly; content over decoration.
- Dark-theme-first (single consistent theme, e.g. `tokyonight`) across every widget.
- Professional tone; concise copy; purposeful emoji as section anchors only.

## Layout Rules
- Fixed vertical order: Hero → GitHub Stats → Coding Profiles → Activity Graph → Repo Showcase → Tech Stack.
- Separate sections with horizontal rules; one clear idea per section.
- Center-align hero; left-align content blocks.

## Component Rules
- All stat widgets share one theme and consistent width for visual cohesion.
- Badges use a uniform Shields.io style (`flat`) with logos.
- No broken/placeholder handles in shipped output.

## Accessibility Requirements
- Every widget image has descriptive alt text.
- Maintain sufficient text/background contrast (WCAG AA).
- Meaningful link text, not "click here".

## Rendering Rules
- README must read cleanly on GitHub web and mobile app, in both light and dark modes.
- Prefer widget themes that stay legible on GitHub's default backgrounds.
- Keep image widths modest so the profile doesn't overflow on narrow screens.

## Out of Scope (later phases)
Web-app design system, portfolio-page responsiveness, custom CSS/animations, light/multi-theme switching, i18n.

## Constraint
Limited to third-party widgets' fixed styling and GitHub Markdown rendering; no custom UI code.
