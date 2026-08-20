# JasonStu Apps Design Manual

Status: Living operational project record  
Last verified against the repository: 2026-08-20

This document describes the website as it currently exists. It is not the
design constitution or a changelog. Rewrite stale statements when meaningful
implementation, design, routing, browser, or deployment decisions change.

## Session Resume

- **Project status:** The first production implementation is complete and its
  focused second-pass refinement is implemented locally. The collection home
  and LinkScope chapter retain their editorial architecture while improving
  product fidelity, responsive typography, and official brand integration.
- **Canonical origin:** `https://apps.jasonstu.cc`. Canonical, sitemap, and
  social metadata use this origin. Custom-domain connection is still pending.
- **Implemented routes:** `/`, `/linkscope`, `/linkscope/privacy`, and
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
  `docs/art-direction/linkscope.md`.
- **Browser enhancements:** CSS `:has()` powers device-detail tab selection,
  `content-visibility` defers below-fold rendering, and cross-document View
  Transitions provide optional continuity. Each has a complete CSS/native
  fallback; reduced motion disables transition behavior.
- **Important constraints:** Preserve real nested routes, native navigation,
  source-grounded product claims, a no-JavaScript baseline, first-class Light
  and Dark appearance, and the absence of unnecessary runtime dependencies.
- **Known limitations:** The preferred custom domain is not connected; the
  build has not yet had physical Safari, Firefox, or assistive-technology QA;
  LinkScope Lite is in development testing but has no verified public App Store
  or direct-download destination yet; the privacy page is a source-grounded
  implementation note rather than a final distribution policy.
- **Next recommended work:** Publish the verified second pass to the existing
  owner-only Sites project when authorized, connect and verify
  `apps.jasonstu.cc`, run a real WebKit/Firefox/VoiceOver pass, and add a download
  only when a signed public release destination is verified.

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
| `/linkscope` | LinkScope product chapter and explanatory inspector | Server-rendered document |
| `/linkscope/privacy` | Current implementation privacy notes | Server-rendered document |
| `/linkscope/support` | Current support path and issue-reporting guidance | Server-rendered document |
| unmatched route | Collection-aware not-found page | Real HTTP `404` |

Routes are durable lowercase paths. Direct requests, reload, Back, Forward,
bookmarks, and copied URLs use normal browser semantics. Future apps should own
their own top-level slug; they should not inherit LinkScope's composition by
default.

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
- Product and document links are ordinary `<a>` elements. Cross-document
  enhancement may animate compatible navigation, but routing never depends on
  it.

## Shared shell and content model

The shared shell is intentionally small: a skip link, the original text-only
header wordmark, primary route context, and concise footer where appropriate.
The supplied JasonStu logo appears only as a quiet footer publishing signature;
it does not alter or compete with the established header. The collection home
presents one editorial product row rather than a generic equal-card grid.

Product facts currently live near their route because only one public app is
implemented. Introduce a shared data model only when a second real consumer
proves which facts are genuinely shared. Product claims must continue to be
traceable to current app source, assets, documentation, or inspected behavior.

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
Wide screens place the product mark, thesis, provider rail, and technical fields
in asymmetrical compositions. Narrow screens change reading order and density,
turn technical side material into a vertical trace, preserve large targets, and
make data tables horizontally inspectable where necessary. Safe-area-aware
gutters and touch sizing are part of the base CSS.

## Accessibility implementation

- Server-rendered landmarks, one route-level `h1`, ordered headings, lists,
  tables, definitions, figures, captions, and fieldset/radio semantics carry the
  document structure.
- A visible-on-focus skip link and authored `:focus-visible` treatment support
  keyboard navigation. Provider choices are native radios with labels.
- Decorative uses of the product mark have empty alternative text; meaningful
  product reconstructions have captions and textual equivalents.
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

The application ships no custom client bundle for LinkScope behavior, no remote
font, no analytics, and no third-party runtime. The product mark is a compact
local SVG. The two social images are local and are not requested during normal
page rendering. Below-fold sections opt into deferred rendering where supported.

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
- `public/og.png` and `public/linkscope-social.png` are the generated collection
  and LinkScope social-preview assets; they are not page-background decoration.
- Route metadata resolves against `https://apps.jasonstu.cc`. LinkScope owns its
  social image; privacy and support use summary metadata without inheriting the
  collection image.
- No private device names, addresses, identifiers, or captured user interface
  data from the inspected development machine are published.

## Deployment

ChatGPT Sites is the selected production runtime and host. The Sites project is
`appgprj_6a8687dcb59881918e9895b01b15b506` with slug `jasonstu-apps`; its first
version is owner-only. `.openai/hosting.json` records the opaque project ID and
confirms that D1 and R2 are unused. The generated Sites URL is a production
deployment, but `https://apps.jasonstu.cc` remains the preferred canonical
origin and still needs custom-domain connection and direct-route verification.

## Significant decisions and rejected returns

- Keep native multi-document navigation; do not introduce a client router to
  simulate routes that the host can serve directly.
- Keep the CSS-only, device-led inspector while it communicates the product
  accurately; do not restore a provider-first selector or hydrate it for cosmetic
  state management.
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

- What DNS/custom-domain workflow will connect `apps.jasonstu.cc` to Sites?
- Which signed LinkScope build and durable App Store or direct-download
  destination will become the first verified public release?
- Does a later collection need an Auto/Light/Dark selector in addition to the
  current system-preference behavior?
- When a second app is ready, which shell and content facts prove reusable, and
  which must stay product-specific?
- Physical Safari/WebKit, Firefox, high-zoom, VoiceOver, and energy-use checks
  remain required before treating the first implementation as fully hardened.

## Next actions

1. Publish the locally verified second pass to the existing owner-only Sites
   project when deployment is authorized.
2. Connect `apps.jasonstu.cc`, verify TLS, canonical resolution, nested-route
   reloads, and redirects at the preferred origin.
3. Run physical WebKit, Firefox, keyboard, VoiceOver, zoom, orientation, and
   reduced-motion checks; record only actionable differences.
4. Reconcile LinkScope release metadata and add a download only after its signed
   distribution path is public and verified.
5. Update the privacy document when distribution or network behavior changes.
6. Begin any second app with a new product-evidence review and art-direction
   brief rather than copying the LinkScope page.
