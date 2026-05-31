"use client";

import { useEffect, useState } from "react";

const SENTENCES = ["Web Applications", "Mobile Applications"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 80;
const PAUSE_AFTER_TYPED = 1500;

/** Minimal typewriter loop that replaces react-text-typist. */
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

    // All state transitions happen inside the timeout (asynchronously) so we
    // never call setState synchronously in the effect body.
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

export default function Home() {
  const typed = useTypewriter(SENTENCES);

  return (
    <div
      className="container content-center grid gap-0"
      style={{ height: "100vh" }}
    >
      <p className="text-secondary-color font-cursive text-4xl">Hello, I am</p>
      <p className="font-nunito font-bold text-light-color text-4xl md:text-7xl">
        Shalitha Jayasekara.
      </p>
      <div className="flex flex-row">
        <p className="font-nunito text-dark-color text-2xl md:text-6xl">
          I build
        </p>
        &nbsp; &nbsp;
        <p className="font-nunito text-dark-color text-2xl md:text-6xl">
          {typed}
          <span className="animate-pulse">|</span>
        </p>
      </div>
      <div>
        <p className="font-nunito text-darkest-color text-xl md:text-2xl">
          I am a software engineer specializing in front end.
        </p>
      </div>
      <div className="flex justify-start mt-5 visible md:invisible">
        <div className="rounded-md border-2 w-max border-secondary-color py-2 px-10 text-secondary-color hover:bg-secondary-color hover:text-black cursor-pointer">
          Resume
        </div>
      </div>
    </div>
  );
}
