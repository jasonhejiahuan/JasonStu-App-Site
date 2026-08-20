# JasonStu Apps Repository Guide

## Project

This repository is the frontend website for JasonStu Apps, a collection of
independent applications developed and published under the JasonStu identity.
Apps may be free, experimental, open source, personal, or commercial; conversion
maximization is not the governing objective.

Preferred canonical production origin: `https://apps.jasonstu.cc`.

The root `/` is the collection home. Each public app should normally own one
durable, lowercase, human-readable top-level route such as `/linkscope`, with
app-owned pages below it such as `/linkscope/privacy` and `/linkscope/support`.

## Documentation hierarchy

1. Read this file for always-applicable operating instructions.
2. Read `DESIGN_MANUAL.md` for current implementation and project state.
3. Inspect relevant source and configuration; they are authoritative for current
   behavior.
4. Follow `DESIGN_GUIDELINES.md` for design, accessibility, browser,
   performance, and progressive-enhancement policy.

Consult `DESIGN_GUIDELINES.md` before major product-page design, art direction,
or consequential frontend architecture work. Do not weaken it to describe
temporary implementation debt; record that debt in `DESIGN_MANUAL.md`.

## Priorities

- Put user experience, accessibility, speed, and responsive interaction first.
- Preserve durable URLs, deep links, and native browser behavior.
- Treat Safari/WebKit as first-class alongside current Chromium and Firefox.
- Deliver meaningful HTML through static or server rendering where practical.
- Core content and normal navigation must not depend on client-side JavaScript.
- Use progressive enhancement; advanced APIs need detection and complete
  fallbacks as defined in `DESIGN_GUIDELINES.md`.
- Keep art direction strong but restrained and specific to each product.
- Share engineering quality and editorial discipline, not identical page layouts.
- Prefer maintainable platform features over unnecessary dependencies,
  abstractions, component systems, or client frameworks.
- Never add dark patterns, artificial urgency, engagement traps, or a generic
  SaaS marketing structure merely because they are common.

## Routing invariants

- Directly opening or reloading any published nested URL must return that page,
  not a 404 or a client-only recovery screen.
- Back, Forward, bookmarking, sharing, canonical URLs, focus restoration, and
  ordinary link semantics must remain reliable.
- Use links for navigation and buttons for actions. Do not replace native scroll
  or History behavior without a documented, tested reason and fallback.
- The collection home must make public apps discoverable and meaningfully
  explorable; it must not become a passive poster, screenshot gallery, or
  equal-card grid.
- Product pages are independent chapters. Never turn the first app page into a
  template that future apps merely reskin.

## Workflow

Before substantial work:

1. Read `DESIGN_MANUAL.md` and inspect the affected source/configuration.
2. Check for existing patterns, tests, assets, and unresolved decisions.
3. For design or major frontend work, read the relevant parts of
   `DESIGN_GUIDELINES.md` and write the required art-direction brief.
4. Choose the smallest maintainable change that preserves the invariants above.
5. Update `DESIGN_MANUAL.md` in the same session when routing, rendering,
   tooling, deployment, browser enhancements, art direction, accessibility,
   assets, or other architecture changes materially.

Rewrite stale manual content; do not turn the manual into a changelog. Trivial
formatting, spelling, and local implementation edits do not require an update.

## Validation

- Run the repository's relevant formatting, type, test, build, and link checks.
- Test affected routes by direct load and reload, not only client navigation.
- Validate keyboard use, Light/Dark appearance, responsive layouts, reduced
  motion, and intended fallbacks in proportion to the change.
- Check affected behavior in WebKit, Chromium, and Firefox when practical.
- Report what was verified, what was not, and any new debt or undecided choice.
