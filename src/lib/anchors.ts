/**
 * Los anuncios y mensajes enlazan a un servicio por ancla (brief web:
 * `#redes`, `#anuncios`…). Devuelve el id solo si es uno conocido; cualquier
 * hash raro se ignora en vez de romper la página.
 */
export function serviceFromHash<T extends string>(hash: string, ids: readonly T[]): T | null {
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return null;
  }
  return ids.find((candidate) => candidate === id) ?? null;
}
