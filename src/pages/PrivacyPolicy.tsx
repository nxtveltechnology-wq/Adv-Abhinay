import SectionWrapper from "../components/SectionWrapper";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="">
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 flex items-center gap-3">
            <Shield className="h-8 w-8 text-accent" />
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-2xl">
            We are committed to protecting your personal information and your
            right to privacy.
          </p>
        </div>
      </div>

      <SectionWrapper background="light">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 prose prose-slate">
          <h3>1. Information We Collect</h3>
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the website, express an interest in obtaining
            information about us or our products and services, when you
            participate in activities on the website or otherwise when you
            contact us.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use personal information collected via our website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>

          <h3>3. Will Your Information Be Shared With Anyone?</h3>
          <p>
            We only share information with your consent, to comply with laws, to
            provide you with services, to protect your rights, or to fulfill
            business obligations.
          </p>

          <h3>4. How Long Do We Keep Your Information?</h3>
          <p>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law.
          </p>

          <h3>5. Security of Your Information</h3>
          <p>
            We have implemented appropriate technical and organizational
            security measures designed to protect the security of any personal
            information we process.
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

export default PrivacyPolicy;
