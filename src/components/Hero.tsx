import { useLanguage } from '../i18n/LanguageContext';
import { AnswerMark } from './BrandIcons';
import { AuditWidget } from './AuditWidget';
import { ScheduleButton } from './ScheduleButton';
import './Hero.css';

/**
 * Hero centrado sobre fondo Tinta: píldora de descriptor, titular en dos líneas
 * (la segunda en Oro Champán) y la tarjeta de auditoría bajo el copy.
 *
 * Línea 2 del titular = tagline del brief §01. El CTA primario es el ingreso de
 * URL (brief de desarrollo §5.1); agendar queda como secundario.
 *
 * La píldora lleva el signo de "respuesta" del sistema de marca en vez de un
 * destello genérico: dice de qué va el negocio antes de leer el texto.
 */
export function Hero() {
  const { copy } = useLanguage();

  return (
    <section className="section section--dark hero" id="top">
      <div className="container hero__inner">
        <p className="hero__badge">
          <AnswerMark size={15} className="hero__badge-mark" />
          {copy.hero.badge}
        </p>

        <h1 className="hero__title">
          <span className="hero__title-line">{copy.hero.titleLine1}</span>
          <span className="hero__title-line hero__title-line--accent">{copy.hero.titleLine2}</span>
        </h1>

        <p className="lead hero__value-prop">{copy.hero.valueProp}</p>

        <AuditWidget />

        <ScheduleButton
          variant="secondary"
          label={copy.hero.secondaryCta}
          className="hero__secondary-cta"
        />
      </div>
    </section>
  );
}
