import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Loader2,
  Send,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import {
  jobOpenings,
  careerBenefits,
  backgroundImages,
} from "../data/siteData";
import { useState } from "react";
import SEO from "../components/SEO";

const Career = () => {
  const [activeTab, setActiveTab] = useState<"internship" | "associate">(
    "internship",
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position_type: "",
    resume_link: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "895ec363-c2fe-4e95-af96-8f592d14f0f3",
          subject: "New Career Application Submission",
          from_name: "Vidhit Career Page",
          ...form,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(result.message || "Failed to submit application.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToApplyForm = () => {
    const applyForm = document.getElementById("apply");
    if (applyForm) {
      applyForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <SEO
        title="Careers & Internships | Vidhit Law Associates - Join Our Legal Team"
        description="Join Vidhit Law Associates for a rewarding legal career. Internships for law students and Associate positions for experienced advocates in Patna."
        keywords="Legal Jobs Patna, Law Internship Bihar, Advocate Jobs, Legal Career, Law Firm Vacancies"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex col-span-1 items-center justify-center overflow-hidden pt-[100px] md:pt-[120px]">
        <div
          className="absolute inset-0 bg-cover bg-center fixed-bg"
          style={{ backgroundImage: `url(${backgroundImages.team})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/50 text-accent text-sm font-bold uppercase tracking-wider mb-6"
          >
            Join Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif font-bold mb-6"
          >
            Build Your Legacy <br /> With{" "}
            <span className="text-accent">Vidhit</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We are looking for passionate legal minds to join us in our pursuit
            of justice and excellence.
          </motion.p>
        </div>
      </section>

      {/* Programs Section (Internship & Associate) */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Career Pathways
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you are beginning your journey or seeking to elevate your
            practice, we offer structured programs for your growth.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab("internship")}
              className={`px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-all ${
                activeTab === "internship"
                  ? "bg-white text-accent shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> Internship
              </span>
            </button>
            <button
              onClick={() => setActiveTab("associate")}
              className={`px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-all ${
                activeTab === "associate"
                  ? "bg-white text-primary shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> Associate
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === "internship" ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <div className="inline-block p-3 bg-accent/10 rounded-xl mb-6">
                      <GraduationCap className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Internship Program
                    </h3>
                    <p className="text-accent font-semibold mb-6">
                      For Law Students & Fresh Graduates
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Our internship program is designed to provide practical
                      exposure to court proceedings, legal research, and
                      drafting. Interns work closely with senior associates and
                      partners on live cases.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Research & Analysis",
                        "Court Visits",
                        "Case Briefing",
                        "Drafting Assistance",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={scrollToApplyForm}
                    className="w-full py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-white transition-all uppercase tracking-wider"
                  >
                    Apply for Internship
                  </button>
                </div>
                <div className="bg-slate-900 relative min-h-[300px]">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Internship"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-4xl font-bold mb-1">4 Weeks</p>
                    <p className="text-gray-300">Minimum Duration</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-between order-2">
                  <div>
                    <div className="inline-block p-3 bg-primary/10 rounded-xl mb-6">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Associate Program
                    </h3>
                    <p className="text-primary font-semibold mb-6">
                      For Experienced Professionals
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Join our team of litigators and consultants. We value
                      expertise, dedication, and the ability to handle complex
                      legal matters independently while contributing to the
                      firm's growth.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Civil & Criminal Litigation",
                        "Corporate Advisory",
                        "Client Management",
                        "Team Leadership",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={scrollToApplyForm}
                    className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all uppercase tracking-wider shadow-lg"
                  >
                    View Opportunities
                  </button>
                </div>
                <div className="bg-slate-900 relative min-h-[300px] order-1 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Associate"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-4xl font-bold mb-1">Growth</p>
                    <p className="text-gray-300">Unlimited Potential</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </SectionWrapper>

      {/* Current Openings */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">
              We Are Hiring
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Current Openings
            </h2>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-accent/30 transition-all group cursor-pointer"
                onClick={scrollToApplyForm}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-accent bg-accent/5 px-4 py-2 rounded-full">
                      {job.experience}
                    </span>
                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Application Form */}
      <section id="apply" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">
              Join Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Application Form
            </h2>
            <p className="text-gray-600 text-lg">
              Submit your details below to apply for an internship or associate
              position.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-xl rounded-xl">
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Thank you for your interest in joining Vidhit Law Associates.
                  Our team will review your application and contact you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      position_type: "",
                      resume_link: "",
                      message: "",
                    });
                  }}
                  className="mt-8 px-8 py-3 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Applying For *
                    </label>
                    <select
                      name="position_type"
                      value={form.position_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    >
                      <option value="">Select a Position</option>
                      <option value="Internship">Internship</option>
                      <option value="Associate">Associate Program</option>
                      {jobOpenings.map((job) => (
                        <option
                          key={job.id}
                          value={`${job.title} - ${job.location}`}
                        >
                          {job.title} - {job.location}
                        </option>
                      ))}
                      <option value="Other">Other Openings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume / LinkedIn / Portfolio Link *
                  </label>
                  <input
                    type="url"
                    name="resume_link"
                    value={form.resume_link}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="Link to your resume or LinkedIn profile"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter / Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="Tell us why you'd be a great fit for Vidhit Law Associates..."
                  ></textarea>
                </div>

                <div className="h-captcha" data-captcha="true"></div>

                {submitError && (
                  <p className="text-red-500 text-sm font-medium">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white disabled:opacity-70 font-bold py-4 px-6 rounded-lg transition-colors shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Life at Vidhit */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">
              Culture & Values
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Life at Vidhit Law Associates
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We believe that a supportive and inspiring work environment is the
              foundation of legal excellence. Our culture fosters continuous
              learning, collaboration, and professional well-being.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {careerBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="rounded-2xl shadow-lg mt-12"
                alt="Office Culture"
              />
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="rounded-2xl shadow-lg"
                alt="Team Meeting"
              />
            </div>
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Career;
