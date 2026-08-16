import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'es' | 'en';

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* localStorage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* localStorage unavailable */
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, toggle: () => setLang((l) => (l === 'es' ? 'en' : 'es')) }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

export type Bilingual<T> = { es: T; en: T };

export function useT<T>(dict: Bilingual<T>): T {
  const { lang } = useLanguage();
  return dict[lang];
}
