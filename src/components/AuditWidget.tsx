import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import type { ReactNode } from 'react';
import { PRIVACY_POLICY_URL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { isValidEmail, isValidSiteUrl, normalizeUrl } from '../lib/url';
import { ScheduleButton } from './ScheduleButton';
import './AuditWidget.css';

type AuditStatus = 'idle' | 'analyzing' | 'result';

/** Campos del formulario, en el orden en que se muestran. */
type FieldName = 'url' | 'email' | 'organization';

/** Duración de cada paso del proceso visible (brief §5.2). */
const STEP_DURATION_MS = 1200;

/**
 * Puntaje de ejemplo tomado literalmente del brief §5.3 ("Puntaje: 42").
 * NO es el resultado de un análisis: no hay motor de auditoría conectado.
 */
const DEMO_SCORE = 42;

const EMPTY_VALUES: Record<FieldName, string> = { url: '', email: '', organization: '' };

/** Reglas de validación por campo, en el mismo orden en que se pintan. */
const VALIDATORS: Record<FieldName, (value: string) => boolean> = {
  url: isValidSiteUrl,
  email: isValidEmail,
  organization: (value) => value.trim().length > 0,
};

const FIELD_ORDER: FieldName[] = ['url', 'email', 'organization'];

/**
 * Maqueta del flujo de auditoría del brief §5: ingreso de datos, proceso
 * visible y resultado con teaser bloqueado.
 *
 * Solo interfaz: no rastrea el sitio, no calcula puntaje, no llama a ninguna IA
 * y no envía los datos a ningún lado. El resultado se muestra marcado como demo.
 */
export function AuditWidget() {
  const { copy } = useLanguage();
  const [status, setStatus] = useState<AuditStatus>('idle');
  const [values, setValues] = useState<Record<FieldName, string>>(EMPTY_VALUES);
  const [invalidFields, setInvalidFields] = useState<FieldName[]>([]);
  const [hasConsent, setHasConsent] = useState(false);
  const [wantsMarketing, setWantsMarketing] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = copy.audit.steps;

  useEffect(() => {
    if (status !== 'analyzing') return;

    const isLastStep = stepIndex === steps.length - 1;
    const timer = window.setTimeout(() => {
      if (isLastStep) {
        setStatus('result');
      } else {
        setStepIndex(stepIndex + 1);
      }
    }, STEP_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [status, stepIndex, steps.length]);

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const failed = FIELD_ORDER.filter((field) => !VALIDATORS[field](values[field]));
    setInvalidFields(failed);

    if (failed.length > 0 || !hasConsent) return;

    setStepIndex(0);
    setStatus('analyzing');
  }

  function handleReset() {
    setStatus('idle');
    setStepIndex(0);
    setValues(EMPTY_VALUES);
    setInvalidFields([]);
    setHasConsent(false);
    setWantsMarketing(false);
  }

  if (status === 'analyzing') {
    return (
      <AuditCard label={copy.audit.cardLabel}>
        <p className="eyebrow audit__running-title">{copy.audit.analyzingTitle}</p>
        <p className="audit__target">{normalizeUrl(values.url)}</p>
        <ol className="audit__steps">
          {steps.map((step, index) => (
            <li
              key={step}
              className={index <= stepIndex ? 'is-active' : undefined}
              aria-current={index === stepIndex ? 'step' : undefined}
            >
              {step}
            </li>
          ))}
        </ol>
      </AuditCard>
    );
  }

  if (status === 'result') {
    return (
      <AuditCard label={copy.audit.cardLabel}>
        <p className="audit__demo-notice">{copy.audit.demoNotice}</p>

        <div className="audit__score">
          <span className="eyebrow">{copy.audit.scoreLabel}</span>
          <strong className="audit__score-value">{DEMO_SCORE}</strong>
          <span className="audit__score-max">/ 100</span>
        </div>

        <p className="audit__teaser">{copy.audit.teaser}</p>

        <div className="audit__locked" aria-hidden="true">
          <span className="audit__locked-bar" />
          <span className="audit__locked-bar" />
          <span className="audit__locked-bar" />
        </div>

        <h3 className="audit__locked-title">{copy.audit.lockedTitle}</h3>
        <p className="audit__locked-body">{copy.audit.lockedBody}</p>

        <div className="audit__actions">
          <ScheduleButton variant="primary" label={copy.contact.cta} />
          <button type="button" className="button button--secondary" onClick={handleReset}>
            {copy.audit.reset}
          </button>
        </div>
      </AuditCard>
    );
  }

  return (
    <AuditCard label={copy.audit.cardLabel}>
      <form className="audit__form" onSubmit={handleSubmit} noValidate>
        <div className="audit__fields">
          {FIELD_ORDER.map((field) => (
            <AuditField
              key={field}
              name={field}
              copy={copy.audit.fields[field]}
              value={values[field]}
              isInvalid={invalidFields.includes(field)}
              onChange={(value) => updateField(field, value)}
            />
          ))}
        </div>

        {/*
          Dos consentimientos, no uno. Entregar el reporte y mandar una secuencia
          de marketing son finalidades distintas, y la Ley 21.719 pide el
          consentimiento de cada una por separado: el paraguas ("acepto todo")
          no es válido. El de marketing va desmarcado y no bloquea el envío.
        */}
        <label className="audit__consent">
          <input
            type="checkbox"
            checked={hasConsent}
            onChange={(event) => setHasConsent(event.target.checked)}
          />
          <span>
            {copy.audit.consent}{' '}
            {PRIVACY_POLICY_URL && <a href={PRIVACY_POLICY_URL}>{copy.audit.privacyLink}</a>}
          </span>
        </label>

        <label className="audit__consent">
          <input
            type="checkbox"
            checked={wantsMarketing}
            onChange={(event) => setWantsMarketing(event.target.checked)}
          />
          <span>{copy.audit.marketingConsent}</span>
        </label>

        <button type="submit" className="button button--primary audit__submit" disabled={!hasConsent}>
          {copy.audit.submit}
        </button>
      </form>
    </AuditCard>
  );
}

/** Marco de la tarjeta: barra tipo terminal con los tres puntos y la etiqueta mono. */
function AuditCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="audit">
      <div className="audit__chrome">
        <span className="audit__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="audit__chrome-label">{label}</span>
      </div>
      <div className="audit__body">{children}</div>
    </div>
  );
}

interface AuditFieldProps {
  name: FieldName;
  copy: { label: string; placeholder: string; error: string };
  value: string;
  isInvalid: boolean;
  onChange: (value: string) => void;
}

function AuditField({ name, copy, value, isInvalid, onChange }: AuditFieldProps) {
  const inputId = `audit-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="audit__field">
      <label className="audit__label" htmlFor={inputId}>
        {copy.label}
      </label>
      <input
        id={inputId}
        name={name}
        type={name === 'email' ? 'email' : 'text'}
        inputMode={name === 'url' ? 'url' : undefined}
        autoComplete={AUTOCOMPLETE_BY_FIELD[name]}
        placeholder={copy.placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={isInvalid}
        aria-describedby={isInvalid ? errorId : undefined}
      />
      {isInvalid && (
        <p className="audit__error" id={errorId} role="alert">
          {copy.error}
        </p>
      )}
    </div>
  );
}

const AUTOCOMPLETE_BY_FIELD: Record<FieldName, string> = {
  url: 'url',
  email: 'email',
  organization: 'organization',
};
