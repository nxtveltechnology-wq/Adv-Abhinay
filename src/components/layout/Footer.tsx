import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="">
                <img
                  src="/logo/vidhit-logo-footer.png"
                  alt="Vidhit Law Associates Logo"
                  className="w-40 lg:w-55 object-contain"
                />
              </div>
              {/* <div>
                <h3 className="text-xl font-serif font-bold text-white tracking-wide leading-none">
                  VIDHIT LAW ASSOCIATES
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent mt-1.5 font-medium">
                  Advocates & Legal Consultants
                </p>
              </div> */}
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Committed to the pursuit of justice through integrity, diligence,
              and professional excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-accent transition-colors"
                >
                  Blogs & News
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-accent transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/rera"
                  className="hover:text-accent transition-colors"
                >
                  RERA Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Corporate Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Patna Offices:</strong>
                  <br />
                  Boring Road & Kankarbagh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contact@vidhitlaw.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Vidhit Law Associates. All rights
            reserved.
          </p>
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
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="text-center mt-8 text-[10px] text-gray-600 max-w-2xl mx-auto">
          <strong>Bar Council of India Compliance:</strong> The rules of the Bar
          Council of India prohibit law firms from soliciting work or
          advertising in any manner. By clicking on any link, the user
          acknowledges that there has been no solicitation to create an
          attorney-client relationship.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
