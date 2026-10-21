import type { MouseEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useRoute } from '../RouteContext';
import { NAV_PAGES, alternateHref, pathFor } from '../routes';
import { ScheduleButton } from './ScheduleButton';
import './Header.css';

/**
 * Menú del brief web ("Elementos globales"): páginas, ES/EN y "Agendar"
 * destacado. En móvil las páginas pasan a la barra inferior (MobileTabBar) y
 * acá quedan logo, ES/EN y Agendar.
 */
export function Header() {
  const { copy, language } = useLanguage();
  const route = useRoute();
  const otherLanguage = language === 'es' ? 'en' : 'es';

  // El hash cambia al navegar por anclas después de cargar: se lee al hacer
  // click para que /servicios#anuncios lleve a /en/services#anuncios.
  function switchLanguage(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.location.assign(alternateHref(route, window.location.hash));
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href={pathFor('home', language)}>
          <img src="/brand/logo-horizontal.png" alt={copy.site.brandName} height={40} />
        </a>

        <nav className="header__nav" aria-label={copy.nav.primaryLabel}>
          <ul className="header__links">
            {NAV_PAGES.map((page) => (
              <li key={page}>
                <a href={pathFor(page, language)} aria-current={route.page === page ? 'page' : undefined}>
                  {copy.nav.pages[page]}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__actions">
            <a
              className="header__lang"
              href={alternateHref(route, '')}
              hrefLang={otherLanguage}
              lang={otherLanguage}
              aria-label={copy.nav.languageSwitchLabel}
              onClick={switchLanguage}
            >
              {otherLanguage.toUpperCase()}
            </a>
          </div>
        </nav>

        <ScheduleButton variant="primary" label={copy.nav.scheduleCta} className="header__cta" />
      </div>
    </header>
  );
}
