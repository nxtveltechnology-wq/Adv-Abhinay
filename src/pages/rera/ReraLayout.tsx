import { Outlet, Link, useLocation } from "react-router-dom";
import { Book, FileText, Scale, Shield, Users } from "lucide-react";

const ReraLayout = () => {
  const { pathname } = useLocation();

  const sidebarLinks = [
    { name: "Overview", path: "/rera", icon: Book },
    {
      name: "Pre-Project Assistance",
      path: "/rera/pre-project",
      icon: LightbulbIcon,
    },
    {
      name: "Project Registration",
      path: "/rera/registration",
      icon: FileText,
    },
    {
      name: "Agent Registration",
      path: "/rera/agent-registration",
      icon: Users,
    },
    { name: "Compliance & Filings", path: "/rera/compliance", icon: Scale },
    {
      name: "Dispute Resolution",
      path: "/rera/dispute-resolution",
      icon: Shield,
    },
    { name: "Allottees Services", path: "/rera/allottees", icon: Users },
    { name: "Legal Drafting", path: "/rera/drafting", icon: FileText },
    { name: "Packages", path: "/rera/packages", icon: Book },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* RERA Module Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h6 className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">
                Lex RERA Advisors
              </h6>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">
                Real Estate Regulatory Services
              </h1>
            </div>
            <div className="hidden md:block">
              <Scale className="h-16 w-16 text-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-4 sticky top-24">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 px-2">
                Service Menu
              </h3>
              <nav className="space-y-1">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all text-sm font-medium ${
                      pathname === link.path
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-accent"
                    }`}
                  >
                    <link.icon
                      className={`h-4 w-4 ${pathname === link.path ? "text-accent" : "text-gray-400"}`}
                    />
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 bg-accent/10 p-4 rounded-sm border border-accent/20">
                <h4 className="font-semibold text-accent-dark mb-2">
                  Need consultation?
                </h4>
                <p className="text-xs text-gray-600 mb-3">
                  Book a session with our RERA experts.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-accent hover:bg-accent-hover text-white text-xs font-bold py-2 rounded-sm transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 min-h-[500px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Helper for missing icon in main block import
import { Lightbulb as LightbulbIcon } from "lucide-react";

export default ReraLayout;
