import type { Copy } from '../types';
import { cta, footer, meta, nav, notFound, site, whatsapp } from './site';
import { geo } from './geo';
import { privacy } from './privacy';
import { services } from './services';
import { home } from './home';
import { work } from './work';

/**
 * Copy en español. Fuentes: brief de marca y brief web de Cyber Positioning
 * (temp/, no versionado). Cuando difieren en el copy, manda el de marca
 * (spec §1).
 */
export const es: Copy = { site, nav, cta, whatsapp, footer, meta, notFound, services, home, work, geo, privacy };
