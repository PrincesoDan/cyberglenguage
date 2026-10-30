import type { ReactNode } from 'react';
import './PageIntro.css';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Icono de sección del branding (public/brand/icons). */
  icon?: string;
  /** Acciones bajo el título (por ejemplo, el botón de agenda). */
  children?: ReactNode;
}

/** Encabezado de las páginas interiores, sobre Tinta como el header. */
export function PageIntro({ eyebrow, title, lead, icon, children }: PageIntroProps) {
  return (
    <section className="section section--dark page-intro">
      <div className="container page-intro__inner">
        {icon && <img className="page-intro__icon" src={icon} alt="" width={96} height={96} />}
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-intro__title">{title}</h1>
          {lead && <p className="lead page-intro__lead">{lead}</p>}
          {children && <div className="page-intro__actions">{children}</div>}
        </div>
      </div>
    </section>
  );
}
