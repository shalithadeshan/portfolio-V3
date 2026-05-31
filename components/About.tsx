import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const SKILL_GROUPS = [
  {
    title: "Languages & Frameworks",
    items: [
      "Angular",
      "ASP.NET Core",
      "React",
      "Next.js",
      "C#",
      "TypeScript",
      "HTML5",
      "CSS / SCSS",
      "Ionic",
    ],
  },
  {
    title: "Libraries & Tooling",
    items: [
      "NgRx",
      "Angular Signals",
      "RxJS",
      "EF Core",
      "Angular Material",
      "NgZorro",
      "SignalR",
    ],
  },
  {
    title: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    title: "Platforms & Tools",
    items: ["Docker", "Azure", "Google Cloud", "GitHub", "Postman", "Swagger"],
  },
];

const FACTS = [
  { icon: "las la-map-marker", text: "Gampaha, Sri Lanka" },
  { icon: "las la-graduation-cap", text: "BSc (Hons) in IT — SLIIT, 2022" },
  { icon: "las la-briefcase", text: "Full-Stack Engineer @ Cube360" },
];

export default function About() {
  return (
    <div className="min-h-screen py-28 md:py-36">
      <Reveal>
        <SectionHeading index="01" title="About Me" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="glass h-full rounded-3xl p-7 sm:p-9">
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a BSc (Hons) graduate and full-stack software engineer
              with{" "}
              <span className="text-fg">4+ years</span> of experience building
              and maintaining web applications across the stack. I work
              primarily with{" "}
              <span className="text-fg">Angular, ASP.NET Core and React</span>,
              and have boosted the performance of 8+ applications through
              debugging, refactoring and clean-architecture backends.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I enjoy collaborative, agile teams and am always looking for
              creative project opportunities.
            </p>

            <ul className="mt-7 space-y-3 border-t border-line pt-6">
              {FACTS.map((fact) => (
                <li
                  key={fact.text}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <i className={`${fact.icon} text-lg text-accent`} />
                  {fact.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-2">
          <div className="glass h-full rounded-3xl p-7 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Tech I work with
            </p>
            <div className="mt-5 space-y-5">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-sm text-fg">{group.title}</p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
