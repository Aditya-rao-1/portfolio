import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineMail, AiOutlineCalendar } from "react-icons/ai";

export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "#home",
        icon: AiOutlineHome, // Pass reference, not JSX
    },
    {
        id: "1",
      title: "About",
      url: "#about",
        icon: AiOutlineUser,
    },
    {
        id: "2",
      title: "Experience",
      url: "#experience",
        icon: AiOutlineCalendar,
    },
    {
        id: "3",
      title: "Projects",
      url: "#projects",
      icon: AiOutlineProject,
    },
    {
      id: "4",
        title: "Contact",
        url: "#contact",
        icon: AiOutlineMail,
    },
];

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    company: "GEMA Service LTD",
    role: "Full-Stack Developer",
    location: "Product Development",
    date: "2026 - Ongoing",
    bullets: [
      "Designed and developed a full-stack teacher module for kidrove.com, enhancing platform functionality and user experience.",
      "Built Teaching Event pages and Admin dashboards, improving platform functionality and user experience.",
    ],
  },
  {
    company: "Sasken Technologies Ltd.",
    role: "Intern",
    location: "Automation / Full-Stack",
    date: "June 2025 - July 2025",
    bullets: [
      "Created a full-stack platform using Ollama and Playwright to automate web testing from natural language input.",
    ],
  },
  {
    company: "MSIS MAHE, Manipal",
    role: "Research Intern",
    location: "Research / AI Systems",
    date: "Dec 2024 - May 2025",
    bullets: [
      "Built an AI document pipeline with AWS Textract, NLP, and Pinecone.",
      "Designed a scalable RAG system using Amazon Titan for real-time querying.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  hosting?: string;
  category: string;
};

export const projectsData: Project[] = [
   {
    title: "Kidrove Platform",
    description: "Kidrove helps UAE parents discover trusted kids’ activities and family experiences while connecting providers with the right audience.",
    image: "kidrove.png",
    tags: ["NextJs", "node", "express", "mongodb", "jwt"],
    github: "",
    hosting: "https://kidrove.com",
    category: "FULL-STACK"
  },
  {
    title: "MERN Food Ordering App",
    description: "A full-featured food ordering platform with real-time order tracking, cart management, and admin dashboard—built using the MERN stack.",
    image: "food.png",
    tags: ["react", "node", "express", "mongodb", "jwt"],
    github: "https://github.com/Aditya-rao-1/foodorder_MERN_STACK",
    hosting: "https://foodorder-mern-stack.vercel.app",
    category: "FULL-STACK"
  },
  {
    title: "AI Document Processor",
    description: "An AI-powered system for PDF document parsing, embedding, and question-answering with multi-turn memory using AWS Textract, Pinecone, and Titan LLM.",
    image: "hero.png",
    tags: ["python", "aws", "nlp", "pinecone", "rag"],
    github: "https://github.com/Aditya-rao-1/Intelligent_document_processing",
    hosting: "",
    category: "AI/ML"
  },
  {
    title: "Automated Web-Testing using NLP",
    description: "Built a full-stack platform using Ollama (TinyLlama) to convert natural language into JSON-based tests, with Playwright automation and a Flask/React dashboard for test history and screenshots.",
    image: "webtesting.png",
    tags: ["react", "flask", "NLP", "LLM"],
    github: "https://github.com/Aditya-rao-1/Automated-Web-Testing-with-NLP",
    hosting: "",
    category: "AUTOMATION"
  },
  {
    title: "Secure Data Handling",
    description: "A secure full-stack app to encrypt user data, send signed emails, and verify digital signatures using AES, HMAC, and Bcrypt hashing.",
    image: "secure.png",
    tags: ["react", "flask", "tailwind"],
    github: "https://github.com/Aditya-rao-1/secure_data_handling",
    hosting: "https://secure-data-handling.onrender.com",
    category: "SECURITY"
  },
  
  ];

export const skill = [
    { id: "0", title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", width: 70, height: 70 },
    { id: "1", title: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", width: 70, height: 70 },
    { id: "2", title: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", width: 70, height: 70 },
    { id: "3", title: "Tailwind CSS", icon: "/tailwind.svg", width: 70, height: 70 },
    { id: "4", title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", width: 70, height: 70 },
    { id: "5", title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", width: 70, height: 70 },
    { id: "6", title: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", width: 70, height: 70 },
    { id: "7", title: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", width: 70, height: 70 },
    { id: "8", title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", width: 70, height: 70 },
    { id: "9", title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", width: 70, height: 70 },
    { id: "10", title: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", width: 70, height: 70 },
    { id: "11", title: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", width: 70, height: 70 },
    { id: "12", title: "AWS", icon: "/aws.svg", width: 70, height: 70 },
    { id: "13", title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", width: 70, height: 70 },
    { id: "14", title: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", width: 70, height: 70 },
    { id: "15", title: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", width: 70, height: 70 },
    { id: "16", title: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", width: 70, height: 70 },
    { id: "17", title: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", width: 70, height: 70 },
    { id: "18", title: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", width: 70, height: 70 },
    
];  

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



export const socialMedia = [
  {
    id: 1,
    icon: FaGithub,
    url: "https://github.com/Aditya-rao-1",
  },
  {
    id: 2,
    icon: SiGmail,
    copy: true,
    email: "kallamone05@gmail.com",
  },
  {
    id: 3,
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/aditya-rao-7044a3317/",
  },
];

