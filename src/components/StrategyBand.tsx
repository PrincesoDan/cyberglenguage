import { useLanguage } from '../i18n/LanguageContext';
import { QuoteMark } from './BrandIcons';
import './StrategyBand.css';

/**
 * Banda de cierre con el mensaje clave 3 del brief §01.
 *
 * Las comillas encabezan el bloque: son el concepto del sistema de logo (§02,
 * "unas comillas convertidas en símbolo — dice 'te citan' de un vistazo") y
 * este es el punto de la página donde ese mensaje aterriza.
 */
export function StrategyBand() {
  const { copy } = useLanguage();

  return (
    <section className="section section--dark strategy">
      <div className="container strategy__inner">
        <div className="strategy__statement">
          <QuoteMark size={38} className="strategy__quote" />
          <h2>{copy.strategy.title}</h2>
        </div>
        <p className="lead">{copy.strategy.body}</p>
      </div>
    </section>
  );
}
