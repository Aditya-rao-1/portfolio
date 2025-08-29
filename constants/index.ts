import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineMail } from "react-icons/ai";

export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/",
        icon: AiOutlineHome, // Pass reference, not JSX
    },
    {
        id: "1",
        title: "Projects",
        url: "#projects",
        icon: AiOutlineProject,
    },
    {
        id: "2",
        title: "About",
        url: "#about",
        icon: AiOutlineUser,
    },
    {
        id: "3",
        title: "Contact me",
        url: "#contact",
        icon: AiOutlineMail,
    },
];
export const projectsData = [
  {
    title: "MERN Food Ordering App",
    description: "A full-featured food ordering platform with real-time order tracking, cart management, and admin dashboard—built using the MERN stack.",
    image: "food.png",
    tags: ["react", "node", "express", "mongodb", "jwt"],
    github: "https://github.com/Aditya-rao-1/foodorder_MERN_STACK",
    hosting: "https://foodorder-mern-stack.vercel.app", 
  },
  {
    title: "AI Document Processor",
    description: "An AI-powered system for PDF document parsing, embedding, and question-answering with multi-turn memory using AWS Textract, Pinecone, and Titan LLM.",
    image: "hero.png",
    tags: ["python", "aws", "nlp", "pinecone", "rag"],
    github: "https://github.com/Aditya-rao-1/Intelligent_document_processing",
    hosting: "http://localhost:8501", // Or wherever the streamlit/app runs
  },
  {
    title: "Secure Data Handling",
    description: "A secure full-stack app to encrypt user data, send signed emails, and verify digital signatures using AES, HMAC, and Bcrypt hashing.",
    image: "secure.png",
    tags: ["react", "flask", "tailwind", "crypto"],
    github: "https://github.com/Aditya-rao-1/secure_data_handling",
    hosting: "https://secure-data-handling.onrender.com",
  }
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
    email: "raoaditya840@gmail.com",
  },
  {
    id: 3,
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/aditya-rao-7044a3317/",
  },
];

