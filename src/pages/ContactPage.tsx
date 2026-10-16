import { useLanguage } from '../i18n/LanguageContext';
import { SiteLayout } from '../components/SiteLayout';

export function ContactPage() {
  const { copy } = useLanguage();

  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <h1>{copy.meta.contact}</h1>
        </div>
      </section>
    </SiteLayout>
  );
}
