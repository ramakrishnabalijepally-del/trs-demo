import PageOpening from "@/components/register/PageOpening";
import RunningTotals from "@/components/register/RunningTotals";
import MinuteBand from "@/components/register/MinuteBand";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";
import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import indiaMap from "@/assets/scraped/india-map-img-2.png";

const story = [
  "TRS is India's foremost examination solution provider, serving more than 150 clients across India — education boards, recruitment bodies, private and public universities, and professional institutes.",
  "Starting off as an OMR specialist three decades back, TRS has grown into a comprehensive examination solution provider. Innovation has been the driving force throughout, and TRS remains the sole Indian SME company in this niche sector to have a strong R&D team of its own.",
  "That team is why barcode dummy numbering reached Indian universities, and why the reading of shaded OMR marks kept improving year after year. The work is grounded in domain expertise built on the floor, quality standards held across large volumes, and the client retention that follows from both.",
  "The commitment ahead is unchanged: transforming evaluation methods in the education sector.",
];

const totals = [
  { value: "1993", label: "The year TRS Forms was founded in Chennai", note: "Three decades" },
  { value: "130", label: "Highly trained personnel across the organisation", note: "On record" },
  { value: "2", label: "Intellectual properties under process for R&D products", note: "In progress" },
];

export default function AboutUs() {
  return (
    <>
      <PageOpening
        title="TRS — the team that innovates"
        description="India's foremost examination solution provider, serving more than 150 clients across the country."
        action={null}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
          <div className="space-y-5">
            {story.map((paragraph, index) => (
              <p key={index} className="text-[1.02rem] leading-[1.8] text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="self-start rounded-[var(--radius-card)] bg-slate-50 p-7 ring-1 ring-slate-200">
            <img src={indiaMap} alt="TRS offices and associates across India" className="w-full object-contain" />
            <p className="mt-5 text-[0.93rem] leading-[1.65] text-slate-600">
              Five branch offices and a trained associate network across India.
            </p>
            <Button to="/office-locations" variant="secondary" className="mt-5 w-full">
              View locations
            </Button>
          </aside>
        </div>
      </Section>

      <Section tint>
        <SectionHeading title="By the numbers" align="center" />
        <RunningTotals items={totals} className="!px-0" />
      </Section>

      <MinuteBand />
      <EnquiryLeaf />
    </>
  );
}
