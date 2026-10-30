import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { ReportSample } from '../components/ReportSample';
import { ScheduleButton } from '../components/ScheduleButton';
import { WorkProcess } from '../components/WorkProcess';
import { SiteLayout } from '../components/SiteLayout';
import { RESULTS } from '../data/work';
import './WorkPage.css';

/**
 * Nuestro trabajo, en la versión "Cómo trabajamos": sin casos pasados todavía,
 * la página muestra el proceso y el formato del reporte. Los
 * resultados (fase 2) aparecen solos cuando RESULTS deja de estar vacío.
 */
export function WorkPage() {
  const { copy, language } = useLanguage();
  const { work } = copy;

  return (
    <SiteLayout>
      <PageIntro eyebrow={work.eyebrow} title={work.title} lead={work.lead} icon="/brand/icons/logros.png">
        <ScheduleButton variant="primary" label={copy.cta.schedule} />
      </PageIntro>

      <section className="section">
        <div className="container">
          <h2>{work.processTitle}</h2>
          <p className="lead work__lead">{work.processBody}</p>
          <WorkProcess />
        </div>
      </section>

      <section className="section section--light">
        <div className="container work-report">
          <div>
            <h2>{work.reportTitle}</h2>
            <p className="lead work__lead">{work.reportBody}</p>
            <ul className="work-report__list">
              {work.reportIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ReportSample />
        </div>
      </section>

      {RESULTS.length > 0 && (
        <section className="section section--light">
          <div className="container">
            <h2>{work.resultsTitle}</h2>
            <p className="lead work__lead">{work.resultsBody}</p>
            <div className="work-results">
              {RESULTS.map((result) => (
                <article className="card" key={result.client}>
                  <img src={result.image} alt="" loading="lazy" />
                  <h3>{result.client}</h3>
                  <p>
                    <strong>{work.challengeLabel}:</strong> {result.challenge[language]}
                  </p>
                  <p>
                    <strong>{work.whatWeDidLabel}:</strong> {result.whatWeDid[language]}
                  </p>
                  <p>
                    <strong>{work.resultLabel}:</strong> {result.result[language]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCta title={work.closingTitle} body={work.closingBody} />
    </SiteLayout>
  );
}
