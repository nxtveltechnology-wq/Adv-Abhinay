import { motion } from "framer-motion";
import {
  Gavel,
  Building2,
  Scale,
  Users,
  ShieldCheck,
  FileText,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { backgroundImages } from "../data/siteData";
import SEO from "../components/SEO";

const CourtsAndTribunals = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Courts & Tribunals | Vidhit Law Associates"
        description="The Firm represents clients before the Supreme Court, High Courts, District Courts, DRT/DRAT, RERA & Appellate Tribunal, Consumer Commissions, and other tribunals."
        keywords="Supreme Court, High Court, Patna High Court, DRT, DRAT, RERA, Appellate Tribunal, Consumer Commission, CAT"
      />
      {/* Hero Section */}
      <div className="bg-primary text-white pt-[120px] md:pt-[160px] pb-16 md:pb-24 relative overflow-hidden">
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
              Courts & Tribunals
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We provide aggressive and strategic representation across all
              tiers of the Indian judicial and quasi-judicial system.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <SectionWrapper background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Where We Represent You
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Firm represents clients before the Supreme Court, High Courts
            (including Patna High Court), District Courts, DRT/DRAT, RERA &
            Appellate Tribunal, Consumer Commissions, and various quasi-judicial
            and administrative tribunals (including CAT).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Scale,
              title: "Supreme Court & High Courts",
              desc: "Representing clients in complex constitutional, civil, and criminal matters across highest courts, with significant practice at Patna High Court.",
            },
            {
              icon: Gavel,
              title: "District Courts",
              desc: "Extensive experience in original suits, trials, and appellate proceedings across various district and subordinate courts.",
            },
            {
              icon: Building2,
              title: "DRT & DRAT",
              desc: "Specialized representation in Debt Recovery Tribunals and Appellate Tribunals for banking and financial disputes.",
            },
            {
              icon: ShieldCheck,
              title: "RERA & Appellate Tribunal",
              desc: "Expert counsel for real estate disputes, representing developers and homebuyers before RERA authorities.",
            },
            {
              icon: Users,
              title: "Consumer Commissions",
              desc: "Advocating for consumer rights and defending service providers across District, State, and National Consumer Disputes Redressal Commissions.",
            },
            {
              icon: FileText,
              title: "Administrative Tribunals (CAT)",
              desc: "Representation in service and employment matters before the Central Administrative Tribunal and other quasi-judicial bodies.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CourtsAndTribunals;
