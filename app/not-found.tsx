import { SiteHeader } from "./site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="not-found-page">
        <p className="eyebrow">404 / No app at this route</p>
        <h1>This page is outside the collection.</h1>
        <a className="primary-link" href="/">Return to JasonStu Apps</a>
      </main>
    </>
  );
}

