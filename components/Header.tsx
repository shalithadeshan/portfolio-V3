import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#about", index: "01", label: "About" },
  { href: "#experience", index: "02", label: "Experience" },
  { href: "#work", index: "03", label: "Work" },
  { href: "#contact", index: "04", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full py-2.5 pl-5 pr-2.5">
        <a
          href="#home"
          className="font-display text-lg font-extrabold tracking-tight"
        >
          Shalitha<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
              >
                <span className="font-mono text-xs text-accent">
                  {item.index}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-accent/60 px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-bg sm:inline-block"
          >
            Résumé
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
