import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Scale,
  MapPin,
  Phone,
  CheckCircle2,
  BookOpen,
  Shield,
  Users,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import bgBanner from "../assets/bg-banner.jpeg";
import {
  practiceAreas,
  backgroundImages,
  coreValues,
  heroSliderImages,
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
      <section className="relative text-white py-20 lg:py-24 overflow-hidden flex items-center min-h-[85vh] bg-gradient-to-r from-primary via-primary/95 to-primary/80">
        {/* Background Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Slider Images */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.25, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banners[currentSlide]})` }}
            />
          </AnimatePresence>

          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent opacity-80"></div>

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

      {/* 3.2 About the Firm - Extended Left/Right Sections */}
      <SectionWrapper background="light">
        <div className="text-center mb-16">
          <Scale className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            About the Firm
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Section 1: Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-sm z-0"></div>
              <img
                src={backgroundImages.court}
                alt="High Court Building"
                className="rounded-sm shadow-xl relative z-10 w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-sm z-0"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-primary">
              Commitment to Justice & Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              VIDHIT Law Associates is a premier law firm committed to the
              pursuit of justice through integrity, diligence, and professional
              excellence. Based in Bihar, the Firm represents clients before
              various Courts, Tribunals, and statutory authorities, offering
              comprehensive legal support across litigation, advisory, and
              dispute resolution.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our team of experienced advocates combines deep legal knowledge
              with a practical understanding of business and individual needs to
              deliver outcomes that matter.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-gray-700">
                  High Court Practice
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-gray-700">
                  Tribunal Representation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-gray-700">
                  Legal Advisory
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-gray-700">
                  Dispute Resolution
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-serif font-bold text-primary">
              Strategic & Analytical Approach
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that every legal challenge requires a unique strategy.
              Our approach is deeply analytical, logical, and rooted in the art
              of law. We don't just fight cases; we build comprehensive legal
              strategies to protect your rights and manage risks effectively.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-sm hover:border-accent transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <BookOpen className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      In-Depth Research
                    </h4>
                    <p className="text-sm text-gray-600">
                      Meticulous legal research to build unshakeable arguments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-sm hover:border-accent transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Shield className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Risk Mitigation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Proactive legal counsel to prevent future disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-sm z-0"></div>
              <img
                src={backgroundImages.consultation}
                alt="Legal Consultation"
                className="rounded-sm shadow-xl relative z-10 w-full h-[400px] object-cover"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-sm z-0"></div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

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
              className="group relative h-[250px] overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${area.backgroundImage})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 group-hover:to-black/30 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight">
                    {area.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-accent mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <p className="text-gray-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Partner 1 */}
          <div className="bg-white p-8 shadow-sm border-t-4 border-accent text-center group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-24 h-24 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-gray-100">
              <Users className="h-10 w-10 text-gray-400 group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">
              Abhinay Priyadarshi
            </h3>
            <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">
              Advocate, Patna High Court
            </p>
            <span className="inline-block mt-4 px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full">
              Partner
            </span>
          </div>

          {/* Partner 2 */}
          <div className="bg-white p-8 shadow-sm border-t-4 border-primary text-center group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-24 h-24 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-gray-100">
              <Users className="h-10 w-10 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">
              Jainandra Kumar
            </h3>
            <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">
              Advocate, Patna High Court
            </p>
            <span className="inline-block mt-4 px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full">
              Partner
            </span>
          </div>
        </div>
      </SectionWrapper>

      {/* 3.7 Contact */}
      <section className="py-24 bg-gray-50 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Contact Us</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-md">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Our Offices</h4>
                    <p className="text-gray-600">Boring Road Office, Patna</p>
                    <p className="text-gray-600">Kankarbagh Office, Patna</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-md">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-sm shadow-md border border-gray-100 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Need Legal Assistance?
              </h3>
              <p className="text-gray-600 mb-8">
                Contact us today to schedule a consultation with our legal
                experts.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-sm hover:bg-primary-light transition-colors shadow-lg"
              >
                Visit Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
