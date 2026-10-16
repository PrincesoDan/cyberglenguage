import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ResolvedRoute } from './routes';

const RouteContext = createContext<ResolvedRoute | null>(null);

interface RouteProviderProps {
  route: ResolvedRoute;
  children: ReactNode;
}

/** Cada navegación recarga la página (enlaces <a> normales), así que la ruta es fija por carga. */
export function RouteProvider({ route, children }: RouteProviderProps) {
  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>;
}

export function useRoute(): ResolvedRoute {
  const route = useContext(RouteContext);
  if (!route) {
    throw new Error('useRoute debe usarse dentro de <RouteProvider>');
  }
  return route;
}
