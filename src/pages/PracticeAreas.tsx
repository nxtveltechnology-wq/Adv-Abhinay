import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Scale, Gavel, FileText } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { practiceAreas, backgroundImages } from "../data/siteData";
import SEO from "../components/SEO";

const PracticeAreas = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Practice Areas | Vidhit Law Associates - Civil, Criminal, Corporate"
        description="Explore our wide range of legal services including Civil Litigation, Criminal Defense, Corporate Law, RERA Advisory, and Family Disputes in Patna."
        keywords="Civil Lawyer Patna, Criminal Lawyer, Corporate Law Firm, RERA Services, Divorce Lawyer Patna, Legal Services List"
      />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:-translate-y-1 h-full"
            >
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden rounded-t-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${area.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors duration-300" />
              </div>

              {/* Overlapping Icon - Positioned absolute relative to card to avoid clipping */}
              <div className="absolute top-52 left-6 -translate-y-1/2 z-20">
                <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:bg-accent transition-colors duration-300">
                  {area.icon && <area.icon className="h-6 w-6 text-white" />}
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-10 pb-8 px-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {area.desc}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-bold text-accent group-hover:text-primary transition-colors tracking-wide uppercase">
                    View Detail{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
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
