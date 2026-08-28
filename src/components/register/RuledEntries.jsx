import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * A grid of points — needs, features or benefits. The prop shape is unchanged
 * so every page keeps working; the presentation is a clean card grid.
 */
export default function RuledEntries({ title, items, className, tint = false }) {
  if (!items?.length) return null;

  return (
    <Section tint={tint} className={className}>
      {title && <SectionHeading title={title} />}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={index}
            className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
          >
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Check className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <p className="text-[0.96rem] leading-[1.65] text-slate-600">{item}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
