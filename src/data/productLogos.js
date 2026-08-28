import fireeye from "@/assets/scraped/fire-logo.png";
import abbyy from "@/assets/scraped/abbyy-logo.png";
import esekure from "@/assets/scraped/esekure-logo.png";
import extractpro from "@/assets/scraped/ectract-logo.png";
import epresent from "@/assets/scraped/present-logo.png";
import eksamen from "@/assets/scraped/eksamen-logo.png";
import smartScanners from "@/assets/scraped/smart-logo.png";
import emarquer from "@/assets/scraped/eMarquer-logo.png";
import examcentre from "@/assets/scraped/eXamCentreLogo.png";
import eqbank from "@/assets/scraped/eqbank-logo.png";

export const productLogos = {
  fireeye,
  abbyy,
  esekure,
  extractpro,
  epresent,
  eksamen,
  smartScanners,
  emarquer,
  examcentre,
  eqbank,
};

/**
 * Photographic plates for the folios where a real photograph of the product or
 * its operation exists. An image-native region gets the photograph; only
 * folios with no photograph fall back to the affixed wordmark.
 */
export const plateByPath = {
  "/products/fireeye": { src: new URL("../assets/scraped/slider-3.jpg", import.meta.url).href, caption: "Plate — FireEye in operation" },
  "/products/smart-scanners": { src: new URL("../assets/scraped/product1.jpg", import.meta.url).href, caption: "Plate — Pustak scanner" },
  "/products/epresent": { src: new URL("../assets/scraped/epresent-1024x682.png", import.meta.url).href, caption: "Plate — attendance capture" },
  "/products/emarquer": { src: new URL("../assets/scraped/emarque-banner1.jpg", import.meta.url).href, caption: "Plate — on-screen marking" },
  "/services/data-capturing": { src: new URL("../assets/scraped/scan1-1.jpg", import.meta.url).href, caption: "Plate — service bureau" },
  "/services/printing-and-supply-of-sheets": { src: new URL("../assets/scraped/ser-slider10.jpg", import.meta.url).href, caption: "Plate — security printing" },
  "/services/end-to-end-examination-solutions": { src: new URL("../assets/scraped/ser-slider15.jpg", import.meta.url).href, caption: "Plate — examination operations" },
  "/services/abbyy-training-and-support": { src: new URL("../assets/scraped/ser-slider1.jpg", import.meta.url).href, caption: "Plate — training" },
};

export const logoByPath = {
  "/products/fireeye": fireeye,
  "/products/abbyy": abbyy,
  "/products/esekure": esekure,
  "/products/extractpro": extractpro,
  "/products/epresent": epresent,
  "/products/eksamen": eksamen,
  "/products/smart-scanners": smartScanners,
  "/products/emarquer": emarquer,
  "/products/examcentre": examcentre,
};
