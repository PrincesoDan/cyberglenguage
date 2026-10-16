import { SCHEDULING_URL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

interface ScheduleButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  className?: string;
}

/**
 * CTA principal del sitio (mail del cliente: "CTA principal agendar").
 * Mientras SCHEDULING_URL esté vacío no se inventa un destino: el botón se
 * deshabilita y explica por qué.
 */
export function ScheduleButton({ variant, label, className }: ScheduleButtonProps) {
  const { copy } = useLanguage();
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`;

  if (!SCHEDULING_URL) {
    return (
      <button type="button" className={classes} disabled title={copy.cta.schedulingPending}>
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
