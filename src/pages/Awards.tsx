import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

const Awards = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative overflow-hidden">
      <SEO
        title="Awards & Recognition | Vidhit Law Associates"
        description="Coming soon - Awards and recognition received by Vidhit Law Associates."
      />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl rounded-bl-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl rounded-tr-[100px]"></div>

      <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-gray-100 max-w-2xl w-full text-center relative overflow-hidden"
        >
          {/* Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary"></div>

          <motion.div
            initial={{ rotate: -10, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
          >
            <Award className="w-12 h-12 text-accent" />
          </motion.div>

          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-bold uppercase tracking-widest rounded-full mb-6 relative">
            Recognition
          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            Coming <span className="text-accent">Soon</span>
          </h1>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            We are currently compiling our list of awards and professional
            recognitions. Check back shortly to view our achievements in the
            legal field!
          </p>

          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-900/20 uppercase tracking-widest text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
