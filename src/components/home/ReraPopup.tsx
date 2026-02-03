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
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-8 right-8 z-[100] max-w-sm w-full"
        >
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-700 transition-colors z-10"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-primary mb-2">
                    RERA Services
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Need expert guidance on Real Estate Regulatory Authority
                    (RERA) compliance and dispute resolution?
                  </p>
                  <Link
                    to="/rera"
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center text-sm font-bold text-white bg-accent hover:bg-accent/90 px-5 py-2.5 rounded-sm transition-all shadow-md hover:shadow-lg"
                  >
                    View Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Color Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReraPopup;
