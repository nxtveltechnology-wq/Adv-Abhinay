import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch for professional legal consultation.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">
              Our Offices
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">
                    Patna Offices
                  </h4>
                  <p className="text-gray-600">
                    <strong>Office 1:</strong> Boring Road, Patna, Bihar
                  </p>
                  <p className="text-gray-600">
                    <strong>Office 2:</strong> Kankarbagh, Patna, Bihar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Phone</h4>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Sat, 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Email</h4>
                  <p className="text-gray-600">contact@vidhitlaw.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 border-l-4 border-accent">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" /> Consultation Hours
              </h4>
              <p className="text-gray-600">
                Consultations are strictly by appointment. Please contact us to
                schedule a meeting.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-colors">
                  <option value="">Select a Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Civil/Criminal">Civil/Criminal Matter</option>
                  <option value="RERA">RERA Services</option>
                  <option value="Corporate">Corporate Law</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-colors"
                  placeholder="Brief details about your legal query..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
