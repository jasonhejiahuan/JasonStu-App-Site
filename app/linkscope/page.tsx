import type { Metadata } from "next";
import { JasonStuSignature, SiteHeader } from "../site-header";
import { DeviceInspector } from "./device-inspector";

const pageDescription =
  "LinkScope Lite is free on the Mac App Store. Inspect accessory details, record on-demand diagnostics, and create custom dashboards. Requires macOS 15 or later.";

export const metadata: Metadata = {
  title: "LinkScope Lite",
  description: pageDescription,
  alternates: { canonical: "/linkscope" },
  openGraph: {
    title: "LinkScope Lite — Inspect what macOS exposes",
    description: pageDescription,
    url: "/linkscope",
    type: "website",
    images: [
      {
        url: "/linkscope-social.png",
        width: 1731,
        height: 909,
        alt: "LinkScope mark beside the words Inspect what macOS exposes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkScope Lite — Inspect what macOS exposes",
    description: pageDescription,
    images: ["/linkscope-social.png"],
  },
};

const providers = [
  "CoreHID / IOHID",
  "IOBluetooth",
  "CoreBluetooth",
  "Core Audio",
  "Game Controller",
  "IORegistry",
  "Power & Thermal",
];

const availabilityStates = [
  ["Available", "The provider returned a value."],
  ["Not exposed by macOS", "The public framework has no value to provide."],
  ["Device did not report", "The path exists, but this accessory supplied no reading."],
  ["Permission denied", "Access is needed before the provider can read the value."],
  ["Unsupported", "The provider or device cannot supply this parameter."],
  ["Stale", "A prior reading exists, but it is no longer current."],
  ["Provider failed", "The source returned an explicit failure instead of silence."],
];

const diagnosticSamples = [
  { time: "10:21:00", value: "−48", level: 72 },
  { time: "10:21:05", value: "−51", level: 66 },
  { time: "10:21:10", value: "−54", level: 59 },
  { time: "sleep", value: "gap", level: 0, gap: true },
  { time: "10:21:25", value: "−56", level: 54 },
  { time: "10:21:30", value: "−50", level: 68 },
  { time: "10:21:35", value: "−47", level: 75 },
];

const dashboardWidgets = [
  ["Current value", "Keep one system-reported reading in view."],
  ["Availability status", "See whether a source can supply its value."],
  ["Time series", "Follow recorded readings over time."],
  ["Raw table", "Inspect the underlying parameters."],
  ["Timeline", "Keep observation events in context."],
  ["Provider health", "See the status of each system source."],
];

export default function LinkScopePage() {
  return (
    <>
      <SiteHeader product="LinkScope" />
      <main id="main-content" className="linkscope-page">
        <section className="linkscope-opening" aria-labelledby="linkscope-title">
          <div className="scope-mark-stage" aria-hidden="true">
            <img src="/linkscope-mark.svg" width="465" height="432" alt="" />
            <span className="scope-caption">seven public sources / one inspector</span>
          </div>

          <div className="linkscope-intro">
            <p className="eyebrow">LinkScope Lite / Free on the Mac App Store</p>
            <h1 id="linkscope-title">A clearer view of your Mac’s accessories.</h1>
            <p className="lede">
              Inspect Bluetooth, input, audio, and game controller details that
              macOS exposes. Follow connection states, record diagnostics when
              you need them, and arrange readings in your own dashboard.
            </p>
            <div className="opening-actions" aria-label="LinkScope actions">
              <a className="primary-link" href="https://apps.apple.com/app/linkscope-lite/id6802596955">
                Download on the Mac App Store <span aria-hidden="true">↗</span>
              </a>
              <a href="#inspector">Explore the inspector</a>
              <a href="https://github.com/jasonhejiahuan/LinkScope">
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <ol className="provider-rail" aria-label="Public providers">
            {providers.map((provider, index) => (
              <li key={provider}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {provider}
              </li>
            ))}
          </ol>
        </section>

        <section id="inspector" className="inspection-chapter" aria-labelledby="inspection-title">
          <div className="chapter-intro">
            <p className="eyebrow">01 / Inspect</p>
            <h2 id="inspection-title">Independent signals. Preserved provenance.</h2>
            <p>
              Select a device first, then inspect the transport identities,
              observations, and parameter paths that describe it. LinkScope keeps
              each source attached instead of flattening independent signals into a
              single unexplained answer.
            </p>
          </div>
          <DeviceInspector />
          <dl className="opening-facts">
            <div><dt>Provider policy</dt><dd>Read / observe / sample / diagnose</dd></div>
            <div><dt>Idle behavior</dt><dd>Event-driven</dd></div>
            <div><dt>Control surface</dt><dd>Read-only</dd></div>
          </dl>
        </section>

        <section className="availability-chapter" aria-labelledby="availability-title">
          <div className="chapter-intro availability-intro">
            <p className="eyebrow">02 / Interpret</p>
            <h2 id="availability-title">Missing is not the same as unknown.</h2>
            <p>
              LinkScope records why a reading is absent. The distinction survives
              inspection, persistence, and export instead of collapsing into an
              unexplained blank.
            </p>
          </div>
          <ol className="availability-list">
            {availabilityStates.map(([name, explanation], index) => (
              <li key={name}>
                <span className="availability-number">{String(index + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <span>{explanation}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="diagnostic-chapter" aria-labelledby="diagnostic-title">
          <div className="diagnostic-copy">
            <p className="eyebrow">03 / Diagnose</p>
            <h2 id="diagnostic-title">Sampling starts when you do.</h2>
            <p>
              Diagnostic sessions are explicit and time-bounded when requested.
              Eligible parameters can be sampled, charted, compared, and exported
              to CSV. Sleep or provider interruption becomes a recorded gap—not an
              invented reading.
            </p>
          </div>
          <figure className="diagnostic-figure">
            <div className="diagnostic-header">
              <div>
                <strong>Signal check</strong>
                <span>radio.rssi / fixed 5 s</span>
              </div>
              <span className="recording-state"><i aria-hidden="true" /> Completed</span>
            </div>
            <ol className="diagnostic-samples" aria-label="Representative RSSI diagnostic samples">
              {diagnosticSamples.map((sample) => (
                <li className={sample.gap ? "gap" : undefined} key={`${sample.time}-${sample.value}`}>
                  <span className="sample-value">{sample.value}</span>
                  <span className="sample-line" style={{ "--sample-level": `${sample.level}%` } as React.CSSProperties} />
                  <span className="sample-time">{sample.time}</span>
                </li>
              ))}
            </ol>
            <figcaption>Representative values; the gap behavior reflects the implemented diagnostic model.</figcaption>
          </figure>
        </section>

        <section className="dashboard-chapter" aria-labelledby="dashboard-title">
          <div className="chapter-intro">
            <p className="eyebrow">04 / Arrange</p>
            <h2 id="dashboard-title">Your readings. Your workspace.</h2>
            <p>
              Build named dashboards from six widget types. Move and resize them
              with the pointer or keyboard, refine a layout with Undo and Redo,
              and save it as a portable JSON document.
            </p>
          </div>
          <figure className="dashboard-evidence">
            <a href="/linkscope-dashboard.png" aria-label="Open the full-size LinkScope Lite dashboard screenshot">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/linkscope-dashboard-960.webp 960w, /linkscope-dashboard-1920.webp 1920w"
                  sizes="(max-width: 54rem) 100vw, 90vw"
                />
                <img
                  src="/linkscope-dashboard.png"
                  width="2798"
                  height="1664"
                  loading="lazy"
                  decoding="async"
                  alt="LinkScope Lite’s Desk Overview dashboard with Audio Status, Input, Bluetooth, and Controllers provider-health widgets beside the Widget Inspector."
                />
              </picture>
            </a>
            <figcaption>Native Mac capture · English · Dark appearance · September 19, 2026. Open the image for full-size detail.</figcaption>
          </figure>
          <dl className="dashboard-widget-list">
            {dashboardWidgets.map(([name, explanation]) => (
              <div key={name}><dt>{name}</dt><dd>{explanation}</dd></div>
            ))}
          </dl>
        </section>

        <section className="practical-chapter" aria-labelledby="practical-title">
          <div className="chapter-intro">
            <p className="eyebrow">05 / App details</p>
            <h2 id="practical-title">A quiet utility with a deeper inspector.</h2>
            <p>
              Capture snapshots, import or export observation history as JSON,
              and set monitoring rules with optional notifications. A menu-bar
              summary and Shortcuts actions keep snapshots and diagnostics close
              at hand.
            </p>
            <p>
              Available readings depend on your Mac, accessories, and permissions.
              Some devices expose no battery or signal-strength information.
              LinkScope Lite observes system data; it does not pair devices,
              change accessory settings, remap controls, or update firmware.
            </p>
          </div>

          <table className="edition-table">
            <caption>LinkScope editions</caption>
            <thead>
              <tr><th>Edition</th><th>Distribution target</th><th>Provider boundary</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">LinkScope Lite</th><td>Free on the Mac App Store</td><td>Public, sandbox-compatible providers only</td></tr>
              <tr><th scope="row">LinkScope</th><td>Source build; Developer ID target</td><td>Public providers today; experiments remain isolated</td></tr>
            </tbody>
          </table>

          <dl className="practical-facts">
            <div><dt>Platform</dt><dd>macOS 15 or newer</dd></div>
            <div><dt>Languages</dt><dd>English and Simplified Chinese</dd></div>
            <div><dt>Version</dt><dd>LinkScope Lite 2.0.1 · Build 13</dd></div>
            <div><dt>Price</dt><dd>Free · No app account required</dd></div>
            <div><dt>Saved History</dt><dd>Optional; keeps observations and dashboards between launches</dd></div>
            <div><dt>Source</dt><dd>Open source · AGPL-3.0-only</dd></div>
          </dl>
        </section>

        <section className="linkscope-close" aria-labelledby="close-title">
          <img
            src="/linkscope-mark.svg"
            width="465"
            height="432"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="eyebrow">LinkScope Lite / Available now</p>
            <h2 id="close-title">Follow the evidence, including the gaps.</h2>
            <div className="closing-links">
              <a className="primary-link" href="https://apps.apple.com/app/linkscope-lite/id6802596955">Download on the Mac App Store ↗</a>
              <a href="/linkscope/support">Support</a>
              <a href="/linkscope/privacy">Privacy</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer linkscope-footer">
        <a href="/" aria-label="JasonStu Apps home"><JasonStuSignature /></a>
        <span>LinkScope is a native macOS project by JasonStu.</span>
      </footer>
    </>
  );
}
