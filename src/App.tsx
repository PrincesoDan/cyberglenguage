import { useEffect } from 'react';
import type { ComponentType } from 'react';
import { useLanguage } from './i18n/LanguageContext';
import { RouteProvider } from './RouteContext';
import type { ResolvedRoute, RoutePage } from './routes';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GeoPage } from './pages/GeoPage';
import { HomePage } from './pages/HomePage';
import { LinksPage } from './pages/LinksPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';

/**
 * Ruteo mínimo sin librería (spec §2): los enlaces son <a> normales, cada
 * navegación recarga y la ruta se resuelve una vez en main.tsx.
 * En producción el host reescribe todo a index.html (vercel.json).
 */
const PAGES: Record<RoutePage, ComponentType> = {
  home: HomePage,
  services: ServicesPage,
  work: WorkPage,
  about: AboutPage,
  contact: ContactPage,
  links: LinksPage,
  geo: GeoPage,
  privacy: PrivacyPolicy,
  notFound: NotFoundPage,
};

interface AppProps {
  route: ResolvedRoute;
}

export default function App({ route }: AppProps) {
  const Page = PAGES[route.page];

  return (
    <RouteProvider route={route}>
      <DocumentTitle page={route.page} />
      <Page />
    </RouteProvider>
  );
}

function DocumentTitle({ page }: { page: RoutePage }) {
  const { copy } = useLanguage();

  useEffect(() => {
    document.title = copy.meta[page];
  }, [copy, page]);

  return null;
}
