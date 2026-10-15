import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-header";
import "../connect.css";

const description =
  "Get started with JSTU Connect on Mac, iPhone and iPad: pairing, connection checks, the touch surface, status sharing, stopping activity and troubleshooting.";

export const metadata: Metadata = {
  title: "JSTU Connect Support",
  description,
  alternates: { canonical: "/jstu-connect/support" },
  openGraph: {
    title: "JSTU Connect Support",
    description,
    url: "/jstu-connect/support",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "JSTU Connect Support",
    description,
    images: [],
  },
};

export default function JSTUConnectSupportPage() {
  return (
    <div className="connect connect-document">
      <SiteHeader product="JSTU Connect" />
      <main id="main-content" tabIndex={-1} className="document-page">
        <header className="document-title">
          <p className="document-context">
            <a href="/jstu-connect">JSTU Connect</a> / Support
          </p>
          <h1>JSTU Connect support</h1>
          <p>
            Everything you need to bring your devices together, and what to try when something does not work as
            expected. JSTU Connect is in active development and is not yet a production-ready application.
          </p>
        </header>

        <section aria-labelledby="feedback-title">
          <h2 id="feedback-title">Feedback</h2>
          <p>
            If you are testing through TestFlight, send feedback and screenshots from the TestFlight app. Please
            include your devices, how they were connected (Wi-Fi, Ethernet or USB), what you did and what you
            expected. Do not send keys, invitation codes or network addresses.
          </p>
        </section>

        <section aria-labelledby="start-title">
          <h2 id="start-title">Getting started</h2>
          <p>
            JSTU Connect works between two or more of your own devices, each running the app, on the same local
            network or connected by cable. No account is needed. When the app first asks for Local Network
            access, allow it: discovery, pairing and every connection depend on it.
          </p>
          <p>
            Nearby devices appear in Workspace. Bluetooth discovery is optional and off by default; turn it on in
            Settings if you want devices to find each other that way as well.
          </p>
        </section>

        <section aria-labelledby="pair-title">
          <h2 id="pair-title">Pairing two devices</h2>
          <p>
            Select the other device and choose <strong>Pair…</strong>. The other device asks whether to accept.
            Once accepted, both devices show a code: compare them, and confirm on both devices only if they match.
            Trust is saved only after both people confirm.
          </p>
          <p>
            On Mac, if a device does not appear, open <strong>Connect Devices</strong> and add a{" "}
            <strong>Manual Address</strong>, or use <strong>Create an Invitation on This Mac</strong> on one Mac and{" "}
            <strong>Use Invitation Code…</strong> on the other.
          </p>
        </section>

        <section aria-labelledby="use-title">
          <h2 id="use-title">Working with a paired device</h2>
          <dl className="document-facts">
            <div>
              <dt>Check Connection</dt>
              <dd>Measures response time to the paired device. Under Preferred Connections you can choose the paths it may use; prepared standby paths take over if an interface such as Wi-Fi or a cable drops.</dd>
            </div>
            <div>
              <dt>Touch Surface</dt>
              <dd>On iPhone, moves the pointer and clicks inside the JSTU Connect window on a paired Mac. It does not control other apps. Choose Stop Control to end it.</dd>
            </div>
            <div>
              <dt>Shared Insights</dt>
              <dd>Shows a paired device’s status. A device shares readings only after its owner turns on Share Device Status; it is off by default.</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="stop-title">
          <h2 id="stop-title">Stop, disconnect or forget</h2>
          <dl className="document-facts">
            <div><dt>Stop</dt><dd>Ends one activity on both devices. On Mac, Stop All ends every incoming and outgoing session at once.</dd></div>
            <div><dt>Disconnect Temporarily</dt><dd>Pauses a paired device while the app is running, keeping its trust and permissions and suppressing automatic reconnection. Choose Reconnect to continue.</dd></div>
            <div><dt>Forget Device…</dt><dd>Removes the device’s trust and permissions. You will need to pair again to use it.</dd></div>
          </dl>
        </section>

        <section aria-labelledby="trouble-title">
          <h2 id="trouble-title">Troubleshooting</h2>
          <dl className="document-facts">
            <div>
              <dt>A device does not appear</dt>
              <dd>
                Make sure both devices run JSTU Connect and are on the same network or connected by cable, then
                choose Discover Again. Check that Local Network access is allowed: on iPhone and iPad in Settings
                &gt; Privacy &amp; Security &gt; Local Network, and on Mac in System Settings &gt; Privacy &amp;
                Security &gt; Local Network. On Mac you can also add a Manual Address.
              </dd>
            </div>
            <div>
              <dt>Check Connection fails</dt>
              <dd>The first attempt can occasionally fail; a second attempt usually succeeds. This is a known issue being worked on.</dd>
            </div>
            <div>
              <dt>Pairing does not complete</dt>
              <dd>Requests expire after a short time. Start pairing again with both apps open, and confirm on both devices only if the codes match.</dd>
            </div>
            <div>
              <dt>An activity briefly disappears</dt>
              <dd>When an iPhone stops a check started from a Mac, the activity can briefly vanish before the Mac shows it again. This is a known issue.</dd>
            </div>
            <div>
              <dt>A device shows no status</dt>
              <dd>That device has not turned on Share Device Status, or has not yet exchanged status after pairing.</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="facts-title">
          <h2 id="facts-title">About this release</h2>
          <dl className="document-facts">
            <div><dt>Version</dt><dd>0.4.1 (5)</dd></div>
            <div><dt>Platforms</dt><dd>Mac, iPhone and iPad</dd></div>
            <div><dt>Languages</dt><dd>English and Simplified Chinese</dd></div>
            <div><dt>Privacy</dt><dd><a href="/jstu-connect/privacy">JSTU Connect Privacy Policy</a></dd></div>
          </dl>
        </section>

        <nav className="document-nav" aria-label="JSTU Connect documents">
          <a href="/jstu-connect">Return to JSTU Connect</a>
          <a href="/jstu-connect/privacy">Privacy Policy</a>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
