
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Building scalable, enterprise-grade web applications using MERN, Laravel, and modern .NET architectures.',
      icon: '💻',
      color: 'brand-primary'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Integrating intelligent models and automated NLP workflows to solve complex business problems.',
      icon: '🤖',
      color: 'emerald-500'
    },
    {
      title: 'UI/UX & Creative Design',
      description: 'High-fidelity visual storytelling, professional video editing, and component-driven interface design.',
      icon: '🎨',
      color: 'brand-primary'
    },
    {
      title: 'Digital Marketing & Growth',
      description: 'Strategic branding, social media marketing (SMM), and high-conversion e-commerce growth strategies.',
      icon: '📈',
      color: 'emerald-500'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-brand-surface/20 border-y border-brand-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="inline-block px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-6">Our Expertise</div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">Agency Services.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group card-premium p-10 rounded-3xl border-brand-border hover:border-brand-primary/30 transition-all duration-500">
              <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block">{s.icon}</div>
              <h3 className="text-white font-display font-bold text-xl mb-4 group-hover:text-brand-primary transition-colors">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
