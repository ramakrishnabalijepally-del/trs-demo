import { useLocation } from "react-router-dom";
import Button from "@/components/ui/Button";
import { folioFor } from "@/data/register";
import { cn } from "@/lib/utils";

/**
 * Page hero: a clear title, a supporting line, one primary action, and the
 * product's photograph or wordmark alongside it.
 */
export default function PageOpening({ title, description, label, plate, plateCaption, action, className }) {
  const { pathname } = useLocation();
  const entry = folioFor(pathname);
  const media = plate || label;

  return (
    <header className={cn("relative overflow-hidden bg-slate-50", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-brand-100/50 blur-3xl"
      />
      <div className="container-page relative py-14 sm:py-18 lg:py-24">
        <div className={cn("grid items-center gap-10 lg:gap-16", media && "lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]")}>
          <div className="reveal">
            <p className="mb-3 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-brand-700">
              {entry.section?.split("—")[0]?.trim() || "TRS Forms"}
            </p>
            <h1 className="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.08]">{title}</h1>
            {description && (
              <p className="measure mt-5 text-[1.08rem] leading-[1.7] text-slate-600">{description}</p>
            )}
            {action !== null && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to={action?.to ?? "/product-demo-enquiry"} size="lg">
                  {action?.label ?? "Request information"}
                </Button>
                <Button to="/office-locations" variant="secondary" size="lg">
                  Talk to us
                </Button>
              </div>
            )}
          </div>

          {media && (
            <figure className="reveal m-0" style={{ animationDelay: "90ms" }}>
              {plate ? (
                <img
                  src={plate}
                  alt={plateCaption ?? ""}
                  className="block aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover shadow-[var(--shadow-card)]"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[var(--radius-card)] bg-white p-10 shadow-[var(--shadow-card)]">
                  <img src={label} alt="" className="max-h-20 w-full object-contain" />
                </div>
              )}
            </figure>
          )}
        </div>
      </div>
    </header>
  );
}
