import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer, Header } from './chrome.jsx';
import { Hero } from './hero.jsx';
import { Manifesto, Philosophy } from './philosophy.jsx';
import { Portfolio } from './portfolio.jsx';
import { LogoStrip, Numbers, Team } from './team.jsx';
import { applyTheme } from './tokens.jsx';
import { TweaksPanel } from './tweaks.jsx';

const TWEAK_DEFAULTS = {
  palette: 'ivory',
  type: 'sohne',
  ctaIntensity: 0.95,
};

function App() {
  const [state, setState] = useState(TWEAK_DEFAULTS);
  const [tweaksVisible, setTweaksVisible] = useState(false);

  useEffect(() => {
    applyTheme(state.palette, state.type, state.ctaIntensity);
  }, [state]);

  useEffect(() => {
    const onMsg = (event) => {
      const data = event.data || {};
      if (data.type === '__activate_edit_mode') setTweaksVisible(true);
      if (data.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };

    window.addEventListener('message', onMsg);
    window.parent?.postMessage({ type: '__edit_mode_available' }, '*');

    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Manifesto />
        <LogoStrip />
        <Portfolio />
        <Numbers />
        <Team />
      </main>
      <Footer />
      <TweaksPanel state={state} setState={setState} visible={tweaksVisible} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
