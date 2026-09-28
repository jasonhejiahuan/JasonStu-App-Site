import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-header";

const description =
  "How LinkScope Lite for macOS handles accessory data, local history, exports, permissions, and support requests.";

export const metadata: Metadata = {
  title: "LinkScope Lite Privacy Policy",
  description,
  alternates: { canonical: "/linkscope/privacy" },
  openGraph: {
    title: "LinkScope Lite Privacy Policy",
    description,
    url: "/linkscope/privacy",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "LinkScope Lite Privacy Policy",
    description,
    images: [],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader product="LinkScope" />
      <main id="main-content" tabIndex={-1} className="document-page">
        <header className="document-title">
          <p className="document-context">LinkScope Lite / Privacy / September 23, 2026</p>
          <h1>LinkScope Lite Privacy Policy</h1>
          <p>Effective September 23, 2026 · Applies to LinkScope Lite 2.0.1 for macOS · Developer: JASON Studio</p>
          <p>
            LinkScope Lite processes accessory information on your Mac. It does not
            automatically send observations, device identifiers, saved history, or
            dashboard content to JASON Studio or third-party analytics services.
            It has no account system, advertising, tracking SDK, or automatic cloud sync.
          </p>
        </header>

        <section aria-labelledby="information-title">
          <h2 id="information-title">Information used on your Mac</h2>
          <p>
            Depending on your hardware, macOS, and permissions, the app reads
            accessory and system information exposed by macOS. This can include
            device names, Bluetooth addresses, serial numbers and other hardware
            identifiers; connection and pairing state; available signal strength
            and battery information; audio endpoint names and routing; hardware
            properties; your Mac’s name and macOS version; and power, thermal,
            sleep, and wake state.
          </p>
          <p>
            The app uses this information to display devices and parameters,
            associate observations with devices, show changes over time, and run
            diagnostics you initiate. It also processes your dashboard layouts,
            rules, diagnostic session names, saved snapshots, imported files, and
            app preferences. These stay local unless you choose to export or share them.
          </p>
          <p>
            LinkScope Lite does not record microphone audio, keystrokes, pointer
            movements, or game-controller gameplay input. It does not read
            passwords or credentials belonging to other apps.
          </p>
        </section>

        <section aria-labelledby="storage-title">
          <h2 id="storage-title">Local storage and protection</h2>
          <p>
            Live observations can run in memory before saved history is configured.
            Saved History is optional. When you enable it, the app stores its own
            master key in the macOS Keychain and saves data locally. Apple CryptoKit
            AES-256-GCM encrypts sensitive serialized payloads; HKDF-SHA256 derives
            separate keys, and HMAC-SHA256 supports local identifier matching.
          </p>
          <p>
            Protected payloads include raw observation values, device identifiers,
            and dashboard content. The whole SQLite database is not encrypted.
            Query metadata such as timestamps, local record identifiers, parameter
            paths, status information, and saved snapshot names, as well as app
            preferences, are not encrypted by LinkScope. The master key is a
            device-only Keychain item that LinkScope does not sync through iCloud.
            Your backups and system security settings are separate protections.
          </p>
        </section>

        <section aria-labelledby="files-title">
          <h2 id="files-title">Files you import or export</h2>
          <p>
            You choose import files and export destinations with macOS file dialogs.
            Snapshot JSON, diagnostic CSV, and dashboard JSON exports are ordinary,
            unencrypted files. They may contain device names, identifiers, raw
            values, and text or configuration you supplied. Dashboard documents
            may also preserve additional fields from imported files.
          </p>
          <p>
            Exporting does not send a file to JASON Studio. Review its contents
            before sharing. Saving to a synchronized folder, sharing through another
            app, or sending an export to support may move it off your Mac under
            that service’s privacy practices. LinkScope does not automatically
            redact exports or control copies you share.
          </p>
        </section>

        <section aria-labelledby="retention-title">
          <h2 id="retention-title">Retention and deletion</h2>
          <p>
            Saved history is retained without a time limit by default. In Settings
            &gt; Storage, you can select 30, 90, or 365 days, preview older
            observations, and explicitly confirm their deletion. Selecting a
            period alone does not start automatic cleanup.
          </p>
          <p>
            Cleanup deletes older observation records only. It does not delete
            copies inside saved snapshots, device identity records, timeline
            entries, diagnostic sessions, rules, preferences, Keychain keys, or
            exported files. Dashboards and rules can be deleted individually
            where their delete controls are available.
          </p>
          <p>
            Version 2.0.1 has no single control to erase all local app data and
            its Keychain key. Uninstalling the app does not guarantee removal of
            every local record, key, backup, or export. We do not hold your local
            database and cannot retrieve or remotely erase it. Manage exports
            and backups where you saved them; contact support if you need help.
          </p>
        </section>

        <section aria-labelledby="permissions-title">
          <h2 id="permissions-title">Your choices and permissions</h2>
          <p>
            Bluetooth access is required for Bluetooth accessory inspection.
            Saved History and Notifications are optional. You can review permission
            status in the app’s Settings &gt; Permissions. Change Bluetooth access
            in macOS System Settings &gt; Privacy &amp; Security &gt; Bluetooth,
            and notification access in System Settings &gt; Notifications. Rule
            notifications are local notifications. Related features may become
            unavailable when permission is denied.
          </p>
          <p>
            You can decline saved-history setup and continue using available live
            features. Quitting LinkScope Lite stops new observations by the app.
            Revoking a permission does not delete data already saved. Shortcuts
            run at your direction and can return information to the shortcut you invoke.
          </p>
        </section>

        <section aria-labelledby="website-title">
          <h2 id="website-title">Website visits and support</h2>
          <p>
            Opening this website or privacy-policy link makes a browser request.
            Website infrastructure may process technical request information,
            such as your IP address and browser information, to deliver and protect
            the site. Local processing in the app does not mean website servers
            keep no access logs.
          </p>
          <p>
            If you contact JASON Studio, we receive the contact details, message,
            and attachments you choose to provide. We use them to respond and
            resolve your request, retaining them as needed for that purpose and
            applicable obligations. Hosting and communication providers may
            process those requests to deliver their services. We do not sell
            support correspondence or use it for advertising. You may request
            access, correction, or deletion of information you supplied through
            support, subject to applicable requirements.
          </p>
          <p>
            A public issue tracker can expose your message and attachments to
            others. Do not post your database, full exports, or sensitive device
            identifiers in a public issue. Apple may separately handle App Store
            transactions and system diagnostics under its policies and your choices.
          </p>
        </section>

        <section aria-labelledby="contact-title">
          <h2 id="contact-title">Contact and updates</h2>
          <p>
            For privacy questions or requests about information you sent to support,
            contact JASON Studio through <a href="/linkscope/support">LinkScope Support</a>.
            We will publish policy changes here and update the effective date. If a
            future version changes how the app handles information, we will update
            this policy and the App Store privacy disclosures accordingly.
          </p>
        </section>

        <nav className="document-nav" aria-label="LinkScope documents">
          <a href="/linkscope">Return to LinkScope</a>
          <a href="/linkscope/support">Get support</a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
