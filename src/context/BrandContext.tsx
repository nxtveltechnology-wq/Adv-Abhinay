import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import brandConfig from "../data/brandConfig.json";

// --- Types ---
export interface BrandSocialLinks {
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  footerLogo: string;
  footerLogoAlt: string;
  email: string;
  phone: string;
  phoneRaw: string;
  altPhone: string;
  altPhoneRaw: string;
  copyright: string;
  barCouncilNote: string;
  homeComponent: string;
  socialLinks: BrandSocialLinks;
}

export interface BrandConfig {
  activeBrand: string;
  brands: Record<string, Brand>;
  commonPages: string[];
}

// --- Resolve active brand ---
const config = brandConfig as BrandConfig;
const activeBrand: Brand = config.brands[config.activeBrand];

// --- Context ---
const BrandContext = createContext<Brand>(activeBrand);

export const BrandProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  // Switch to Lex Rera brand when on /rera/* routes
  const isReraPage = pathname.startsWith("/rera");
  const currentBrand = isReraPage ? config.brands["lexrera"] : activeBrand;

  return (
    <BrandContext.Provider value={currentBrand}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = (): Brand => {
  return useContext(BrandContext);
};

export { config as brandConfig };
export default BrandContext;
