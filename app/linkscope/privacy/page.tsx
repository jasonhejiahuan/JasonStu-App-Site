import type { Metadata } from "next";
import { SiteHeader } from "../../site-header";

const description = "Current implementation privacy notes for LinkScope.";

export const metadata: Metadata = {
  title: "LinkScope Privacy",
  description,
  alternates: { canonical: "/linkscope/privacy" },
  openGraph: {
    title: "LinkScope Privacy",
    description,
    url: "/linkscope/privacy",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "LinkScope Privacy",
    description,
    images: [],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader product="LinkScope" />
      <main id="main-content" className="document-page">
        <header className="document-title">
          <p className="eyebrow">LinkScope / Privacy / 2026-08-20</p>
          <h1>The current implementation keeps inspection local.</h1>
          <p>
            These notes describe the evidence in the active LinkScope source. They
            will be revised if distribution or implementation changes.
          </p>
        </header>

        <section aria-labelledby="reads-title">
          <h2 id="reads-title">What LinkScope reads</h2>
          <p>
            Public macOS providers expose accessory, connection, audio, controller,
            HID, registry, power, thermal, and workspace observations. LinkScope is
            read-only: its provider contract does not pair, connect, configure, or
            control accessories.
          </p>
          <p>
            Bluetooth access enables connected-accessory status and available
            parameters. Notification access is optional and is used only for
            monitoring rules that the user enables.
          </p>
        </section>

        <section aria-labelledby="storage-title">
          <h2 id="storage-title">Local storage and exports</h2>
          <p>
            Sensitive raw identifiers and parameter payloads in local history are
            AES-GCM encrypted. A Keychain-backed master key derives separate
            encryption and lookup keys. If saved-history access is unavailable, the
            current session can continue in memory.
          </p>
          <p>
            JSON snapshots and diagnostic CSV files are created only through an
            explicit export action. Exports are designed to preserve raw values and
            availability states, so users should review them before sharing.
          </p>
        </section>

        <section aria-labelledby="network-title">
          <h2 id="network-title">Network and website behavior</h2>
          <p>
            The current LinkScope application source contains no observation-upload
            or analytics integration. The current JasonStu Apps website also contains
            no analytics, advertising, session replay, or third-party script.
          </p>
        </section>

        <nav className="document-nav" aria-label="LinkScope documents">
          <a href="/linkscope">Return to LinkScope</a>
          <a href="/linkscope/support">Get support</a>
        </nav>
      </main>
    </>
  );
}

