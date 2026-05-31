/**
 * Fixed, full-viewport atmospheric background: three slowly drifting,
 * heavily-blurred color blobs (the "aurora") plus a faint grain overlay.
 * Sits behind everything via a negative z-index. Purely decorative.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ opacity: "var(--aurora-opacity)" }}
    >
      <div
        className="absolute -left-[10%] -top-[15%] h-[55vmax] w-[55vmax] rounded-full blur-[120px] animate-aurora-1"
        style={{
          background:
            "radial-gradient(circle at center, var(--aurora-amber), transparent 70%)",
        }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[50vmax] w-[50vmax] rounded-full blur-[120px] animate-aurora-2"
        style={{
          background:
            "radial-gradient(circle at center, var(--aurora-teal), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] h-[55vmax] w-[55vmax] rounded-full blur-[130px] animate-aurora-3"
        style={{
          background:
            "radial-gradient(circle at center, var(--aurora-rose), transparent 70%)",
        }}
      />
      {/* Grain overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
