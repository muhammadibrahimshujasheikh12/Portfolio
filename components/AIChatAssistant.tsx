import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Icons } from '../constants';
import { getAIResponse } from '../services/geminiService';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello. I am the digital concierge for Muhammad Ibrahim. How may I assist you with his professional profile or agency services today?",
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAIResponse(input, messages);
    
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    }]);
    setIsLoading(false);
  };

  // Renders strictly clean text, removing any accidental technical artifacts
  const renderCleanText = (text: string) => {
    // Triple safety filter for any remaining markdown artifacts
    const cleanText = text.replace(/[\*\_`#~\[\]\(\)]/g, '');
    
    return (
      <div className="whitespace-pre-wrap leading-relaxed tracking-wide">
        {cleanText}
      </div>
    );
  };

  return (
    <div className="fixed bottom-8 right-8 z-[99999] pointer-events-auto">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-4rem)] sm:w-[420px] h-[600px] max-h-[75vh] bg-brand-surface border border-brand-border rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] flex flex-col animate-premium">
          {/* Header */}
          <div className="p-6 border-b border-brand-border flex items-center justify-between bg-neutral-900/60 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-primary text-white flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                <Icons.Bot />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm tracking-tight uppercase">Agent Ibrahim</h4>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-neutral-500 font-black uppercase tracking-[0.2em]">Ready to assist</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-500 hover:text-white transition-all p-2 hover:bg-white/5 rounded-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-brand-dark/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] px-5 py-4 rounded-2xl text-[13px] shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-brand-primary text-white rounded-tr-none' 
                  : 'bg-neutral-900/80 text-neutral-200 border border-brand-border rounded-tl-none font-medium'
                }`}>
                  {msg.role === 'assistant' ? renderCleanText(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-900/80 px-6 py-4 rounded-2xl border border-brand-border rounded-tl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-brand-border bg-neutral-900/40 backdrop-blur-md">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message the agent..."
                className="w-full bg-neutral-900 border border-brand-border rounded-2xl px-6 py-4 pr-16 text-sm text-white focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-700 shadow-inner"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-3 p-3 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white rounded-xl transition-all disabled:opacity-20 active:scale-90"
              >
                <Icons.Send />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* The Actual Floating Action Button (FAB) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Assistant"
        className={`relative w-16 h-16 rounded-[1.4rem] flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(79,70,229,0.5)] transition-all duration-500 group ${
          isOpen 
          ? 'bg-neutral-900 text-white border border-brand-border rotate-90 scale-90' 
          : 'bg-brand-primary text-white hover:bg-brand-secondary hover:scale-110 active:scale-95 animate-float-ai'
        }`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <div className="flex flex-col items-center">
            <Icons.Bot />
            <span className="text-[7px] font-black uppercase tracking-[0.3em] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Agent</span>
          </div>
        )}
        
        {/* Glow and Pulse Effects */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 rounded-[1.4rem] bg-brand-primary animate-ping opacity-25 pointer-events-none"></div>
            <div className="absolute -inset-2 bg-brand-primary blur-2xl opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
          </>
        )}
      </button>
    </div>
  );
};

export default AIChatAssistant;