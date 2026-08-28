import { useLocation } from "react-router-dom";
import PageOpening from "@/components/register/PageOpening";
import RuledEntries from "@/components/register/RuledEntries";
import SolutionLedger from "@/components/register/SolutionLedger";
import CrossReferences from "@/components/register/CrossReferences";
import MinuteBand from "@/components/register/MinuteBand";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";
import Plate from "@/components/register/Plate";
import { Section, SectionHeading } from "@/components/ui/Section";
import { logoByPath, plateByPath } from "@/data/productLogos";

/** Shared page shell for market, product and service pages. */
export default function RegisterPage({ content }) {
  const { pathname } = useLocation();
  const label = logoByPath[pathname];
  const plate = plateByPath[pathname];

  const {
    title,
    subtitle,
    intro,
    needs,
    needsTitle = "What our clients need",
    solutions,
    solutionsTitle,
    benefits,
    benefitsTitle = "Benefits",
    relatedProducts,
    ctaTitle,
    diagram,
    gallery,
  } = content;

  return (
    <>
      <PageOpening
        title={title}
        description={subtitle}
        label={label}
        plate={plate?.src}
        plateCaption={plate?.caption}
      />

      {intro && (
        <Section className="!pb-0">
          <p className="measure mx-auto text-center text-[1.08rem] leading-[1.75] text-slate-600">
            {intro}
          </p>
        </Section>
      )}

      {diagram && (
        <Section>
          <Plate src={diagram} caption="How it works" className="mx-auto max-w-4xl" imgClassName="bg-white p-4" />
        </Section>
      )}

      {needs?.length > 0 && <RuledEntries title={needsTitle} items={needs} />}

      {gallery?.length > 0 && (
        <Section tint>
          <SectionHeading title="In the field" />
          <div className="grid gap-5 sm:grid-cols-3">
            {gallery.map((src, index) => (
              <Plate key={index} src={src} imgClassName="h-52" />
            ))}
          </div>
        </Section>
      )}

      {solutions?.length > 0 && <SolutionLedger title={solutionsTitle} solutions={solutions} />}

      {benefits?.length > 0 && <RuledEntries title={benefitsTitle} items={benefits} tint={!solutions?.length} />}

      {relatedProducts?.length > 0 && <CrossReferences items={relatedProducts} />}

      <MinuteBand title={ctaTitle} />
      <EnquiryLeaf />
    </>
  );
}
