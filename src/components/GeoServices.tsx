import { useLanguage } from '../i18n/LanguageContext';
import './GeoServices.css';

/**
 * Servicios de la línea GEO (brief de CyberLanguage §06). Los cuatro títulos son literales del brief;
 * las bajadas se derivan de §4.1 y §6.1 del brief de desarrollo.
 * TODO: reemplazar por el copy final de la consultora (brief §07).
 */
export function GeoServices() {
  const { copy } = useLanguage();

  return (
    <section className="section section--light" id="servicios-geo">
      <div className="container">
        <p className="eyebrow">{copy.geo.services.eyebrow}</p>
        <h2>{copy.geo.services.title}</h2>

        <div className="services__grid">
          {copy.geo.services.items.map((service) => (
            <article className="card services__card" key={service.title}>
              <h3>{service.title}</h3>
              <p className="lead">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
