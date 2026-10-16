import { CONTACT_EMAIL, SCHEDULING_URL, SOCIAL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { CallButton } from '../components/CallButton';
import { PageIntro } from '../components/PageIntro';
import { PendingNote } from '../components/PendingNote';
import { SiteLayout } from '../components/SiteLayout';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';
import { WhatsAppButton } from '../components/WhatsAppButton';
import './ContactPage.css';

/**
 * Contacto en orden de prioridad (spec §6): agenda embebida, WhatsApp y
 * Llamar, y después correo, horario y redes. Sin formulario: quedó fuera de
 * esta entrega.
 */
export function ContactPage() {
  const { copy } = useLanguage();
  const { contact } = copy;

  return (
    <SiteLayout>
      <PageIntro eyebrow={contact.eyebrow} title={contact.title} lead={contact.body} icon="/brand/icons/contacto.png" />

      <section className="section">
        <div className="container contact-page__schedule">
          <h2>{contact.scheduleTitle}</h2>
          <p className="lead">{contact.scheduleBody}</p>

          {SCHEDULING_URL ? (
            <>
              <iframe
                className="contact-page__calendar"
                src={`${SCHEDULING_URL}?embed=true&theme=light`}
                title={contact.iframeTitle}
                loading="lazy"
              />
              {/* Siempre visible: si el iframe no carga (bloqueador, red), la agenda sigue a un click. */}
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                {contact.openInNewTab}
              </a>
            </>
          ) : (
            <PendingNote>{copy.cta.schedulingPending}</PendingNote>
          )}
        </div>
      </section>

      <section className="section section--light">
        <div className="container contact-page__other">
          <h2>{contact.otherTitle}</h2>
          <div className="contact-page__actions">
            <WhatsAppButton variant="primary" label={copy.cta.whatsapp} />
            <CallButton variant="secondary" />
          </div>
          <dl className="contact-page__details">
            <div>
              <dt>{contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>{contact.hoursLabel}</dt>
              <dd>{copy.site.hours}</dd>
            </div>
            <div>
              <dt>{contact.followUs}</dt>
              <dd className="contact-page__social">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={28} />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon size={28} />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
