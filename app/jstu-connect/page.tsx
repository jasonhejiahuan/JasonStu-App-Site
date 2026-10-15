import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-header";
import { ContinuityDiagram } from "./continuity";
import { ConnectMark, NightSky } from "./sky";
import "./connect.css";

const pageDescription =
  "JSTU Connect is the private, local foundation for Multidevice Collaboration across Mac, iPhone and iPad: mutual pairing, measured connections, device status and visible control. A conceptual foundation, shown in current practice.";

export const metadata: Metadata = {
  title: "JSTU Connect",
  description: pageDescription,
  alternates: { canonical: "/jstu-connect" },
  openGraph: {
    title: "Introducing JSTU Connect — Unlock full capability by Multidevice Collaboration",
    description: pageDescription,
    url: "/jstu-connect",
    type: "website",
    images: [
      {
        url: "/jstu-connect-social.png",
        width: 1731,
        height: 909,
        alt: "Introducing JSTU Connect, with the app mark beneath a quiet field of stars.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Introducing JSTU Connect",
    description: pageDescription,
    images: ["/jstu-connect-social.png"],
  },
};

const findings = [
  {
    finding: "Data moves between devices without the person seeing how, or why.",
    title: "Consent you can see.",
    answer:
      "Nothing is trusted until the other device accepts and both people confirm the same code. Permission is granted device by device, every session is visible, and either side may end it.",
  },
  {
    finding: "Wireless links falter, and networks are judged by signal strength alone.",
    title: "Connections, measured.",
    answer:
      "JSTU Connect measures real response time to each paired device and prepares standby paths across Wi-Fi, Ethernet and USB. When an interface disappears, an active check moves to one that still works.",
  },
  {
    finding: "Demanding work lands on the device least able to carry it.",
    title: "Capacity, in plain view.",
    answer:
      "Processor, memory, power, thermal state and network, observed locally and shared with a paired device only when you allow it: the groundwork for placing work where it belongs.",
  },
  {
    finding: "Every ecosystem teaches its own rules, and people pay the cost of learning them.",
    title: "Native, and yours to tune.",
    answer:
      "Composed entirely of native controls on Mac, iPhone and iPad. Discovery, Bluetooth, status sharing and sensor access each have their own switch, so the app listens only when asked.",
  },
];

const capabilities = [
  ["Nearby discovery", "Wi-Fi and wired networks, optional Bluetooth, and on Mac a direct address or one-time invitation."],
  ["Mutual pairing", "Acceptance, a compared code and confirmation on both devices. Trust is kept in the Keychain."],
  ["Per-device grants", "Each device may do only what you allow. Revoke access or forget a device at any moment."],
  ["Connection checks", "Measured response time and variation, preferred connections, and prepared standby paths."],
  ["Device status", "Local readings, optionally shared with a paired device. Off until you choose otherwise."],
  ["Touch surface", "An iPhone moves the pointer and clicks inside the JSTU Connect workspace on a paired Mac."],
  ["Visible activity", "Every incoming and outgoing session is listed, with Stop always within reach on both sides."],
  ["Bounded compute", "A fixed, verifiable workload shows what a paired device can execute. No code, no personal content."],
] as const;

export default function JSTUConnectPage() {
  return (
    <div className="connect">
      <div className="cx-night" aria-hidden="true">
        <NightSky />
        <div className="cx-horizon" />
      </div>
      <SiteHeader product="JSTU Connect" productHome />
      <main id="main-content" tabIndex={-1}>
          <section className="cx-hero site-width" aria-labelledby="cx-title">
            <ConnectMark />
            <p className="cx-introducing">Introducing</p>
            <h1 id="cx-title">JSTU Connect</h1>
            <p className="cx-promise">
              Unlock full capability by <span className="cx-term">Multidevice Collaboration</span>.
            </p>
            <p className="cx-lede">
              The private, local infrastructure beneath a workflow that spans your Mac, iPhone and iPad.
            </p>
            <div className="cx-cue-slot">
              <a className="cx-cue" href="#cx-origin">
                <span>Begin</span>
                <span className="cx-cue-line" aria-hidden="true" />
              </a>
            </div>
          </section>

        <section id="cx-origin" className="cx-origin site-width" aria-labelledby="cx-origin-title">
          <h2 id="cx-origin-title" className="cx-reveal">A research question, answered in software.</h2>
          <div className="cx-origin-copy cx-reveal">
            <p>
              JSTU Connect began as an extended research project into the future of Multidevice Collaboration.
              Its premise is simple: most of us already carry more capability than we ever combine. A phone, a
              tablet and a computer, each remarkable, each largely alone.
            </p>
            <p>
              What holds them apart is seldom the hardware. It is trust that cannot be seen, connections that
              cannot be relied upon, and ecosystems that end at a brand’s edge. JSTU Connect is the proposition
              that followed: a conceptual foundation, built to be used, on which cross-device workflows can be
              composed.
            </p>
            <p className="cx-citation">
              After <cite>Future Multidevice Collaboration Workflows: Technical Challenges, User Experience, and
              Feasibility</cite>, Jiahuan He, 2026.
            </p>
          </div>
        </section>

        <section className="cx-findings site-width" aria-labelledby="cx-findings-title">
          <h2 id="cx-findings-title" className="cx-reveal">Four findings.<br />Four answers.</h2>
          <ol>
            {findings.map((item, index) => (
              <li key={item.title} className="cx-reveal">
                <span className="cx-ordinal" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p className="cx-finding"><span className="visually-hidden">Finding: </span>{item.finding}</p>
                <div className="cx-answer">
                  <h3>{item.title}</h3>
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="cx-continuity" aria-labelledby="cx-continuity-title">
          <div className="site-width cx-continuity-grid">
            <div className="cx-continuity-copy cx-reveal">
              <h2 id="cx-continuity-title">Continuity, by design.</h2>
              <p>
                A path is chosen on evidence, not assumption. While one connection carries the work, another
                waits, prepared.
              </p>
              <dl>
                <div><dt>Prepared in advance</dt><dd>A primary path with up to three independent standby paths.</dd></div>
                <div><dt>Prompt to respond</dt><dd>Failover begins when the system reports an interface lost, without waiting for heartbeats to fail.</dd></div>
                <div><dt>Careful with input</dt><dd>A touch session survives a change of path, and no input is ever applied twice.</dd></div>
              </dl>
            </div>
            <figure className="cx-continuity-figure cx-reveal">
              <ContinuityDiagram />
              <figcaption>Schematic. When Wi-Fi is lost, the prepared USB path takes over.</figcaption>
            </figure>
          </div>
        </section>

        <section className="cx-gallery site-width" aria-labelledby="cx-gallery-title">
          <h2 id="cx-gallery-title" className="cx-reveal">Quietly native, on every screen.</h2>
          <figure className="cx-stage">
            <div className="cx-shot cx-shot-mac cx-rise">
              <picture>
                <source srcSet="/jstu-connect-mac-workspace.webp" type="image/webp" />
                <img
                  src="/jstu-connect-mac-workspace.png"
                  width="1366"
                  height="853"
                  loading="lazy"
                  decoding="async"
                  alt="JSTU Connect Workspace on Mac: a map of the Mac, a collaborating iPhone, an iPad and another iPhone, with a banner noting the workspace is controlled from iPhone, in this app only."
                />
              </picture>
            </div>
            <div className="cx-shot cx-shot-phone cx-rise">
              <picture>
                <source srcSet="/jstu-connect-iphone-workspace.webp" type="image/webp" />
                <img
                  src="/jstu-connect-iphone-workspace.png"
                  width="660"
                  height="1434"
                  loading="lazy"
                  decoding="async"
                  alt="JSTU Connect Workspace on iPhone: this iPhone linked to an available Mac, while discovery looks for nearby devices."
                />
              </picture>
            </div>
            <figcaption className="cx-caption">On Mac, the workspace while a paired iPhone guides the pointer, within this app only. On iPhone, what is nearby and what is trusted.</figcaption>
          </figure>
          <figure className="cx-shot cx-shot-wide cx-rise">
            <picture>
              <source srcSet="/jstu-connect-mac-checks.webp" type="image/webp" />
              <img
                src="/jstu-connect-mac-checks.png"
                width="1366"
                height="853"
                loading="lazy"
                decoding="async"
                alt="A paired iPhone in the Mac Devices view: a running connection check at 17.6 milliseconds round trip, a completed compute verification, and capabilities with their access state."
              />
            </picture>
            <figcaption>One device, examined: a live connection check, a verified compute task and every capability’s state.</figcaption>
          </figure>
        </section>

        <section className="cx-capabilities site-width" aria-labelledby="cx-capabilities-title">
          <h2 id="cx-capabilities-title" className="cx-reveal">What it does, today.</h2>
          <dl>
            {capabilities.map(([term, detail]) => (
              <div key={term} className="cx-reveal">
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="cx-private" aria-labelledby="cx-private-title">
          <div className="site-width">
            <h2 id="cx-private-title" className="cx-reveal">
              <span>No account.</span> <span>No cloud.</span> <span>No telemetry.</span>
            </h2>
            <p className="cx-reveal">
              Everything happens between devices you trust, on networks you choose. JSTU Connect works offline and
              sends nothing to a server.
            </p>
          </div>
        </section>

        <section className="cx-preview site-width" aria-labelledby="cx-preview-title">
          <div className="cx-preview-note cx-reveal">
            <h2 id="cx-preview-title">A concept, in practice.</h2>
            <p>
              JSTU Connect is a conceptual answer to the questions its research raised, shown here as it works today.
              It is in active development and is not yet a production-ready application: long sessions, every network
              condition and every combination of devices are still being validated, so keep important work on the
              tools you already trust. Availability will be announced on this page.
            </p>
          </div>
          <dl className="cx-facts cx-reveal">
            <div><dt>Platforms</dt><dd>Mac, iPhone and iPad</dd></div>
            <div><dt>Built with</dt><dd>Apple’s 27 SDKs, entirely native</dd></div>
            <div><dt>Works with</dt><dd>Two or more of your own devices</dd></div>
            <div><dt>Languages</dt><dd>English and Simplified Chinese</dd></div>
            <div><dt>Account</dt><dd>None required</dd></div>
            <div><dt>Help</dt><dd><a href="/jstu-connect/support">Support</a> · <a href="/jstu-connect/privacy">Privacy Policy</a></dd></div>
          </dl>
        </section>

        <section className="cx-close site-width" aria-labelledby="cx-close-title">
          <picture className="cx-icon cx-reveal">
            <source media="(prefers-color-scheme: dark)" srcSet="/jstu-connect-icon-dark.webp" type="image/webp" />
            <source srcSet="/jstu-connect-icon-light.webp" type="image/webp" />
            <img src="/jstu-connect-icon-light.png" width="256" height="256" alt="" loading="lazy" decoding="async" />
          </picture>
          <h2 id="cx-close-title" className="cx-reveal">The infrastructure beneath<br />your next workflow.</h2>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
