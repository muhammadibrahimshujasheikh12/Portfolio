import React, { useState, useEffect } from 'react';
import { init, send } from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Latest verified credentials
  const SERVICE_ID = 'service_qmmtwjn';
  const TEMPLATE_ID = 'template_s8synjg';
  const PUBLIC_KEY = 'ogcjElzeQMV0_7oHb';

  useEffect(() => {
    // Explicit initialization on component mount
    init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');
    setErrorMessage('');

    // Mapping multiple variations of names to ensure template compatibility
    // This reduces the chance of a 400 error if the template uses slightly different keys
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      name: formState.name,      // Fallback
      email: formState.email,    // Fallback
      subject: formState.subject,
      message: formState.message,
      reply_to: formState.email
    };

    console.log("Transmission initiated with Template:", TEMPLATE_ID);

    try {
      // Using the named 'send' function directly
      const result = await send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      if (result.status === 200) {
        console.log("Transmission Success:", result.text);
        setStatus('success');
      } else {
        throw new Error(result.text || "Unknown API response");
      }
    } catch (error: any) {
      // Improved error detection for debugging
      console.error("Transmission Error:", error);
      
      let msg = "Connection refused or protocol mismatch.";
      
      if (error?.text) {
        msg = error.text; // Specific message from EmailJS server
      } else if (error?.message) {
        msg = error.message;
      }

      setErrorMessage(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center animate-premium">
        <div className="w-20 h-20 bg-emerald-500 text-white flex items-center justify-center mx-auto mb-8 rounded-3xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-3">Successfully Routed</h3>
        <p className="text-neutral-500 max-w-sm mx-auto mb-10 text-sm">Your inquiry has been successfully transmitted via the gateway. Muhammad will review it shortly.</p>
        <button 
          onClick={() => { setStatus('idle'); setFormState({ name: '', email: '', subject: '', message: '' }); }}
          className="px-8 py-3 bg-brand-primary/10 text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all"
        >
          New Communication
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">Identity</label>
            <input 
              required
              type="text" 
              placeholder="Full Name"
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-800"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">Email Endpoint</label>
            <input 
              required
              type="email" 
              placeholder="Address"
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-800"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">Inquiry Vector</label>
          <input 
            required
            type="text" 
            placeholder="Subject"
            value={formState.subject}
            onChange={(e) => setFormState({...formState, subject: e.target.value})}
            className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-800"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">Data Payload</label>
          <textarea 
            required
            rows={5}
            placeholder="Message contents..."
            value={formState.message}
            onChange={(e) => setFormState({...formState, message: e.target.value})}
            className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-800 resize-none"
          ></textarea>
        </div>

        {status === 'error' && (
          <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1">Transmission Failure (400)</p>
            <p className="text-red-400/80 text-xs leading-relaxed">
              API Feedback: {errorMessage}
            </p>
            <div className="mt-3 p-2 bg-black/20 rounded text-[9px] text-neutral-500 uppercase tracking-tighter">
              Validate that Template "{TEMPLATE_ID}" exists and is published in EmailJS.
            </div>
          </div>
        )}

        <button 
          type="submit"
          disabled={status === 'transmitting'}
          className="group w-full py-5 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-[0.3em] transition-all hover:bg-brand-primary hover:text-white disabled:opacity-50 active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3"
        >
          {status === 'transmitting' ? 'Negotiating Gateway...' : 'Initiate Transmission'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;