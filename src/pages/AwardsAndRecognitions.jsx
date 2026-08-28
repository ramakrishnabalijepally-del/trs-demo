import PageOpening from "@/components/register/PageOpening";
import { Section } from "@/components/ui/Section";
import award1 from "@/assets/scraped/award1-1.jpg";
import award2 from "@/assets/scraped/award2.jpg";
import award3 from "@/assets/scraped/award3.jpg";
import award4 from "@/assets/scraped/award4.jpg";
import award5 from "@/assets/scraped/award5.jpg";
import award6 from "@/assets/scraped/award6.jpg";
import award7 from "@/assets/scraped/award7.jpg";

const awards = [
  { title: "ABBYY Best Partner Award — Emerging Markets", detail: "Presented at the ABBYY partner summit in Brussels, 2018.", photo: award1 },
  { title: "National Education Excellence Award, Assocham India", detail: "Best Use of Technology in Testing and Assessments. Presented by Dr. Karan Singh, MP, former Union Minister.", photo: award2 },
  { title: "Education Summit Award, Leaders Speak", detail: "Best Security Solutions Provider. Presented by Shri Giriraj Singh, Minister of State for MSME.", photo: award3 },
  { title: "World Education Award, Digital Learning", detail: "Best Technology Solution Provider in Education.", photo: award4 },
  { title: "50 Inspiring CEOs, Silicon India", detail: "Awarded to Managing Director Shri N. Subramanian.", photo: award5 },
  { title: "Leaders of Tomorrow, India Mart and ET Now", detail: "IT / ITES, national level. Presented by Shri K. V. Kamath, Chairman of the BRICS Development Bank.", photo: award6 },
  { title: "Leaders of Tomorrow — Regional, India Mart and ET Now", detail: "IT / ITES, southern region. Presented by Shri Krishnakumar Natrajan, CEO of Mindtree.", photo: award7 },
];

export default function AwardsAndRecognitions() {
  return (
    <>
      <PageOpening
        title="Awards and recognitions"
        description="Recognition from industry bodies, publications and government for our work in examination technology."
        action={null}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <article
              key={award.title}
              className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
            >
              <img src={award.photo} alt="" className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-[1.02rem] leading-[1.4]">{award.title}</h2>
                <p className="mt-2.5 text-[0.9rem] leading-[1.65] text-slate-600">{award.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
