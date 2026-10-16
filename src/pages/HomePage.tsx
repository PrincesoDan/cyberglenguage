import { useLanguage } from '../i18n/LanguageContext';
import { SiteLayout } from '../components/SiteLayout';

export function HomePage() {
  const { copy } = useLanguage();

  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <h1>{copy.meta.home}</h1>
        </div>
      </section>
    </SiteLayout>
  );
}
