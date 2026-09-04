/**
 * Sistema de marca en SVG — CyberLanguage.
 *
 * Los originales entregados (`info/*.jpg`) vienen a ~200px y con el fondo
 * horneado en el pixel, así que no sirven sobre Tinta ni sobre Porcelana.
 * Acá están redibujados como vectores: escalan sin perder filo, no traen fondo
 * y toman el color del contexto.
 *
 * Convención de color: la parte "estructural" usa `currentColor` (hereda
 * Porcelana en secciones oscuras, Tinta en claras) y el acento va en Oro
 * Champán. Esto respeta la regla del brief §02 — sobre fondo oscuro el logo va
 * en Oro o Porcelana; sobre fondo claro, en Tinta u Oro.
 */

const GOLD = '#c6a15b';
const STEEL = '#5c6b7c';

interface IconProps {
  /** Alto renderizado en px. El ancho sale del aspect ratio del viewBox. */
  size?: number;
  className?: string;
}

/**
 * Isotipo: el prompt `>` más el cursor. Fuente: `info/logo-cyberlenguage.jpg`.
 * Es el logo principal — header, footer y favicon.
 */
export function LogoMark({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 0 42 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 5 14 12 4 19"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 12H37" stroke={GOLD} strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Comillas de apertura — el concepto de marca del brief §02 ("te citan").
 * Fuente: `info/comillas-cyberg.jpg`. La primera va en Oro, la segunda hereda
 * el color del contexto, igual que el original.
 */
export function QuoteMark({ size = 40, className }: IconProps) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 0 62 42"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={QUOTE_GLYPH} fill={GOLD} />
      <path d={QUOTE_GLYPH} fill="currentColor" transform="translate(36 0)" />
    </svg>
  );
}

/**
 * Un solo signo de comilla: bloque con el cuarto superior izquierdo resuelto
 * como arco grueso, dejando el ojo abierto hacia arriba a la derecha.
 */
const QUOTE_GLYPH = 'M0 42V24A26 24 0 0 1 26 0v13a12 11 0 0 0-12 11h12v18Z';

/**
 * La respuesta de la IA: corchetes con el punto adentro.
 * Fuente: `info/respuesta-cyber.jpg`.
 */
export function AnswerMark({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 0 34 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8.5 1.3H1.3v15.4h7.2M25.5 1.3h7.2v15.4h-7.2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="9" r="3.8" fill={GOLD} />
    </svg>
  );
}

/**
 * El punto citado sobre la línea de texto — la marca destacada dentro de la
 * respuesta. Fuente: `info/punto-cyberg.jpg`.
 */
export function PointMark({ size = 36, className }: IconProps) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 0 44 36"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="21.5" cy="14.3" r="14" stroke={STEEL} strokeWidth="1" />
      <circle cx="21.5" cy="14.3" r="9.1" fill={GOLD} />
      <path d="M1 34.3h42" stroke={STEEL} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
