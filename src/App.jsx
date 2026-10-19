import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CommunicationWorkspace from './components/CommunicationWorkspace';
import DevelopmentWorkspace from './components/DevelopmentWorkspace';
import CreativeWorkspace from './components/CreativeWorkspace';
import SynopsisModal from './components/SynopsisModal';
import AiCopilotDock from './components/AiCopilotDock';
import LoginModal from './components/LoginModal';
import { projectMetadata } from './data/mockProjectData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' or 'platform'
  const [activeWorkspace, setActiveWorkspace] = useState('development');
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Global keyboard shortcut: Ctrl+K / Cmd+K to toggle AI Copilot
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCopilotOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLoginSuccess = (authenticatedUser) => {
    setUser(authenticatedUser);
    setCurrentPage('platform');
    setToastMessage(`Authenticated as ${authenticatedUser.name} (${authenticatedUser.role})`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
    setToastMessage('Signed out successfully.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleEnterPlatform = (specificWorkspace = 'development') => {
    setActiveWorkspace(specificWorkspace);
    setCurrentPage('platform');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F4F3ED] flex flex-col font-sans selection:bg-[#D5FF00] selection:text-[#0A0A0A]">
      
      {/* Top Navbar */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeWorkspace={activeWorkspace}
        setActiveWorkspace={setActiveWorkspace}
        user={user}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
        onOpenSynopsis={() => setIsSynopsisOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-4 bg-[#141414] border border-[#D5FF00] text-xs font-mono text-[#F4F3ED] shadow-2xl flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#D5FF00]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Body */}
      {currentPage === 'landing' ? (
        <LandingPage 
          onOpenLogin={() => setIsLoginModalOpen(true)}
          onEnterPlatform={handleEnterPlatform}
          onOpenSynopsis={() => setIsSynopsisOpen(true)}
        />
      ) : (
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 pb-24">
          {activeWorkspace === 'communication' && (
            <CommunicationWorkspace onOpenCopilot={() => setIsCopilotOpen(true)} />
          )}

          {activeWorkspace === 'development' && (
            <DevelopmentWorkspace onOpenCopilot={() => setIsCopilotOpen(true)} />
          )}

          {activeWorkspace === 'creative' && (
            <CreativeWorkspace onOpenCopilot={() => setIsCopilotOpen(true)} />
          )}
        </main>
      )}

      {/* Global AI Copilot Dock */}
      <AiCopilotDock 
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
      />

      {/* Login Modal with Google and GitHub */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Academic Project Synopsis Modal */}
      <SynopsisModal 
        isOpen={isSynopsisOpen}
        onClose={() => setIsSynopsisOpen(false)}
      />

      {/* Bottom Status Strip */}
      <footer className="border-t border-[#1C1C1C] bg-[#0A0A0A] py-5 px-6 lg:px-12 text-xs font-mono text-[#666666]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#F4F3ED] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D5FF00]"></span>
              CODEFUSION // INTELLIGENCE PLATFORM
            </span>
            <span className="text-[#333333]">|</span>
            <span>TEAM: MAYANK • KINJAL • URJITA • PRASHAST</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <button
              onClick={() => setIsSynopsisOpen(true)}
              className="text-[#D5FF00] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>OFFICIAL PROJECT SYNOPSIS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[#333333]">•</span>
            <span>ACADEMIC YEAR 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
