import PageOpening from "@/components/register/PageOpening";
import RuledEntries from "@/components/register/RuledEntries";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";
import Plate from "@/components/register/Plate";
import { Section, SectionHeading } from "@/components/ui/Section";
import partner1 from "@/assets/scraped/part-slider1-2.png";
import partner2 from "@/assets/scraped/part-slider2.png";
import partner3 from "@/assets/scraped/part-slider3.png";

const proposals = [
  "TRS serves 100+ clients, including the top educational institutions of the country.",
  "Our solutions increase efficiency and reduce costs for the institutions that adopt them.",
  "Leverage the TRS product portfolio to expand the reach of your own sales.",
  "The credibility TRS carries strengthens the confidence behind your proposal.",
  "Comprehensive support means a partner understands the solution quickly.",
  "The partnership strengthens your company's reputation and brand value.",
];

export default function PartnerWithUs() {
  return (
    <>
      <PageOpening
        title="Become a TRS partner"
        description="Together, let us script a new growth story."
        action={{ label: "Apply now", to: "/product-demo-enquiry" }}
      />

      <Section className="!pb-0">
        <p className="measure mx-auto text-center text-[1.08rem] leading-[1.75] text-slate-600">
          TRS has been in this field since 1993. Thirty years of examination work is what a
          partnership with us puts behind your proposals — a route to customer acquisition and to
          growth built on expertise the market already trusts.
        </p>
      </Section>

      <RuledEntries title="The TRS proposal" items={proposals} />

      <Section tint>
        <SectionHeading title="Working together" />
        <div className="grid gap-5 sm:grid-cols-3">
          {[partner1, partner2, partner3].map((src, index) => (
            <Plate key={index} src={src} imgClassName="h-48 bg-white" />
          ))}
        </div>
      </Section>

      <EnquiryLeaf heading="Apply to partner" submitLabel="Submit application" />
    </>
  );
}
