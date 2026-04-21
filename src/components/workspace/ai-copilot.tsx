"use client";

import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useState, FormEvent, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock useChat implementation for robust offline portfolio viewing
function useMockChat() {
  const [messages, setMessages] = useState<{ id: string; role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now().toString(), role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [userMsg] })
      });
      
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) return;

      const asstId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: asstId, role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        // Parse the simulated Vercel AI `0:"text"` streams
        const lines = chunk.split('\n').filter(Boolean);
        for (const line of lines) {
          if (line.startsWith('0:')) {
            try {
              const text = JSON.parse(line.substring(2));
              setMessages((prev) => 
                prev.map(m => m.id === asstId ? { ...m, content: m.content + text } : m)
              );
            } catch (e) {}
          }
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, input, handleInputChange, handleSubmit, isLoading };
}

export function AICopilot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useMockChat();
  const [isOpen, setIsOpen] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-105 transition-transform z-40 flex items-center gap-2"
        style={{ boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' }}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold text-sm hidden md:inline">Ask AI</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 glass-panel flex flex-col overflow-hidden z-50 border border-white/10 h-[500px]"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-secondary/50">
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Real Estate Copilot</h3>
                  <p className="text-xs text-muted-foreground">Powered by Semantic Vectors</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-sm text-muted-foreground mt-10">
                  <Bot className="w-8 h-8 mx-auto mb-3 opacity-50" />
                  <p>I can help you find perfectly matching apartments, negotiate terms, or analyze neighborhoods.</p>
                </div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                      m.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                        : 'bg-secondary/50 text-foreground rounded-tl-sm border border-white/5'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-secondary/50 text-foreground rounded-2xl rounded-tl-sm p-3 text-sm border border-white/5 px-4">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="p-4 bg-background/50 border-t border-white/5">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about properties near NST..."
                  className="flex-1 bg-secondary/50 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-md"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
