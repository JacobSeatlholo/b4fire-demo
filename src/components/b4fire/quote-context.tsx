"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import QuoteModal, { type QuotePreselection } from "@/components/b4fire/quote-modal";

type QuoteContextValue = {
  openQuote: (preselect?: QuotePreselection) => void;
};

const QuoteContext = createContext<QuoteContextValue>({ openQuote: () => {} });

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preselect, setPreselect] = useState<QuotePreselection | undefined>(undefined);

  const openQuote = useCallback((p?: QuotePreselection) => {
    setPreselect(p);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openQuote }), [openQuote]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          if (!o) setPreselect(undefined);
        }}
        preselect={preselect}
      />
    </QuoteContext.Provider>
  );
}
