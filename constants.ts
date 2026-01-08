import { Project, SocialLink, SectionId } from "./types";

export const NAV_LINKS = [
  { id: SectionId.Hero, label: "Home" },
  { id: SectionId.About, label: "About" },
  { id: SectionId.Skills, label: "Skills" },
  { id: SectionId.Projects, label: "Projects" },
  { id: SectionId.Contact, label: "Contact" },
];

export const SKILLS = [
  "Web Development",
  "Mobile Development",
  "Laravel",
  "Flutter",
  "REST API",
  "UI/UX Fundamentals",
  "HTML/CSS/JS",
  "React",
  "TypeScript",
  "Tailwind CSS",
];

export const PROJECTS: Project[] = [
  {
    name: "Basaraga Gym App",
    description:
      "Mobile application designed to support gym activities, workout tracking, and membership needs.",
    tags: ["Mobile App", "Flutter"],
    thumbnailStyle: "minimal_mockup",
    image: "/images/project/Basaraga.png",
  },
  {
    name: "Kejar Target Website",
    description:
      "Event organizer website built with React and TypeScript, focusing on performance and modern UI.",
    tags: ["Web Development", "React", "TypeScript"],
    thumbnailStyle: "minimal_mockup",
    image: "/images/project/kejartarget.png",
  },
  {
    name: "Pesantren Putri KH Basthomi Website",
    description:
      "Profile and information system website for an Islamic boarding school built using Laravel.",
    tags: ["Web Development", "Laravel", "Backend"],
    thumbnailStyle: "minimal_mockup",
    image: "/images/project/khbashtomi.png",
  },
  {
    name: "MoodMovie Bot",
    description:
      "AI-based movie recommendation system using sentiment analysis to detect user emotions.",
    tags: ["AI", "Python", "NLP"],
    thumbnailStyle: "minimal_mockup",
    image: "/images/project/moodmoovie.png",
  },
  {
    name: "UKIM UNESA Website Redesign",
    description:
      "Website UI/UX redesign project for UKIM UNESA focused on improving visual consistency and usability.",
    tags: ["UI/UX", "Website Redesign"],
    thumbnailStyle: "minimal_mockup",
    image: "/images/project/UkimUnesa.png",
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ahmad-diksa-sumadiono-411568243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/AhmadDiksa", icon: "github" },
  { platform: "Instagram", url: "https://www.instagram.com/ahmad.diksa/", icon: "instagram" },
];

export const generatePortfolioContext = () => {
  const projectsList = PROJECTS.map((project, index) => {
    const techStack =
      project.tags.length > 0 ? ` (${project.tags.join(", ")})` : "";
    return `${index + 1}. ${project.name}: ${project.description}${techStack}.`;
  }).join("\n");

  return `
You are an AI assistant for Ahmad Diksa Sumadiono's portfolio website.
Name: Ahmad Diksa Sumadiono
Role: Web & Mobile Developer
Bio: Hi, I’m Diksa — a web and mobile developer who loves turning ideas into clean, user-friendly digital experiences.
Highlights:
- Experienced in building modern web and mobile applications
- Strong knowledge in Laravel, Flutter, and API integration
- Focused on creating smooth UI and efficient system architecture

Skills: ${SKILLS.join(", ")}.

Projects:
${projectsList}

Contact Email: dionjombang300@gmail.com

Your goal is to answer visitor questions about Diksa professionally, concisely, and in a friendly tone.
If asked about something not in this context, politely suggest they contact Diksa directly via the email provided.
`;
};

export const PORTFOLIO_CONTEXT = generatePortfolioContext();
