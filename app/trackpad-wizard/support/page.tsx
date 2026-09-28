import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-header";

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
      <main id="main-content" tabIndex={-1} className="document-page">
        <header className="document-title">
          <p className="document-context">Trackpad Wizard / Support</p>
          <h1>Trackpad Wizard support</h1>
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
          <p>
            System mode reads AppKit touch while the pointer is over the capture
            surface, native gestures, Force Click stages, and device diagnostics.
            Enhanced Mode adds raw contacts for one selected device and direct
            actuator experiments. Advanced system changes require confirmation
            and have an automatic ten-second rollback.
          </p>
        </section>

        <section aria-labelledby="trackpad-workspaces-title">
          <h2 id="trackpad-workspaces-title">Explore the workspaces</h2>
          <dl className="document-facts">
            <div><dt>Touch Lab</dt><dd>Contacts, resting touches, trails, heatmaps, physical sizing, sample rate, and Force Click pressure.</dd></div>
            <div><dt>Gesture Studio</dt><dd>Magnification, rotation, precision scrolling, swipes, pressure stages, and gesture events.</dd></div>
            <div><dt>Haptic Composer</dt><dd>Timed pulses, amplitude, device routing, and an 8–120 Hz press-and-hold signal in Enhanced Mode.</dd></div>
            <div><dt>Mappings</dt><dd>Connect a swipe, pinch, rotation, or Force Click to a shortcut or saved haptic pattern. Key injection requires Accessibility access.</dd></div>
            <div><dt>Statistics</dt><dd>Local actuator-call counts, daily history, lifetime totals, and a reset control, using pseudonymous device identifiers.</dd></div>
            <div><dt>Devices</dt><dd>Transport, reported battery, Force Touch support, report interval, sensor size, and macOS trackpad preferences.</dd></div>
          </dl>
        </section>

        <section aria-labelledby="trackpad-updates-title">
          <h2 id="trackpad-updates-title">Downloads and updates</h2>
          <p>
            The release is Developer ID-signed, notarized, and stapled. GitHub
            Releases includes a SHA-256 checksum; the in-app updater verifies the
            downloaded image before opening it. Update checks can be manual or
            daily. Automatic download is a separate preference.
          </p>
        </section>

        <nav className="document-nav" aria-label="Trackpad Wizard documents">
          <a href="/trackpad-wizard">Return to Trackpad Wizard</a>
          <a href="/trackpad-wizard/privacy">Read privacy notes</a>
          <a href="https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard/releases/tag/v0.3.0-build.4">Read release notes ↗</a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
