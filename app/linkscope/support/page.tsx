import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-header";

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
      <main id="main-content" tabIndex={-1} className="document-page">
        <header className="document-title">
          <p className="document-context">LinkScope / Support</p>
          <h1>LinkScope support</h1>
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
          <h2 id="requirements-title">Build your workspace</h2>
          <p>
            Select a device to inspect its Summary, Raw Parameters, and History.
            Each reading retains its provider, update time, and availability.
            LinkScope uses seven public sources: CoreHID / IOHID, IOBluetooth,
            CoreBluetooth, Core Audio, Game Controller, IORegistry, and power
            and thermal system events.
          </p>
          <p>
            Dashboards support current value, availability status, time series,
            raw table, timeline, and provider health widgets. Move or resize them
            with the pointer or keyboard, use Undo and Redo to revise a layout,
            and import or export dashboard documents as JSON.
          </p>
        </section>

        <section aria-labelledby="availability-help-title">
          <h2 id="availability-help-title">Understand availability</h2>
          <dl className="document-facts">
            <div><dt>Available</dt><dd>The provider returned a value.</dd></div>
            <div><dt>Not exposed by macOS</dt><dd>The public framework has no value to provide.</dd></div>
            <div><dt>Device did not report</dt><dd>The path exists, but the accessory supplied no reading.</dd></div>
            <div><dt>Permission denied</dt><dd>Access is needed before the provider can read the value.</dd></div>
            <div><dt>Unsupported</dt><dd>The provider or device cannot supply this parameter.</dd></div>
            <div><dt>Stale</dt><dd>A prior reading exists but is no longer current.</dd></div>
            <div><dt>Provider failed</dt><dd>The source returned a failure.</dd></div>
          </dl>
        </section>

        <section aria-labelledby="diagnostics-help-title">
          <h2 id="diagnostics-help-title">Record a diagnostic</h2>
          <p>
            Choose an available sample-capable source, a sampling interval, and a
            duration. Sampling starts only when you start the session, and you can
            stop it at any time. Sleep or a provider interruption is recorded as a
            gap. Review or compare sessions and export displayed readings as CSV.
            The menu bar and Shortcuts also provide snapshot and diagnostic actions.
          </p>
          <p>
            LinkScope observes system-reported information. It does not pair
            devices, change accessory settings, remap controls, or update firmware.
            Rules can watch parameter changes, availability, numeric thresholds,
            or provider status and send optional local notifications.
          </p>
        </section>

        <section aria-labelledby="app-information-title">
          <h2 id="app-information-title">App information</h2>
          <dl className="document-facts">
            <div><dt>Platform</dt><dd>macOS 15 or newer</dd></div>
            <div><dt>Editions</dt><dd>LinkScope and LinkScope Lite</dd></div>
            <div><dt>Interface languages</dt><dd>English and Simplified Chinese</dd></div>
            <div><dt>Current release</dt><dd>LinkScope Lite 2.0.1 · Build 13</dd></div>
            <div><dt>Availability</dt><dd><a href="https://apps.apple.com/app/linkscope-lite/id6802596955">Free on the Mac App Store</a></dd></div>
            <div><dt>Source license</dt><dd>AGPL-3.0-only</dd></div>
            <div><dt>Full edition</dt><dd>Source build with a Developer ID distribution target; the verified store download is LinkScope Lite.</dd></div>
          </dl>
        </section>

        <nav className="document-nav" aria-label="LinkScope documents">
          <a href="/linkscope">Return to LinkScope</a>
          <a href="/linkscope/privacy">Read privacy policy</a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
