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
        url: "/projects",
        icon: AiOutlineProject,
    },
    {
        id: "2",
        title: "About",
        url: "/about",
        icon: AiOutlineUser,
    },
    {
        id: "3",
        title: "Contact me",
        url: "/contact",
        icon: AiOutlineMail,
    },
];
export const projectsData = [
    {
      title: "Shadow Play",
      description: "A Video Streaming Web App which allows users to watch and share videos effortlessly. It brings a variety of content to your fingertips.",
      image: "/images/shadow-play.png",
      tags: ["react", "mongodb", "tailwind"],
      github: "https://github.com/yourusername/shadow-play",
      hosting: "https://shadow-play.vercel.app",
    },
    {
      title: "Blog App",
      description: "Write blogs on various topics and start your journey as an impactful content creator, exploring your passions and sharing knowledge with the world.",
      image: "/images/blog-app.png",
      tags: ["react", "appwrite", "tailwind"],
      github: "https://github.com/yourusername/blog-app",
      hosting: "https://blog-app.vercel.app",
    },
    {
      title: "ChitChat",
      description: "A ChatApp which includes social login, user search and addition, text messaging with emojis, user blocking/unblocking, and real-time messaging with image support.",
      image: "/images/chitchat.png",
      tags: ["react", "firebase", "tailwind"],
      github: "https://github.com/yourusername/chitchat",
      hosting: "https://chitchat.vercel.app",
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