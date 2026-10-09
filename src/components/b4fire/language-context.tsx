"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { COPY, isLang, type Copy, type Lang } from "@/lib/b4fire-i18n";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "b4fire-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: COPY.en,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Server render + first client render default to English (hydration-safe);
  // the stored preference is restored right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // Post-mount restore is intentional: reading localStorage during render would
      // break SSR hydration, so the sync must happen in an effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (isLang(stored) && stored !== "en") setLangState(stored);
    } catch {
      /* private mode etc. — stay on English */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "af" ? "af-ZA" : "en-ZA";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: COPY[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Compact EN | AFR segmented toggle — used in the navbar and mobile sheet. */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.nav.langAria}
      className={cn(
        "flex shrink-0 items-center rounded-full border border-navy-700 bg-navy-800/80 p-0.5",
        className
      )}
    >
      {(["en", "af"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          title={l === "en" ? "English" : "Afrikaans"}
          className={cn(
            "rounded-full px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-flame",
            lang === l ? "bg-flame text-white" : "text-slate-300 hover:text-white"
          )}
        >
          {l === "en" ? "EN" : "AFR"}
        </button>
      ))}
    </div>
  );
}
