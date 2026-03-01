import { createContext, useContext, type ReactNode } from "react";
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
}

// --- Resolve active brand ---
const config = brandConfig as BrandConfig;
const activeBrand: Brand = config.brands[config.activeBrand];

// --- Context ---
const BrandContext = createContext<Brand>(activeBrand);

export const BrandProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BrandContext.Provider value={activeBrand}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = (): Brand => {
  return useContext(BrandContext);
};

export { config as brandConfig };
export default BrandContext;
