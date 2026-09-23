# JasonStu Apps Design Manual

Status: Living operational project record  
Last verified against the repository: 2026-09-23

This document describes the website as it currently exists. It is not the
design constitution or a changelog. Rewrite stale statements when meaningful
implementation, design, routing, browser, or deployment decisions change.

## Session Resume

- **Project status:** The collection now contains two independent app chapters.
  LinkScope retains its device-led inspector; Trackpad Wizard adds a separate,
  screenshot-led tactile chapter with a verified public download. Cloudflare
  Workers now serves the canonical production origin. The no-index beta Worker
  remains available at `https://apps.beta.jasonstu.cc`. The former ChatGPT Sites
  project is owner-only and no longer part of the source or deployment path.
- **Canonical origin:** `https://apps.jasonstu.cc`. Canonical, sitemap, and
  social metadata use this origin. The beta hostname is explicitly excluded
  from search indexing.
- **Implemented routes:** `/`; `/trackpad-wizard`, `/trackpad-wizard/privacy`,
  `/trackpad-wizard/support`; and `/linkscope`, `/linkscope/privacy`,
  `/linkscope/support`. Unknown routes return a real `404` document.
- **Stack:** TypeScript, React 19, vinext 1 beta, Vite 8, Cloudflare Workers
  Static Assets, and Workers AI Markdown Conversion. npm is the package manager.
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
  rather than fabricating Dark screenshots. LinkScope Lite has a supplied Mac
  App Store listing URL, but its listing contents and download availability have
  not been verified. The LinkScope Lite privacy page is a distribution policy
  grounded in the 2.0.1 source; Trackpad Wizard privacy remains implementation
  notes. The production Worker has comparative lab measurements and operational telemetry,
  but not yet enough real-user traffic for field Core Web Vitals conclusions.
- **Next recommended work:** Run the physical browser and VoiceOver matrix,
  observe production request/error/latency behavior, and retain the beta
  rollback path until the production observation period is complete.
  Replace Trackpad Wizard captures when its interface changes materially, and
  advertise a LinkScope download only when its public availability is verified.

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
| `/linkscope/privacy` | LinkScope Lite 2.0.1 privacy policy | Server-rendered document |
| `/linkscope/support` | Current support path and issue-reporting guidance | Server-rendered document |
| unmatched route | Collection-aware not-found page | Real HTTP `404` |

Routes are durable lowercase paths. Direct requests, reload, Back, Forward,
bookmarks, and copied URLs use normal browser semantics. Each app owns a top-level
slug and an independent composition; Trackpad Wizard intentionally does not
inherit LinkScope's application-window reconstruction.

## Frontend, build, and rendering architecture

- `app/` contains route documents, metadata, the shared header, and global CSS.
- vinext provides the App Router-compatible server renderer; Vite builds the
  Worker and browser assets. `worker/index.ts` delegates requests to the vinext
  handler and adds passive security, cache, beta-indexing, crawler-policy, and
  Markdown content-negotiation behavior. A Workers AI binding converts only
  successful HTML page responses explicitly requested as `text/markdown`.
- The Cloudflare Vite plugin and `@vinext/cloudflare` CDN adapter produce the
  Workers deployment. The former Sites Vite plugin and `.openai/hosting.json`
  have been removed so the repository has a single hosting path. The project has
  no D1, R2, authentication, browser analytics, application persistence, or
  third-party script.
- Pages are declared static with a one-hour revalidation interval. The CDN
  adapter stores rendered responses at the edge while direct requests still run
  through the Worker entry point for routing and response policy.
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
and practical app facts. It deliberately omits pricing, testimonials,
conversion claims, fabricated screenshots, and an unverified download action.
The supplied Apple listing link is explicitly labelled coming soon; it is not
presented as a working download.

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
| Native lazy loading and asynchronous image decoding | Defers non-critical product and footer imagery | Browser-native attributes | Normal image fetch and decode |
| Markdown content negotiation | Gives agents a clean main-content representation without HTML chrome | Explicit `Accept: text/markdown` media range | Complete HTML response if conversion is unavailable |

No essential content, state explanation, control, focus order, or route depends
on these capabilities. There are no user-agent branches or browser-specific
code paths at launch.

## Performance architecture

The application ships no custom product-interaction bundle, remote font,
browser analytics, or third-party runtime. LinkScope's mark is a compact local
SVG. The collection index uses a purpose-sized 4.2 KB Trackpad Wizard WebP instead
of transferring its 271 KB full-resolution presentation asset into a 48–64 px
slot. Product art retains the full-resolution source, authored PNG/JPEG
fallbacks, and a 96 KB WebP Overview presentation copy. Social assets are local
and are not requested during ordinary collection rendering. Below-fold sections
and non-critical images opt into deferred work where supported.

Cloudflare applies tiered caching rather than one blanket lifetime. Hashed
browser assets are immutable for one year; named media revalidates after one day
and may serve stale for seven days; HTML always revalidates in the browser but is
edge-cacheable for one hour with stale-while-revalidate. Static Assets and
rendered HTML have both been observed returning `CF-Cache-Status: HIT` after
warming.

Agent-requested Markdown is converted from the same server-rendered source with
Workers AI `toMarkdown()`, scoped to `<main>`, and cached under a representation-
specific key so it cannot collide with HTML. Responses declare `Vary: Accept`,
token estimates, and the same Search, AI Input, and AI Training permissions as
`robots.txt`. Ordinary browser requests never enter the conversion path. A
conversion error returns the complete HTML document rather than failing the
route; this fallback is intentionally visible through its HTML content type.

A matched Lighthouse 13.4.1 mobile lab run on 2026-09-04 scored the Cloudflare
cutover artifact 100 versus 87 for the former ChatGPT Sites host. Cloudflare
FCP/LCP/Speed Index/
TBT/TTI were 1.23 s / 1.53 s / 2.29 s / 0 ms / 1.53 s, versus 2.53 s / 2.64 s /
5.16 s / 168.5 ms / 4.21 s. Both had zero CLS; transferred bytes fell from
419,723 to 148,198. These are comparative lab results from one machine, not
field Core Web Vitals or a latency guarantee.

The current vinext navigation/hydration runtime transfers about 111 KB gzipped
before product interaction, roughly 31 KB above the constitution's initial
80 KB JavaScript aim. This is an explicit launch exception for the supported
vinext server-rendering/runtime path, not permission to add application script.
Recheck vinext releases and a supported zero-hydration path; remove this
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
  `public/trackpad-wizard-icon.webp` is its full-resolution presentation copy,
  and `public/trackpad-wizard-icon-256.webp` is the compact collection-index
  derivative.
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
- `/robots.txt` permits all user agents to crawl this host, explicitly grants
  Cloudflare Content Signals uses for Search, AI Input, and AI Training, and
  points to the canonical `/sitemap.xml`. The Worker authors the plain-text
  response so the nonstandard `Content-Signal` directive remains exact. The
  sitemap contains only canonical `apps.jasonstu.cc` routes.
- HTML responses explicitly permit unrestricted search-result previews through
  `X-Robots-Tag: max-snippet:-1, max-image-preview:large, max-video-preview:-1`.
  This preview policy does not override the framework-authored `noindex` on real
  `404` documents; non-HTML crawler resources do not receive the header.
- No private device names, addresses, identifiers, or captured user interface
  data from the inspected development machine are published.

## Deployment

Cloudflare Workers is the selected production runtime. The `jasonstu-apps`
Worker serves native Static Assets at `https://apps.jasonstu.cc`; Cloudflare
manages its proxied DNS record and certificate. The automatically assigned
`workers.dev` address is an operational fallback. `wrangler.jsonc` owns the
production Worker name, asset binding, custom domain, cache, compatibility date,
observability settings, and Workers AI binding. Its named `beta` environment
preserves the existing `jasonstu-apps-beta` Worker and
`https://apps.beta.jasonstu.cc` route as a no-index rollback target, with the
same binding so Markdown can be verified before production release.

The former ChatGPT Sites project is no longer bound to the canonical hostname
and has owner-only access. Anonymous requests to its generated address return
`401`; no production traffic is routed there. Sites-specific source wiring and
the project manifest have been removed from this repository.

The public GitHub repository is the canonical source. Cloudflare Workers Builds
watches its `main` branch and publishes successful production builds to the
existing `jasonstu-apps` Worker. Local Wrangler deployment remains the recovery
path if hosted builds are unavailable.

All seven public routes pass direct-load and repeat-load checks after cutover,
the unmatched route returns `404`, and crawler resources retain their expected
content types. `robots.txt`, every sitemap entry, canonical metadata, and social
metadata resolve to `https://apps.jasonstu.cc` with no beta or Sites hostname in
the public document URLs.

Cloudflare dashboard metrics plus persisted invocation logs and traces are
enabled at a full sampling rate for the initial production observation period. This is operational
server-side telemetry, not a browser beacon; the site still loads no analytics
script, and query strings are redacted from stored telemetry. Revisit sampling
after initial production traffic establishes an appropriate rate. The beta sends
`X-Robots-Tag: noindex, nofollow, noarchive` while retaining production canonical
URLs, so it does not compete with the official host in search results.

## Significant decisions and rejected returns

- Keep native multi-document navigation; do not introduce a client router to
  simulate routes that the host can serve directly.
- Use Workers Static Assets for production rather than creating a second Pages
  architecture. It preserves the existing vinext server-rendering path and
  supports explicit edge caching and observability. Keep the named beta Worker
  as the bounded rollback path.
- Keep the CSS-only, device-led inspector while it communicates the product
  accurately; do not restore a provider-first selector or hydrate it for cosmetic
  state management.
- Keep Trackpad Wizard screenshot-led and static while real captures communicate
  the product; do not build a decorative browser simulation of touch or haptics.
- Publish Trackpad Wizard's direct download only while the matching notarized DMG
  and checksum remain verifiable at the declared release URL.
- Do not add Tailwind, a component library, a CMS, D1/R2, browser analytics, or
  an image pipeline without a demonstrated requirement.
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
- When should the beta Worker be retired after production has demonstrated
  stable real-user behavior?
- Reconsider the initial 100% log and trace sampling rate after real request
  volume and retention cost are known.

## Next actions

1. Observe production Worker request/error/latency metrics and traces in the
   Cloudflare dashboard; reduce sampling after the initial observation period.
2. Run physical WebKit, Firefox, keyboard, VoiceOver, zoom, orientation, and
   reduced-motion checks; record only actionable differences.
3. Reconcile LinkScope release metadata and add a download only after its signed
   distribution path is public and verified.
4. Replace Trackpad Wizard captures after material interface changes and record
   both Light and Dark evidence when the app supplies both.
5. Update either privacy document when its app's storage, permission, network,
   or distribution behavior changes.
