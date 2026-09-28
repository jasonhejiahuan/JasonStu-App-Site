import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-header";

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

export default function LinkScopePage() {
  return (
    <>
      <SiteHeader product="LinkScope" productHome />
      <main id="main-content" tabIndex={-1} className="product-page linkscope-page">
        <section className="product-hero site-width" aria-labelledby="linkscope-title">
          <div className="hero-copy">
            <div className="product-identity">
              <img src="/linkscope-mark.svg" width="465" height="432" alt="" />
              <p>LinkScope Lite</p>
            </div>
            <h1 id="linkscope-title">A clearer view of your Mac.</h1>
            <p className="hero-description">
              Get to know your accessories. See the details, follow a connection,
              and bring the readings that matter into one workspace.
            </p>
            <div className="product-actions" aria-label="LinkScope actions">
              <a className="action-primary" href="https://apps.apple.com/app/linkscope-lite/id6802596955">Download on the Mac App Store ↗</a>
              <a href="https://github.com/jasonhejiahuan/LinkScope">View source ↗</a>
            </div>
            <p className="release-line">Free · macOS 15+ · Version 2.0.1</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <img src="/linkscope-mark.svg" width="465" height="432" alt="" />
          </div>
        </section>

        <figure className="product-image site-width">
          <a href="/linkscope-dashboard.png" aria-label="View the full-size LinkScope Lite dashboard">
            <picture>
              <source
                type="image/webp"
                srcSet="/linkscope-dashboard-960.webp 960w, /linkscope-dashboard-1920.webp 1920w"
                sizes="(max-width: 80rem) 92vw, 1280px"
              />
              <img
                src="/linkscope-dashboard.png"
                width="2798"
                height="1664"
                decoding="async"
                alt="LinkScope Lite dashboard with Audio Status, Input, Bluetooth, and Controllers widgets beside the Widget Inspector."
              />
            </picture>
          </a>
        </figure>

        <section className="product-section site-width" aria-labelledby="workspace-title">
          <div className="section-heading">
            <h2 id="workspace-title">Your readings.<br />Your workspace.</h2>
            <p>
              Bluetooth, audio, input devices, and game controllers.
              A little more context for everything connected to your Mac.
            </p>
          </div>
          <ul className="feature-list">
            <li>
              <h3>Make it your own.</h3>
              <p>Arrange six kinds of dashboard widgets. Keep a value close, follow a timeline, or see how your sources are doing.</p>
            </li>
            <li>
              <h3>Keep the whole picture.</h3>
              <p>Bring device details and connection history together. Save a snapshot to return to a moment that matters.</p>
            </li>
            <li>
              <h3>Follow a signal.</h3>
              <p>Start a diagnostic when you need a closer look. Compare sessions and take your readings with you as CSV.</p>
            </li>
          </ul>
        </section>

        <section className="reading-section" aria-labelledby="readings-title">
          <div className="site-width">
            <div className="section-heading">
              <h2 id="readings-title">Clarity, even<br />in the gaps.</h2>
              <p>A missing value has a reason. LinkScope keeps it visible, right beside the readings your Mac can share.</p>
            </div>
            <dl className="reading-list">
              <div><dt>Available</dt><dd>A current value from the source.</dd></div>
              <div><dt>Not exposed by macOS</dt><dd>The system has no reading to share.</dd></div>
              <div><dt>Device did not report</dt><dd>The accessory hasn’t supplied a value.</dd></div>
            </dl>
          </div>
        </section>

        <section className="product-end site-width" aria-labelledby="linkscope-end-title">
          <h2 id="linkscope-end-title">Look a little closer.</h2>
          <p>Free on the Mac App Store. English and Simplified Chinese. No app account required.</p>
          <div className="product-actions">
            <a className="action-primary" href="https://apps.apple.com/app/linkscope-lite/id6802596955">Download on the Mac App Store ↗</a>
            <a href="/linkscope/support">Support &amp; guide</a>
            <a href="/linkscope/privacy">Privacy</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
