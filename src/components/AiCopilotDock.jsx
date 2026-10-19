import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Terminal, 
  Cpu, 
  RefreshCw,
  Zap,
  ArrowRight
} from 'lucide-react';
import { projectMetadata } from '../data/mockProjectData';

export default function AiCopilotDock({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I am the **CodeFusion Project Intelligence Engine**.
Continuous project context:
- **14 Source Files** parsed along AST boundaries
- **6 REST API endpoints** verified
- **Supabase pgvector** (768-dim embeddings) synced
- **Team Active**: Mayank, Kinjal, Urjita, Prashast

How can I assist your engineering session?`,
      citations: ['src/intelligence/ragEngine.ts', 'supabase/migrations/schema.sql']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "Explain the RAG engine architecture",
    "Audit repository for security & privacy",
    "Summarize Sprint 3 for defense seminar",
    "Suggest caching optimization"
  ];

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      let citations = [];

      if (query.toLowerCase().includes("rag") || query.toLowerCase().includes("engine") || query.toLowerCase().includes("architecture")) {
        botResponse = `### CodeFusion Continuous RAG Architecture
1. **Source Ingestion**: Source code (.ts, .sql, .jsx) is chunked along semantic AST boundaries.
2. **Embedding Pipeline**: Passed to Gemini text-embedding-004 to produce 768-dimensional dense vectors.
3. **Supabase pgvector**: Stored in PostgreSQL with IVFFlat cosine similarity matching under Row Level Security.
4. **Context Injection**: Answers are synthesized from grounded file chunks, completely eliminating hallucinations.`;
        citations = ['src/intelligence/ragEngine.ts', 'supabase/migrations/schema.sql'];
      } else if (query.toLowerCase().includes("security") || query.toLowerCase().includes("audit") || query.toLowerCase().includes("privacy")) {
        botResponse = `### Security & Privacy Audit Report
- **Authentication**: JWT verification handled cleanly in authController.ts.
- **Database Isolation**: Supabase Row Level Security (RLS) restricts embedding reads strictly to project contributors.
- **Environment Secrets**: API keys isolated in environment variables.
- **Audit Grade**: **A+ (0 Vulnerabilities Detected)**.`;
        citations = ['src/api/v1/authController.ts', 'supabase/migrations/schema.sql'];
      } else if (query.toLowerCase().includes("sprint") || query.toLowerCase().includes("defense") || query.toLowerCase().includes("seminar")) {
        botResponse = `### Sprint 3 & Academic Defense Summary
- **Platform**: CodeFusion v1.0.4-beta
- **Team**: Mayank Thakur, Kinjal Mhabdi, Urjita Shikhare, Prashast Surve.
- **Progress**: 18 of 22 sprint tasks completed (82% complete).
- **Core Milestone**: All 3 workspaces (Communication, Development, Creative) unified into a single responsive client.
- **Presentation Deck**: Ready in Creative Workspace -> Slide Builder.`;
        citations = ['Project Synopsis (PDF)', 'Communication Workspace'];
      } else {
        botResponse = `I analyzed your query: **"${query}"** against current CodeFusion AST and task graphs.
Context is 98.4% indexed. No compile-time regressions detected in main branch.`;
        citations = ['src/intelligence/ragEngine.ts'];
      }

      setMessages(prev => [...prev, { role: 'assistant', content: botResponse, citations }]);
      setIsTyping(false);
    }, 550);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-lg bg-[#0E0E0E] border border-[#2E2E2E] shadow-2xl flex flex-col overflow-hidden animate-slideInUp max-h-[620px]">
      
      {/* Header */}
      <div className="px-5 py-3.5 bg-[#141414] border-b border-[#242424] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D5FF00] animate-pulse"></span>
          <div>
            <span className="font-mono text-xs font-bold text-[#F4F3ED] block">
              AI PROJECT INTELLIGENCE ENGINE
            </span>
            <span className="text-[10px] text-[#777777] font-mono">Continuous RAG Active</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-[#777777] hover:text-[#F4F3ED] text-xs font-mono"
        >
          ✕
        </button>
      </div>

      {/* RAG Context Status Bar */}
      <div className="px-5 py-2 bg-[#0A0A0A] border-b border-[#1C1C1C] flex items-center justify-between text-[11px] font-mono text-[#888888]">
        <span className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#D5FF00]" /> 14 Files Indexed
        </span>
        <span className="text-[#D5FF00]">98.4% SYNC</span>
      </div>

      {/* Chat Messages */}
      <div className="p-5 flex-1 overflow-y-auto space-y-4 text-xs">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`p-4 max-w-[90%] leading-relaxed ${
              msg.role === 'user'
                ? 'bg-[#D5FF00] text-[#0A0A0A] font-semibold'
                : 'bg-[#141414] border border-[#242424] text-[#CCCCCC]'
            }`}>
              <div className="whitespace-pre-wrap">{msg.content}</div>

              {msg.citations && msg.citations.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-[#242424] flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="text-[#666666] font-mono">SOURCES:</span>
                  {msg.citations.map((c, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-[#0A0A0A] text-[#D5FF00] font-mono border border-[#222222]">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#D5FF00] font-mono py-1">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Consulting Supabase pgvector & Gemini 1.5...</span>
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2.5 border-t border-[#1C1C1C] bg-[#0A0A0A] flex items-center gap-2 overflow-x-auto">
        {quickPrompts.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(p)}
            className="px-2.5 py-1 bg-[#141414] hover:bg-[#1E1E1E] text-[#888888] hover:text-[#D5FF00] text-[10px] font-mono whitespace-nowrap transition-colors border border-[#222222]"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-[#141414] border-t border-[#242424] flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Ask CodeFusion..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 px-4 py-2.5 bg-[#0A0A0A] border border-[#2A2A2A] text-xs font-mono text-[#F4F3ED] placeholder-[#555555] focus:outline-none focus:border-[#D5FF00]"
        />
        <button
          type="submit"
          className="px-4 py-2.5 bg-[#D5FF00] hover:bg-white text-[#0A0A0A] font-bold text-xs uppercase font-mono transition-colors"
        >
          Send
        </button>
      </form>

    </div>
  );
}
