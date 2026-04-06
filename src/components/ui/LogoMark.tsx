type LogoMarkProps = {
  className?: string;
};

function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/logos/alignAgency.png"
        alt="alignAgency"
        className="h-5 w-auto object-contain"
      />
    </div>
  );
}

export default LogoMark;
