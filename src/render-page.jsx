import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

export function renderPage(Page) {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <Page />
    </StrictMode>
  );
}
