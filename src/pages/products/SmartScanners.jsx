import PageOpening from "@/components/register/PageOpening";
import MinuteBand from "@/components/register/MinuteBand";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";
import Plate from "@/components/register/Plate";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Check } from "lucide-react";
import smartLogo from "@/assets/scraped/smart-logo.png";
import pustak1 from "@/assets/scraped/product1.jpg";
import pustak2 from "@/assets/scraped/product2.jpg";
import pustak3 from "@/assets/scraped/product3.jpg";
import pustak4 from "@/assets/scraped/product4.jpg";
import model1 from "@/assets/scraped/product7.jpg";
import model2 from "@/assets/scraped/product8.jpg";
import model3 from "@/assets/scraped/product9.jpg";
import model4 from "@/assets/scraped/product10.jpg";

const pustakFeatures = [
  "Specialised transparent panel for image capture",
  "Optional page number validation by barcode or OCR",
  "Warning when an additional page is captured",
  "Indication LED for validation",
  "Clear glass to flatten the page and read OMR",
  "External light source for illumination",
];

const pustakSpecs = [
  ["Rate", "31 booklets per hour, 36-page booklets"],
  ["Resolution", "200 DPI"],
  ["Size", "A4 booklet maximum, A3 scan area"],
  ["Output", "JPEG, optional PDF generation"],
  ["Logging", "Scanning operations written to database"],
];

const highSpeed = [
  { name: "Kodak i3000 Series", photo: model1, specs: [["Throughput", "Up to 30,000 pages/day · 110 ppm at 200 dpi"], ["Optics", "Dual CCD"], ["Output", "Up to 1200 dpi"], ["Interface", "USB 2.0 / 3.0"]] },
  { name: "Fujitsu fi-7140", photo: model2, specs: [["Throughput", "Simplex 40 ppm · duplex 80 ipm at 200/300 dpi"], ["Optics", "Dual colour CCD"], ["Output", "Up to 1200 dpi"], ["Interface", "USB 2.0"]] },
  { name: "Kodak i2000 Series", photo: model3, specs: [["Throughput", "Up to 8,000 pages/day · 70 ppm at 200 dpi"], ["Optics", "Dual CCD"], ["Output", "Up to 1200 dpi"], ["Interface", "USB 2.0 / 3.0"]] },
  { name: "Fujitsu fi-7600", photo: model4, specs: [["Throughput", "Simplex 100 ppm · duplex 200 ipm at 200/300 dpi"], ["Optics", "Dual colour CCD"], ["Output", "Up to 1200 dpi"], ["Interface", "USB 2.0 / 3.0"]] },
];

const entryLevel = [
  { name: "AD250 Sheetfeed Scanner", specs: [["Throughput", "Up to 10,000 pages/day · 80 ppm at 200 dpi colour"], ["Mode", "Duplex"], ["Output", "Up to 600 dpi"], ["Interface", "USB 2.0 / 3.0"]] },
  { name: "AV176U", specs: [["Throughput", "Up to 3,000 pages/day · 30 ppm at 200 dpi colour"], ["Optics", "Contact image sensor"], ["Output", "Up to 600 dpi"], ["Interface", "USB 2.0 / 3.0"]] },
];

function ScannerCard({ name, photo, specs }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200">
      {photo && <img src={photo} alt={name} className="h-40 w-full object-cover" />}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[1.05rem] leading-[1.35]">{name}</h3>
        <dl className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
          {specs.map(([term, detail]) => (
            <div key={term} className="grid grid-cols-[6rem_minmax(0,1fr)] gap-3">
              <dt className="text-[0.82rem] font-semibold text-slate-500">{term}</dt>
              <dd className="m-0 text-[0.87rem] leading-[1.5] text-slate-700">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export default function SmartScanners() {
  return (
    <>
      <PageOpening
        title="Data capture made simple and affordable"
        description="The first company in India to design and manufacture hybrid scanners."
        label={smartLogo}
        plate={pustak1}
        plateCaption="The Pustak book scanner"
      />

      <Section className="!pb-0">
        <p className="measure mx-auto text-center text-[1.08rem] leading-[1.75] text-slate-600">
          TRS is a unique solution provider with an in-house R&amp;D team developing products on the
          latest technology, including indigenously designed book scanners, alongside scanner
          dealerships for Kodak, Fujitsu and Avision.
        </p>
      </Section>

      <Section>
        <SectionHeading
          title="Pustak scanner"
          lead="A semi-automatic image scanner for digitising booklets, designed for Indian market conditions."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[pustak1, pustak2, pustak3, pustak4].map((src, index) => (
            <Plate key={index} src={src} imgClassName="h-36" />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-slate-200">
            <h3 className="text-[1.05rem]">Key features</h3>
            <ul className="mt-5 space-y-3">
              {pustakFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-[0.93rem] leading-[1.6] text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.6} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-slate-200">
            <h3 className="text-[1.05rem]">Specification</h3>
            <dl className="mt-5 space-y-3">
              {pustakSpecs.map(([term, detail]) => (
                <div key={term} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 border-b border-slate-100 pb-3 last:border-0">
                  <dt className="text-[0.85rem] font-semibold text-slate-500">{term}</dt>
                  <dd className="m-0 text-[0.9rem] leading-[1.55] text-slate-700">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tint>
        <SectionHeading title="High-speed models" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highSpeed.map((model) => (
            <ScannerCard key={model.name} {...model} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Entry-level models" />
        <div className="grid gap-5 sm:grid-cols-2">
          {entryLevel.map((model) => (
            <ScannerCard key={model.name} {...model} />
          ))}
        </div>
        <p className="measure mt-10 text-[0.97rem] leading-[1.75] text-slate-600">
          We have been dealing with high-end and high-speed OMR and hybrid image scanners for both
          Fujitsu and Kodak in India. For more details, get in touch with us directly.
        </p>
      </Section>

      <MinuteBand title="Find the right scanner for your volume" />
      <EnquiryLeaf />
    </>
  );
}
