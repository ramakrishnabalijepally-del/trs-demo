import { useState } from "react";
import { ChevronDown, ArrowUpRight, Mail, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import MinuteBand from "@/components/register/MinuteBand";
import { vacancies, gmailApplyLink, mailtoApplyLink, HR_EMAIL } from "@/data/vacancies";
import { cn } from "@/lib/utils";

const stations = ["All", "Chennai", "Delhi"];

function Vacancy({ vacancy }) {
  const [open, setOpen] = useState(false);
  const panelId = `vacancy-${vacancy.id}`;

  return (
    <article className="border-b border-slate-200 py-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="min-w-0">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-brand-600">
            {vacancy.station}
          </p>

          <h3 className="mt-2 text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.2]">{vacancy.role}</h3>

          <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.9rem] text-slate-500">
            <li>{vacancy.type}</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
            <li>{vacancy.experience}</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
            <li>{vacancy.station}, India</li>
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? `Hide details for ${vacancy.role}` : `Show details for ${vacancy.role}`}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-600 ring-1 ring-slate-200 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-900"
          >
            <ChevronDown
              className={cn("h-5 w-5 transition-transform duration-200", open && "rotate-180")}
            />
          </button>

          <a
            href={gmailApplyLink(vacancy)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-600 px-5 text-[0.9rem] font-semibold text-white shadow-[0_1px_2px_rgba(15,23,42,0.08),0_8px_20px_-10px_rgba(37,99,235,0.55)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:bg-brand-700 active:translate-y-px"
          >
            Submit application
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </div>
      </div>

      {open && (
        <div id={panelId} className="mt-6 grid gap-6 rounded-[var(--radius-card)] bg-slate-50 p-6 sm:grid-cols-2">
          <div>
            <h4 className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-slate-500">
              About the role
            </h4>
            <p className="mt-2.5 text-[0.94rem] leading-[1.7] text-slate-600">{vacancy.detail}</p>
            <p className="mt-4 text-[0.9rem] text-slate-600">
              <span className="font-semibold text-slate-800">Qualification: </span>
              {vacancy.qualification}
            </p>
          </div>

          <div>
            <h4 className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-slate-500">
              Skills required
            </h4>
            <ul className="mt-2.5 space-y-2">
              {vacancy.skills.map((skill) => (
                <li key={skill} className="flex gap-2.5 text-[0.92rem] text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.6} />
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href={mailtoApplyLink(vacancy)}
              className="mt-5 inline-block text-[0.86rem] font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
            >
              Prefer your own mail app? Apply by email
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Careers() {
  const [station, setStation] = useState("All");
  const shown = station === "All" ? vacancies : vacancies.filter((v) => v.station === station);

  return (
    <>
      <Section className="!pb-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          {/* Left column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="text-[clamp(2.4rem,4.6vw,3.4rem)] leading-[1.04]">Our open roles</h1>
            <p className="mt-5 text-[1rem] leading-[1.7] text-slate-600">
              Join a team building the examination technology used by universities, boards and
              recruitment bodies across India.
            </p>

            <div className="mt-8">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                Or contact us with
              </p>
              <a
                href={`mailto:${HR_EMAIL}`}
                className="mt-2 inline-flex items-center gap-2 text-[1.05rem] font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                <Mail className="h-4 w-4" strokeWidth={2.2} />
                {HR_EMAIL}
              </a>
              <p className="mt-4 text-[0.88rem] leading-[1.65] text-slate-500">
                Mention the position, place, years of experience and qualification in your subject
                line — the apply button fills this in for you.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {stations.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setStation(name)}
                  aria-pressed={station === name}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 text-[0.88rem] font-semibold transition-colors duration-150",
                    station === name
                      ? "bg-brand-600 text-white"
                      : "text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50",
                  )}
                >
                  {name}
                  {name !== "All" && (
                    <span className={cn("ml-1.5", station === name ? "text-brand-100" : "text-slate-400")}>
                      {vacancies.filter((v) => v.station === name).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div>
            <div className="border-t border-slate-200">
              {shown.map((vacancy) => (
                <Vacancy key={vacancy.id} vacancy={vacancy} />
              ))}
            </div>

            <p className="mt-8 text-[0.9rem] text-slate-500">
              Showing {shown.length} of {vacancies.length} open positions.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[var(--radius-card)] bg-brand-50 p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-[1.4rem] leading-[1.3]">Don't see a role that fits?</h2>
              <p className="mt-2.5 max-w-xl text-[0.97rem] leading-[1.7] text-slate-600">
                Send us your CV anyway. We take on people across development, operations and field
                support as our projects grow.
              </p>
            </div>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${HR_EMAIL}&su=${encodeURIComponent(
                "Open application — TRS Forms",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[52px] shrink-0 items-center gap-2 rounded-full bg-brand-600 px-7 text-[1rem] font-semibold text-white shadow-[0_1px_2px_rgba(15,23,42,0.08),0_8px_20px_-10px_rgba(37,99,235,0.55)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:bg-brand-700 active:translate-y-px"
            >
              Send your CV
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </Section>

      <MinuteBand title="Let TRS aid you in carrying out your examinations" />
    </>
  );
}
