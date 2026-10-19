import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Code2, 
  Layers, 
  CheckCircle2, 
  ExternalLink, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Database, 
  ChevronDown,
  Play,
  Zap,
  Users
} from 'lucide-react';
import { projectMetadata } from '../data/mockProjectData';

export default function LandingPage({ onOpenLogin, onEnterPlatform, onOpenSynopsis }) {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      num: "01",
      title: "Continuous AI Project Intelligence Engine",
      summary: "Unlike ephemeral prompt-only chatbots, CodeFusion indexes your whole codebase (AST, docs, tasks, API schema) into Supabase pgvector.",
      tag: "CORE INNOVATION"
    },
    {
      num: "02",
      title: "In-App API Testing Suite (Postman-style)",
      summary: "Execute HTTP requests, inspect latency (38ms avg), examine headers and response payloads without switching out of your coding flow.",
      tag: "DEV WORKSPACE"
    },
    {
      num: "03",
      title: "Automated README & Defense Presentation Builder",
      summary: "Synthesize production-grade Markdown documentation and full 4-slide academic defense presentation decks with one click.",
      tag: "CREATIVE WORKSPACE"
    },
    {
      num: "04",
      title: "AI Kanban Task Manager & Team Sync",
      summary: "Dynamic sprint tracking with automatic AI subtask decomposition, complexity scoring, and live team presence for agile coordination.",
      tag: "COMMUNICATION WORKSPACE"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-[#F4F3ED] font-sans selection:bg-[#D5FF00] selection:text-[#0A0A0A]">
      
      {/* SECTION 1: OPENING SCREEN / HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-between px-6 lg:px-12 pt-8 pb-12 border-b border-[#1F1F1F] overflow-hidden">
        
        {/* Subtle background ambient glows */}
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#D5FF00]/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Top Meta Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#777777] uppercase tracking-wider mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D5FF00] animate-pulse"></span>
            <span className="text-[#F4F3ED] font-bold">INDEPENDENT CREATIVE INTELLIGENCE STUDIO</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>19° 25' N — CODED IN INDIA</span>
            <span className="text-[#333333]">•</span>
            <span>ACADEMIC YEAR 2026</span>
          </div>
          <button 
            onClick={onOpenSynopsis}
            className="hover:text-[#D5FF00] transition-colors cursor-pointer"
          >
            SYNOPSIS SPEC ↗
          </button>
        </div>

        {/* Central Editorial Hero Block */}
        <div className="grid lg:grid-cols-12 gap-8 items-center my-auto">
          
          {/* Main Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-[#262626] text-xs font-mono text-[#D5FF00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF00]"></span>
              <span>ENGINEERED WITH MOTORSPORT PRECISION</span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] uppercase text-[#F4F3ED]">
              IDEAS INTO <br />
              <span className="text-[#D5FF00]">IMPACT.</span> <br />
              <span className="text-outline">CODEFUSION.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#888888] max-w-xl font-normal leading-relaxed">
              We fuse code, documentation, collaboration, and continuous AI intelligence into one modular workspace that refuses to sit still. No more switching between VS Code, GitHub, Trello, and Slack.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenLogin}
                className="neon-btn px-7 py-3.5 rounded-none font-grotesk text-sm tracking-wider uppercase flex items-center gap-3 cursor-pointer shadow-xl shadow-[#D5FF00]/10"
              >
                <span>LAUNCH PLATFORM</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onEnterPlatform}
                className="px-6 py-3.5 rounded-none bg-[#141414] hover:bg-[#1E1E1E] border border-[#2E2E2E] text-[#F4F3ED] text-sm font-grotesk tracking-wider uppercase transition-colors flex items-center gap-2"
              >
                <span>EXPLORE WORKSPACES</span>
                <span className="text-[#777777]">↓</span>
              </button>
            </div>
          </div>

          {/* Motorsport / Cyber Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="card-dark p-6 sm:p-7 relative overflow-hidden group">
              
              {/* Technical corner coordinate stamps */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#777777] pb-3 mb-4 border-b border-[#222222]">
                <span>FIG. 01 — THE CREATIVE ENGINE</span>
                <span className="text-[#D5FF00]">CF // 2026 ONLINE</span>
              </div>

              {/* Code Snippet Card */}
              <div className="bg-[#070707] border border-[#1C1C1C] p-4 font-mono text-xs text-[#888888] rounded space-y-1.5 mb-5">
                <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-[#1A1A1A] text-[11px] text-[#555555]">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-[#D5FF00]"></span>
                  <span className="ml-2 text-[#999999]">engine.continuous.ts</span>
                </div>
                <p><span className="text-[#D5FF00]">const</span> workspace = <span className="text-[#F4F3ED]">new</span> CodeFusion();</p>
                <p>workspace.<span className="text-[#F4F3ED]">unify</span>(['Code', 'Docs', 'APIs']);</p>
                <p><span className="text-[#D5FF00]">await</span> workspace.<span className="text-[#D5FF00]">eliminateContextSwitching</span>();</p>
                <p className="text-[#555555]">// 98.4% codebase AST indexed in Supabase</p>
              </div>

              {/* Visual badges */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#161616] border border-[#242424]">
                  <span className="text-[10px] text-[#777777] font-mono uppercase block">Latency</span>
                  <span className="text-xl font-bold text-[#D5FF00] font-mono">38ms</span>
                  <span className="text-[10px] text-[#555555] block">Local Node.js</span>
                </div>
                <div className="p-3 bg-[#161616] border border-[#242424]">
                  <span className="text-[10px] text-[#777777] font-mono uppercase block">Security</span>
                  <span className="text-xl font-bold text-[#F4F3ED] font-mono">0 CVE</span>
                  <span className="text-[10px] text-[#555555] block">Supabase RLS</span>
                </div>
              </div>

              {/* Motorsport Stripe Graphic */}
              <div className="mt-4 pt-3 border-t border-[#1C1C1C] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#777777]">TEAM: THAKUR • MHABDI • SHIKHARE • SURVE</span>
                <span className="text-[#D5FF00]">v1.0.4 ↗</span>
              </div>
            </div>
          </div>

        </div>

        {/* Hero Bottom Meta Strip */}
        <div className="flex items-center justify-between pt-6 border-t border-[#1C1C1C] text-xs font-mono text-[#666666]">
          <span>NOT ANOTHER TEMPLATE.</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#D5FF00] rounded-full"></span>
            <span className="text-[#F4F3ED]">SCROLL TO EXPLORE WORKSPACES</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#D5FF00] animate-bounce" />
          </div>
          <span className="hidden sm:inline">BUILT FOR WHAT'S NEXT ↗</span>
        </div>

      </section>

      {/* INFINITE TICKER STRIP */}
      <div className="py-4 bg-[#0D0D0D] border-b border-[#1F1F1F] overflow-hidden whitespace-nowrap">
        <div className="ticker-track flex items-center gap-8 font-display text-2xl uppercase tracking-widest text-[#555555]">
          <span>THINK BIGGER</span><b className="text-[#D5FF00]">✳</b>
          <span>BUILD BOLDER</span><b className="text-[#D5FF00]">✳</b>
          <span>AI-POWERED INTELLIGENCE</span><b className="text-[#D5FF00]">✳</b>
          <span>ZERO CONTEXT SWITCHING</span><b className="text-[#D5FF00]">✳</b>
          <span>SUPABASE PGVECTOR</span><b className="text-[#D5FF00]">✳</b>
          <span>CONTINUOUS RAG PIPELINE</span><b className="text-[#D5FF00]">✳</b>
          <span>THINK BIGGER</span><b className="text-[#D5FF00]">✳</b>
          <span>BUILD BOLDER</span><b className="text-[#D5FF00]">✳</b>
          <span>AI-POWERED INTELLIGENCE</span><b className="text-[#D5FF00]">✳</b>
        </div>
      </div>

      {/* SECTION 2: BOLD TYPOGRAPHY AND BRAND STATEMENT */}
      <section className="py-24 px-6 lg:px-12 border-b border-[#1F1F1F] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-xs font-mono text-[#777777] uppercase tracking-wider mb-8">
            <span>01 / THE MANIFESTO</span>
            <span>WHY CODEFUSION EXISTS</span>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] uppercase tracking-tight text-[#F4F3ED] max-w-5xl">
              MODERN SOFTWARE TEAMS LOSE <br />
              <span className="text-[#D5FF00]">40% OF DAILY FOCUS</span> TO CONTEXT SWITCHING. <br />
              <span className="text-outline">WE REBUILT THE STACK AS ONE BRAIN.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10 pt-8 border-t border-[#1C1C1C]">
              <div className="space-y-4 text-[#888888] text-sm sm:text-base leading-relaxed">
                <p>
                  Today's developer is fragmented across VS Code, GitHub pull requests, Trello boards, Slack channels, and ephemeral AI chatbots that forget everything after a prompt.
                </p>
                <p>
                  CodeFusion provides a centralized, intelligent workspace where coding, documentation, team presence, API verification, and AI-guided learning operate under a continuous, shared project context.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-[#121212] border border-[#222222]">
                  <span className="font-display text-4xl text-[#D5FF00] block">03</span>
                  <span className="text-xs font-mono uppercase text-[#F4F3ED] font-semibold mt-1 block">Workspaces Unified</span>
                  <span className="text-xs text-[#777777] mt-0.5 block">Communication, Dev & Creative</span>
                </div>
                <div className="p-5 bg-[#121212] border border-[#222222]">
                  <span className="font-display text-4xl text-[#F4F3ED] block">98%</span>
                  <span className="text-xs font-mono uppercase text-[#F4F3ED] font-semibold mt-1 block">Context Ingested</span>
                  <span className="text-xs text-[#777777] mt-0.5 block">Supabase pgvector RAG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMAGE-LED PORTFOLIO & WORKSPACES */}
      <section className="py-24 px-6 lg:px-12 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs font-mono text-[#D5FF00] uppercase tracking-widest block mb-2">
                02 / SELECTED WORKSPACES
              </span>
              <h2 className="font-display text-5xl sm:text-6xl text-[#F4F3ED] uppercase tracking-tight">
                THREE WORKSPACES. <br />
                <span className="text-[#888888]">ONE CONTINUOUS ENGINE.</span>
              </h2>
            </div>
            <p className="text-xs font-mono text-[#777777] max-w-xs">
              Every workspace has real-time access to the complete project AST, test states, and team member presence.
            </p>
          </div>

          {/* 3 Asymmetrical Editorial Workspace Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Panel 1: Communication Workspace */}
            <div 
              onClick={() => onEnterPlatform('communication')}
              className="card-dark p-7 flex flex-col justify-between min-h-[440px] group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5FF00]/5 rounded-full blur-2xl group-hover:bg-[#D5FF00]/10 transition-colors"></div>
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-6">
                  <span>CF // WS-01</span>
                  <span className="px-2 py-0.5 rounded bg-[#1C1C1C] text-[#D5FF00] border border-[#292929]">AI KANBAN</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-[#F4F3ED] group-hover:text-[#D5FF00] transition-colors uppercase">
                  Communication Workspace
                </h3>
                <p className="text-xs text-[#888888] mt-3 leading-relaxed">
                  AI Task Manager that automatically breaks down complex epics into actionable subtasks. Features real-time team presence for Mayank, Kinjal, Urjita, and Prashast.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1C1C1C] flex items-center justify-between">
                <span className="text-xs font-mono text-[#F4F3ED] group-hover:underline flex items-center gap-1.5">
                  <span>Enter Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D5FF00] group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-mono text-[#555555]">01 / 03</span>
              </div>
            </div>

            {/* Panel 2: Development Workspace */}
            <div 
              onClick={() => onEnterPlatform('development')}
              className="card-dark p-7 flex flex-col justify-between min-h-[440px] group cursor-pointer relative overflow-hidden border-[#D5FF00]/30 shadow-lg shadow-[#D5FF00]/5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-6">
                  <span>CF // WS-02</span>
                  <span className="px-2 py-0.5 rounded bg-[#D5FF00] text-[#0A0A0A] font-bold">POSTMAN IN-APP</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-[#F4F3ED] group-hover:text-[#D5FF00] transition-colors uppercase">
                  Development Workspace
                </h3>
                <p className="text-xs text-[#888888] mt-3 leading-relaxed">
                  Integrated GitHub code explorer with AST syntax inspection and an embedded API testing client that sends requests and measures live latency without leaving the window.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1C1C1C] flex items-center justify-between">
                <span className="text-xs font-mono text-[#D5FF00] font-bold group-hover:underline flex items-center gap-1.5">
                  <span>Enter Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D5FF00] group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-mono text-[#555555]">02 / 03</span>
              </div>
            </div>

            {/* Panel 3: Creative Workspace */}
            <div 
              onClick={() => onEnterPlatform('creative')}
              className="card-dark p-7 flex flex-col justify-between min-h-[440px] group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-6">
                  <span>CF // WS-03</span>
                  <span className="px-2 py-0.5 rounded bg-[#1C1C1C] text-[#D5FF00] border border-[#292929]">SLIDE BUILDER</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-[#F4F3ED] group-hover:text-[#D5FF00] transition-colors uppercase">
                  Creative Workspace
                </h3>
                <p className="text-xs text-[#888888] mt-3 leading-relaxed">
                  Automatic README & OpenAPI generator, interactive 4-slide academic seminar defense presentation deck, and AI-guided learning modules for students.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1C1C1C] flex items-center justify-between">
                <span className="text-xs font-mono text-[#F4F3ED] group-hover:underline flex items-center gap-1.5">
                  <span>Enter Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D5FF00] group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-mono text-[#555555]">03 / 03</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: BRAND IDENTITY & VISUAL SHOWCASE */}
      <section className="py-24 px-6 lg:px-12 border-b border-[#1F1F1F] bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-xs font-mono text-[#777777] uppercase tracking-wider mb-12">
            <span>03 / SYSTEM TELEMETRY</span>
            <span>RAG VECTOR PIPELINE</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-[#101010] border border-[#1E1E1E]">
              <span className="font-display text-5xl sm:text-6xl text-[#D5FF00] block">98.4%</span>
              <span className="text-xs font-mono uppercase text-[#F4F3ED] font-bold mt-2 block">Context Indexing</span>
              <p className="text-xs text-[#777777] mt-1">14 files, 6 REST endpoints, Supabase schema.</p>
            </div>

            <div className="p-6 bg-[#101010] border border-[#1E1E1E]">
              <span className="font-display text-5xl sm:text-6xl text-[#F4F3ED] block">38ms</span>
              <span className="text-xs font-mono uppercase text-[#F4F3ED] font-bold mt-2 block">Avg In-App Latency</span>
              <p className="text-xs text-[#777777] mt-1">Direct testing without opening Postman.</p>
            </div>

            <div className="p-6 bg-[#101010] border border-[#1E1E1E]">
              <span className="font-display text-5xl sm:text-6xl text-[#D5FF00] block">0</span>
              <span className="text-xs font-mono uppercase text-[#F4F3ED] font-bold mt-2 block">Vulnerabilities</span>
              <p className="text-xs text-[#777777] mt-1">Supabase Row Level Security enforced.</p>
            </div>

            <div className="p-6 bg-[#101010] border border-[#1E1E1E]">
              <span className="font-display text-5xl sm:text-6xl text-[#F4F3ED] block">04</span>
              <span className="text-xs font-mono uppercase text-[#F4F3ED] font-bold mt-2 block">Active Engineers</span>
              <p className="text-xs text-[#777777] mt-1">Mayank, Kinjal, Urjita, Prashast.</p>
            </div>
          </div>

          {/* Architecture Visualization Strip */}
          <div className="card-dark p-8">
            <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F3ED] mb-6">
              Three-Tier Intelligence Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-5 bg-[#0A0A0A] border border-[#222222]">
                <span className="text-[10px] font-mono text-[#D5FF00] uppercase font-bold block mb-1">Tier 1 // UI</span>
                <span className="font-bold text-sm text-[#F4F3ED] block">React 19 + Tailwind</span>
                <span className="text-xs text-[#777777] mt-1 block">3 Unified Workspaces</span>
              </div>
              <div className="p-5 bg-[#0A0A0A] border border-[#222222]">
                <span className="text-[10px] font-mono text-[#D5FF00] uppercase font-bold block mb-1">Tier 2 // Engine</span>
                <span className="font-bold text-sm text-[#F4F3ED] block">Node.js + Gemini & Groq</span>
                <span className="text-xs text-[#777777] mt-1 block">AST Parser & RAG Vectorizer</span>
              </div>
              <div className="p-5 bg-[#0A0A0A] border border-[#222222]">
                <span className="text-[10px] font-mono text-[#D5FF00] uppercase font-bold block mb-1">Tier 3 // Database</span>
                <span className="font-bold text-sm text-[#F4F3ED] block">Supabase + PostgreSQL</span>
                <span className="text-xs text-[#777777] mt-1 block">pgvector (768-dim Embeddings)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES & PLATFORM CAPABILITIES */}
      <section className="py-24 px-6 lg:px-12 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-[#D5FF00] uppercase tracking-widest block">
                04 / CAPABILITIES
              </span>
              <h2 className="font-display text-5xl sm:text-6xl text-[#F4F3ED] uppercase leading-[0.95]">
                BRAINS BEHIND <br />
                <span className="text-[#888888]">THE BUILD.</span>
              </h2>
              <p className="text-sm text-[#888888] leading-relaxed max-w-md pt-2">
                Every feature was architected to eliminate context switching and provide continuous intelligence across your entire project lifecycle.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#1F1F1F]">
              {capabilities.map((cap, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveCapability(idx)}
                  className="py-6 group cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#666666] group-hover:text-[#D5FF00] transition-colors">
                      {cap.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141414] text-[#D5FF00] border border-[#242424]">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F4F3ED] group-hover:text-[#D5FF00] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-[#888888] mt-2 leading-relaxed max-w-xl">
                    {cap.summary}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING STATEMENT & FOOTER */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          
          <span className="text-xs font-mono text-[#D5FF00] uppercase tracking-widest block">
            05 / YOUR MOVE
          </span>

          <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.9] text-[#F4F3ED]">
            DON'T FOLLOW <br />
            THE FUTURE. <br />
            <span className="text-[#D5FF00]">BUILD IT.</span>
          </h2>

          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenLogin}
              className="neon-btn px-9 py-4 font-grotesk text-sm tracking-wider uppercase flex items-center gap-3 cursor-pointer shadow-2xl shadow-[#D5FF00]/20"
            >
              <span>SIGN IN WITH GOOGLE OR GITHUB</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-16 pt-12 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#666666] gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#F4F3ED]">CODEFUSION®</span>
              <span>— PROJECT SYNOPSIS</span>
            </div>
            <div>
              <span>TEAM: MAYANK THAKUR • KINJAL MHABDI • URJITA SHIKHARE • PRASHAST SURVE</span>
            </div>
            <span>© 2026 CODEFUSION</span>
          </div>

        </div>
      </section>

    </div>
  );
}
