import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./site-header";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="collection-home site-width">
        <header className="collection-intro">
          <h1>Independent apps.<br />Made for your Mac.</h1>
          <p>A closer look at the things you use every day. Software by JASON Studio.</p>
        </header>

        <section aria-label="Our apps">
          <article className="app-entry">
            <div className="entry-copy">
              <h2><a href="/linkscope">LinkScope Lite</a></h2>
              <p>Get to know your Mac’s accessories. Device details, connection history, and a workspace of your own.</p>
              <p className="entry-platform">Free on the Mac App Store · macOS 15+</p>
              <div className="product-actions">
                <a className="action-primary" href="/linkscope">Explore LinkScope <span aria-hidden="true">↗</span></a>
                <a href="/linkscope/support">Support</a>
              </div>
            </div>
            <a className="entry-art" href="/linkscope" aria-label="Explore LinkScope Lite">
              <img src="/linkscope-mark.svg" width="465" height="432" alt="" />
            </a>
          </article>
          <article className="app-entry">
            <div className="entry-copy">
              <h2><a href="/trackpad-wizard">Trackpad Wizard</a></h2>
              <p>See touch take shape. Explore gestures, compose haptics, and make more of the surface under your fingers.</p>
              <p className="entry-platform">Available for Mac · macOS 26+</p>
              <div className="product-actions">
                <a className="action-primary" href="/trackpad-wizard">Explore Trackpad Wizard <span aria-hidden="true">↗</span></a>
                <a href="/trackpad-wizard/support">Support</a>
              </div>
            </div>
            <a className="entry-art" href="/trackpad-wizard" aria-label="Explore Trackpad Wizard">
              <picture>
                <source srcSet="/trackpad-wizard-icon-256.webp" type="image/webp" />
                <img src="/trackpad-wizard-icon.png" width="256" height="256" alt="" decoding="async" />
              </picture>
            </a>
          </article>
          <article className="app-entry">
            <div className="entry-copy">
              <h2><a href="/jstu-connect">JSTU Connect</a></h2>
              <p>Unlock full capability by Multidevice Collaboration. A private, local foundation for your Mac, iPhone and iPad.</p>
              <p className="entry-platform">A conceptual foundation · Mac, iPhone and iPad</p>
              <div className="product-actions">
                <a className="action-primary" href="/jstu-connect">Introducing JSTU Connect <span aria-hidden="true">↗</span></a>
                <a href="/jstu-connect/support">Support</a>
              </div>
            </div>
            <a className="entry-art" href="/jstu-connect" aria-label="Introducing JSTU Connect">
              <picture>
                <source media="(prefers-color-scheme: dark)" srcSet="/jstu-connect-icon-dark.webp" type="image/webp" />
                <source srcSet="/jstu-connect-icon-light.webp" type="image/webp" />
                <img src="/jstu-connect-icon-light.png" width="256" height="256" alt="" decoding="async" />
              </picture>
            </a>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
