import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Building } from "lucide-react";
import { Link } from "react-router-dom";

const ReraPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-4 left-0 right-0 mx-auto md:mx-0 md:left-auto md:right-8 z-[100] w-[90%] max-w-sm"
        >
          <div className="bg-[#0f1012] rounded-lg shadow-2xl overflow-hidden border border-gray-800 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 p-1.5 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-accent mb-2">
                    RERA Services
                  </h4>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    Need expert guidance on Real Estate Regulatory Authority
                    (RERA) compliance and dispute resolution?
                  </p>
                  <Link
                    to="/rera"
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center text-sm font-bold text-black bg-accent hover:bg-accent/90 px-5 py-2.5 rounded-sm transition-all shadow-md hover:shadow-lg"
                  >
                    View Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Color Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-accent/50 via-accent to-accent/50"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReraPopup;
