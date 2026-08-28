import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import RunningTotals from "@/components/register/RunningTotals";
import CrossReferences from "@/components/register/CrossReferences";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";
import { foliosInSection } from "@/data/register";
import slide1 from "@/assets/scraped/slider-3.jpg";
import slide2 from "@/assets/scraped/slider-5.jpg";
import slide3 from "@/assets/scraped/slider-6.jpg";
import indiaBadge from "@/assets/scraped/india-logo-1.png";
import abbyyLogo from "@/assets/scraped/abbyy-logo.png";

const totals = [
  { value: "150+", label: "Clients, including the top education boards, professional institutes and recruitment bodies of the country", note: "Pan India" },
  { value: "10M", label: "Forms and booklets processed, alongside 2 million online forms", note: "Per annum" },
  { value: "1200", label: "Answer booklets read per hour by FireEye in a single pass", note: "Ideal conditions" },
  { value: "130", label: "Highly trained personnel across the organisation", note: "On record" },
  { value: "50+", label: "High-end scanners available in the service bureau", note: "Service bureau" },
  { value: "5+", label: "Branch offices present all over India", note: "Since 1993" },
];

const highlights = [
  {
    image: slide2,
    heading: "Educating and Empowering Stakeholders for the past 25 years",
    body: "Education boards, recruitment bodies, private and public universities and professional institutes form part of our 150+ clients pan India.",
    to: "/about-us",
    action: "About TRS",
  },
  {
    image: slide3,
    heading: "Only SME in India of this size and nature of work to have a full fledged R&D team",
    body: "TRS designs and manufactures all its automative solutions locally, making them best suited for Indian conditions.",
    to: "/products/smart-scanners",
    action: "See our scanners",
    badge: indiaBadge,
  },
];

const testimony = [
  {
    quote:
      "TRS eXtractPro OMR software helped us handle our internal tests with zero errors. The main advantage was the ease of use of the software & the flexibility it provided to us in terms of printing our own sheets and using our office scanner.",
    by: "Principal of a reputed Engineering College",
  },
  {
    quote:
      "The FireEye solution developed and customized by TRS Forms has benefited our university in a big way. After introduction of this automated process, the results are being published well before time and also with high level of accuracy. We are also able to maintain a high level of confidentiality and this automatically brings in more credibility to our exam system.",
    by: "Controller of Examinations, a large Public University",
  },
  {
    quote:
      "Implementing revolutionary process of Automatic Dummy Numbering System turned up as a Valuable resource to our Institution. TRS took the extra effort to ensure entire post examination process within 20-25 days, which was used to take around six months in general. Our Institution values them as a trusted vendor.",
    by: "Vice Chancellor of a Large Public University in South India",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-brand-100/60 blur-3xl"
        />
        <div className="container-page relative py-16 sm:py-20 lg:py-26">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-16">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[0.82rem] font-semibold text-brand-700 ring-1 ring-brand-100">
                End-to-end examination solutions
              </span>

              <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.06]">
                Simplifies dummy numbering. Speeds up result publishing.
              </h1>

              <p className="measure mt-6 text-[1.1rem] leading-[1.7] text-slate-600">
                Dummy numbering, OMR-barcode reading and image capture in one single pass of the
                booklet — the step that used to cost a university twenty-five days.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/product-demo-enquiry" size="lg">
                  Request a demo
                </Button>
                <Button to="/products/fireeye" variant="secondary" size="lg">
                  Explore FireEye
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
                <img src={abbyyLogo} alt="ABBYY" className="h-6 w-auto object-contain" />
                <p className="text-[0.88rem] leading-[1.6] text-slate-500">
                  Distributor and technical partner in India for over two decades
                </p>
              </div>
            </div>

            <div className="reveal" style={{ animationDelay: "110ms" }}>
              <img
                src={slide1}
                alt="TRS FireEye scanner processing answer booklets"
                className="aspect-[5/4] w-full rounded-[20px] object-cover shadow-[0_2px_4px_rgba(15,23,42,0.05),0_28px_60px_-24px_rgba(15,23,42,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <Section>
        <SectionHeading
          title="Trusted across India's examination system"
          lead="Three decades of work with education boards, universities, professional institutes and recruitment bodies."
        />
        <RunningTotals items={totals} className="!px-0" />
      </Section>

      {/* Highlights */}
      <Section tint>
        <div className="grid gap-6 lg:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.heading}
              className="overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200"
            >
              <img src={item.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-7 sm:p-8">
                <h3 className="text-[1.28rem] leading-[1.3]">{item.heading}</h3>
                <p className="mt-3 text-[0.97rem] leading-[1.7] text-slate-600">{item.body}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-brand-600"
                  >
                    {item.action}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  {item.badge && (
                    <img src={item.badge} alt="Designed and manufactured in India" className="h-10 w-auto object-contain" />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading title="What our clients say" align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimony.map((item, index) => (
            <figure
              key={index}
              className="m-0 flex flex-col rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-slate-200"
            >
              <Quote className="h-7 w-7 text-brand-200" strokeWidth={1.8} />
              <blockquote className="mt-4 flex-1 text-[0.96rem] leading-[1.7] text-slate-600">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4 text-[0.88rem] font-semibold text-slate-800">
                {item.by}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CrossReferences
        title="Our products"
        items={foliosInSection("P").map((entry) => ({ to: entry.to, label: entry.label }))}
      />

      <EnquiryLeaf
        heading="Request a demonstration"
        note="Tell us about your examination process and we will arrange a demonstration at your premises or remotely."
      />
    </>
  );
}
