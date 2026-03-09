# Vidhit Law Associates & Lex RERA Advisors

A modern, responsive, multi-brand React application representing two allied legal entities:
1. **Vidhit Law Associates**: A full-service law firm providing comprehensive legal solutions across civil, criminal, constitutional, and corporate law domains.
2. **Lex RERA Advisors**: A specialized legal firm focused on RERA compliance, real estate regulatory advisory, project registration, and dispute resolution for developers and homebuyers.

## Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React & React Icons
- **Animations**: Framer Motion

## Key Features

- **Multi-Brand Architecture**: Dynamic swapping of themes, logos, and content based on the active brand configuration (`brandConfig.json`).
- **Shared Components**: Unified UI components (Navbars, Footers, SEO, Cards) that adapt to the active brand context.
- **RERA Compliance Hub**: Dedicated sections for Real Estate Act, Bihar RERA Rules, and Regulations with direct PDF downloads.
- **Team Profiles**: Interactive partner and support team profiles.
- **Dynamic Routing**: Separate landing pages, services, and routing trees based on the active brand.
- **SEO Optimized**: Dynamic meta tags and titles using React Helmet.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

## Configuration

The active brand is controlled via `src/data/brandConfig.json`. 
Change the `activeBrand` value to either `"vidhitlaw"` or `"lexrera"` to switch the entire application context, including routing, colors, and content.

## Project Structure
- `/src/assets`: Images, logos, and downloadable PDFs (Rules & Acts).
- `/src/components`: Reusable UI components (layout, ui elements, home sections).
- `/src/context`: React Context providers (BrandContext for theming).
- `/src/data`: Static content, mock data, and brand configurations.
- `/src/hooks`: Custom React hooks.
- `/src/pages`: Page-level components, separated by brand (e.g., `/rera` for Lex Rera specific pages).
