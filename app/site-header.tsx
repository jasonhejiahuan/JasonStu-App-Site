export function SiteHeader({ product }: { product?: string }) {
  return (
    <header className="site-header">
      <a className="collection-mark" href="/" aria-label="JasonStu Apps home">
        <span>JasonStu</span>
        <span>Apps</span>
      </a>
      <nav aria-label="Primary navigation">
        {product ? <span className="current-product">/ {product}</span> : null}
        <a href="/linkscope">LinkScope</a>
      </nav>
    </header>
  );
}

export function JasonStuSignature() {
  return (
    <span className="footer-signature" aria-label="JasonStu Apps">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet="/jasonstu-logo-dark.png" />
        <img src="/jasonstu-logo.svg" width="3071" height="1045" alt="" />
      </picture>
      <span>Apps</span>
    </span>
  );
}
