import { useLanguage } from '../i18n/LanguageContext';
import { SAMPLE_REACH_BY_WEEK } from '../data/work';
import './ReportSample.css';

/**
 * Reporte mensual de ejemplo. Muestra el formato que recibe el cliente, no
 * resultados: por eso lleva la etiqueta de datos ilustrativos arriba y la
 * aclaración abajo, ambas visibles siempre.
 */
export function ReportSample() {
  const { copy } = useLanguage();
  const sample = copy.work.reportSample;
  const highlighted = SAMPLE_REACH_BY_WEEK.length - 1;

  return (
    <figure className="card card--wide report-sample">
      <div className="report-sample__header">
        <p className="report-sample__heading">{sample.heading}</p>
        <span className="report-sample__badge">{sample.badge}</span>
      </div>

      <dl className="report-sample__metrics">
        {sample.metrics.map((metric) => (
          <div className="report-sample__metric" key={metric.label}>
            <dt>{metric.label}</dt>
            <dd className="report-sample__value">{metric.value}</dd>
            <dd className="report-sample__change">{metric.change}</dd>
          </div>
        ))}
      </dl>

      <div className="report-sample__chart" role="img" aria-label={sample.chartLabel}>
        <div className="report-sample__bars">
          {SAMPLE_REACH_BY_WEEK.map((height, index) => (
            <span
              key={sample.weekLabels[index]}
              className={`report-sample__bar${index === highlighted ? ' is-highlighted' : ''}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="report-sample__weeks" aria-hidden="true">
          {sample.weekLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      <div className="report-sample__notes">
        <div>
          <p className="eyebrow">{sample.bestTitle}</p>
          <ul>
            {sample.best.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">{sample.nextTitle}</p>
          <ul>
            {sample.next.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="report-sample__footnote">{sample.footnote}</figcaption>
    </figure>
  );
}
