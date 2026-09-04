/**
 * Configuración pendiente de datos reales.
 * El brief §12 y §08 dejan estos puntos abiertos; hasta que se definan,
 * la UI degrada de forma explícita en vez de apuntar a un link inventado.
 */

/** Dominio definitivo de la marca. */
export const SITE_URL = 'https://cyberlanguage.io';

/** TODO: URL de Calendly o Cal.com (brief de desarrollo §4.5). Vacío = CTA deshabilitado. */
export const SCHEDULING_URL = '';

/** TODO: confirmar el buzón real del dominio (brief §08). Vacío = no se muestra. */
export const CONTACT_EMAIL = '';

/**
 * Política de privacidad (brief §4.4 y §8: requisito legal al capturar emails).
 * Es una ruta interna del propio sitio, servida por <PrivacyPolicy />.
 */
export const PRIVACY_POLICY_URL = '/privacidad';

/**
 * TODO: identificación del responsable del tratamiento — nombre completo o
 * razón social y RUT (Ley 21.719). Todavía no hay sociedad constituida.
 * Vacío = la política muestra el aviso de dato pendiente.
 */
export const DATA_CONTROLLER = '';
