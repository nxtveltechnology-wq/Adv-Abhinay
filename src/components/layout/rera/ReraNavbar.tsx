import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBrand } from "../../../context/BrandContext";

interface NavLink {
  name: string;
  path: string;
}

const reraNavLinks: NavLink[] = [
  { name: "Home", path: "/rera" },
  { name: "About", path: "/rera/about" },
  { name: "Services", path: "/rera/services" },
  { name: "Packages", path: "/rera/packages" },
  { name: "Contact", path: "/rera/contact" },
];

const ReraNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const brand = useBrand();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/rera" && pathname === "/rera") return true;
    if (path !== "/rera" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-lg" : "shadow-sm border-b border-gray-100"
      }`}
    >
      {/* Top utility bar */}
      <div className="bg-[#0a1628] text-gray-300 py-1.5 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand label */}
          <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400 hidden sm:block">
            Lex RERA — Real Estate Regulatory Experts
          </span>
          {/* Contact info */}
          <div className="flex items-center space-x-4 ml-auto text-[10px] md:text-[11px] uppercase tracking-wider font-semibold">
            <a
              href={`tel:${brand.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-2.5 w-2.5 md:h-3 md:w-3 text-amber-400" />
              <span>{brand.phone}</span>
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-2.5 w-2.5 md:h-3 md:w-3 text-amber-400" />
              <span>{brand.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/rera"
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <div className="relative">
              <img
                src={brand.logo}
                alt={brand.logoAlt}
                className="w-12 sm:w-14 md:w-16 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-slate-900 leading-tight tracking-tight">
                {brand.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-amber-600 tracking-widest uppercase font-semibold mt-0.5">
                {brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {reraNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-[13px] uppercase tracking-wider font-bold transition-colors duration-200 rounded-sm group ${
                  isActive(link.path)
                    ? "text-amber-600"
                    : "text-slate-700 hover:text-amber-600"
                }`}
              >
                {link.name}
                {/* Active underline */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full" />
                )}
                {/* Hover underline */}
                {!isActive(link.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              to="/rera/contact"
              className="ml-4 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-[12px] uppercase tracking-wider font-bold rounded-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-1.5"
            >
              Book Consultation
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-amber-600 focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden absolute w-full left-0 top-full"
          >
            <div className="px-6 py-6 space-y-2">
              {reraNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm uppercase tracking-wider font-bold transition-colors ${
                    isActive(link.path)
                      ? "text-amber-600 bg-amber-50"
                      : "text-slate-700 hover:text-amber-600 hover:bg-amber-50/50"
                  }`}
                >
                  <ChevronRight
                    className={`h-3.5 w-3.5 ${
                      isActive(link.path) ? "text-amber-500" : "text-gray-400"
                    }`}
                  />
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link
                  to="/rera/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm uppercase tracking-wider font-bold rounded-sm transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ReraNavbar;
