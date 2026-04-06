import type { PropsWithChildren } from "react";

function GradientText({ children }: PropsWithChildren) {
  return (
    <span className="bg-accent-gradient bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export default GradientText;
