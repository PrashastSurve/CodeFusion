# CodeFusion — AI-Powered Software Development Intelligence Platform

An intelligent, unified software development workspace designed to eliminate tool fragmentation (VS Code, GitHub, Trello, Slack, Postman, AI assistants) with continuous project understanding.

---

## 👥 Project Team (Academic Year 2026)

| Sr. | Team Member | Roll No. | Enrollment No. | Project Focus |
|:---:|:---|:---:|:---:|:---|
| 1 | **Mayank Thakur** | 2402 | 24111000167 | Full Stack & System Architecture |
| 2 | **Kinjal Mhabdi** | 2434 | 24111000364 | AI Intelligence & Prompt Pipeline |
| 3 | **Urjita Shikhare** | 2463 | 24111000394 | Frontend & Workspace Experience |
| 4 | **Prashast Surve** | 2464 | 24111000395 | Backend & Supabase Database |

---

## ⚡ How to Run the Frontend

You have two ways to run and explore CodeFusion:

### Option 1: Live Vite React Development Server (Recommended)
```bash
# Open terminal in this folder:
cd "C:\Users\PRASHASTA\OneDrive\Desktop\CodeFusion"

# Run the dev server:
npm run dev
```
Then open `http://localhost:5173` in Google Chrome or Microsoft Edge.

### Option 2: Instant Standalone Preview (No Terminal / Zero-Install)
Simply double-click:
`C:\Users\PRASHASTA\OneDrive\Desktop\CodeFusion\preview.html`
It runs directly in any modern browser using CDN React and Tailwind!

---

## 🏛️ Project Architecture & Workspaces

Directly implemented according to **Section 8 (Proposed Solution)** of your Project Synopsis:

### 1. Communication Workspace
- **AI Task Manager**: Kanban board (Backlog, In Progress, AI & Peer Review, Done) with automatic AI subtask decomposition and complexity estimates.
- **Team Presence & Collaboration**: Real-time team active states (Mayank, Kinjal, Urjita, Prashast) and simulated team audio huddle.
- **Continuous Activity Stream**: Live feed of commits, tests, and AI context index sync.
- **Sprint 3 Velocity & Burndown**: Progress tracking for milestone completion.

### 2. Development Workspace
- **Project Health Dashboard**: Test coverage (92.4%), vulnerability audit (0 found), and context sync metrics.
- **GitHub Integration & Code Viewer**: Multi-file explorer with line numbers and **"Explain with AI"** AST code analysis.
- **In-App API Testing (Postman-style)**: Full HTTP method selector (GET, POST, PUT, DELETE), header & body editor, and real-time response viewer with latency timers.

### 3. Creative Workspace
- **AI Documentation Generator**: One-click generation of `README.md` and `openapi.json` Swagger specifications.
- **AI Presentation Builder**: Complete 4-slide academic defense presentation deck with speaker notes and navigation controls.
- **AI Architecture Suggestions**: Visual 3-tier system diagram (Client -> API Gateway -> AI Engine & pgvector) with optimization tips.
- **AI-Guided Learning**: Interactive tutorials for students explaining RAG, Vector Embeddings, and Supabase RLS.

### 4. Core Innovation: AI Project Intelligence Engine
- Omnipresent floating/docked AI Copilot (`Ctrl+K`).
- Grounded in 14 source files and Supabase `pgvector` embeddings to answer project-specific queries without hallucinations.

---

## 🛠️ Technology Stack
- **Frontend**: React 19, Tailwind CSS, Lucide Icons, Vite
- **Backend**: Node.js & Express
- **Database**: Supabase, PostgreSQL, `pgvector` extension
- **AI & LLM**: Gemini API, Groq API, Continuous RAG Pipeline
- **Deployment**: Vercel
