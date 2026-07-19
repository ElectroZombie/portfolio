export interface Education {
  degree: string;
  institution: string;
  date: string;
}

export interface WorkExperience {
  position: string;
  company: string;
  period: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    summary: string;
  };
  contact: ContactInfo;
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skill[];
  projects: Project[];
  knowledges: String[];
  softSkills: String[];
  curriculum: string[];
  languages: string[];
}
