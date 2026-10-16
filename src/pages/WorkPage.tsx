import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { SiteLayout } from '../components/SiteLayout';
import { PRODUCTION, RESULTS } from '../data/work';
import './WorkPage.css';

/** Cuántas fichas pendientes mostrar mientras no hay material: llena el carrete en desktop. */
const PENDING_SLOTS = 4;

/** Nuestro trabajo (brief web): carrete de producción + casos (fase 2). */
export function WorkPage() {
  const { copy, language } = useLanguage();
  const { work, home } = copy;

  return (
    <SiteLayout>
      <PageIntro eyebrow={work.eyebrow} title={work.title} icon="/brand/icons/logros.png" />

      <section className="section">
        <div className="container">
          <h2>{work.productionTitle}</h2>
          <p className="lead work__lead">{work.productionBody}</p>

          <ul className="work-reel" aria-label={work.productionTitle}>
            {PRODUCTION.length > 0
              ? PRODUCTION.map((piece) => (
                  <li className="work-reel__item" key={piece.image}>
                    <figure>
                      <img src={piece.image} alt={piece.description[language]} loading="lazy" />
                      <figcaption>
                        <strong>{piece.project}</strong>
                        <span>{piece.description[language]}</span>
                      </figcaption>
                    </figure>
                  </li>
                ))
              : Array.from({ length: PENDING_SLOTS }, (_, index) => (
                  <li className="work-reel__item work-reel__item--pending" key={index}>
                    <p className="pending-note">{work.pendingPiece}</p>
                  </li>
                ))}
          </ul>
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

      <ClosingCta title={home.closing.title} body={home.closing.body} />
    </SiteLayout>
  );
}
