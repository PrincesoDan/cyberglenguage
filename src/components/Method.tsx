import { useLanguage } from '../i18n/LanguageContext';
import './Method.css';

/**
 * Sección "Cómo trabajamos" (brief §06).
 * TODO: el brief entrega "Auditar → Optimizar → Medir citas" como EJEMPLO.
 * Confirmar la metodología definitiva con la consultora antes de publicar.
 */
export function Method() {
  const { copy } = useLanguage();

  return (
    <section className="section" id="metodo">
      <div className="container">
        <p className="eyebrow">{copy.geo.method.eyebrow}</p>
        <h2>{copy.geo.method.title}</h2>

        <ol className="method__steps">
          {copy.geo.method.steps.map((step, index) => (
            <li className="method__step" key={step.title}>
              <span className="method__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p className="lead">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
