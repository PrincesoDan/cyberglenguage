import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { GeoHero } from '../components/GeoHero';
import { GeoServices } from '../components/GeoServices';
import { Method } from '../components/Method';
import { Problem } from '../components/Problem';
import { SiteLayout } from '../components/SiteLayout';
import { StrategyBand } from '../components/StrategyBand';

/** Página de CyberLanguage, la línea GEO (spec §6). Destino del redirect de cyberlanguage.io. */
export function GeoPage() {
  const { copy } = useLanguage();
  const { closing } = copy.geo;

  return (
    <SiteLayout>
      <GeoHero />
      <Problem />
      <Method />
      <GeoServices />
      <StrategyBand />
      <ClosingCta eyebrow={closing.eyebrow} title={closing.title} body={closing.body} />
    </SiteLayout>
  );
}
