import { CTAButton } from './chrome.jsx';
import { Reveal, useScrollY } from './hooks.jsx';

export function Hero() {
  const y = useScrollY();
  // Subtle parallax
  const parallaxY = Math.min(y * 0.25, 160);
  const scale = 1 + Math.min(y / 4000, 0.04);
  const textFade = Math.max(0, 1 - y / 520);

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 720,
        overflow: 'hidden',
        color: 'var(--fg)',
        background: 'var(--bg-deep)',
      }}
    >
      {/* Image layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate3d(0, ${parallaxY}px, 0) scale(${scale})`,
          transformOrigin: 'center 40%',
          willChange: 'transform',
          transition: 'transform 80ms linear',
        }}
      >
        <img
          src="assets/tucavaca.png"
          alt="Valle de Tucavaca, Bolivia"
          style={{
            width: '100%',
            height: '118%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            // hide label baked into bottom of source image
            marginTop: '-2%',
            filter: 'saturate(0.92) contrast(1.02)',
          }}
        />
      </div>

      {/* Color wash */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, color-mix(in srgb, var(--bg-deep) 70%, transparent) 0%, color-mix(in srgb, var(--bg-deep) 30%, transparent) 28%, color-mix(in srgb, var(--bg-deep) 48%, transparent) 62%, var(--bg-deep) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Centered readability wash */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 50% 40% at 50% 52%, color-mix(in srgb, var(--bg-deep) 55%, transparent) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Side vignette for legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, var(--bg-deep) 45%, transparent) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top meta strip */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '120px 32px 0',
          pointerEvents: 'none',
          opacity: textFade,
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--fg-muted)',
          }}
        >
          <span>Est. Santa Cruz de la Sierra · Bolivia</span>
          <span>Valle de Tucavaca · 17°42′S</span>
        </div>
      </div>

      {/* Main copy */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '180px 32px 200px',
          opacity: textFade,
          transform: `translateY(${y * 0.15}px)`,
        }}
      >
        <Reveal delay={200}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 28,
            }}
          >
            — Babasu Ventures · Est. 2021
          </div>
        </Reveal>

        <Reveal delay={320}>
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--display-weight)',
              letterSpacing: 'var(--display-tracking)',
              fontSize: 'clamp(44px, 5.4vw, 84px)',
              lineHeight: 1,
              maxWidth: 980,
              color: 'var(--fg)',
              textWrap: 'balance',
            }}
          >
            The seeds that will become{' '}
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--gold)',
              }}
            >
              the forest.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={520}>
          <p
            style={{
              marginTop: 28,
              maxWidth: 560,
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              lineHeight: 1.55,
              color: 'var(--fg-muted)',
              textWrap: 'pretty',
            }}
          >
            An early-stage venture firm backing founders who use technology and
            innovation to transform society in Latin America.
          </p>
        </Reveal>

        <Reveal delay={680}>
          <div
            style={{
              marginTop: 36,
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <CTAButton href="#philosophy" variant="primary">
              Our philosophy
            </CTAButton>
            <CTAButton href="#portfolio" variant="ghost">
              Explore investments
            </CTAButton>
          </div>
        </Reveal>
      </div>

      {/* Bottom meta bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0 32px 36px',
          opacity: textFade,
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              maxWidth: 240,
              lineHeight: 1.6,
            }}
          >
            Scroll to explore<br />
            <span style={{ color: 'var(--fg-faint)' }}>00 — Index</span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 72,
              fontFamily: 'var(--font-body)',
            }}
          >
            <Stat label="Founded" value="2021" />
            <Stat label="Stage" value="Pre-seed · Seed" />
            <Stat label="Geography" value="Latin America" />
            <Stat label="HQ" value="Santa Cruz, BO" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 140,
          transform: 'translateX(-50%)',
          opacity: textFade * 0.6,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: 1,
            height: 64,
            background: 'linear-gradient(to bottom, transparent, var(--fg) 30%, var(--fg))',
            animation: 'scrollCue 2.4s ease-in-out infinite',
            transformOrigin: 'top',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollCue {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.01% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'right' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color: 'var(--fg-faint)',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'var(--fg)',
          letterSpacing: '-0.005em',
        }}
      >
        {value}
      </span>
    </div>
  );
}
