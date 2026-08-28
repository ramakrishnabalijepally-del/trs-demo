import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { logoByPath } from "@/data/productLogos";
import { Section, SectionHeading } from "@/components/ui/Section";

/** Related products, as clean linked cards. */
export default function CrossReferences({ title = "Related products", items, className }) {
  if (!items?.length) return null;

  return (
    <Section className={className}>
      <SectionHeading title={title} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const logo = logoByPath[item.to];
          return (
            <Link
              key={`${item.to}-${item.label}`}
              to={item.to}
              className="group flex flex-col rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] hover:ring-brand-200"
            >
              <span className="flex h-10 items-center">
                {logo ? (
                  <img src={logo} alt="" className="max-h-8 w-auto max-w-[8rem] object-contain object-left" />
                ) : (
                  <span className="text-[1.02rem] font-bold text-slate-900">{item.label}</span>
                )}
              </span>
              <span className="mt-5 text-[0.95rem] font-semibold text-slate-800">{item.label}</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-brand-600">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
