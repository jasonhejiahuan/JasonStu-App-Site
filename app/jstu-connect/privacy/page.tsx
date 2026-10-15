import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-header";
import "../connect.css";

const description =
  "How JSTU Connect for Mac, iPhone and iPad handles device information, pairing, status sharing, permissions and local storage. JASON Studio collects no data from the app.";

export const metadata: Metadata = {
  title: "JSTU Connect Privacy Policy",
  description,
  alternates: { canonical: "/jstu-connect/privacy" },
  openGraph: {
    title: "JSTU Connect Privacy Policy",
    description,
    url: "/jstu-connect/privacy",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "JSTU Connect Privacy Policy",
    description,
    images: [],
  },
};

export default function JSTUConnectPrivacyPage() {
  return (
    <div className="connect connect-document">
      <SiteHeader product="JSTU Connect" />
      <main id="main-content" tabIndex={-1} className="document-page">
        <header className="document-title">
          <p className="document-context">
            <a href="/jstu-connect">JSTU Connect</a> / Privacy / October 15, 2026
          </p>
          <h1>JSTU Connect Privacy Policy</h1>
          <p>Effective October 15, 2026 · Applies to JSTU Connect for macOS, iOS and iPadOS · Developer: JASON Studio</p>
        </header>

        <section aria-labelledby="summary-title">
          <h2 id="summary-title">In short</h2>
          <p>
            JASON Studio does not collect any data from JSTU Connect. The app has no account, no servers of ours,
            no advertising, no analytics or tracking, and no third-party SDKs. It works between devices you own,
            on networks you choose. Information leaves a device only when it goes directly to another device you
            have paired, and only as described below.
          </p>
        </section>

        <section aria-labelledby="device-title">
          <h2 id="device-title">Information used on your device</h2>
          <p>
            To discover, pair and work with your devices, JSTU Connect uses your device’s name (on iPhone and
            iPad, the name iOS provides or one you set in the app), network interfaces and addresses on your local
            network, and nearby-device presence received over Bonjour or, if you turn it on, Bluetooth.
          </p>
          <p>
            For device status, it reads hardware and system information such as processor, memory, graphics,
            power and thermal state, network type, available storage, audio routes and camera formats. On iPhone
            and iPad, pressure and relative altitude are read only after you enable that reading. This information
            is shown to you in the app and is used to measure connections and describe each device’s capacity.
          </p>
        </section>

        <section aria-labelledby="shared-title">
          <h2 id="shared-title">What passes between your devices</h2>
          <p>
            Before pairing, a device announces only an anonymous presence: protocol information, a generic device
            kind and a temporary identifier that changes over time. It does not include your device name,
            addresses as metadata, or hardware details.
          </p>
          <p>
            Pairing begins only when the other device accepts, and trust is saved only after both people compare
            and confirm the same code. During pairing, the two devices exchange their device names and the
            cryptographic identities used to recognise each other later. All later communication between paired
            devices is authenticated and encrypted.
          </p>
          <p>
            Once paired, a device can send only what you allow. Status sharing is off by default; when you turn it
            on, the readings you select are sent to your paired devices. A connection check sends measurement
            messages. The touch surface sends pointer movements and clicks to the paired Mac, where they act only
            inside the JSTU Connect window. A compute check sends a random number and returns a result; it never
            includes your files, code or personal content. None of this passes through JASON Studio or any other
            server.
          </p>
        </section>

        <section aria-labelledby="storage-title">
          <h2 id="storage-title">Storage on your devices</h2>
          <p>
            Identity keys, the identities of devices you trust and the permissions you grant them are stored in the
            Keychain as this-device-only items: they do not sync through iCloud Keychain and are not restored to a
            different device. Preferences are stored in the app’s local settings. These include discovery and
            Bluetooth switches, connection preferences, status-sharing choices, addresses you add manually, and
            any device name you set.
          </p>
          <p>
            The app keeps diagnostic logs on your device to help it run reliably. They are redacted to exclude
            device and user names, network addresses, input, audio, keys and pairing secrets, and the app never
            uploads them. If you choose to share analytics with Apple, Apple may receive crash reports under
            Apple’s own privacy policy.
          </p>
        </section>

        <section aria-labelledby="permissions-title">
          <h2 id="permissions-title">Permissions</h2>
          <dl className="document-facts">
            <div><dt>Local Network</dt><dd>Required to discover, pair and connect with your devices.</dd></div>
            <div><dt>Bluetooth</dt><dd>Used only when you turn on Bluetooth discovery.</dd></div>
            <div>
              <dt>Camera and Microphone</dt>
              <dd>Requested only when you ask for them. Granting access does not start capture or recording, and the app does not record, store or transmit camera or microphone content.</dd>
            </div>
            <div><dt>Motion &amp; Fitness</dt><dd>On iPhone and iPad, used only when you enable pressure and relative altitude readings.</dd></div>
          </dl>
          <p>
            You can change these at any time in System Settings on Mac or Settings on iPhone and iPad. In the app,
            discovery, Bluetooth, status sharing and sensor access each have their own switch.
          </p>
        </section>

        <section aria-labelledby="control-title">
          <h2 id="control-title">Your control, retention and deletion</h2>
          <p>
            Information stays on your devices until you change or remove it. When you turn off status sharing,
            your paired devices receive an update with no readings, which replaces what they held. Turning off a
            module’s switch stops its sampling, and Stop ends an activity on both devices. Forgetting a device
            removes its trust and permissions.
          </p>
          <p>
            On iPhone and iPad, deleting the app removes its preferences. On Mac, macOS may keep the app’s data
            container after the app is moved to the Trash. On every platform, the system may keep Keychain items
            after the app is deleted, so forget your devices in the app first if you want them removed. JASON Studio holds none of
            your information, so there is nothing for us to retrieve or delete on your behalf.
          </p>
        </section>

        <section aria-labelledby="third-title">
          <h2 id="third-title">Third parties, children and testing</h2>
          <p>
            JSTU Connect does not sell, share or rent information, and it contains no third-party code that collects
            data. The app is not directed at children and collects no information from anyone. Apple handles App
            Store and TestFlight distribution under its own privacy policy. If you send feedback through TestFlight,
            we receive the comments, screenshots and device details Apple includes with it, and use them only to
            improve the app.
          </p>
          <p>
            Opening this website makes an ordinary browser request. Our hosting provider may process technical
            information such as your IP address and browser type to deliver and protect the site. The website sets
            no cookies and runs no analytics.
          </p>
        </section>

        <section aria-labelledby="contact-title">
          <h2 id="contact-title">Changes to this policy</h2>
          <p>
            If a future version changes how the app handles information, we will update this policy, its effective
            date and the App Store privacy details before that version is released.
          </p>
        </section>

        <nav className="document-nav" aria-label="JSTU Connect documents">
          <a href="/jstu-connect">Return to JSTU Connect</a>
          <a href="/jstu-connect/support">Get support</a>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
