export interface TextSegment {
  text: string;
  pending: boolean;
}

/**
 * Los textos plantilla del brief traen huecos como "[razón real]". En vez de
 * inventarlos, se muestran marcados como pendientes (spec §10).
 */
export function splitPendingMarkers(text: string): TextSegment[] {
  return text
    .split(/(\[[^\]]+\])/)
    .filter((part) => part.length > 0)
    .map((part) =>
      part.startsWith('[') && part.endsWith(']')
        ? { text: part.slice(1, -1), pending: true }
        : { text: part, pending: false },
    );
}
