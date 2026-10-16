/** Ids = anclas públicas (spec §6, Servicios). Se enlazan desde anuncios: no cambiarlos. */
export type ServiceId = 'redes' | 'anuncios' | 'comunidad' | 'produccion';

export const SERVICE_IDS: readonly ServiceId[] = ['redes', 'anuncios', 'comunidad', 'produccion'];

export const MAIN_SERVICES: readonly ServiceId[] = ['redes', 'anuncios', 'comunidad'];

/** "Servicios individuales": para quien solo necesita producción (brief web). */
export const INDIVIDUAL_SERVICES: readonly ServiceId[] = ['produccion'];

export const RECOMMENDED_SERVICE: ServiceId = 'redes';

/** Servicio a impulsar: peso visual alto (brief web). */
export const FEATURED_SERVICE: ServiceId = 'anuncios';

/** Plegables que terminan con el recuadro "+ Atención a tu comunidad". */
export const ADD_ON_TARGETS: readonly ServiceId[] = ['redes', 'anuncios'];
