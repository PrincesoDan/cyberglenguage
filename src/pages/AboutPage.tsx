import { useLanguage } from '../i18n/LanguageContext';
import { SiteLayout } from '../components/SiteLayout';

export function AboutPage() {
  const { copy } = useLanguage();

  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <h1>{copy.meta.about}</h1>
        </div>
      </section>
    </SiteLayout>
  );
}
