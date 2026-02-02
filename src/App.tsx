import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DisclaimerModal from "./components/ui/DisclaimerModal";

// Components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/AboutUs"));
const PracticeAreas = lazy(() => import("./pages/PracticeAreas"));
const Services = lazy(() => import("./pages/Services"));
const Team = lazy(() => import("./pages/Team")); // We might rename this to Partners internally or keep file name
const Packages = lazy(() => import("./pages/Packages"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));

// RERA Components
const ReraLayout = lazy(() => import("./pages/rera/ReraLayout"));
const ReraHome = lazy(() => import("./pages/rera/ReraHome"));
const ReraGenericPage = lazy(() => import("./pages/rera/ReraGenericPage"));

// Loading Fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <DisclaimerModal />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />

            {/* RERA Module Routes */}
            <Route path="/rera" element={<ReraLayout />}>
              <Route index element={<ReraHome />} />
              <Route path=":slug" element={<ReraGenericPage />} />
            </Route>

            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
