import type { Metadata } from "next";
import { SiteHeader } from "../../site-header";

const description = "Support information for the Trackpad Wizard macOS project.";

export const metadata: Metadata = {
  title: "Trackpad Wizard Support",
  description,
  alternates: { canonical: "/trackpad-wizard/support" },
  openGraph: {
    title: "Trackpad Wizard Support",
    description,
    url: "/trackpad-wizard/support",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Trackpad Wizard Support",
    description,
    images: [],
  },
};

export default function TrackpadWizardSupportPage() {
  return (
    <>
      <SiteHeader product="Trackpad Wizard" />
      <main id="main-content" className="document-page">
        <header className="document-title">
          <p className="eyebrow">Trackpad Wizard / Support</p>
          <h1>Support starts with what happened under your fingers.</h1>
          <p>
            The public source repository and its issue tracker are the current
            support channel for Trackpad Wizard.
          </p>
        </header>

        <section aria-labelledby="trackpad-report-title">
          <h2 id="trackpad-report-title">Report an issue</h2>
          <p>
            Include the app version and build, macOS version, Mac model class,
            built-in or external trackpad, active System or Enhanced mode, and the
            steps that reproduce the behavior. Note whether it followed sleep,
            wake, lid closure, device reconnection or a permission change.
          </p>
          <p>
            If an error notice appears, include its stable <code>TW-xxxx</code>
            code. Do not post Bluetooth addresses, serial-like values or an
            unreviewed exported session in a public issue.
          </p>
          <a
            className="document-action"
            href="https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard/issues"
          >
            Open the Trackpad Wizard issue tracker <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section aria-labelledby="trackpad-requirements-title">
          <h2 id="trackpad-requirements-title">Current release requirements</h2>
          <dl className="document-facts">
            <div><dt>Version</dt><dd>0.3.0 (Build 4)</dd></div>
            <div><dt>Platform</dt><dd>macOS 26 or later</dd></div>
            <div><dt>Distribution</dt><dd>Developer ID-signed, notarized and stapled DMG</dd></div>
            <div><dt>Source license</dt><dd>MPL-2.0</dd></div>
          </dl>
        </section>

        <section aria-labelledby="trackpad-safe-start-title">
          <h2 id="trackpad-safe-start-title">Start with System mode</h2>
          <p>
            System mode is the complete public baseline and the default after
            launch. Enable Enhanced Mode only when a raw-contact or direct-actuator
            experiment needs it. Experimental services release their private
            runtime when no enhanced feature or recovery action remains active.
          </p>
        </section>

        <nav className="document-nav" aria-label="Trackpad Wizard documents">
          <a href="/trackpad-wizard">Return to Trackpad Wizard</a>
          <a href="/trackpad-wizard/privacy">Read privacy notes</a>
          <a href="https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard/releases/tag/v0.3.0-build.4">Read release notes ↗</a>
        </nav>
      </main>
    </>
  );
}
