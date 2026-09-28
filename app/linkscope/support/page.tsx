import type { Metadata } from "next";
import { SiteHeader } from "../../site-header";

const description = "Get help with LinkScope Lite for macOS: permissions, saved history, missing readings, and issue reports.";

export const metadata: Metadata = {
  title: "LinkScope Support",
  description,
  alternates: { canonical: "/linkscope/support" },
  openGraph: {
    title: "LinkScope Support",
    description,
    url: "/linkscope/support",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "LinkScope Support",
    description,
    images: [],
  },
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader product="LinkScope" />
      <main id="main-content" className="document-page">
        <header className="document-title">
          <p className="eyebrow">LinkScope / Support</p>
          <h1>Support begins with reproducible evidence.</h1>
          <p>
            LinkScope Lite is available free on the Mac App Store. Use the public
            source repository and its issue tracker for support.
          </p>
        </header>

        <section aria-labelledby="report-title">
          <h2 id="report-title">Report an issue</h2>
          <p>
            Include the LinkScope edition, app version and build, macOS version, the steps that led to the
            problem, and what you expected to happen. Note whether the problem
            followed sleep, wake, reconnect, or a permission change when relevant.
          </p>
          <p>
            Do not post raw device identifiers or an unredacted LinkScope export in
            a public issue. A focused description is usually enough to begin.
          </p>
          <a className="document-action" href="https://github.com/jasonhejiahuan/LinkScope/issues">
            Open the LinkScope issue tracker <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section aria-labelledby="permissions-help-title">
          <h2 id="permissions-help-title">Permissions and saved history</h2>
          <p>
            Open Settings &gt; Permissions in LinkScope Lite. Bluetooth access is
            required for Bluetooth accessory inspection; Continue opens the macOS
            permission request. Saved History and Notifications are optional.
            Done closes setup with your current choices.
          </p>
          <p>
            Enable Saved History to retain observations and dashboards between
            launches. If storage is unavailable, the app works in memory-only mode.
            Open Settings beside a Bluetooth or notification status takes you to
            the corresponding macOS controls.
          </p>
        </section>

        <section aria-labelledby="missing-help-title">
          <h2 id="missing-help-title">Missing a device or reading?</h2>
          <p>
            Check Provider Status and the reading’s availability reason. Hardware,
            macOS, and permissions determine what appears; not every accessory
            exposes battery information or signal strength. LinkScope Lite does
            not scan for arbitrary nearby BLE devices. Connect your accessory in
            macOS before starting a diagnostic with an available source.
          </p>
        </section>

        <section aria-labelledby="requirements-title">
          <h2 id="requirements-title">App information</h2>
          <dl className="document-facts">
            <div><dt>Platform</dt><dd>macOS 15 or newer</dd></div>
            <div><dt>Editions</dt><dd>LinkScope and LinkScope Lite</dd></div>
            <div><dt>Interface languages</dt><dd>English and Simplified Chinese</dd></div>
            <div><dt>Current release</dt><dd>LinkScope Lite 2.0.1 · Build 13</dd></div>
            <div><dt>Availability</dt><dd><a href="https://apps.apple.com/app/linkscope-lite/id6802596955">Free on the Mac App Store</a></dd></div>
          </dl>
        </section>

        <nav className="document-nav" aria-label="LinkScope documents">
          <a href="/linkscope">Return to LinkScope</a>
          <a href="/linkscope/privacy">Read privacy policy</a>
        </nav>
      </main>
    </>
  );
}
