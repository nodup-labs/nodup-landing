import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.css";
import { peyda } from "@/lib/font";

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
