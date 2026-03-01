import { Users, Target, Shield, Award, CheckCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Scale,
    title: "RERA Specialists",
    desc: "Exclusively focused on Real Estate Regulatory Authority matters with deep domain expertise.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Seasoned lawyers and consultants with years of experience in RERA matters.",
  },
  {
    icon: Shield,
    title: "End-to-End Support",
    desc: "From pre-project advisory to dispute resolution, we cover every stage of RERA compliance.",
  },
  {
    icon: Award,
    title: "Trusted Results",
    desc: "Hundreds of successful project registrations and dispute resolutions across Bihar.",
  },
];

const values = [
  "Transparency in every legal proceeding",
  "Strict adherence to RERA timelines",
  "Client-first approach in all matters",
  "Clear and accessible legal communication",
  "Continuous updates throughout your case",
  "Affordable, package-based pricing",
];

const ReraAbout = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2448] text-white py-16 md:py-20 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">
              About Us
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Who We Are
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Lex RERA is a specialized legal advisory firm exclusively
              dedicated to Real Estate Regulatory Authority (RERA) compliance,
              advisory, and dispute resolution in India.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm bg-amber-100 flex items-center justify-center">
                <Target className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-serif font-bold text-slate-900">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide accessible, transparent, and expert RERA legal services
              to developers, agents, and homebuyers — empowering them to
              navigate the complexities of real estate regulation with
              confidence.
            </p>
          </div>

          <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm bg-amber-100 flex items-center justify-center">
                <Scale className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-serif font-bold text-slate-900">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the most trusted RERA advisory firm in Bihar and beyond,
              known for our integrity, deep expertise, and unwavering commitment
              to protecting clients' real estate rights.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-amber-600 text-xs uppercase tracking-widest font-semibold mb-2">
              Why Lex RERA
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-sm shadow-sm border border-gray-100 p-6 hover:border-amber-200 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-sm bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-amber-600 text-xs uppercase tracking-widest font-semibold mb-2 text-center">
              Our Values
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[#0a1628] to-[#0f2448] rounded-sm p-10 text-white">
          <h2 className="text-2xl font-serif font-bold mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 text-sm max-w-md mx-auto">
            Talk to our RERA specialists today and get expert guidance tailored
            to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm uppercase tracking-wider font-bold rounded-sm transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReraAbout;
