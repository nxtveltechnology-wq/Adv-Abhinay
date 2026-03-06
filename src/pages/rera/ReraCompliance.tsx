// import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  BookOpen,
  Scale,
  FileSignature,
} from "lucide-react";
import SEO from "../../components/SEO";
import { backgroundImages } from "../../data/siteData";

// Import PDFs
import RealEstateActPDF from "../../assets/rules-act/Real_Estate_Act.pdf";
import BiharRERARulesPDF from "../../assets/rules-act/Bihar_RERA_Rules_2017.pdf";
import RegulationEngPDF from "../../assets/rules-act/RegulationEng20022025.pdf";
import RegulationHindiPDF from "../../assets/rules-act/Regulation-Hindi.pdf";

const complianceLinks = [
  {
    title: "Real Estate Act",
    description:
      "Download the complete Real Estate (Regulation and Development) Act, 2016.",
    icon: Scale,
    fileUrl: RealEstateActPDF,
    fileName: "Real_Estate_Act.pdf",
    color: "bg-blue-500",
  },
  {
    title: "Bihar RERA Rules",
    description:
      "Download the Bihar Real Estate (Regulation and Development) Rules, 2017.",
    icon: BookOpen,
    fileUrl: BiharRERARulesPDF,
    fileName: "Bihar_RERA_Rules_2017.pdf",
    color: "bg-green-500",
  },
  {
    title: "Bihar Real Estate Regulatory Authority",
    description:
      "Information and guidelines regarding the Bihar Real Estate Regulatory Authority.",
    icon: FileText,
    fileUrl: RegulationEngPDF,
    fileName: "RegulationEng20022025.pdf",
    color: "bg-indigo-500",
  },
  {
    title: "Regulations",
    description:
      "Download the official regulations and circulars issued by the authority.",
    icon: FileSignature,
    fileUrl: RegulationHindiPDF,
    fileName: "Regulation-Hindi.pdf",
    color: "bg-purple-500",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ReraCompliance = () => {
  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">
      <SEO
        title="RERA Act & Rules | Lex Rera Advisors - Bihar RERA Experts"
        description="Download important documents including the Real Estate Act, Bihar RERA Rules, and other regulations."
        keywords="RERA Act, Bihar RERA Rules, Real Estate Regulations, RERA Download"
      />

      {/* Hero Section */}
      <section className="relative pt-[140px] md:pt-[180px] pb-20 overflow-hidden bg-[#0a1e3c]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImages.rera})` }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-white"
          >
            <div className="inline-block bg-[#fbbf24] text-[#0a1e3c] text-xs font-bold px-3 py-1 rounded-sm mb-6 uppercase tracking-wider">
              Legal Repository
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              RERA Act & <span className="text-[#fbbf24]">Rules</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Access and download essential statutory documents, acts, and rules
              governing the real estate sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1e3c] mb-4">
            Important Documents
          </h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any of the sections below to download the corresponding PDF
            document for your reference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {complianceLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1e3c] mb-3 group-hover:text-[#fbbf24] transition-colors line-clamp-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {link.description}
                </p>

                <a
                  href={link.fileUrl}
                  download={link.fileName}
                  className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#0a1e3c] hover:text-white text-[#0a1e3c] font-bold py-4 px-6 rounded-lg transition-all duration-300 border border-slate-200 hover:border-[#0a1e3c] mt-auto group/btn"
                >
                  <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReraCompliance;
