import { useStruck } from "@/components/register/useStruck";
import { cn } from "@/lib/utils";

/**
 * Headline numbers. These are the argument TRS actually makes — days saved,
 * volumes handled — so they get scale, and each keeps the qualifier it was
 * recorded under.
 */
export default function RunningTotals({ items, caption, className, dark = false }) {
  const [ref, struck] = useStruck(0.25);

  return (
    <section ref={ref} className={cn(dark && "bg-slate-900", className)}>
      <div className="container-page">
        <dl
          className={cn(
            "grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
            dark ? "text-white" : "",
          )}
        >
          {items.map((item, index) => (
            <div
              key={item.label}
              className={cn(struck && "reveal")}
              style={struck ? { animationDelay: `${index * 70}ms` } : undefined}
            >
              <dd
                className={cn(
                  "text-[clamp(2.4rem,4.6vw,3.4rem)] font-extrabold leading-[1] tracking-[-0.03em]",
                  dark ? "text-white" : "text-brand-700",
                )}
              >
                {item.value}
              </dd>
              <dt className={cn("mt-3 text-[0.95rem] leading-[1.6]", dark ? "text-slate-300" : "text-slate-600")}>
                {item.label}
              </dt>
              {item.note && (
                <p
                  className={cn(
                    "mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.09em]",
                    dark ? "text-slate-400" : "text-slate-400",
                  )}
                >
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
