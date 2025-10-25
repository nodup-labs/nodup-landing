import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { peyda } from "@/lib/font";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Metronic SaaS",
    default: "Metronic SaaS",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <body
        dir="rtl"
        className={cn(
          "antialiased text-base text-foreground bg-background",
          peyda.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="saas-theme"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
