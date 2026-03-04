import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReraNavbar from "../../components/layout/rera/ReraNavbar";
import ReraFooter from "../../components/layout/rera/ReraFooter";
import ScrollToTopButton from "../../components/layout/ScrollToTopButton";
import footerVideo from "../../assets/Footer animation.mp4";

// Root layout for all LexRera brand routes
const ReraLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <ReraNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <ScrollToTopButton />

      {/* --- GLOBAL FOOTER ANIMATION VIDEO --- */}
      <div className="w-full overflow-hidden bg-white flex justify-center border-none outline-none mt-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover border-none outline-none pointer-events-none"
        >
          <source src={footerVideo} type="video/mp4" />
        </video>
      </div>

      <ReraFooter />
    </div>
  );
};

export default ReraLayout;
