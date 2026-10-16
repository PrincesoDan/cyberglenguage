import { useLanguage } from '../i18n/LanguageContext';
import { CallButton } from './CallButton';
import { ScheduleButton } from './ScheduleButton';
import { WhatsAppButton } from './WhatsAppButton';
import './ClosingCta.css';

interface ClosingCtaProps {
  title: string;
  body: string;
  eyebrow?: string;
  /** Canal secundario junto a Agendar. Nosotros usa Llamar (brief web). */
  secondary?: 'whatsapp' | 'call';
}

export function ClosingCta({ title, body, eyebrow, secondary = 'whatsapp' }: ClosingCtaProps) {
  const { copy } = useLanguage();

  return (
    <section className="section section--dark closing-cta">
      <div className="container closing-cta__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="closing-cta__title">{title}</h2>
        <p className="lead closing-cta__body">{body}</p>
        <div className="closing-cta__actions">
          <ScheduleButton variant="primary" label={copy.cta.schedule} />
          {secondary === 'whatsapp' ? (
            <WhatsAppButton variant="secondary" label={copy.cta.whatsapp} />
          ) : (
            <CallButton variant="secondary" />
          )}
        </div>
      </div>
    </section>
  );
}
