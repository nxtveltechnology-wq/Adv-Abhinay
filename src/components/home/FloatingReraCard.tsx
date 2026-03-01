import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FloatingReraCard = () => {
  return (
    <motion.div
      className="absolute right-0 top-180 lg:top-130 z-20 px-4"
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg ml-auto md:mr-12 bg-[#051122] text-white p-4 md:p-10 relative shadow-2xl"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
        }}
      >
        {/* Accent Bar */}
        <div className="flex items-center gap-2 mb-4">
          <img src="/logo/LexRera.png" className="w-15" alt="" />
          <h3 className="text-2xl px-4 font-bold  uppercase text-white">
            Rera Services
          </h3>
        </div>

        {/* Content */}
        <p className="text-sm md:text-sm leading-relaxed text-gray-200 mb-6 font-light">
          Our RERA division advises homebuyers, developers, and agents on
          registration, compliance, and dispute resolution under the Real Estate
          (Regulation and Development) Act.
        </p>

        {/* Link */}
        <div className="border-t border-gray-700/50 pt-6">
          <a
            href="https://lexrera.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-[#FF8C00] transition-colors group"
          >
            RERA Services{" "}
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Decorative corner accent (visual only) */}
        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gray-700/30 rotate-45 origin-bottom-right translate-x-[22px] -translate-y-[22px]"></div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingReraCard;
