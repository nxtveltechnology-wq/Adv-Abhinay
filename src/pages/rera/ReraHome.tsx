import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Users,
  Building2,
  Scale,
  BookOpen,
  HelpCircle,
  Award,
  Calendar,
} from "lucide-react";
import {
  reraServices,
  backgroundImages,
  awards,
  clients,
} from "../../data/siteData";
import SEO from "../../components/SEO";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ReraHome = () => {
  const statsRef = useRef(null);

  // Mock Data for "Latest RERA News" & "Training" as they are not in siteData
  const reraNews = [
    {
      id: 1,
      title: "New RERA Guidelines for Project Extensions",
      date: "Oct 15, 2023",
      excerpt:
        "The RERA authority has issued new notifications regarding the extension of project completion deadlines...",
    },
    {
      id: 2,
      title: "Supreme Court Ruling on Homebuyer Rights",
      date: "Sep 22, 2023",
      excerpt:
        "In a landmark judgment, the Supreme Court has upheld the rights of homebuyers as financial creditors...",
    },
    {
      id: 3,
      title: "UP RERA Reduces Compliance Burden",
      date: "Aug 10, 2023",
      excerpt:
        "Steps taken to simplify the quarterly progress report filing process for smaller real estate projects...",
    },
  ];

  const importantLinks = [
    {
      name: "Agent Registration",
      icon: Users,
      path: "/rera/agent-registration",
    },
    {
      name: "Project Registration",
      icon: Building2,
      path: "/rera/registration",
    },
    { name: "RERA Act & Rules", icon: BookOpen, path: "/rera/compliance" },
    {
      name: "Filing Complaints",
      icon: Scale,
      path: "/rera/dispute-resolution",
    },
    {
      name: "RERA Judgments",
      icon: FileText,
      path: "/rera/dispute-resolution",
    },
    { name: "Cause List", icon: Calendar, path: "/rera" },
    { name: "Defaulter List", icon: HelpCircle, path: "/rera" },
    { name: "Calculate Fees", icon: Scale, path: "/rera/packages" },
  ];

  const MotionLink = motion(Link);

  return (
    <div className="font-sans text-gray-800">
      <SEO
        title="RERA Consultants in Patna | RERA Registration & Litigation Services - BrandMax Studio"
        description="Expert RERA consultants in Patna for Project Registration, Agent Registration, QPR Filings, and Dispute Resolution. Protect your real estate interests."
        keywords="RERA Consultant Patna, RERA Registration Bihar, RERA Litigation Lawyer, Real Estate Law Firm"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[720px] md:min-h-[760px] flex items-center bg-slate-900 overflow-hidden pt-28 md:pt-32 pb-12 md:pb-16">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImages.rera})` }}
        >
          <div className="absolute inset-0 bg-[#0a1e3c]/90"></div>{" "}
          {/* Dark Blue Overlay */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:w-1/2 text-white text-center md:text-left order-2 md:order-1 w-full px-2 md:px-0"
            >
              <div className="inline-block bg-[#fbbf24] text-[#0a1e3c] text-[10px] md:text-xs font-bold px-3 py-1 rounded-sm mb-4 uppercase tracking-wider">
                India's Top RERA Consultants
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                RERA Registration <br />
                <span className="text-[#fbbf24]">Easy & Simple</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
                Complete legal protection for Developers, Agents, and
                Homebuyers. From registration to litigation, we handle it all
                with precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/rera/registration"
                  className="bg-[#fbbf24] hover:bg-yellow-400 text-[#0a1e3c] font-bold py-3 px-6 md:py-3.5 md:px-8 rounded-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Project Registration <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/rera/agent-registration"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-3 px-6 md:py-3.5 md:px-8 rounded-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  Agent Registration
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4 text-xs md:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>100% Compliance Record</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content — Mobile: icon grid | Desktop: orbital diagram */}

            {/* === MOBILE ICON GRID (hidden on md+) === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full order-1 md:hidden px-4"
            >
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    ...reraServices[0],
                    color: "bg-blue-500",
                    path: "/rera/registration",
                  },
                  {
                    ...reraServices[1],
                    color: "bg-green-500",
                    path: "/rera/agent-registration",
                  },
                  {
                    ...reraServices[2],
                    color: "bg-purple-500",
                    path: "/rera/compliance",
                  },
                  {
                    ...reraServices[3],
                    color: "bg-red-500",
                    path: "/rera/dispute-resolution",
                  },
                  {
                    ...reraServices[4],
                    color: "bg-indigo-500",
                    path: "/rera/pre-project",
                  },
                  {
                    ...reraServices[5],
                    color: "bg-orange-500",
                    path: "/rera/allottees",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors group"
                  >
                    <div
                      className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center shadow-md`}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[9px] font-bold text-white/80 uppercase tracking-wide text-center leading-tight group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* === DESKTOP ORBITAL DIAGRAM (hidden below md) === */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex w-full md:w-1/2 relative items-center justify-center md:h-[520px] order-1 md:order-2"
            >
              <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                {/* Rotating Borders */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                {/* Central Logo/Text */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <div className="bg-[#0a1e3c] p-6 rounded-full border-4 border-[#fbbf24] shadow-[0_0_30px_rgba(251,191,36,0.2)] text-center w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center cursor-default z-20">
                    <Scale className="h-6 w-6 md:h-8 md:w-8 text-[#fbbf24] mb-1" />
                    <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider leading-tight">
                      LEX RERA
                      <br />
                      Advisors
                    </span>
                  </div>
                </motion.div>

                {/* Circular Menu Items */}
                {[
                  {
                    ...reraServices[0],
                    color: "bg-blue-500",
                    angle: 270,
                    path: "/rera/registration",
                  }, // Project Reg (Top)
                  {
                    ...reraServices[1],
                    color: "bg-green-500",
                    angle: 330,
                    path: "/rera/agent-registration",
                  }, // Agent Reg (Top Right)
                  {
                    ...reraServices[2],
                    color: "bg-purple-500",
                    angle: 30,
                    path: "/rera/compliance",
                  }, // Compliance (Bottom Right)
                  {
                    ...reraServices[3],
                    color: "bg-red-500",
                    angle: 90,
                    path: "/rera/dispute-resolution",
                  }, // Litigation (Bottom)
                  {
                    ...reraServices[4],
                    color: "bg-indigo-500",
                    angle: 150,
                    path: "/rera/pre-project",
                  }, // Promoter Advisory (Bottom Left)
                  {
                    ...reraServices[5],
                    color: "bg-orange-500",
                    angle: 210,
                    path: "/rera/allottees",
                  }, // Allottees (Top Left)
                ].map((item, index) => {
                  const angleRad = (item.angle * Math.PI) / 180;
                  const radius = 160; // Max radius
                  // 400x400 container -> center at 200,200
                  const centerOffset = 200;
                  const itemSize = 100;
                  const halfItem = itemSize / 2;

                  // Final Position
                  const x =
                    centerOffset + radius * Math.cos(angleRad) - halfItem;
                  const y =
                    centerOffset + radius * Math.sin(angleRad) - halfItem;

                  // Start Position (Center)
                  const startX = centerOffset - halfItem;
                  const startY = centerOffset - halfItem;

                  return (
                    <MotionLink
                      key={index}
                      to={item.path}
                      className="absolute flex flex-col items-center justify-center group"
                      initial={{
                        left: startX,
                        top: startY,
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{ left: x, top: y, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "circOut",
                        delay: 0.6 + index * 0.1,
                      }}
                      style={{
                        width: `${itemSize}px`,
                        height: `${itemSize}px`,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg border-2 border-white/20 group-hover:border-[#fbbf24] transition-all duration-300 relative z-20`}
                      >
                        <item.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </motion.div>
                      <div className="bg-white/10 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-sm mt-2 border border-white/10 group-hover:bg-[#fbbf24] group-hover:text-[#0a1e3c] transition-colors duration-300">
                        <span className="text-[8px] md:text-[10px] font-bold text-white uppercase whitespace-nowrap group-hover:text-[#0a1e3c]">
                          {item.title}
                        </span>
                      </div>
                    </MotionLink>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0a1e3c] mb-4">
              Our Services
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[#fbbf24] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We provide streamlined solutions for every stakeholder in the Real
              Estate ecosystem.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {reraServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-[#fbbf24] group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon className="h-24 w-24 text-[#0a1e3c]" />
                </div>

                <div className="bg-blue-50 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0a1e3c] transition-colors duration-300">
                  <service.icon className="h-7 w-7 md:h-8 md:w-8 text-[#0a1e3c] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#0a1e3c] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {service.slug && (
                  <Link
                    to={`/rera/${service.slug}`}
                    className="inline-flex items-center text-[#fbbf24] font-bold text-sm tracking-wide uppercase hover:text-[#d97706] transition-colors"
                  >
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- LATEST NEWS & UPDATES --- */}
      <section className="py-12 md:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1e3c] mb-2">
                RERA News & Updates
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Stay informed with the latest notifications and judgments.
              </p>
            </div>
            <Link
              to="/blogs"
              className="hidden md:inline-block px-6 py-2 border border-[#0a1e3c] text-[#0a1e3c] font-semibold text-sm hover:bg-[#0a1e3c] hover:text-white transition-colors rounded-sm uppercase tracking-wider"
            >
              View All News
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reraNews.map((news) => (
              <div
                key={news.id}
                className="bg-white border border-gray-200 hover:border-[#fbbf24] transition-colors group"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/800x600?law,building&sig=${news.id}`}
                    alt="News"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a1e3c] text-white text-[10px] md:text-xs font-bold px-3 py-1">
                    RERA UPDATES
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-xs text-gray-400 font-semibold mb-2 block">
                    {news.date}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#0a1e3c] mb-3 group-hover:text-[#d97706] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link
                    to="/blogs"
                    className="text-xs md:text-sm font-bold text-[#0a1e3c] hover:underline"
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/blogs"
              className="inline-block px-6 py-2 border border-[#0a1e3c] text-[#0a1e3c] font-semibold text-sm hover:bg-[#0a1e3c] hover:text-white transition-colors rounded-sm uppercase tracking-wider"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* --- IMPORTANT LINKS --- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#0a1e3c] mb-8 md:mb-12">
            Important Links
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {importantLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
              >
                <div className="p-3 md:p-4 bg-gray-50 rounded-full mb-3 md:mb-4 group-hover:bg-[#fbbf24]/20 transition-colors">
                  <link.icon className="h-6 w-6 md:h-8 md:w-8 text-gray-600 group-hover:text-[#d97706] transition-colors" />
                </div>
                <span className="text-center font-semibold text-xs md:text-sm text-gray-700 group-hover:text-[#0a1e3c] transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATISTICS COUNTER --- */}
      <div ref={statsRef} className="bg-[#0a1e3c] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { label: "Project Registrations", value: "500+" },
              { label: "Agent Registrations", value: "1200+" },
              { label: "Dispute Cases Solved", value: "850+" },
              { label: "Experience", value: "12+ Yrs" },
            ].map((stat, idx) => (
              <div key={idx} className="px-2 md:px-4">
                <div className="text-3xl md:text-5xl font-bold text-[#fbbf24] mb-2 font-serif">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-base text-gray-300 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TRAINING & WORKSHOPS --- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1e3c] mb-4 md:mb-6">
                RERA Training & Industry Workshops
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                We regularly conduct workshops for Builders, CAs, and Architects
                to keep them updated with the latest RERA compliance norms. Our
                training modules are designed to simplify complex legal
                terminologies.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 text-left inline-block lg:block">
                {[
                  "Quarterly Compliance Workshops",
                  "Agent Certification Training",
                  "Promoter Legal Awareness Drive",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#fbbf24]"></div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="block">
                <Link
                  to="/contact"
                  className="bg-[#0a1e3c] text-white px-6 py-3 md:px-8 md:py-3 rounded-sm font-bold hover:bg-[#1e3a8a] transition-colors inline-block text-sm md:text-base"
                >
                  Request a Workshop
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&h=300&fit=crop"
                alt="Workshop 1"
                className="rounded-lg shadow-lg w-full h-32 md:h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1558403194-611308249627?w=500&h=300&fit=crop"
                alt="Workshop 2"
                className="rounded-lg shadow-lg w-full h-32 md:h-40 object-cover mt-4 md:mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
                alt="Workshop 3"
                className="rounded-lg shadow-lg w-full h-32 md:h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop"
                alt="Workshop 4"
                className="rounded-lg shadow-lg w-full h-32 md:h-40 object-cover mt-4 md:mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- AWARDS SECTION --- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1e3c] mb-8 md:mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 md:h-8 md:w-8 text-[#d97706]" />
                </div>
                {award.image && (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-28 md:h-32 object-cover mb-4 rounded-md"
                  />
                )}
                <h3 className="text-base md:text-lg font-bold text-[#0a1e3c] mb-1">
                  {award.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {award.organization}, {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENTS SECTION --- */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm md:text-xl font-bold text-gray-400 mb-6 md:mb-8 uppercase tracking-widest">
            Trusted By Builders & Agencies Nationwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client) => (
              <div
                key={client.id}
                className="w-24 md:w-32 h-12 md:h-16 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <div className="bg-[#0a1e3c] py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 hidden md:block">
          <Scale className="h-64 w-64 text-white" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            "Building Trust Through Every Filing"
          </h2>
          <p className="text-gray-300 mb-8 text-base md:text-lg">
            At Lex RERA Advisors, we don't just file forms; we build the legal
            backbone of your real estate projects. Partner with us for a
            seamless, compliant, and stress-free journey.
          </p>
          <Link
            to="/contact"
            className="bg-[#fbbf24] text-[#0a1e3c] font-bold py-3 px-8 md:px-10 rounded-sm hover:bg-white hover:scale-105 transition-all shadow-xl inline-block text-sm md:text-base"
          >
            Start Your Registration Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReraHome;
