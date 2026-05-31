"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="glass grid h-10 w-10 place-items-center rounded-full text-fg/80 transition-colors hover:text-accent cursor-pointer"
    >
      {/* Icons are swapped purely via the `dark` class (set by next-themes
          before hydration), so there's no flash and no hydration mismatch. */}
      <i className="las la-moon text-lg dark:hidden" />
      <i className="las la-sun hidden text-lg dark:block" />
    </button>
  );
}
