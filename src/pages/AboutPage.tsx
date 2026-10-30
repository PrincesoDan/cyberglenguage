import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { SiteLayout } from '../components/SiteLayout';
import { TeamCarousel } from '../components/TeamCarousel';
import { TEAM, TEAM_PHOTO } from '../data/team';
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
              {about.story}
            </p>
          </div>
          <div>
            <h2>{about.missionTitle}</h2>
            <p className="lead">{about.mission}</p>
          </div>
        </div>
        <div className="container">
          <img
            className="about-photo"
            src={TEAM_PHOTO}
            alt={about.teamPhotoAlt}
            width={1600}
            height={1067}
            loading="lazy"
          />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <h2>{about.teamTitle}</h2>
          <TeamCarousel members={TEAM} />
        </div>
      </section>

      <ClosingCta title={about.closing.title} body={about.closing.body} secondary="call" />
    </SiteLayout>
  );
}
