import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  HelpCircle,
  ChevronRight,
  ClipboardList,
  Shield,
  Briefcase,
} from "lucide-react";
import { useEffect } from "react";
import {
  reraServiceDetails,
  reraPackages,
  type ReraServiceDetail,
} from "../../data/siteData";

const ReraGenericPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle Packages Route specifically
  if (slug === "packages") {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex flex-col">
        {/* Packages Content (Simpler version or component reuse strategy could be applied here)
                   For now, we render the packages section similar to Home but dedicated.
               */}
        <div className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">
              Engagement Models
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Transparent, value-driven legal service packages for every
              stakeholder in the real estate ecosystem.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reraPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-md border border-gray-200 relative overflow-hidden flex flex-col"
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-6">
                  {pkg.subtitle}
                </p>

                <div className="flex-grow space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="w-full block text-center bg-primary text-white font-semibold py-3 rounded-sm hover:bg-primary/90 transition-colors"
                >
                  Request Proposal
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const detail: ReraServiceDetail | undefined = slug
    ? reraServiceDetails[slug]
    : undefined;

  if (!detail) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-24 bg-gray-50 text-center px-4">
        <HelpCircle className="h-16 w-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Service Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The requested RERA service could not be located.
        </p>
        <Link
          to="/rera"
          className="text-accent hover:text-primary font-semibold flex items-center gap-2"
        >
          <ArrowRight className="h-4 w-4 rotate-180" /> Back to RERA Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Dynamic Header */}
      <div className="bg-slate-900 text-white py-12 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        {/* Abstract geometric shape */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-accent/80 text-sm font-semibold uppercase tracking-widest mb-4">
              <Link to="/rera" className="hover:text-white transition-colors">
                RERA Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Details</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              {detail.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-4 border-accent pl-6">
              {detail.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Key Services */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <ClipboardList className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Key Services Included
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detail.keyServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-sm border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Process Workflow */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Workflow
                </h2>
              </div>
              <div className="relative border-l-2 border-gray-200 ml-4 space-y-8 pb-4">
                {detail.process.map((step, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-gray-300 group-hover:border-accent transition-colors"></span>

                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                      Step {idx + 1}
                    </h3>
                    <p className="text-gray-600 text-base">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Deliverables */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Key Deliverables
                </h2>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-sm shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl"></div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                  {detail.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="h-1.5 w-1.5 bg-accent rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* CTA Box */}
              <div className="bg-white p-6 shadow-lg border-t-4 border-accent rounded-sm">
                <div className="mb-4">
                  <Shield className="h-8 w-8 text-accent mb-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    RERA timelines are strict. Delay often attracts penalties.
                    Schedule a priority consultation today.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-primary hover:bg-primary-hover text-white text-center font-bold py-3 rounded-sm transition-all shadow-md hover:shadow-lg"
                >
                  Connect with Experts
                </Link>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Confidential & Professional
                </p>
              </div>

              {/* More Services Links */}
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs tracking-wider">
                  Explore Other Services
                </h4>
                <ul className="space-y-3">
                  {/* Filter current slug */}
                  {Object.keys(reraServiceDetails)
                    .filter((k) => k !== slug)
                    .slice(0, 5)
                    .map((otherSlug) => (
                      <li key={otherSlug}>
                        <Link
                          to={`/rera/${otherSlug}`}
                          className="text-gray-600 hover:text-accent text-sm flex items-center justify-between group transition-colors"
                        >
                          {reraServiceDetails[otherSlug].title
                            .split(" ")
                            .slice(0, 3)
                            .join(" ")}
                          ...
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReraGenericPage;
