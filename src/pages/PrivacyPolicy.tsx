import { useEffect } from 'react';
import { CONTACT_EMAIL, DATA_CONTROLLER } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './PrivacyPolicy.css';

/**
 * Política de privacidad (brief §4.4 y §8: requisito legal al capturar emails).
 *
 * El texto vive en `i18n/es.ts` y `i18n/en.ts`; acá solo va la estructura.
 * Cada sección se pinta con su resumen en lenguaje simple destacado sobre el
 * detalle — el brief §3 exige lenguaje claro, y una política en legalés
 * contradice la voz de la marca.
 *
 * Los dos datos que todavía no existen (responsable y buzón de contacto) se
 * muestran como aviso visible en vez de omitirse: quien publique el sitio tiene
 * que tropezarse con ellos, no descubrirlos cuando alguien reclame.
 */
export function PrivacyPolicy() {
  const { copy } = useLanguage();
  const { privacy } = copy;

  // El <title> de index.html es el de la landing; esta vista es otro documento
  // y tiene que decirlo — vale para la pestaña, el historial y los marcadores.
  useEffect(() => {
    document.title = `${privacy.title} — ${copy.brand.name}`;
  }, [privacy.title, copy.brand.name]);

  return (
    <>
      <Header />
      <main>
        <article className="section policy">
          <div className="container policy__inner">
            <header className="policy__header">
              <p className="eyebrow">{privacy.eyebrow}</p>
              <h1 className="policy__title">{privacy.title}</h1>
              <p className="lead policy__intro">{privacy.intro}</p>
              <p className="policy__meta">{privacy.lastUpdated}</p>
              <p className="policy__meta">{privacy.languageNote}</p>
            </header>

            {!DATA_CONTROLLER && <PendingNotice>{privacy.controllerPending}</PendingNotice>}

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
              {CONTACT_EMAIL ? (
                <p className="policy__contact">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              ) : (
                <PendingNotice>{privacy.contactPending}</PendingNotice>
              )}

              <a className="button button--secondary" href="/">
                {privacy.backToSite}
              </a>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

/** Aviso de dato que falta. Deliberadamente imposible de pasar por alto. */
function PendingNotice({ children }: { children: string }) {
  return (
    <p className="policy__pending" role="note">
      {children}
    </p>
  );
}
