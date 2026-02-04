import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Update Title
    document.title = `${title} | Vidhit Law Associates`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        description ||
          "Vidhit Law Associates is a premier law firm in Patna offering expert legal services in Civil, Criminal, RERA, Corporate, and Family Law.",
      );
    }

    // Update Meta Keywords (Optional, search engines mostly ignore this now but requested)
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", `https://vidhitlaw.com${pathname}`);
  }, [title, description, keywords, pathname]);

  return null;
};

export default SEO;
