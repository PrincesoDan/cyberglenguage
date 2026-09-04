import { useLanguage } from '../i18n/LanguageContext';
import { LogoMark } from './BrandIcons';
import { ScheduleButton } from './ScheduleButton';
import './Header.css';

/**
 * Header sobre fondo Tinta (brief §03: la Tinta manda en header y footer).
 * Logo en versión horizontal (§02): isotipo + wordmark. Sobre Tinta el prompt
 * va en Porcelana y el cursor en Oro, según la regla de uso del brief.
 */
export function Header() {
  const { copy, language, toggleLanguage } = useLanguage();

  return (
    <header className="header header--dark">
      <div className="container header__inner">
        <a className="header__logo" href="#top">
          <LogoMark size={18} className="header__logo-mark" />
          <span className="header__wordmark">{copy.brand.name}</span>
        </a>

        <nav className="header__nav" aria-label={copy.brand.name}>
          <a href="#problema">{copy.nav.problem}</a>
          <a href="#metodo">{copy.nav.method}</a>
          <a href="#servicios">{copy.nav.services}</a>
          <a href="#contacto">{copy.nav.contact}</a>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__lang"
            onClick={toggleLanguage}
            aria-label={copy.nav.languageSwitchLabel}
          >
            <span className={language === 'es' ? 'is-active' : undefined}>ES</span>
            <span aria-hidden="true">/</span>
            <span className={language === 'en' ? 'is-active' : undefined}>EN</span>
          </button>

          <ScheduleButton
            variant="secondary"
            label={copy.nav.scheduleCta}
            className="header__cta"
          />
        </div>
      </div>
    </header>
  );
}
