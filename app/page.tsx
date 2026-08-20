import type { Metadata } from "next";
import { SiteHeader } from "./site-header";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="collection-home">
        <div className="collection-intro">
          <p className="eyebrow">Collection / 01</p>
          <h1>Independent apps,<br />published with a point of view.</h1>
          <p>
            JasonStu Apps is a growing collection of software. Each product keeps
            its own route, visual character, and practical documentation.
          </p>
        </div>

        <section className="collection-index" aria-labelledby="collection-title">
          <h2 id="collection-title">Public apps</h2>
          <a className="product-row" href="/linkscope">
            <img src="/linkscope-mark.svg" width="465" height="432" alt="" />
            <span className="product-row-name">LinkScope</span>
            <span className="product-row-description">
              Inspect wireless-accessory state across public macOS frameworks.
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <span>JasonStu Apps</span>
        <span>Designed for the platform. Built for the web.</span>
      </footer>
    </>
  );
}

