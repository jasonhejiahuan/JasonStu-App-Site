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

