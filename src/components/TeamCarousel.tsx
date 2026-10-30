import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { TeamMember } from '../data/team';
import { circularOffset, wrapIndex } from '../lib/carousel';
import { PendingNote } from './PendingNote';
import { LinkedInIcon } from './SocialIcons';
import './TeamCarousel.css';

/** Alto de una miniatura más su separación; debe calzar con `.team-carousel__thumb` en el CSS. */
const THUMB_STEP_PX = 116;

/**
 * Equipo con la mecánica de la landing de PaltaLabs: riel vertical de
 * miniaturas que rota en círculo, foto grande del miembro activo al lado y
 * su ficha en un panel aparte. Se ve a una persona a la vez, así que la bio
 * y el detalle profesional van completos en vez de detrás de un plegable.
 */
export function TeamCarousel({ members }: { members: readonly TeamMember[] }) {
  const { copy } = useLanguage();
  const { about } = copy;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = members[activeIndex];

  const step = (direction: 1 | -1) => setActiveIndex((index) => wrapIndex(index + direction, members.length));

  return (
    <div className="team-carousel">
      <div className="team-carousel__stage">
        <div className="team-carousel__rail">
          <button type="button" className="team-carousel__arrow" aria-label={about.previousMember} onClick={() => step(-1)}>
            <span className="team-carousel__chevron team-carousel__chevron--up" aria-hidden="true" />
          </button>

          <div className="team-carousel__track">
            {members.map((member, index) => {
              const offset = circularOffset(index, activeIndex, members.length);
              const isActive = offset === 0;
              return (
                <button
                  key={member.id}
                  type="button"
                  className={`team-carousel__thumb${isActive ? ' is-active' : ''}${Math.abs(offset) <= 1 ? ' is-visible' : ''}`}
                  style={{ transform: `translateY(${offset * THUMB_STEP_PX}px)` }}
                  aria-label={`${about.showMember} ${member.name}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                >
                  <MemberPhoto member={member} />
                </button>
              );
            })}
          </div>

          <button type="button" className="team-carousel__arrow" aria-label={about.nextMember} onClick={() => step(1)}>
            <span className="team-carousel__chevron team-carousel__chevron--down" aria-hidden="true" />
          </button>
        </div>

        <div className="team-carousel__feature">
          <MemberPhoto member={active} />
        </div>
      </div>

      <article className="card card--wide team-carousel__panel" aria-live="polite">
        <h3>{active.name}</h3>
        <p className="eyebrow">{active.role}</p>
        {about.bios[active.id] ? <p>{about.bios[active.id]}</p> : <PendingNote>{about.bioPending}</PendingNote>}
        {about.details[active.id] ? (
          <p>{about.details[active.id]}</p>
        ) : (
          <PendingNote>{about.detailsPending}</PendingNote>
        )}
        {active.linkedin ? (
          <a
            className="button button--secondary lift team-carousel__linkedin"
            href={active.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${about.linkedinLabel} ${active.name}`}
          >
            <LinkedInIcon size={18} /> LinkedIn
          </a>
        ) : (
          <PendingNote>{about.linksPending}</PendingNote>
        )}
      </article>

      <div className="team-carousel__dots">
        {members.map((member, index) => (
          <button
            key={member.id}
            type="button"
            className={`team-carousel__dot${index === activeIndex ? ' is-active' : ''}`}
            aria-label={`${about.showMember} ${member.name}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function MemberPhoto({ member }: { member: TeamMember }) {
  if (member.photo) return <img className="team-carousel__photo" src={member.photo} alt={member.name} />;

  return (
    <span className="team-carousel__photo team-carousel__photo--initials" aria-hidden="true">
      {initials(member.name)}
    </span>
  );
}

function initials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2);
}
