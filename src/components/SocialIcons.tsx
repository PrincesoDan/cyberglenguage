interface IconProps {
  size?: number;
  className?: string;
}

/**
 * Iconos de redes con trazo fino y `currentColor`, para que tomen Porcelana
 * u Oro según el fondo, como el resto del sistema de marca.
 */
export function InstagramIcon({ size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M3.5 20.5l1.3-4.2A8.6 8.6 0 1 1 8 19.4l-4.5 1.1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.2c.3-.5.8-.5 1.1 0l.8 1.6c.1.3 0 .6-.2.8l-.5.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.5c.2-.2.5-.3.8-.2l1.6.8c.5.3.5.8 0 1.1-.6.5-1.4.8-2.2.6-2.4-.6-4.4-2.6-5-5-.2-.8.1-1.6.6-2.2z"
        fill="currentColor"
      />
    </svg>
  );
}
