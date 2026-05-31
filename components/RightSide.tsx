export default function RightSide() {
  return (
    <div className="fixed bottom-0 right-8 z-40 hidden flex-col items-center gap-6 lg:flex">
      <a
        href="mailto:shalithad8520jayasekara@gmail.com"
        className="font-mono text-xs tracking-widest text-muted transition-colors duration-300 hover:text-accent [writing-mode:vertical-rl]"
      >
        shalithad8520jayasekara@gmail.com
      </a>
      <span className="h-24 w-px bg-line" />
    </div>
  );
}
