export const pustakFeatures = [
  "Specialized transparent panel for image capture",
  "Optional page number validation via Barcode/OCR",
  "Additional page capture warning system",
  "Indication LED for validation",
  "Clear glass for page flattening and OMR reading",
  "External light source for illumination",
];

export const pustakSpecs = [
  ["Scan speed", "31 booklets per hour for 36-page booklets"],
  ["Resolution", "200 DPI"],
  ["Booklet size", "Max A4 booklet size, A3 scan area"],
  ["Output", "JPEG storage with optional PDF generation"],
  ["Logging", "Database logging of scanning operations"],
];

export const highSpeedScanners = [
  {
    name: "Kodak i3000 Series",
    specs: ["Up to 30,000 pages/day · 110 ppm at 200dpi", "Dual CCD optical technology", "Up to 1200 dpi output", "USB 2.0/3.0"],
  },
  {
    name: "Fujitsu fi-7140",
    specs: ["Simplex 40 ppm · Duplex 80 ipm (200/300 dpi)", "Dual colour CCD sensor", "Up to 1200 dpi output", "USB 2.0"],
  },
  {
    name: "Kodak i2000 Series",
    specs: ["Up to 8,000 pages/day · 70 ppm at 200dpi", "Dual CCD technology", "Up to 1200 dpi output", "USB 2.0/3.0"],
  },
  {
    name: "Fujitsu fi-7600",
    specs: ["Simplex 100 ppm · Duplex 200 ipm (200/300 dpi)", "Dual colour CCD sensor", "Up to 1200 dpi output", "USB 2.0/3.0"],
  },
];

export const entryLevelScanners = [
  {
    name: "AD250 Sheetfeed Scanner",
    specs: ["Up to 10,000 pages/day · 80 ppm @ 200dpi colour", "Duplex scanning", "Up to 600 dpi output", "USB 2.0/3.0"],
  },
  {
    name: "AV176U",
    specs: ["Up to 3,000 pages/day · 30 ppm @ 200dpi colour", "Contact Image Sensor technology", "Up to 600 dpi output", "USB 2.0/3.0"],
  },
];
