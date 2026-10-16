import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { ServiceAccordion } from '../components/ServiceAccordion';
import { SiteLayout } from '../components/SiteLayout';
import {
  ADD_ON_TARGETS,
  FEATURED_SERVICE,
  INDIVIDUAL_SERVICES,
  MAIN_SERVICES,
  RECOMMENDED_SERVICE,
  SERVICE_IDS,
} from '../data/services';
import type { ServiceId } from '../data/services';
import { serviceFromHash } from '../lib/anchors';
import './ServicesPage.css';

/** Los 4 servicios en una página, sin precios (brief web, "Servicios"). */
export function ServicesPage() {
  const { copy } = useLanguage();
  const [openIds, setOpenIds] = useState<ReadonlySet<ServiceId>>(() => initialOpen(window.location.hash));

  // El navegador salta al #ancla antes de que React pinte la página, así que
  // al llegar desde otra página el salto hay que hacerlo a mano.
  useEffect(() => {
    const id = serviceFromHash(window.location.hash, SERVICE_IDS);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  // Un enlace con ancla (#anuncios) abre ese plegable, también si se navega
  // a otra ancla sin recargar.
  useEffect(() => {
    function onHashChange() {
      const id = serviceFromHash(window.location.hash, SERVICE_IDS);
      if (id) setOpenIds((current) => new Set(current).add(id));
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function toggle(id: ServiceId) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function renderService(id: ServiceId) {
    return (
      <ServiceAccordion
        key={id}
        id={id}
        open={openIds.has(id)}
        onToggle={toggle}
        recommended={id === RECOMMENDED_SERVICE}
        featured={id === FEATURED_SERVICE}
        withAddOn={ADD_ON_TARGETS.includes(id)}
      />
    );
  }

  return (
    <SiteLayout>
      <PageIntro
        eyebrow={copy.services.eyebrow}
        title={copy.services.title}
        lead={copy.services.intro}
        icon="/brand/icons/servicios.png"
      />
      <section className="section section--light">
        <div className="container services-page__list">{MAIN_SERVICES.map(renderService)}</div>
      </section>
      <section className="section">
        <div className="container services-page__list">
          <h2 className="services-page__group-title">{copy.services.individualTitle}</h2>
          {INDIVIDUAL_SERVICES.map(renderService)}
        </div>
      </section>
      <ClosingCta title={copy.services.closing.title} body={copy.services.closing.body} />
    </SiteLayout>
  );
}

function initialOpen(hash: string): ReadonlySet<ServiceId> {
  const id = serviceFromHash(hash, SERVICE_IDS);
  return new Set(id ? [id] : []);
}
