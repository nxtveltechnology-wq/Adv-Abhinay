import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBrand } from "../../context/BrandContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { pathname } = useLocation();
  const brand = useBrand();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavLink {
    name: string;
    path: string;
    children?: { name: string; path: string }[];
  }

  // Top Row Links
  const topRowLinks: NavLink[] = [
    { name: "News & Insights", path: "/blogs" },
    { name: "Awards", path: "#" }, // Placeholder
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  // Bottom Row Links
  const bottomRowLinks: NavLink[] = [
    {
      name: "About Us",
      path: "/about",
    },
    { name: "Our Team", path: "/team" },
    {
      name: "Practices",
      path: "#",
      children: [
        { name: "Practice Areas", path: "/practice-areas" },
        { name: "RERA Services", path: "https://adv-abhinay-odij.vercel.app/" },
      ],
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && path !== "#" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent bg-white ${
        scrolled ? "shadow-md" : "border-b-gray-100"
      }`}
    >
      {/* Top Bar - Contact Info */}
      <div className="bg-[#0b1120] text-gray-300 py-1 md:py-1.5 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-4 md:space-x-6 text-[9px] md:text-[11px] uppercase tracking-wider font-semibold">
          <a
            href={`tel:${brand.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="h-2.5 w-2.5 md:h-3 md:w-3 text-accent" />
            <span>{brand.phone}</span>
          </a>
          <a
            href={`mailto:${brand.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="h-2.5 w-2.5 md:h-3 md:w-3 text-accent" />
            <span>{brand.email}</span>
          </a>
        </div>
      </div>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "py-2" : "py-2 md:py-2"
        }`}
      >
        <div className="flex justify-between items-center relative">
          {/* Logo (Left) */}
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-3 group relative z-50"
          >
            <div className="">
              <img
                src={brand.logo}
                alt={brand.logoAlt}
                className="w-12 sm:w-16 md:w-20 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-sans-serif font-bold text-slate-900 leading-none tracking-tight">
                {brand.name}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-slate-500 tracking-[0.1em] md:tracking-[0.2em] uppercase font-medium mt-0.5 md:mt-1">
                {brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Menu (Right - Two Rows) */}
          <div className="hidden lg:flex flex-col items-end gap-y-2">
            {/* Top Row */}
            <div className="flex items-center space-x-6">
              {topRowLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex items-center space-x-8 mt-1">
              {bottomRowLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {link.children ? (
                    <button
                      className={`flex items-center gap-1 text-[15px] uppercase tracking-wider font-bold transition-colors duration-300 py-2 ${
                        isActive(link.path) ||
                        link.children.some((child) => isActive(child.path))
                          ? "text-accent"
                          : "text-slate-800 hover:text-accent"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          hoveredIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative text-[15px] uppercase tracking-wider font-bold transition-colors duration-300 py-2 ${
                        isActive(link.path)
                          ? "text-accent"
                          : "text-slate-800 hover:text-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 w-56 bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100 py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={`block px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-50 transition-colors ${
                              isActive(child.path)
                                ? "text-accent bg-gray-50"
                                : "text-gray-600 hover:text-accent"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-accent focus:outline-none transition-colors p-2"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden absolute w-full left-0 top-full"
          >
            <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Combine Top and Bottom Links for Mobile */}
              {[...bottomRowLinks, ...topRowLinks].map((link) => (
                <div key={link.name}>
                  {link.children ? ( // Use optional chaining to safely access children
                    <div className="space-y-2">
                      <div className="text-sm uppercase tracking-wider font-bold text-slate-900/80 pb-1 border-b border-gray-100 mb-2">
                        {link.name}
                      </div>
                      <div className="pl-4 space-y-3 border-l-2 border-gray-100/50">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-xs font-bold uppercase tracking-wide hover:text-accent transition-colors ${
                              isActive(child.path)
                                ? "text-accent"
                                : "text-slate-600"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      onClick={() => setIsOpen(false)}
                      className={`block text-sm uppercase tracking-wider font-bold hover:text-accent transition-colors ${
                        isActive(link.path!) ? "text-accent" : "text-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
