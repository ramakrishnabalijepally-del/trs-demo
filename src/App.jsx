import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import ManagementTeam from "@/pages/ManagementTeam";
import AwardsAndRecognitions from "@/pages/AwardsAndRecognitions";
import EventsNews from "@/pages/EventsNews";
import Careers from "@/pages/Careers";
import SuccessStories from "@/pages/SuccessStories";
import OfficeLocations from "@/pages/OfficeLocations";
import PartnerWithUs from "@/pages/PartnerWithUs";
import ProductDemoEnquiry from "@/pages/ProductDemoEnquiry";
import Resources from "@/pages/Resources";

import ProfessionalInstitutions from "@/pages/market/ProfessionalInstitutions";
import Schools from "@/pages/market/Schools";
import CoachingInstitutes from "@/pages/market/CoachingInstitutes";
import Corporates from "@/pages/market/Corporates";
import RecruitmentAgencies from "@/pages/market/RecruitmentAgencies";
import Universities from "@/pages/market/Universities";

import FireEye from "@/pages/products/FireEye";
import Abbyy from "@/pages/products/Abbyy";
import ESekure from "@/pages/products/ESekure";
import ExtractPro from "@/pages/products/ExtractPro";
import EPresent from "@/pages/products/EPresent";
import EKsamen from "@/pages/products/EKsamen";
import EMarquer from "@/pages/products/EMarquer";
import EXamCentre from "@/pages/products/EXamCentre";
import SmartScanners from "@/pages/products/SmartScanners";

import DataCapturing from "@/pages/services/DataCapturing";
import AbbyyTrainingSupport from "@/pages/services/AbbyyTrainingSupport";
import PrintingAndSupply from "@/pages/services/PrintingAndSupply";
import EndToEndSolutions from "@/pages/services/EndToEndSolutions";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about-us" element={<AboutUs />} />
          <Route path="management" element={<ManagementTeam />} />
          <Route path="awards-and-recognitions" element={<AwardsAndRecognitions />} />
          <Route path="events-news" element={<EventsNews />} />
          <Route path="careers" element={<Careers />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="office-locations" element={<OfficeLocations />} />
          <Route path="partner-with-us" element={<PartnerWithUs />} />
          <Route path="product-demo-enquiry" element={<ProductDemoEnquiry />} />
          <Route path="resources" element={<Resources />} />

          <Route path="market/professional-institutions" element={<ProfessionalInstitutions />} />
          <Route path="market/schools" element={<Schools />} />
          <Route path="market/coaching-institutes" element={<CoachingInstitutes />} />
          <Route path="market/corporates" element={<Corporates />} />
          <Route path="market/recruitment-agencies" element={<RecruitmentAgencies />} />
          <Route path="market/universities" element={<Universities />} />

          <Route path="products/fireeye" element={<FireEye />} />
          <Route path="products/abbyy" element={<Abbyy />} />
          <Route path="products/esekure" element={<ESekure />} />
          <Route path="products/extractpro" element={<ExtractPro />} />
          <Route path="products/epresent" element={<EPresent />} />
          <Route path="products/eksamen" element={<EKsamen />} />
          <Route path="products/emarquer" element={<EMarquer />} />
          <Route path="products/examcentre" element={<EXamCentre />} />
          <Route path="products/smart-scanners" element={<SmartScanners />} />

          <Route path="services/data-capturing" element={<DataCapturing />} />
          <Route path="services/abbyy-training-and-support" element={<AbbyyTrainingSupport />} />
          <Route path="services/printing-and-supply-of-sheets" element={<PrintingAndSupply />} />
          <Route path="services/end-to-end-examination-solutions" element={<EndToEndSolutions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
