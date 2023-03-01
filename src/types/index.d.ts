interface SkillData {
  id: string; // URL encoded
  name: string;
  icon: string;
  category: "Audio" | "Front End" | "Back End" | "Language" | "Development" | "Database" | "Testing"
  notes?: string;
  relatedEducation: string[];
  group?: "primary" | "secondary"
}

interface Skill extends SkillData {
  getRelatedEducation(): Education[];
}

interface ProjectData {
  id: string;
  title: string;
  url?: string;
  description: string;
  date: Date;
  skills: string[];
  experienceId?: string | null;
  images: string[];
}

interface ExperienceData {
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
  details: DegreeData | CertificateData;
}

interface DegreeData {
  school: School;
  logo: string;
  degree: string;
  major?: string;
  minor?: string;
  startDate: Date;
  endDate: Date;
}

interface CertificateData {
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