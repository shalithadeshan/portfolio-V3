"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ComponentProps } from "react";

export default function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemeProvider>) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
