import { cn } from "@/lib/utils";

/** A page section with consistent rhythm and an optional tinted ground. */
export function Section({ tint = false, className, children, ...rest }) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", tint && "bg-slate-50", className)}
      {...rest}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

/** Section heading with an optional lead paragraph. */
export function SectionHeading({ title, lead, align = "left", className }) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <h2 className="text-[clamp(1.6rem,3vw,2.35rem)] leading-[1.16]">{title}</h2>
      {lead && (
        <p className={cn("mt-4 text-[1.02rem] leading-[1.7] text-slate-500", align === "left" && "measure")}>
          {lead}
        </p>
      )}
    </div>
  );
}
