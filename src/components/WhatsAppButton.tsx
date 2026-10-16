import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl, fillServiceTemplate } from '../lib/whatsapp';

interface WhatsAppButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  /** Servicios a nombrar en el mensaje prellenado. Vacío = mensaje genérico. */
  services?: readonly string[];
  className?: string;
}

export function WhatsAppButton({ variant, label, services = [], className }: WhatsAppButtonProps) {
  const { copy } = useLanguage();
  const message =
    services.length > 0
      ? fillServiceTemplate(copy.whatsapp.serviceMessage, services, copy.whatsapp.conjunction)
      : copy.whatsapp.genericMessage;
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`;

  return (
    <a className={classes} href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
