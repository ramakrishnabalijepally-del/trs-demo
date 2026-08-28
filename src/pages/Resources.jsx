import PageOpening from "@/components/register/PageOpening";
import Button from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FileText, Download } from "lucide-react";
import resource1 from "@/assets/scraped/resource1.jpg";
import resource2 from "@/assets/scraped/resource2.jpg";
import resource3 from "@/assets/scraped/resource3.jpg";
import resource4 from "@/assets/scraped/resource4.jpg";

const resources = [
  { title: "ABBYY Solutions for Banking and Finance", kind: "Brochure · PDF", photo: resource1 },
  { title: "Solutions for Logistics & Transportation", kind: "Brochure · PDF", photo: resource2 },
  { title: "Solution for 100% Tamper Proof Certificates", kind: "Document · PDF", photo: resource3 },
  { title: "Digital Certificates with eSekure — Ultimate Document Security", kind: "Brochure · PDF", photo: resource4 },
  { title: "Transcript — The state of the matter", kind: "Article" },
  { title: "Document Security Redefined", kind: "Article" },
];

export default function Resources() {
  return (
    <>
      <PageOpening
        title="Resources"
        description="Brochures and articles on our solutions, free to download."
        action={null}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
            >
              {resource.photo ? (
                <img src={resource.photo} alt="" className="h-40 w-full object-cover" />
              ) : (
                <div className="flex h-40 w-full items-center justify-center bg-brand-50">
                  <FileText className="h-10 w-10 text-brand-400" strokeWidth={1.6} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  {resource.kind}
                </p>
                <h2 className="mt-2 flex-1 text-[1rem] leading-[1.45]">{resource.title}</h2>
                <Button variant="ghost" className="mt-4 w-fit self-start px-0">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
