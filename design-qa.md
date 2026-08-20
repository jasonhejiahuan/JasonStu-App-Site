# LinkScope application-window design QA

## Comparison target

- Source visual truth:
  - `/var/folders/sj/tyypmvv95mb4hfqb8bljp2pm0000gn/T/codex-clipboard-ade26aba-19a1-4502-9b22-e8af78fa115f.png`
  - `/var/folders/sj/tyypmvv95mb4hfqb8bljp2pm0000gn/T/codex-clipboard-e5308e7d-c05c-4f82-81c2-937f70c9b780.png`
  - `/var/folders/sj/tyypmvv95mb4hfqb8bljp2pm0000gn/T/codex-clipboard-d07428ee-94ba-433a-b782-4ef90862d972.png`
  - `/var/folders/sj/tyypmvv95mb4hfqb8bljp2pm0000gn/T/codex-clipboard-291efe0a-9d57-43d0-8d8e-2208b3691c34.png`
- Product-truth sources: current LinkScope screenshots supplied on 2026-08-20 and
  `docs/art-direction/linkscope.md`.
- Implementation route: `/linkscope#inspector`.
- Implementation screenshot path: unavailable.
- Intended states: wide desktop Light and Dark appearance, then transformed
  tablet and mobile compositions.
- Source pixel dimensions: 1752 × 716, 1811 × 849, 1274 × 806, and 1193 × 767.
- Implementation pixel dimensions, CSS viewport, and density normalization:
  unavailable because browser automation could not capture the rendered route.

## Full-view comparison evidence

The source images establish a clearly bounded desktop application window,
compact title bar, separate toolbar, strong selected-row state, and a deliberate
window-to-page scale. The implementation translates those structural cues into a
LinkScope-specific device browser and detail workspace. A same-viewport
rendered comparison could not be produced in this session.

## Focused-region comparison evidence

No valid focused comparison is available. The earlier automation surface
repeatedly timed out, and the user explicitly directed this session to stop
retrying that layer and continue from supplied screenshots plus build and
rendered-document checks.

## Findings

- [P2] Browser-rendered visual comparison is unavailable
  - Location: `/linkscope#inspector`, all representative viewports and themes.
  - Evidence: source screenshots are available, but no current implementation
    capture can be opened beside them.
  - Impact: fonts, final spacing rhythm, window proportions, Light/Dark colors,
    responsive reflow, and interaction polish cannot be visually passed.
  - Fix: inspect the user-confirmed local production preview in a working
    physical browser and capture matching wide desktop, tablet, and mobile
    states in both appearances.

## Required fidelity surfaces

- Fonts and typography: source and implementation both use a restrained native
  UI hierarchy; final optical weight and wrapping remain visually unverified.
- Spacing and layout rhythm: app-window, toolbar, sidebar, detail, and tab
  proportions were implemented from the reference measurements; final rendered
  rhythm remains visually unverified.
- Colors and visual tokens: separately authored Light/Dark window, toolbar,
  sidebar, selection, status, line, and shadow tokens are present; physical
  browser color balance remains unverified.
- Image quality and asset fidelity: the real LinkScope production mark is used;
  the supplied JasonStu logo remains confined to the footer. No substitute logo
  or screenshot crop was introduced.
- Copy and content: device-led LinkScope terminology, transport/provider
  provenance, explicit availability, Summary, Raw Parameters, and History remain
  present in server-rendered HTML.

## Comparison history

1. Earlier user screenshot showed the reconstruction blending into the page and
   an inconsistent two-level typography treatment.
2. The implementation was revised into a distinct application window, removed
   the numbered instructional hierarchy from the simulated app, unified UI type,
   and aligned device selection with the detail workspace.
3. Post-fix browser-rendered evidence is unavailable, so the P2 validation gap
   remains open.

## Implementation checklist

- [x] Preserve the text-only JasonStu Apps header.
- [x] Keep the official JasonStu artwork as a quiet footer signature.
- [x] Make the product demonstration visually distinct from the editorial page.
- [x] Preserve the device → identities/providers → parameters/history model.
- [x] Keep Summary, Raw Parameters, and History keyboard-operable native inputs.
- [x] Transform the window composition at tablet and mobile widths.
- [x] Run lint, production build, and server-rendered route checks.
- [ ] Capture and compare the implementation in Light/Dark at matching wide,
  tablet, and mobile viewports.

final result: blocked
