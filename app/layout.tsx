import type { Metadata } from "next";
import { Nunito, Space_Mono, Shalimar } from "next/font/google";
import "./globals.css";

// Self-hosted Google Fonts via next/font. Each exposes a CSS variable that the
// Tailwind v4 @theme (globals.css) maps to font-nunito / font-monospace / font-cursive.
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito-loaded",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-loaded",
  display: "swap",
});

const shalimar = Shalimar({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shalitha Deshan",
  description:
    "Portfolio of Shalitha Jayasekara — a front-end software engineer.",
  icons: {
    icon: "/fevicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${spaceMono.variable} ${shalimar.variable}`}
    >
      <head>
        {/* Line Awesome icon font (la-* classes used throughout the components). */}
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </head>
      <body className="font-nunito bg-primary-color">{children}</body>
    </html>
  );
}
