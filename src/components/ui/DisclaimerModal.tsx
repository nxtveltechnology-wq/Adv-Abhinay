import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden"
          >
            <div className="bg-primary p-6 border-b border-primary-light">
              <h2 className="text-xl font-serif font-bold text-white tracking-wide text-center">
                DISCLAIMER
              </h2>
            </div>
            <div className="p-8 space-y-4 text-justify text-sm text-gray-700 leading-relaxed">
              <p>
                As per the rules of the Bar Council of India, we are not
                permitted to solicit work and advertise. By clicking on the "I
                AGREE" button below, you acknowledge the following:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  There has been no advertisement, personal communication,
                  solicitation, invitation or inducement of any sort whatsoever
                  from us or any of our members to solicit any work through this
                  website;
                </li>
                <li>
                  You wish to gain more information about us for your own
                  information and use;
                </li>
                <li>
                  The information about us is provided to you on your specific
                  request and any information obtained or materials downloaded
                  from this website is completely at the user’s volition and any
                  transmission, receipt or use of this site would not create any
                  lawyer-client relationship.
                </li>
              </ul>
              <p>
                The information provided under this website is solely available
                at your request for informational purposes only, should not be
                interpreted as soliciting or advertisement. We are not liable
                for any consequence of any action taken by the user relying on
                material / information provided under this website. In cases
                where the user has any legal issues, he/she in all cases must
                seek independent legal advice.
              </p>
            </div>
            <div className="bg-gray-50 p-6 flex justify-center">
              <button
                onClick={handleAgree}
                className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest shadow-md"
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
