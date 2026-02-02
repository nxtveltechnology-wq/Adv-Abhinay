import { motion } from "framer-motion";
import { CheckCircle2, History, Target } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import legalCourt from "../assets/legal_court.png";
import legalBooks from "../assets/legal_books.png";
import legalScales from "../assets/legal_scales.png";
import lawTeamMeeting from "../assets/law_team_meeting.png";
import legalConsultation from "../assets/legal_consultation.png";

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="flex flex-col">
      {/* 1. Header Section */}
      <div className="relative bg-primary py-24 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${legalCourt})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Building Trust Through Excellence
          </motion.h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            VIDHIT Law Associates: Where legal expertise meets unwavering
            dedication to client success.
          </p>
        </div>
      </div>

      {/* 2. Who We Are - Left/Right */}
      <SectionWrapper background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="order-2 lg:order-1">
            <h5 className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span> Who We Are
            </h5>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              A Legacy of Legal Integrity
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              VIDHIT Law Associates is a premier full-service law firm based in
              Patna, Bihar, with a reputation for delivering exceptional legal
              representation. Our foundation is built on the core values of
              integrity, diligence, and a relentless pursuit of justice.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              We distinguish ourselves not just by the breadth of our legal
              knowledge, but by our deep understanding of our clients' unique
              challenges. Whether it's complex corporate litigation or sensitive
              family matters, we approach every case with the same level of
              commitment and strategic depth.
            </p>

            <div className="flex gap-8 border-t border-gray-200 pt-8">
              <div>
                <span className="block text-4xl font-serif font-bold text-accent mb-1">
                  15+
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-accent mb-1">
                  500+
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  Cases Resolved
                </span>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-accent/5 rounded-sm -z-10 transform translate-x-4 -translate-y-4"></div>
            <img
              src={legalConsultation}
              alt="Legal Consultation"
              className="rounded-sm shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5 fixed-bg"
          style={{ backgroundImage: `url(${legalScales})` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Driving Force
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-10 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
              <Target className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To provide accessible, high-quality, and result-oriented legal
                services. We aim to demystify the legal process for our clients,
                providing them with clear guidance and fearless representation
                in their pursuit of justice and commercial success.
              </p>
            </div>
            <div className="bg-white/5 p-10 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
              <History className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be recognized as the most trusted and effective legal partner
                in the region, known for our ethical standards, innovative legal
                strategies, and unwavering commitment to safeguarding our
                clients' interests in an evolving legal landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why & Values - Right/Left */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-2/3 h-full bg-primary/5 rounded-sm -z-10 transform -translate-x-4 translate-y-4"></div>
            <img
              src={legalBooks}
              alt="Legal Research"
              className="rounded-sm shadow-xl w-full h-auto object-cover"
            />
          </div>

          <motion.div {...fadeIn}>
            <h5 className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span> Why Choose Us
            </h5>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Excellence in Every Argument
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Client-Centric Approach",
                  desc: "Your goals are our priority. We tailor our strategies to meet your specific needs.",
                },
                {
                  title: "Transparent Communication",
                  desc: "No legal jargon. We ensure you understand every step of the legal process.",
                },
                {
                  title: "Cost-Effective Solutions",
                  desc: "We believe justice should be accessible, offering premium services at fair value.",
                },
                {
                  title: "Comprehensive Research",
                  desc: "Our arguments are backed by exhaustive research and deep legal precedents.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-primary/5 p-2 rounded-full h-fit">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 5. Team Glimpse CTA */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${lawTeamMeeting})` }}
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Met Our Legal Experts
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Our firm is led by distinguished advocates with a proven track
            record of success in high-stakes litigation and advisory.
          </p>
          <a
            href="/team"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-sm transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Meet The Partners
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
