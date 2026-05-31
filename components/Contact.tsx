import Reveal from "@/components/Reveal";

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

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center py-28 md:py-36">
      <Reveal className="w-full">
        <div className="glass glow mx-auto max-w-2xl rounded-[2rem] p-10 text-center sm:p-14">
          <p className="font-mono text-sm text-accent">04 — What&apos;s next</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
            I&apos;m currently open to new opportunities in front-end or
            back-end. My inbox is always open — whether you have a question or
            just want to say hi, I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:shalithad8520jayasekara@gmail.com"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Say Hello
            </a>
          </div>

          <div className="mt-9 flex justify-center gap-6 text-2xl">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
