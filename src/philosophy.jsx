import { SectionLabel } from './chrome.jsx';
import { Reveal } from './hooks.jsx';

export function Philosophy() {
  const pillars = [
    {
      n: '01',
      title: 'Conviction, not consensus.',
      body:
        'We lead or co-lead rounds with high conviction. We take a point of view early and stay close to the founders we back.',
    },
    {
      n: '02',
      title: 'Local roots, regional reach.',
      body:
        'Built in Santa Cruz, we invest across Latin America. Our network spans Bolivia, Mexico, Colombia, Brazil, Chile and Argentina.',
    },
    {
      n: '03',
      title: 'The long cycle.',
      body:
        'Forests are not built in quarters. We hold, support, and compound — from first check through Series B and beyond.',
    },
    {
      n: '04',
      title: 'Craft over theatre.',
      body:
        'We prefer serious work to performance. Our job is to be useful, to be honest, and to stay out of the way when we should.',
    },
  ];
  return (
    <section
      id="philosophy"
      style={{
        background: 'var(--bg)',
        color: 'var(--fg)',
        padding: '160px 32px 180px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 120,
            alignItems: 'start',
            marginBottom: 120,
          }}
        >
          <Reveal>
            <SectionLabel number="01">Philosophy</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--display-weight)',
                letterSpacing: 'var(--display-tracking)',
                fontSize: 'clamp(40px, 5.4vw, 84px)',
                lineHeight: 1.02,
                maxWidth: 1080,
                textWrap: 'balance',
              }}
            >
              We back founders who build{' '}
              <span style={{ color: 'var(--fg-muted)' }}>quietly useful things</span>
              {' — '}
              the kind that outlast cycles and compound into{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 400 }}>
                lasting companies.
              </span>
            </h2>
          </Reveal>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 48,
            borderTop: '1px solid var(--line)',
            paddingTop: 56,
          }}
        >
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.28em',
                    color: 'var(--gold)',
                  }}
                >
                  {p.n}
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    fontSize: 24,
                    lineHeight: 1.15,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-body)',
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: 'var(--fg-muted)',
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Quote / manifesto strip
export function Manifesto() {
  return (
    <section
      style={{
        background: 'var(--bg-deep)',
        color: 'var(--fg)',
        padding: '140px 32px',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 32,
            }}
          >
            — Manifesto
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.2vw, 48px)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              textWrap: 'balance',
            }}
          >
            The babasú palm takes decades to mature. Its nut is hard, slow,
            patient — and from it comes oil, timber, food, shelter.{' '}
            <span style={{ color: 'var(--fg-muted)' }}>
              We think companies grow the same way.
            </span>{' '}
            We plant seeds, and we wait for the forest.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
