import React from 'react';
import { CERTIFICATIONS, Icons } from '../constants';

const CertificationTimeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-16">
      {CERTIFICATIONS.map((cert) => (
        <div key={cert.id} className="relative pl-10 border-l border-brand-border group">
          <div className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full transition-all duration-300 ${
            cert.status === 'completed' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 
            cert.status === 'in-progress' ? 'bg-brand-primary animate-pulse' : 'bg-neutral-800'
          }`}></div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                cert.status === 'completed' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 
                cert.status === 'in-progress' ? 'text-brand-primary border-brand-primary/20 bg-brand-primary/5' : 
                'text-neutral-600 border-neutral-800'
              }`}>
                {cert.status === 'completed' ? 'Verified' : cert.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
              </span>
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{cert.date}</span>
            </div>
            
            <div className="flex items-start gap-4">
              <div className={`mt-1 text-neutral-500 group-hover:text-brand-primary transition-colors`}>
                <Icons.Award />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{cert.title}</h3>
                <p className="text-neutral-500 font-medium mt-1">{cert.issuer}</p>
              </div>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed pl-9">
              {cert.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationTimeline;