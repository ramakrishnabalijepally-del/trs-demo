import PageOpening from "@/components/register/PageOpening";
import EnquiryLeaf from "@/components/register/EnquiryLeaf";

export default function ProductDemoEnquiry() {
  return (
    <>
      <PageOpening
        title="Request a product demo"
        description="Tell us about your examination process and we will arrange a demonstration at your premises or remotely."
        action={null}
      />
      <EnquiryLeaf heading="Send us your enquiry" submitLabel="Request demo" />
    </>
  );
}
