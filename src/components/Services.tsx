import { useLanguage } from '../i18n/LanguageContext';
import './Services.css';

/**
 * Sección "Servicios" (brief §06). Los cuatro títulos son literales del brief;
 * las bajadas se derivan de §4.1 y §6.1 del brief de desarrollo.
 * TODO: reemplazar por el copy final de la consultora (brief §07).
 */
export function Services() {
  const { copy } = useLanguage();

  return (
    <section className="section section--light" id="servicios">
      <div className="container">
        <p className="eyebrow">{copy.services.eyebrow}</p>
        <h2>{copy.services.title}</h2>

        <div className="services__grid">
          {copy.services.items.map((service) => (
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
