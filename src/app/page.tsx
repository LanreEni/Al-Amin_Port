"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  Award,
  GraduationCap,
  User,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Send
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Resume data definitions
const personalInfo = {
  name: "Oseni Al‑Amin Olanrewaju",
  title: "Full-Stack Software Engineer & Researcher",
  location: "Lagos, Nigeria",
  phone: "0906 140 5246",
  email: "alaminoseni22@gmail.com",
  github: "https://github.com/LanreEni",
  linkedin: "https://linkedin.com/in/lanreeni",
  summary: "Highly accomplished Computer Science undergraduate (CGPA 5.00/5.00) specializing in full-stack software development, scalable system architectures, and applied machine learning. Proven capability in solo end-to-end production delivery, including a live multi-tenant SaaS application. Seeking opportunities to deliver immediate value to full-stack engineering workflows, database design, and production-grade software integration."
};

const education = {
  degree: "B.Sc. Computer Science (Honours) – Final Year",
  institution: "Summit University, Offa, Kwara State, Nigeria",
  duration: "Sep 2024 – Jun 2027 (Expected)",
  gpa: "5.00 / 5.00 (First Class Standing)",
  coursework: ["Backend Development", "Frontend Development", "Python Programming", "C++ Programming", "Acadopreneurship"]
};

const experience = [
  {
    role: "Academic Researcher & Software Engineer / Research Intern",
    company: "Innovation and Advanced Science Research Group (IASRG)",
    duration: "Sep 2024 – Present (Internship: July 2025 – Sep 2025)",
    points: [
      "Computer Vision Pipelines: Engineered custom Python-based computer vision inference pipelines utilizing OpenCV and Roboflow to automate agricultural quality control ecosystems.",
      "Core ML Systems: Architected and optimized an end-to-end Egg Detection & Counting framework alongside a custom feature-extraction Crack Classification model.",
      "Technical Research Grants: Collaborated directly with senior leadership to draft technical grant applications, project architecture mappings, and system documentation proposals.",
      "Data Infrastructure: Applied machine learning pipelines to clean, augment, and structure large, unstructured datasets for optimized production model evaluation."
    ]
  }
];

const projects = [
  {
    title: "LENI SMS",
    subtitle: "Multi-Tenant School Management Platform",
    technologies: ["Next.js", "PostgreSQL", "Supabase", "Paystack API"],
    category: "Full-Stack",
    description: "SaaS Architecture: Architected a full-scale multi-tenant SaaS application allowing seamless independent school onboarding; platform is live with a commercial paying client.",
    points: [
      "Designed relational schemas, role-based row-level security (RLS), and complex state management autonomously.",
      "Integrated interactive Computer-Based Testing (CBT), automated grading, reporting modules, and secure payment processing."
    ],
    link: "https://github.com/LanreEni"
  },
  {
    title: "Hayya",
    subtitle: "Logistics & Delivery Service Platform",
    technologies: ["Next.js", "PostgreSQL", "Supabase Realtime", "Tailwind CSS"],
    category: "Full-Stack",
    description: "Multi-user delivery platform supporting Customers, Riders, and Vendors with role-based authentication and separate dashboards.",
    points: [
      "Developed real-time status networks and persistent web dashboards supporting individual Customer, Rider, and Vendor authentication loops.",
      "Built low-latency background notifications and order-dispatch management structures to maintain consistent updates."
    ],
    link: "https://github.com/LanreEni"
  },
  {
    title: "AFCON 2025 Analytics Dashboard",
    subtitle: "Sports Intelligence Tool",
    technologies: ["Python", "Pandas", "Plotly", "Dash"],
    category: "AI & Data Science",
    description: "Standalone interactive sports intelligence dashboard parsing raw competition datasets to deliver performance metrics and standings charts.",
    points: [
      "Engineered data workflows including cleaning, transformation, and multi-metric aggregation.",
      "Designed the dashboard as a live product for exploration, not just a static report."
    ],
    link: "https://github.com/LanreEni"
  },
  {
    title: "Egg Detection & Counting Model",
    subtitle: "Computer Vision & Agriculture Automation",
    technologies: ["Python", "Roboflow", "OpenCV", "Machine Learning"],
    category: "AI & Data Science",
    description: "Trained object-detection models on custom datasets to automate agricultural quality control and sorting.",
    points: [
      "Implemented data augmentation, preprocessing, and evaluation using precision/recall metrics.",
      "Integrated the model into a Python-based inference pipeline for practical testing."
    ],
    link: "https://github.com/LanreEni"
  },
  {
    title: "C++ Exam Scheduling System",
    subtitle: "Examination Allocation Tool",
    technologies: ["C++", "Qt", "WebAssembly (WASM)"],
    category: "Systems",
    description: "Desktop-based system to schedule exams for courses across rooms and time slots, avoiding invigilator and capacity clashes.",
    points: [
      "Designed UI with Qt and integrated logic using C++ backend; planning deployment via WebAssembly."
    ],
    link: "https://github.com/LanreEni"
  }
];

const skillsMatrix = {
  "Languages & Backend": [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "C++", level: 85 },
    { name: "SQL (PostgreSQL)", level: 90 },
    { name: "RESTful Web APIs", level: 90 },
    { name: "Next.js / Node.js", level: 92 }
  ],
  "Infrastructure & Cloud": [
    { name: "Supabase BaaS", level: 90 },
    { name: "Relational DB Design", level: 92 },
    { name: "Row-Level Security (RLS)", level: 88 },
    { name: "Git Version Control", level: 90 }
  ],
  "AI & Data Science": [
    { name: "OpenCV", level: 85 },
    { name: "Roboflow / CV Pipelines", level: 88 },
    { name: "Pandas & NumPy", level: 90 },
    { name: "Plotly Analytics", level: 85 }
  ],
  "Creative & Soft Skills": [
    { name: "Figma UI/UX Mapping", level: 85 },
    { name: "Systems Architecture", level: 88 },
    { name: "Technical Documentation", level: 90 },
    { name: "Agile Workflows", level: 85 },
    { name: "Languages (English/Arabic)", level: 95 }
  ]
};

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("All");
  const [activeSkillCategory, setActiveSkillCategory] = useState("Languages & Backend");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const filteredProjects = projectFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("Success! Thank you for reaching out.");
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="relative min-h-screen text-slate-800 flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center px-6 md:px-12 lg:px-24 py-16 overflow-hidden">
        <div className="max-w-4xl w-full text-center md:text-left z-10 flex flex-col justify-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold text-teal-700 mb-6 font-outfit"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            Final-year Computer Science student at Summit University with a perfect cumulative GPA of <span className="text-teal-600 font-bold">5.00/5.00</span>. Specializing in full-stack software development, robust data architectures, and applied machine learning models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <a 
              href="#projects" 
              className="group px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition-all duration-200 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold rounded-xl shadow-sm transition-all duration-200 flex items-center gap-2"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT & EDUCATION SECTION */}
      <section id="about" className="w-full max-w-6xl px-6 py-24 border-t border-slate-200/60 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <span className="text-teal-600 text-sm font-bold tracking-wider uppercase block mb-3">01. Overview</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">About Me</h2>
              <div className="w-12 h-1 bg-teal-600 rounded-full" />
              
              <div className="mt-8 space-y-4 text-slate-600">
                <p>
                  I construct reliable web applications and full-stack system architectures, combining responsive user interfaces with modular backend services and machine learning models.
                </p>
                <p>
                  My projects reflect end-to-end execution—from database engineering and secure authentication to model pipeline training and production deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            
            {/* Education Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="border-l-2 border-teal-500/30 pl-6 ml-3 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{education.degree}</h4>
                  <p className="text-slate-600 text-sm">{education.institution}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">
                      <Award className="w-4 h-4" /> CGPA: {education.gpa}
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {education.duration}
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-slate-700 mb-2">Core Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/40">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Affiliations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" /> Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Software Development Certification</h4>
                      <p className="text-xs text-slate-500">Power Learn Project Africa (2025)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Advanced Data Analysis Training</h4>
                      <p className="text-xs text-slate-500">CWW Tech Africa (2022)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-teal-600" /> Affiliations
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Member</h4>
                      <p className="text-xs text-slate-500">Journey Down the Streets (JDTS)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Student Member</h4>
                      <p className="text-xs text-slate-500">Nigeria Computer Society (NCS)</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="w-full max-w-6xl px-6 py-24 border-t border-slate-200/60">
        <div className="max-w-3xl mb-16">
          <span className="text-teal-600 text-sm font-bold tracking-wider uppercase block mb-3">02. Experience</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-12 h-1 bg-teal-600 rounded-full" />
        </div>

        <div className="relative pl-6 md:pl-12 border-l border-slate-200 space-y-12 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-teal-600 flex items-center justify-center" />

              <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="inline-block px-3 py-1 rounded bg-teal-50 text-teal-800 text-xs font-semibold mb-4 border border-teal-100">
                  {exp.duration}
                </span>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                <h4 className="text-teal-700 font-semibold mb-6 text-sm">{exp.company}</h4>

                <ul className="space-y-3">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0 mr-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="w-full max-w-6xl px-6 py-24 border-t border-slate-200/60">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-teal-600 text-sm font-bold tracking-wider uppercase block mb-3">03. Portfolio</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Selected Projects</h2>
            <div className="w-12 h-1 bg-teal-600 rounded-full" />
          </div>

          {/* Project filters */}
          <div className="flex flex-wrap gap-2">
            {["All", "Full-Stack", "AI & Data Science", "Systems"].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                  projectFilter === cat 
                    ? "bg-teal-600 text-white border-teal-600 shadow-sm" 
                    : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid - REDUCED CARDS: p-6 padding, smaller text, 1 bullet point */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.article
                layout
                key={proj.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group relative p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between tilt"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200/40">
                      {proj.category}
                    </span>
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-slate-50 text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-colors border border-slate-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mb-4 font-light leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mb-4">
                    {proj.points.slice(0, 1).map((pt, index) => (
                      <div key={index} className="flex items-start text-xs text-slate-500">
                        <ChevronRight className="w-3.5 h-3.5 text-teal-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                  {proj.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. SKILLS & MATRICES SECTION */}
      <section id="skills" className="w-full max-w-6xl px-6 py-24 border-t border-slate-200/60">
        <div className="max-w-3xl mb-16">
          <span className="text-teal-600 text-sm font-bold tracking-wider uppercase block mb-3">04. Capabilities</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Technical Stack</h2>
          <div className="w-12 h-1 bg-teal-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Skill category tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {Object.keys(skillsMatrix).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillCategory(cat)}
                className={`w-full text-left px-5 py-4 rounded-xl text-sm font-semibold border transition-all duration-200 flex items-center justify-between ${
                  activeSkillCategory === cat
                    ? "bg-teal-50/60 border-teal-500/20 text-teal-700 shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>{cat}</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                  activeSkillCategory === cat ? "translate-x-1 text-teal-600" : "text-slate-400"
                }`} />
              </button>
            ))}
          </div>

          {/* Active category details */}
          <div className="lg:col-span-8 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm min-h-[300px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
              {activeSkillCategory}
            </h3>
            
            <div className="space-y-6">
              {skillsMatrix[activeSkillCategory as keyof typeof skillsMatrix].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-slate-700">{skill.name}</span>
                    <span className="text-teal-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="w-full max-w-6xl px-6 py-24 border-t border-slate-200/60 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <span className="text-teal-600 text-sm font-bold tracking-wider uppercase block mb-3">05. Communication</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Get In Touch</h2>
            <div className="w-12 h-1 bg-teal-600 rounded-full mb-8" />
            
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              I am open to discuss full-stack software development projects, technical integrations, or interesting research collaborations. Drop a message or find me on socials!
            </p>

            <div className="space-y-4">
              <button 
                onClick={copyEmailToClipboard}
                className="w-full p-4 rounded-xl bg-white border border-slate-200/80 hover:border-teal-500/30 transition-all flex items-center justify-between text-slate-700 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-semibold">{personalInfo.email}</span>
                </div>
                <span className="text-xs text-teal-700 px-2.5 py-1 rounded bg-teal-50 border border-teal-200/40">
                  {copiedEmail ? "Copied!" : "Copy"}
                </span>
              </button>

              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="w-full p-4 rounded-xl bg-white border border-slate-200/80 hover:border-teal-500/30 transition-all flex items-center gap-3 text-slate-700 shadow-sm"
              >
                <Phone className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-semibold">{personalInfo.phone}</span>
              </a>

              <div className="flex gap-4 pt-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-500/30 transition-all shadow-sm"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-500/30 transition-all shadow-sm"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-colors"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-colors resize-none"
                  placeholder="Your Message..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus && (
                <p className="text-center text-sm font-semibold text-emerald-600 mt-4">
                  {submitStatus}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
