import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "#",
      children: [
        { name: "Practice Areas", path: "/practice-areas" },
        { name: "Partners", path: "/team" },
        { name: "RERA Services", path: "/rera" },
        { name: "Career", path: "/career" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && path !== "#" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-white py-4 border-b-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo (Left) */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group relative z-50"
          >
            <div className="">
              {/* <Scale className="h-5 w-5 sm:h-7 sm:w-7" /> */}
              <img
                src="/logo/vidhit-logo.png"
                alt="Vidhit Law Associates Logo"
                className="w-14"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-sans-serif font-bold text-primary  leading-none">
                VIDHIT LAW ASSOCIATES
              </span>
              <span className="text-[8px] sm:text-[10px] text-primary-light/80 tracking-[0.1em] sm:tracking-[0.2em] uppercase font-medium mt-0.5 sm:mt-1">
                Advocates & Legal Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Menu (Centered) */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.children ? (
                  <button
                    className={`flex items-center gap-1 text-sm uppercase tracking-widest font-medium transition-colors duration-300 py-2 group ${
                      link.children.some((child) => isActive(child.path))
                        ? "text-accent"
                        : "text-primary/70 hover:text-accent"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${hoveredIndex === index ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 py-2 group ${
                      isActive(link.path)
                        ? "text-accent"
                        : "text-primary/70 hover:text-accent"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                        isActive(link.path)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
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
                      className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-md overflow-hidden border border-gray-100 pt-2 pb-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors ${
                            isActive(child.path)
                              ? "text-accent bg-gray-50"
                              : "text-gray-700 hover:text-accent"
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

          {/* Right Section (Contact & Mobile Menu) */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:block px-7 py-3 bg-primary text-white text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-sm"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-accent focus:outline-none transition-colors p-2"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <div className="space-y-2">
                      <div className="text-sm uppercase tracking-wider font-bold text-primary/80 pb-1 border-b border-gray-100 mb-2">
                        {link.name}
                      </div>
                      <div className="pl-4 space-y-3 border-l-2 border-gray-100/50">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-sm font-medium hover:text-accent transition-colors ${
                              isActive(child.path)
                                ? "text-accent"
                                : "text-gray-600"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-sm uppercase tracking-wider font-medium hover:text-accent transition-colors ${
                        isActive(link.path) ? "text-accent" : "text-primary/80"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 bg-primary text-white text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-colors shadow-md mt-4"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
