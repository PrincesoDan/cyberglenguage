import type { Language } from '../i18n/language';

export interface ProductionPiece {
  /** Ruta en public/, por ejemplo /work/dona-burguer-1.jpg */
  image: string;
  project: string;
  description: Record<Language, string>;
}

export interface ResultCase {
  image: string;
  client: string;
  challenge: Record<Language, string>;
  whatWeDid: Record<Language, string>;
  result: Record<Language, string>;
}

/**
 * Material de producción (lo selecciona Carlo, brief web "Anexo"). Vacío =
 * la galería muestra fichas de "material pendiente". Agregar piezas aquí no
 * requiere rediseño.
 */
export const PRODUCTION: readonly ProductionPiece[] = [];

/** Casos de resultados: fase 2. Mientras esté vacío, el bloque no se muestra. */
export const RESULTS: readonly ResultCase[] = [];
