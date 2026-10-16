import { SOCIAL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { CallButton } from '../components/CallButton';
import { ScheduleButton } from '../components/ScheduleButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { pathFor } from '../routes';
import './LinksPage.css';

/**
 * Destino del QR estático y de la bio de Instagram (brief web, "Links / QR").
 * Sin menú, sin footer y sin WhatsApp flotante: es una página ligera para el
 * celular.
 */
export function LinksPage() {
  const { copy, language } = useLanguage();
  const { links } = copy;

  return (
    <main className="links-page">
      <div className="links-page__inner">
        <img className="links-page__logo" src="/brand/logo-vertical.png" alt={copy.site.brandName} />
        <p className="links-page__tagline">{links.tagline}</p>

        <nav className="links-page__buttons" aria-label={copy.site.brandName}>
          <ScheduleButton variant="primary" label={links.schedule} />
          <WhatsAppButton variant="primary" label={copy.cta.whatsapp} />
          <CallButton variant="secondary" />
          <a className="button button--secondary" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="button button--secondary" href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a className="button button--secondary" href={pathFor('services', language)}>
            {links.services}
          </a>
          <a className="button button--secondary" href={pathFor('home', language)}>
            {links.website}
          </a>
        </nav>
      </div>
    </main>
  );
}
