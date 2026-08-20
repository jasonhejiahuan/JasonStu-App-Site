# LinkScope art-direction brief

Status: Approved for the first `/linkscope` implementation  
Evidence reviewed: LinkScope source, English localization, provider contracts,
implementation/acceptance documents, production icon layers, and the current
running macOS interface on 2026-08-20

## Product evidence

LinkScope is a native macOS wireless-accessory inspector. The current product
uses seven public provider surfaces, keeps physical accessories distinct from
transport and observation identities, and represents unavailable values with
explicit reasons instead of silently dropping them. Its providers are read-only
and event-driven while idle. A visitor can inspect consolidated devices, raw
parameters, provider status, a timeline, snapshots, JSON import/export, and
user-started diagnostic sessions with bounded sampling and CSV export.

The current source contains Full and Lite editions, English and Simplified
Chinese UI, encrypted local persistence for sensitive payloads, and no verified
public download destination. The website therefore links to the source and
describes active development; it does not invent pricing, release, or download
claims. Repository version references currently conflict, so the page does not
publish a version number.

## Required brief

1. **Product truth:** LinkScope lets technically curious Mac users inspect what
   public macOS frameworks actually expose about accessories and system state,
   while preserving unavailable, historical, and provider-specific evidence.
   Its most revealing state is one consolidated accessory with observations
   from several providers and explicit availability labels.
2. **Page thesis:** Follow one observation from public framework to resolved
   accessory, then show how LinkScope preserves both the value and the reason a
   value cannot be read.
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
6. **Interaction thesis:** Selecting a provider lens should teach how independent
   read-only observations contribute evidence without pretending the website is
   running LinkScope. Interaction is optional enhancement; the complete provider
   and availability explanation remains in the document.
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

- A visible boundary is reserved for the real app-window reconstruction,
  interactive hit regions, and data rows whose separators aid inspection.
- Provider names and capabilities are not placed in feature cards; alignment,
  rules, and type establish their relationships.
- No ambient orbit animation is used even though the icon contains orbits.
  Motion is limited to direct selection feedback and optional page continuity.
- The page may use the icon's intrinsic gradients because they are part of the
  product asset. The surrounding site does not add decorative gradient fields.

