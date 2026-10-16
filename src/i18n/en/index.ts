import type { Copy } from '../types';
import { cta, footer, meta, nav, notFound, site, whatsapp } from './site';
import { geo } from './geo';
import { privacy } from './privacy';

/** English copy. TODO: native-speaker review before launch (spec §10). */
export const en: Copy = { site, nav, cta, whatsapp, footer, meta, notFound, geo, privacy };
