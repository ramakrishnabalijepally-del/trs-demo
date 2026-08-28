import slide1 from "@/assets/scraped/slider-3.jpg";
import slide2 from "@/assets/scraped/slider-5.jpg";
import slide3 from "@/assets/scraped/slider-6.jpg";
import indiaLogo from "@/assets/scraped/india-logo-1.png";

export default {
  slides: [
    {
      image: slide1,
      heading: "Simplifies dummy numbering. Speeds up result publishing",
      body: "Dummy numbering, OMR-Barcode reading and Image capture in one single pass",
      ctaLabel: "Know More",
      ctaTo: "/products/fireeye",
    },
    {
      image: slide2,
      heading: "Educating and Empowering Stakeholders for the past 25 years",
      body: "Education boards, recruitment bodies, private and public universities and professional institutes form part of our 150+ clients pan India",
      ctaLabel: "Watch Video",
      ctaTo: "/about-us",
    },
    {
      image: slide3,
      heading: "Only SME in India of this size and nature of work to have a full-fledged R&D team",
      body: "TRS designs and manufactures all its automation solutions locally, making them best suited for Indian conditions",
      ctaLabel: "Know More",
      ctaTo: "/products/smart-scanners",
      badge: indiaLogo,
    },
  ],
  stats: [
    { value: "150+", label: "clients including top education boards, professional institutes and recruitment bodies" },
    { value: "10M", label: "forms/booklets and 2 million online forms processed per year" },
    { value: "2", label: "IPs under process for R&D products" },
    { value: "5+", label: "branch offices present all over India" },
    { value: "130", label: "highly trained personnel" },
    { value: "50+", label: "high-end scanners available in the service bureau" },
  ],
  testimonials: [
    {
      quote:
        "TRS eXtractPro OMR software helped us handle our internal tests with zero errors. The main advantage was the ease of use of the software & the flexibility it provided to us in terms of printing our own sheets and using our office scanner.",
      author: "Principal, a reputed Engineering College",
    },
    {
      quote:
        "The FireEye solution developed and customized by TRS Forms has benefited our university in a big way. After introduction of this automated process, the results are being published well before time and also with high level of accuracy. We are also able to maintain a high level of confidentiality and this automatically brings in more credibility to our exam system.",
      author: "Controller of Examinations, a large Public University",
    },
    {
      quote:
        "Implementing revolutionary process of Automatic Dummy Numbering System turned up as a valuable resource to our institution. TRS took the extra effort to ensure the entire post-examination process was completed within 20-25 days, which used to take around six months. Our institution values them as a trusted vendor.",
      author: "Vice Chancellor, a large Public University in South India",
    },
  ],
};
