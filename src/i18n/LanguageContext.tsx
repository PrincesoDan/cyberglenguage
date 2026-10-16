import { createContext, useContext, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Copy } from './types';
import type { Language } from './language';
import { es } from './es';
import { en } from './en';

export type { Language } from './language';

const COPY_BY_LANGUAGE: Record<Language, Copy> = { es, en };

interface LanguageContextValue {
  language: Language;
  copy: Copy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  /** Resuelto desde la URL (routes.ts): el idioma no se detecta del navegador. */
  language: Language;
  children: ReactNode;
}

export function LanguageProvider({ language, children }: LanguageProviderProps) {
  // El atributo lang del documento debe seguir al idioma (accesibilidad y SEO).
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({ language, copy: COPY_BY_LANGUAGE[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }
  return context;
}
