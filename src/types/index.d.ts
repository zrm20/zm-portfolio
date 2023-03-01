interface Skill {
  id: string; // URL encoded
  name: string;
  icon: string;
  category: "Audio" | "Front End" | "Back End" | "Language" | "Development" | "Database" | "Testing"
  notes?: string;
  relatedEducation: string[];
  group?: "primary" | "secondary"
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  url?: string;
  description: string;
  date?: Date;
  skills: string[];
  experienceId?: string | null;
  images: string[];
  repo?: string;
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