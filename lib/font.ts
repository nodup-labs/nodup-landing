import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const peyda = localFont({
  src: [
    {
      path: "../public/font/woff2/PeydaWebFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/woff2/PeydaWebFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/woff2/PeydaWebFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/woff2/PeydaWebFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/woff2/PeydaWebFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/woff2/PeydaWebFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/font/woff2/PeydaWebFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
});
