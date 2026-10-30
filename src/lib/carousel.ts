/**
 * Posición de `index` respecto de `active` en un carrusel circular, en pasos:
 * 0 es el activo, negativos van arriba y positivos abajo. Tomar el camino más
 * corto es lo que hace que el último quede justo arriba del primero en vez de
 * al fondo de la lista.
 */
export function circularOffset(index: number, active: number, length: number): number {
  const forward = wrapIndex(index - active, length);
  return forward > length / 2 ? forward - length : forward;
}

/** Índice dentro de [0, length), dando la vuelta en ambos extremos. */
export function wrapIndex(index: number, length: number): number {
  return ((index % length) + length) % length;
}
