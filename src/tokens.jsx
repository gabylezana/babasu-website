// Design tokens + palettes + type pairs for Babasu Ventures

export const PALETTES = {
  forest: {
    name: 'Forest',
    bg: '#0A1F1A',
    bgDeep: '#071613',
    surface: '#102A22',
    surfaceAlt: '#15362C',
    fg: '#F2EDE0',
    fgMuted: 'rgba(242,237,224,0.62)',
    fgFaint: 'rgba(242,237,224,0.32)',
    line: 'rgba(242,237,224,0.14)',
    lineStrong: 'rgba(242,237,224,0.28)',
    accent: '#1F4D3C',
    cta: '#D97A3B',
    ctaHover: '#E58A4B',
    ctaInk: '#0A1F1A',
    gold: '#B8A673',
  },
  moss: {
    name: 'Moss',
    bg: '#14332A',
    bgDeep: '#0E241D',
    surface: '#1A3E33',
    surfaceAlt: '#22503F',
    fg: '#F5F0E1',
    fgMuted: 'rgba(245,240,225,0.65)',
    fgFaint: 'rgba(245,240,225,0.34)',
    line: 'rgba(245,240,225,0.15)',
    lineStrong: 'rgba(245,240,225,0.30)',
    accent: '#2A6A54',
    cta: '#E27A3F',
    ctaHover: '#ED8A4F',
    ctaInk: '#14332A',
    gold: '#C9B88A',
  },
  ivory: {
    name: 'Ivory',
    bg: '#F4EFE3',
    bgDeep: '#EBE4D2',
    surface: '#FFFFFF',
    surfaceAlt: '#F9F5EA',
    fg: '#0E2A22',
    fgMuted: 'rgba(14,42,34,0.64)',
    fgFaint: 'rgba(14,42,34,0.34)',
    line: 'rgba(14,42,34,0.14)',
    lineStrong: 'rgba(14,42,34,0.28)',
    accent: '#0F3D2E',
    cta: '#C75B23',
    ctaHover: '#D46A31',
    ctaInk: '#FFFFFF',
    gold: '#8F7A3E',
  },
};

export const TYPE_PAIRS = {
  sohne: {
    name: 'Söhne-like',
    display: "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, Menlo, monospace",
    displayWeight: 500,
    displayTracking: '-0.035em',
  },
  gtamerica: {
    name: 'GT America-like',
    display: "'Space Grotesk', 'Helvetica Neue', sans-serif",
    body: "'Inter', 'Helvetica Neue', sans-serif",
    mono: "'JetBrains Mono', ui-monospace, Menlo, monospace",
    displayWeight: 500,
    displayTracking: '-0.03em',
  },
  neue: {
    name: 'Neue Haas-like',
    display: "'Neue Haas Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, Menlo, monospace",
    displayWeight: 400,
    displayTracking: '-0.025em',
  },
};

export function applyTheme(paletteKey, typeKey, ctaIntensity) {
  const p = PALETTES[paletteKey] || PALETTES.forest;
  const t = TYPE_PAIRS[typeKey] || TYPE_PAIRS.sohne;
  const root = document.documentElement;
  root.style.setProperty('--bg', p.bg);
  root.style.setProperty('--bg-deep', p.bgDeep);
  root.style.setProperty('--surface', p.surface);
  root.style.setProperty('--surface-alt', p.surfaceAlt);
  root.style.setProperty('--fg', p.fg);
  root.style.setProperty('--fg-muted', p.fgMuted);
  root.style.setProperty('--fg-faint', p.fgFaint);
  root.style.setProperty('--line', p.line);
  root.style.setProperty('--line-strong', p.lineStrong);
  root.style.setProperty('--accent', p.accent);
  root.style.setProperty('--cta', p.cta);
  root.style.setProperty('--cta-hover', p.ctaHover);
  root.style.setProperty('--cta-ink', p.ctaInk);
  root.style.setProperty('--gold', p.gold);
  root.style.setProperty('--font-display', t.display);
  root.style.setProperty('--font-body', t.body);
  root.style.setProperty('--font-mono', t.mono);
  root.style.setProperty('--display-weight', t.displayWeight);
  root.style.setProperty('--display-tracking', t.displayTracking);
  root.style.setProperty('--cta-intensity', ctaIntensity);
  root.dataset.palette = paletteKey;
}
