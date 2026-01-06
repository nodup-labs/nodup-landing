'use client';

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      storageKey="saas-theme"
      disableTransitionOnChange
      enableColorScheme
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
