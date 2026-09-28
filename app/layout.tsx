import type { Metadata } from "next";
import "./globals.css";

// This collection is source-authored and has no request-specific content.
// Revalidate hourly so Cloudflare can serve HTML from its edge cache while
// deployments and editorial changes still propagate promptly.
export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://apps.jasonstu.cc"),
  title: {
    default: "JasonStu Apps",
    template: "%s — JasonStu Apps",
  },
  description: "Independent applications designed and published by JasonStu.",
  openGraph: {
    title: "JasonStu Apps",
    description: "Independent applications designed and published by JasonStu.",
    url: "/",
    siteName: "JasonStu Apps",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "JasonStu Apps with Trackpad Wizard and LinkScope product motifs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JasonStu Apps",
    description: "Independent applications designed and published by JasonStu.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f4f2ed" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#121518" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
