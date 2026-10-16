import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { PendingNote, PendingText } from '../components/PendingNote';
import { SiteLayout } from '../components/SiteLayout';
import { TEAM } from '../data/team';
import type { TeamMember } from '../data/team';
import { splitPendingMarkers } from '../lib/pending';
import './AboutPage.css';

/** Nosotros (brief web): historia, misión, equipo y cierre con agenda + llamada. */
export function AboutPage() {
  const { copy } = useLanguage();
  const { about } = copy;

  return (
    <SiteLayout>
      <PageIntro eyebrow={about.eyebrow} title={about.title} icon="/brand/icons/conocenos.png" />

      <section className="section">
        <div className="container about-story">
          <div>
            <h2>{about.storyTitle}</h2>
            <p className="lead">
              <PendingText segments={splitPendingMarkers(about.story)} />
            </p>
          </div>
          <div>
            <h2>{about.missionTitle}</h2>
            <p className="lead">{about.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <h2>{about.teamTitle}</h2>
          <div className="about-team">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={about.closing.title} body={about.closing.body} secondary="call" />
    </SiteLayout>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const { copy } = useLanguage();
  const { about } = copy;
  const bio = about.bios[member.id];
  const details = about.details[member.id];

  return (
    <article className="card about-member">
      {member.photo ? (
        <img className="about-member__photo" src={member.photo} alt={member.name} width={120} height={120} />
      ) : (
        <span className="about-member__photo about-member__photo--initials" aria-hidden="true">
          {initials(member.name)}
        </span>
      )}
      <h3>{member.name}</h3>
      <p className="eyebrow">{member.role}</p>
      {bio ? <p>{bio}</p> : <PendingNote>{about.bioPending}</PendingNote>}

      {/* <details> es nativo: accesible y operable con teclado sin JS (brief web: "plegable con más detalles"). */}
      <details className="about-member__details">
        <summary>{about.detailsLabel}</summary>
        {details ? <p>{details}</p> : <PendingNote>{about.detailsPending}</PendingNote>}
      </details>
    </article>
  );
}

function initials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2);
}
