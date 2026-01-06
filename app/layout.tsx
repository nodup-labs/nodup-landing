import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ReactNode } from "react";

import { peyda } from "@/lib/font";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer1 from "./(app)/components/footer1";
import AnimatedBackground from "./(app)/components/AnimatedBackground";
import { Providers } from "./providers";
import { Ripple } from "@/components/ui/ripple";

export const metadata: Metadata = {
  title: {
    template: "nodup",
    default: "nodup",
  },
};

export default function RootLayout({
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
      
        <AnimatedBackground>
          <div className="absolute top-0 left-0 w-full h-full">
          <Ripple centerY="0%" />
      </div>
          <Providers>
            
            <Header />
            
            {children}
            <Footer1 />
          </Providers>
        </AnimatedBackground>
      </body>
    </html>
  );
}
