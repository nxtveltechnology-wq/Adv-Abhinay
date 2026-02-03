import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { awards } from "../../data/siteData";
import SectionWrapper from "../SectionWrapper";
import { Trophy } from "lucide-react";

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper background="light">
      <div className="text-center mb-16">
        <span className="text-accent font-semibold tracking-widest uppercase mb-2 block">
          Excellence Recognized
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
          Awards & Recognition
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our commitment to legal excellence has been consistently recognized by
          industry leaders.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image Overlay */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 bg-accent text-white font-bold px-3 py-1 rounded-sm text-sm shadow-md">
                {award.year}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 text-center relative z-20 -mt-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 text-accent border border-gray-100">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                {award.title}
              </h3>
              <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">
                {award.organization}
              </p>
            </div>

            <div className="h-1 bg-accent w-0 group-hover:w-full transition-all duration-500 mx-auto"></div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default AwardsSection;
