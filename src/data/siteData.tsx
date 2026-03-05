import {
  Scale,
  Shield,
  Users,
  Lightbulb,
  BookOpen,
  Gavel,
  FileText,
  ShieldCheck,
  Building2,
  FileCheck,
  Briefcase,
  Zap,
  Heart,
  Coffee,
  PhoneCall,
} from "lucide-react";

// Assets
import legalScales from "../assets/legal_scales.png";
import legalBooks from "../assets/legal_books.png";
import legalCourt from "../assets/legal_court.png";
import legalConsultation from "../assets/legal_consultation.png";
// import realEstateLaw from "../assets/real_estate_law.png";
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
  email?: string;
  phone?: string;
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
}

// --- Data ---

export const backgroundImages = {
  scales: legalScales,
  books: bgBanner,
  court: legalCourt,
  consultation: legalConsultation,
  rera: "https://goelgangadevelopments.com/wp-content/uploads/2019/08/28.jpg",
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
    title:
      "Civil and criminal litigation before Trial Courts, Appellate Courts, and High Courts",
    desc: "Comprehensive representation in civil disputes and criminal defense across all levels of the judiciary.",
    icon: Scale,
    backgroundImage:
      "https://jimhalelaw.com/wp-content/uploads/2024/01/cuffed-hands-behind-back.jpg",
  },
  {
    title: "Civil, Criminal & Constitutional Matters",
    desc: "Expert legal counsel and representation in complex civil suits, criminal trials, and constitutional writ jurisdictions.",
    icon: Shield,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2RFPMPqmcQs4iLheWx2OqMEtuHxh2NkWiQ&s",
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
    title: "Dispute Resolution – Litigation, Arbitration & Mediation",
    desc: "Alternative dispute resolution services providing cost-effective and timely settlement of civil and commercial conflicts.",
    icon: Heart,
    backgroundImage:
      "https://lh5.googleusercontent.com/proxy/MwOSjzEZ1tTwJlJPEHmE1JOD8ZmyInlkMTFXH_6nEEda0OwvnmwiwI41SIe56ANivmGefpZGfoN6Dk_sG1SPSXapwesoZy9Na8Ui-AeASPEuvk280dimM7Uxkw",
  },
  {
    title: "Corporate & Business Laws",
    desc: "Advisory on company law, regulatory compliance, mergers & acquisitions, and corporate governance for businesses.",
    icon: Building2,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZCFoc9vRjN54u_BKdVC07JEP41GmgorU6w&s",
  },
  {
    title: "Labour, Industrial & Employment Relations",
    desc: "Ensuring compliance with labour codes, handling industrial disputes, and advising on employee welfare laws.",
    icon: Users,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVI8PzvJOYExGe-G9HwoMP727daSf9BNQ_w&s",
  },
  {
    title: "Contract Drafting & Commercial Agreements",
    desc: "Meticulous drafting, vetting, and negotiation of commercial contracts, sale deeds, and legal agreements.",
    icon: FileText,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0SKALhgWN_LUkAht1PRhj5K2TUg1_13Ghw&s",
  },
  {
    title: "Real Estate (RERA), Infrastructure & Project Disputes",
    desc: "Specialized regulatory and advisory support to real estate stakeholders for compliance and dispute resolution.",
    icon: Building2,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuoSwPzSsanQU8HIx6sSpxSP2bqg-GNtFJA&s",
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
    title: "Franchising, Licensing & Distributorship Agreements",
    desc: "Drafting and negotiating comprehensive agreements to protect business interests across supply chains and brand expansions.",
    icon: FileCheck,
    backgroundImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
  },
  {
    title:
      "Intellectual Property Laws - Trademark, Patent & Copyright (Filing & Infringement)",
    desc: "Protection and enforcement of trademarks, copyrights, and patents to safeguard intellectual assets.",
    icon: Lightbulb,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9uOgtI1wsFvwtl4QZBqeB2YcNmJKHp-Dhw&s",
  },
  {
    title: "Education & Environment Laws",
    desc: "Navigating legal issues in the education sector and ensuring compliance with environmental regulations.",
    icon: BookOpen,
    backgroundImage:
      "https://blog.ipleaders.in/wp-content/uploads/2020/12/web_climate_law_istock-961826918_0.jpg",
  },
  {
    title: "Start-ups & Emerging Businesses",
    desc: "End-to-end legal structuring, incorporation, and advisory services tailored for startups and new ventures.",
    icon: Zap,
    backgroundImage: "https://etimg.etb2bimg.com/photo/106867403.cms",
  },
  {
    title: "EPF & Social Security Laws",
    desc: "Expert counsel on provident fund disputes, social security compliance, and employee benefits.",
    icon: ShieldCheck,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZSFi1i4Q1-zRi8R1FjWg3SKSsRrOP5ga2g&s",
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
      "Mr. Abhinay Priyadarshi is a young and dynamic Advocate with a strong academic foundation and extensive practical experience across diverse areas of law. He graduated with a BBA LL.B. (Hons.) with specialization in Intellectual Property Rights from KIIT University and has further strengthened his academic credentials with an LL.M., while presently pursuing his Ph.D. in Law.",
    image: "./team/Abhinay.jpeg",
    email: "vidhitlawassociates8@gmail.com",
    phone: "+91-7008222725",
  },
  {
    name: "Jainandra Kumar",
    role: "Partner",
    designation: "Advocate, Patna High Court",
    description:
      "JAINANDRA has  15 years of extensive experience in litigation, legal advisory, documentation, and regulatory compliance. Education:- LL.B, M.B.A.(HRM), M.COM . Practicing before the Hon’ble Patna High Court since 2011, he has successfully represented clients in matters relating to Arbitration, Consumer Protection, Negotiable Instruments Act, Civil & Criminal Writs, Bail Matters, Appeals, and allied laws.",
    image: "./team/Jainandra.jpeg",
    email: "vidhitlawassociates8@gmail.com",
    phone: "+91-9934652263",
  },
];

export const supportTeam: Partner[] = [
  {
    name: "RANJEET CHOUBEY",
    role: "Senior Associate",
    designation: "Senior Associate",
    description:
      "Mr.Ranjeet Choubey is a seasoned litigation professional with over 20 years of extensive experience in the legal field. He holds qualifications of M.Com and LL.B., bringing a strong blend of commercial insight and legal acumen to his practice. Mr. Choubey has developed particular expertise in election-related matters, including disputes concerning Municipalities, Panchayats, and other statutory bodies. His practice spans a wide spectrum of Civil and Criminal Litigation, where he regularly handles complex legal issues and represents clients before various judicial forums. He has substantial experience in matters involving Writ Jurisdiction, and has successfully advised and represented clients in mediation proceedings governed by diverse substantive laws. Known for his precision and clarity, Mr. Choubey is highly adept in drafting pleadings and conducting matters before courts, tribunals, quasi-judicial bodies, and the High Court. In addition, he has served as a panel lawyer for government organizations, providing legal advisory and representation services, further underscoring his depth of experience and professional credibility.",
    image: "./team/Ranjit.jpeg",
    email: "[EMAIL_ADDRESS]",
    phone: "+91-9431034035",
  },
  {
    name: "Priyanka Kumari",
    role: "Associate",
    designation: "Associate",
    description:
      "Ms. Priyanka Kumari is a bright and dynamic young lawyer with sound knowledge and practical exposure across diverse areas of law. She holds a B.A. LL.B. degree from UPES, Dehradun, and has been actively engaged in legal practice since her enrollment.",
    image: "./team/Priyanka.jpeg",
    email: "vikram@vidhitlaw.com",
    phone: "+91 98765 43213",
  },
  {
    name: "Ramratan Singh",
    role: "Senior Associate",
    designation: "Senior Associate",
    description:
      "Ram Ratna Singh is an advocate with over 20 years of litigation experience. He completed his graduation and LL.B. from Magadh University and was enrolled with the Bar in 1996. He is also an Advocate-on-Record at the Patna High Court.",
    image: "./team/Ram-ratan.jpeg",
    email: "neha@vidhitlaw.com",
    phone: "+91 98765 43214",
  },
  {
    name: "Bishwash Vijeta",
    role: "Associate",
    designation: "Associate",
    description:
      "Bishwash Vijeta  is a young and dynamic Advocate with a strong academic foundation and substantial practical experience across diverse areas of law. He completed his B.A. LL.B. (Hons.) and further enhanced his academic credentials by obtaining an LL.M. from Chanakya National Law University (CNLU). He is presently pursuing his Ph.D. in Law.",
    image: "./team/Bishwash.jpeg",
    email: "rohan@vidhitlaw.com",
    phone: "+91 98765 43215",
  },
];

export const reraServices: ReraService[] = [
  {
    icon: Lightbulb,
    title: "PRE-PROJECT ASSISTANCE",
    desc: "Comprehensive guidance and assistance to developers before launching a project under RERA.",
    slug: "pre-project",
  },
  {
    icon: Users,
    title: "AGENT SERVICES",
    desc: "Complete registration, compliance, and renewal solutions for real estate agents.",
    slug: "agent-services",
  },
  {
    icon: Building2,
    title: "PROJECT SERVICES",
    desc: "End-to-end assistance for project registration, compliance, and modifications.",
    slug: "project-services",
  },
  {
    icon: PhoneCall,
    title: "CONSULTANCY SERVICES",
    desc: "Expert legal consultancy for developers, agents, and buyers regarding RERA concerns.",
    slug: "consultancy",
  },
  {
    icon: BookOpen,
    title: "TRAINING SERVICES",
    desc: "Specialized training programs on RERA acts, compliances, and best practices.",
    slug: "training",
  },
  {
    icon: FileCheck,
    title: "OTHER SERVICES",
    desc: "Additional statutory support services, including annual audits for projects.",
    slug: "other-services",
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
    title: "Pre-Project Assistance",
    description:
      "Before a project launch, thorough due diligence and documentation are critical. We assist promoters in structuring their projects to ensure seamless RERA compliance from day one, minimizing future legal risks.",
    keyServices: ["Pre-Project Assistance"],
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
  "agent-services": {
    title: "Agent Services",
    description:
      "Real Estate Agents must be registered to facilitate any transaction. We simplify the registration, renewal, and compliance processes for individuals and companies, ensuring you can operate legally.",
    keyServices: [
      "Agent Registration",
      "Agent Renewal",
      "Agent Compliances",
      "Change in Application",
      "Withdrawal of Application",
    ],
    process: [
      "Document Verification (KYC + Business)",
      "Application Drafting & Fee Payment",
      "Submission to Authority",
      "Certificate Issuance",
    ],
    deliverables: [
      "Agent Registration Certificate",
      "Compliance Trackers",
      "Renewal Reminders",
    ],
  },
  "project-services": {
    title: "Project Services",
    description:
      "End-to-end support for real estate projects under RERA. From initial registration and quarterly compliances to modifications, extensions, and final project completion filing.",
    keyServices: [
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
    process: [
      "Data Gathering (Technical, Financial, Legal)",
      "Drafting of Affidavits & Declarations",
      "Online Filing on RERA Portal",
      "Follow-up & Query Resolution",
      "Grant of Certificates & Approvals",
    ],
    deliverables: [
      "RERA Registration Certificate",
      "Filed QPR Receipts",
      "Modification/Extension Approvals",
    ],
  },
  consultancy: {
    title: "Consultancy Services",
    description:
      "Expert legal consultancy for developers, agents, and buyers regarding all RERA concerns and interpretations of the law. Book a session to resolve your doubts.",
    keyServices: [
      "Telephonic Consultancy",
      "Video Calling Consultancy",
      "Yearly Consultancy",
    ],
    process: [
      "Booking a Slot",
      "Sharing Preliminary Queries / Documents",
      "Consultation Session with Expert",
      "Post-session Actionable Advice",
    ],
    deliverables: [
      "Detailed Legal Opinion",
      "Clarity on Compliance Roadmap",
      "Yearly Support Retainership (If applicable)",
    ],
  },
  training: {
    title: "Training Services",
    description:
      "Specialized training programs designed for real estate professionals to understand RERA acts, compliances, and best practices in sales and marketing.",
    keyServices: [
      "RERA Training",
      "Sales & Marketing Training",
      "Institutional Training",
    ],
    process: [
      "Needs Assessment",
      "Customized Curriculum Development",
      "Conducting Interactive Workshops",
      "Feedback & Evaluation",
    ],
    deliverables: [
      "Training Materials & Toolkits",
      "Certificate of Participation",
      "Post-Training Strategy Session",
    ],
  },
  "other-services": {
    title: "Other Services",
    description:
      "Additional statutory support services, including annual audit reports and bespoke compliances to maintain a pristine legal standing.",
    keyServices: ["Annual Audit Report Submission"],
    process: [
      "Data Collection & Coordination with CAs",
      "Review of Financial Documents",
      "Preparation of Annual Audit Report",
      "Filing with RERA Authority",
    ],
    deliverables: [
      "Filed Annual Audit Report",
      "Compliance Acknowledgement Receipt",
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

export const vidhitClients: Client[] = [
  { id: 1, name: "M/s  Lakshya Bharti Global Infra Corporation Pvt. Ltd" },
  { id: 2, name: "Dakshin Bihar Gramin Bank Officer’s Association" },
  { id: 3, name: "BuildWell Constructions" },
  { id: 4, name: "M/s Ansh Raj Construction Pvt. LTD." },
  { id: 5, name: "Rajesh Kumar CAT Client" },
  { id: 6, name: "Birbal Singh Lbour and industrial law client" },
  { id: 7, name: "Sabh Imam" },
];

export const reraClients: Client[] = [
  { id: 1, name: "Sarvodya Grih Nirman Pvt. LTD" },
  { id: 2, name: "DURGA HOME CONSTRUCTION" },
  { id: 3, name: "DURGA URBAN PROJECTS LLP" },
  { id: 4, name: "Platinum Heritage Homes Pvt. Ltd." },
  { id: 5, name: "M/S Metro Construction" },
  { id: 6, name: "AZALFA BUILDING CONSTRUCTION PVT LTD" },
  { id: 7, name: "Sarvodya Grih Nirman Pvt. LTD." },
  { id: 8, name: "AZALFA BUILDING CONSTRUCTION PVT LTD" },
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
    experience: "1 -3 Years",
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

export const galleryImages = [
  "./gallary/court1.jpeg", // Wide (Gavel)
  "./team/Abhinay.jpeg", // Wide (Meeting)
  "./team/Bishwash.jpeg", // Wide (Meeting)
  "./gallary/team.jpeg", // Tall (Clock/Meeting)
  "./gallary/main.jpeg", // Tall (Law Books)
  "./team/Priyanka.jpeg", // Wide (Meeting)
  "./team/Jainandra.jpeg", // Wide (Meeting)
  "./team/Ram-ratan.jpeg", // Wide (Meeting)
  "./team/Ranjit.jpeg", // Wide (Meeting)
  "./gallary/court2.jpeg", // Square/Wide (Courthouse)
];
