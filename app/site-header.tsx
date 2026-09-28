export function SiteHeader({ product, productHome = false }: { product?: string; productHome?: boolean }) {
  const products = [
    { name: "LinkScope", label: "LinkScope", href: "/linkscope" },
    { name: "Trackpad Wizard", label: "Trackpad Wizard", href: "/trackpad-wizard" },
  ];

  return (
    <header className="site-header site-width">
      <a className="collection-mark" href="/" aria-label="JasonStu Apps home">
        <span>JasonStu</span><span>Apps</span>
      </a>
      <nav aria-label="Primary navigation">
        {products.map((item) => (
          <a href={item.href} key={item.href} aria-current={item.name === product ? (productHome ? "page" : "location") : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function JasonStuSignature() {
  return (
    <span className="footer-signature" aria-label="JasonStu Apps">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet="/jasonstu-logo-dark.png" />
        <img src="/jasonstu-logo.svg" width="3071" height="1045" alt="" loading="lazy" decoding="async" />
      </picture>
      <span>Apps</span>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer site-width">
      <a href="/" aria-label="JasonStu Apps home"><JasonStuSignature /></a>
      <nav aria-label="Footer navigation">
        <span>© 2026 JASON Studio</span>
        <a href="https://github.com/jasonhejiahuan">GitHub ↗</a>
      </nav>
    </footer>
  );
}
