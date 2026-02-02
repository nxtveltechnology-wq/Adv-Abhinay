import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, HelpCircle } from "lucide-react";
import SectionWrapper from "../../components/SectionWrapper";
import {
  reraServices,
  reraPackages,
  backgroundImages,
} from "../../data/siteData";

const ReraHome = () => {
  return (
    <div className="flex flex-col">
      {/* 4.1 RERA Hero Section */}
      <div className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 fixed-bg"
          style={{ backgroundImage: `url(${backgroundImages.rera})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-accent/20">
                Specialized Practice
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              RERA <span className="text-accent">Advisory & Litigation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Comprehensive legal solutions for Real Estate Projects, Agents,
              and Allottees. From registration to dispute resolution, we ensure
              seamless compliance with the RERA Act.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/rera/packages"
                className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-sm transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                View Engagement Models <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-sm transition-all backdrop-blur-sm"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4.2 Services Grid */}
      <SectionWrapper background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Our RERA Capabilities
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end support for all stakeholders in the real
            estate sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reraServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-accent/30"
            >
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.desc}
              </p>
              {service.slug && (
                <Link
                  to={`/rera/${service.slug}`}
                  className="inline-flex items-center text-accent font-semibold text-sm hover:text-accent-hover transition-colors group/link"
                >
                  Learn More{" "}
                  <ArrowRight className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4.3 Engagement Models (Packages) */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Text Side */}
          <div className="lg:col-span-1 pr-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Structured Engagement Models
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer flexible engagement packages tailored to the specific
              needs of Developers, Agents, and Individual Litigants.
            </p>
            <Link
              to="/rera/packages"
              className="text-accent font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors flex items-center gap-2"
            >
              Compare All Packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Cards Side */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reraPackages.slice(0, 2).map((pkg, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm relative overflow-hidden"
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-1">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{pkg.subtitle}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-gray-400 italic pl-6">
                    + more features
                  </li>
                </ul>
                <Link
                  to="/rera/packages"
                  className="block w-full text-center py-2 border border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-white transition-colors text-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4.4 Trust/Disclaimer Section */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Why Trust LEX RERA ADVISORS?
              </h3>
              <p className="text-gray-600 mb-6">
                We are not just consultants; we are litigators. This gives us a
                unique advantage—we know exactly where compliance failures lead
                in court. Our advisory is litigation-proof.
              </p>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-accent">50+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Projects Registered
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-accent">200+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Hearings Attended
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-sm border-l-4 border-yellow-500 shadow-sm">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-6 w-6 text-yellow-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Legal Disclaimer
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    The information provided here is for general awareness and
                    does not constitute legal advice. RERA laws are subject to
                    state-specific rules and amendments. Please consult with our
                    legal experts for advice specific to your case/project type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReraHome;
