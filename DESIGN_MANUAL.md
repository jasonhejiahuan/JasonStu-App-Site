# JasonStu Apps Design Manual

Status: Living operational project record  
Last verified against the repository: 2026-09-03

This document describes the website as it currently exists. It is not the
design constitution or a changelog. Rewrite stale statements when meaningful
implementation, design, routing, browser, or deployment decisions change.

## Session Resume

- **Project status:** The collection now contains two independent app chapters.
  LinkScope retains its device-led inspector; Trackpad Wizard adds a separate,
  screenshot-led tactile chapter with a verified public download.
- **Canonical origin:** `https://apps.jasonstu.cc`. Canonical, sitemap, and
  social metadata use this origin. The Cloudflare DNS connection, Sites custom
  hostname, and TLS certificate are active.
- **Implemented routes:** `/`; `/trackpad-wizard`, `/trackpad-wizard/privacy`,
  `/trackpad-wizard/support`; and `/linkscope`, `/linkscope/privacy`,
  `/linkscope/support`. Unknown routes return a real `404` document.
- **Stack:** TypeScript, React 19, vinext 1 beta, Vite 8, and a Cloudflare
  Worker-compatible Sites runtime. npm is the package manager.
- **Rendering and routing:** App Router-shaped server rendering through vinext.
  Every public route returns meaningful HTML directly. Ordinary navigation uses
  native anchors; no client router or application-specific client JavaScript is
  required for core content or interaction.
- **Design state:** The shared collection remains a restrained editorial index.
  LinkScope is a device-led technical chapter derived from the current app,
  supplied screenshots, production mark, transport/provider provenance,
  availability states, and diagnostic model. Its approved brief is
  `docs/art-direction/linkscope.md`. Trackpad Wizard follows a physical-surface
  signal from contact through gesture interpretation to haptic or shortcut
  response, using the production icon and two real application captures. Its
  approved brief is `docs/art-direction/trackpad-wizard.md`.
- **Browser enhancements:** CSS `:has()` powers device-detail tab selection,
  `content-visibility` defers below-fold rendering, and cross-document View
  Transitions provide optional continuity. Each has a complete CSS/native
  fallback; reduced motion disables transition behavior.
- **Important constraints:** Preserve real nested routes, native navigation,
  source-grounded product claims, a no-JavaScript baseline, first-class Light
  and Dark appearance, and the absence of unnecessary runtime dependencies.
- **Known limitations:** The current source has not yet had physical Safari,
  Firefox, 200% zoom, or assistive-technology QA. Trackpad Wizard's current
  repository captures document Light appearance; the page preserves that state
  rather than fabricating Dark screenshots. LinkScope Lite remains in development
  testing without a verified public destination. Both privacy pages are
  source-grounded implementation notes, not final distribution policies.
- **Next recommended work:** Run the physical browser and VoiceOver matrix,
  replace Trackpad Wizard captures when its interface changes materially, and add
  a LinkScope download only when its signed public release destination is verified.

## Authority and update rule

1. `AGENTS.md` gives the minimum always-loaded workflow.
2. This manual records current project reality.
3. `DESIGN_GUIDELINES.md` governs design and engineering quality.
4. Source and configuration are the final evidence of implemented behavior.

If source and this manual disagree, correct this manual. If source temporarily
violates the constitution, record that as explicit debt here; do not weaken the
constitution to match it.

## Route map

| Route | Current role | Rendering |
| --- | --- | --- |
| `/` | JasonStu Apps collection home and public-app index | Server-rendered document |
| `/trackpad-wizard` | Trackpad Wizard product chapter, release facts, and verified download | Server-rendered document |
| `/trackpad-wizard/privacy` | Current implementation privacy notes | Server-rendered document |
| `/trackpad-wizard/support` | Current support path and issue-reporting guidance | Server-rendered document |
| `/linkscope` | LinkScope product chapter and explanatory inspector | Server-rendered document |
| `/linkscope/privacy` | Current implementation privacy notes | Server-rendered document |
| `/linkscope/support` | Current support path and issue-reporting guidance | Server-rendered document |
| unmatched route | Collection-aware not-found page | Real HTTP `404` |

Routes are durable lowercase paths. Direct requests, reload, Back, Forward,
bookmarks, and copied URLs use normal browser semantics. Each app owns a top-level
slug and an independent composition; Trackpad Wizard intentionally does not
inherit LinkScope's application-window reconstruction.

## Frontend, build, and rendering architecture

- `app/` contains route documents, metadata, the shared header, and global CSS.
- vinext provides the App Router-compatible server renderer; Vite builds the
  Worker and browser assets; `worker/index.ts` delegates requests to the vinext
  handler without an unused image or data service.
- The Sites Vite plugin produces the hosting artifact. The project has no D1,
  R2, authentication, analytics, persistence, or third-party script.
- React is used as server-rendered authoring syntax. The LinkScope device
  inspector uses native radio markup plus CSS rather than a hydrated client
  component. Its responsive composition transforms from a desktop sidebar/detail
  window into a stacked device browser and detail workspace; it is never scaled
  down into unreadable miniature desktop UI.
- Trackpad Wizard uses semantic capability and mode sequences plus real, current
  repository captures. It has no simulated touch surface or hydrated interaction;
  WebP presentation copies reduce transfer while PNG/JPEG sources preserve
  truthful image and social-preview fallbacks.
- Product and document links are ordinary `<a>` elements. Cross-document
  enhancement may animate compatible navigation, but routing never depends on
  it.

## Shared shell and content model

The shared shell is intentionally small: a skip link, the original text-only
header wordmark, primary route context, and concise footer where appropriate.
The supplied JasonStu logo appears only as a quiet footer publishing signature;
it does not alter or compete with the established header. The collection home
presents two typographic product rows rather than a generic equal-card grid. The
header exposes both products on the collection route and the other product from
within each chapter.

The second product proved that action groups, primary links, closing links, the
header and publishing signature are genuinely shared, so their styling lives in
the shared layer. Product facts remain near their owning routes; no shared data
model is introduced while release and availability semantics still differ.
Every claim remains traceable to current source, assets, documentation, release
metadata, or inspected behavior.

## Current art direction

LinkScope's thesis is “follow the evidence, including the gaps.” Its dominant
materials are the production scope/orbit mark, the device → transport/provider →
parameter relationship, availability language, and a privacy-safe explanatory
reconstruction. Blue is the product accent and marks sources, selection, and
observed data; status colors keep semantic roles. The reconstruction now reads
as a distinct application window with a quiet title bar, toolbar, device
sidebar, and detail workspace. This bounded window treatment is reserved for
the product demonstration; it is not a reusable card or site-wide decoration.

The page rhythm moves from a quiet icon-led opening to a dense provider
inspector, a high-contrast availability chapter, a measured diagnostic trace,
and practical development facts. It deliberately omits pricing, testimonials,
conversion claims, fabricated screenshots, and an unverified download action.

Trackpad Wizard's thesis is “follow the physical surface from contact to
response.” Its silver production icon, ultraviolet-violet active-state accent,
real Overview and Gesture Studio captures, six-workspace ledger, and explicit
System/Enhanced boundary form its identity. The page does not simulate trackpad
input in the browser. Its rhythm moves from a quiet icon and release action to a
wide application capture, a faster capability ledger, a second focused capture,
a high-contrast mode boundary, and verified release facts.

The direct download resolves to the current 0.3.0 (Build 4) notarized DMG. The
page names macOS 26+, Developer ID signing, notarization, stapling, SHA-256
verification, MPL-2.0 source, local data behavior, and Accessibility scope only
because each is supported by the current app source or public release.

## Appearance and typography

- Light and Dark appearances have separately authored semantic canvas, text,
  line, accent, status, and focus relationships in `app/globals.css`.
- The operating-system `prefers-color-scheme` value is the launch behavior.
  There is no manual theme override yet; this is a deliberate scope choice, not
  an undecided implementation.
- Theme-color metadata is supplied for both appearances.
- Typography uses the native system sans stack and a native UI-monospace stack.
  Display weights were reduced and the responsive system changes weight,
  tracking, line-height, measure, and intentional line breaks at smaller desktop,
  tablet, and mobile widths. This keeps platform affinity and eliminates font
  transfer or layout-shift risk; no webfont or preloader is present.

## Responsive behavior

Layout uses fluid type, spacing, intrinsic grids, and content-driven changes.
Wide screens place each product's identity and evidence in its own asymmetrical
composition. LinkScope turns technical side material into a vertical trace on
narrow screens. Trackpad Wizard turns its capability ledger, mode comparison,
signal path, release facts, and header navigation into single-column sequences
without changing semantic source order; screenshots retain their native aspect
ratios. Safe-area-aware gutters and touch sizing are part of the base CSS.

## Accessibility implementation

- Server-rendered landmarks, one route-level `h1`, ordered headings, lists,
  tables, definitions, figures, captions, and fieldset/radio semantics carry the
  document structure.
- A visible-on-focus skip link and authored `:focus-visible` treatment support
  keyboard navigation. Provider choices are native radios with labels.
- Decorative uses of product marks have empty alternative text. Meaningful
  reconstructions and screenshots have specific alternatives, captions, capture
  dates, appearance and locale notes, and adjacent textual equivalents.
- Motion respects `prefers-reduced-motion`; forced-colors rules preserve visible
  controls and focus. Core content and navigation work without JavaScript.
- Automated rendered-document checks exist. Physical VoiceOver, switch, zoom,
  and full browser-engine QA remain open validation work.

## Progressive enhancement and fallbacks

| Enhancement | Current benefit | Detection | Complete fallback |
| --- | --- | --- | --- |
| CSS `:has()` | Shows the selected Summary, Raw Parameters, or History view | `@supports selector(:has(*))` | All device-detail panels remain in document flow |
| `content-visibility: auto` | Avoids unnecessary below-fold rendering | `@supports (content-visibility: auto)` | Normal eager CSS rendering |
| Cross-document View Transitions | Subtle continuity for native navigation | `@supports (view-transition-name: none)` and motion preference | Immediate normal document navigation |

No essential content, state explanation, control, focus order, or route depends
on these capabilities. There are no user-agent branches or browser-specific
code paths at launch.

## Performance architecture

The application ships no custom product-interaction bundle, remote font,
analytics, or third-party runtime. LinkScope's mark is a compact local SVG.
Trackpad Wizard uses a lossless WebP icon and a 96 KB WebP Overview presentation
copy, while keeping authored PNG/JPEG fallbacks. Social assets are local and are
not requested during ordinary collection rendering. Below-fold sections opt into
deferred rendering where supported.

The current vinext navigation/hydration runtime transfers about 111 KB gzipped
before product interaction, roughly 31 KB above the constitution's initial
80 KB JavaScript aim. This is an explicit launch exception for the supported
Sites server-rendering/runtime path, not permission to add application script.
Recheck vinext releases and a Sites-supported zero-hydration path; remove this
exception when the same real-route and hosting behavior can ship more lightly.

Keep this shape until evidence requires more: prefer HTML/CSS and native browser
behavior, avoid speculative component systems, and audit any new dependency for
runtime, maintenance, and privacy cost.

## Assets and social metadata

- `public/linkscope-mark.svg` is derived from the current product's authored
  production geometry and is the page's primary identity material.
- `public/jasonstu-logo.svg` and `public/jasonstu-logo-dark.png` are byte-for-byte
  copies of the supplied official Light and Dark brand assets. Native `<picture>`
  selection uses them only in the footer, without client-side appearance logic.
- `public/favicon.svg` is a compact mark treatment.
- `public/trackpad-wizard-icon.png` is a copy of the current production icon;
  `public/trackpad-wizard-icon.webp` is its lossless presentation copy.
- `public/trackpad-wizard-overview.png` and
  `public/trackpad-wizard-gesture.jpg` are real repository captures from
  2026-08-30. `public/trackpad-wizard-overview.webp` is an efficient in-page
  presentation copy; the PNG also serves Trackpad Wizard social metadata.
- `public/og.png` is the refreshed two-product collection social card;
  `public/linkscope-social.png` remains LinkScope's route-specific card. None is
  used as page-background decoration.
- Route metadata resolves against `https://apps.jasonstu.cc`. Each product page
  owns its social image; privacy and support routes clear inherited images and
  use summary metadata.
- `/robots.txt` permits all user agents to crawl this host and points to the
  canonical `/sitemap.xml`. The sitemap contains only canonical
  `apps.jasonstu.cc` routes.
- HTML responses explicitly permit unrestricted search-result previews through
  `X-Robots-Tag: max-snippet:-1, max-image-preview:large, max-video-preview:-1`.
  This preview policy does not override the framework-authored `noindex` on real
  `404` documents; non-HTML crawler resources do not receive the header.
- No private device names, addresses, identifiers, or captured user interface
  data from the inspected development machine are published.

## Deployment

ChatGPT Sites is the selected production runtime and host. The Sites project is
`appgprj_6a8687dcb59881918e9895b01b15b506` with slug `jasonstu-apps`; the
production site is public. `.openai/hosting.json` records the
opaque project ID and confirms that D1 and R2 are unused. The custom hostname
`apps.jasonstu.cc` is active through a DNS-only Cloudflare CNAME; Sites reports
both the hostname and TLS certificate active. Only the exact hostname is bound;
there is no wildcard or other `jasonstu.cc` custom hostname attached to this
Site.

## Significant decisions and rejected returns

- Keep native multi-document navigation; do not introduce a client router to
  simulate routes that the host can serve directly.
- Keep the CSS-only, device-led inspector while it communicates the product
  accurately; do not restore a provider-first selector or hydrate it for cosmetic
  state management.
- Keep Trackpad Wizard screenshot-led and static while real captures communicate
  the product; do not build a decorative browser simulation of touch or haptics.
- Publish Trackpad Wizard's direct download only while the matching notarized DMG
  and checksum remain verifiable at the declared release URL.
- Do not add Tailwind, a component library, a CMS, D1/R2, analytics, or an image
  pipeline without a demonstrated requirement.
- Do not turn the collection into an equal grid of generic cards or future app
  pages into LinkScope reskins.
- Do not publish a download, version, price, privacy promise, or capability that
  cannot be reconciled with current product evidence.
- Do not replace explicit availability states with empty placeholders or generic
  success/error chrome.
- Do not add ambient orbit animation, decorative parallax, or scroll hijacking.

## Open questions and technical debt

- Which signed LinkScope build and durable App Store or direct-download
  destination will become the first verified public release?
- Does a later collection need an Auto/Light/Dark selector in addition to the
  current system-preference behavior?
- Should future product additions justify a shared typed index for name, route,
  status and artwork, or do their availability differences still favor local data?
- Physical Safari/WebKit, Firefox, high-zoom, VoiceOver, and energy-use checks
  remain required before treating the first implementation as fully hardened.

## Next actions

1. Run physical WebKit, Firefox, keyboard, VoiceOver, zoom, orientation, and
   reduced-motion checks; record only actionable differences.
2. Reconcile LinkScope release metadata and add a download only after its signed
   distribution path is public and verified.
3. Replace Trackpad Wizard captures after material interface changes and record
   both Light and Dark evidence when the app supplies both.
4. Update either privacy document when its app's storage, permission, network,
   or distribution behavior changes.
