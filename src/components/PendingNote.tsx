import type { TextSegment } from '../lib/pending';

/** Aviso de dato que falta. Deliberadamente imposible de pasar por alto (spec §10). */
export function PendingNote({ children }: { children: string }) {
  return (
    <p className="pending-note" role="note">
      {children}
    </p>
  );
}

/** Pinta un texto con huecos `[…]` marcando los huecos como pendientes. */
export function PendingText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.pending ? (
          <mark className="pending" key={index}>
            {segment.text}
          </mark>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  );
}
