import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Scale, Gavel, FileText } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { practiceAreas, backgroundImages } from "../data/siteData";

const PracticeAreas = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImages.court})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Specialized Practice Areas
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We offer expert legal representation across a diverse spectrum of
              laws, combining deep legal knowledge with a practical,
              results-driven approach.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <SectionWrapper background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Scale,
              title: "Litigation",
              desc: "Aggressive and strategic court representation.",
            },
            {
              icon: FileText,
              title: "Advisory",
              desc: "Proactive legal counsel to manage risks.",
            },
            {
              icon: Gavel,
              title: "Dispute Resolution",
              desc: "Effective mediation and arbitration services.",
            },
            {
              icon: ShieldCheck,
              title: "Compliance",
              desc: "Ensuring adherence to all statutory regulations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Main Grid */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Our Expertise
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[320px] overflow-hidden rounded-sm shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                style={{
                  backgroundImage: `url(${area.backgroundImage})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/50 group-hover:via-slate-900/80 group-hover:to-slate-900/40 group-active:via-slate-900/80 group-active:to-slate-900/40 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-accent group-active:text-accent transition-colors leading-tight max-w-[85%]">
                      {area.title}
                    </h3>
                    <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 group-active:translate-x-0" />
                  </div>

                  <div className="h-0.5 w-12 bg-accent mb-4 transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left" />

                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 group-active:translate-y-0">
                    {area.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PracticeAreas;
