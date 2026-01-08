export interface Project {
  name: string;
  description: string;
  tags: string[];
  thumbnailStyle: "minimal_mockup" | "clean_ui_preview";
  image?: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export enum SectionId {
  Hero = "hero",
  About = "about",
  Skills = "skills",
  Projects = "projects",
  Contact = "contact",
}
