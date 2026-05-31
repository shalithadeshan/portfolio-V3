import ThemeToggle from "@/components/ThemeToggle";

const tabs = [
  { href: "#home", icon: "las la-home", label: "Home" },
  { href: "#about", icon: "las la-user-alt", label: "About" },
  { href: "#experience", icon: "lar la-star", label: "Experience" },
  { href: "#work", icon: "las la-briefcase", label: "Work" },
  { href: "#contact", icon: "las la-id-card", label: "Contact" },
];

export default function MobileTabs() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:hidden">
      <nav className="glass-nav flex items-center gap-1 rounded-full px-2 py-2">
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            aria-label={tab.label}
            className="grid h-10 w-10 place-items-center rounded-full text-lg text-muted transition-colors hover:text-accent"
          >
            <i className={tab.icon}></i>
          </a>
        ))}
        <span className="mx-1 h-6 w-px bg-line" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
