import { Outlet } from "react-router-dom";
import ReraNavbar from "../../components/layout/rera/ReraNavbar";
import ReraFooter from "../../components/layout/rera/ReraFooter";

const ReraLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* RERA-specific Navbar */}
      <ReraNavbar />

      {/* Page content — no padding here; each page hero handles its own top offset */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* RERA-specific Footer */}
      <ReraFooter />
    </div>
  );
};

export default ReraLayout;
