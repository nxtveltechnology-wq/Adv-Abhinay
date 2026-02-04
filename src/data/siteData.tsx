import {
  Scale,
  Shield,
  Users,
  Lightbulb,
  BookOpen,
  Gavel,
  FileText,
  ShieldCheck,
  ScrollText,
  Building2,
  FileCheck,
  Briefcase,
  Zap,
  Heart,
  Coffee,
} from "lucide-react";

// Assets
import legalScales from "../assets/legal_scales.png";
import legalBooks from "../assets/legal_books.png";
import legalCourt from "../assets/legal_court.png";
import legalConsultation from "../assets/legal_consultation.png";
import realEstateLaw from "../assets/real_estate_law.png";
import lawTeamMeeting from "../assets/law_team_meeting.png";
import bgBanner from "../assets/bg-banner.jpeg";

// --- Interfaces ---

export interface JobOpening {
  id: number;
  title: string;
  type: "Full-Time" | "Internship" | "Part-Time";
  location: string;
  department: string;
  experience: string;
  description: string;
}

export interface CareerBenefit {
  title: string;
  desc: string;
  icon: any;
}

export interface PracticeArea {
  title: string;
  desc: string;
  icon?: any; // Lucide icon
  backgroundImage?: string; // Background image for practice area cards
}

export interface Partner {
  name: string;
  role: string;
  designation: string;
  description: string;
  image?: string;
}

export interface ReraService {
  icon: any;
  title: string;
  desc: string;
  slug?: string; // For linking to details
}

export interface ReraPackage {
  title: string;
  subtitle: string;
  features: string[];
  recommended: boolean;
}

export interface ReraServiceDetail {
  title: string;
  description: string;
  keyServices: string[];
  process: string[];
  deliverables: string[];
}

export interface CoreValue {
  title: string;
  desc: string;
  icon: any;
}

export interface Award {
  title: string;
  year: string;
  organization: string;
  image?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

// --- Data ---

export const backgroundImages = {
  scales: legalScales,
  books: bgBanner,
  court: legalCourt,
  consultation: legalConsultation,
  rera: realEstateLaw,
  team: lawTeamMeeting,
};

// Hero slider images for homepage
export const heroSliderImages = [legalScales, legalBooks, legalCourt];

// Practice area background images (cycling pattern)
export const practiceAreaBackgrounds = [legalScales, legalBooks, legalCourt];

export const coreValues: CoreValue[] = [
  {
    title: "Client-Centric",
    desc: "Result-driven representation tailored specifically to your unique needs and goals.",
    icon: Users,
  },
  {
    title: "Ethical Integrity",
    desc: "We uphold the highest standards of transparency, confidentiality, and professional ethics.",
    icon: Shield,
  },
  {
    title: "Legal Innovation",
    desc: "Combining traditional legal wisdom with modern, innovative dispute resolution strategies.",
    icon: Lightbulb,
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    title: "Civil, Criminal & Constitutional Law",
    desc: "Comprehensive representation in civil disputes, criminal defense, and constitutional writ jurisdictions before High Courts and Tribunals.",
    icon: Scale,
    backgroundImage:
      "https://jimhalelaw.com/wp-content/uploads/2024/01/cuffed-hands-behind-back.jpg",
  },
  {
    title: "Service & Employment Law",
    desc: "Expert handling of government service matters, employment contracts, workplace disputes, and disciplinary proceedings.",
    icon: Users,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nYdKlrZB5SpUPgmroycLOhbdQhbBCUXbGA&s",
  },
  {
    title: "Banking, Insurance & Financial Disputes",
    desc: "Specialized in debt recovery (DRT/DRAT), insurance claim disputes, and banking regulatory compliance matters.",
    icon: Briefcase,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuoSwPzSsanQU8HIx6sSpxSP2bqg-GNtFJA&s",
  },
  {
    title: "Commercial Litigation & Arbitration",
    desc: "Strategic resolution of complex business disputes through aggressive litigation and alternative dispute resolution mechanisms.",
    icon: Gavel,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XBK-vxtO3rW4GEH-X0psUzZrbe3wgB8Jbg&s",
  },
  {
    title: "Corporate & Business Laws",
    desc: "Advisory on company law, regulatory compliance, mergers & acquisitions, and corporate governance for businesses.",
    icon: Building2,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZCFoc9vRjN54u_BKdVC07JEP41GmgorU6w&s",
  },
  {
    title: "Labour & Industrial Relations",
    desc: "Ensuring compliance with labour codes, handling industrial disputes, and advising on employee welfare laws.",
    icon: Users,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVI8PzvJOYExGe-G9HwoMP727daSf9BNQ_w&s",
  },
  {
    title: "Contract Drafting & Agreements",
    desc: "Meticulous drafting, vetting, and negotiation of commercial contracts, sale deeds, and legal agreements.",
    icon: FileText,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0SKALhgWN_LUkAht1PRhj5K2TUg1_13Ghw&s",
  },
  {
    title: "Election Law & Representation",
    desc: "Legal support for election petitions, representation before election commissions, and political compliance.",
    icon: BookOpen,
    backgroundImage:
      "https://www.livelaw.in/h-upload/2022/11/01/1500x900_441858-election-commission-of-india-eci-and-sc-1.jpg",
  },
  {
    title: "Insolvency, Bankruptcy & Taxation",
    desc: "Handling insolvency proceedings under IBC, NCLT representation, and direct/indirect taxation dispute resolution.",
    icon: Scale,
    backgroundImage:
      "https://blog.ipleaders.in/wp-content/uploads/2020/09/Bankruptcylaw-1.png",
  },
  {
    title: "Intellectual Property Rights",
    desc: "Protection and enforcement of trademarks, copyrights, and patents to safeguard intellectual assets.",
    icon: Lightbulb,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9uOgtI1wsFvwtl4QZBqeB2YcNmJKHp-Dhw&s",
  },
  {
    title: "Education & Environmental Laws",
    desc: "Navigating legal issues in the education sector and ensuring compliance with environmental regulations.",
    icon: BookOpen,
    backgroundImage:
      "https://blog.ipleaders.in/wp-content/uploads/2020/12/web_climate_law_istock-961826918_0.jpg",
  },
  {
    title: "Startups & Emerging Businesses",
    desc: "End-to-end legal structuring, incorporation, and advisory services tailored for startups and new ventures.",
    icon: Lightbulb,
    backgroundImage: "https://etimg.etb2bimg.com/photo/106867403.cms",
  },
  {
    title: "EPF & Social Security Laws",
    desc: "Expert counsel on provident fund disputes, social security compliance, and employee benefits.",
    icon: ShieldCheck,
    backgroundImage:
      "https://fe189aae.delivery.rocketcdn.me/wp-content/uploads/2024/03/Social-Security-TeamLease-Services-Limited-1.jpg",
  },
  {
    title: "Family & Matrimonial Disputes",
    desc: "Sensitive and effective handling of divorce, custody, maintenance, and family property settlements.",
    icon: Users,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2RFPMPqmcQs4iLheWx2OqMEtuHxh2NkWiQ&s",
  },
];

export const partners: Partner[] = [
  {
    name: "Abhinay Priyadarshi",
    role: "Partner",
    designation: "Advocate, Patna High Court",
    description:
      "A distinguished legal practitioner with deep expertise in civil, criminal, and constitutional law. Known for his strategic litigation capability and unwavering commitment to client rights.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Jainandra Kumar",
    role: "Partner",
    designation: "Advocate, Patna High Court",
    description:
      "Specializes in corporate advisory, RERA regulations, and commercial dispute resolution. He brings a pragmatic, solution-oriented approach to complex legal challenges.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
];

export const reraServices: ReraService[] = [
  {
    icon: ScrollText,
    title: "Project Registration",
    desc: "Comprehensive assistance for RERA registration of real estate projects, ensuring all statutory documents and disclosures are compliant with the Act/Rules.",
    slug: "registration",
  },
  {
    icon: Users,
    title: "Agent Registration",
    desc: "Facilitating RERA registration for real estate agents, including renewal services and compliance advisory.",
    slug: "agent-registration",
  },
  {
    icon: FileCheck,
    title: "Compliance & Filings",
    desc: "Quarterly and annual compliance filings (QPR/APR), professional certificates, and financial disclosures maintenance.",
    slug: "compliance",
  },
  {
    icon: Gavel,
    title: "Litigation Services",
    desc: "Representation before RERA Authorities, Adjudicating Officers, and Appellate Tribunals for complaints and appeals.",
    slug: "dispute-resolution",
  },
  {
    icon: Building2,
    title: "Promoter Advisory",
    desc: "Strategic legal advice for developers on advertisement norms, booking rules, agreement to sale drafting, and fund utilization.",
    slug: "pre-project",
  },
  {
    icon: ShieldCheck,
    title: "Allottee Rights",
    desc: "Advising homebuyers on their rights, delay compensation, possession claims, and refund executions.",
    slug: "allottees",
  },
];

export const reraPackages: ReraPackage[] = [
  {
    title: "Retainership Package",
    subtitle: "For Developers & Promoters",
    features: [
      "End-to-End Project Registration",
      "Quarterly Compliance Filings (QPR)",
      "Annual Audit Coordination",
      "Legal Advisory on Buyer Agreements",
      "Priority Dispute Resolution Support",
    ],
    recommended: true,
  },
  {
    title: "Agent Compliance",
    subtitle: "For Real Estate Agents",
    features: [
      "New Agent Registration",
      "Registration Renewal",
      "Compliance Advisory",
      "Drafting of Service Agreements",
      "Representation in Routine Hearings",
    ],
    recommended: false,
  },
  {
    title: "Litigation Support",
    subtitle: "For Specific Disputes",
    features: [
      "Case Analysis & Strategy",
      "Drafting of Complaints/Appeals",
      "Representation before Authority/Tribunal",
      "Execution of Orders",
      "Legal Notices & Rejoinders",
    ],
    recommended: false,
  },
];

export const reraServiceDetails: Record<string, ReraServiceDetail> = {
  "pre-project": {
    title: "Pre-Project Registration Assistance",
    description:
      "Before a project launch, thorough due diligence and documentation are critical. We assist promoters in structuring their projects to ensure seamless RERA compliance from day one, minimizing future legal risks.",
    keyServices: [
      "Land Title Verification & Due Diligence",
      "Approvals & NOCs Review",
      "Drafting of Allotment Letters & Agreements",
      "Structuring of Project Promotion Materials",
      "Promoter Entity Legal Structuring",
    ],
    process: [
      "Initial Consultation & Document Collection",
      "Legal Vetting of Land & Approvals",
      "Gap Analysis Report",
      "Rectification & Final Compliance Readiness",
    ],
    deliverables: [
      "Due Diligence Report",
      "Vetted Draft Agreement for Sale",
      "Compliance Checklist",
    ],
  },
  registration: {
    title: "RERA Project Registration",
    description:
      "Mandatory for all ongoing and new real estate projects. We handle the end-to-end registration process on the RERA portal, ensuring accurate data submission to prevent rejection or penalties.",
    keyServices: [
      "Account Creation & Profile Management",
      "Form A & Form B Filing",
      "Technical & Financial Document Uploads",
      "Declaration & Affidavit Drafting",
      "Handling Queries from RERA Authority",
    ],
    process: [
      "Data Gathering (Technical, Financial, Legal)",
      "Drafting of Affidavits & Declarations",
      "Online Filing on RERA Portal",
      "Follow-up & Query Resolution",
      "Grant of Registration Certificate",
    ],
    deliverables: [
      "RERA Registration Certificate",
      "Project Login Credentials",
      "Filed Copy of Application",
    ],
  },
  "agent-registration": {
    title: "RERA Agent Registration",
    description:
      "Real Estate Agents must be registered to facilitate any transaction. We simplify the registration process for individuals and companies, ensuring you can operate legally.",
    keyServices: [
      "Individual & Firm Registration",
      "Renewal of Agent Registration",
      "Maintenance of Books & Records Advisory",
      "Compliance with Advertisement Norms",
    ],
    process: [
      "Document Verification (KYC + Business)",
      "Application Drafting & Fee Payment",
      "Submission to Authority",
      "Certificate Issuance",
    ],
    deliverables: [
      "Agent Registration Certificate (Form H)",
      "Validity Tracker",
    ],
  },
  compliance: {
    title: "Compliance & Filings",
    description:
      "Post-registration, projects must adhere to strict reporting norms. We manage your ongoing statutory compliance to keep your project in good standing.",
    keyServices: [
      "Quarterly Progress Reports (QPR)",
      "Annual Audit Reports (Form 5)",
      "Project Extension Applications",
      "Change in Promoter/Project Details",
      "Quarterly Updation of Web Page",
    ],
    process: [
      "Quarterly Data Collection",
      "Verification against Chartered Accountant Certificates",
      "Online Upload & Status Check",
      "Annual Audit Coordination",
    ],
    deliverables: ["Filed QPR Receipts", "Annual Compliance Certificate"],
  },
  "dispute-resolution": {
    title: "Legal Representation & Dispute Resolution",
    description:
      "Expert litigation services for complaints filed before the RERA Authority, Adjudicating Officer, or Appellate Tribunal. We represent both Promoters and Allottees.",
    keyServices: [
      "Drafting Legal Replies to Notices",
      "Filing Complaints (Form M / Form N)",
      "Representation in Hearings",
      "Filing Recalls & Restoration Applications",
      "Execution of RERA Orders",
    ],
    process: [
      "Case Merit Analysis",
      "Drafting of Petition/Reply",
      "Filing & Listing",
      "Arguments & Representation",
      "Final Order Procurement",
    ],
    deliverables: [
      "Drafted Pleadings",
      "Hearing Updates",
      "Certified Copy of Orders",
    ],
  },
  allottees: {
    title: "Allottees / Buyers Services",
    description:
      "Protecting the rights of homebuyers. extensive support for issues like delayed possession, non-refund of booking amount, or deviation from sanctioned plans.",
    keyServices: [
      "Complaint Filing for Delay Compensation",
      "Refund with Interest Claims",
      "Execution of Possession Orders",
      "Formation of Allottee Associations",
      "Review of Builder-Buyer Agreements",
    ],
    process: [
      "Consultation & Document Review",
      "Legal Notice Issuance",
      "Filing of Complaint",
      "Legal Representation",
    ],
    deliverables: [
      "Legal Opinion",
      "Filed Complaint Copy",
      "Order Execution Support",
    ],
  },
  drafting: {
    title: "RERA Legal Drafting",
    description:
      "Precision legal drafting that aligns with RERA statutes. We create robust contracts that protect your interests and stand the test of legal scrutiny.",
    keyServices: [
      "Allotment Letters",
      "Agreement to Sale (RERA Format)",
      "Conveyance / Sale Deeds",
      "Joint Development Agreements (JDA)",
      "Construction Contracts",
    ],
    process: [
      "Requirement Analysis",
      "Drafting & Internal Vetting",
      "Client Review & Iteration",
      "Finalization",
    ],
    deliverables: [
      "Execute-ready Legal Agreements",
      "Clauses Explanation Note",
    ],
  },
};

export const awards: Award[] = [
  {
    title: "Best Commercial Litigation Firm",
    year: "2023",
    organization: "Legal Era Awards",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ip7ACQFze5R84zL9OU1zhnhX5VFkYlYScA&s",
  },
  {
    title: "Rising Star in Real Estate Law",
    year: "2022",
    organization: "Asian Legal Business",
    image:
      "https://assets.spe.org/dims4/default/cadfd13/2147483647/strip/true/crop/724x407+0+38/resize/1200x675!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.us-east-2.amazonaws.com%2Fb2%2Fd3%2F6310f62f4245bac3c0e1ebeb72c5%2Fgettyimages-2157551537.jpg",
  },
  {
    title: "Excellence in Legal Practice",
    year: "2021",
    organization: "Indian National Bar Association",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUxuljRuWfNjczz1cyOFl5oKrujsJm2gWzw&s",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Director, Sunshine Buildtech Pvt Ltd",
    content:
      "Vidhit Law Associates provided exceptional guidance during our complex RERA registration process. Their team is knowledgeable, responsive, and truly professional.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Amit Singh",
    role: "Civil Contractor",
    content:
      "I was impressed by their strategic approach to my legal dispute. They not only won the case but also ensured a smooth execution of the order. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Homebuyer",
    content:
      "Thanks to Advocate Abhinay and his team, I was able to get my refund from a builder who had delayed the project for years. They are the best for RERA matters.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
  },
];

export const clients: Client[] = [
  {
    id: 1,
    name: "Tech Solutions Inc.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
  },
  {
    id: 2,
    name: "Green Valley Real Estate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    name: "BuildWell Constructions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
  },
  {
    id: 4,
    name: "Innovate India Ltd",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Tarta_Steel_logo.svg/1200px-Tarta_Steel_logo.svg.png",
  },
  {
    id: 5,
    name: "Sunrise Developers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: "Senior Litigation Associate",
    type: "Full-Time",
    location: "Patna High Court",
    department: "Litigation",
    experience: "5-7 Years",
    description:
      "Looking for an experienced litigator with a strong command over Civil and Constitutional matters.",
  },
  {
    id: 2,
    title: "Legal Researcher",
    type: "Full-Time",
    location: "Patna Office",
    department: "Research",
    experience: "1-3 Years",
    description:
      "Detail-oriented researcher to support the team with case laws and drafting.",
  },
  {
    id: 3,
    title: "Legal Intern",
    type: "Internship",
    location: "Patna Office",
    department: "General",
    experience: "Final Year Student",
    description:
      "Opportunity for law students to gain hands-on experience in court proceedings.",
  },
];

export const careerBenefits: CareerBenefit[] = [
  {
    title: "Mentorship",
    desc: "Direct guidance from senior partners and experts.",
    icon: Users,
  },
  {
    title: "Growth",
    desc: "Structured career path with regular performance reviews.",
    icon: Zap,
  },
  {
    title: "Work-Life Balance",
    desc: "We respect personal time and mental well-being.",
    icon: Heart,
  },
  {
    title: "Vibrant Environment",
    desc: "Collaborative and inclusive workplace culture.",
    icon: Coffee,
  },
];
