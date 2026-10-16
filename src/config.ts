/**
 * Datos de contacto y URLs del sitio (spec §4). Los valores salen del brief
 * web, "Datos clave"; la agenda es la de Cal.com que entregó el cliente.
 */

export const SITE_URL = 'https://cyberpositioning.com';

/** Dominio de la línea GEO. Redirige a /geo desde el host (vercel.json). */
export const GEO_DOMAIN = 'https://cyberlanguage.io';

/** Vacío = los CTA de agenda se deshabilitan (ScheduleButton). */
export const SCHEDULING_URL = 'https://cal.com/princesodan/ulab-consulting';

/** Formato wa.me: solo dígitos, con código de país. */
export const WHATSAPP_NUMBER = '17879559917';

export const PHONE_TEL = '+17879559917';
export const PHONE_DISPLAY = '+1 (787) 955-9917';

export const CONTACT_EMAIL = 'admin@cyberpositioning.com';

export const SOCIAL = {
  instagram: 'https://www.instagram.com/cyberpositioning/',
  facebook: 'https://www.facebook.com/profile.php?id=61594919531733',
} as const;

/**
 * TODO: razón social de Cyber Positioning para la política de privacidad.
 * Vacío = la política lo muestra como dato pendiente.
 */
export const DATA_CONTROLLER = '';
