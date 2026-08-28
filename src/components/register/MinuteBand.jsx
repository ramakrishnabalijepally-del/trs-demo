import Button from "@/components/ui/Button";

/** Closing call to action. */
export default function MinuteBand({
  title = "Let TRS aid you in carrying out your examinations",
  action = "Contact us",
  to = "/product-demo-enquiry",
}) {
  return (
    <section className="bg-brand-700 py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <h2 className="max-w-3xl text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.2] text-white">
            {title}
          </h2>
          <Button to={to} variant="onDark" size="lg" className="shrink-0">
            {action}
          </Button>
        </div>
      </div>
    </section>
  );
}
