import { CONTACT_EMAIL, DATA_CONTROLLER } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { PendingNote } from '../components/PendingNote';
import { SiteLayout } from '../components/SiteLayout';
import { pathFor } from '../routes';
import './PrivacyPolicy.css';

/**
 * Política para Puerto Rico/EE.UU. (spec §6). Borrador sin revisión legal: se
 * muestra el aviso en la propia página.
 *
 * El texto vive en `i18n/{es,en}/privacy.ts`; acá solo va la estructura. Cada
 * sección destaca su resumen en lenguaje simple sobre el detalle (voz de marca:
 * clara, sin jerga). Los datos que faltan se muestran como aviso visible.
 */
export function PrivacyPolicy() {
  const { copy, language } = useLanguage();
  const { privacy } = copy;

  return (
    <SiteLayout>
      <article className="section policy">
        <div className="container policy__inner">
          <header className="policy__header">
            <p className="eyebrow">{privacy.eyebrow}</p>
            <h1 className="policy__title">{privacy.title}</h1>
            <p className="lead policy__intro">{privacy.intro}</p>
            <p className="policy__meta">{privacy.lastUpdated}</p>
            <p className="policy__meta">{privacy.languageNote}</p>
          </header>

          {!DATA_CONTROLLER && <PendingNote>{privacy.controllerPending}</PendingNote>}
          <PendingNote>{privacy.draftNotice}</PendingNote>

          {privacy.sections.map((section) => (
            <section className="policy__section" key={section.title}>
              <h2 className="policy__section-title">{section.title}</h2>
              <p className="policy__summary">{section.summary}</p>
              {section.body.map((paragraph) => (
                <p className="policy__body" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <footer className="policy__footer">
            <p className="policy__contact">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>

            <a className="button button--secondary" href={pathFor('home', language)}>
              {privacy.backToSite}
            </a>
          </footer>
        </div>
      </article>
    </SiteLayout>
  );
}

