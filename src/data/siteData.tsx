import {
  Scale,
  Shield,
  Users,
  Lightbulb,
  BookOpen,
  Gavel,
  FileText,
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
    title: "Civil, Constitutional & Criminal Litigation",
    desc: "Comprehensive representation in civil disputes, criminal trials, and constitutional writ jurisdictions across all forums.",
    icon: Scale,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2RFPMPqmcQs4iLheWx2OqMEtuHxh2NkWiQ&s",
  },
  {
    title: "Election, Municipal & Representation Matters",
    desc: "Legal support for election petitions, municipal disputes, and representation before administrative bodies.",
    icon: BookOpen,
    backgroundImage:
      "https://www.livelaw.in/h-upload/2022/11/01/1500x900_441858-election-commission-of-india-eci-and-sc-1.jpg",
  },
  {
    title: "Corporate & Business Laws",
    desc: "Advisory on company law, regulatory compliance, corporate governance, and commercial transactions.",
    icon: Building2,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZCFoc9vRjN54u_BKdVC07JEP41GmgorU6w&s",
  },
  {
    title: "Consumer & Commercial Litigation, Arbitration & ADR",
    desc: "Strategic resolution of complex business and consumer disputes through litigation and alternative dispute mechanisms (Mediation & Conciliation).",
    icon: Gavel,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XBK-vxtO3rW4GEH-X0psUzZrbe3wgB8Jbg&s",
  },
  {
    title: "Contract Drafting & Agreements",
    desc: "Meticulous drafting, vetting, and negotiation of corporate, commercial, and individual agreements.",
    icon: FileText,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0SKALhgWN_LUkAht1PRhj5K2TUg1_13Ghw&s",
  },
  {
    title: "Service, Education & Employment Law",
    desc: "Handling government service matters, employment contracts, and regulatory issues in the education sector.",
    icon: Users,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nYdKlrZB5SpUPgmroycLOhbdQhbBCUXbGA&s",
  },
  {
    title: "Banking, Insurance & Financial Disputes",
    desc: "Specialized advocacy in debt recovery, insurance claims, and banking regulatory compliance matters.",
    icon: Briefcase,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuoSwPzSsanQU8HIx6sSpxSP2bqg-GNtFJA&s",
  },
  {
    title: "Insolvency, Bankruptcy & Taxation",
    desc: "Handling insolvency proceedings under IBC, NCLT representation, and direct/indirect taxation dispute resolution.",
    icon: Scale,
    backgroundImage:
      "https://blog.ipleaders.in/wp-content/uploads/2020/09/Bankruptcylaw-1.png",
  },
  {
    title: "Real Estate Litigation & RERA Advisory",
    desc: "Comprehensive support in property disputes, Real Estate (RERA) compliance, and infrastructure matters.",
    icon: Building2,
    backgroundImage:
      "https://goelgangadevelopments.com/wp-content/uploads/2019/08/28.jpg",
  },
  {
    title: "Family Law & Disputes",
    desc: "Sensitive and effective handling of divorce, child custody, maintenance, and family property settlements.",
    icon: Heart,
    backgroundImage:
      "https://lh5.googleusercontent.com/proxy/MwOSjzEZ1tTwJlJPEHmE1JOD8ZmyInlkMTFXH_6nEEda0OwvnmwiwI41SIe56ANivmGefpZGfoN6Dk_sG1SPSXapwesoZy9Na8Ui-AeASPEuvk280dimM7Uxkw",
  },
  {
    title: "Intellectual Property Rights",
    desc: "Protection and enforcement of trademarks, copyrights, and patents to safeguard intellectual assets.",
    icon: Lightbulb,
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9uOgtI1wsFvwtl4QZBqeB2YcNmJKHp-Dhw&s",
  },
  {
    title: "Environment Law, Startups & Emerging Businesses Advisory",
    desc: "End-to-end legal structuring for startups and ensuring compliance with stringent environmental regulations.",
    icon: Zap,
    backgroundImage: "https://etimg.etb2bimg.com/photo/106867403.cms",
  },
];

export const partners: Partner[] = [
  {
    name: "Jainandra Kumar",
    role: "Partner",
    designation: "Advocate, Patna High Court",
    description:
      "Mr. Jainandra Kumar is a legal professional with over 15 years of extensive experience in litigation, legal advisory, documentation, and regulatory compliance. He holds LL.B., M.B.A. (HRM), and M.Com. degrees, reflecting a strong interdisciplinary academic background in law, management, and commerce. He has been practicing before the Hon’ble Patna High Court since 2011 and has successfully represented clients in a wide range of matters including Arbitration, Consumer Protection, Negotiable Instruments Act cases, Civil and Criminal Writ Petitions, Bail Matters, Appeals, and other allied legal proceedings. Mr. Kumar possesses significant expertise in drafting and vetting legal documents, including contracts, statutory notices, pleadings, deeds, agreements, and corporate documentation. His professional practice also extends to property and real estate matters, labour and service laws, corporate compliance under the Companies Act, and legal due diligence. He has been empanelled with several prominent government and statutory bodies, including the Bihar State Housing Board, Real Estate Regulatory Authority (RERA), Bihar, Bihar State Food & Civil Supplies Corporation Ltd., the Employees’ Provident Fund Organisation (EPFO) and the Rural Development Department, Government of Bihar. In the course of his professional practice, Mr. Kumar regularly appears before the High Courts, Civil Courts, Consumer Forums, and various Tribunals, providing comprehensive legal representation and advisory services.",
    image: "./team/Jainandra.jpeg",
    email: "vidhitlawassociates8@gmail.com",
    phone: "+91-9934652263",
  },
  {
    name: "Abhinay Priyadarshi",
    role: "Partner",
    designation: "Advocate, Patna High Court",
    description:
      "Mr. Abhinay Priyadarshi is a young and dynamic Advocate with a strong academic foundation and extensive practical experience across diverse areas of law. He holds a BBA LL.B. (Hons.) with specialization in Intellectual Property Rights from KIIT University and has further strengthened his academic credentials by completing his LL.M. He is presently pursuing a Ph.D. in Law from Gopal Narayan Singh University. With over seven years of active legal practice, Mr. Priyadarshi regularly appears before the High Court, Consumer Forums, Central Administrative Tribunal (CAT), Real Estate Regulatory Authority (RERA), Labour Courts, Tribunals, and various other judicial and quasi-judicial forums. His practice spans a wide range of legal disciplines including Criminal Law, Corporate and Commercial Law, Insurance Law, Constitutional Law, Service Law, Intellectual Property Rights, Banking Law, Arbitration, Real Estate Law, Revenue matters, and Land-related disputes. He possesses substantial expertise in legal counselling, contract drafting, legal documentation, regulatory compliance, and dispute resolution, and has successfully represented clients before Courts, Tribunals, Regulatory Authorities, Commissions, and Administrative Bodies. Mr. Priyadarshi’s approach to legal practice is characterized by analytical precision, strategic thinking, and a strong commitment to safeguarding client interests through ethical, professional, and result-oriented advocacy. In recognition of his professional competence and legal acumen, he has been empanelled with prominent government and statutory bodies, including the Real Estate Regulatory Authority (RERA), Bihar, the Bihar State Legal Services Authority, and the Rural Development Department, Government of Bihar.",
    image: "./team/Abhinay.jpeg",
    email: "vidhitlawassociates8@gmail.com",
    phone: "+91-7008222725",
  },
];

export const supportTeam: Partner[] = [
  {
    name: "RANJEET CHOUBEY",
    role: "Senior Associate",
    designation: "Senior Associate",
    description:
      "Mr.Ranjeet Choubey is a seasoned litigation professional with over 20 years of extensive experience in the legal field. He holds qualifications of M.Com and LL.B., bringing a strong blend of commercial insight and legal acumen to his practice. Mr. Choubey has developed particular expertise in election-related matters, including disputes concerning Municipalities, Panchayats, and other statutory bodies. His practice spans a wide spectrum of Civil and Criminal Litigation, where he regularly handles complex legal issues and represents clients before various judicial forums. He has substantial experience in matters involving Writ Jurisdiction, and has successfully advised and represented clients in mediation proceedings governed by diverse substantive laws. Known for his precision and clarity, Mr. Choubey is highly adept in drafting pleadings and conducting matters before courts, tribunals, quasi-judicial bodies, and the High Court. In addition, he has served as a panel lawyer for government organizations like Bihar State Housing Board & Nagar Parishad Arwal, providing legal advisory and representation services, further underscoring his depth of experience and professional credibility.",
    image: "./team/Ranjit.jpeg",
    email: "[EMAIL_ADDRESS]",
    phone: "+91-9431034035",
  },
  {
    name: "Priyanka Kumari",
    role: "Associate",
    designation: "Associate",
    description:
      "Ms. Priyanka Kumari is a bright and dynamic young lawyer with sound knowledge and practical exposure across diverse areas of law. She holds a B.A. LL.B. degree from UPES, Dehradun, and has been actively engaged in legal practice since her enrollment. She regularly appears before the High Court, Consumer Forums, Central Administrative Tribunal (CAT), various Tribunals, and other Courts, representing clients in a wide range of matters. Ms. Kumari has advised and represented numerous clients, earning recognition for her diligent approach and client-focused advocacy. Her primary practice areas include Civil and Criminal Law, Matrimonial Law, Service Law, Land Disputes, and Arbitration. She also possesses considerable experience in handling and resolving disputes through Mediation and Arbitration Centres, where her skills in negotiation and settlement have led to effective dispute resolution. Ms. Kumari is known for her professionalism, clarity in legal strategy, and commitment to delivering practical and timely legal solutions.",
    image: "./team/Priyanka.jpeg",
    email: "vikram@vidhitlaw.com",
    phone: "+91 98765 43213",
  },
  {
    name: "Ramratan Singh",
    role: "Senior Associate",
    designation: "Senior Associate",
    description:
      "Ram Ratna Singh is an advocate with over 20 years of litigation experience. He completed his graduation and LL.B. from Magadh University and was enrolled with the Bar in 1996. He is also an Advocate-on-Record at the Patna High Court. His areas of practice include Civil, Criminal, Banking, and Insurance Law. He regularly appears before Civil Courts and various Tribunals and has represented several reputed companies, including Oriental Insurance and National Insurance, as counsel.",
    image: "./team/Ram-ratan.jpeg",
    email: "neha@vidhitlaw.com",
    phone: "+91 98765 43214",
  },
  {
    name: "Bishwash Vijeta",
    role: "Associate",
    designation: "Associate",
    description:
      "With over three years of active court practice, he regularly appears before the High Court, RERA Authorities, and various other judicial and quasi-judicial forums. His areas of practice encompass a broad range of legal disciplines, including Corporate and Commercial Law, Constitutional Law, Service Law, Arbitration, and Real Estate Law. Mr. Vijeta possesses considerable expertise in legal counselling, contract drafting, documentation, statutory compliance, and dispute resolution. His legal practice is distinguished by analytical precision, strategic thinking, and a steadfast commitment to ethical and result-oriented advocacy, consistently focused on protecting and advancing client interests.",
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
    name: "Lakshya Bharti Global Infra Corporation Ltd.",
    role: "",
    content:
      "Vidhut Law Associates is a end to end legal services provider. We are in real estate business and have availed services of Vidhit for land verification, deed preparation, registry, RERA filing for new project approval, QPR filings and for cases also. We recommend Vidhit to all the real estate developers.",
    image: "./client/lakshaya-bharti.jpeg",
  },
  {
    id: 2,
    name: "Anshu Priyadarshi",
    role: "Civil Contractor",
    content:
      "I was impressed by their strategic approach to my legal dispute. They not only won the case but also ensured a smooth execution of the order. Highly recommended.",
    image: "./client/anshu.jpeg",
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
