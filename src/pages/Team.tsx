import { Scale, Award, HeartHandshake, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  partners,
  supportTeam,
  backgroundImages,
  galleryImages,
  type Partner,
} from "../data/siteData";
import SEO from "../components/SEO";
import { useState } from "react";

const TeamCard = ({
  member,
  index,
  isPartner = false,
  onClick,
}: {
  member: Partner;
  index: number;
  isPartner?: boolean;
  onClick: (member: Partner) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative w-full ${
        isPartner ? "h-[540px]" : "h-[380px]"
      } cursor-pointer group bg-slate-100 shadow-xl overflow-hidden rounded-2xl border border-gray-100 flex flex-col`}
      onClick={() => onClick(member)}
    >
      {/* Top Image Portion */}
      <div className="absolute inset-0 h-full w-full bg-slate-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[80%] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* Diagonal White Background */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white transition-all duration-300"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
          height: "30%",
        }}
      >
        <div className="pt-8 pb-4 px-4 text-center h-full flex flex-col justify-between items-center relative z-10 w-full">
          <div className="flex-1 flex flex-col justify-center w-full">
            <h3 className="text-xl font-medium text-slate-800 mb-1 w-full truncate">
              {member.name}
            </h3>
            {/* Minimal green line */}
            <div className="w-8 h-0.5 bg-emerald-600 mx-auto my-2.5"></div>
            <p className="text-sm text-gray-500 px-2 line-clamp-1 w-full">
              {member.designation}
            </p>
          </div>

          {/* Contact options removed per user request */}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<Partner | null>(null);

  return (
    <div className="flex flex-col bg-slate-50 relative">
      <SEO
        title="Our Team | Vidhit Law Associates - Experienced Advocates in Patna"
        description="Meet our team of experienced advocates and legal experts at Vidhit Law Associates, Patna. Specialists in Civil, Criminal, RERA, and Corporate Law."
        keywords="Advocates Team Patna, Legal Experts Bihar, Vidhit Law Partners, Lawyers Profile, Advocate Abhinay Priyadarshi"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/95 to-slate-900 text-white pt-[140px] md:pt-[180px] pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImages.team})` }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent text-sm font-bold uppercase tracking-widest rounded-full mb-6 border border-accent/30">
              Our Leadership
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Meet The <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Distinguished advocates committed to the highest standards of
              legal excellence, ethical practice, and unwavering dedication to
              client success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Partners Row */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-slate-800 font-medium mb-3">
              Partners
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Our founding partners leading the vision and strategy.
            </p>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <TeamCard
                key={`partner-${index}`}
                member={partner}
                index={index}
                isPartner={true}
                onClick={setSelectedMember}
              />
            ))}
          </div>
        </div>

        {/* Support Team Row */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-slate-800 font-medium mb-3">
              Support Team
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Dedicated legal minds ensuring excellent preparation and research.
            </p>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTeam.map((member, index) => (
              <TeamCard
                key={`support-${index}`}
                member={member}
                index={index}
                onClick={setSelectedMember}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Leadership Matters - Kept from original to preserve value props */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
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
            <div>
              <span className="inline-block px-4 py-1 bg-emerald-50 text-emerald-700 text-sm font-bold uppercase tracking-widest rounded-full mb-6 relative z-10">
                Excellence & Experience
              </span>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                Why Experienced Leadership Matters
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                In complex legal battles, experience is the difference between
                specific outcomes and vague possibilities. Our team ensures that
                every case is handled with senior-level attention and strategic
                foresight.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Scale,
                    title: "Strategic Oversight",
                    desc: "Every matter is personally overseen by a partner to ensure quality and precision.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Award,
                    title: "Proven Track Record",
                    desc: "A history of successful representations in high-stakes litigation.",
                    color: "from-amber-500 to-amber-600",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Ethical Practice",
                    desc: "Unwavering commitment to professional ethics and client confidentiality.",
                    color: "from-emerald-500 to-emerald-600",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-5 p-6 bg-slate-50 rounded-lg border border-gray-100 group hover:shadow-lg transition-all"
                  >
                    <div
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-lg h-fit shadow-md`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-primary/10 transform rotate-3 rounded-2xl blur-xl"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
                <img
                  src={backgroundImages.court}
                  alt="Legal Excellence"
                  className="rounded-xl w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-600 mb-1">
                        15+
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        500+
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        Cases Won
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        98%
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">
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

      {/* 5. Life at Vidhit - Masonry Gallery */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-widest uppercase mb-4 block text-sm">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Life at Vidhit
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our vibrant workplace, collaborative environment,
              and the moments that make us a strong, unified team.
            </p>
          </div>

          {/* Pinterest-style Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 sm:gap-6 sm:space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6">
                  <div className="w-8 h-1 bg-accent mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"></div>
                  <p className="text-white font-serif font-medium tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Vidhit Law Associates
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Modal for Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center py-4 px-2 sm:p-6 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-[60] text-slate-400 hover:text-red-500 transition-colors bg-white/80 backdrop-blur-sm p-1.5 rounded-full"
              >
                <X size={24} strokeWidth={2.5} />
              </button>

              <div className="p-6 sm:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
                {/* Header: Image + Name/Role */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left mt-2">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden shrink-0 shadow-md border-2 border-[#e0f2fe] bg-gradient-to-br from-emerald-50 to-[#e0f2fe] p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-start pt-2">
                    <h3 className="text-2xl font-serif font-bold text-slate-800 leading-tight mb-2">
                      {selectedMember.name}
                    </h3>
                    <span className="inline-block px-3.5 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full mb-2">
                      {selectedMember.role}
                    </span>
                    <p className="text-sm font-medium text-slate-500">
                      {selectedMember.designation}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {selectedMember.description}
                </div>

                {/* Contact Information removed per user request */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
