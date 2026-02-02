import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Partners", path: "/team" },
    { name: "RERA Services", path: "/rera" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-white py-6 border-b-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2.5 bg-primary text-white rounded-sm group-hover:bg-accent transition-colors duration-300 shadow-sm">
              <Scale className="h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-primary tracking-wide leading-none">
                VIDHIT LAW ASSOCIATES
              </span>
              <span className="text-[10px] text-primary-light/80 tracking-[0.2em] uppercase font-medium mt-1">
                Advocates & Legal Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 py-2 group ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-primary/70 hover:text-accent"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-6 px-7 py-3 bg-primary text-white text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-sm"
            >
              Contact Us
            </Link>
          </div>

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
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm uppercase tracking-wider font-medium hover:text-accent transition-colors ${
                    isActive(link.path) ? "text-accent" : "text-primary/80"
                  }`}
                >
                  {link.name}
                </Link>
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
