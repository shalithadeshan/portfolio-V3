"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Role = { title: string; period: string; bullets: string[] };
type Company = { key: string; label: string; roles: Role[] };

const COMPANIES: Company[] = [
  {
    key: "cube360",
    label: "Cube360",
    roles: [
      {
        title: "Full Stack Software Engineer",
        period: "Feb 2023 — Present",
        bullets: [
          "Orchestrated the design of an admin application frontend using an Angular workspace, streamlining management tasks within the RMS to cut administrative workload by 30+ hours monthly across restaurant operations.",
          "Spearheaded daily-workflow refinements via a newly designed, subscription-centered fuel station application, prioritising improvements based on direct end-user feedback throughout development.",
          "Architected an efficient backend API for subscription management following clean architecture guidelines, giving fuel station operators tools that elevated daily workflow efficiency and overall business performance.",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Jan 2022 — Jan 2023",
        bullets: [
          "Developed key features within an automation-focused Vehicle Bidding Management System, synchronising thousands of auction listings seamlessly to allow real-time updates during events.",
          "Coordinated between clients and developers to define specifications for a comprehensive web application, implementing streamlined Angular + .NET backend APIs that improved system performance by 30%.",
          "Automated critical tasks and optimised user experience, synchronising 85,000+ auction items daily and enabling efficient bidding with predefined auction-paper translations.",
        ],
      },
      {
        title: "Software Engineer Trainee",
        period: "Jan 2022 — Apr 2023",
        bullets: [
          "Played an instrumental role in building the 'Pharmacare' ERP system, executing coding solutions that improved daily operation speeds by 40–50%.",
          "Enhanced data-retrieval processes by tuning existing algorithms, yielding a 40–50% improvement in daily operations for pharmacy management systems.",
          "Designed and implemented a CI/CD process via Docker integration with Heroku, achieving a 40%+ reduction in operational discrepancies during software updates.",
        ],
      },
    ],
  },
  {
    key: "vertex",
    label: "Vertex",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "Jan 2021 — Dec 2021",
        bullets: [
          "Developed and optimised Hotel (HMS) and Restaurant (RMS) Management Systems, achieving a 30–35% reduction in daily operational tasks and a 45% productivity boost across two restaurant locations.",
          "Designed modular Angular components that reduced redundancy through reusable elements, saving roughly 60 hours per quarter during development.",
          "Authored 20+ user-story drafts for core functional requirements, strengthening team collaboration and improving sprint completion rates.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const [activeKey, setActiveKey] = useState(COMPANIES[0].key);
  const active = COMPANIES.find((c) => c.key === activeKey) ?? COMPANIES[0];

  return (
    <div className="min-h-screen py-28 md:py-36">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <Reveal delay={100}>
        <div className="glass rounded-3xl p-6 sm:p-9">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Company tabs — horizontal on mobile, vertical on desktop */}
            <ul className="flex shrink-0 gap-2 overflow-x-auto border-line md:flex-col md:gap-1 md:border-l md:pl-0">
              {COMPANIES.map((company) => {
                const isActive = company.key === activeKey;
                return (
                  <li key={company.key}>
                    <button
                      type="button"
                      onClick={() => setActiveKey(company.key)}
                      className={`w-full whitespace-nowrap px-4 py-2.5 text-left font-mono text-sm transition-colors md:-ml-px md:border-l-2 ${
                        isActive
                          ? "text-accent md:border-accent"
                          : "text-muted hover:text-fg md:border-transparent"
                      }`}
                    >
                      {company.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Roles for the active company */}
            <div className="flex-1 space-y-9">
              {active.roles.map((role) => (
                <div key={role.title} className="relative pl-6">
                  <span className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-[3px] rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
                  <span className="absolute left-[2px] top-2 h-full w-px bg-line" />
                  <h3 className="text-xl font-semibold text-fg">
                    {role.title}{" "}
                    <span className="text-accent">@ {active.label}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted">{role.period}</p>
                  <ul className="mt-3 space-y-2">
                    {role.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <i className="las la-angle-right mt-1.5 text-xs text-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
