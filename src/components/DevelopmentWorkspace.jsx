import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Send, 
  Sparkles, 
  FileCode, 
  FolderGit2, 
  Copy, 
  Check, 
  RefreshCw,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { projectFiles, mockApiEndpoints, projectMetadata } from '../data/mockProjectData';

export default function DevelopmentWorkspace({ onOpenCopilot }) {
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'api'
  const [selectedFile, setSelectedFile] = useState(projectFiles[0]);
  const [aiExplanation, setAiExplanation] = useState(null);
  const [isExplaining, setIsExplaining] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // API Tester States
  const [selectedEndpoint, setSelectedEndpoint] = useState(mockApiEndpoints[0]);
  const [httpMethod, setHttpMethod] = useState(mockApiEndpoints[0].method);
  const [endpointUrl, setEndpointUrl] = useState(mockApiEndpoints[0].path);
  const [requestBody, setRequestBody] = useState(mockApiEndpoints[0].defaultBody);
  const [apiResponse, setApiResponse] = useState(mockApiEndpoints[0].mockResponse);
  const [isLoadingApi, setIsLoadingApi] = useState(false);

  const handleSelectEndpoint = (ep) => {
    setSelectedEndpoint(ep);
    setHttpMethod(ep.method);
    setEndpointUrl(ep.path);
    setRequestBody(ep.defaultBody);
    setApiResponse(ep.mockResponse);
  };

  const handleSendApiRequest = () => {
    setIsLoadingApi(true);
    setTimeout(() => {
      setIsLoadingApi(false);
      setApiResponse({
        ...selectedEndpoint.mockResponse,
        time: `${Math.floor(Math.random() * 20 + 24)}ms`,
        body: {
          ...selectedEndpoint.mockResponse.body,
          timestamp: new Date().toISOString()
        }
      });
    }, 400);
  };

  const handleExplainCode = () => {
    setIsExplaining(true);
    setTimeout(() => {
      setIsExplaining(false);
      setAiExplanation({
        file: selectedFile.name,
        summary: `Module ${selectedFile.name} powers CodeFusion's vector similarity matching pipeline.`,
        keyPoints: [
          "Uses Gemini text-embedding-004 to vectorize code snippets and documentation chunks into 768-dimensional space.",
          "Invokes Supabase RPC 'match_project_code' to evaluate cosine distance with high performance IVFFlat indexing.",
          "Augments system prompt with grounded file chunks to eliminate hallucination in developer queries."
        ],
        securityStatus: "Clean. Zero exposed secrets. Supabase Row Level Security enforced.",
        optimization: "Recommendation: Cache frequent embedding searches in-memory to reduce latency from 41ms to ~8ms."
      });
    }, 550);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Workspace Header */}
      <div className="card-dark p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 font-mono text-xs uppercase bg-[#1A1A1A] text-[#D5FF00] border border-[#2B2B2B]">
                WORKSPACE 02 // DEVELOPMENT
              </span>
              <span className="text-xs font-mono text-[#777777]">GITHUB EXPLORER & IN-APP API TESTER</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-[#F4F3ED] uppercase tracking-tight">
              Source Code & API Suite
            </h1>
            <p className="text-sm text-[#888888] max-w-2xl font-normal leading-relaxed">
              Unified source code inspection with AST intelligence and an integrated Postman-style API client. No external tool switching required.
            </p>
          </div>

          {/* Sub-workspace Switcher */}
          <div className="flex items-center gap-2 bg-[#141414] p-1.5 border border-[#242424]">
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeTab === 'code'
                  ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold'
                  : 'text-[#888888] hover:text-[#F4F3ED]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Source Code & AST</span>
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeTab === 'api'
                  ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold'
                  : 'text-[#888888] hover:text-[#F4F3ED]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>API Testing (Postman-style)</span>
            </button>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="mt-8 pt-6 border-t border-[#1C1C1C] grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-[#141414] border border-[#242424]">
            <span className="text-[10px] font-mono uppercase text-[#777777]">Test Coverage</span>
            <div className="font-display text-2xl text-[#D5FF00] mt-1">92.4%</div>
            <span className="text-[10px] font-mono text-[#555555]">18/18 Unit Tests Passing</span>
          </div>
          <div className="p-4 bg-[#141414] border border-[#242424]">
            <span className="text-[10px] font-mono uppercase text-[#777777]">Security Grade</span>
            <div className="font-display text-2xl text-[#F4F3ED] mt-1">0 CVE</div>
            <span className="text-[10px] font-mono text-[#555555]">Supabase RLS Enforced</span>
          </div>
          <div className="p-4 bg-[#141414] border border-[#242424]">
            <span className="text-[10px] font-mono uppercase text-[#777777]">Avg API Latency</span>
            <div className="font-display text-2xl text-[#D5FF00] mt-1">38ms</div>
            <span className="text-[10px] font-mono text-[#555555]">In-app client execution</span>
          </div>
          <div className="p-4 bg-[#141414] border border-[#242424]">
            <span className="text-[10px] font-mono uppercase text-[#777777]">Continuous Context</span>
            <div className="font-display text-2xl text-[#F4F3ED] mt-1">98.4%</div>
            <span className="text-[10px] font-mono text-[#555555]">pgvector indexed</span>
          </div>
        </div>
      </div>

      {/* VIEW 1: Code Viewer */}
      {activeTab === 'code' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* File Explorer Tree */}
          <div className="card-dark p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222222]">
              <span className="font-display text-lg uppercase tracking-wider text-[#F4F3ED] flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-[#D5FF00]" /> Repo Files
              </span>
              <span className="text-[10px] font-mono text-[#555555]">main</span>
            </div>

            <div className="space-y-1.5">
              {projectFiles.map((file, idx) => {
                const isSelected = selectedFile.name === file.name;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedFile(file);
                      setAiExplanation(null);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 font-mono text-xs flex items-center justify-between transition-colors ${
                      isSelected 
                        ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold' 
                        : 'text-[#888888] hover:text-[#F4F3ED] hover:bg-[#161616]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileCode className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{file.name}</span>
                    </div>
                    <span className="text-[10px] shrink-0 opacity-70">{file.lines}L</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C1C1C] text-xs font-mono text-[#666666] space-y-1">
              <div>BRANCH: <span className="text-[#F4F3ED]">main (synced)</span></div>
              <div>COMMIT: <span className="text-[#D5FF00]">8f3a9d</span></div>
            </div>
          </div>

          {/* Editor & AI AST Explainer */}
          <div className="lg:col-span-3 space-y-6">
            <div className="card-dark overflow-hidden">
              
              {/* Top Editor Bar */}
              <div className="px-5 py-3 bg-[#161616] border-b border-[#222222] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D5FF00]"></span>
                  <span className="font-mono text-xs text-[#F4F3ED] font-bold">{selectedFile.path}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0A0A0A] text-[#777777] border border-[#222222]">
                    {selectedFile.language}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#202020] hover:bg-[#2A2A2A] text-[#F4F3ED] font-mono text-xs transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-[#D5FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={handleExplainCode}
                    disabled={isExplaining}
                    className="neon-btn px-4 py-1.5 font-grotesk text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isExplaining ? 'Analyzing AST...' : 'Explain with AI'}</span>
                  </button>
                </div>
              </div>

              {/* Code Pre Area with generous padding */}
              <div className="p-6 font-mono text-xs bg-[#070707] max-h-[460px] overflow-x-auto leading-relaxed">
                <pre className="text-[#CCCCCC]">
                  {selectedFile.content.split('\n').map((line, idx) => (
                    <div key={idx} className="table-row hover:bg-[#121212]">
                      <span className="table-cell pr-6 text-[#444444] select-none text-right w-10">
                        {idx + 1}
                      </span>
                      <span className="table-cell whitespace-pre">
                        {line}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>

            </div>

            {/* AI Explanation Result */}
            {aiExplanation && (
              <div className="card-dark p-6 sm:p-7 border-[#D5FF00] space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-[#222222] pb-3">
                  <span className="font-mono text-xs text-[#D5FF00] font-bold uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> AI Project Intelligence Analysis ({aiExplanation.file})
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#1C1C1C] text-[#888888]">
                    AST GROUNDED
                  </span>
                </div>

                <p className="text-sm text-[#F4F3ED] font-medium">{aiExplanation.summary}</p>
                
                <ul className="text-xs text-[#888888] space-y-2 list-disc list-inside">
                  {aiExplanation.keyPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>

                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#1C1C1C]">
                  <div className="p-4 bg-[#0A0A0A] border border-[#222222]">
                    <span className="text-[10px] font-mono text-[#D5FF00] uppercase block mb-1">Security & Privacy</span>
                    <p className="text-xs text-[#888888]">{aiExplanation.securityStatus}</p>
                  </div>
                  <div className="p-4 bg-[#0A0A0A] border border-[#222222]">
                    <span className="text-[10px] font-mono text-[#D5FF00] uppercase block mb-1">Architecture Recommendation</span>
                    <p className="text-xs text-[#888888]">{aiExplanation.optimization}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* VIEW 2: In-App API Testing (Postman-style) */}
      {activeTab === 'api' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Preset Endpoints */}
          <div className="card-dark p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222222]">
              <span className="font-display text-lg uppercase tracking-wider text-[#F4F3ED] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#D5FF00]" /> Endpoints
              </span>
              <span className="text-[10px] font-mono text-[#555555]">v1 REST</span>
            </div>

            <div className="space-y-2.5">
              {mockApiEndpoints.map((ep, idx) => {
                const isSelected = selectedEndpoint.path === ep.path && selectedEndpoint.method === ep.method;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectEndpoint(ep)}
                    className={`w-full text-left p-3.5 transition-colors border ${
                      isSelected 
                        ? 'bg-[#181818] border-[#D5FF00] text-[#F4F3ED]' 
                        : 'bg-[#121212] border-[#222222] text-[#888888] hover:text-[#F4F3ED]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 font-mono font-bold text-[10px] ${
                        ep.method === 'GET' ? 'bg-[#182818] text-[#D5FF00]' : 'bg-[#202028] text-white'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="font-grotesk text-xs font-bold text-[#F4F3ED] truncate">{ep.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#555555] block truncate">{ep.path}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Request / Response Panel */}
          <div className="lg:col-span-2 card-dark p-6 sm:p-7 space-y-6">
            
            {/* URL bar */}
            <div className="flex items-center gap-2">
              <select
                value={httpMethod}
                onChange={(e) => setHttpMethod(e.target.value)}
                className="px-3.5 py-2.5 bg-[#141414] border border-[#2A2A2A] font-mono text-xs font-bold text-[#D5FF00] focus:outline-none"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>

              <div className="flex-1 flex items-center bg-[#141414] border border-[#2A2A2A] px-4 py-2.5 font-mono text-xs">
                <span className="text-[#555555] mr-1">http://localhost:5000</span>
                <input
                  type="text"
                  value={endpointUrl}
                  onChange={(e) => setEndpointUrl(e.target.value)}
                  className="flex-1 bg-transparent text-[#F4F3ED] focus:outline-none"
                />
              </div>

              <button
                onClick={handleSendApiRequest}
                disabled={isLoadingApi}
                className="neon-btn px-6 py-2.5 font-grotesk text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                {isLoadingApi ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>{isLoadingApi ? 'Testing...' : 'Send'}</span>
              </button>
            </div>

            {/* Request Body */}
            {httpMethod !== 'GET' && (
              <div>
                <span className="text-xs font-mono text-[#777777] block mb-2">Request Body (application/json)</span>
                <textarea
                  rows={4}
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                  className="w-full bg-[#070707] border border-[#222222] p-4 font-mono text-xs text-[#CCCCCC] focus:outline-none focus:border-[#D5FF00]"
                />
              </div>
            )}

            {/* Response Console */}
            <div className="pt-6 border-t border-[#1C1C1C]">
              <div className="flex items-center justify-between pb-3 mb-3 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-[#888888]">Status:</span>
                  <span className="px-2 py-0.5 bg-[#141E14] text-[#D5FF00] font-bold border border-[#223B22]">
                    {apiResponse.status} {apiResponse.statusText}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[#666666]">
                  <span>Latency: <b className="text-[#D5FF00]">{apiResponse.time}</b></span>
                  <span>Size: <b className="text-[#F4F3ED]">{apiResponse.size}</b></span>
                </div>
              </div>

              <pre className="p-4 bg-[#070707] border border-[#202020] font-mono text-xs text-[#D5FF00]/90 overflow-x-auto max-h-64 leading-relaxed">
                {JSON.stringify(apiResponse.body, null, 2)}
              </pre>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
