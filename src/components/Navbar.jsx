import React from 'react';
import { 
  Terminal, 
  MessageSquareCode, 
  Code2, 
  Sparkles, 
  FileText, 
  GitBranch, 
  ArrowRight,
  User,
  LogOut,
  Layers,
  Compass
} from 'lucide-react';
import { projectMetadata } from '../data/mockProjectData';

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  activeWorkspace, 
  setActiveWorkspace, 
  user, 
  onOpenLogin, 
  onLogout,
  onOpenSynopsis, 
  onOpenCopilot 
}) {
  const workspaces = [
    { id: 'communication', name: 'Communication', icon: MessageSquareCode, tag: '01' },
    { id: 'development', name: 'Development', icon: Code2, tag: '02' },
    { id: 'creative', name: 'Creative', icon: Sparkles, tag: '03' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#1E1E1E] px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentPage('landing')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 bg-[#141414] border border-[#262626] group-hover:border-[#D5FF00] flex items-center justify-center font-display text-lg text-[#F4F3ED] group-hover:text-[#D5FF00] transition-colors">
              CF
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl tracking-wider text-[#F4F3ED]">
                  CODEFUSION
                </span>
                <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-[#181818] text-[#D5FF00] border border-[#2B2B2B]">
                  ®
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#777777] font-mono">
                <span className="text-[#999999]">AI INTELLIGENCE</span>
                <span>•</span>
                <span className="text-[#D5FF00]">● 98.4% RAG</span>
              </div>
            </div>
          </button>
        </div>

        {/* Center Nav: Landing vs Workspaces */}
        <nav className="hidden md:flex items-center bg-[#111111] p-1 rounded-none border border-[#222222]">
          <button
            onClick={() => setCurrentPage('landing')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors ${
              currentPage === 'landing'
                ? 'bg-[#1C1C1C] text-[#D5FF00] font-semibold border-b-2 border-[#D5FF00]'
                : 'text-[#888888] hover:text-[#F4F3ED]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Landing</span>
          </button>

          <span className="text-[#333333] px-1">/</span>

          {workspaces.map((ws) => {
            const Icon = ws.icon;
            const isActive = currentPage === 'platform' && activeWorkspace === ws.id;
            return (
              <button
                key={ws.id}
                onClick={() => {
                  setCurrentPage('platform');
                  setActiveWorkspace(ws.id);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors ${
                  isActive
                    ? 'bg-[#1C1C1C] text-[#D5FF00] font-semibold border-b-2 border-[#D5FF00]'
                    : 'text-[#888888] hover:text-[#F4F3ED]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#D5FF00]' : 'text-[#666666]'}`} />
                <span>{ws.name}</span>
                <span className="text-[9px] text-[#555555]">[{ws.tag}]</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          
          {/* AI Copilot Trigger */}
          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] hover:bg-[#1E1E1E] border border-[#2E2E2E] hover:border-[#D5FF00] text-[#D5FF00] font-mono text-xs font-bold transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">AI COPILOT</span>
            <kbd className="hidden lg:inline px-1 py-0.2 bg-[#0A0A0A] rounded text-[9px] text-[#777777]">
              Ctrl+K
            </kbd>
          </button>

          {/* Synopsis */}
          <button
            onClick={onOpenSynopsis}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] text-[#888888] hover:text-[#F4F3ED] text-xs font-mono transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>SYNOPSIS</span>
          </button>

          {/* User Auth state */}
          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-[#222222]">
              <div 
                title={`${user.name} (${user.role})`}
                className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#161616] border border-[#262626] text-xs font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-[#D5FF00]"></span>
                <span className="text-[#F4F3ED] font-bold">{user.avatar}</span>
                <span className="text-[10px] text-[#777777] hidden md:inline">{user.name.split(' ')[0]}</span>
              </div>
              <button
                onClick={onLogout}
                title="Sign out"
                className="p-1.5 text-[#666666] hover:text-[#F4F3ED] transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="neon-btn px-4 py-1.5 font-grotesk text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>SIGN IN</span>
            </button>
          )}

        </div>

      </div>

      {/* Mobile bar */}
      <div className="md:hidden flex items-center justify-between mt-2 pt-2 border-t border-[#1C1C1C] text-xs font-mono">
        <button
          onClick={() => setCurrentPage('landing')}
          className={`flex-1 py-1 text-center ${currentPage === 'landing' ? 'text-[#D5FF00] font-bold' : 'text-[#777777]'}`}
        >
          Landing
        </button>
        {workspaces.map((ws) => (
          <button
            key={ws.id}
            onClick={() => {
              setCurrentPage('platform');
              setActiveWorkspace(ws.id);
            }}
            className={`flex-1 py-1 text-center ${currentPage === 'platform' && activeWorkspace === ws.id ? 'text-[#D5FF00] font-bold' : 'text-[#777777]'}`}
          >
            {ws.name}
          </button>
        ))}
      </div>
    </header>
  );
}
