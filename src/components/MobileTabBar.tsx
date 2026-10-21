import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useRoute } from '../RouteContext';
import { NAV_PAGES, pathFor } from '../routes';
import type { NavPageId } from '../routes';
import './MobileTabBar.css';

/** Trazo fino y `currentColor`, igual que SocialIcons. */
const TAB_ICONS: Record<NavPageId, ReactNode> = {
  home: <path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z" />,
  services: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  work: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5h6v2M3 13h18" />
    </>
  ),
  about: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M16 14.2c2.3.1 4 1.9 4.5 4.8" />
    </>
  ),
  geo: <path d="M6 7 2 12l4 5M18 7l4 5-4 5M14 5l-4 14" />,
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
};

/**
 * Navegación estilo app en móvil: las páginas del menú fijas abajo, al
 * alcance del pulgar. En escritorio no se muestra (el menú vive en Header).
 */
export function MobileTabBar() {
  const { copy, language } = useLanguage();
  const route = useRoute();

  return (
    <nav className="tabbar" aria-label={copy.nav.primaryLabel}>
      <ul className="tabbar__list">
        {NAV_PAGES.map((page) => (
          <li key={page}>
            <a
              className="tabbar__link"
              href={pathFor(page, language)}
              aria-current={route.page === page ? 'page' : undefined}
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                {TAB_ICONS[page]}
              </svg>
              <span>{copy.nav.tabPages[page]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
