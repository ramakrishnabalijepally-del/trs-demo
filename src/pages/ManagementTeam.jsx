import PageOpening from "@/components/register/PageOpening";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";
import { Section } from "@/components/ui/Section";
import subramanian from "@/assets/scraped/Subramanian.jpg";
import swaminathan from "@/assets/scraped/Swaminathan.jpg";

const team = [
  {
    name: "N. Subramanian",
    role: "Managing Director",
    photo: subramanian,
    bio: "Launched TRS Forms in 1993 to bring cutting-edge technology solutions to Indian educational institutions, and leads an organisation of 130+ staff across multiple locations today. Over three decades in data processing and capture services, and one of the people who brought OMR technology into India.",
    facts: [
      ["Founded", "TRS Forms, 1993"],
      ["Earlier", "TRR Software Service, 1991"],
      ["Qualifications", "Madras University; NIIT software development diploma"],
    ],
  },
  {
    name: "R. Swaminathan",
    role: "Director, Operations",
    photo: swaminathan,
    bio: "Present since the company was founded, and responsible for execution and operations. An extensive background in operational management and project delivery across large, deadline-bound examination work.",
    facts: [
      ["With TRS", "Since founding"],
      ["Earlier", "Printing sector; 20+ years on a financial institution board"],
      ["Qualifications", "Chartered Accountant; Madras University"],
    ],
  },
];

export default function ManagementTeam() {
  return (
    <>
      <PageOpening
        title="Management team"
        description="The people who have led TRS since it was founded."
        action={null}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {team.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-5 bg-slate-50 p-7">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-white"
                />
                <div>
                  <h2 className="text-[1.25rem] leading-[1.3]">{person.name}</h2>
                  <p className="mt-1 text-[0.9rem] font-semibold text-brand-700">{person.role}</p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-[0.96rem] leading-[1.75] text-slate-600">{person.bio}</p>
                <dl className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {person.facts.map(([term, detail]) => (
                    <div key={term} className="grid grid-cols-[8rem_minmax(0,1fr)] gap-3">
                      <dt className="text-[0.85rem] font-semibold text-slate-500">{term}</dt>
                      <dd className="m-0 text-[0.9rem] leading-[1.55] text-slate-700">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <EnquiryLeaf />
    </>
  );
}
