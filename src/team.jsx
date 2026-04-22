import { SectionLabel } from './chrome.jsx';
import { Reveal } from './hooks.jsx';

function TeamCard({ idx, name, role, bio, tone }) {
  const tones = {
    a: '#2D4A3E',
    b: '#3B3228',
    c: '#243A32',
    d: '#403324',
  };
  return (
    <Reveal delay={idx * 90}>
      <article style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            position: 'relative',
            aspectRatio: '4 / 5',
            background: tones[tone],
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: 24,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              color: 'var(--fg)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              opacity: 0.55,
            }}
          >
            <span>[ portrait · b&w ]</span>
            <span>{String(idx + 1).padStart(2, '0')}</span>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              fontFamily: 'var(--font-display)',
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: '-0.04em',
              color: 'var(--fg)',
              opacity: 0.18,
            }}
          >
            {name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 2)}
          </div>
        </div>
        <div>
          <h3
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 22,
              letterSpacing: '-0.02em',
            }}
          >
            {name}
          </h3>
          <div
            style={{
              marginTop: 4,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            {role}
          </div>
          <p
            style={{
              margin: '14px 0 0',
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              lineHeight: 1.55,
              color: 'var(--fg-muted)',
              maxWidth: 300,
            }}
          >
            {bio}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export function Team() {
  const members = [
    {
      name: 'Founder One',
      role: 'Managing Partner',
      bio:
        'Two decades building and advising companies across Latin America. Led early teams in finance and technology before starting Babasu.',
      tone: 'a',
    },
    {
      name: 'Founder Two',
      role: 'Partner',
      bio:
        'Operator turned investor. Focused on consumer and vertical software. Based in Santa Cruz.',
      tone: 'b',
    },
    {
      name: 'Partner Three',
      role: 'Partner',
      bio:
        'Engineer by training, investor by craft. Leads our technical diligence and platform work.',
      tone: 'c',
    },
    {
      name: 'Partner Four',
      role: 'Principal',
      bio:
        'Sourcing and community. Runs the founder programming that sits under every investment we make.',
      tone: 'd',
    },
  ];

  return (
    <section
      id="team"
      style={{
        background: 'var(--bg-deep)',
        color: 'var(--fg)',
        padding: '160px 32px 180px',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 120,
            alignItems: 'start',
            marginBottom: 96,
          }}
        >
          <Reveal>
            <SectionLabel number="03">Team</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--display-weight)',
                letterSpacing: 'var(--display-tracking)',
                fontSize: 'clamp(40px, 5vw, 76px)',
                lineHeight: 1.02,
                textWrap: 'balance',
              }}
            >
              A small team,{' '}
              <span style={{ color: 'var(--fg-muted)' }}>
                built around founders
              </span>{' '}
              — close, responsive, and quietly ambitious for the long term.
            </h2>
          </Reveal>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            borderTop: '1px solid var(--line)',
            paddingTop: 48,
          }}
        >
          {members.map((m, i) => (
            <TeamCard key={m.name} idx={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Numbers strip — small stat row between sections
export function Numbers() {
  const stats = [
    { k: '28', v: 'Active investments' },
    { k: '11', v: 'Countries reached' },
    { k: '$120M+', v: 'Assets under management' },
    { k: '2021', v: 'Founded in Santa Cruz' },
  ];
  return (
    <section
      style={{
        background: 'var(--bg)',
        color: 'var(--fg)',
        padding: '120px 32px',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}
      >
        {stats.map((s, i) => (
          <Reveal key={s.v} delay={i * 90}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, borderTop: '1px solid var(--line-strong)', paddingTop: 28 }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--display-weight)',
                  letterSpacing: 'var(--display-tracking)',
                  fontSize: 'clamp(48px, 5vw, 84px)',
                  lineHeight: 0.96,
                }}
              >
                {s.k}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-muted)',
                }}
              >
                {s.v}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// LP-style logo marquee of portfolio companies (placeholders)
export function LogoStrip() {
  const names = [
    'Calantha',
    'Tembetá',
    'Kanela',
    'Yvága',
    'Quebracho',
    'Macororó',
    'Isoso',
    'Ñembi',
    'Guapay',
    'Toborochi',
    'Surubí',
    'Ichilo',
  ];
  const doubled = [...names, ...names];
  return (
    <section
      style={{
        background: 'var(--bg-deep)',
        color: 'var(--fg)',
        padding: '56px 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 72,
          whiteSpace: 'nowrap',
          animation: 'logoScroll 55s linear infinite',
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: 'var(--fg-muted)',
          width: 'max-content',
        }}
      >
        {doubled.map((n, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 72 }}>
            {n}
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                background: 'var(--gold)',
                display: 'inline-block',
              }}
            />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
