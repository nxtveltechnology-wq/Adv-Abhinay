import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Scale,
  Phone,
  BookOpen,
  Shield,
  Award,
  Linkedin,
  Mail,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import bgBanner from "../assets/bg-banner.jpeg";
import {
  practiceAreas,
  backgroundImages,
  coreValues,
  heroSliderImages,
  partners,
} from "../data/siteData";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [bgBanner, ...heroSliderImages];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* 3.1 Hero Section */}
      <section className="relative text-white py-20 lg:py-24 overflow-hidden flex items-center min-h-[85vh] bg-gray-900">
        {/* Background Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Slider Images */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banners[currentSlide]})` }}
            />
          </AnimatePresence>

          {/* Gradient Overlay for Depth - Left Fade Only */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

          {/* Animated Blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h5 className="text-accent font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3 text-sm">
              <span className="w-8 h-0.5 bg-accent"></span>
              Strategic Legal Solutions
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 drop-shadow-lg">
              VIDHIT LAW ASSOCIATES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-2 font-light drop-shadow-md">
              Professional | Strategic | Result-Oriented
            </p>
            <p className="text-base text-gray-300 mb-8 max-w-xl leading-relaxed italic border-l-4 border-accent pl-4">
              "Where Law Meets Trust — Advice that Matters, Crafted in the Art
              of Law"
            </p>

            <p className="text-gray-200 mb-8 max-w-2xl leading-relaxed text-base pl-1">
              Full-service law firm providing ethical, precise, and
              solution-oriented legal services. combining strong litigation
              capabilities with strategic legal advisory to protect rights,
              manage risks, and deliver effective outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/practice-areas"
                className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-sm transition-all flex items-center gap-2 shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1 text-sm uppercase tracking-wide"
              >
                View Practice Areas <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-sm transition-all backdrop-blur-md hover:backdrop-blur-lg text-sm uppercase tracking-wide"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3.2 About the Firm - Redesigned to Match Team Page Style */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #1e293b 10px, #1e293b 11px)`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-bold uppercase tracking-widest rounded-full mb-6">
                Who We Are
              </span>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                Commitment to Justice & Excellence
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                VIDHIT Law Associates is a premier law firm committed to the
                pursuit of justice through integrity, diligence, and
                professional excellence. Based in Bihar, the Firm represents
                clients before various Courts, Tribunals, and statutory
                authorities, offering comprehensive legal support across
                litigation, advisory, and dispute resolution.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Scale,
                    title: "Comprehensive Practice",
                    desc: "Represents clients before various Courts, Tribunals, and statutory authorities.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: BookOpen,
                    title: "In-Depth Research",
                    desc: "Meticulous legal research to build unshakeable arguments and strategies.",
                    color: "from-amber-500 to-amber-600",
                  },
                  {
                    icon: Shield,
                    title: "Risk Mitigation",
                    desc: "Proactive legal counsel to prevent future disputes and protect interests.",
                    color: "from-green-500 to-green-600",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-5 p-6 bg-white rounded-lg shadow-md hover:shadow-xl active:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-lg h-fit shadow-lg group-hover:scale-110 group-active:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-accent group-active:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-first lg:order-last"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 transform rotate-6 rounded-2xl blur-xl"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
                <img
                  src={backgroundImages.court}
                  alt="Legal Excellence"
                  className="rounded-xl w-full h-[500px] object-cover"
                />
                {/* Overlay Stats */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-accent mb-1">
                        15+
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        500+
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">
                        Cases Won
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        98%
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">
                        Success Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3.3 Core Values & Approach */}
      <section className="py-24 bg-primary text-white border-y border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${backgroundImages.books})` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">
                Our Professional Values
              </h2>
              <div className="space-y-6">
                {coreValues.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-white/5 hover:bg-white/10 transition-colors rounded-sm border border-white/5"
                  >
                    <div className="mt-1">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-10 border border-white/10 rounded-sm backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-semibold text-accent mb-8">
                Why Choose Us?
              </h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0"></span>
                  <p className="text-lg">
                    Cost-effective and time-bound legal services designed to
                    deliver value.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0"></span>
                  <p className="text-lg">
                    Practical, commercially viable, and solution-oriented legal
                    advice.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0"></span>
                  <p className="text-lg">
                    Detailed legal research and analysis that leaves no stone
                    unturned.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0"></span>
                  <p className="text-lg">
                    Proven track record of success in complex litigation and
                    advisory matters.
                  </p>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="text-accent hover:text-white font-semibold flex items-center gap-2 transition-colors uppercase tracking-widest text-sm"
                >
                  Read More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 Practice Areas Snapshot - Redesigned with Image Cards */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Practice Areas
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We offer specialized legal services across a broad spectrum of
            practice areas, ensuring expert representation for every legal need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.slice(0, 9).map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[250px] overflow-hidden rounded-sm shadow-md hover:shadow-xl active:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                style={{
                  backgroundImage: `url(${area.backgroundImage})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 group-hover:to-black/30 group-active:via-black/70 group-active:to-black/30 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-accent group-active:text-accent transition-colors leading-tight">
                    {area.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-accent mb-3 transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left" />
                  <p className="text-gray-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 group-active:translate-y-0">
                    {area.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors border-b-2 border-accent pb-1"
          >
            View All Practice Areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* 3.5 RERA Services - Background Image Added */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform origin-top-right"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay fixed-bg"
          style={{ backgroundImage: `url(${backgroundImages.rera})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase mb-4 block">
            Specialized Division
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Real Estate Regulatory & Advisory Services
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
            The Firm provides specialized regulatory and advisory support to
            real estate stakeholders, ensuring compliance, legal clarity, and
            effective resolution of disputes under applicable statutory
            frameworks.
          </p>

          <Link
            to="/rera"
            className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-sm transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-accent/20"
          >
            Explore RERA Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 3.6 Partners */}
      <SectionWrapper background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Partners
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Top Accent Bar */}
                <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>

                <div className="p-10">
                  {/* Profile Image Section */}
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8">
                    <div className="relative flex-shrink-0">
                      {/* Image with Decorative Ring */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 blur-md"></div>
                      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-accent/10">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      {/* Verified Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-accent text-white p-2 rounded-full shadow-lg">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-serif font-bold text-primary mb-2 group-hover:text-accent group-active:text-accent transition-colors">
                        {partner.name}
                      </h3>

                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent/10 to-primary/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent/20">
                          {partner.role}
                        </span>
                      </div>

                      <p className="text-gray-700 font-semibold mb-4 flex items-center justify-center sm:justify-start gap-2">
                        <Scale className="h-4 w-4 text-accent" />
                        {partner.designation}
                      </p>

                      {/* Social Links - Placeholder */}
                      <div className="flex gap-3 justify-center sm:justify-start">
                        <button className="p-2 bg-gray-100 hover:bg-accent active:bg-accent hover:text-white active:text-white text-gray-600 rounded-full transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-gray-100 hover:bg-accent active:bg-accent hover:text-white active:text-white text-gray-600 rounded-full transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-gray-100 hover:bg-accent active:bg-accent hover:text-white active:text-white text-gray-600 rounded-full transition-colors">
                          <Phone className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {partner.description}
                  </p>
                </div>

                {/* Bottom Gradient Accent */}
                <div className="h-1 bg-gradient-to-r from-primary/5 via-accent/20 to-primary/5"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 3.7 Contact CTA - Streamlined */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImages.team})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Need Expert Legal Guidance?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            We are here to help you navigate complex legal challenges with ease
            and confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-sm transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-accent/20"
          >
            Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
