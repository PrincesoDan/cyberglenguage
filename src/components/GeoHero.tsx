import { useLanguage } from '../i18n/LanguageContext';
import { AnswerMark } from './BrandIcons';
import { ScheduleButton } from './ScheduleButton';
import { WhatsAppButton } from './WhatsAppButton';
import './GeoHero.css';

/**
 * Hero de la línea GEO. El widget de auditoría salió del sitio (mail del
 * cliente: el análisis GEO automático queda para después), así que el CTA
 * principal es Agendar.
 */
export function GeoHero() {
  const { copy } = useLanguage();
  const { hero } = copy.geo;

  return (
    <section className="section section--dark hero" id="top">
      <div className="container hero__inner">
        <p className="hero__seal">{copy.site.geoSeal}</p>
        <p className="hero__badge">
          <AnswerMark size={15} className="hero__badge-mark" />
          {hero.badge}
        </p>

        <h1 className="hero__title">
          <span className="hero__title-line">{hero.titleLine1}</span>
          <span className="hero__title-line hero__title-line--accent">{hero.titleLine2}</span>
        </h1>

        <p className="lead hero__value-prop">{hero.valueProp}</p>

        <div className="hero__actions">
          <ScheduleButton variant="primary" label={copy.cta.schedule} />
          <WhatsAppButton variant="secondary" label={copy.cta.whatsapp} services={[copy.site.geoBrandName]} />
        </div>
      </div>
    </section>
  );
}
