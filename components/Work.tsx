import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type ProjectLink = { label: string; icon: string; href: string };

type Project = {
  title: string;
  company: string;
  description: string;
  tech: string[];
  image: string;
  links?: ProjectLink[];
};

const PROJECTS: Project[] = [
  {
    title: "NetPulse",
    company: "Cube360",
    description:
      "A React Native (Expo) mobile app for running internet speed tests and capturing device, network and location context — shipped as two operator-branded APKs (Dialog & Airtel) from a single codebase.",
    tech: ["React Native", "Expo", "TypeScript", "Apps Script"],
    image: "/work/netpulse.png",
  },
  {
    title: "Flower — E-Commerce Storefront",
    company: "Cube360",
    description:
      "A modern e-commerce storefront with product catalog, cart, checkout, payments and wholesale ordering — built on the Next.js App Router with Redux Toolkit and GSAP-driven motion.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "GSAP"],
    image: "/work/flower.png",
  },
  {
    title: "FLMS — Point-of-Sale System",
    company: "Cube360",
    description:
      "A full-stack point-of-sale system — an Angular 17 frontend (NgRx, NgZorro) on a .NET 8 clean-architecture backend, with real-time updates over SignalR and Docker-based deployment.",
    tech: ["Angular", ".NET 8", "NgRx", "SignalR", "Docker"],
    image: "/work/flms.png",
  },
  {
    title: "Vehicle Bidding Management System",
    company: "Cube360",
    description:
      "An automation-focused auction platform that synchronises 85,000+ auction items daily, enabling real-time bidding with predefined auction-paper translations.",
    tech: ["Angular", ".NET", "SignalR", "SQL Server"],
    image: "/work/vehicle-bidding.png",
  },
  {
    title: "Pharmacare ERP",
    company: "Cube360",
    description:
      "A pharmacy ERP system with tuned data-retrieval algorithms (40–50% faster operations) and a Docker + Heroku CI/CD pipeline that cut update discrepancies by 40%+.",
    tech: ["Angular", ".NET", "Docker", "Heroku"],
    image: "/work/pharmacare.png",
  },
  {
    title: "Fuel Station Subscription Platform",
    company: "Cube360",
    description:
      "A subscription-centered fuel station application backed by a clean-architecture API, giving operators tools that streamline daily workflows.",
    tech: ["Angular", "ASP.NET Core", "PostgreSQL"],
    image: "/work/fuel-station.png",
  },
  {
    title: "RMS Admin Application",
    company: "Cube360",
    description:
      "An Angular-workspace admin frontend for a Restaurant Management System that cut administrative workload by 30+ hours monthly across operations.",
    tech: ["Angular", "Angular Material", "NgRx"],
    image: "/work/rms-admin.png",
  },
  {
    title: "Credit Card Offers",
    company: "Personal Project",
    description:
      "A platform that aggregates Sri Lankan credit-card offers: a Python/Selenium scraper collects products and merchant promotions from six banks into MySQL, and a Laravel 12 frontend lets users browse, filter and compare cards side by side.",
    tech: ["Laravel", "PHP", "Python", "Selenium", "MySQL"],
    image: "/work/credit-card.png",
  },
  {
    title: "Sri Lanka Covid-19 Dashboard",
    company: "Personal Project",
    description:
      "A web application that shows the latest state of the COVID-19 situation in Sri Lanka.",
    tech: ["React", "Covid-19 API", "Bootstrap"],
    image: "/work/covid-19-dashboard.png",
    links: [
      {
        label: "GitHub",
        icon: "lab la-github",
        href: "https://github.com/shalithadeshan/covid-19_dashboard.git",
      },
      {
        label: "Live",
        icon: "las la-external-link-alt",
        href: "https://shalithadeshan.github.io/covid-19_dashboard/",
      },
    ],
  },
];

export default function Work() {
  return (
    <div className="min-h-screen py-28 md:py-36">
      <Reveal>
        <SectionHeading index="03" title="Work" />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 100}>
            <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
              </div>

              <div className="flex grow flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {project.company}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-3 grow text-[15px] leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.links && (
                  <div className="mt-5 flex gap-4 text-2xl">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
