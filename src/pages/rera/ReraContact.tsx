import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useBrand } from "../../context/BrandContext";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    getValue: (brand: { phone: string; phoneRaw: string }) => brand.phone,
    getHref: (brand: { phone: string; phoneRaw: string }) =>
      `tel:${brand.phoneRaw}`,
  },
  {
    icon: Mail,
    label: "Email",
    getValue: (brand: { email: string }) => brand.email,
    getHref: (brand: { email: string }) => `mailto:${brand.email}`,
  },
];

const officeDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Darsrath Gali, Agamkuan Thana Road Kankarbagh, Patna - 800026",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 10:00 AM – 6:00 PM",
    href: null,
  },
];

const services = [
  "Project Registration",
  "Agent Registration",
  "Compliance & Filings",
  "Dispute Resolution",
  "Legal Drafting",
  "Allottees Services",
  "Pre-Project Advisory",
  "Other",
];

const ReraContact = () => {
  const brand = useBrand();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
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
          access_key: "acaa235f-83b5-4829-85ef-a58275d7ccae",
          subject: `New Lex Rera Inquiry from ${form.name}`,
          from_name: form.name,
          email: form.email || "Not Provided",
          phone: form.phone,
          service: form.service || "General Inquiry",
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || "Failed to submit form.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2448] text-white py-16 md:py-20 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">
              Contact Us
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Have a RERA question or want to book a consultation? Fill the form
              and our experts will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone & Email */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
                Reach Us Directly
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.getHref(brand)}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-sm bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                        {item.getValue(brand)}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Details */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
                Office Details
              </h3>
              <div className="space-y-4">
                {officeDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-sm bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-700">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="border border-amber-200 bg-amber-50 rounded-sm p-4">
              <p className="text-xs text-amber-800 leading-relaxed">
                <span className="font-bold">Note:</span> This is a legal
                advisory platform. No solicitation intended. Contacting us does
                not create a client-attorney relationship.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    Thank you for reaching out. Our RERA specialists will
                    contact you within 24 working hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-serif font-bold text-slate-900 mb-6">
                    Book a Consultation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all placeholder:text-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all placeholder:text-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your RERA matter or query..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all resize-none placeholder:text-gray-300"
                      />
                    </div>

                    {submitError && (
                      <p className="text-red-500 text-sm">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-[#0a1e3c] hover:text-white disabled:opacity-70 text-sm uppercase tracking-wider font-bold rounded-sm transition-all shadow-md hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReraContact;
