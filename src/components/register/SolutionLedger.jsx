import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Solutions, each with its own supporting benefits. A two-up grid keeps a long
 * page (Universities carries six of these) from reading as one slab.
 */
export default function SolutionLedger({ title = "Our solutions", solutions, className }) {
  if (!solutions?.length) return null;

  return (
    <Section tint className={className}>
      <SectionHeading title={title} />

      <div className="grid gap-6 lg:grid-cols-2">
        {solutions.map((solution, index) => (
          <article
            key={index}
            className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-slate-200 sm:p-8"
          >
            {solution.subheading && (
              <h3 className="text-[1.15rem] leading-[1.35] text-slate-900">{solution.subheading}</h3>
            )}
            <p className="mt-3 text-[0.95rem] leading-[1.7] text-slate-600">{solution.body}</p>

            {solution.benefits?.length > 0 && (
              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex gap-3 text-[0.9rem] leading-[1.6] text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.6} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
