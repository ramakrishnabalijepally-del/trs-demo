import PageOpening from "@/components/register/PageOpening";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";
import { Section } from "@/components/ui/Section";
import { MapPin, Mail, Phone } from "lucide-react";
import indiaMap from "@/assets/scraped/india-map-img-2.png";

const offices = [
  {
    station: "Chennai",
    role: "Head office",
    address: ["No 23, Chakrapani Street", "West Mambalam", "Chennai 600 033, India"],
    telephone: "+91 44 23725452 / 53",
    email: "support@trsforms.com",
  },
  {
    station: "Delhi",
    role: "Branch office",
    address: ["Branch office maintained in Delhi.", "Address available on request."],
    telephone: "044-24724565 / 044-23725253",
    email: "sales@trsforms.com",
  },
];

export default function OfficeLocations() {
  return (
    <>
      <PageOpening
        title="Office locations"
        description="Offices in Chennai and Delhi, with a trained associate network across India."
        action={null}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {offices.map((office) => (
              <article
                key={office.station}
                className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-slate-200"
              >
                <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-[0.78rem] font-semibold text-brand-700">
                  {office.role}
                </span>
                <h2 className="mt-4 text-[1.25rem]">{office.station}</h2>
                <address className="mt-3 not-italic text-[0.95rem] leading-[1.7] text-slate-600">
                  {office.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
                <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-[0.92rem]">
                  <li className="flex gap-2.5">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2} />
                    <span className="text-slate-700">{office.telephone}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2} />
                    <a href={`mailto:${office.email}`} className="text-slate-700 hover:text-brand-700">
                      {office.email}
                    </a>
                  </li>
                </ul>
              </article>
            ))}
          </div>

          <aside className="self-start rounded-[var(--radius-card)] bg-slate-50 p-7 ring-1 ring-slate-200">
            <img src={indiaMap} alt="TRS offices and associates across India" className="w-full object-contain" />
            <p className="mt-5 flex gap-2.5 text-[0.92rem] leading-[1.65] text-slate-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2} />
              Associates in various places, fully trained to handle our solutions.
            </p>
          </aside>
        </div>
      </Section>

      <EnquiryLeaf heading="Contact an office" />
    </>
  );
}
