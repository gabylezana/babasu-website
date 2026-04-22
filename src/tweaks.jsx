import { PALETTES, TYPE_PAIRS } from './tokens.jsx';

export function TweaksPanel({ state, setState, visible }) {
  if (!visible) return null;

  const persist = (edits) => {
    window.parent?.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  };

  const swatch = (p) => (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 999,
        background: `linear-gradient(135deg, ${p.bg} 0% 55%, ${p.cta} 55% 100%)`,
        border: '1px solid rgba(255,255,255,0.12)',
      }}
    />
  );

  return (
    <div
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 200,
        width: 320,
        padding: 20,
        background: 'rgba(12, 22, 19, 0.92)',
        color: '#F2EDE0',
        border: '1px solid rgba(242,237,224,0.18)',
        borderRadius: 14,
        backdropFilter: 'blur(18px) saturate(1.1)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.1)',
        fontFamily: "'Inter', sans-serif",
        boxShadow: '0 20px 60px -20px rgba(0,0,0,0.6)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.7, fontFamily: 'monospace' }}>
          Tweaks
        </div>
        <div style={{ fontSize: 10, opacity: 0.5, fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Babasu v1
        </div>
      </div>

      <Group label="Palette">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {Object.entries(PALETTES).map(([k, p]) => (
            <button
              key={k}
              onClick={() => {
                setState({ ...state, palette: k });
                persist({ palette: k });
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: '10px 8px',
                borderRadius: 8,
                border: `1px solid ${state.palette === k ? '#F2EDE0' : 'rgba(242,237,224,0.18)'}`,
                background: state.palette === k ? 'rgba(242,237,224,0.08)' : 'transparent',
                color: 'inherit',
                cursor: 'pointer',
                transition: 'all 160ms',
              }}
            >
              {swatch(p)}
              <span style={{ fontSize: 11, opacity: 0.85 }}>{p.name}</span>
            </button>
          ))}
        </div>
      </Group>

      <Group label="Typography">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {Object.entries(TYPE_PAIRS).map(([k, t]) => (
            <button
              key={k}
              onClick={() => {
                setState({ ...state, type: k });
                persist({ type: k });
              }}
              style={{
                textAlign: 'left',
                padding: '10px 12px',
                borderRadius: 8,
                border: `1px solid ${state.type === k ? '#F2EDE0' : 'rgba(242,237,224,0.18)'}`,
                background: state.type === k ? 'rgba(242,237,224,0.08)' : 'transparent',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: 13,
                fontFamily: t.display,
                transition: 'all 160ms',
              }}
            >
              <span style={{ fontWeight: 500 }}>{t.name}</span>
              <span style={{ opacity: 0.55, marginLeft: 8, fontSize: 11, fontFamily: 'monospace' }}>
                display / body
              </span>
            </button>
          ))}
        </div>
      </Group>

      <Group label={`CTA intensity · ${Math.round(state.ctaIntensity * 100)}%`}>
        <input
          type="range"
          min={0.6}
          max={1.1}
          step={0.05}
          value={state.ctaIntensity}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            setState({ ...state, ctaIntensity: v });
            persist({ ctaIntensity: v });
          }}
          style={{ width: '100%', accentColor: '#D97A3B' }}
        />
      </Group>

      <div style={{ marginTop: 16, fontSize: 10, opacity: 0.4, fontFamily: 'monospace', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        Changes persist to file
      </div>
    </div>
  );
}

function Group({ label, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 10, fontFamily: 'monospace' }}>
        {label}
      </div>
      {children}
    </div>
  );
}
