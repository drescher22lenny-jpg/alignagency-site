import type { HTMLAttributes } from "react";
import { cn } from "../../styles/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-soft",
        className,
      )}
      {...props}
    />
  );
}

export default GlassCard;
