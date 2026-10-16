import { useLanguage } from '../i18n/LanguageContext';
import type { ServiceId } from '../data/services';
import { WhatsAppButton } from './WhatsAppButton';
import './ServiceAccordion.css';

interface ServiceAccordionProps {
  id: ServiceId;
  open: boolean;
  onToggle: (id: ServiceId) => void;
  recommended?: boolean;
  featured?: boolean;
  /** Muestra al final el recuadro "+ Atención a tu comunidad". */
  withAddOn?: boolean;
}

/**
 * Un servicio como plegable (brief web, "Comportamiento de cada servicio").
 * La descripción corta se ve siempre: en móvil no hay hover, y nada puede
 * depender de él (spec, desviación avisada). Se abre con click, tap o teclado.
 */
export function ServiceAccordion({ id, open, onToggle, recommended, featured, withAddOn }: ServiceAccordionProps) {
  const { copy } = useLanguage();
  const { services } = copy;
  const item = services.items[id];
  const panelId = `${id}-panel`;
  const classes = ['service', featured ? 'service--featured' : '', open ? 'is-open' : ''].filter(Boolean).join(' ');

  return (
    <article className={classes} id={id}>
      <h3 className="service__heading">
        <button
          type="button"
          className="service__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(id)}
        >
          <span className="service__name">
            {item.name}
            {recommended && <span className="service__badge">{services.recommended}</span>}
          </span>
          <span className="service__chevron" aria-hidden="true" />
        </button>
      </h3>
      <p className="service__summary">{item.summary}</p>

      <div className="service__panel" id={panelId} hidden={!open}>
        <p className="eyebrow">{services.benefitsLabel}</p>
        <ul className="service__benefits">
          {item.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        {item.conditions && (
          <p className="service__conditions">
            <strong>{services.conditionsLabel}:</strong> {item.conditions}
          </p>
        )}

        <WhatsAppButton variant="primary" label={services.wantThis} services={[item.name]} />

        {withAddOn && (
          <aside className="service__addon">
            <p className="service__addon-title">{services.addOn.title}</p>
            <p>{services.addOn.body}</p>
            <WhatsAppButton
              variant="secondary"
              label={services.addOn.cta}
              services={[item.name, services.items.comunidad.name]}
            />
          </aside>
        )}
      </div>
    </article>
  );
}
