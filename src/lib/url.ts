/**
 * El usuario objetivo del brief (§3) no es técnico: escribe "tusitio.com",
 * no "https://tusitio.com". Normalizamos antes de validar para no rechazarlo
 * por una razón que no le importa.
 */
export function normalizeUrl(rawInput: string): string {
  const trimmed = rawInput.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

/** Acepta solo http/https con un host que tenga al menos un punto y un TLD alfabético. */
export function isValidSiteUrl(rawInput: string): boolean {
  const normalized = normalizeUrl(rawInput);
  if (!normalized) return false;

  let parsed: URL;
  try {
    parsed = new URL(normalized);
  } catch {
    return false;
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
  return /^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(parsed.hostname);
}

/**
 * Validación de email deliberadamente permisiva: solo descarta lo que
 * claramente no es una dirección. La verificación real es enviar el correo.
 */
export function isValidEmail(rawInput: string): boolean {
  return /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(rawInput.trim());
}
