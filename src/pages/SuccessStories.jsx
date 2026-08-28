import PageOpening from "@/components/register/PageOpening";
import MinuteBand from "@/components/register/MinuteBand";
import Button from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Download } from "lucide-react";
import extractLogo from "@/assets/scraped/ectract-logo.png";
import fireLogo from "@/assets/scraped/fire-logo.png";
import abbyyLogo from "@/assets/scraped/abbyy-logo.png";

const cases = [
  {
    logo: extractLogo,
    title: "TRS OMR solution across five southern states",
    detail:
      "One of the largest private coaching institutes in South India, present across five southern states, runs its internal tests and mock exams on TRS hybrid OMR scanners.",
  },
  {
    logo: fireLogo,
    title: "The unique FireEye process at a major professional institute",
    detail:
      "Implementation at a major professional institute demonstrating the FireEye process, and the acceleration in result publication that followed it.",
  },
  {
    logo: fireLogo,
    title: "TRS solutions in all corners of the country",
    detail:
      "FireEye deployed nationwide, carrying error-free result distribution at scale across every region of India.",
  },
  {
    logo: abbyyLogo,
    title: "SmartPayables automates accounts payable",
    detail:
      "SmartPayables partnered with TRS for ABBYY FlexiCapture, a highly accurate document capture platform, supporting accounts payable automation into SAP ERP.",
  },
];

export default function SuccessStories() {
  return (
    <>
      <PageOpening
        title="Success stories"
        description="How institutions across India use TRS solutions. Client names are withheld by agreement."
        action={null}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {cases.map((entry) => (
            <article
              key={entry.title}
              className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-slate-200 sm:p-8"
            >
              <img src={entry.logo} alt="" className="h-8 w-auto max-w-[8rem] object-contain object-left" />
              <h2 className="mt-6 text-[1.15rem] leading-[1.35]">{entry.title}</h2>
              <p className="mt-3 flex-1 text-[0.95rem] leading-[1.7] text-slate-600">{entry.detail}</p>
              <Button variant="secondary" className="mt-6 w-fit">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <MinuteBand />
    </>
  );
}
