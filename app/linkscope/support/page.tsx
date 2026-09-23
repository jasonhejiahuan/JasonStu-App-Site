import type { Metadata } from "next";
import { SiteHeader } from "../../site-header";

const description = "Support information for the LinkScope macOS project.";

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
            LinkScope Lite is coming soon on the Mac App Store. The public source
            repository and its issue tracker are the current support channel.
          </p>
        </header>

        <section aria-labelledby="report-title">
          <h2 id="report-title">Report an issue</h2>
          <p>
            Include the LinkScope edition, macOS version, the steps that led to the
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

        <section aria-labelledby="requirements-title">
          <h2 id="requirements-title">App information</h2>
          <dl className="document-facts">
            <div><dt>Platform</dt><dd>macOS 15 or newer</dd></div>
            <div><dt>Editions</dt><dd>LinkScope and LinkScope Lite</dd></div>
            <div><dt>Interface languages</dt><dd>English and Simplified Chinese</dd></div>
            <div><dt>Availability</dt><dd>LinkScope Lite is coming soon on the Mac App Store; download availability has not been confirmed</dd></div>
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
