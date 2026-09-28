# LinkScope Lite 2.0.1 release and website audit

Verified September 28, 2026. Scope: current GitHub documentation and selected
source contracts, saved App Store Connect metadata, public Apple availability,
and the website changes. This is not a complete native-app runtime or security
audit; the downloaded App Store binary was not installed or exercised.

## Release evidence

- GitHub `main`, fetched during the audit:
  [`f5487f965ee523e21fe63e60e90af6746a041448`](https://github.com/jasonhejiahuan/LinkScope/commit/f5487f965ee523e21fe63e60e90af6746a041448).
  Read README, CHANGELOG, the 2.0.1 preparation and review documents, privacy
  policy, distribution/provider architecture, and relevant current source.
- The already-open Safari Technology Preview App Store Connect record showed
  **2.0.1 Ready for Distribution**, selected build **2.0.1 (13)**. Its English
  public description covers inspection, six dashboard widgets, diagnostics,
  JSON/CSV export, rules, menu-bar access, and Shortcuts.
- The saved App Privacy page shows **Data Not Collected** and the existing
  `https://apps.jasonstu.cc/linkscope/privacy` URL.
- [Apple's public US lookup](https://itunes.apple.com/lookup?id=6802596955&country=us)
  returned LinkScope Lite, version 2.0.1, price 0 / Free, minimum macOS 15.0,
  and bundle ID `cc.jasonstu.linkscope.lite`.
- The [country-neutral download link](https://apps.apple.com/app/linkscope-lite/id6802596955)
  redirected to the US listing in this environment and returned HTTP 200 with
  the correct product, free price, macOS requirement, and privacy label. This
  does not independently verify every storefront or an installation.

## Source reconciliation

- `LinkScope.xcodeproj/project.pbxproj` declares 2.0.1 / 13 in both project
  configurations. README now identifies Lite as free on the Mac App Store.
- `PublicProviderFactory.swift` registers seven public providers. Lite's
  entitlements enable App Sandbox, Bluetooth, user-selected read/write files,
  and its own Keychain access group. Full's Developer ID target is not evidence
  of an available public binary.
- `FutureModels.swift` and `DashboardLayout.swift` define current value, status,
  time series, raw table, timeline, and provider health. These agree with the
  saved store description. The website now presents all six and a real capture.
- English localization and the permission view use Continue. The root view
  still presents setup on first launch when its onboarding flag is unset.
  Website support therefore explains Continue and Done without claiming that
  first-run setup never appears.
- The existing website privacy policy agrees with the current 2.0.1 source
  policy on local processing, optional storage, partial payload encryption,
  plaintext exports, retention, and deletion limitations. Its effective date
  remains September 23; publication alone does not change these practices.

## Remaining inconsistencies outside the website change

1. **Saved App Review notes are stale.** They mention build 12 and still instruct
   reviewers to choose Allow and use Continue to enter the workspace. An added
   sentence also says setup no longer appears automatically, whereas current
   source retains first-launch setup. Reconcile these instructions with the
   actual distribution build for the next submission. No Connect fields were
   changed in this audit.
2. **GitHub release documentation is uneven.** CHANGELOG's newest heading is
   still 2.0.0 (9), the 2.0.1 review draft refers to build 12, and the distribution
   document still describes Lite as prepared for review. README and the 2.0.1
   preparation record now acknowledge publication/build 13. Historical check
   results must not be relabelled as build 13 tests. LinkScope repository files
   were read only.

## Website changes and validation

The collection, product metadata, opening/closing actions, release facts, and
support now reflect the released Lite edition. The device-led visual theme and
native radio inspector remain. A separate dashboard chapter uses the September
19 native capture from the audited commit, with its original PNG and responsive
WebP copies. Exact captured build/macOS version are not recorded in upstream
provenance; the site does not label the image a fresh build 13 capture.

- `npm run lint`, `npm run typecheck`, `npm test` (18/18 including build),
  `npm run cloudflare:dry-run`, and `git diff --check` passed. Dry-run performs
  configuration analysis; it does not upload a Worker.
- Home, product, support, and privacy returned HTTP 200 locally. All 16 local
  links/assets found in those pages and same-page anchors resolved.
- Chromium preview: 1440-pixel Light desktop; 390-pixel Dark mobile;
  320-pixel Light mobile with no page-level horizontal overflow. The dashboard
  descriptions reflow to one column. The dark screenshot is intentionally
  preserved in both themes.
- Native radio keyboard navigation changed Summary to Raw Parameters and
  revealed the corresponding panel. Reduced-motion emulation resulted in
  automatic scrolling. With JavaScript disabled, product content, collection,
  support, and privacy remained available; support/privacy direct reloads passed.
- Safari Technology Preview loaded the updated product and exposed its headings
  and download link. Full Safari visual/interaction coverage, Firefox,
  VoiceOver, and physical mobile-device QA were not completed.

Publishing uses the existing GitHub `main` → Cloudflare automatic deployment.
Production content must be verified after pushing; a successful push alone is
not proof of deployment.
