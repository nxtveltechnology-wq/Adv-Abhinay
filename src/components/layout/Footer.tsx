import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useBrand } from "../../context/BrandContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const brand = useBrand();

  return (
    <footer className="bg-[#0b1120] text-gray-300 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Logo */}
          <div className="lg:col-span-1">
            <Link to="/" className="block">
              <img
                src={brand.footerLogo}
                alt={brand.footerLogoAlt}
                className="w-48 lg:w-56 object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 font-medium tracking-wide">
              {brand.tagline}
            </p>
          </div>

          {/* Column 2: Main Navigation */}
          <div className="flex flex-col space-y-4">
            {[
              { name: "ABOUT US", path: "/about" },
              { name: "OUR TEAM", path: "/team" },
              { name: "NEWS & INSIGHTS", path: "/blogs" },
              { name: "CAREERS", path: "/career" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Column 3: Practices */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8892b0] mb-6">
              Practices
            </h4>
            <ul className="space-y-3">
              {[
                "Civil Litigation",
                "Criminal Defense",
                "Constitutional Law",
                "Corporate Law",
                "RERA Advisory",
                "Family Law",
              ].map((practice) => (
                <li key={practice}>
                  <Link
                    to="/practice-areas"
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {practice}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#8892b0] mb-4">
                Phone
              </h4>
              <div className="flex flex-col space-y-2 text-sm text-gray-300 font-medium">
                <a
                  href={`tel:${brand.phoneRaw}`}
                  className="hover:text-accent transition-colors"
                >
                  T {brand.phone}
                </a>
                <a
                  href={`tel:${brand.altPhoneRaw}`}
                  className="hover:text-accent transition-colors"
                >
                  M {brand.altPhone}
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#8892b0] mb-4">
                Email
              </h4>
              <a
                href={`mailto:${brand.email}`}
                className="text-sm text-gray-300 font-medium hover:text-accent transition-colors"
              >
                {brand.email}
              </a>
            </div>
          </div>

          {/* Column 5: Follow Us */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8892b0] mb-6">
              Follow Us
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="flex items-center group text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-accent transition-colors"
              >
                LinkedIn{" "}
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="flex items-center group text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-accent transition-colors"
              >
                Twitter{" "}
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="flex items-center group text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-accent transition-colors"
              >
                Instagram{" "}
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} {brand.copyright}. All Rights Reserved.
            </p>
            <p className="opacity-70">{brand.barCouncilNote}</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link
              to="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
