# LinkScope art-direction brief

Status: Approved and refined for the second `/linkscope` implementation
Evidence reviewed: LinkScope source, English localization, provider contracts,
implementation/acceptance documents, production icon layers, the running macOS
interface, and current screenshots of Summary, Raw Parameters, History,
Transport Identities, Timeline, permissions, and Diagnostics on 2026-08-20

## Product evidence

LinkScope is a native macOS wireless-accessory inspector. The current product
uses seven public provider surfaces, keeps physical accessories distinct from
transport and observation identities, and represents unavailable values with
explicit reasons instead of silently dropping them. Its providers are read-only
and event-driven while idle. A visitor can inspect consolidated devices, raw
parameters, provider status, a timeline, snapshots, JSON import/export, and
user-started diagnostic sessions with bounded sampling and CSV export.

The current interface is device-led. Connected, saved, and inactive/historical
devices form the primary navigation; selecting one opens its Summary, Raw
Parameters, and History. Transport identities and provider-specific observations
remain inside that selected-device context. Provider Status, Timeline, and
Diagnostics are separate system destinations, not the primary way to choose an
accessory.

The current source contains Full and Lite editions, English and Simplified
Chinese UI, and encrypted local persistence for sensitive payloads. LinkScope
Lite 2.0.1 (13) is released on the Mac App Store. On September 28, 2026,
App Store Connect and Apple's public US lookup confirmed the version; the public
listing reports Free and macOS 15+. The opening and closing actions lead to that
listing. Full remains a source edition with a Developer ID distribution target.

### Released-edition update brief — September 28, 2026

Keep the device-led thesis, blue accent, native detail tabs, and existing
Light/Dark typography. Name the available Lite edition at the opening and retain
the inspect → interpret → diagnose sequence. Follow it with a quieter dashboard
chapter: a real repository capture plus six concise widget descriptions, then
release facts and support. The capture retains its original Dark appearance in
both themes; it is evidence, not a second interactive simulation. Narrow layouts
reflow the widget descriptions and keep a link to the full-size image. All new
content and actions are server-rendered, use native links, and need no JavaScript
or motion. Source: LinkScope `f5487f9`, current App Store description, and the
September 19 native dashboard capture used by the current repository README.

## Required brief

1. **Product truth:** LinkScope lets technically curious Mac users inspect what
   public macOS frameworks actually expose about accessories and system state,
   while preserving unavailable, historical, and provider-specific evidence.
   Its most revealing state is one consolidated accessory with observations
   from several providers and explicit availability labels.
2. **Page thesis:** Select a device, trace its transport identities and
   observations back to public providers, then show how LinkScope preserves both
   a value and the reason a value cannot be read.
3. **Dominant material:** The production scope/orbit mark, provider and
   parameter names from the app, explicit availability language, and a focused
   explanatory reconstruction using representative privacy-safe data. Private
   local device names and identifiers from the inspected app are not published.
4. **Rhythm:** A quiet, icon-led opening; a dense inspection field; a deliberate
   pause around unavailable states; a measured diagnostic sequence; concise
   practical facts at the close.
5. **Accent rationale:** LinkScope owns a precise blue family taken from its
   production icon. Blue marks sources, selection, and observed data—not generic
   decoration. Green and amber appear only for actual status meanings.
6. **Interaction thesis:** A concise device-detail reconstruction should teach the
   real relationship: device → transport identities and provider observations →
   parameters and history. The demonstration is presented as a clearly bounded
   LinkScope application window, with a device browser and detail workspace
   matching the real product's hierarchy. Native Summary, Raw Parameters, and
   History controls reveal the same evidence from different views without
   pretending the website is running LinkScope. Interaction is optional
   enhancement; every view remains in the document when enhanced selection is
   unsupported.
7. **Responsive transformation:** Wide layouts place the editorial explanation
   beside a broad inspection field with hanging technical annotations. Narrow
   layouts make the trace vertical, turn side notes into captions, retain source
   order, and keep all controls at touch size. Type and spacing change fluidly;
   the desktop composition is not merely stacked.
8. **Baseline and fallback:** Server-rendered semantic HTML, native links, the
   product mark, all product facts, provider names, availability meanings, and
   source/support paths remain complete without JavaScript. Enhanced selection
   becomes an in-flow static trace when scripting is unavailable. Light and Dark
   use separately authored semantic colors. Reduced motion removes spatial
   continuity without changing content or state.

## Boundary and motion decisions

- A visible boundary is reserved for the product reconstruction, interactive
  hit regions, and data rows whose separators aid inspection.
- The reconstruction is web-native rather than a macOS screenshot clone. It
  borrows the real information architecture, labels, and density while omitting
  private names and identifiers. A restrained title bar, product toolbar,
  sidebar, and window boundary make its role as interactive product evidence
  immediately legible. This window treatment is a semantic exception to the
  site's general avoidance of rounded containers and shadows.
- On tablet and mobile the application window changes composition: the device
  browser becomes a compact upper region and the detail workspace follows at
  readable size. Do not scale the desktop window down as a screenshot.
- Provider names and capabilities are not placed in feature cards; alignment,
  rules, and type establish their relationships.
- No ambient orbit animation is used even though the icon contains orbits.
  Motion is limited to direct selection feedback and optional page continuity.
- The page may use the icon's intrinsic gradients because they are part of the
  product asset. The surrounding site does not add decorative gradient fields.

## Typography and publishing mark

- The native system sans remains the typography source because it provides the
  best macOS affinity, broad coverage, zero font transfer, and stable rendering.
  Display weight is deliberately moderated. At smaller desktop, tablet, and
  mobile widths, weight, tracking, line-height, measure, and authored line breaks
  change together instead of shrinking one desktop headline treatment.
- The official JasonStu artwork is an understated publishing signature in the
  footer. The pre-existing text-only “JasonStu Apps” header remains unchanged.
  The supplied SVG is used in Light appearance and the supplied white raster in
  Dark appearance through native `<picture>` media selection, with no script or
  visual effect.
