import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DisclaimerModal from "./components/ui/DisclaimerModal";
import { BrandProvider, brandConfig } from "./context/BrandContext";

import StickySocialSidebar from "./components/ui/StickySocialSidebar";

// ── VidhitLaw Pages ────────────────────────────────────────────────
const VidhitHome = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/AboutUs"));
const PracticeAreas = lazy(() => import("./pages/PracticeAreas"));
const CourtsAndTribunals = lazy(() => import("./pages/CourtsAndTribunals"));
const Services = lazy(() => import("./pages/Services"));
const Team = lazy(() => import("./pages/Team"));
const Packages = lazy(() => import("./pages/Packages"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const Awards = lazy(() => import("./pages/Awards"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// ── LexRera Pages ──────────────────────────────────────────────────
const ReraLayout = lazy(() => import("./pages/rera/ReraLayout"));
const ReraHome = lazy(() => import("./pages/rera/ReraHome"));
const ReraAbout = lazy(() => import("./pages/rera/ReraAbout"));
const ReraServices = lazy(() => import("./pages/rera/ReraServices"));
const ReraPackages = lazy(() => import("./pages/rera/ReraPackages"));
const ReraContact = lazy(() => import("./pages/rera/ReraContact"));
const ReraGenericPage = lazy(() => import("./pages/rera/ReraGenericPage"));

// ── Active Brand ───────────────────────────────────────────────────
const activeBrand = brandConfig.activeBrand;
const isLexRera = activeBrand === "lexrera";

// Loading Fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const activeBrandConfig =
    brandConfig.brands[activeBrand as keyof typeof brandConfig.brands];

  useEffect(() => {
    // Dynamically update the favicon based on the active brand
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    if (activeBrandConfig && activeBrandConfig.logo) {
      link.href = activeBrandConfig.logo;
    }
  }, [activeBrandConfig]);

  return (
    <Router>
      <BrandProvider>
        <DisclaimerModal />
        <StickySocialSidebar />
        <Suspense fallback={<Loading />}>
          {isLexRera ? (
            // ── LEX RERA ROUTING ──────────────────────────────────
            // All routes use ReraLayout (ReraNavbar + ReraFooter)
            // No VidhitLaw routes registered at all
            <Routes>
              <Route element={<ReraLayout />}>
                <Route path="/" element={<ReraHome />} />
                <Route path="/about" element={<ReraAbout />} />
                <Route path="/services" element={<ReraServices />} />
                <Route path="/packages" element={<ReraPackages />} />
                <Route path="/contact" element={<ReraContact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/:slug" element={<ReraGenericPage />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          ) : (
            // ── VIDHIT LAW ROUTING ────────────────────────────────
            // All routes use main Layout (Navbar + Footer)
            // No LexRera routes registered at all
            <Layout>
              <Routes>
                <Route path="/" element={<VidhitHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/practice-areas" element={<PracticeAreas />} />
                <Route
                  path="/courts-and-tribunals"
                  element={<CourtsAndTribunals />}
                />
                <Route path="/services" element={<Services />} />
                <Route path="/team" element={<Team />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Layout>
          )}
        </Suspense>
      </BrandProvider>
    </Router>
  );
}

export default App;
