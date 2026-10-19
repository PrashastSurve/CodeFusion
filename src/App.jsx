import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CommunicationWorkspace from './components/CommunicationWorkspace';
import DevelopmentWorkspace from './components/DevelopmentWorkspace';
import CreativeWorkspace from './components/CreativeWorkspace';
import SynopsisModal from './components/SynopsisModal';
import AiCopilotDock from './components/AiCopilotDock';
import LoginModal from './components/LoginModal';
import CustomCursor from './components/CustomCursor';
import BackgroundMotion from './components/BackgroundMotion';
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
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F4F3ED] flex flex-col font-sans selection:bg-[#D5FF00] selection:text-[#0A0A0A] overflow-x-hidden">
      
      {/* Custom Spring Follower Cursor */}
      <CustomCursor />

      {/* Floating Motorsport Grid & Ambient Orbs */}
      <BackgroundMotion />

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

      {/* Animated Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-20 right-6 z-50 p-4 bg-[#141414] border border-[#D5FF00] text-xs font-mono text-[#F4F3ED] shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 className="w-4 h-4 text-[#D5FF00]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Animated Route Switcher */}
      <div className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'landing' ? (
            <motion.div
              key="landing-page"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <LandingPage 
                onOpenLogin={() => setIsLoginModalOpen(true)}
                onEnterPlatform={handleEnterPlatform}
                onOpenSynopsis={() => setIsSynopsisOpen(true)}
              />
            </motion.div>
          ) : (
            <motion.main
              key="platform-page"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-7xl w-full mx-auto p-4 lg:p-8 pb-24"
            >
              <AnimatePresence mode="wait">
                {activeWorkspace === 'communication' && (
                  <motion.div
                    key="communication-ws"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <CommunicationWorkspace onOpenCopilot={() => setIsCopilotOpen(true)} />
                  </motion.div>
                )}

                {activeWorkspace === 'development' && (
                  <motion.div
                    key="development-ws"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <DevelopmentWorkspace onOpenCopilot={() => setIsCopilotOpen(true)} />
                  </motion.div>
                )}

                {activeWorkspace === 'creative' && (
                  <motion.div
                    key="creative-ws"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <CreativeWorkspace onOpenCopilot={() => setIsCopilotOpen(true)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.main>
          )}
        </AnimatePresence>
      </div>

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
      <footer className="relative z-10 border-t border-[#1C1C1C] bg-[#0A0A0A] py-5 px-6 lg:px-12 text-xs font-mono text-[#666666]">
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
              data-cursor="SYNOPSIS"
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
