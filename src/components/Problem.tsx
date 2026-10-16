import { useLanguage } from '../i18n/LanguageContext';
import { PointMark } from './BrandIcons';
import './Problem.css';

/**
 * Sección "El problema" (brief §06). Contenido: posicionamiento y mensajes
 * clave 1 y 2 (§01).
 *
 * Abre con el signo del punto sobre la línea: la marca destacada dentro de una
 * respuesta. Es exactamente la pregunta de la sección — si te mencionan o no.
 */
export function Problem() {
  const { copy } = useLanguage();

  return (
    <section className="section section--light" id="problema">
      <div className="container">
        <PointMark size={34} className="problem__mark" />
        <p className="eyebrow">{copy.geo.problem.eyebrow}</p>
        <h2>{copy.geo.problem.title}</h2>
        <p className="lead problem__positioning">{copy.geo.problem.positioning}</p>

        <div className="problem__grid">
          {copy.geo.problem.messages.map((message) => (
            <article className="card problem__card" key={message.title}>
              <h3>{message.title}</h3>
              <p className="lead">{message.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
