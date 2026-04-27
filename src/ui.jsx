import { useEffect, useState } from 'react';
import { NAV_ITEMS, SITE } from './site-data.js';
import babasuLogoWhite from '../assets/logo-babasu-white.png';

export function siteHref(path = '') {
  return `${import.meta.env.BASE_URL}${path}`;
}

function BabasuMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 2C9 9 6 15 6 20c0 5.5 4.5 10 10 10s10-4.5 10-10c0-5-3-11-10-18Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M16 6v24" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="brand-lockup">
      <BabasuMark />
      <span className="brand-copy">
        <strong>Babasu</strong>
        <small>Ventures</small>
      </span>
    </span>
  );
}

export function Header({ pageKey, variant = 'default' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = NAV_ITEMS;

  useEffect(() => {
    if (variant !== 'overlay') {
      setIsScrolled(false);
      return undefined;
    }

    const updateHeaderState = () => {
      const hero = document.querySelector(
        '.header-hero, .home-hero, .portfolio-prod-hero, .tugerente-stage, .page-hero',
      );
      if (!hero) {
        setIsScrolled(window.scrollY > 24);
        return;
      }

      const switchPoint = Math.max(hero.offsetHeight - 140, 24);
      setIsScrolled(window.scrollY >= switchPoint);
    };

    updateHeaderState();

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, [variant]);

  return (
    <header
      className={`site-header site-header-${variant} ${
        isScrolled ? 'site-header-scrolled' : ''
      }`}
    >
      <div className="shell nav-shell">
        <a className="brand-link brand-image-link" href={siteHref()} aria-label={SITE.name}>
          <img className="brand-image" src={babasuLogoWhite} alt="Babasu Ventures" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.key}
              className={item.key === pageKey ? 'is-active' : undefined}
              href={siteHref(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-button" href={siteHref('contact/')}>
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a className="footer-brand footer-brand-image-link" href={siteHref()} aria-label={SITE.name}>
            <img className="brand-image footer-brand-image" src={babasuLogoWhite} alt="Babasu Ventures" />
          </a>
          <p className="footer-copy">
            We invest across Latin America in founders using technology and innovation
            to transform society in practical, durable ways.
          </p>
        </div>
        <div>
          <p className="footer-kicker">For new business or general inquiries</p>
          <a className="footer-mail" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <p className="footer-copy">{SITE.location}</p>
        </div>
        <div>
          <p className="footer-kicker">Navigate</p>
          <div className="footer-links">
            {NAV_ITEMS.map((item) => (
              <a key={item.key} href={siteHref(item.href)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-kicker">Elsewhere</p>
          <div className="footer-links">
            <a href={SITE.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ pageKey, headerVariant = 'default', children }) {
  return (
    <div className={`page page-${pageKey}`}>
      <Header pageKey={pageKey} variant={headerVariant} />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  );
}

export function ButtonLink({ href, children, tone = 'primary', arrow = false }) {
  return (
    <a className={`button-link button-${tone}`} href={href}>
      {children}
      {arrow ? <span className="button-arrow">→</span> : null}
    </a>
  );
}

export function SectionIntro({ eyebrow, title, body, align = 'left', action }) {
  return (
    <div className={`section-intro align-${align}`}>
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-intro-copy">
        <p>{body}</p>
        {action}
      </div>
    </div>
  );
}

export function PageHero({
  image,
  eyebrow,
  title,
  body,
  align = 'left',
  compact = false,
  actions,
  className = '',
}) {
  const style = {
    backgroundImage: `linear-gradient(180deg, rgba(10, 24, 20, 0.18), rgba(10, 24, 20, 0.62)), url(${image})`,
  };
  return (
    <section
      className={`page-hero ${compact ? 'hero-compact' : ''} align-${align} ${className}`.trim()}
      style={style}
    >
      <div className="shell page-hero-inner">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-body">{body}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
