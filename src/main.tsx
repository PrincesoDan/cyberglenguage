import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './i18n/LanguageContext';
import { resolveRoute } from './routes';
import App from './App';
import './styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No se encontró el elemento #root en index.html');
}

const route = resolveRoute(window.location.pathname);

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider language={route.language}>
      <App route={route} />
    </LanguageProvider>
  </StrictMode>,
);
