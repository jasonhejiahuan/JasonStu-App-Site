import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-header";

const downloadUrl =
  "https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard/releases/download/v0.3.0-build.4/Trackpad-Wizard-0.3.0-build-4.dmg";
const sourceUrl = "https://github.com/jasonhejiahuan/Mac-Trackpad-Wizard";
const releaseUrl = `${sourceUrl}/releases/tag/v0.3.0-build.4`;
const pageDescription =
  "Trackpad Wizard reveals touch, gestures, pressure and haptics on your Mac. Explore the surface with System mode, or choose Enhanced Mode for deeper experiments.";

export const metadata: Metadata = {
  title: "Trackpad Wizard",
  description: pageDescription,
  alternates: { canonical: "/trackpad-wizard" },
  openGraph: {
    title: "Trackpad Wizard — A closer look at every touch",
    description: pageDescription,
    url: "/trackpad-wizard",
    type: "website",
    images: [
      {
        url: "/trackpad-wizard-overview.png",
        width: 1640,
        height: 1048,
        alt: "Trackpad Wizard Overview in a macOS window.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trackpad Wizard — A closer look at every touch",
    description: pageDescription,
    images: ["/trackpad-wizard-overview.png"],
  },
};

const features = [
  {
    name: "Touch Lab",
    description: "Follow contacts and pressure across the surface. Enhanced Mode reveals raw touch data.",
  },
  {
    name: "Gesture Studio",
    description: "See pinches, rotation, scrolling and Force Click beside the events that shape them.",
  },
  {
    name: "Haptic Composer",
    description: "Shape tactile rhythms for direct trackpad playback in Enhanced Mode.",
  },
  {
    name: "Mappings",
    description: "Connect a gesture to a keyboard shortcut or a saved haptic pattern.",
  },
  {
    name: "Statistics",
    description: "Look back at local actuator counts for each trackpad, with a clear way to reset them.",
  },
  {
    name: "Devices",
    description: "Read the trackpad’s reported battery, transport, Force Touch support and settings.",
  },
];

export default function TrackpadWizardPage() {
  return (
    <>
      <SiteHeader product="Trackpad Wizard" productHome />
      <main id="main-content" tabIndex={-1} className="product-page trackpad-page">
        <section className="product-hero site-width" aria-labelledby="trackpad-title">
          <div className="hero-copy">
            <div className="product-identity">
              <img
                src="/trackpad-wizard-icon-256.webp"
                width="56"
                height="56"
                alt=""
              />
              <p>Trackpad Wizard</p>
            </div>
            <h1 id="trackpad-title">A closer look at every touch.</h1>
            <p className="hero-description">
              Watch the surface come alive. Explore gestures and pressure, then
              shape what your trackpad can do in response.
            </p>
            <div className="product-actions">
              <a className="action-primary" href={downloadUrl}>Download for Mac</a>
              <a href={sourceUrl}>View source</a>
            </div>
            <p className="release-line">Version 0.3.0 (Build 4) · macOS 26 or later</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <picture>
              <source srcSet="/trackpad-wizard-icon.webp" type="image/webp" />
              <img src="/trackpad-wizard-icon.png" width="1024" height="1024" alt="" />
            </picture>
          </div>
        </section>

        <figure className="product-image site-width">
          <picture>
            <source srcSet="/trackpad-wizard-overview.webp" type="image/webp" />
            <img
              src="/trackpad-wizard-overview.png"
              width="1640"
              height="1048"
              alt="Trackpad Wizard Overview with device counts and shortcuts to its touch and gesture workspaces."
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </figure>

        <section className="product-section site-width" aria-labelledby="trackpad-explore-title">
          <div className="section-heading">
            <h2 id="trackpad-explore-title">The whole surface, in view.</h2>
            <p>Move from a single contact to the gesture, device and response behind it.</p>
          </div>
          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature.name}>
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="product-section site-width" aria-labelledby="trackpad-gesture-title">
          <div className="section-heading">
            <h2 id="trackpad-gesture-title">See motion take shape.</h2>
            <p>Gesture Studio keeps each movement beside the native event it produced.</p>
          </div>
          <figure className="product-image">
            <img
              src="/trackpad-wizard-gesture.jpg"
              width="1366"
              height="768"
              alt="Gesture Studio showing measurements, a live touch surface and its event stream."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="mode-section site-width" aria-labelledby="trackpad-modes-title">
          <h2 id="trackpad-modes-title">Choose how far to explore.</h2>
          <div className="mode-list">
            <article>
              <h3>System mode</h3>
              <p>
                The public macOS foundation. Explore touch, gestures, pressure
                and device details without enabling an experimental session.
              </p>
            </article>
            <article>
              <h3>Enhanced Mode</h3>
              <p>
                Enable it for a session when you want raw contacts or direct
                haptic control. It stops when you turn it off and never resumes
                automatically at launch.
              </p>
            </article>
          </div>
        </section>

        <section className="product-end site-width" aria-labelledby="trackpad-end-title">
          <h2 id="trackpad-end-title">There’s more beneath your fingers.</h2>
          <div className="product-actions">
            <a className="action-primary" href={downloadUrl}>Download for Mac</a>
            <a href="/trackpad-wizard/support">Support</a>
            <a href="/trackpad-wizard/privacy">Privacy</a>
            <a href={releaseUrl}>Release notes</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
