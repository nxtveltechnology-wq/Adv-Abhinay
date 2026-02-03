import SectionWrapper from "../components/SectionWrapper";
import { Scale } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="">
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 flex items-center gap-3">
            <Scale className="h-8 w-8 text-accent" />
            Terms and Conditions
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Please read these terms and conditions carefully before using our
            website.
          </p>
        </div>
      </div>

      <SectionWrapper background="light">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 prose prose-slate">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement. In addition,
            when using this websites particular services, you shall be subject
            to any posted guidelines or rules applicable to such services.
          </p>

          <h3>2. Intellectual Property</h3>
          <p>
            All content on this site, including text, graphics, logos, images,
            and software, is the property of Vidhit Law Associates or its
            content suppliers and is protected by international copyright laws.
          </p>

          <h3>3. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Vidhit Law Associates'
            website for personal, non-commercial transitory viewing only. This
            is the grant of a license, not a transfer of title.
          </p>

          <h3>4. Legal Advice Disclaimer</h3>
          <p>
            The materials on Vidhit Law Associates' website are provided on an
            'as is' basis. The content regarding legal matters is for general
            information purposes only and should not be viewed as legal advice.
          </p>

          <h3>5. Limitations</h3>
          <p>
            In no event shall Vidhit Law Associates or its suppliers be liable
            for any damages (including, without limitation, damages for loss of
            data or profit, or due to business interruption) arising out of the
            use or inability to use the materials on Vidhit Law Associates'
            website.
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TermsAndConditions;
