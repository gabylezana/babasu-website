import { Reveal, useScrollY } from './hooks.jsx';
import { siteHref } from './ui.jsx';
import babasuLogoWhite from '../assets/logo-babasu-white.png';

function BabasuMark({ size = 28, color = 'currentColor' }) {
  // Original minimal mark: seed/leaf abstract — not Babasu's real logo.
  // A soft almond shape with a single vertical stem, evokes a seed.
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 2C9 9 6 15 6 20c0 5.5 4.5 10 10 10s10-4.5 10-10c0-5-3-11-10-18Z"
        stroke={color}
        strokeWidth="1.25"
        fill="none"
      />
      <path d="M16 6v24" stroke={color} strokeWidth="1.25" />
    </svg>
  );
}

function Wordmark({ color = 'currentColor' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color }}>
      <BabasuMark size={22} color={color} />
      <div style={{ lineHeight: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 15,
            letterSpacing: '-0.01em',
          }}
        >
          Babasu
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9.5,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            opacity: 0.72,
          }}
        >
          Ventures
        </span>
      </div>
    </div>
  );
}

export function Header() {
  const y = useScrollY();
  const scrolled = y > 40;
  const links = [
    { label: 'Philosophy', href: siteHref('philosophy/') },
    { label: 'Portfolio', href: siteHref('portfolio/') },
    { label: 'Team', href: siteHref('team/') },
    { label: 'Contact', href: siteHref('contact/') },
  ];
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '14px 32px' : '22px 32px',
        transition: 'padding 400ms ease, background 400ms ease, border-color 400ms ease, backdrop-filter 400ms ease',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 72%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(1.1)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(1.1)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        color: 'var(--fg)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a href="#top" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Wordmark />
        </a>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13.5,
                letterSpacing: '-0.005em',
                color: 'var(--fg)',
                opacity: 0.82,
                textDecoration: 'none',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.82)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            letterSpacing: '0.02em',
            textDecoration: 'none',
            color: 'var(--fg)',
            border: '1px solid var(--line-strong)',
            padding: '10px 18px',
            borderRadius: 999,
            transition: 'background 200ms, border-color 200ms',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'color-mix(in srgb, var(--fg) 8%, transparent)';
            e.currentTarget.style.borderColor = 'var(--fg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'var(--line-strong)';
          }}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function CTAButton({ children, href = '#', variant = 'primary', style = {}, ...rest }) {
  const isPrimary = variant === 'primary';
  const baseStyle = isPrimary
    ? {
        background: 'var(--cta)',
        color: 'var(--cta-ink)',
        border: '1px solid var(--cta)',
      }
    : {
        background: 'transparent',
        color: 'var(--fg)',
        border: '1px solid var(--line-strong)',
      };
  return (
    <a
      href={href}
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '14px 22px',
        borderRadius: 999,
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        letterSpacing: '-0.005em',
        textDecoration: 'none',
        transition: 'background 220ms ease, color 220ms ease, border-color 220ms ease, transform 220ms ease',
        ...baseStyle,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.currentTarget.style.background = 'var(--cta-hover)';
          e.currentTarget.style.borderColor = 'var(--cta-hover)';
        } else {
          e.currentTarget.style.background = 'color-mix(in srgb, var(--fg) 10%, transparent)';
          e.currentTarget.style.borderColor = 'var(--fg)';
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.currentTarget.style.background = 'var(--cta)';
          e.currentTarget.style.borderColor = 'var(--cta)';
        } else {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'var(--line-strong)';
        }
      }}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function SectionLabel({ number, children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'var(--fg-muted)',
      }}
    >
      <span style={{ color: 'var(--gold)' }}>{number}</span>
      <span style={{ width: 28, height: 1, background: 'var(--line-strong)' }} />
      <span>{children}</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--line)',
        color: 'var(--fg)',
        padding: '120px 32px 48px',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 64,
            alignItems: 'end',
            paddingBottom: 96,
            borderBottom: '1px solid var(--line)',
          }}
        >
          <Reveal>
            <SectionLabel number="05">Contact</SectionLabel>
            <h2
              style={{
                margin: '28px 0 0',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--display-weight)',
                letterSpacing: 'var(--display-tracking)',
                fontSize: 'clamp(48px, 6vw, 88px)',
                lineHeight: 0.98,
              }}
            >
              Let's talk about
              <br />
              <span style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 400 }}>
                what you're building.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: 'var(--fg-muted)',
                  maxWidth: 420,
                  margin: 0,
                }}
              >
                We invest in early-stage founders building the future of Latin America.
                Reach out — we read every message.
              </p>
              <a
                href="mailto:INFO@BABASUVENTURES.COM"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 14,
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--line-strong)',
                  paddingBottom: 8,
                  alignSelf: 'flex-start',
                  transition: 'color 220ms, border-color 220ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--cta)';
                  e.currentTarget.style.borderColor = 'var(--cta)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--fg)';
                  e.currentTarget.style.borderColor = 'var(--line-strong)';
                }}
              >
                INFO@BABASUVENTURES.COM
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M9.5 4.5 14 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 48,
            padding: '64px 0',
          }}
        >
          <div>
            <img
              src={babasuLogoWhite}
              alt="Babasu Ventures"
              style={{
                display: 'block',
                width: 'min(220px, 100%)',
                height: 52,
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <p
              style={{
                marginTop: 20,
                maxWidth: 280,
                fontFamily: 'var(--font-body)',
                fontSize: 13.5,
                lineHeight: 1.55,
                color: 'var(--fg-muted)',
              }}
            >
              An early-stage venture firm based in Santa Cruz de la Sierra, investing across Latin America.
            </p>
          </div>

          <FooterCol
            label="Navigation"
            items={[
              ['Philosophy', siteHref('philosophy/')],
              ['Portfolio', siteHref('portfolio/')],
              ['Team', siteHref('team/')],
              ['Contact', siteHref('contact/')],
            ]}
          />
          <FooterCol
            label="Focus"
            items={[
              ['Latin America', '#'],
              ['Pre-seed & Seed', '#'],
              ['Software & Hardware', '#'],
            ]}
          />
          <FooterCol
            label="Elsewhere"
            items={[
              ['LinkedIn', '#'],
              ['Substack', '#'],
              ['Terms', '#'],
            ]}
          />
        </div>

        <div
          style={{
            paddingTop: 32,
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--fg-faint)',
          }}
        >
          <span>© 2026 Babasu Ventures</span>
          <span>Santa Cruz de la Sierra · Bolivia</span>
          <span>The seeds that will become the forest</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ label, items }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--fg-faint)',
          marginBottom: 20,
        }}
      >
        {label}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map(([t, href]) => (
          <li key={t}>
            <a
              href={href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: 'var(--fg)',
                textDecoration: 'none',
                opacity: 0.82,
                transition: 'opacity 200ms, color 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.color = 'var(--cta)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0.82;
                e.currentTarget.style.color = 'var(--fg)';
              }}
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
