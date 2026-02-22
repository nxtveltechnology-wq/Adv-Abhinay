import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the disclaimer
    const hasAgreed = sessionStorage.getItem("hasAgreedToDisclaimer");
    if (!hasAgreed) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem("hasAgreedToDisclaimer", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white max-w-3xl w-full relative shadow-2xl p-2 md:p-3 rounded-sm"
          >
            {/* Inner Border Container */}
            <div className="border-[3px] border-dotted border-slate-300 p-4 md:p-8 flex flex-col items-center text-center max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={handleAgree}
                className="absolute top-4 right-4 md:top-5 md:right-5 bg-[#E65C00] hover:bg-[#CC5200] text-white rounded-md p-1 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900 mb-6 border-b-2 border-dashed border-gray-200 pb-2">
                Disclaimer
              </h2>

              {/* Content */}
              <div className="space-y-4 text-justify text-sm md:text-[15px] leading-relaxed text-gray-700 w-full">
                <p>
                  As per the rules of the Bar Council of India, we are not
                  permitted to solicit work and advertise. By clicking on the "I
                  AGREE" button below, you acknowledge the following:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-left">
                  <li>
                    There has been no advertisement, personal communication,
                    solicitation, invitation or inducement of any sort
                    whatsoever from us or any of our members to solicit any work
                    through this website;
                  </li>
                  <li>
                    You wish to gain more information about us for your own
                    information and use;
                  </li>
                  <li>
                    The information about us is provided to you on your specific
                    request and any information obtained or materials downloaded
                    from this website is completely at the user's volition and
                    any transmission, receipt or use of this site would not
                    create any lawyer-client relationship;
                  </li>
                  <li>
                    None of the information contained on the website is in the
                    nature of a legal opinion or otherwise amounts to any legal
                    advice.
                  </li>
                  <li>
                    Vidhit Law Associates is not liable for any consequence of
                    any action taken by the user relying on material/information
                    provided under this website. In cases where the user has any
                    legal issues, he/she in all cases must seek independent
                    legal advice.
                  </li>
                </ul>
              </div>

              {/* Agree Button */}
              <button
                onClick={handleAgree}
                className="mt-8 bg-slate-900 text-white px-8 py-2 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors"
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
