import { PHONE_TEL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

interface CallButtonProps {
  variant: 'primary' | 'secondary';
  className?: string;
}

/** `tel:` marca directo en el celular (brief web, "Botón Llamar"). */
export function CallButton({ variant, className }: CallButtonProps) {
  const { copy } = useLanguage();
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`;

  return (
    <a className={classes} href={`tel:${PHONE_TEL}`}>
      {copy.cta.call}
    </a>
  );
}
