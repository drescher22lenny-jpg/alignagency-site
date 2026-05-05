import type { HTMLAttributes } from "react";
import { cn } from "../../styles/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-black/[0.08] bg-[#fffaf3]/90 shadow-soft",
        className,
      )}
      {...props}
    />
  );
}

export default GlassCard;
