import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, BookOpen, Shield } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import BlogSection from "../components/home/BlogSection";

import FloatingReraCard from "../components/home/FloatingReraCard";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AskQuerySection from "../components/home/AskQuerySection";
import bgBanner from "../assets/bg-banner.jpeg";
import {
  practiceAreas,
  backgroundImages,
  coreValues,
  heroSliderImages,
  partners,
  supportTeam,
  vidhitClients,
} from "../data/siteData";
import { Building2 } from "lucide-react";
import SEO from "../components/SEO";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [bgBanner, ...heroSliderImages];
  const allTeam = [...partners, ...supportTeam];
  const carouselItems = [...allTeam, ...allTeam, ...allTeam, ...allTeam];

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
      <SEO
        title="Vidhit Law Associates | Top Advocates & Legal Consultants in Patna"
        description="Vidhit Law Associates is a premier law firm in Patna providing comprehensive legal solutions in Civil, Criminal, RERA, and Corporate Law."
        keywords="Lawyer in Patna, Advocate in Patna, High Court Lawyer, RERA Consultant, Best Law Firm in Patna"
      />
      {/* 3.1 Hero Section */}
      <section className="relative text-white pt-[120px] md:pt-[180px] pb-20 lg:pb-24 overflow-hidden flex items-center min-h-[85vh] bg-gray-900">
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
              WELCOME TO <br /> VIDHIT LAW ASSOCIATES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-2 font-light drop-shadow-md">
              Solicitors | Lawyers | Counsellors
            </p>
            <p className="text-base text-gray-300 mb-4 max-w-2xl leading-relaxed italic border-l-4 border-accent pl-4">
              "Where Law Meets Trust — Advice that Matters, Crafted in the Art
              of Law"
            </p>

            <p className="text-gray-200 mb-8 max-w-2xl leading-relaxed text-base pl-1">
              A full-service law firm providing ethical, strategic, and
              effective legal solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-sm transition-all flex items-center gap-2 shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1 text-sm uppercase tracking-wide"
              >
                About The Firm <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating RERA Card */}
      <FloatingReraCard />

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

        <div className="max-w-7xl mx-auto pt-30 lg:py-2 px-4 sm:px-6 lg:px-8 relative z-10">
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
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-3xl font-bold text-accent mb-1">
                        15+
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-normal sm:tracking-wider leading-tight">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-3xl font-bold text-primary mb-1">
                        500+
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-normal sm:tracking-wider leading-tight">
                        Cases Won
                      </div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-3xl font-bold text-green-600 mb-1">
                        98%
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-normal sm:tracking-wider leading-tight">
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
          className="absolute inset-0 bg-cover bg-center opacity-10"
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
                    Structured and time-bound legal processes with defined
                    stages of engagement.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.slice(0, 8).map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:-translate-y-1 h-full"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${area.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors duration-300" />
              </div>

              {/* Overlapping Icon */}
              <div className="absolute top-48 left-6 -translate-y-1/2 z-20">
                <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:bg-accent transition-colors duration-300">
                  {area.icon && <area.icon className="h-6 w-6 text-white" />}
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-10 pb-8 px-6 flex flex-col flex-grow">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 text-left">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3 text-left">
                  {area.desc}
                </p>
                <div className="mt-auto text-left">
                  <span className="inline-flex items-center text-sm font-bold text-accent group-hover:text-primary transition-colors tracking-wide uppercase cursor-pointer">
                    View Detail{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
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

      {/* 3.4.5 Awards & Recognition */}
      {/* <AwardsSection /> */}

      {/* 3.6 Our Team Carousel */}
      <section className="py-24 bg-slate-50 overflow-hidden relative border-y border-gray-100">
        <div className="text-center mb-16 relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative w-full overflow-hidden flex whitespace-nowrap group">
          <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] w-max">
            {carouselItems.map((member, index) => (
              <Link
                key={index}
                to="/team"
                className="flex flex-col items-center mx-6 w-40 sm:w-48 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-accent/10 mb-5 bg-white flex-shrink-0 flex items-end justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-800 text-center truncate w-full group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <span className="text-[11px] sm:text-xs text-accent font-bold uppercase tracking-widest text-center w-full truncate mt-1">
                  {member.role}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="mt-16 text-center relative z-10">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors border-b-2 border-accent pb-1"
          >
            Meet Our Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 3.6.5 Testimonials */}
      <TestimonialsSection />

      {/* --- CLIENTS SECTION --- */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1e3c] mb-4">
            Trusted Clients
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative w-full flex flex-col gap-6 md:gap-8 overflow-hidden">
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scrollRight {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-scroll-left {
              animation: scrollLeft 40s linear infinite;
            }
            .animate-scroll-right {
              animation: scrollRight 40s linear infinite;
            }
            .pause-on-hover:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Top Row - Moving Left */}
          <div className="flex w-max animate-scroll-left pause-on-hover px-4">
            {[
              ...vidhitClients,
              ...vidhitClients,
              ...vidhitClients,
              ...vidhitClients,
            ].map((client, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-48 md:w-64 h-24 md:h-28 mx-3 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-3 shadow-sm group hover:border-[#fbbf24] hover:shadow-md transition-all duration-300 shrink-0"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-slate-50 text-gray-400 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300 mb-2">
                  <Building2 className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#0a1e3c] text-center line-clamp-1 transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row - Moving Right */}
          <div className="flex w-max animate-scroll-right pause-on-hover px-12">
            {[
              ...vidhitClients,
              ...vidhitClients,
              ...vidhitClients,
              ...vidhitClients,
            ]
              .reverse()
              .map((client, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="w-48 md:w-64 h-24 md:h-28 mx-3 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-3 shadow-sm group hover:border-[#0a1e3c] hover:shadow-md transition-all duration-300 shrink-0"
                >
                  <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-slate-50 text-gray-400 group-hover:bg-[#0a1e3c]/10 group-hover:text-[#0a1e3c] transition-all duration-300 mb-2">
                    <Building2 className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-500 group-hover:text-accent text-center line-clamp-1 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 3.7 Blog Section */}
      <BlogSection />

      {/* 3.8 Contact CTA - Streamlined */}
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

      {/* 3.9 Ask Any Query Section */}
      <AskQuerySection />
    </div>
  );
};

export default Home;
