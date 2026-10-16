import { useLanguage } from '../i18n/LanguageContext';
import { SiteLayout } from '../components/SiteLayout';
import { pathFor } from '../routes';

/** 404 del brief web: lleva a Servicios. */
export function NotFoundPage() {
  const { copy, language } = useLanguage();

  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>{copy.notFound.title}</h1>
          <p className="lead" style={{ marginBlock: 'var(--space-3)' }}>
            {copy.notFound.body}
          </p>
          <a className="button button--primary" href={pathFor('services', language)}>
            {copy.notFound.cta}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
