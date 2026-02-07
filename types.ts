export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'marketing' | 'creative' | 'tools' | 'personal' | 'database' | 'languages';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}