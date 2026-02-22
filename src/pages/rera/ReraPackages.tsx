import { CheckCircle, ArrowRight, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useBrand } from "../../context/BrandContext";

const packages = [
  {
    name: "Starter",
    subtitle: "Developer / First-time Registration",
    price: "₹15,000",
    period: "One-time",
    badge: null,
    color: "border-gray-200",
    headerBg: "bg-slate-800",
    features: [
      "RERA applicability assessment",
      "Document checklist & guidance",
      "Online application filing",
      "1 round of authority queries",
      "Email support for 30 days",
    ],
    cta: "Get Started",
  },
  {
    name: "Standard",
    subtitle: "Complete Project Registration",
    price: "₹30,000",
    period: "Per project",
    badge: "Most Popular",
    color: "border-amber-400",
    headerBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    features: [
      "Everything in Starter",
      "End-to-end project registration",
      "Compliance filing (1 year)",
      "Unlimited authority queries",
      "Sales agreement drafting",
      "Dedicated relationship manager",
      "WhatsApp support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    subtitle: "Full Legal Coverage",
    price: "₹60,000",
    period: "Per year",
    badge: null,
    color: "border-gray-200",
    headerBg: "bg-[#0a1628]",
    features: [
      "Everything in Standard",
      "Quarterly compliance filings",
      "Annual RERA renewal",
      "Dispute resolution support",
      "Legal drafting (all documents)",
      "Agent registration included",
      "Priority response (24 hrs)",
      "Tribunal representation (1 case)",
    ],
    cta: "Get Started",
  },
];

const addOns = [
  { name: "Agent Registration", price: "₹5,000" },
  { name: "Additional Compliance Quarter", price: "₹3,000" },
  { name: "Builder-Buyer Agreement Draft", price: "₹4,000" },
  { name: "RERA Complaint Filing", price: "₹8,000" },
  { name: "Tribunal Representation", price: "₹15,000 onwards" },
  { name: "Project Extension Application", price: "₹6,000" },
];

const ReraPackages = () => {
  const brand = useBrand();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2448] text-white py-16 md:py-20 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">
              Pricing & Packages
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Transparent, Affordable Packages
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              No hidden charges. Choose the package that fits your RERA needs.
              All packages can be customized on request.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-sm shadow-sm border-2 ${pkg.color} flex flex-col overflow-hidden hover:shadow-lg transition-all duration-200`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-500 text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                  <Star className="h-3 w-3" />
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className={`${pkg.headerBg} text-white px-6 py-6`}>
                <h3 className="text-xl font-bold mb-0.5">{pkg.name}</h3>
                <p className="text-xs text-white/70 mb-4">{pkg.subtitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-sm text-white/60">/ {pkg.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="px-6 py-6 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <Link
                  to="/rera/contact"
                  className={`block w-full text-center py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all ${
                    pkg.badge
                      ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                      : "bg-slate-900 hover:bg-slate-700 text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-6 text-center">
            Add-on Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-sm border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-sm text-gray-700">{addon.name}</span>
                </div>
                <span className="text-sm font-bold text-amber-600">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote CTA */}
        <div className="text-center bg-gradient-to-br from-[#0a1628] to-[#0f2448] rounded-sm p-10 text-white">
          <h2 className="text-2xl font-serif font-bold mb-3">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-300 mb-6 text-sm max-w-md mx-auto">
            Every project is unique. Contact us and we'll create a tailored
            package for your specific RERA requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rera/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm uppercase tracking-wider font-bold rounded-sm transition-all"
            >
              Get a Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${brand.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white text-sm uppercase tracking-wider font-bold rounded-sm transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReraPackages;
