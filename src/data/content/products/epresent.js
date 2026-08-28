import diagram from "@/assets/scraped/epresent-1024x682.png";

export default {
  eyebrow: "Product · ePresent",
  diagram,
  title: "Leveraging mobile technology for smart attendance",
  subtitle:
    "Processing large amounts of examination attendance data and providing results within hours.",
  intro:
    "Invigilators use provided phones to capture attendance data via 1D barcodes, QR codes and images, with secure local storage until upload.",
  needsTitle: "Key Features",
  needs: [
    "Attendance data collated within hours — merges data from multiple locations and identifies student errors.",
    "Exam malpractice can be prevented — captures biometric data and maps it to barcodes to detect impersonation.",
  ],
  benefitsTitle: "Benefits",
  benefits: [
    "Android mobile compatibility",
    "Offline functionality — internet not required in exam halls",
    "Fast report generation",
    "Streamlined evaluation process",
  ],
  relatedProducts: [
    { label: "FireEye", to: "/products/fireeye" },
    { label: "eKsamen", to: "/products/eksamen" },
  ],
};
