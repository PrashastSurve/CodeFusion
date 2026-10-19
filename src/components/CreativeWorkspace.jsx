import React, { useState } from 'react';
import { 
  FileText, 
  Presentation, 
  Cpu, 
  GraduationCap, 
  Sparkles, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Lightbulb
} from 'lucide-react';
import { presentationSlides, learningModules, projectMetadata } from '../data/mockProjectData';

export default function CreativeWorkspace({ onOpenCopilot }) {
  const [creativeTab, setCreativeTab] = useState('docs'); // 'docs', 'presentation', 'architecture', 'learning'
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [copiedDoc, setCopiedDoc] = useState(false);
  const [selectedLearning, setSelectedLearning] = useState(learningModules[0]);
  const [docType, setDocType] = useState('readme');

  const generatedDocs = {
    readme: `# CodeFusion — AI-Powered Software Development Intelligence Platform

> A unified developer intelligence ecosystem integrating Coding, Documentation, Team Sync, In-App API Testing, and AI-guided Learning.

## 👥 Project Team (Academic Year 2026)
- Mayank Thakur (Roll: 2402 | Enr: 24111000167) — Full Stack & System Architecture
- Kinjal Mhabdi (Roll: 2434 | Enr: 24111000364) — AI Intelligence & Prompt Pipeline
- Urjita Shikhare (Roll: 2463 | Enr: 24111000394) — Frontend & Workspace Experience
- Prashast Surve (Roll: 2464 | Enr: 24111000395) — Backend & Supabase Database

## 🚀 Intelligent Workspaces
1. Communication Workspace: AI Task Manager with automated subtask generation & team presence.
2. Development Workspace: Integrated GitHub source viewer & in-app Postman-style API testing.
3. Creative Workspace: Automated Markdown README / OpenAPI generator & academic defense slide decks.

## 🛠️ Key Technologies
React.js, Node.js, Supabase, PostgreSQL, pgvector, Gemini API, Groq API, Vercel.`,
    openapi: `{
  "openapi": "3.0.0",
  "info": {
    "title": "CodeFusion Intelligence Platform API",
    "version": "1.0.0",
    "description": "Continuous RAG & Dev Intelligence Services"
  },
  "paths": {
    "/api/v1/intelligence/query": {
      "post": {
        "summary": "Query Project Intelligence Engine",
        "responses": {
          "200": { "description": "Grounded answer with code citations" }
        }
      }
    }
  }
}`
  };

  const handleCopyDoc = () => {
    navigator.clipboard.writeText(generatedDocs[docType]);
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2000);
  };

  const currentSlide = presentationSlides[currentSlideIndex];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Workspace Header */}
      <div className="card-dark p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 font-mono text-xs uppercase bg-[#1A1A1A] text-[#D5FF00] border border-[#2B2B2B]">
                WORKSPACE 03 // CREATIVE
              </span>
              <span className="text-xs font-mono text-[#777777]">AI DOCS, DEFENSE SLIDES & ARCHITECTURE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-[#F4F3ED] uppercase tracking-tight">
              Documentation & Defense Deck
            </h1>
            <p className="text-sm text-[#888888] max-w-2xl font-normal leading-relaxed">
              Automates project documentation, builds academic defense presentation decks, audits system architecture, and delivers AI-guided learning.
            </p>
          </div>

          {/* Module Switcher */}
          <div className="flex items-center gap-2 bg-[#141414] p-1.5 border border-[#242424] overflow-x-auto">
            {[
              { id: 'docs', name: 'AI Docs Generator', icon: FileText },
              { id: 'presentation', name: 'Defense Slide Deck', icon: Presentation },
              { id: 'architecture', name: 'System Architecture', icon: Cpu },
              { id: 'learning', name: 'AI Learning', icon: GraduationCap }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = creativeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCreativeTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold' 
                      : 'text-[#888888] hover:text-[#F4F3ED]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* TAB 1: AI Docs */}
      {creativeTab === 'docs' && (
        <div className="card-dark p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222222]">
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setDocType('readme')}
                className={`px-3 py-1.5 transition-colors ${docType === 'readme' ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold' : 'text-[#888888] hover:text-[#F4F3ED]'}`}
              >
                README.md
              </button>
              <button
                onClick={() => setDocType('openapi')}
                className={`px-3 py-1.5 transition-colors ${docType === 'openapi' ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold' : 'text-[#888888] hover:text-[#F4F3ED]'}`}
              >
                openapi.json (Swagger)
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#D5FF00] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> AST Codebase Grounded
              </span>
              <button
                onClick={handleCopyDoc}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-[#202020] hover:bg-[#2A2A2A] text-[#F4F3ED] font-mono text-xs transition-colors"
              >
                {copiedDoc ? <Check className="w-3.5 h-3.5 text-[#D5FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDoc ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <pre className="p-6 bg-[#070707] border border-[#202020] font-mono text-xs text-[#CCCCCC] overflow-x-auto max-h-[480px] whitespace-pre-wrap leading-relaxed">
            {generatedDocs[docType]}
          </pre>
        </div>
      )}

      {/* TAB 2: Defense Slide Deck */}
      {creativeTab === 'presentation' && (
        <div className="space-y-6">
          <div className="card-dark p-4 flex items-center justify-between text-xs font-mono">
            <span className="text-[#888888]">
              ACADEMIC PRESENTATION DECK ({currentSlideIndex + 1} OF {presentationSlides.length})
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                disabled={currentSlideIndex === 0}
                className="px-3 py-1 bg-[#1C1C1C] hover:bg-[#262626] disabled:opacity-30 text-[#F4F3ED]"
              >
                ← PREV
              </button>
              <span className="px-2 text-[#D5FF00]">SLIDE {currentSlideIndex + 1}</span>
              <button
                onClick={() => setCurrentSlideIndex(prev => Math.min(presentationSlides.length - 1, prev + 1))}
                disabled={currentSlideIndex === presentationSlides.length - 1}
                className="px-3 py-1 bg-[#1C1C1C] hover:bg-[#262626] disabled:opacity-30 text-[#F4F3ED]"
              >
                NEXT →
              </button>
            </div>
          </div>

          <div className="card-dark p-8 sm:p-12 min-h-[440px] flex flex-col justify-between border-[#D5FF00]/40 relative overflow-hidden">
            <div>
              <span className="px-2.5 py-1 bg-[#1A1A1A] text-[#D5FF00] font-mono text-xs tracking-wider border border-[#2B2B2B]">
                {currentSlide.badge}
              </span>

              <h2 className="font-display text-4xl sm:text-6xl text-[#F4F3ED] uppercase tracking-tight mt-6 mb-2">
                {currentSlide.title}
              </h2>
              <p className="text-base text-[#D5FF00] font-grotesk mb-8">
                {currentSlide.subtitle}
              </p>

              {/* Slide 1 Team */}
              {currentSlide.teamList && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  {currentSlide.teamList.map((tm, idx) => (
                    <div key={idx} className="p-4 bg-[#141414] border border-[#242424]">
                      <span className="font-bold text-sm text-[#F4F3ED] block">{tm.name}</span>
                      <span className="text-xs font-mono text-[#D5FF00] block mt-1">Roll: {tm.roll}</span>
                      <span className="text-[10px] font-mono text-[#666666] block">Enr: {tm.enroll}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Slide 2 Points */}
              {currentSlide.content && (
                <div className="space-y-3 mt-6">
                  {currentSlide.content.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#141414] border border-[#222222] flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#D5FF00] mt-1.5 shrink-0"></div>
                      <div>
                        {item.title && <span className="font-bold text-[#F4F3ED] text-sm block mb-1">{item.title}</span>}
                        {item.label && <span className="font-bold text-[#D5FF00] text-sm block mb-1">{item.label}</span>}
                        <p className="text-xs text-[#888888] leading-relaxed">{item.desc || item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Slide 3 Workspaces */}
              {currentSlide.workspaces && (
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {currentSlide.workspaces.map((ws, idx) => (
                    <div key={idx} className="p-4 bg-[#141414] border border-[#242424]">
                      <span className="font-display text-xl text-[#D5FF00] uppercase block mb-2">{ws.name}</span>
                      <ul className="text-xs text-[#888888] space-y-1.5">
                        {ws.items.map((it, i) => (
                          <li key={i}>• {it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Slide 4 Tech */}
              {currentSlide.techColumns && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  {currentSlide.techColumns.map((col, idx) => (
                    <div key={idx} className="p-4 bg-[#141414] border border-[#242424]">
                      <span className="font-mono text-xs text-[#D5FF00] uppercase font-bold block mb-2">{col.category}</span>
                      <div className="flex flex-wrap gap-1">
                        {col.items.map((item, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-[#202020] text-[#CCCCCC]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 mt-8 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono text-[#666666]">
              <span className="flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-[#D5FF00]" /> Speaker Cue: {currentSlide.notes}
              </span>
              <span>Use ← / → buttons</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: System Architecture */}
      {creativeTab === 'architecture' && (
        <div className="card-dark p-6 sm:p-8 space-y-8">
          <div>
            <span className="font-mono text-xs text-[#D5FF00] uppercase tracking-wider block mb-1">
              SYSTEM DESIGN // ARCHITECTURE
            </span>
            <h3 className="font-display text-3xl uppercase tracking-wider text-[#F4F3ED]">
              Continuous Intelligence Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0A0A0A] border border-[#222222]">
              <span className="text-xs font-mono text-[#D5FF00] uppercase font-bold block mb-2">TIER 1 // CLIENT</span>
              <h4 className="font-display text-2xl text-[#F4F3ED] uppercase">React 19 + Tailwind</h4>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                Modular 3 workspaces client. Eliminates tool hopping between IDE, issue tracker, and API testing suites.
              </p>
            </div>

            <div className="p-6 bg-[#0A0A0A] border border-[#222222]">
              <span className="text-xs font-mono text-[#D5FF00] uppercase font-bold block mb-2">TIER 2 // ENGINE</span>
              <h4 className="font-display text-2xl text-[#F4F3ED] uppercase">Node.js + Gemini & Groq</h4>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                AST parsing, token chunking, and continuous RAG orchestration with ultra-low latency response times.
              </p>
            </div>

            <div className="p-6 bg-[#0A0A0A] border border-[#222222]">
              <span className="text-xs font-mono text-[#D5FF00] uppercase font-bold block mb-2">TIER 3 // DATA</span>
              <h4 className="font-display text-2xl text-[#F4F3ED] uppercase">Supabase + PostgreSQL</h4>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                pgvector extension stores 768-dimensional dense vectors with IVFFlat cosine similarity matching under RLS.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#141414] border border-[#242424] space-y-2">
            <span className="font-mono text-xs text-[#D5FF00] uppercase font-bold block">
              AI ENGINE RECOMMENDATION:
            </span>
            <p className="text-xs text-[#888888] leading-relaxed">
              Enable Redis caching for frequent embedding lookups to reduce vector query latency from 41ms to ~8ms.
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: AI Learning */}
      {creativeTab === 'learning' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card-dark p-5">
            <span className="font-display text-lg uppercase tracking-wider text-[#F4F3ED] block mb-3">
              Learning Modules
            </span>
            <div className="space-y-2">
              {learningModules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setSelectedLearning(mod)}
                  className={`w-full text-left p-3.5 transition-colors border ${
                    selectedLearning.id === mod.id 
                      ? 'bg-[#181818] border-[#D5FF00] text-[#F4F3ED]' 
                      : 'bg-[#121212] border-[#222222] text-[#888888] hover:text-[#F4F3ED]'
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#D5FF00] uppercase block">{mod.category}</span>
                  <span className="font-grotesk text-xs font-bold text-[#F4F3ED] block mt-1">{mod.title}</span>
                  <span className="text-[10px] font-mono text-[#555555] block mt-1">Difficulty: {mod.difficulty}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 card-dark p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#222222] pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#D5FF00] uppercase font-bold">{selectedLearning.category}</span>
                <h3 className="font-display text-2xl text-[#F4F3ED] uppercase mt-1">{selectedLearning.title}</h3>
              </div>
              <span className="px-2 py-1 bg-[#1C1C1C] font-mono text-xs text-[#D5FF00]">
                {selectedLearning.difficulty}
              </span>
            </div>

            <p className="text-sm text-[#CCCCCC] leading-relaxed">{selectedLearning.summary}</p>

            <div className="space-y-3">
              {selectedLearning.steps.map((st, i) => (
                <div key={i} className="p-4 bg-[#141414] border border-[#222222]">
                  <h4 className="font-grotesk text-xs font-bold text-[#D5FF00] mb-1">{st.title}</h4>
                  <p className="text-xs text-[#888888] leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#070707] border border-[#202020]">
              <span className="text-[10px] font-mono text-[#555555] block mb-2">Code Implementation:</span>
              <pre className="font-mono text-xs text-[#D5FF00]/90 overflow-x-auto whitespace-pre">
                {selectedLearning.codeSample}
              </pre>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
