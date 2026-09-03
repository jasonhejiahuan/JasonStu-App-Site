import type { Metadata } from "next";
import { JasonStuSignature, SiteHeader } from "../site-header";

const pageDescription =
  "A native macOS laboratory for touch, gestures, pressure, haptics, mappings, and trackpad hardware.";

export const metadata: Metadata = {
  title: "Trackpad Wizard",
  description: pageDescription,
  alternates: { canonical: "/trackpad-wizard" },
  openGraph: {
    title: "Trackpad Wizard — Make the surface visible",
    description: pageDescription,
    url: "/trackpad-wizard",
    type: "website",
    images: [
      {
        url: "/trackpad-wizard-overview.png",
        width: 1640,
        height: 1048,
        alt: "Trackpad Wizard Overview in a standard macOS window.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trackpad Wizard — Make the surface visible",
    description: pageDescription,
    images: ["/trackpad-wizard-overview.png"],
  },
};

const capabilityLenses = [
  {
    name: "Touch Lab",
    description:
      "Inspect contacts, resting touches, stable labels, trails, heatmaps, physical sizing, sample rate and Force Click pressure; export a session only when you choose.",
    boundary: "Public AppKit / optional raw contacts",
  },
  {
    name: "Gesture Studio",
    description:
      "Observe magnification, rotation, precision scrolling, swipes, pressure stages and gesture lifecycles in one native event stream.",
    boundary: "Native gesture events",
  },
  {
    name: "Haptic Composer",
    description:
      "Build empirical tactile phrases from timed pulses, per-step amplitude, device routing and an 8–120 Hz press-and-hold signal.",
    boundary: "Enhanced Mode",
  },
  {
    name: "Mappings",
    description:
      "Connect swipes, pinches, rotation or Force Click to a keyboard shortcut or a saved haptic pattern.",
    boundary: "Accessibility only for key injection",
  },
  {
    name: "Statistics",
    description:
      "Count successful actuator calls per locally pseudonymized trackpad, with daily history, lifetime totals and an explicit reset.",
    boundary: "Stored locally",
  },
  {
    name: "Devices",
    description:
      "Read transport, reported battery, Force Touch support, report interval, sensor size and the current macOS trackpad preferences.",
    boundary: "Live I/O Registry evidence",
  },
];

export default function TrackpadWizardPage() {
  return (
    <>
      <SiteHeader product="Trackpad Wizard" />
      <main id="main-content" className="trackpad-page">
        <section className="trackpad-opening" aria-labelledby="trackpad-title">
          <div className="trackpad-opening-copy">
            <p className="eyebrow">Native macOS laboratory / 0.3.0</p>
            <h1 id="trackpad-title">Make the surface visible.</h1>
            <p className="trackpad-lede">
              Inspect touch, gestures and pressure, compose haptics, and map the
              trackpad already under your fingers—first with public macOS tools,
              then with an explicitly enabled experimental layer when you choose.
            </p>
            <div className="opening-actions" aria-label="Trackpad Wizard actions">
              <a
                className="primary-link trackpad-download"
                href="https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard/releases/download/v0.3.0-build.4/Trackpad-Wizard-0.3.0-build-4.dmg"
              >
                Download for Mac
              </a>
              <a href="https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard">
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="trackpad-icon-stage">
            <picture>
              <source srcSet="/trackpad-wizard-icon.webp" type="image/webp" />
              <img
                src="/trackpad-wizard-icon.png"
                width="1024"
                height="1024"
                alt="Trackpad Wizard app icon"
              />
            </picture>
            <figcaption>System mode by default. Enhanced Mode is session-only.</figcaption>
          </figure>

          <dl className="trackpad-release-rail">
            <div><dt>Release</dt><dd>0.3.0 (Build 4)</dd></div>
            <div><dt>Requires</dt><dd>macOS 26 or later</dd></div>
            <div><dt>Distribution</dt><dd>Signed and notarized DMG</dd></div>
          </dl>
        </section>

        <section className="trackpad-overview-chapter" aria-labelledby="overview-evidence-title">
          <div className="trackpad-section-intro">
            <p className="eyebrow">01 / See the instrument</p>
            <h2 id="overview-evidence-title">The hardware is already there. The missing part is a view.</h2>
            <p>
              Trackpad Wizard keeps the live surface, mode boundary and device
              target in one native workspace. Start with public AppKit input;
              turn on Enhanced Mode only for the raw-touch or actuator work that
              needs it.
            </p>
          </div>

          <figure className="trackpad-screenshot trackpad-overview-shot">
            <picture>
              <source srcSet="/trackpad-wizard-overview.webp" type="image/webp" />
              <img
                src="/trackpad-wizard-overview.png"
                width="1640"
                height="1048"
                alt="Trackpad Wizard Overview showing System mode, two detected trackpads, and shortcuts to its laboratories."
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              Repository capture / Overview / English / Light appearance /
              2026-08-30. The external device label is generic and contains no
              address or serial-like identifier.
            </figcaption>
          </figure>

          <dl className="trackpad-surface-facts">
            <div><dt>Input</dt><dd>Contacts, gestures, pressure</dd></div>
            <div><dt>Response</dt><dd>Haptics or keyboard mappings</dd></div>
            <div><dt>Target</dt><dd>Built-in or external trackpad</dd></div>
          </dl>
        </section>

        <section className="trackpad-lenses-chapter" aria-labelledby="lenses-title">
          <div className="trackpad-section-intro">
            <p className="eyebrow">02 / Read the surface</p>
            <h2 id="lenses-title">One surface. Six ways to understand it.</h2>
            <p>
              Each workspace follows a different part of the same signal—from a
              finger making contact to the action or tactile response that follows.
            </p>
          </div>

          <ol className="trackpad-lens-list">
            {capabilityLenses.map((lens, index) => (
              <li key={lens.name}>
                <span className="trackpad-lens-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{lens.name}</h3>
                <p>{lens.description}</p>
                <span className="trackpad-lens-boundary">{lens.boundary}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="trackpad-gesture-chapter" aria-labelledby="gesture-title">
          <div className="trackpad-gesture-copy">
            <p className="eyebrow">03 / Interpret motion</p>
            <h2 id="gesture-title">Keep the gesture beside the event that made it.</h2>
            <p>
              Gesture Studio places accumulated magnification, rotation,
              precision-scroll deltas and Force Click stage around the live touch
              surface. Recognized gestures remain beside the native event stream,
              so cause and interpretation can be inspected together.
            </p>
          </div>

          <figure className="trackpad-screenshot trackpad-gesture-shot">
            <img
              src="/trackpad-wizard-gesture.jpg"
              width="1366"
              height="768"
              alt="Trackpad Wizard Gesture Studio showing gesture measurements, a touch surface, and the native event stream."
              loading="lazy"
            />
            <figcaption>
              Repository capture / Gesture Studio / English / Light appearance /
              2026-08-30. A precision-scroll sample appears in the native event stream.
            </figcaption>
          </figure>
        </section>

        <section className="trackpad-boundary" aria-labelledby="boundary-title">
          <div className="trackpad-section-intro trackpad-boundary-intro">
            <p className="eyebrow">04 / Choose the boundary</p>
            <h2 id="boundary-title">Public by default. Experimental only when invited.</h2>
            <p>
              The distinction is operational, not cosmetic. Experimental services
              load on demand, stop when Enhanced Mode stops, and are never restored
              automatically after launch.
            </p>
          </div>

          <div className="trackpad-mode-comparison">
            <article>
              <p className="trackpad-mode-index">A / System mode</p>
              <h3>The complete public baseline.</h3>
              <p>
                AppKit touch while the pointer is over the capture surface, native
                gesture events, Force Click stage, device diagnostics and display-
                calibrated sizing remain available without the private runtime.
              </p>
              <strong>Default after every launch</strong>
            </article>
            <article>
              <p className="trackpad-mode-index">B / Enhanced Mode</p>
              <h3>A deliberate session-only layer.</h3>
              <p>
                One selected device can expose raw contacts and empirical actuator
                waveforms, amplitude, pulse frequency and routing. Advanced system
                changes add confirmation and automatic ten-second rollback.
              </p>
              <strong>Explicitly enabled / never restored on launch</strong>
            </article>
          </div>

          <ol className="trackpad-signal-path" aria-label="Trackpad Wizard signal path">
            <li><span>01</span><strong>Observe</strong><small>contact / pressure / device</small></li>
            <li><span>02</span><strong>Interpret</strong><small>gesture / stage / direction</small></li>
            <li><span>03</span><strong>Respond</strong><small>mapping / haptic / export</small></li>
          </ol>
        </section>

        <section className="trackpad-release-chapter" aria-labelledby="release-title">
          <div className="trackpad-section-intro">
            <p className="eyebrow">05 / Current release</p>
            <h2 id="release-title">Downloadable, inspectable, and verified before macOS opens it.</h2>
            <p>
              Version 0.3.0 (Build 4) is distributed as a Developer ID-signed,
              notarized and stapled disk image. The release includes a SHA-256
              checksum, and the in-app updater verifies it before installation.
            </p>
          </div>

          <dl className="trackpad-practical-facts">
            <div><dt>Platform</dt><dd>macOS 26 or later</dd></div>
            <div><dt>Current release</dt><dd>0.3.0 (Build 4) / 2026-08-31</dd></div>
            <div><dt>Source</dt><dd>Swift 6.2+ / MPL-2.0</dd></div>
            <div><dt>Update channel</dt><dd>GitHub Releases / manual or daily checks</dd></div>
            <div><dt>Application data</dt><dd>Local unless explicitly exported</dd></div>
            <div><dt>Accessibility</dt><dd>Only for shortcut injection or gesture filtering</dd></div>
          </dl>

          <div className="trackpad-release-close">
            <picture>
              <source srcSet="/trackpad-wizard-icon.webp" type="image/webp" />
              <img src="/trackpad-wizard-icon.png" width="1024" height="1024" alt="" />
            </picture>
            <div>
              <p className="eyebrow">Trackpad Wizard / Public release</p>
              <h2>A laboratory for the hardware already under your fingers.</h2>
              <div className="closing-links">
                <a
                  className="primary-link trackpad-download"
                  href="https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard/releases/download/v0.3.0-build.4/Trackpad-Wizard-0.3.0-build-4.dmg"
                >
                  Download for Mac
                </a>
                <a href="https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard/releases/tag/v0.3.0-build.4">Release notes ↗</a>
                <a href="/trackpad-wizard/support">Support</a>
                <a href="/trackpad-wizard/privacy">Privacy</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer trackpad-footer">
        <a href="/" aria-label="JasonStu Apps home"><JasonStuSignature /></a>
        <span>Trackpad Wizard is a native macOS project by JASON Studio.</span>
      </footer>
    </>
  );
}
