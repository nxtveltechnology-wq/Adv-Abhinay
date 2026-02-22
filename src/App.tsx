import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DisclaimerModal from "./components/ui/DisclaimerModal";
import { BrandProvider, brandConfig } from "./context/BrandContext";

// Components
const VidhitHome = lazy(() => import("./pages/Home"));
const LexReraHome = lazy(() => import("./pages/rera/ReraHome"));
const About = lazy(() => import("./pages/AboutUs"));
const PracticeAreas = lazy(() => import("./pages/PracticeAreas"));
const Services = lazy(() => import("./pages/Services"));
const Team = lazy(() => import("./pages/Team"));
const Packages = lazy(() => import("./pages/Packages"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));

// RERA Components
const ReraLayout = lazy(() => import("./pages/rera/ReraLayout"));
const ReraHome = lazy(() => import("./pages/rera/ReraHome"));
const ReraAbout = lazy(() => import("./pages/rera/ReraAbout"));
const ReraServices = lazy(() => import("./pages/rera/ReraServices"));
const ReraPackages = lazy(() => import("./pages/rera/ReraPackages"));
const ReraContact = lazy(() => import("./pages/rera/ReraContact"));
const ReraGenericPage = lazy(() => import("./pages/rera/ReraGenericPage"));

// Determine which home page to load based on active brand
const activeBrand = brandConfig.activeBrand;
const HomePage = activeBrand === "lexrera" ? LexReraHome : VidhitHome;

// Loading Fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <BrandProvider>
        <DisclaimerModal />
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />

              {/* RERA Module Routes */}
              <Route path="/rera" element={<ReraLayout />}>
                <Route index element={<ReraHome />} />
                <Route path="about" element={<ReraAbout />} />
                <Route path="services" element={<ReraServices />} />
                <Route path="packages" element={<ReraPackages />} />
                <Route path="contact" element={<ReraContact />} />
                <Route path=":slug" element={<ReraGenericPage />} />
              </Route>

              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrandProvider>
    </Router>
  );
}

export default App;
