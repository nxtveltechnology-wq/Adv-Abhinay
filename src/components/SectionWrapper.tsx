import { type ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "light" | "dark" | "none";
}

const SectionWrapper = ({
  children,
  className,
  id,
  background = "default",
}: SectionWrapperProps) => {
  const bgStyles = {
    default: "bg-background",
    light: "bg-slate-50",
    dark: "bg-primary text-white",
    none: "",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full",
        bgStyles[background],
        className,
      )}
    >
      <div className="max-w-7xl mx-auto h-full">{children}</div>
    </section>
  );
};

export default SectionWrapper;
