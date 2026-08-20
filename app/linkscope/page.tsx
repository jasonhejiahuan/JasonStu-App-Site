import type { Metadata } from "next";
import { SiteHeader } from "../site-header";
import { ProviderLens } from "./provider-lens";

const pageDescription =
  "A native macOS wireless-accessory inspector built around public, read-only system providers and explicit availability states.";

export const metadata: Metadata = {
  title: "LinkScope",
  description: pageDescription,
  alternates: { canonical: "/linkscope" },
  openGraph: {
    title: "LinkScope — Inspect what macOS exposes",
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
    title: "LinkScope — Inspect what macOS exposes",
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
            <p className="eyebrow">Native macOS utility / In active development</p>
            <h1 id="linkscope-title">Inspect the wireless state macOS actually exposes.</h1>
            <p className="lede">
              LinkScope consolidates read-only observations from public system
              providers, keeps unavailable values explicit, and records
              diagnostics only when you start them.
            </p>
            <div className="opening-actions" aria-label="LinkScope actions">
              <a className="primary-link" href="#inspector">Explore the inspector</a>
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
              Each provider stays visible. LinkScope resolves observations into a
              physical accessory without pretending that display names alone prove
              identity, then keeps the original provider and parameter path attached.
            </p>
          </div>
          <ProviderLens />
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

        <section className="practical-chapter" aria-labelledby="practical-title">
          <div className="chapter-intro">
            <p className="eyebrow">04 / Current build</p>
            <h2 id="practical-title">A quiet utility with a deeper inspector.</h2>
            <p>
              The current development source includes a menu-bar surface, searchable
              device list, provider status, raw parameters, timeline, snapshots,
              complete JSON import/export, monitoring rules, and Shortcuts actions.
            </p>
          </div>

          <table className="edition-table">
            <caption>Current development editions</caption>
            <thead>
              <tr><th>Edition</th><th>Distribution target</th><th>Provider boundary</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">LinkScope</th><td>Developer ID</td><td>Public providers today; experiments remain isolated</td></tr>
              <tr><th scope="row">LinkScope Lite</th><td>Mac App Store</td><td>Public, sandbox-compatible providers only</td></tr>
            </tbody>
          </table>

          <dl className="practical-facts">
            <div><dt>Platform</dt><dd>macOS 15 or newer in the current development requirements</dd></div>
            <div><dt>Languages</dt><dd>English and Simplified Chinese</dd></div>
            <div><dt>Local history</dt><dd>Encrypted sensitive payloads; unlimited retention by default</dd></div>
            <div><dt>Availability</dt><dd>Source build only; no verified public download is advertised yet</dd></div>
          </dl>
        </section>

        <section className="linkscope-close" aria-labelledby="close-title">
          <img src="/linkscope-mark.svg" width="465" height="432" alt="" />
          <div>
            <p className="eyebrow">LinkScope / Active development</p>
            <h2 id="close-title">Follow the evidence, including the gaps.</h2>
            <div className="closing-links">
              <a className="primary-link" href="https://github.com/jasonhejiahuan/LinkScope">Browse the source ↗</a>
              <a href="/linkscope/support">Support</a>
              <a href="/linkscope/privacy">Privacy</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer linkscope-footer">
        <a href="/">JasonStu Apps</a>
        <span>LinkScope is a native macOS project by JasonStu.</span>
      </footer>
    </>
  );
}

