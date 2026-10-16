import { describe, expect, it } from 'vitest';
import { splitPendingMarkers } from './pending';

describe('splitPendingMarkers', () => {
  it('sin marcas devuelve un solo segmento normal', () => {
    expect(splitPendingMarkers('Hola mundo')).toEqual([{ text: 'Hola mundo', pending: false }]);
  });

  it('separa las marcas [..] como pendientes, sin corchetes', () => {
    expect(splitPendingMarkers('Nació porque [razón]. Somos [n] socios')).toEqual([
      { text: 'Nació porque ', pending: false },
      { text: 'razón', pending: true },
      { text: '. Somos ', pending: false },
      { text: 'n', pending: true },
      { text: ' socios', pending: false },
    ]);
  });

  it('una marca al inicio no deja segmentos vacíos', () => {
    expect(splitPendingMarkers('[x] fin')).toEqual([
      { text: 'x', pending: true },
      { text: ' fin', pending: false },
    ]);
  });

  it('un corchete sin cerrar queda como texto normal', () => {
    expect(splitPendingMarkers('abre [ y no cierra')).toEqual([{ text: 'abre [ y no cierra', pending: false }]);
  });
});
