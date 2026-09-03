# Trackpad Wizard art-direction brief

Status: Approved for the first `/trackpad-wizard` implementation
Evidence reviewed: Trackpad Wizard 0.3.0 (Build 4) source and README,
release notes, published notarized DMG and checksum, production icon, Overview
and Gesture Studio captures, and the completed issue #3 implementation record
on 2026-09-03

## Product evidence

Trackpad Wizard is a native macOS laboratory for the trackpad already under a
user's fingers. Its public System mode observes AppKit touch and gesture data;
an explicitly enabled, session-only Enhanced Mode adds raw contacts and direct
haptic experiments through private macOS runtime surfaces. The app also exposes
gesture mapping, device diagnostics, local haptic statistics, import and export,
and separately gated advanced controls with confirmation and rollback.

Version 0.3.0 (Build 4) is publicly available as a Developer ID-signed,
notarized and stapled DMG for macOS 26 or later. The release publishes a SHA-256
checksum, and the in-app updater verifies that checksum before handing the
installer to macOS. Touch frames, mappings and statistics remain local unless a
user explicitly exports them. Accessibility is requested only for shortcut
injection or the optional process-scoped gesture filter.

## Required brief

1. **Product truth:** Trackpad Wizard turns a Mac trackpad into an inspectable
   surface for contacts, gestures, pressure and haptics. Its most revealing
   state is the real Touch Lab or Gesture Studio surface translating finger
   movement into visible samples and recognizers.
2. **Page thesis:** Follow one physical surface from contact, through gesture
   interpretation, to an optional haptic or shortcut response while keeping the
   public and experimental boundaries legible.
3. **Dominant material:** The production layered app icon, two current and
   privacy-safe application captures, and a concise signal path using labels
   taken from the app. The website does not reconstruct the macOS interface or
   imply that live trackpad input is running in the browser.
4. **Rhythm:** A quiet icon-and-purpose opening; a broad Overview capture; a
   quicker six-lens capability sequence; a spacious Gesture Studio capture; a
   high-contrast System/Enhanced boundary; and concise release facts with a
   direct download at the close.
5. **Accent rationale:** Trackpad Wizard owns an ultraviolet-violet signal
   family drawn from its Enhanced Mode control and the active state visible in
   the current app. Neutral silver and ink echo the physical trackpad and icon;
   violet marks paths, state and action rather than decorating every surface.
6. **Interaction thesis:** None. Real screenshots and semantic signal-flow text
   explain the product more honestly than a simulated touch surface. Links keep
   native browser behavior.
7. **Responsive transformation:** Wide layouts alternate a compact editorial
   ledger with full-width app evidence. Narrow layouts turn the signal path into
   a vertical sequence, keep actions at touch size, let screenshots retain their
   native proportions, and place captions directly after the images in source
   order.
8. **Baseline and fallback:** Server-rendered HTML contains every product fact,
   requirement, boundary, download, source and support path. Images use current
   PNG/JPEG sources with efficient WebP presentation copies. Light and Dark have
   separately authored violet, silver and ink relationships; reduced motion
   removes cross-document continuity without changing content.

## Boundary and asset decisions

- Visible boundaries belong to the real captured application windows, the
  download control, and state rows where a rule is needed to explain sequence.
- The icon is shown as authored. No additional glow, glass panel, device mockup
  or browser-drawn trackpad competes with it.
- The Overview screenshot is the product page's social image and first broad
  proof. Its capture includes a clean desktop and generic “External Trackpad”
  label, with no address, serial-like value or personal device name.
- The Gesture Studio screenshot is supporting evidence for native event
  interpretation, not a decorative gallery item.
- The collection keeps its typographic index. Adding a second app creates a
  second editorial row, not an equal-card grid.
