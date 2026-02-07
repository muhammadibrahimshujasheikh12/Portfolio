import React from 'react';
import { Icons } from '../constants';

const AboutMe: React.FC = () => {
  const scrimbaUrl = "https://scrimba.com/?via=u432d432";
  
  // User can replace this URL with their own hosted profile picture
  const profilePicUrl = "/ibrahim.png";

  return (
    <section id="about" className="py-24 md:py-40 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="text-brand-primary text-[10px] font-bold tracking-widest uppercase">Professional Founder</span>
            </div>
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Scrimba Ambassador</span>
            </div>
          </div>
          
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-[1.1]">
            About Me. <br/>
            <span className="text-neutral-500 text-4xl md:text-5xl">Engineering Value.</span>
          </h2>

          {/* Profile Spotlight (Mobile and Inline) */}
          <div className="lg:hidden w-full mb-10">
            <div className="relative group mx-auto max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-emerald-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-brand-border bg-brand-surface">
                <img 
                  src={profilePicUrl} 
                  alt="Muhammad Ibrahim" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 text-neutral-400 text-lg leading-relaxed max-w-3xl">
            <p>
              My name is <span className="text-white font-medium">Muhammad Ibrahim</span>. I am a <span className="text-white font-medium">Full-Stack Developer</span> and Founder of <span className="text-brand-primary font-bold">DevVortex-Co</span>. I have a strong foundation in modern web technologies, creative design, and digital growth. I have completed <span className="text-white font-medium">all 6 semesters of ACCP AI</span> at Aptech, where I mastered full-stack development using the MERN stack, PHP/Laravel, and .NET Core.
            </p>
            
            <p>
              I am a multilingual professional, fluent in <span className="text-white font-medium">English and Urdu</span>, with intermediate proficiency in <span className="text-white font-medium">Arabic</span> and basic knowledge of <span className="text-white font-medium">Latvian</span>. This diverse linguistic background allows me to collaborate effectively with clients from various cultural and geographical landscapes.
            </p>

            <p>
              Currently, I am a <span className="text-brand-primary font-bold">Scrimba Student & Scrimba Ambassador</span>. My role as an Ambassador is centered on referral partnership—helping new students discover Scrimba's world-class platform while I refine my own student journey in advanced engineering.
            </p>

            <p>
              Alongside engineering, my training from <span className="text-white font-medium">Extreme Commerce</span> in Digital Marketing allows me to build products that are not only technically sound but also strategically positioned for growth.
            </p>

            <div className="p-6 bg-brand-surface border border-brand-border rounded-2xl border-l-4 border-l-brand-primary">
              <p className="text-neutral-300 italic text-base">
                "Communication is the bridge to value. Speaking four languages helps me build that bridge globally."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture & Pillars */}
        <div className="lg:col-span-4 space-y-10">
          
          {/* Desktop Profile Picture Spotlight */}
          <div className="hidden lg:block relative group">
            {/* Background Aura */}
            <div className="absolute -inset-4 bg-brand-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Main Picture Frame */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-brand-border group-hover:border-brand-primary/50 transition-all duration-500 bg-brand-surface shadow-2xl">
              <img 
                src={profilePicUrl} 
                alt="Muhammad Ibrahim" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-dark/40 backdrop-blur-md border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-display font-bold text-lg">Muhammad Ibrahim</p>
                <p className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">Founder & AI Specialist</p>
              </div>
            </div>
          </div>

          {/* Agency Link Card */}
          <div className="relative group overflow-hidden card-premium p-8 rounded-2xl border-brand-primary/50 bg-gradient-to-br from-brand-primary/20 to-transparent">
             <div className="relative z-10 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold text-xl shadow-lg">DV</div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">DevVortex-Co</h4>
                    <span className="text-[10px] text-brand-primary font-bold tracking-widest uppercase">Founded 2025</span>
                  </div>
                </div>
                
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Global software agency by Muhammad Ibrahim. Custom SaaS and AI systems for a multilingual world.
                </p>

                <a 
                  href="https://devvortex-co.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-black text-center font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-brand-primary hover:text-white transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  Visit Agency
                  <Icons.ExternalLink />
                </a>
             </div>
          </div>

          {/* Scrimba Ambassador Badge */}
          <div className="card-premium p-6 rounded-2xl border-orange-500/20 bg-orange-500/5 group">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Icons.Scrimba />
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Referral Ambassador</h4>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed mb-4">
              Authorized Referral Partner. Helping global students master code through Scrimba's methodology.
            </p>
            <a href={scrimbaUrl} target="_blank" className="text-orange-500 text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
              Verify Link <Icons.ExternalLink />
            </a>
          </div>

          <div className="card-premium p-6 rounded-2xl">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 opacity-50">Global Hire</h4>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-0.5 bg-neutral-900 border border-brand-border rounded text-[9px] font-bold text-neutral-500">ENG</span>
                <span className="px-2 py-0.5 bg-neutral-900 border border-brand-border rounded text-[9px] font-bold text-neutral-500">URD</span>
                <span className="px-2 py-0.5 bg-neutral-900 border border-brand-border rounded text-[9px] font-bold text-neutral-500">ARB</span>
                <span className="px-2 py-0.5 bg-neutral-900 border border-brand-border rounded text-[9px] font-bold text-neutral-500">LV</span>
              </div>
              <a href="https://www.fiverr.com/mbrahimshuja" target="_blank" className="flex items-center justify-between group/link">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest group-hover/link:text-emerald-500 transition-colors">Fiverr Expert</span>
                <Icons.ExternalLink />
              </a>
              <a href="https://www.upwork.com/freelancers/~0189a690f05537559e" target="_blank" className="flex items-center justify-between group/link">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest group-hover/link:text-emerald-400 transition-colors">Upwork Professional</span>
                <Icons.ExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;