import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReraNavbar from "../../components/layout/rera/ReraNavbar";
import ReraFooter from "../../components/layout/rera/ReraFooter";
import ScrollToTopButton from "../../components/layout/ScrollToTopButton";

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
      <ReraFooter />
    </div>
  );
};

export default ReraLayout;
