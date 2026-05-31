"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

type Tab = { key: string; label: string; content: ReactNode };

const TABS: Tab[] = [
  {
    key: "vertex",
    label: "Vertex",
    content: (
      <>
        <div>
          <p className="text-light-color text-2xl">
            Trainee Front-end developer{" "}
            <span>
              <Link href="/" className="text-secondary-color">
                @Vertex
              </Link>
            </span>
          </p>
          <p className="text-dark-color">March 2021 - September 2021</p>
        </div>
        <div className="text-darkest-color ml-5 mt-5 lg:pl-5">
          <ul className="list-outside">
            <li className="list-disc lg:w-3/4 text-lg text-justify">
              Worked with a team of 2 front-end and 2 back-end developers to
              build a hotel and restaurant management system.
            </li>
            <li className="list-disc lg:w-3/4 text-lg text-justify">
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Angular.
            </li>
            <li className="list-disc lg:w-3/4 text-lg text-justify">
              Gain a lot of experience working with the team.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];

export default function Experience() {
  const [activeKey, setActiveKey] = useState(TABS[0].key);
  // Mirror the old antd tabPosition: vertical tabs on desktop, horizontal on mobile.
  const [vertical, setVertical] = useState(true);

  useEffect(() => {
    const onResize = () => setVertical(window.innerWidth >= 600);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const active = TABS.find((t) => t.key === activeKey) ?? TABS[0];

  return (
    <div className="container content-center grid" style={{ height: "100vh" }}>
      <div className="flex flex-row">
        <p className="text-light-color">
          <span className="font-monospace text-secondary-color">02</span>{" "}
          Experience
        </p>
        <div className="border-t-2 ml-3 mt-3 px-14 inline-block border-secondary-color"></div>
      </div>
      <div className="lg:px-20 mt-10">
        <div className={vertical ? "flex flex-row" : "flex flex-col"}>
          <ul
            className={
              vertical
                ? "flex flex-col border-l-2 border-darkest-color/40 mr-8"
                : "flex flex-row border-b-2 border-darkest-color/40 mb-5"
            }
          >
            {TABS.map((tab) => {
              const isActive = tab.key === activeKey;
              return (
                <li key={tab.key}>
                  <button
                    type="button"
                    onClick={() => setActiveKey(tab.key)}
                    className={`px-4 py-2 font-monospace cursor-pointer transition-colors ${
                      isActive
                        ? "text-secondary-color"
                        : "text-dark-color hover:text-secondary-color"
                    } ${
                      isActive && vertical ? "border-l-2 -ml-0.5 border-secondary-color" : ""
                    } ${
                      isActive && !vertical
                        ? "border-b-2 -mb-0.5 border-secondary-color"
                        : ""
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex-1">{active.content}</div>
        </div>
      </div>
    </div>
  );
}
