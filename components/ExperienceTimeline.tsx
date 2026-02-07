import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-24">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="relative pl-10 border-l border-brand-border">
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-brand-primary rounded-full"></div>
          
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">{exp.period}</span>
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-neutral-500 font-medium">{exp.company}</p>
            </div>
            
            <ul className="space-y-4 pt-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-neutral-400 text-sm leading-relaxed flex gap-3">
                  <span className="text-brand-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6">
              {exp.technologies.map(tech => (
                <span key={tech} className="text-[10px] font-bold px-3 py-1 bg-neutral-900 text-neutral-500 rounded border border-brand-border uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;