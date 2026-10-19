export const projectMetadata = {
  title: "CodeFusion",
  tagline: "An AI-Powered Software Development Intelligence Platform",
  version: "v1.0.4-beta",
  repository: "codefusion/dev-intelligence-core",
  branch: "main",
  syncStatus: "Synced with GitHub (commit 8f3a9d)",
  healthScore: 94,
  contextIndexStatus: "98.4% Indexed (14 Files, 6 APIs, DB Schema)",
  team: [
    { name: "Mayank Thakur", roll: "2402", enrollment: "24111000167", role: "Full Stack & System Architecture", status: "Active in API Testing", avatar: "MT", color: "from-blue-500 to-cyan-500" },
    { name: "Kinjal Mhabdi", roll: "2434", enrollment: "24111000364", role: "AI Intelligence & Prompt Pipeline", status: "Reviewing RAG Engine", avatar: "KM", color: "from-purple-500 to-pink-500" },
    { name: "Urjita Shikhare", roll: "2463", enrollment: "24111000394", role: "Frontend & Workspace Experience", status: "Designing Presentation Deck", avatar: "US", color: "from-emerald-500 to-teal-500" },
    { name: "Prashast Surve", roll: "2464", enrollment: "24111000395", role: "Backend & Supabase Database", status: "Optimizing pgvector search", avatar: "PS", color: "from-amber-500 to-orange-500" }
  ]
};

export const initialTasks = [
  {
    id: "TASK-101",
    title: "Implement Supabase pgvector embedding search for RAG",
    column: "in-progress",
    priority: "High",
    complexity: "High (Score 8.5/10)",
    assignee: "Prashast Surve",
    estimatedHours: "6h",
    tags: ["Backend", "AI / RAG", "Database"],
    subtasks: [
      { text: "Configure pgvector extension in Supabase PostgreSQL", done: true },
      { text: "Create similarity match function in SQL", done: true },
      { text: "Implement batch embedding generator with Gemini API", done: false },
      { text: "Add fallback caching in Redis", done: false }
    ],
    aiInsight: "Recommended chunk size: 512 tokens with 10% overlap to preserve semantic context across complex TypeScript files."
  },
  {
    id: "TASK-102",
    title: "Construct Interactive Postman-style API Testing Suite",
    column: "done",
    priority: "Medium",
    complexity: "Medium (Score 5.8/10)",
    assignee: "Mayank Thakur",
    estimatedHours: "4h",
    tags: ["Frontend", "API", "Testing"],
    subtasks: [
      { text: "Build HTTP request configuration panel", done: true },
      { text: "Format JSON response viewer with latency timer", done: true },
      { text: "Preload common project endpoints", done: true }
    ],
    aiInsight: "Endpoint telemetry shows average response time of 38ms across local mock services."
  },
  {
    id: "TASK-103",
    title: "Develop AI Documentation & README Auto-Generator",
    column: "in-progress",
    priority: "Urgent",
    complexity: "Medium (Score 6.2/10)",
    assignee: "Kinjal Mhabdi",
    estimatedHours: "5h",
    tags: ["Creative", "Docs", "Gemini API"],
    subtasks: [
      { text: "Parse JSDoc and TypeScript AST signatures", done: true },
      { text: "Create Markdown generator template", done: true },
      { text: "Add export to OpenAPI v3.0 JSON specification", done: false }
    ],
    aiInsight: "Automated docs sync will save approximately 3.4 developer hours per sprint."
  },
  {
    id: "TASK-104",
    title: "Build Presentation Slide Deck Builder for Academic Defense",
    column: "in-progress",
    priority: "Medium",
    complexity: "Low (Score 3.9/10)",
    assignee: "Urjita Shikhare",
    estimatedHours: "3h",
    tags: ["Creative", "Presentation", "UI"],
    subtasks: [
      { text: "Design presentation slide template", done: true },
      { text: "Sync project synopsis content into interactive slides", done: true },
      { text: "Add speaker notes & fullscreen toggle", done: false }
    ],
    aiInsight: "Slide structure aligns directly with academic evaluation guidelines."
  },
  {
    id: "TASK-105",
    title: "Desktop Application Packaging via Tauri framework",
    column: "backlog",
    priority: "Low",
    complexity: "High (Score 7.8/10)",
    assignee: "Mayank Thakur",
    estimatedHours: "8h",
    tags: ["Future Scope", "Tauri", "Desktop"],
    subtasks: [
      { text: "Initialize Tauri 2.0 Rust wrapper", done: false },
      { text: "Bundle local SQLite cache for offline mode", done: false }
    ],
    aiInsight: "Planned for Future Scope (Section 13 of Project Synopsis)."
  },
  {
    id: "TASK-106",
    title: "Code Intelligence Line-by-Line Context Explainer",
    column: "review",
    priority: "High",
    complexity: "High (Score 8.1/10)",
    assignee: "Kinjal Mhabdi",
    estimatedHours: "6h",
    tags: ["Intelligence Engine", "Code Viewer"],
    subtasks: [
      { text: "Hook AST parser into Monaco/Code view", done: true },
      { text: "Integrate Groq ultra-low latency model for inline tokens", done: true },
      { text: "Review prompt safety constraints", done: false }
    ],
    aiInsight: "Ready for peer review. Groq latency tested at 180ms time-to-first-token."
  }
];

export const projectFiles = [
  {
    name: "ragEngine.ts",
    path: "src/intelligence/ragEngine.ts",
    language: "typescript",
    lines: 38,
    status: "Modified 12m ago",
    content: `import { GoogleGenAI } from '@google/genai';
import { supabase } from '../lib/supabaseClient';

export interface CodeContextChunk {
  filePath: string;
  content: string;
  tokens: number;
  similarity: number;
}

export class ProjectIntelligenceEngine {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  /**
   * Retrieves relevant code & doc chunks using vector similarity
   */
  async retrieveContext(query: string, matchThreshold = 0.82): Promise<CodeContextChunk[]> {
    const embedding = await this.ai.embedContent({
      model: "text-embedding-004",
      content: query
    });

    const { data: chunks, error } = await supabase.rpc('match_project_code', {
      query_embedding: embedding.values,
      match_threshold: matchThreshold,
      match_count: 5
    });

    if (error) throw new Error(\`RAG Retrieval failed: \${error.message}\`);
    return chunks;
  }

  async answerProjectQuery(query: string) {
    const context = await this.retrieveContext(query);
    const prompt = \`You are CodeFusion Intelligence Engine. Using this project context:
\${context.map(c => \`// File: \${c.filePath}\\n\${c.content}\`).join('\\n\\n')}
Answer this developer question: \${query}\`;

    const response = await this.ai.generateContent({
      model: "gemini-1.5-pro",
      contents: prompt
    });

    return { answer: response.text, citations: context.map(c => c.filePath) };
  }
}`
  },
  {
    name: "authController.ts",
    path: "src/api/v1/authController.ts",
    language: "typescript",
    lines: 30,
    status: "Passing Tests (100%)",
    content: `import { Request, Response } from 'express';
import { supabase } from '../../lib/supabaseClient';

export async function loginDeveloper(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return res.status(401).json({ error: error.message });
  }

  return res.status(200).json({
    message: "Developer authenticated successfully.",
    user: {
      id: data.user.id,
      email: data.user.email,
      role: "Engineering Team"
    },
    token: data.session.access_token
  });
}`
  },
  {
    name: "schema.sql",
    path: "supabase/migrations/schema.sql",
    language: "sql",
    lines: 28,
    status: "Synced with DB",
    content: `-- Enable vector extensions for CodeFusion AI Engine
CREATE EXTENSION IF NOT EXISTS vector;

-- Project embeddings table for Code & Documentation
CREATE TABLE project_embeddings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_path TEXT NOT NULL,
  chunk_content TEXT NOT NULL,
  embedding vector(768),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cosine distance match index
CREATE INDEX on project_embeddings 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Query procedure
CREATE OR REPLACE FUNCTION match_project_code (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
RETURNS TABLE (id uuid, file_path text, content text, similarity float)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT pe.id, pe.file_path, pe.chunk_content,
         1 - (pe.embedding <=> query_embedding) as similarity
  FROM project_embeddings pe
  WHERE 1 - (pe.embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;`
  },
  {
    name: "geminiService.ts",
    path: "src/services/geminiService.ts",
    language: "typescript",
    lines: 24,
    status: "Healthy",
    content: `import { GoogleGenAI } from '@google/genai';

export const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || 'AIzaSy_DEMO_KEY'
});

export async function explainCodeBlock(code: string, language: string) {
  const prompt = \`Analyze this \${language} code from CodeFusion platform:
\\\`\\\`\\\`\${language}
\${code}
\\\`\\\`\\\`
Provide:
1. Executive architectural summary
2. Key functional logic
3. Potential optimizations or edge cases\`;

  const response = await gemini.generateContent({
    model: 'gemini-1.5-flash',
    contents: prompt
  });

  return response.text;
}`
  }
];

export const mockApiEndpoints = [
  {
    method: "POST",
    path: "/api/v1/intelligence/query",
    name: "Project RAG Query",
    description: "Queries the continuous intelligence engine using semantic code context",
    defaultBody: JSON.stringify({
      query: "How does the Supabase vector matching function authenticate requests?",
      topK: 3,
      includeCitations: true
    }, null, 2),
    mockResponse: {
      status: 200,
      statusText: "OK",
      time: "41ms",
      size: "1.4 KB",
      body: {
        success: true,
        query: "How does the Supabase vector matching function authenticate requests?",
        engine: "CodeFusion-RAG-v1",
        sources: [
          "src/intelligence/ragEngine.ts (Score: 0.94)",
          "supabase/migrations/schema.sql (Score: 0.89)"
        ],
        answer: "Authentication is managed prior to vector retrieval via Supabase Auth JWT verification in authController.ts. The PostgreSQL function 'match_project_code' runs under Row Level Security (RLS), restricting embedding reads strictly to authorized project contributors."
      }
    }
  },
  {
    method: "POST",
    path: "/api/v1/auth/login",
    name: "Developer Login",
    description: "Authenticates team member and issues session token",
    defaultBody: JSON.stringify({
      email: "prashast@codefusion.dev",
      password: "••••••••••••"
    }, null, 2),
    mockResponse: {
      status: 200,
      statusText: "OK",
      time: "24ms",
      size: "820 B",
      body: {
        message: "Developer authenticated successfully.",
        user: {
          id: "usr_9970293323",
          name: "Prashast Surve",
          role: "Core Developer",
          team: "CodeFusion Team"
        },
        token: "eyJh...cf_jwt_token_valid"
      }
    }
  },
  {
    method: "GET",
    path: "/api/v1/analytics/health",
    name: "System & Architecture Health",
    description: "Returns aggregated code metrics, test suite status and context coverage",
    defaultBody: "",
    mockResponse: {
      status: 200,
      statusText: "OK",
      time: "18ms",
      size: "1.1 KB",
      body: {
        project: "CodeFusion",
        overallScore: 94,
        metrics: {
          testCoverage: "92.4%",
          codeDuplication: "1.1%",
          cyclomaticComplexity: "Low (B+)",
          vulnerabilities: 0
        },
        activeWorkspaces: ["Communication", "Development", "Creative"],
        teamOnline: 4
      }
    }
  },
  {
    method: "POST",
    path: "/api/v1/docs/generate",
    name: "Auto-Generate Docs",
    description: "Triggers automated Markdown / OpenAPI generation for current module",
    defaultBody: JSON.stringify({
      targetModule: "src/intelligence/ragEngine.ts",
      format: "markdown",
      includeExamples: true
    }, null, 2),
    mockResponse: {
      status: 200,
      statusText: "OK",
      time: "115ms",
      size: "2.8 KB",
      body: {
        success: true,
        generatedAt: new Date().toISOString(),
        format: "markdown",
        linesGenerated: 84,
        preview: "# ProjectIntelligenceEngine\\n\\nContinuous RAG integration for CodeFusion repository indexing."
      }
    }
  }
];

export const presentationSlides = [
  {
    id: 1,
    title: "CodeFusion",
    subtitle: "An AI-Powered Software Development Intelligence Platform",
    badge: "PROJECT SYNOPSIS — ACADEMIC DEFENSE",
    content: [
      { type: "highlight", label: "Centralized Ecosystem", val: "Unifies Coding, Docs, Collaboration & Testing" },
      { type: "highlight", label: "Core Innovation", val: "AI Project Intelligence Engine with continuous RAG" },
      { type: "highlight", label: "Privacy-First", val: "Repository isolation with secure Supabase RLS" }
    ],
    teamList: [
      { name: "Mayank Thakur", roll: "2402", enroll: "24111000167" },
      { name: "Kinjal Mhabdi", roll: "2434", enroll: "24111000364" },
      { name: "Urjita Shikhare", roll: "2463", enroll: "24111000394" },
      { name: "Prashast Surve", roll: "2464", enroll: "24111000395" }
    ],
    notes: "Welcome the evaluators and introduce the team. Highlight that CodeFusion addresses developer fragmentation across modern tools."
  },
  {
    id: 2,
    title: "Problem Statement & Research Gap",
    subtitle: "The Cost of Context Switching in Modern Software Teams",
    badge: "SECTION 4 & 6: PROBLEM & GAP",
    content: [
      { type: "bullet", title: "Fragmented Toolchain", desc: "Developers switch 1200+ times daily between VS Code, GitHub, Trello, Slack, Postman, and disparate AI prompts." },
      { type: "bullet", title: "Stateless AI Limitations", desc: "Existing AI assistants are ephemeral prompt-response tools that lack continuous understanding of the entire codebase and its dependencies." },
      { type: "bullet", title: "Knowledge Silos", desc: "Documentation quickly drifts out of sync with deployed API routes and database schemas, causing onboarding friction." }
    ],
    metricBox: { label: "Productivity Loss in Context Switching", val: "Up to 40% daily engineer focus" },
    notes: "Demonstrate why traditional LLMs fail when they don't have living context of the full codebase AST and project tasks."
  },
  {
    id: 3,
    title: "Three Intelligent Workspaces",
    subtitle: "Modular Architecture for End-to-End Engineering",
    badge: "SECTION 8: PROPOSED SOLUTION",
    workspaces: [
      {
        name: "1. Communication Workspace",
        items: ["AI Task Manager with auto-breakdown", "Team Collaboration & Presence", "Activity Stream & Project Timeline", "Sprint velocity & burndown tracking"]
      },
      {
        name: "2. Development Workspace",
        items: ["Project Health Dashboard", "GitHub Integration & Multi-file Tree", "Syntax-highlighted Code Viewer", "Integrated In-App API Testing (Postman-like)"]
      },
      {
        name: "3. Creative Workspace",
        items: ["AI Documentation & README Generator", "AI Slide Presentation Builder", "AI Architecture Suggestions & Bottleneck Audit", "AI-guided Learning for students"]
      }
    ],
    notes: "Explain how all three workspaces share the continuous Project Intelligence Engine state."
  },
  {
    id: 4,
    title: "Technology Stack & Future Scope",
    subtitle: "Built with Modern, Scalable Technologies",
    badge: "SECTION 9 & 13: STACK & ROADMAP",
    techColumns: [
      { category: "Frontend", items: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons"] },
      { category: "Backend & Data", items: ["Node.js / Express", "Supabase", "PostgreSQL", "pgvector"] },
      { category: "AI & Inference", items: ["Gemini API", "Groq API (Ultra-low latency)", "RAG Pipeline"] },
      { category: "Future Scope", items: ["Tauri Desktop App", "Mobile Companion App", "VS Code Extension", "CI/CD Monitoring"] }
    ],
    notes: "Conclude with deployment on Vercel and the roadmap for desktop Tauri packaging."
  }
];

export const learningModules = [
  {
    id: "rag-concept",
    title: "How RAG (Retrieval-Augmented Generation) Works in CodeFusion",
    difficulty: "Intermediate",
    category: "AI Architecture",
    summary: "Understand how CodeFusion continuously reads your codebase, generates vector embeddings, and provides context to Gemini.",
    steps: [
      { title: "1. AST Code Chunking", desc: "CodeFusion parses your source files (.ts, .jsx, .sql) into logical function/module chunks rather than arbitrary character splits." },
      { title: "2. Vector Embeddings", desc: "Each chunk is passed to Gemini text-embedding-004, transforming code into a high-dimensional mathematical vector (768 dimensions)." },
      { title: "3. Cosine Similarity Matching", desc: "When you ask a question or run an audit, Supabase pgvector calculates cosine distance to find the top 5 most relevant code passages in milliseconds." },
      { title: "4. Grounded Prompt Synthesis", desc: "The AI answers using only verified code excerpts, completely preventing hallucinations." }
    ],
    codeSample: `// Cosine similarity in Supabase pgvector
SELECT file_path, chunk_content,
       1 - (embedding <=> query_vector) AS relevance
FROM project_embeddings
WHERE 1 - (embedding <=> query_vector) > 0.80
ORDER BY relevance DESC
LIMIT 4;`
  },
  {
    id: "jwt-auth",
    title: "Secure Developer Authentication Flow with Supabase",
    difficulty: "Beginner",
    category: "Security & Auth",
    summary: "Deep dive into stateless JWT authentication, session refresh cycles, and Row Level Security (RLS).",
    steps: [
      { title: "1. Credential Submission", desc: "Developer signs in via email/password or GitHub OAuth." },
      { title: "2. JWT Token Issuance", desc: "Supabase verifies credentials and returns an encrypted JSON Web Token containing the user ID and role claims." },
      { title: "3. Database RLS Enforcement", desc: "Every database query attaches the JWT in the Authorization header. PostgreSQL RLS policies verify project membership before returning rows." }
    ],
    codeSample: `// Supabase RLS Policy for CodeFusion
CREATE POLICY "Allow team members to read project data"
ON project_embeddings
FOR SELECT
USING (auth.uid() IN (SELECT user_id FROM project_members));`
  }
];
