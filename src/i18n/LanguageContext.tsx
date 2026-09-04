import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Copy } from './types';
import { es } from './es';
import { en } from './en';

export type Language = 'es' | 'en';

const COPY_BY_LANGUAGE: Record<Language, Copy> = { es, en };

/** Idioma por defecto: el brief §08 posiciona la marca en español. */
const DEFAULT_LANGUAGE: Language = 'es';

interface LanguageContextValue {
  language: Language;
  copy: Copy;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Detecta el idioma del navegador; cualquier cosa que no sea inglés cae al default. */
function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectLanguage);

  // El atributo lang del documento debe seguir al idioma elegido (accesibilidad y SEO).
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'es' ? 'en' : 'es'));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, copy: COPY_BY_LANGUAGE[language], toggleLanguage }),
    [language, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }
  return context;
}
