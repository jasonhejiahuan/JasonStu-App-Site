import { SiteFooter, SiteHeader } from "./site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="not-found-page site-width">
        <p>404</p>
        <h1>This page is outside the collection.</h1>
        <a className="action-primary" href="/">Return to JasonStu Apps</a>
      </main>
      <SiteFooter />
    </>
  );
}
