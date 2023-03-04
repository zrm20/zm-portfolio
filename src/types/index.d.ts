type DevSkillCategory = "Front End" | "Back End" | "Language" | "CI/CD" | "Database" | "Testing";
type AudioSkillCategory = "Audio";

interface Skill {
  id: string; // URL encoded
  name: string;
  icon: string;
  category: "Audio" | "Dev" | "Personal"
  subcategory: AudioSkillCategory | DevSkillCategory
  notes?: string;
  relatedEducation: string[];
  group?: "primary" | "secondary"
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date?: Date;
  skills: string[];
  experienceId?: string | null;
  logo?: string;
  images: string[];
  website?: string;
  repo?: string;
  appStore?: string;
  testFlight?: string;
  playStore?: string;
}

interface Experience {
  // a job instance
  id: string;
  company: string;
  titles: string[];
  startDate: Date;
  endDate?: Date;
  description: string;
  logo: string;
  url?: string;
  images: string[];
  skills: string[];
  projects: string[];
}

interface Education {
  type: "degree" | "certificate";
  id: string;
  details: Degree | Certificate;
}

interface Degree {
  school: School;
  logo: string;
  degree: string;
  major?: string;
  minor?: string;
  startDate: Date;
  endDate: Date;
}

interface Certificate {
  issuer: string;
  courseName: string;
  description: string;
  url?: string;
  logo?: string;
  endDate?: Date;
}

interface School {
  name: string;
  city: string;
  state: string;
  type: string;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.JPG';
declare module '*.PNG';
declare module '*.png';