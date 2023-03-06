type DevSkillCategory = "Front End" | "Back End" | "Language" | "CI/CD" | "Database" | "Testing";
type AudioSkillCategory = "Live" | "Playback" | "Management" | "Studio";

interface Skill {
  id: string; // URL encoded
  name: string;
  icon: string;
  category: "Audio" | "Dev" | "Personal"
  subcategory: AudioSkillCategory | DevSkillCategory
  notes?: string;
  relatedEducation: string[];
  group?: "primary" | "secondary"
};

type ProjectCategory = "Audio" | "Dev";

interface Project {
  id: string;
  category: ProjectCategory;
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
};

type ExperienceCategory = "Audio" | "Dev";

interface Experience {
  // a job instance
  id: string;
  category: ExperienceCategory;
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
};

interface Education {
  type: "degree" | "certificate";
  id: string;
  details: Degree | Certificate;
};

interface Degree {
  school: School;
  logo: string;
  degree: string;
  major?: string;
  minor?: string;
  startDate: Date;
  endDate: Date;
};

interface Certificate {
  issuer: string;
  issuerLogo: string;
  courseName: string;
  description: string;
  url?: string;
  logo?: string;
  endDate?: Date;
  courseLink?: string;
};

interface School {
  name: string;
  city: string;
  state: string;
  type: string;
  logo: string;
};

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.JPG';
declare module '*.PNG';
declare module '*.png';