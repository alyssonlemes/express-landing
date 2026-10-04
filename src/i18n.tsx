import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";
export type Copy = { pt: string; en: string };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (copy: Copy) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("cocapec.lang");
    if (stored === "en" || stored === "pt") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang(next) {
        setLangState(next);
        localStorage.setItem("cocapec.lang", next);
      },
      t(copy) {
        return copy[lang];
      },
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useI18n must be used within LanguageProvider");
  return context;
}
