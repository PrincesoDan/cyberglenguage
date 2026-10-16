import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { WhatsAppIcon } from './SocialIcons';
import './WhatsAppFab.css';

/** Botón flotante en todas las páginas menos Links (brief web, "Elementos globales"). */
export function WhatsAppFab() {
  const { copy } = useLanguage();

  return (
    <a
      className="whatsapp-fab"
      href={buildWhatsAppUrl(copy.whatsapp.genericMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.whatsapp.fabLabel}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
