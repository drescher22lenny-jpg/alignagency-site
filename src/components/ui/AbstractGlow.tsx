type AbstractGlowProps = {
  className?: string;
};

function AbstractGlow({ className = "" }: AbstractGlowProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-accent-gradient opacity-30 blur-3xl ${className}`}
      aria-hidden="true"
    />
  );
}

export default AbstractGlow;
