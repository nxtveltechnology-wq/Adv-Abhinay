import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Scale } from "lucide-react";
import { useBrand } from "../../../context/BrandContext";

const reraNavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/packages" },
  { name: "Contact", path: "/contact" },
];

const reraServices = [
  { name: "PRE-PROJECT ASSISTANCE", path: "/pre-project" },
  { name: "AGENT SERVICES", path: "/agent-services" },
  { name: "PROJECT SERVICES", path: "/project-services" },
  { name: "CONSULTANCY SERVICES", path: "/consultancy" },
  { name: "TRAINING SERVICES", path: "/training" },
  { name: "OTHER SERVICES", path: "/other-services" },
];

const ReraFooter = () => {
  const currentYear = new Date().getFullYear();
  const brand = useBrand();

  return (
    <footer className="bg-[#0a1628] text-gray-300 border-t border-gray-800 font-sans">
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src={brand.footerLogo}
                alt={brand.footerLogoAlt}
                className="w-36 md:w-44 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Specialized legal firm focused on RERA compliance, project
              registration, and real estate regulatory advisory for developers
              and homebuyers.
            </p>
            {/* Icon with tagline */}
            <div className="flex items-center gap-2 text-amber-400">
              <Scale className="h-4 w-4 flex-shrink-0" />
              <span className="text-[10px] uppercase tracking-widest font-semibold">
                {brand.tagline}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {reraNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-amber-500/60 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {reraServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-amber-500/60 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${brand.phoneRaw}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-amber-400 transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-500/70 group-hover:text-amber-400" />
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">
                      Phone
                    </p>
                    <span>{brand.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${brand.altPhoneRaw}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-amber-400 transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-500/70 group-hover:text-amber-400" />
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">
                      Mobile
                    </p>
                    <span>{brand.altPhone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-amber-400 transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-500/70 group-hover:text-amber-400" />
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <span>{brand.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-500/70" />
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">
                      Office
                    </p>
                    <span>Patna, Bihar, India</span>
                  </div>
                </div>
              </li>
            </ul>

            {/* Book Consultation CTA */}
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-[11px] uppercase tracking-wider font-bold rounded-sm transition-all duration-200 shadow-md hover:shadow-amber-900/30 hover:shadow-lg"
            >
              Book Consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-500">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} {brand.copyright}. All Rights Reserved.
            </p>
            <p className="opacity-70">{brand.barCouncilNote}</p>
          </div>
          <div className="flex gap-5">
            <Link
              to="/disclaimer"
              className="hover:text-amber-400 transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-amber-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ReraFooter;
