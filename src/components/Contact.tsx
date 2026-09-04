import { CONTACT_EMAIL, SCHEDULING_URL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { ScheduleButton } from './ScheduleButton';
import './Contact.css';

/** Sección "Contacto" (brief §06): CTA final para agendar. */
export function Contact() {
  const { copy } = useLanguage();

  return (
    <section className="section contact" id="contacto">
      <div className="container contact__inner">
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h2>{copy.contact.title}</h2>
        <p className="lead contact__body">{copy.contact.body}</p>

        <ScheduleButton variant="primary" label={copy.contact.cta} />

        {!SCHEDULING_URL && <p className="contact__pending">{copy.contact.schedulingPending}</p>}

        {CONTACT_EMAIL && (
          <p className="contact__email">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        )}
      </div>
    </section>
  );
}
