import PageOpening from "@/components/register/PageOpening";
import { Section } from "@/components/ui/Section";
import { Newspaper } from "lucide-react";
import event7 from "@/assets/scraped/event7.jpg";
import event8 from "@/assets/scraped/event8.jpg";
import event9 from "@/assets/scraped/event9.jpg";
import event13 from "@/assets/scraped/event13.jpg";
import event15 from "@/assets/scraped/event15.jpg";

const entries = [
  { date: "04 Sep 2018", title: "TRS launches next gen OMR scanner", source: "The Economic Times", photo: event7 },
  { date: "04 Sep 2018", title: "TRS Hybrid Scanners", source: "Indian News and Times", photo: event8 },
  { date: "04 Sep 2018", title: "An Expert of Cognizance: Scanning Perfection Everyday", source: "Silicon India Magazine", photo: event9 },
  { date: "04 Sep 2018", title: "PRHUB Integrated Marketing Communication Pvt Ltd", source: "openpr.com", photo: event13 },
  { date: "04 Sep 2018", title: "No Tampering Allowed", source: "Press document", photo: event15 },
  { date: "04 Sep 2018", title: "Menace To Society", source: "Feature" },
  { date: "04 Sep 2018", title: "ISMS Certification, ISO 27001-2013", source: "Certificate" },
  { date: "04 Sep 2018", title: "EN ISO 9001 : 2015 Quality Management System", source: "Certificate" },
  { date: "04 Sep 2018", title: "Examine IT", source: "Press document" },
];

export default function EventsNews() {
  return (
    <>
      <PageOpening
        title="Events and news"
        description="Press coverage, certifications and announcements from TRS Forms."
        action={null}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
            >
              {entry.photo ? (
                <img src={entry.photo} alt="" className="h-40 w-full object-cover" />
              ) : (
                <div className="flex h-40 w-full items-center justify-center bg-slate-50">
                  <Newspaper className="h-9 w-9 text-slate-300" strokeWidth={1.6} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  {entry.date}
                </p>
                <h2 className="mt-2 flex-1 text-[1rem] leading-[1.45]">{entry.title}</h2>
                <p className="mt-3 text-[0.86rem] font-semibold text-brand-700">{entry.source}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
