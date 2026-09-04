import { SCHEDULING_URL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

interface ScheduleButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  className?: string;
}

/**
 * CTA de agenda (brief §4.5). Mientras SCHEDULING_URL esté vacío no inventamos
 * un destino: el botón se muestra deshabilitado y se explica por qué.
 */
export function ScheduleButton({ variant, label, className }: ScheduleButtonProps) {
  const { copy } = useLanguage();
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`;

  if (!SCHEDULING_URL) {
    return (
      <button type="button" className={classes} disabled title={copy.contact.schedulingPending}>
        {label}
      </button>
    );
  }

  return (
    <a className={classes} href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
