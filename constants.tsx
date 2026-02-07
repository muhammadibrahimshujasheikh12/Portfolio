import React from 'react';
import { Project, Experience, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'DevVortex-Co (Official Agency)',
    description: 'My professional software agency website. We build high-performance ecosystems for modern businesses.',
    longDescription: 'DevVortex-Co is my software development agency. We specialize in digital transformation, building custom SaaS solutions, and high-end web architectures for global clients.',
    tags: ['Agency', 'Software Solutions', 'Next.js', 'Enterprise'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    featured: true,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: 'https://devvortex-co.netlify.app'
  },
  {
    id: 'p2',
    title: 'Aurum & Olive',
    description: 'A luxury lifestyle and wellness brand interface designed for high-end retail experiences and sophisticated aesthetics.',
    longDescription: 'A premium design-focused project highlighting UI/UX excellence in the luxury retail sector, emphasizing minimalism and high-conversion layouts.',
    tags: ['Luxury Retail', 'UI/UX', 'Branding', 'Premium'],
    imageUrl: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?auto=format&fit=crop&q=80&w=2000',
    featured: true,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: '#'
  },
  {
    id: 'p3',
    title: 'TechWave Digital Hub',
    description: 'A premium SaaS platform for tech community engagement, featuring real-time trend tracking and social integration.',
    longDescription: 'A high-performance community platform built to handle high-traffic interactions with a focus on modern developer experience.',
    tags: ['SaaS', 'React', 'Firebase', 'Community'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000',
    featured: true,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: '#'
  },
  {
    id: 'p4',
    title: 'SkyCast Pro Weather',
    description: 'Executive-level weather dashboard with real-time data visualization and global satellite tracking.',
    longDescription: 'Utilizing OpenWeather APIs and advanced charting libraries to provide a hyper-local and global weather experience with predictive modeling.',
    tags: ['API Integration', 'Data Viz', 'Glassmorphism'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=2000',
    featured: true,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: '#'
  },
  {
    id: 'p5',
    title: 'Iqra Path',
    description: 'A comprehensive digital roadmap for structured academic and spiritual learning paths.',
    longDescription: 'A sophisticated learning management platform focused on providing structured curriculum and tracking progress for educational excellence.',
    tags: ['Education', 'Learning Path', 'Next.js'],
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000',
    featured: false,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: '#'
  },
  {
    id: 'p6',
    title: 'BakingForCraving',
    description: 'A premium, high-conversion E-commerce platform designed for artisanal bakeries with seamless checkout.',
    longDescription: 'Combines digital marketing strategy with high-end frontend design to create a mouth-watering user experience that drives sales.',
    tags: ['E-commerce', 'MERN Stack', 'Branding'],
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=2000',
    featured: false,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: '#'
  },
  {
    id: 'p7',
    title: 'LingoFlow AI',
    description: 'An intelligent language translation and flow analysis tool leveraging modern AI models.',
    longDescription: 'Utilizes ACCP-AI specialized training to implement intelligent natural language processing workflows.',
    tags: ['Python', 'AI/ML', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
    featured: false,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: '#'
  },
  {
    id: 'p8',
    title: 'Hidayah Hub',
    description: 'A community-centric educational repository focused on structured dissemination of knowledge.',
    longDescription: 'A full-stack solution providing a centralized hub for learning materials with a focus on accessibility.',
    tags: ['PHP', 'Laravel', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000',
    featured: false,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'agency',
    company: 'DevVortex-Co',
    role: 'Founder & Lead Developer',
    period: '2025 - Present',
    description: [
      'Founded and scaled a full-service software agency delivering enterprise web solutions.',
      'Lead architectural design for high-performance React and MERN stack applications.',
      'Consulting for global clients on digital transformation and AI integration.',
      'Managing multi-disciplinary teams across development, design, and marketing.'
    ],
    technologies: ['Agency Leadership', 'Business Strategy', 'Full-Stack', 'Next.js'],
  },
  {
    id: 'scrimba',
    company: 'Scrimba',
    role: 'Scrimba Ambassador & Student',
    period: '2025 - Present',
    description: [
      'Mastering the Full-Stack Developer path through interactive, project-based learning.',
      'Official Scrimba Ambassador focused on referring students to the platform and sharing my learning journey.',
      'Promoting the benefits of Scrimba’s unique code-execution video methodology.',
      'Regularly documenting progress and sharing referral insights within the tech community.'
    ],
    technologies: ['React', 'JavaScript', 'Full-Stack Engineering', 'Referral Strategy'],
  },
  {
    id: 'aptech',
    company: 'Aptech Learning',
    role: 'Full-Stack Developer (ACCP-AI Specialist)',
    period: '2024 - 2026',
    description: [
      'Completing rigorous academic focus on Full-Stack Web Development: MERN, PHP, Laravel, and .NET Core.',
      'Deep dive into Database Engineering with MySQL, MongoDB, and SQL Server.',
      'Researching Python-based AI foundations, including Machine Learning and NLP basics.',
      'Awarded for excellence in advanced software architecture and data structures.'
    ],
    technologies: ['ACCP-AI', 'MERN Stack', 'Python AI', 'SQL Server'],
  },
  {
    id: 'marketing',
    company: 'Extreme Commerce',
    role: 'Digital Marketing Specialist',
    period: '2023 - 2023',
    description: [
      'Completed professional certification in Digital Marketing and E-commerce growth.',
      'Mastered Social Media Marketing (SMM) and strategic online branding.',
      'Implemented high-conversion funnels and digital growth strategies for brands.',
      'Learned content strategy and Facebook/Instagram advertising fundamentals.'
    ],
    technologies: ['SMM', 'Brand Strategy', 'Ads', 'E-commerce'],
  },
  {
    id: 'freelance',
    company: 'Upwork & Fiverr',
    role: 'Expert Freelance Developer & Designer',
    period: '2022 - Present',
    description: [
      'Providing web development, full-stack solutions, and digital services to clients worldwide.',
      'Maintaining a top-tier reputation for delivering pixel-perfect UI and scalable backends.',
      'Specializing in custom API integrations and rapid prototyping for startups.',
      'Integrating graphic design and video editing skills into full digital branding packages.'
    ],
    technologies: ['React', 'Freelancing', 'UI/UX', 'Digital Services'],
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'ACCP-AI Specialization (6 Semesters Complete)',
    issuer: 'Aptech Learning',
    date: '2026 (Expected)',
    description: 'Advanced curriculum focusing on MERN Stack, PHP/Laravel, .NET Core, and Python-based AI foundations. Recognized for architectural excellence.',
    status: 'completed'
  },
  {
    id: 'c2',
    title: 'Professional Digital Marketing & E-commerce',
    issuer: 'Extreme Commerce',
    date: '2023',
    description: 'Certified expertise in Social Media Marketing (SMM), branding strategy, and high-conversion e-commerce funnels.',
    status: 'completed'
  },
  {
    id: 'c3',
    title: 'Full-Stack Web Development Mastery',
    issuer: 'Scrimba',
    date: 'Ongoing',
    description: 'Mastering modern engineering patterns, React performance, and advanced JavaScript through interactive, high-fidelity curriculum.',
    status: 'in-progress'
  },
  {
    id: 'c4',
    title: 'Advanced AI Systems Engineering',
    issuer: 'Industry Standard Placeholder',
    date: 'Upcoming',
    description: 'Future specialization planned in large language model (LLM) fine-tuning and advanced neural network architectures.',
    status: 'upcoming'
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'English (Professional)', category: 'languages' },
  { name: 'Urdu (Native)', category: 'languages' },
  { name: 'Arabic (Intermediate)', category: 'languages' },
  { name: 'Latvian (Basic)', category: 'languages' },

  // Web Development
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Responsive Web Design', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MERN Stack', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'Laravel (Basics)', category: 'backend' },
  { name: '.NET Core / C# (Basics)', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'Authentication (JWT)', category: 'backend' },

  // Databases
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'SQL Server', category: 'database' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'npm', category: 'tools' },
  { name: 'API Integration', category: 'tools' },
  { name: 'Deployment Concepts', category: 'tools' },

  // AI & Programming
  { name: 'Python Programming', category: 'ai' },
  { name: 'Data Science', category: 'ai' },
  { name: 'Machine Learning', category: 'ai' },
  { name: 'Deep Learning', category: 'ai' },
  { name: 'NLP Basics', category: 'ai' },
  { name: 'AI Model Integration', category: 'ai' },

  // Digital Marketing
  { name: 'Social Media Marketing', category: 'marketing' },
  { name: 'Branding', category: 'marketing' },
  { name: 'Content Strategy', category: 'marketing' },
  { name: 'Meta Ads (Basics)', category: 'marketing' },
  { name: 'E-commerce Fundamentals', category: 'marketing' },
  { name: 'Digital Growth Strategies', category: 'marketing' },

  // Creative Skills
  { name: 'Graphic Design', category: 'creative' },
  { name: 'Video Editing', category: 'creative' },
  { name: 'Short-form (Reels/Shorts)', category: 'creative' },
  { name: 'Social Post Design', category: 'creative' },
  { name: 'Motion Visual Effects', category: 'creative' },
  { name: 'UI-focused Graphics', category: 'creative' },

  // Professional Mindset
  { name: 'Self-taught Learner', category: 'personal' },
  { name: 'Problem-Solving', category: 'personal' },
  { name: 'Project-Based Learning', category: 'personal' },
  { name: 'Time Management', category: 'personal' },
  { name: 'Growth Mindset', category: 'personal' },
  { name: 'Continuous Learner', category: 'personal' },
];

export const Icons = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
  ),
  Youtube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  ),
  Award: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  Bot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  ),
  Fiverr: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 13h-2.1c-.2 0-.3.1-.3.3v2.4c0 .2.1.3.3.3h2.1c.2 0 .3-.1.3-.3v-2.4c0-.2-.1-.3-.3-.3z"/><path d="M11 13h-2.1c-.2 0-.3.1-.3.3v2.4c0 .2.1.3.3.3h2.1c.2 0 .3-.1.3-.3v-2.4c0-.2-.1-.3-.3-.3z"/><path d="M2.5 13h2.1c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.1c-.2 0-.3-.1-.3-.3v-2.4c0-.2.1-.3.3-.3z"/><path d="M11 6h-2.1c-.2 0-.3.1-.3.3v2.4c0 .2.1.3.3.3h2.1c.2 0 .3-.1.3-.3v-2.4c0-.2-.1-.3-.3-.3z"/><path d="M2.5 6h2.1c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.1c-.2 0-.3-.1-.3-.3v-2.4c0-.2.1-.3.3-.3z"/></svg>
  ),
  Upwork: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 6c-2.5 0-4.5 2-4.5 4.5v3.5c0 1.1-.9 2-2 2s-2-.9-2-2v-3.5c0-1.1-.9-2-2-2S6 9.4 6 10.5v3.5c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5v-3.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v3.5c0 .3.2.5.5.5s.5-.2.5-.5v-3.5C21 8 19.9 6 18.5 6z"/></svg>
  ),
  Scrimba: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 0 1 8 0"/><path d="M12 12v4"/></svg>
  ),
  FileText: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
  )
};