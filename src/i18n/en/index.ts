import type { Copy } from '../types';
import { cta, footer, meta, nav, notFound, site, whatsapp } from './site';
import { geo } from './geo';
import { privacy } from './privacy';
import { services } from './services';
import { home } from './home';
import { work } from './work';
import { about } from './about';
import { contact } from './contact';

/** English copy. TODO: native-speaker review before launch (spec §10). */
export const en: Copy = { site, nav, cta, whatsapp, footer, meta, notFound, services, home, work, about, contact, geo, privacy };
