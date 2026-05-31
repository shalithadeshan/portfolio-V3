"use client";

import { useState, useEffect } from "react";

type GitHubInfo = { stars: number | null; forks: number | null };

export default function Footer() {
  const [githubInfo, setGitHubInfo] = useState<GitHubInfo>({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/shalithadeshan/portfolio-V3")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({ stars: stargazers_count, forks: forks_count });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer className="border-t border-line py-10 text-center">
      <a
        href="https://github.com/shalithadeshan/portfolio-V3.git"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        <p>Designed &amp; built by Shalitha Jayasekara</p>
        <div className="mt-2 flex justify-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1">
            <i className="las la-star" />
            {githubInfo.stars ?? "—"}
          </span>
          <span className="inline-flex items-center gap-1">
            <i className="las la-code-branch" />
            {githubInfo.forks ?? "—"}
          </span>
        </div>
      </a>
    </footer>
  );
}
