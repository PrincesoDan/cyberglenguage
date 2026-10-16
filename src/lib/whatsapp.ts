import { WHATSAPP_NUMBER } from '../config';

/**
 * Inserta el o los servicios en la plantilla del mensaje prellenado (brief
 * web: "el mensaje incluye ese servicio"). Dos servicios cuando el cliente
 * suma Atención a tu comunidad desde un plegable.
 */
export function fillServiceTemplate(template: string, services: readonly string[], conjunction: string): string {
  return template.replace('{service}', services.join(conjunction));
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
