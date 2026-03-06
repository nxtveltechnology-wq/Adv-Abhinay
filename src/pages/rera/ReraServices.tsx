import {
  Users,
  Building2,
  BookOpen,
  Lightbulb,
  PhoneCall,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Lightbulb,
    title: "PRE-PROJECT ASSISTANCE",
    path: "/pre-project",
    desc: "Comprehensive guidance and assistance to developers before launching a project under RERA.",
    highlights: ["Pre-Project Assistance"],
  },
  {
    icon: Users,
    title: "AGENT SERVICES",
    path: "/agent-services",
    desc: "Complete registration, compliance, and renewal solutions for real estate agents.",
    highlights: [
      "Agent Registration",
      "Agent Renewal",
      "Agent Compliances",
      "Change in Application",
      "Withdrawal of Application",
    ],
  },
  {
    icon: Building2,
    title: "PROJECT SERVICES",
    path: "/project-services",
    desc: "End-to-end assistance for project registration, compliance, and modifications.",
    highlights: [
      "Project Registration",
      "Project Registration with Quarterly Compliance",
      "RERA Project Package",
      "Project Quarterly Compliances",
      "Project Completion Filing",
      "Project Extension",
      "Project Withdrawal",
      "Plan Modification",
      "Change in Bank Account",
      "Change in Project Name",
    ],
  },
  {
    icon: PhoneCall,
    title: "CONSULTANCY SERVICES",
    path: "/consultancy",
    desc: "Expert legal consultancy for developers, agents, and buyers regarding RERA concerns.",
    highlights: [
      "Telephonic Consultancy",
      "Video Calling Consultancy",
      "Yearly Consultancy",
    ],
  },
  {
    icon: BookOpen,
    title: "TRAINING SERVICES",
    path: "/training",
    desc: "Specialized training programs on RERA acts, compliances, and best practices.",
    highlights: [
      "RERA Training",
      "Sales & Marketing Training",
      "Institutional Training",
    ],
  },
  {
    icon: FileCheck,
    title: "OTHER SERVICES",
    path: "/other-services",
    desc: "Additional statutory support services, including annual audits for projects.",
    highlights: ["Annual Audit Report Submission"],
  },
];

const ReraServices = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2448] text-white py-16 md:py-20 pt-36 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">
              Our Services
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Complete RERA Legal Services
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              From project registration to dispute resolution, we provide
              comprehensive legal support for every stage of your RERA journey.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-sm shadow-sm border border-gray-100 p-6 hover:border-amber-200 hover:shadow-md transition-all duration-200 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-5 transition-colors flex-shrink-0">
                <service.icon className="h-6 w-6 text-amber-600" />
              </div>

              {/* Title & desc */}
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                {service.desc}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to={service.path}
                className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 text-xs font-bold uppercase tracking-wider transition-colors group/link mt-auto"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[#0a1628] to-[#0f2448] rounded-sm p-10 text-white">
          <h2 className="text-2xl font-serif font-bold mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-300 mb-6 text-sm max-w-md mx-auto">
            Book a free consultation with our RERA specialists and we'll guide
            you to the right solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm uppercase tracking-wider font-bold rounded-sm transition-all"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReraServices;
