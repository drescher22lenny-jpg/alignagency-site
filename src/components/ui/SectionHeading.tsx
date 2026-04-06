import GradientText from "./GradientText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="text-xs font-medium uppercase tracking-[0.32em] text-white/55">
        <GradientText>{eyebrow}</GradientText>
      </span>
      <h2 className="font-display text-3xl leading-tight text-primary-light sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-white/65 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
