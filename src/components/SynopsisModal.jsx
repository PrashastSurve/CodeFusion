import React from 'react';
import { 
  X, 
  Users, 
  BookOpen, 
  Layers, 
  Server, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { projectMetadata } from '../data/mockProjectData';

export default function SynopsisModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0E0E] border border-[#2B2B2B] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Neon top line */}
        <div className="h-1 bg-[#D5FF00] w-full"></div>

        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#222222] flex items-center justify-between bg-[#121212]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-[#D5FF00] uppercase tracking-widest font-bold">
                ACADEMIC YEAR 2026 // SYNOPSIS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#F4F3ED] uppercase tracking-wide">
              CodeFusion — Project Specification
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#777777] hover:text-[#F4F3ED] hover:bg-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body with generous padding */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#CCCCCC]">
          
          {/* Team Table */}
          <section className="p-5 bg-[#141414] border border-[#242424]">
            <h3 className="font-mono text-xs uppercase text-[#D5FF00] font-bold mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" /> 2. Team Members & Roles
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-[#262626] text-[#777777]">
                    <th className="py-2.5 px-3">SR.</th>
                    <th className="py-2.5 px-3">NAME</th>
                    <th className="py-2.5 px-3">ROLL NO.</th>
                    <th className="py-2.5 px-3">ENROLLMENT</th>
                    <th className="py-2.5 px-3">PROJECT ROLE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1F1F1F]">
                  {projectMetadata.team.map((m, i) => (
                    <tr key={i} className="hover:bg-[#181818]">
                      <td className="py-2.5 px-3 text-[#666666]">{i + 1}</td>
                      <td className="py-2.5 px-3 font-bold text-[#F4F3ED]">{m.name}</td>
                      <td className="py-2.5 px-3 text-[#D5FF00]">{m.roll}</td>
                      <td className="py-2.5 px-3 text-[#888888]">{m.enrollment}</td>
                      <td className="py-2.5 px-3 text-[#AAAAAA]">{m.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Abstract & Problem Statement */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-[#141414] border border-[#242424] space-y-2">
              <span className="font-mono text-xs text-[#D5FF00] uppercase font-bold block">
                3. Abstract
              </span>
              <p className="text-xs text-[#888888] leading-relaxed">
                CodeFusion is an intelligent software development platform designed for students, freelancers, startups, and professional teams. Modern dev requires constant switching between tools such as VS Code, GitHub, Trello, Slack, and AI assistants, which fragments knowledge and reduces productivity. CodeFusion provides a unified workspace where coding, documentation, collaboration, API testing, analytics, and AI-guided learning coexist.
              </p>
            </div>

            <div className="p-5 bg-[#141414] border border-[#242424] space-y-2">
              <span className="font-mono text-xs text-[#D5FF00] uppercase font-bold block">
                6. Problem Statement
              </span>
              <p className="text-xs text-[#888888] leading-relaxed">
                Constant context switching reduces productivity and fragments project knowledge. Existing AI assistants respond only to ad-hoc prompts but lack continuous understanding of an entire project. Developers struggle to maintain clarity across complex codebases, API contracts, and team tasks.
              </p>
            </div>
          </div>

          {/* 3 Workspaces */}
          <section className="p-5 bg-[#141414] border border-[#242424]">
            <span className="font-mono text-xs text-[#D5FF00] uppercase font-bold block mb-3">
              8. Proposed Solution — Three Intelligent Workspaces
            </span>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#0A0A0A] border border-[#202020]">
                <span className="font-display text-lg text-[#F4F3ED] uppercase block mb-1">Communication</span>
                <p className="text-xs text-[#888888]">AI Task Manager, Team Collaboration, Activity Timeline, Project Sprints.</p>
              </div>
              <div className="p-4 bg-[#0A0A0A] border border-[#202020]">
                <span className="font-display text-lg text-[#F4F3ED] uppercase block mb-1">Development</span>
                <p className="text-xs text-[#888888]">Project Dashboard, GitHub Integration, Code Viewer, In-App API Testing (Postman-style).</p>
              </div>
              <div className="p-4 bg-[#0A0A0A] border border-[#202020]">
                <span className="font-display text-lg text-[#F4F3ED] uppercase block mb-1">Creative</span>
                <p className="text-xs text-[#888888]">AI Documentation Generator, Defense Presentation Builder, AI Architecture, AI-Guided Learning.</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <div className="p-5 bg-[#141414] border border-[#242424]">
            <span className="font-mono text-xs text-[#D5FF00] uppercase font-bold block mb-3">
              9. Key Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Supabase', 'PostgreSQL', 'pgvector', 'Gemini API', 'Groq API', 'RAG Pipeline', 'Vercel'].map((t, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#0A0A0A] text-[#F4F3ED] font-mono text-xs border border-[#222222]">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#222222] bg-[#121212] flex items-center justify-between">
          <span className="text-xs font-mono text-[#666666]">
            Independent Academic Project • Academic Year 2026
          </span>
          <button
            onClick={onClose}
            className="neon-btn px-5 py-2 font-grotesk text-xs uppercase"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
