import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { WorkStepId } from '../i18n/types';
import { WORK_STEPS } from '../data/work';
import './WorkProcess.css';

/** Íconos de trazo de la propuesta "Cómo trabajamos"; toman el Oro por `currentColor`. */
const STEP_ICONS: Record<WorkStepId, ReactNode> = {
  diagnosis: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  strategy: (
    <>
      <path d="M4 19l5-5 4 4 7-9" />
      <path d="M15 9h5v5" />
    </>
  ),
  production: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <circle cx="12" cy="12.5" r="3.5" />
      <path d="M8 6l1.5-2h5L16 6" />
    </>
  ),
  publishing: (
    <>
      <path d="M4 5h16v11H8l-4 4Z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  measurement: <path d="M5 20V11M12 20V5M19 20v-6" />,
  adjustment: (
    <>
      <path d="M20 7a8 8 0 1 0 1 6" />
      <path d="M20 3v4h-4" />
    </>
  ),
};

/** Los seis pasos, de la primera llamada al reporte del mes. */
export function WorkProcess() {
  const { copy } = useLanguage();
  const { work } = copy;

  return (
    <ol className="work-process">
      {WORK_STEPS.map(({ id, monthly }, index) => {
        const step = work.steps[id];
        return (
          <li className="card work-process__step" key={id}>
            <div className="work-process__top">
              <svg className="work-process__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                {STEP_ICONS[id]}
              </svg>
              {monthly ? (
                <span className="work-process__tag">{work.monthlyTag}</span>
              ) : (
                <span className="work-process__number">{String(index + 1).padStart(2, '0')}</span>
              )}
            </div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <p className="work-process__deliverable">
              <strong>{work.deliverableLabel}:</strong> {step.deliverable}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
