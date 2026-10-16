import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { ScheduleButton } from '../components/ScheduleButton';
import { SiteLayout } from '../components/SiteLayout';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { SERVICE_IDS } from '../data/services';
import { pathFor } from '../routes';
import './HomePage.css';

/**
 * Iconos de marca para los diferenciadores, en el orden de `home.why.items`
 * (brief web: "3–4 diferenciadores con icono").
 */
const WHY_ICONS = [
  '/brand/icons/servicios.png',
  '/brand/icons/conocenos.png',
  '/brand/icons/contacto.png',
  '/brand/icons/logros.png',
] as const;

/** Inicio (brief web + brief de marca §06). Testimonios: fase 2. */
export function HomePage() {
  const { copy, language } = useLanguage();
  const { home } = copy;
  const servicesPath = pathFor('services', language);

  return (
    <SiteLayout>
      <section className="section section--dark home-hero">
        <div className="container home-hero__inner">
          <img className="home-hero__mark" src="/brand/logo-mark.png" alt="" width={120} height={170} />
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 className="home-hero__title">{home.hero.title}</h1>
          <p className="lead home-hero__subtitle">{home.hero.subtitle}</p>
          <div className="home-hero__actions">
            <ScheduleButton variant="primary" label={copy.cta.schedule} />
            <WhatsAppButton variant="secondary" label={copy.cta.whatsapp} />
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container home-pains">
          <h2>{home.pains.title}</h2>
          <ul className="home-pains__list">
            {home.pains.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="home-pains__closing">{home.pains.closing}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{home.services.eyebrow}</p>
          <h2>{home.services.title}</h2>
          <div className="home-cards">
            {SERVICE_IDS.map((id) => (
              <article className="card home-card" key={id}>
                <h3>{copy.services.items[id].name}</h3>
                <p>{home.services.cards[id]}</p>
                <a className="home-card__link" href={`${servicesPath}#${id}`}>
                  {home.services.cardCta} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark home-geo">
        <div className="container home-geo__inner">
          <p className="eyebrow">{home.geo.eyebrow}</p>
          <h2>{home.geo.title}</h2>
          <p className="lead home-geo__body">{home.geo.body}</p>
          <a className="button button--secondary" href={pathFor('geo', language)}>
            {home.geo.cta}
          </a>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <p className="eyebrow">{home.why.eyebrow}</p>
          <h2>{home.why.title}</h2>
          <div className="home-why">
            {home.why.items.map((item, index) => (
              <article className="home-why__item" key={item.title}>
                <img src={WHY_ICONS[index % WHY_ICONS.length]} alt="" width={72} height={72} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-work">
          <div>
            <p className="eyebrow">{home.work.eyebrow}</p>
            <h2>{home.work.title}</h2>
            <p className="lead">{home.work.body}</p>
          </div>
          <a className="button button--secondary" href={pathFor('work', language)}>
            {home.work.cta}
          </a>
        </div>
      </section>

      <ClosingCta title={home.closing.title} body={home.closing.body} />
    </SiteLayout>
  );
}
