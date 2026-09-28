# JasonStu Apps Design Manual

Status: Living operational project record  
Last checked against source and repository evidence: 2026-09-28

This manual records the website that is implemented and the current shared
visual direction. It is not a release changelog. Replace outdated descriptions
when source, routes, deployment, or product evidence changes.

## Current state

- **Site:** The public collection of independent JASON Studio applications at
  `https://apps.jasonstu.cc`. The current product routes are LinkScope Lite and
  Trackpad Wizard.
- **Routes:** `/`; `/linkscope`, `/linkscope/support`,
  `/linkscope/privacy`; `/trackpad-wizard`, `/trackpad-wizard/support`, and
  `/trackpad-wizard/privacy`. Unknown paths return an HTTP 404 document.
- **Rendering:** TypeScript, React 19, vinext App Router-compatible server
  rendering, Vite, and Cloudflare Workers Static Assets. Each route emits useful
  HTML on direct load. Core content and navigation use semantic HTML and native
  anchors, with no application-specific client interaction required.
- **Shared visual direction:** Native system sans typography; warm paper and
  ink neutrals, with blue links; consistent content edges, type hierarchy, and
  section rhythm; real product imagery; and fine separators where they clarify
  content. The collection home, both product chapters, and their support and
  privacy pages share this visual language while keeping product-specific
  content and imagery. The active concise brief is
  `docs/art-direction/site-visual-rebuild.md`.
- **Product content:** LinkScope Lite is free on the Mac App Store, version
  2.0.1 (13), for macOS 15 or later. Its page describes read-only inspection
  of macOS-exposed device details, explicit availability, diagnostics started
  on demand, and six dashboard widget types. Its LinkScope Lite 2.0.1 policy
  took effect September 23, 2026; support explains permissions, local history,
  readings, diagnostics, release facts, and safe issue reporting. Trackpad Wizard
  presents its current 0.3.0 (Build 4) release and macOS 26+ requirement. Its
  support and privacy pages describe the app's current mode, permission,
  storage, and distribution boundaries. Product claims and document facts stay
  in their owning pages and must remain grounded in the app and release evidence.
- **Visual audit and checks:** On 2026-09-28, lint, typecheck, the 18 rendered
  HTML/SSR checks, production build, and Cloudflare deployment dry run passed.
  Chromium reflow, both appearances, no-JavaScript navigation, and selected
  Safari Technology Preview views were also checked as detailed below.

## Authority and current design decision

1. `AGENTS.md` describes the project workflow and routing invariants.
2. This manual describes current implementation and operation.
3. `docs/art-direction/site-visual-rebuild.md` records the latest user-directed
   shared site style. Where it conflicts with older visual treatments or
   generic styling language in previous app briefs, the latest direction wins.
4. Route source, public assets, app source, release records, and configuration
   are evidence of current behavior and facts.

Do not change app behavior or policy claims as part of visual work. The
LinkScope privacy page, both apps' support instructions, and Trackpad Wizard's
privacy notes are source-authored product documents. Preserve their meaning
unless the underlying product evidence changes.

## Rendering and runtime

- `app/` contains the shared layout and shell, collection home, two product
  pages, support and privacy documents, not-found page, metadata, and global CSS.
- `app/layout.tsx` sets the production metadata base, document language,
  appearance theme colors, and keyboard skip link. Each main landmark accepts
  focus through `tabIndex={-1}`. Shared header and footer markup live in
  `app/site-header.tsx`; navigation distinguishes the current product page from
  its document section with `aria-current="page"` and `"location"` respectively.
- `app/globals.css` defines reset, system-preference Light/Dark colors, system
  sans typography, shared shell, content sections, document measure, responsive
  stacking, focus, reduced-motion scroll behavior, forced-colors, and print
  rules. There is no custom font download or front-end component library.
- The pages use semantic server-rendered React. Product interactions are links
  to app, store, source, and documentation destinations; there is no simulated
  LinkScope inspector or client-side application router.
- `worker/index.ts` delegates ordinary page routing to vinext and applies
  response headers, beta indexing policy, `/robots.txt`, and optional
  `text/markdown` conversion through Workers AI. HTML is the complete fallback
  if conversion is unavailable. Vite and the Cloudflare plugin build the Worker
  and static assets.
- `wrangler.jsonc` defines the production Worker and named `beta` environment.
  Pages are static source-authored documents revalidated hourly and cached at
  the Cloudflare edge. The repository does not use D1, R2, authentication,
  browser analytics, site cookies, or a third-party browser script.

## Route roles and shared shell

The collection home is the index to public apps and gives each entry its own
title, concise purpose, availability/requirements, and links. Product pages
remain separate chapters rather than recolored copies. Support and privacy
documents use the same header, footer, system typography, page edges, and link
style, while retaining each app's established factual content. Durable lowercase
paths support direct navigation, reload, bookmarks, sharing, Back, and Forward.

All site navigation is implemented with ordinary `<a>` elements. Use links for
route changes and external destinations; keep browser history and native focus
behavior. Each public route must continue to return its own meaningful HTML on
direct request and reload, and the unmatched path must remain a real 404.

## Visual system

The shared composition uses one centered site width and repeated alignment
anchors so the home, app chapters, and documents read as one publisher's site.
The standard content width is 80rem with fluid side gutters; long-form support
and privacy content narrows to approximately 51rem. Sections are separated by
space, clear headings, and thin rules. Real product captures carry the visual
weight; content must not be padded with decorative microcopy.

Use the operating system's sans-serif stack for all interface and editorial
text. Preserve a clear scale: large route titles, readable section titles, and
comfortable body text. Avoid tiny monospaced eyebrows, numbered bubble steps,
design-explanation captions, purple-gradient marketing treatments, and generic
colored rounded feature-card grids. Blue serves ordinary links and focused
actions against warm-white/ink neutrals. Product-specific color may remain in
authentic app artwork or actual captured interface, not in a site-wide card or
gradient system.

Responsive layouts reflow into a single column at narrow widths while retaining
logical source order, useful screenshot size, readable type, tappable links, and
the same content alignment. Avoid empty side columns and forced desktop
composition on phones. Appearance follows `prefers-color-scheme`; Light and Dark
tokens preserve readable contrast and visible focus. Respect reduced motion and
forced-colors settings.

## Product evidence and assets

- **LinkScope release:** LinkScope Lite 2.0.1 (13) is free on the Mac App Store
  and requires macOS 15+. The September 28, 2026 release audit records App Store
  Connect and Apple's public US lookup verification, together with its limits
  and unresolved release-document inconsistencies:
  `docs/audits/linkscope-2.0.1.md`. Do not call the dashboard capture a fresh
  build 13 capture.
- **LinkScope dashboard:** `public/linkscope-dashboard.png` is derived from
  LinkScope source commit `f5487f9`,
  `Design/AppStore/2.0.0/captured/dashboard-en.png`. The documented native
  capture was made September 19, English, Dark appearance, at 2798 × 1664. Its
  precise app build and macOS version were not recorded. Responsive WebP copies
  are presentation derivatives; the PNG is retained as the full-size source and
  fallback. Preserve the original appearance and provide text describing the
  six dashboard widgets.
- **Trackpad Wizard:** The production icon is copied to
  `public/trackpad-wizard-icon.png`. The Overview and Gesture Studio images are
  real repository captures from August 30, 2026. The Overview's full-size PNG
  and the Gesture Studio JPEG remain the source captures; WebP files are
  presentation copies. Do not claim a browser demonstration is collecting live
  trackpad input.
- `public/jasonstu-logo.svg` and `public/jasonstu-logo-dark.png` are supplied
  publisher artwork used in the footer, with a CSS monochrome filter preserving
  contrast in both appearances. The LinkScope mark, app icon, screenshots,
  favicon, and social images are local assets; page backgrounds do not use
  screenshot or social art.
- Keep public images truthful, privacy-safe, correctly proportioned, and
  responsive. Provide meaningful alternative text for evidence and empty alt
  text for decorative marks.

## Metadata, crawling, and deployment

The canonical origin is `https://apps.jasonstu.cc`. Route canonical, sitemap,
and social metadata use that host. The sitemap contains the seven public routes;
`/robots.txt` permits crawling and points to the sitemap. The Worker adds
search-preview response headers to HTML. The beta host is excluded from
indexing.

Cloudflare Workers is the production runtime. The `jasonstu-apps` Worker serves
the custom domain `apps.jasonstu.cc` and its Static Assets. The existing
`jasonstu-apps-beta` Worker at `https://apps.beta.jasonstu.cc` is a separate
no-index beta and rollback target. Cloudflare Workers Builds watches the
public GitHub repository's `main` branch and automatically publishes successful
production builds to the existing production Worker. Local Wrangler deployment
is the recovery path. A successful push alone does not prove that deployment or
public content verification completed.

Server-side Worker invocation logs and traces are enabled with query strings
redacted. This is operational telemetry and does not add a browser analytics
beacon. No browser analytics or user-facing app data collection is part of the
site.

## Validation and open work

For site-wide visual changes, check the collection, both product routes, both
support pages, both privacy pages, and the not-found page by direct load and
reload. Preserve route status, headings, native links, policy facts, and release
facts. Check keyboard focus, Light/Dark appearance, narrow reflow, reduced
motion, and 200% zoom; evaluate Safari/WebKit, Chromium, and Firefox where
available.

The September 28 rebuild was checked with:

- Seven routes at 320, 768, and 1440 CSS pixels in Light and Dark appearance
  (42 Chromium combinations): one h1, no page-width overflow, and no authored
  visible text below 16 CSS pixels. Reduced motion selected automatic scrolling.
- All seven routes directly loaded and reloaded with JavaScript disabled.
  Keyboard activation of the skip link moved focus to the main landmark;
  product/support navigation and Back/Forward also worked without scripts.
- Viewport screenshots at 1440px and 390px independently reviewed for alignment,
  focus, text hierarchy, and product image placement. Full-page capture output
  from this tool session had stitching artifacts, so only viewport captures
  were used as visual evidence.
- Safari Technology Preview: home, both product pages, and LinkScope support;
  product reloads; LinkScope and its support page at verified 200% page zoom.
- All 19 unique internal destinations and image assets returned 200, with no
  broken internal fragment targets; all eight external destinations returned
  200 after redirects. The shared 404 is covered by the SSR tests.

This does not constitute a full Firefox, VoiceOver, forced-colors, or physical
mobile-device pass. Production delivery of this branch is a separate step from
local validation. Local screenshots and check output live in ignored
`outputs/rebuild/`.

Next operational work remains: complete the remaining browser and assistive-technology review,
observe production Worker request/error/latency behavior during the planned
observation period, keep Lite release facts aligned with Apple, and replace
application captures only when the underlying app interface changes materially.
