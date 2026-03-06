import { useBrand } from "../../context/BrandContext";
import { Linkedin, Instagram, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import { useState, useEffect } from "react";

const StickySocialSidebar = () => {
  const brand = useBrand();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the active brand ID to determine style
  const activeBrandId = brand.id;
  const isLexRera = activeBrandId === "lexrera";

  const socialLinks = brand.socialLinks;

  const socials = [
    {
      id: "linkedin",
      icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      href: socialLinks.linkedin,
      bgBase: "bg-[#0077b5]",
      hoverBg: "hover:bg-[#005582]",
    },
    {
      id: "instagram",
      icon: <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      href: socialLinks.instagram,
      bgBase: "bg-[#e1306c]",
      hoverBg: "hover:bg-[#c12258]",
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      href: `https://wa.me/${brand.phoneRaw.replace(/[^a-zA-Z0-9]/g, "")}`,
      bgBase: "bg-[#25D366]",
      hoverBg: "hover:bg-[#128C7E]",
    },
    {
      id: "phone",
      icon: <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      href: `tel:${brand.phoneRaw}`,
      bgBase: "bg-green-600",
      hoverBg: "hover:bg-green-700",
    },
  ];

  if (!brand) return null;

  return (
    <div
      className={clsx(
        "fixed top-1/2 -translate-y-1/2 z-50 flex flex-col transition-all duration-500",
        // Position on the left for LexRera, right for Vidhit (or both on left, but different styling)
        "left-0",
        isVisible
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible -translate-x-10",
      )}
    >
      {socials.map((social) => {
        // Different styling logic
        const commonClasses =
          "flex items-center justify-center transition-all duration-300 w-10 h-10 md:w-12 md:h-12";

        let brandSpecificClasses = "";

        if (isLexRera) {
          // Sharp edges, attached to the wall, slide out effect on hover
          brandSpecificClasses = clsx(
            commonClasses,
            social.bgBase,
            social.hoverBg,
            "border-b border-white/20 last:border-b-0",
            "hover:w-12 md:hover:w-16 hover:pl-2 md:hover:pl-4 opacity-90 hover:opacity-100 shadow-md",
          );
        } else {
          // Vidhit: Circular floating icons with some margin from the wall
          brandSpecificClasses = clsx(
            commonClasses,
            social.bgBase,
            "rounded-full mb-2 ml-2 md:mb-3 md:ml-3 shadow-lg",
            "hover:scale-110 hover:-translate-y-1",
            "hover:shadow-xl opacity-90 hover:opacity-100",
          );
        }

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={brandSpecificClasses}
            aria-label={social.id}
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
};

export default StickySocialSidebar;
