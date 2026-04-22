import { SectionLabel } from './chrome.jsx';
import { Reveal } from './hooks.jsx';

function PortfolioCard({ idx, name, tesis, sector, stage, year, tone = 'a' }) {
  const tones = {
    a: { bg: '#2D4A3E', ink: '#F2EDE0' },
    b: { bg: '#3B2F24', ink: '#F2EDE0' },
    c: { bg: '#1E3A30', ink: '#F2EDE0' },
    d: { bg: '#44372A', ink: '#F2EDE0' },
  };
  const t = tones[tone];
  return (
    <Reveal delay={idx * 80}>
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          borderTop: '1px solid var(--line-strong)',
          paddingTop: 24,
        }}
      >
        {/* Image slot placeholder with striped texture */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '4 / 5',
            background: t.bg,
            borderRadius: 4,
            overflow: 'hidden',
            transition: 'transform 600ms cubic-bezier(.2,.6,.2,1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.012)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {/* Subtle diagonal stripes */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)',
            }}
          />
          {/* Placeholder label */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 24,
              color: t.ink,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                opacity: 0.7,
              }}
            >
              {year} · {stage}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                opacity: 0.48,
              }}
            >
              [ image · portrait of founder ]
            </div>
          </div>
          {/* Logo mark placeholder */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-display)',
              fontSize: 56,
              fontWeight: 500,
              letterSpacing: '-0.04em',
              color: t.ink,
              opacity: 0.22,
            }}
          >
            {name.slice(0, 2).toLowerCase()}.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
          <h3
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              fontSize: 22,
            }}
          >
            {name}
          </h3>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--fg-faint)',
            }}
          >
            {sector}
          </span>
        </div>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            lineHeight: 1.55,
            color: 'var(--fg-muted)',
          }}
        >
          {tesis}
        </p>
      </article>
    </Reveal>
  );
}

export function Portfolio() {
  const featured = [
    {
      name: 'Calantha',
      tesis: 'Vertical SaaS for regional agribusiness — from satellite-first traceability to the gate of the exporter.',
      sector: 'Agtech',
      stage: 'Seed',
      year: '2024',
      tone: 'a',
    },
    {
      name: 'Tembetá',
      tesis: 'A B2B marketplace unifying the fragmented network of mid-sized logistics operators across the Southern Cone.',
      sector: 'Logistics',
      stage: 'Pre-seed',
      year: '2023',
      tone: 'b',
    },
    {
      name: 'Kanela',
      tesis: 'An embedded payments primitive for Spanish-speaking SMBs, rebuilt on modern rails.',
      sector: 'Fintech',
      stage: 'Seed',
      year: '2024',
      tone: 'c',
    },
    {
      name: 'Yvága',
      tesis: 'Climate-native industrial hardware: modular biochar reactors for regenerative soil operations.',
      sector: 'Climate',
      stage: 'Pre-seed',
      year: '2025',
      tone: 'd',
    },
  ];

  const others = [
    ['Quebracho Systems', 'Industrial software', 'Seed · 2023'],
    ['Macororó', 'Consumer health', 'Pre-seed · 2024'],
    ['Isoso Labs', 'Developer tools', 'Seed · 2025'],
    ['Ñembi', 'Education', 'Pre-seed · 2022'],
    ['Guapay', 'Fintech', 'Seed · 2024'],
    ['Toborochi AI', 'Applied AI', 'Pre-seed · 2025'],
    ['Surubí', 'Marketplaces', 'Seed · 2023'],
    ['Ichilo', 'Mobility', 'Pre-seed · 2024'],
  ];

  return (
    <section
      id="portfolio"
      style={{
        background: 'var(--bg)',
        color: 'var(--fg)',
        padding: '160px 32px 180px',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 48,
            marginBottom: 80,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <Reveal>
              <SectionLabel number="02">Portfolio</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2
                style={{
                  margin: '28px 0 0',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--display-weight)',
                  letterSpacing: 'var(--display-tracking)',
                  fontSize: 'clamp(40px, 5vw, 76px)',
                  lineHeight: 1,
                  maxWidth: 900,
                  textWrap: 'balance',
                }}
              >
                Companies we've
                <br />
                <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 400 }}>
                  had the privilege
                </span>{' '}
                to back.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                maxWidth: 320,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: 'var(--fg-muted)',
                }}
              >
                A selection from our current active portfolio. We work closely with
                every founder we invest in — often starting months before we write the check.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Featured grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            marginBottom: 120,
          }}
        >
          {featured.map((f, i) => (
            <PortfolioCard key={f.name} idx={i} {...f} />
          ))}
        </div>

        {/* List of others */}
        <Reveal>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              marginBottom: 24,
            }}
          >
            — Also in the portfolio
          </div>
        </Reveal>
        <div
          style={{
            borderTop: '1px solid var(--line)',
          }}
        >
          {others.map(([name, sector, meta], i) => (
            <Reveal key={name} delay={i * 40}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 2fr 1fr 1fr auto',
                  gap: 24,
                  alignItems: 'center',
                  padding: '22px 0',
                  borderBottom: '1px solid var(--line)',
                  cursor: 'pointer',
                  transition: 'padding 300ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = '12px';
                  const arrow = e.currentTarget.querySelector('.row-arrow');
                  if (arrow) arrow.style.transform = 'translateX(6px)';
                  const name = e.currentTarget.querySelector('.row-name');
                  if (name) name.style.color = 'var(--cta)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '0px';
                  const arrow = e.currentTarget.querySelector('.row-arrow');
                  if (arrow) arrow.style.transform = 'translateX(0)';
                  const name = e.currentTarget.querySelector('.row-name');
                  if (name) name.style.color = 'var(--fg)';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--fg-faint)',
                  }}
                >
                  {String(i + 5).padStart(2, '0')}
                </span>
                <span
                  className="row-name"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    transition: 'color 240ms',
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    color: 'var(--fg-muted)',
                  }}
                >
                  {sector}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-faint)',
                  }}
                >
                  {meta}
                </span>
                <svg
                  className="row-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  style={{ color: 'var(--fg-muted)', transition: 'transform 240ms' }}
                >
                  <path d="M4 9h10M9.5 4.5 14 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
