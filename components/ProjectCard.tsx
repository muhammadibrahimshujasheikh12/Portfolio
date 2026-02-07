import React from 'react';
import { Project } from '../types';
import { Icons } from '../constants';

interface ProjectCardProps { project: Project; }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group card-premium rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all"></div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-10 flex-1">
          {project.description}
        </p>

        <div className="pt-6 border-t border-brand-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={project.githubUrl} target="_blank" className="text-neutral-600 hover:text-white transition-colors">
              <Icons.Github />
            </a>
          </div>
          <a 
            href={project.demoUrl} 
            target="_blank" 
            className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:text-brand-primary transition-colors"
          >
            Live Demo
            <Icons.ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;