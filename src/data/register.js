/**
 * The register's index. Every route holds a folio, and the folio drives the
 * running head, the cross-references and the contents page. Folios are grouped
 * by section the way a bound register is tabbed.
 */
export const folios = [
  { to: "/", folio: "A·01", section: "Register — opening", label: "Opening" },

  { to: "/market/universities", folio: "M·01", section: "Markets — universities", label: "Universities" },
  { to: "/market/professional-institutions", folio: "M·02", section: "Markets — professional institutions", label: "Professional institutions" },
  { to: "/market/recruitment-agencies", folio: "M·03", section: "Markets — recruitment agencies", label: "Recruitment agencies" },
  { to: "/market/coaching-institutes", folio: "M·04", section: "Markets — coaching institutes", label: "Coaching institutes" },
  { to: "/market/schools", folio: "M·05", section: "Markets — schools", label: "Schools" },
  { to: "/market/corporates", folio: "M·06", section: "Markets — corporates", label: "Corporates" },

  { to: "/products/fireeye", folio: "P·01", section: "Products — FireEye", label: "FireEye" },
  { to: "/products/emarquer", folio: "P·02", section: "Products — eMarquer", label: "eMarquer" },
  { to: "/products/esekure", folio: "P·03", section: "Products — eSekure", label: "eSekure" },
  { to: "/products/extractpro", folio: "P·04", section: "Products — eXtractPro", label: "eXtractPro" },
  { to: "/products/epresent", folio: "P·05", section: "Products — ePresent", label: "ePresent" },
  { to: "/products/eksamen", folio: "P·06", section: "Products — eKsamen", label: "eKsamen" },
  { to: "/products/examcentre", folio: "P·07", section: "Products — eXamCentre", label: "eXamCentre" },
  { to: "/products/abbyy", folio: "P·08", section: "Products — ABBYY", label: "ABBYY" },
  { to: "/products/smart-scanners", folio: "P·09", section: "Products — TRS Smart Scanners", label: "TRS Smart Scanners" },

  { to: "/services/end-to-end-examination-solutions", folio: "S·01", section: "Services — end to end examination solutions", label: "End to end examination solutions" },
  { to: "/services/data-capturing", folio: "S·02", section: "Services — data capture and digitisation", label: "Data capturing" },
  { to: "/services/printing-and-supply-of-sheets", folio: "S·03", section: "Services — printing and supply of sheets", label: "Printing and supply of sheets" },
  { to: "/services/abbyy-training-and-support", folio: "S·04", section: "Services — ABBYY training and support", label: "ABBYY training and support" },

  { to: "/about-us", folio: "C·01", section: "Company — about us", label: "About us" },
  { to: "/management", folio: "C·02", section: "Company — management team", label: "Management team" },
  { to: "/awards-and-recognitions", folio: "C·03", section: "Company — awards and recognitions", label: "Awards and recognitions" },
  { to: "/success-stories", folio: "C·04", section: "Company — success stories", label: "Success stories" },
  { to: "/events-news", folio: "C·05", section: "Company — events and news", label: "Events / news" },
  { to: "/careers", folio: "C·06", section: "Company — careers", label: "Careers" },

  { to: "/office-locations", folio: "X·01", section: "Contact — office locations", label: "Office locations" },
  { to: "/partner-with-us", folio: "X·02", section: "Contact — partner with us", label: "Partner with us" },
  { to: "/product-demo-enquiry", folio: "X·03", section: "Contact — product demo / enquiry", label: "Product demo / enquiry" },
  { to: "/resources", folio: "X·04", section: "Contact — resources", label: "Resources" },
];

const byRoute = new Map(folios.map((entry) => [entry.to, entry]));

export function folioFor(pathname) {
  return byRoute.get(pathname) ?? { folio: "—", section: "Register", label: "" };
}

export const sections = [
  { key: "M", title: "Markets", tab: "MKT" },
  { key: "P", title: "Products", tab: "PRD" },
  { key: "S", title: "Services", tab: "SVC" },
  { key: "C", title: "Company", tab: "CO" },
  { key: "X", title: "Contact", tab: "CON" },
];

export function foliosInSection(key) {
  return folios.filter((entry) => entry.folio.startsWith(`${key}·`));
}
