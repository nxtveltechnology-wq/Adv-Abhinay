import SectionWrapper from "../components/SectionWrapper";
import {
  Scale,
  Award,
  HeartHandshake,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { partners, backgroundImages } from "../data/siteData";

const Team = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/95 to-slate-900 text-white py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImages.team})` }}
        />
        {/* Decorative Elements */}
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
              Meet Our <span className="text-accent">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Distinguished advocates committed to the highest standards of
              legal excellence, ethical practice, and unwavering dedication to
              client success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Partners Grid - Professional Design */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Top Accent Bar */}
                  <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>

                  <div className="p-10">
                    {/* Profile Image Section */}
                    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8">
                      <div className="relative flex-shrink-0">
                        {/* Image with Decorative Ring */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full transform group-hover:scale-110 transition-transform duration-500 blur-md"></div>
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-accent/10">
                          <img
                            src={partner.image}
                            alt={partner.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        {/* Verified Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-accent text-white p-2 rounded-full shadow-lg">
                          <Award className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-3xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
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
                          <button className="p-2 bg-gray-100 hover:bg-accent hover:text-white text-gray-600 rounded-full transition-colors">
                            <Linkedin className="h-4 w-4" />
                          </button>
                          <button className="p-2 bg-gray-100 hover:bg-accent hover:text-white text-gray-600 rounded-full transition-colors">
                            <Mail className="h-4 w-4" />
                          </button>
                          <button className="p-2 bg-gray-100 hover:bg-accent hover:text-white text-gray-600 rounded-full transition-colors">
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
        </div>
      </SectionWrapper>

      {/* Why Leadership Matters - Enhanced Design */}
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
            <div>
              <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-bold uppercase tracking-widest rounded-full mb-6">
                Excellence & Experience
              </span>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                Why Experienced Leadership Matters
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                In complex legal battles, experience is the difference between
                specific outcomes and vague possibilities. Our partners ensure
                that every case is handled with senior-level attention and
                strategic foresight.
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
                    color: "from-green-500 to-green-600",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-5 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-lg h-fit shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-accent transition-colors">
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

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
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
    </div>
  );
};

export default Team;
