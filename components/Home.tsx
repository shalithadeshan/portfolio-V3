"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import profile from "@/assets/profile.jpg";

const SENTENCES = [
  "Web Applications",
  "Full-Stack Solutions",
  "Scalable Backends",
];
const TYPING_SPEED = 100;
const DELETING_SPEED = 80;
const PAUSE_AFTER_TYPED = 1500;

function useTypewriter(sentences: string[]) {
  const [text, setText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = sentences[sentenceIndex];
    const atFullWord = !deleting && text === current;
    const delay = atFullWord
      ? PAUSE_AFTER_TYPED
      : deleting
        ? DELETING_SPEED
        : TYPING_SPEED;

    const timeout = setTimeout(() => {
      if (atFullWord) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setSentenceIndex((i) => (i + 1) % sentences.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, sentenceIndex, sentences]);

  return text;
}

const STATS = [
  { value: "4+", label: "Years" },
  { value: "8+", label: "Apps shipped" },
  { value: "Full-stack", label: "Angular · .NET · React" },
];

export default function Home() {
  const typed = useTypewriter(SENTENCES);

  return (
    <div className="flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <Reveal>
            <p className="font-mono text-sm text-accent">{"// hello, i'm"}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Shalitha
              <br />
              <span className="text-gradient">Jayasekara.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 font-display text-2xl text-muted sm:text-3xl">
              I build{" "}
              <span className="text-fg">{typed}</span>
              <span className="ml-0.5 animate-pulse text-accent">|</span>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              A full-stack software engineer with 4+ years building performant
              web applications with Angular, ASP.NET Core and React — from clean
              architecture backends to polished, responsive frontends.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="glass rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-accent"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl px-4 py-3"
                >
                  <p className="font-display text-xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <Reveal delay={200} className="flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                }}
              />
              <div className="glass glow relative overflow-hidden rounded-[2rem] p-2">
                <Image
                  src={profile}
                  alt="Shalitha Jayasekara"
                  priority
                  className="h-72 w-72 rounded-[1.6rem] object-cover sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
