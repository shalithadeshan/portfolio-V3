import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import AuroraBackground from "@/components/AuroraBackground";

// Distinctive pairing: Bricolage Grotesque (expressive display) + Manrope
// (clean body) + Space Mono (technical labels). Exposed as CSS variables that
// the Tailwind v4 @theme maps to font-display / font-sans / font-mono.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shalitha Jayasekara — Full-Stack Software Engineer",
  description:
    "Portfolio of Shalitha Jayasekara — a full-stack software engineer building performant web applications with Angular, ASP.NET Core and React.",
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
      suppressHydrationWarning
      className={`${bricolage.variable} ${manrope.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Line Awesome icon font (la-* classes used throughout the components). */}
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </head>
      <body className="font-sans bg-bg text-fg antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuroraBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
