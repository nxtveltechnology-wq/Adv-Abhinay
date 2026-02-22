import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import ReraNavbar from "./rera/ReraNavbar";
import ReraFooter from "./rera/ReraFooter";
import { useLocation } from "react-router-dom";
import { brandConfig } from "../../context/BrandContext";

const isLexRera = brandConfig.activeBrand === "lexrera";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  // /rera/* routes handle their own layout inside ReraLayout — bypass all wrappers
  const isReraRoute = pathname.startsWith("/rera");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isReraRoute) {
    // ReraLayout already provides ReraNavbar + ReraFooter
    return <>{children}</>;
  }

  // When activeBrand is lexrera, all non-/rera pages also use RERA nav/footer
  if (isLexRera) {
    return (
      <div className="flex flex-col min-h-screen font-sans text-slate-800">
        <ReraNavbar />
        <main className="flex-grow pt-0">{children}</main>
        <ScrollToTopButton />
        <ReraFooter />
      </div>
    );
  }

  // Default: Vidhit Law branding
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Navbar />
      <main className="flex-grow pt-18">{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
