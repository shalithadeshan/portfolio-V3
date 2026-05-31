const socials = [
  {
    href: "https://www.linkedin.com/in/shalitha-jayasekara-194215180/",
    icon: "lab la-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/shalithadeshan",
    icon: "lab la-github",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/ShalithaDeshsn",
    icon: "lab la-twitter",
    label: "Twitter",
  },
];

export default function LeftSide() {
  return (
    <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-5 lg:flex">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-xl text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent"
        >
          <i className={social.icon}></i>
        </a>
      ))}
      <span className="mt-2 h-24 w-px bg-line" />
    </div>
  );
}
