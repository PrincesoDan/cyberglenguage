/** Aviso de dato que falta. Deliberadamente imposible de pasar por alto (spec §10). */
export function PendingNote({ children }: { children: string }) {
  return (
    <p className="pending-note" role="note">
      {children}
    </p>
  );
}
