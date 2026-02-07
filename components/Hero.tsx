
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Path to CV file exactly as requested
  const cvUrl = "/Muhammadibrahim.pdf"; 

  const roles = [
    "Full-Stack Developer",
    "React.js Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Scrimba Ambassador",
    "Scrimba Student",
    "Freelance Web Developer",
    "Freelancer on Upwork",
    "Freelancer on Fiverr",
    "Digital Marketer",
    "Graphic Designer",
    "Video Editor",
    "Full-Stack UI Developer",
    "Creative Technologist",
    "AI Foundations Learner",
    "AI-Integrated Web Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden w-full px-6">
      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-surface/50 text-[11px] font-semibold tracking-wide text-brand-primary mb-10 animate-premium">
          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
          OPEN FOR NEW PROJECTS & COLLABORATIONS
        </div>

        <div className="min-h-[160px] md:min-h-[200px] lg:min-h-[250px] flex flex-col items-center justify-center">
          <h1 className="font-display font-bold text-[clamp(2.5rem,10vw,7rem)] text-white mb-4 tracking-tight leading-[1.1] animate-premium">
            <span className="accent-gradient inline-block min-h-[1.2em]">
              {text}
              <span className="inline-block w-[4px] h-[0.8em] bg-brand-primary ml-2 animate-pulse align-middle"></span>
            </span>
          </h1>
        </div>
        
        <p className="max-w-xl text-lg md:text-xl text-neutral-500 font-medium mb-12 leading-relaxed animate-premium">
          I'm <span className="text-white">Muhammad Ibrahim</span>. Founder of <span className="text-brand-primary font-bold">DevVortex-Co</span>, building high-performance full-stack systems and AI solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg animate-premium">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
            className="w-full py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-brand-primary hover:text-white transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Explore Projects
          </button>
          
          <a 
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 border border-brand-border text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            View CV
            <Icons.FileText />
          </a>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
            className="w-full py-4 border border-brand-border text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all hidden xs:block"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-700 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
};

export default Hero;
