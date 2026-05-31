export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
