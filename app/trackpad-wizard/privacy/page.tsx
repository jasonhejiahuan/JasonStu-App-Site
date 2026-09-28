import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-header";

const description = "Current implementation privacy notes for Trackpad Wizard.";

export const metadata: Metadata = {
  title: "Trackpad Wizard Privacy",
  description,
  alternates: { canonical: "/trackpad-wizard/privacy" },
  openGraph: {
    title: "Trackpad Wizard Privacy",
    description,
    url: "/trackpad-wizard/privacy",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Trackpad Wizard Privacy",
    description,
    images: [],
  },
};

export default function TrackpadWizardPrivacyPage() {
  return (
    <>
      <SiteHeader product="Trackpad Wizard" />
      <main id="main-content" tabIndex={-1} className="document-page">
        <header className="document-title">
          <p className="document-context">Trackpad Wizard / Privacy / 2026-09-03</p>
          <h1>Experiments stay on your Mac unless you export them.</h1>
          <p>
            These notes describe the current 0.3.0 (Build 4) implementation. They
            will be revised if the app&apos;s storage, network or distribution behavior changes.
          </p>
        </header>

        <section aria-labelledby="trackpad-local-title">
          <h2 id="trackpad-local-title">Touch and haptic data remain local</h2>
          <p>
            Touch frames, mappings and actuator statistics are processed and stored
            on the Mac. Data leaves the app only when the user explicitly exports a
            touch session or haptic pattern.
          </p>
          <p>
            Bluetooth addresses, serial-like values and private actuator identifiers
            are not displayed or included in exports. Statistics use a local
            pseudonymous trackpad identifier rather than publishing hardware identity.
          </p>
        </section>

        <section aria-labelledby="trackpad-permission-title">
          <h2 id="trackpad-permission-title">Permission is tied to an action</h2>
          <p>
            Trackpad Wizard does not request Accessibility during initialization or
            before the main window appears. Access is requested only from the visible
            Request Access action and is needed for keyboard-shortcut injection or the
            optional process-scoped system-gesture filter.
          </p>
          <p>
            Touch inspection, device diagnostics, haptic playback and vibration
            statistics do not require Accessibility. Enhanced Mode is off after every
            launch and its private runtimes load only while an enabled experiment needs them.
          </p>
        </section>

        <section aria-labelledby="trackpad-network-title">
          <h2 id="trackpad-network-title">Update checks use GitHub Releases</h2>
          <p>
            The app can check the project&apos;s public GitHub Releases manually or once
            per day when automatic checks are enabled. Automatic download is a
            separate preference. A downloaded DMG is checked against the release&apos;s
            published SHA-256 value before macOS is asked to open it.
          </p>
          <p>
            The current application source contains no analytics or touch-data upload.
            The JasonStu Apps website likewise contains no analytics, advertising,
            session replay or third-party script.
          </p>
        </section>

        <nav className="document-nav" aria-label="Trackpad Wizard documents">
          <a href="/trackpad-wizard">Return to Trackpad Wizard</a>
          <a href="/trackpad-wizard/support">Get support</a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
