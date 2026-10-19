import React, { useState } from 'react';
import { 
  CheckSquare, 
  Clock, 
  Users, 
  Sparkles, 
  Plus, 
  Filter, 
  ChevronRight, 
  GitCommit, 
  CheckCircle2, 
  Radio, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { initialTasks, projectMetadata } from '../data/mockProjectData';

export default function CommunicationWorkspace({ onOpenCopilot }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedAssignee, setSelectedAssignee] = useState('All');
  const [aiBreakdownTask, setAiBreakdownTask] = useState(null);
  const [huddleActive, setHuddleActive] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const columns = [
    { id: 'backlog', title: 'Sprint Backlog', tag: '01' },
    { id: 'in-progress', title: 'In Progress', tag: '02' },
    { id: 'review', title: 'AI & Peer Review', tag: '03' },
    { id: 'done', title: 'Completed', tag: '04' }
  ];

  const filteredTasks = selectedAssignee === 'All' 
    ? tasks 
    : tasks.filter(t => t.assignee.toLowerCase().includes(selectedAssignee.toLowerCase()));

  const handleToggleSubtask = (taskId, sIdx) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const updated = [...t.subtasks];
        updated[sIdx] = { ...updated[sIdx], done: !updated[sIdx].done };
        return { ...t, subtasks: updated };
      }
      return t;
    }));
  };

  const handleMoveColumn = (taskId, direction) => {
    const colOrder = ['backlog', 'in-progress', 'review', 'done'];
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const currIdx = colOrder.indexOf(t.column);
        const nextIdx = direction === 'next' ? Math.min(colOrder.length - 1, currIdx + 1) : Math.max(0, currIdx - 1);
        return { ...t, column: colOrder[nextIdx] };
      }
      return t;
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: `TASK-${100 + tasks.length + 1}`,
      title: newTaskTitle,
      column: 'backlog',
      priority: 'Medium',
      assignee: 'Prashast Surve',
      tags: ['Sprint 3', 'Engineering'],
      subtasks: [
        { text: 'Analyze dependencies and AST schema impact', done: false },
        { text: 'Verify Supabase RLS security policies', done: false }
      ],
      aiInsight: 'Task automatically analyzed and indexed into CodeFusion Project Intelligence Engine.'
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Workspace Header Banner */}
      <div className="card-dark p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-none font-mono text-xs uppercase bg-[#1A1A1A] text-[#D5FF00] border border-[#2B2B2B]">
                WORKSPACE 01 // COMMUNICATION
              </span>
              <span className="text-xs font-mono text-[#777777]">TEAM SYNC & AI TASK ENGINE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-[#F4F3ED] uppercase tracking-tight">
              AI Task Manager & Team Sync
            </h1>
            <p className="text-sm text-[#888888] max-w-2xl font-normal leading-relaxed">
              Eliminates the friction of juggling Trello and Slack. Tasks are continuously synchronized with codebase AST and commit status.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setHuddleActive(!huddleActive)}
              className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs uppercase tracking-wider border transition-all ${
                huddleActive 
                  ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold border-[#D5FF00]' 
                  : 'bg-[#141414] text-[#888888] border-[#2A2A2A] hover:text-[#F4F3ED]'
              }`}
            >
              <Radio className={`w-3.5 h-3.5 ${huddleActive ? 'animate-pulse' : ''}`} />
              <span>{huddleActive ? 'Huddle Active (4/4)' : 'Start Huddle'}</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="neon-btn px-5 py-2.5 font-grotesk text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>New Task</span>
            </button>
          </div>
        </div>

        {/* Team Presence Strip */}
        <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#777777] uppercase flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#D5FF00]" /> Active Engineers:
            </span>
            {projectMetadata.team.map((m, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#141414] border border-[#242424] text-xs font-mono"
              >
                <span className={`w-2 h-2 rounded-full ${huddleActive ? 'bg-[#D5FF00] animate-ping' : 'bg-[#D5FF00]'}`}></span>
                <span className="text-[#F4F3ED] font-semibold">{m.name.split(' ')[0]}</span>
                <span className="text-[10px] text-[#666666] hidden sm:inline">({m.status})</span>
              </div>
            ))}
          </div>

          {/* Filter */}
          <div className="flex items-center gap-1 bg-[#141414] p-1 border border-[#242424] text-xs font-mono">
            <span className="text-[#666666] px-2">FILTER:</span>
            {['All', 'Mayank', 'Kinjal', 'Urjita', 'Prashast'].map((name) => (
              <button
                key={name}
                onClick={() => setSelectedAssignee(name)}
                className={`px-2.5 py-1 text-xs transition-colors ${
                  selectedAssignee === name 
                    ? 'bg-[#D5FF00] text-[#0A0A0A] font-bold' 
                    : 'text-[#888888] hover:text-[#F4F3ED]'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {columns.map((col) => {
          const colTasks = filteredTasks.filter(t => t.column === col.id);
          return (
            <div key={col.id} className="card-dark p-5 flex flex-col min-h-[520px]">
              {/* Column Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#222222]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#D5FF00]">[{col.tag}]</span>
                  <span className="font-display text-xl uppercase tracking-wider text-[#F4F3ED]">
                    {col.title}
                  </span>
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#1C1C1C] text-[#888888]">
                  {colTasks.length}
                </span>
              </div>

              {/* Task Items */}
              <div className="space-y-4 flex-1 overflow-y-auto">
                {colTasks.length === 0 ? (
                  <div className="h-32 border border-dashed border-[#222222] flex items-center justify-center text-xs font-mono text-[#555555]">
                    No tasks in lane
                  </div>
                ) : (
                  colTasks.map((task) => (
                    <div 
                      key={task.id}
                      className="bg-[#161616] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#D5FF00]/40 p-5 transition-all group"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#777777] mb-2.5">
                        <span>{task.id}</span>
                        <span className="text-[#D5FF00] font-semibold">{task.priority}</span>
                      </div>

                      <h4 className="font-grotesk text-sm font-bold text-[#F4F3ED] leading-snug mb-3 group-hover:text-[#D5FF00] transition-colors">
                        {task.title}
                      </h4>

                      {/* AI Project Intelligence Insight */}
                      {task.aiInsight && (
                        <div className="mb-3.5 p-3 bg-[#0A0A0A] border-l-2 border-[#D5FF00] text-xs text-[#999999] leading-relaxed">
                          <span className="text-[#D5FF00] font-mono block text-[10px] mb-1">AI ENGINE INSIGHT //</span>
                          {task.aiInsight}
                        </div>
                      )}

                      {/* Subtasks */}
                      <div className="space-y-2 mb-4 bg-[#0F0F0F] p-3 border border-[#202020]">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#777777]">
                          <span>Subtasks ({task.subtasks.filter(s => s.done).length}/{task.subtasks.length})</span>
                          <button
                            onClick={() => setAiBreakdownTask(task)}
                            className="text-[#D5FF00] hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3" /> Breakdown
                          </button>
                        </div>
                        {task.subtasks.map((st, sIdx) => (
                          <div 
                            key={sIdx}
                            onClick={() => handleToggleSubtask(task.id, sIdx)}
                            className="flex items-center gap-2 cursor-pointer text-xs text-[#888888] hover:text-[#F4F3ED] transition-colors"
                          >
                            <input 
                              type="checkbox" 
                              checked={st.done} 
                              readOnly
                              className="accent-[#D5FF00] cursor-pointer"
                            />
                            <span className={st.done ? 'line-through text-[#555555]' : ''}>
                              {st.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#222222] text-xs font-mono text-[#777777]">
                        <span className="text-[#F4F3ED]">{task.assignee}</span>
                        <div className="flex items-center gap-1">
                          {col.id !== 'backlog' && (
                            <button
                              onClick={() => handleMoveColumn(task.id, 'prev')}
                              className="px-2 py-0.5 bg-[#202020] hover:bg-[#2A2A2A] text-[#F4F3ED] text-[10px]"
                            >
                              ←
                            </button>
                          )}
                          {col.id !== 'done' && (
                            <button
                              onClick={() => handleMoveColumn(task.id, 'next')}
                              className="px-2 py-0.5 bg-[#D5FF00] hover:bg-white text-[#0A0A0A] font-bold text-[10px]"
                            >
                              →
                            </button>
                          )}
                        </div>
                      </div>

                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Activity Timeline & Burndown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-dark p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222222]">
            <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F3ED]">
              Continuous Activity Stream
            </h3>
            <span className="font-mono text-xs text-[#D5FF00]">● LIVE SYNC</span>
          </div>

          <div className="space-y-3">
            {[
              { author: "Prashast Surve", act: "Pushed 3 commits to branch", target: "feature/pgvector-rag", time: "14m ago" },
              { author: "CodeFusion AI Engine", act: "Indexed AST context for", target: "src/api/v1/authController.ts", time: "32m ago" },
              { author: "Mayank Thakur", act: "Executed API suite in", target: "In-App API Tester (18/18 passed)", time: "1h ago" },
              { author: "Kinjal Mhabdi", act: "Generated documentation for", target: "README.md & OpenAPI Spec", time: "2h ago" }
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 bg-[#141414] border border-[#222222] text-xs">
                <div className="w-2 h-2 rounded-full bg-[#D5FF00]"></div>
                <div className="flex-1 font-mono">
                  <span className="font-bold text-[#F4F3ED]">{a.author} </span>
                  <span className="text-[#888888]">{a.act} </span>
                  <span className="text-[#D5FF00]">{a.target}</span>
                </div>
                <span className="text-[10px] font-mono text-[#555555]">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-dark p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222222]">
              <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F3ED]">
                Sprint Velocity
              </h3>
              <span className="font-mono text-xs text-[#D5FF00]">82% COMPLETE</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#888888]">Tasks Delivered</span>
                  <span className="text-[#F4F3ED] font-bold">18 / 22</span>
                </div>
                <div className="w-full h-2 bg-[#202020]">
                  <div className="h-full bg-[#D5FF00] w-[82%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#888888]">RAG Context Coverage</span>
                  <span className="text-[#D5FF00] font-bold">98.4%</span>
                </div>
                <div className="w-full h-2 bg-[#202020]">
                  <div className="h-full bg-[#D5FF00] w-[98.4%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#0F0F0F] border border-[#222222] text-xs font-mono text-[#888888]">
            <span className="text-[#D5FF00] font-bold block mb-1">ACADEMIC DEFENSE READY:</span>
            All 3 workspaces functioning with continuous Supabase pgvector context.
          </div>
        </div>
      </div>

      {/* AI Breakdown Modal */}
      {aiBreakdownTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="card-dark max-w-lg w-full p-6 sm:p-8 space-y-4 border-[#D5FF00]">
            <div className="flex items-center justify-between border-b border-[#222222] pb-3">
              <span className="font-mono text-xs text-[#D5FF00]">AI SUBTASK ENGINE</span>
              <button onClick={() => setAiBreakdownTask(null)} className="text-[#777777] hover:text-[#F4F3ED]">✕</button>
            </div>
            <h3 className="font-grotesk text-lg font-bold text-[#F4F3ED]">{aiBreakdownTask.title}</h3>
            <p className="text-xs text-[#888888] leading-relaxed">{aiBreakdownTask.aiInsight}</p>
            <div className="space-y-2 pt-2">
              {aiBreakdownTask.subtasks.map((st, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-[#161616] text-xs text-[#F4F3ED] border border-[#242424]">
                  <CheckCircle2 className={`w-4 h-4 ${st.done ? 'text-[#D5FF00]' : 'text-[#555555]'}`} />
                  <span>{st.text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setAiBreakdownTask(null)}
              className="w-full py-3 neon-btn font-grotesk text-xs uppercase tracking-wider"
            >
              Done Reviewing
            </button>
          </div>
        </div>
      )}

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="card-dark max-w-md w-full p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F3ED]">Create Project Task</h3>
            <form onSubmit={handleAddTask} className="space-y-4">
              <input
                type="text"
                placeholder="e.g. Optimize Supabase pgvector cosine matching"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#2A2A2A] text-xs font-mono text-[#F4F3ED] focus:outline-none focus:border-[#D5FF00]"
                autoFocus
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-[#1C1C1C] text-xs font-mono text-[#888888]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 neon-btn font-grotesk text-xs uppercase"
                >
                  Add & Index
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
