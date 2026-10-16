import { CONTACT_EMAIL, PHONE_DISPLAY, SOCIAL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { NAV_PAGES, pathFor } from '../routes';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import './Footer.css';

/** Footer del brief web ("Elementos globales"). */
export function Footer() {
  const { copy, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/brand/logo-horizontal.png" alt={copy.site.brandName} height={40} />
          <p className="footer__tagline">{copy.footer.tagline}</p>
          <div className="footer__social">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <nav aria-label={copy.footer.pagesTitle}>
          <p className="footer__title">{copy.footer.pagesTitle}</p>
          <ul className="footer__list">
            {NAV_PAGES.map((page) => (
              <li key={page}>
                <a href={pathFor(page, language)}>{copy.nav.pages[page]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer__title">{copy.footer.contactTitle}</p>
          <ul className="footer__list">
            <li>
              <a href={buildWhatsAppUrl(copy.whatsapp.genericMessage)} target="_blank" rel="noopener noreferrer">
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li className="footer__hours">{copy.site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__legal">
        <p className="footer__geo">
          <a href={pathFor('geo', language)}>{copy.footer.geoNote}</a>
        </p>
        <p>
          <a href={pathFor('privacy', language)}>{copy.footer.privacy}</a>
          {' · '}© {year} {copy.site.brandName}. {copy.footer.rights}
        </p>
      </div>
    </footer>
  );
}
