/* =====================================================================
 * MỤC LỤC KHÓA HỌC CLAUDE (tiếng Việt) – bám theo Anthropic Academy
 * ---------------------------------------------------------------------
 * Chương trình gốc: Anthropic Academy – https://academy.claude.com/
 *   (Claude 101, AI Fluency, AI capabilities and limitations,
 *    Building with the Claude API, Introduction to MCP, MCP Advanced,
 *    Introduction to agent skills, Claude Code 101, Claude Code in action,
 *    Introduction to evals, Building effective human-agent teams …)
 * Tài liệu kỹ thuật gốc: platform.claude.com/docs, code.claude.com/docs,
 *   modelcontextprotocol.io, anthropic.com/engineering.
 *
 * - Mỗi bài có: id, file, title (EN), vi (tiếng Việt), module, domains (= track),
 *   icons ("emoji|Nhãn"), topics, academy (khóa Academy tương ứng), docs (link gốc).
 * - ready: true  => bài đã được gen (lệnh /claude-bai tự bật cờ này).
 * - games: true  => đã có trang trò chơi ghi nhớ games/<file>.
 * - Anthropic hiện KHÔNG công bố kỳ thi chứng chỉ kèm tỉ trọng domain
 *   (kiểm tra 2026-11-20). Vì vậy "domains" ở đây là 4 TRACK học;
 *   pct = tỉ lệ số bài thuộc track đó trong lộ trình (tự tính ở cuối file),
 *   KHÔNG phải tỉ trọng đề thi.
 * ===================================================================== */
window.EXAM = {
  code: "Claude Course",
  name: "Học Claude theo chương trình Anthropic Academy",
  vi: "Bộ tài liệu tiếng Việt từ cơ bản đến nâng cao",
  guide: "https://academy.claude.com/",
  page: "https://academy.claude.com/all",
  domains: {
    F: { en: "AI Fluency & Using Claude", vi: "Năng lực AI & sử dụng Claude", pct: 0, color: "#3B6FB6" },
    P: { en: "Prompt Engineering & Evals", vi: "Kỹ thuật prompt & đánh giá", pct: 0, color: "#A35DD6" },
    B: { en: "Building with the Claude API", vi: "Xây dựng ứng dụng với Claude API", pct: 0, color: "#D97757" },
    A: { en: "Agents, MCP & Claude Code", vi: "Agent, MCP & Claude Code", pct: 0, color: "#4C9A5A" }
  }
};

window.MODULES = [
  { id: 0, en: "Foundations: AI Fluency & Claude 101",  vi: "Nền tảng: năng lực AI & làm quen Claude", icon: "✳️|Foundations" },
  { id: 1, en: "Claude API Fundamentals",               vi: "Nền tảng Claude API",                     icon: "🔌|API" },
  { id: 2, en: "Prompt Engineering & Evaluation",       vi: "Kỹ thuật prompt & đánh giá prompt",       icon: "✍️|Prompt" },
  { id: 3, en: "Tool Use & Retrieval (RAG)",            vi: "Sử dụng công cụ & truy xuất tri thức",    icon: "🛠️|Tools" },
  { id: 4, en: "Features of Claude",                    vi: "Các tính năng nâng cao của Claude",       icon: "✨|Features" },
  { id: 5, en: "Model Context Protocol (MCP)",          vi: "Giao thức ngữ cảnh mô hình (MCP)",        icon: "🧩|MCP" },
  { id: 6, en: "Agents, Workflows & Skills",            vi: "Agent, workflow & Agent Skills",          icon: "🤖|Agents" },
  { id: 7, en: "Claude Code",                           vi: "Claude Code – lập trình cùng agent",      icon: "💻|Claude Code" },
  { id: 8, en: "Capstone & Review",                     vi: "Tổng kết & dự án cuối khóa",              icon: "🎓|Capstone" }
];

const P = "https://platform.claude.com/docs/en/";
const CC = "https://code.claude.com/docs/en/";
const AC = "https://academy.claude.com/courses/";
const MCP = "https://modelcontextprotocol.io/";

window.SYLLABUS = [
  /* ---------------- MODULE 0: FOUNDATIONS ---------------- */
  { id: 1, module: 0, file: "bai-01-gioi-thieu-claude.html", ready: true, games: true,
    title: "Meet Claude: Models, Products & Anthropic Academy",
    vi: "Làm quen Claude: họ mô hình, sản phẩm & lộ trình học",
    domains: ["F"], academy: "Claude 101",
    icons: ["✳️|Claude", "🧠|Opus", "⚡|Sonnet", "🍃|Haiku"],
    topics: ["Anthropic", "Claude model family", "Opus", "Sonnet", "Haiku", "Claude apps", "Claude Code", "Claude Developer Platform", "Constitutional AI"],
    docs: [
      { t: "Intro to Claude", u: P + "intro" },
      { t: "Models overview", u: "https://platform.claude.com/docs/en/models/overview" },
      { t: "Anthropic Academy – Claude 101", u: AC + "claude-101" }
    ] },
  { id: 2, module: 0, file: "bai-02-ai-fluency-4d.html", ready: true, games: true,
    title: "AI Fluency: The 4D Framework",
    vi: "Năng lực AI: khung 4D (Delegation, Description, Discernment, Diligence)",
    domains: ["F"], academy: "AI Fluency: Framework and foundations",
    icons: ["🧭|Delegation", "📝|Description", "🔍|Discernment", "🛡️|Diligence"],
    topics: ["AI Fluency", "Delegation", "Description", "Discernment", "Diligence", "Automation", "Augmentation", "Agency"],
    docs: [
      { t: "AI Fluency: Framework and foundations", u: AC + "ai-fluency-framework-foundations" },
      { t: "Anthropic Academy – All resources", u: "https://academy.claude.com/all" }
    ] },
  { id: 3, module: 0, file: "bai-03-nang-luc-va-gioi-han.html", ready: true, games: true,
    title: "AI Capabilities & Limitations",
    vi: "Năng lực và giới hạn của mô hình ngôn ngữ lớn",
    domains: ["F"], academy: "AI capabilities and limitations",
    icons: ["🔤|Tokens", "🪟|Context window", "🌫️|Hallucination", "📅|Knowledge cutoff"],
    topics: ["Large language model", "Token", "Context window", "Training data", "Knowledge cutoff", "Hallucination", "Reduce hallucinations"],
    docs: [
      { t: "AI capabilities and limitations", u: AC + "ai-capabilities-and-limitations" },
      { t: "Context windows", u: P + "build-with-claude/context-windows" },
      { t: "Reduce hallucinations", u: P + "test-and-evaluate/strengthen-guardrails/reduce-hallucinations" }
    ] },
  { id: 4, module: 0, file: "bai-04-claude-101.html", ready: true, games: true,
    title: "Claude 101: Everyday Work with Claude",
    vi: "Claude 101: dùng Claude trong công việc hằng ngày",
    domains: ["F"], academy: "Claude 101",
    icons: ["💬|Chat", "📁|Projects", "🖼️|Artifacts", "🔗|Connectors"],
    topics: ["Projects", "Artifacts", "File upload", "Web search", "Research", "Memory", "Connectors", "Styles"],
    docs: [
      { t: "Anthropic Academy – Claude 101", u: AC + "claude-101" },
      { t: "Claude Help Center", u: "https://support.claude.com/" }
    ] },
  { id: 5, module: 0, file: "bai-05-claude-trong-to-chuc.html", ready: true, games: true,
    title: "Claude at Work: Cowork, Claude Tag & Enterprise",
    vi: "Claude trong tổ chức: Cowork, Claude Tag & triển khai Enterprise",
    domains: ["F"], academy: "Introduction to Claude Cowork · Introduction to Claude Tag · Deploying Claude Enterprise with confidence",
    icons: ["🤝|Cowork", "🏷️|Claude Tag", "🏢|Enterprise", "🔐|Admin"],
    topics: ["Claude Cowork", "Claude Tag", "Slack", "Claude Enterprise", "Team plan", "SSO", "Admin controls", "Rollout"],
    docs: [
      { t: "Introduction to Claude Cowork", u: AC + "introduction-to-claude-cowork" },
      { t: "Introduction to Claude Tag", u: AC + "introduction-to-claude-tag" },
      { t: "Deploying Claude Enterprise with confidence", u: AC + "deploying-claude-enterprise-with-confidence" }
    ] },

  /* ---------------- MODULE 1: CLAUDE API FUNDAMENTALS ---------------- */
  { id: 6, module: 1, file: "bai-06-truy-cap-api.html", ready: true, games: true,
    title: "Accessing Claude with the API",
    vi: "Truy cập Claude qua API: API key, Console & request đầu tiên",
    domains: ["B"], academy: "Building with the Claude API · Claude Platform 101",
    icons: ["🔑|API key", "🖥️|Console", "📦|SDK", "📨|Messages API"],
    topics: ["Claude Console", "API key", "Workspaces", "Messages API", "Client SDKs", "Python SDK", "x-api-key", "anthropic-version"],
    docs: [
      { t: "Get started with Claude", u: P + "get-started" },
      { t: "API overview", u: P + "api/overview" },
      { t: "Client SDKs", u: "https://platform.claude.com/docs/en/cli-sdks-libraries/overview" },
      { t: "Building with the Claude API (Academy)", u: AC + "building-with-the-claude-api" }
    ] },
  { id: 7, module: 1, file: "bai-07-multi-turn-system-prompt.html", ready: true, games: true,
    title: "Multi-Turn Conversations & System Prompts",
    vi: "Hội thoại nhiều lượt & system prompt",
    domains: ["B", "P"], academy: "Building with the Claude API",
    icons: ["💬|Messages", "🔁|Multi-turn", "🎭|System prompt", "🧱|Content blocks"],
    topics: ["messages array", "user/assistant roles", "Stateless API", "Content blocks", "System prompt", "Role prompting", "Prefill"],
    docs: [
      { t: "Using the Messages API", u: P + "build-with-claude/working-with-messages" },
      { t: "Giving Claude a role with a system prompt", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices" },
      { t: "Messages API reference", u: "https://platform.claude.com/docs/en/api/messages/create" }
    ] },
  { id: 8, module: 1, file: "bai-08-tham-so-mo-hinh.html", ready: true, games: true,
    title: "Model Parameters: Temperature, max_tokens & Stop Reasons",
    vi: "Tham số mô hình: temperature, max_tokens, stop sequences & stop_reason",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["🌡️|Temperature", "📏|max_tokens", "⛔|stop_sequences", "🏁|stop_reason"],
    topics: ["temperature", "max_tokens", "stop_sequences", "stop_reason", "end_turn", "max_tokens stop", "usage", "top_p / top_k"],
    docs: [
      { t: "Messages API reference", u: "https://platform.claude.com/docs/en/api/messages/create" },
      { t: "Handling stop reasons", u: P + "build-with-claude/handling-stop-reasons" }
    ] },
  { id: 9, module: 1, file: "bai-09-streaming.html", ready: true, games: true,
    title: "Response Streaming",
    vi: "Streaming phản hồi (server-sent events)",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["🌊|Streaming", "📡|SSE", "⏱️|Latency", "🧩|Events"],
    topics: ["stream: true", "Server-sent events", "message_start", "content_block_delta", "message_stop", "Time to first token", "SDK stream helpers"],
    docs: [
      { t: "Streaming Messages", u: P + "build-with-claude/streaming" }
    ] },
  { id: 10, module: 1, file: "bai-10-structured-outputs.html", ready: true, games: true,
    title: "Structured Data & Structured Outputs",
    vi: "Dữ liệu có cấu trúc: JSON, prefill & structured outputs",
    domains: ["B", "P"], academy: "Building with the Claude API",
    icons: ["🧾|JSON", "📐|Schema", "✅|Validation", "🧱|Prefill"],
    topics: ["JSON output", "Structured outputs", "JSON schema", "Prefill", "Stop sequences", "Increase output consistency"],
    docs: [
      { t: "Structured outputs", u: P + "build-with-claude/structured-outputs" },
      { t: "Increase output consistency", u: P + "test-and-evaluate/strengthen-guardrails/increase-consistency" }
    ] },
  { id: 11, module: 1, file: "bai-11-chon-model-chi-phi.html", ready: true, games: true,
    title: "Choosing a Model: Pricing, Tokens, Rate Limits & Cloud Platforms",
    vi: "Chọn mô hình: giá, đếm token, rate limit & Claude trên Bedrock/Vertex AI",
    domains: ["B"], academy: "Building with the Claude API · Claude with Amazon Bedrock · Claude on Google Cloud",
    icons: ["⚖️|Model selection", "💲|Pricing", "🚦|Rate limits", "☁️|Cloud platforms"],
    topics: ["Choosing a model", "Pricing", "Input/output tokens", "Token counting", "Rate limits", "Usage tiers", "Amazon Bedrock", "Google Vertex AI"],
    docs: [
      { t: "Choosing the right model", u: P + "about-claude/models/choosing-a-model" },
      { t: "Pricing", u: P + "about-claude/pricing" },
      { t: "Token counting", u: P + "build-with-claude/token-counting" },
      { t: "Rate limits", u: P + "api/rate-limits" }
    ] },

  /* ---------------- MODULE 2: PROMPT ENGINEERING & EVAL ---------------- */
  { id: 12, module: 2, file: "bai-12-prompt-engineering-co-ban.html", ready: true, games: true,
    title: "Prompt Engineering: Be Clear, Direct & Specific",
    vi: "Kỹ thuật prompt: rõ ràng, trực tiếp & cụ thể",
    domains: ["P"], academy: "Building with the Claude API · Prompt engineering interactive tutorial",
    icons: ["🎯|Clear & direct", "🔬|Specific", "📋|Context", "🧪|Iterate"],
    topics: ["Prompt engineering overview", "Be clear and direct", "Be specific", "Golden rule", "Success criteria", "Prompt generator"],
    docs: [
      { t: "Prompt engineering overview", u: P + "build-with-claude/prompt-engineering/overview" },
      { t: "Be clear, direct, and detailed", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#be-clear-and-direct" },
      { t: "Claude prompting best practices", u: P + "build-with-claude/prompt-engineering/claude-prompting-best-practices" }
    ] },
  { id: 13, module: 2, file: "bai-13-xml-tags-examples.html", ready: true, games: true,
    title: "Structure with XML Tags & Providing Examples",
    vi: "Cấu trúc prompt bằng thẻ XML & cung cấp ví dụ (multishot)",
    domains: ["P"], academy: "Building with the Claude API",
    icons: ["🏷️|XML tags", "📚|Examples", "🧩|Templates", "🔣|Variables"],
    topics: ["XML tags", "Multishot prompting", "Few-shot", "Prompt templates", "Variables", "Long context tips"],
    docs: [
      { t: "Use XML tags to structure your prompts", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#structure-prompts-with-xml-tags" },
      { t: "Use examples (multishot prompting)", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#use-examples-effectively" },
      { t: "Long context prompting tips", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#long-context-prompting" }
    ] },
  { id: 14, module: 2, file: "bai-14-chain-of-thought-chaining.html", ready: true, games: true,
    title: "Chain of Thought, Prompt Chaining & Prefill",
    vi: "Chain of thought, chuỗi prompt & điền trước phản hồi",
    domains: ["P"], academy: "Building with the Claude API · Real world prompting",
    icons: ["🧠|Chain of thought", "⛓️|Prompt chaining", "🧱|Prefill", "🌍|Real world"],
    topics: ["Chain of thought", "Let Claude think", "Prompt chaining", "Prefill Claude's response", "Real world prompting"],
    docs: [
      { t: "Let Claude think (chain of thought)", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#leverage-thinking-and-interleaved-thinking-capabilities" },
      { t: "Chain complex prompts", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#chain-complex-prompts" },
      { t: "Anthropic courses (GitHub) – Real world prompting", u: "https://github.com/anthropics/courses/tree/master/real_world_prompting" }
    ] },
  { id: 15, module: 2, file: "bai-15-prompt-evaluation.html", ready: true, games: true,
    title: "Prompt Evaluation: Success Criteria & Test Datasets",
    vi: "Đánh giá prompt: tiêu chí thành công & bộ dữ liệu kiểm thử",
    domains: ["P"], academy: "Building with the Claude API · Introduction to evals",
    icons: ["📊|Evals", "🎯|Success criteria", "🗃️|Test dataset", "🔁|Eval workflow"],
    topics: ["Define success criteria", "Eval workflow", "Generating test datasets", "Edge cases", "Running the eval", "Evaluation tool (Console)"],
    docs: [
      { t: "Define your success criteria", u: "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests" },
      { t: "Create strong empirical evaluations", u: P + "test-and-evaluate/develop-tests" },
      { t: "Introduction to evals (Academy)", u: AC + "introduction-to-evals" }
    ] },
  { id: 16, module: 2, file: "bai-16-grading-guardrails.html", ready: true, games: true,
    title: "Code-Based & Model-Based Grading, Guardrails",
    vi: "Chấm điểm bằng code & bằng mô hình (LLM-as-judge), guardrails",
    domains: ["P"], academy: "Building with the Claude API · Prompt evaluations",
    icons: ["🧮|Code grading", "⚖️|Model grading", "🛡️|Guardrails", "🚫|Jailbreaks"],
    topics: ["Code-based grading", "Model-based grading", "LLM-as-judge", "Rubric", "Human grading", "Mitigate jailbreaks", "Reduce prompt leak"],
    docs: [
      { t: "Create strong empirical evaluations", u: P + "test-and-evaluate/develop-tests" },
      { t: "Mitigate jailbreaks and prompt injections", u: P + "test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks" },
      { t: "Anthropic courses (GitHub) – Prompt evaluations", u: "https://github.com/anthropics/courses/tree/master/prompt_evaluations" }
    ] },

  /* ---------------- MODULE 3: TOOL USE & RAG ---------------- */
  { id: 17, module: 3, file: "bai-17-tool-use-co-ban.html", ready: true, games: true,
    title: "Introducing Tool Use: Tool Schemas & Message Blocks",
    vi: "Giới thiệu tool use: định nghĩa tool & các khối tool_use / tool_result",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["🛠️|Tool use", "📐|input_schema", "📤|tool_use", "📥|tool_result"],
    topics: ["Tool use overview", "Client tools", "Tool definition", "input_schema", "tool_use block", "tool_result block", "stop_reason: tool_use"],
    docs: [
      { t: "Tool use with Claude", u: P + "agents-and-tools/tool-use/overview" },
      { t: "How to implement tool use", u: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools" }
    ] },
  { id: 18, module: 3, file: "bai-18-tool-use-nang-cao.html", ready: true, games: true,
    title: "Multi-Turn Tool Use, Multiple Tools & tool_choice",
    vi: "Tool use nhiều lượt, nhiều tool, tool_choice & fine-grained streaming",
    domains: ["B", "A"], academy: "Building with the Claude API",
    icons: ["🔁|Tool loop", "🧰|Multiple tools", "🎛️|tool_choice", "⚡|Parallel tools"],
    topics: ["Agentic loop", "Multiple tools", "Parallel tool use", "tool_choice", "Fine-grained tool streaming", "Tool errors (is_error)", "Writing good tool descriptions"],
    docs: [
      { t: "How to implement tool use", u: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools" },
      { t: "Fine-grained tool streaming", u: P + "agents-and-tools/tool-use/fine-grained-tool-streaming" },
      { t: "Writing effective tools for agents", u: "https://www.anthropic.com/engineering/writing-tools-for-agents" }
    ] },
  { id: 19, module: 3, file: "bai-19-server-tools.html", ready: true, games: true,
    title: "Built-in Tools: Web Search, Web Fetch, Code Execution & Text Editor",
    vi: "Tool dựng sẵn: web search, web fetch, code execution & text editor",
    domains: ["B", "A"], academy: "Building with the Claude API",
    icons: ["🌐|Web search", "📄|Web fetch", "🐍|Code execution", "✏️|Text editor"],
    topics: ["Server tools", "Web search tool", "Web fetch tool", "Code execution tool", "Text editor tool", "Computer use", "Client vs server tools"],
    docs: [
      { t: "Web search tool", u: P + "agents-and-tools/tool-use/web-search-tool" },
      { t: "Web fetch tool", u: P + "agents-and-tools/tool-use/web-fetch-tool" },
      { t: "Code execution tool", u: P + "agents-and-tools/tool-use/code-execution-tool" },
      { t: "Text editor tool", u: P + "agents-and-tools/tool-use/text-editor-tool" }
    ] },
  { id: 20, module: 3, file: "bai-20-rag-co-ban.html", ready: true, games: true,
    title: "Retrieval Augmented Generation: Chunking & Embeddings",
    vi: "RAG cơ bản: chia đoạn văn bản, embeddings & luồng RAG đầy đủ",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["📚|RAG", "✂️|Chunking", "🧬|Embeddings", "🗄️|Vector DB"],
    topics: ["Retrieval Augmented Generation", "Text chunking strategies", "Text embeddings", "Voyage AI", "Vector database", "Cosine similarity", "Full RAG flow"],
    docs: [
      { t: "Embeddings", u: P + "build-with-claude/embeddings" },
      { t: "Building with the Claude API – RAG and Agentic Search", u: AC + "building-with-the-claude-api" }
    ] },
  { id: 21, module: 3, file: "bai-21-hybrid-search-contextual-retrieval.html", ready: true, games: true,
    title: "Hybrid Search: BM25, Multi-Index RAG & Contextual Retrieval",
    vi: "Tìm kiếm lai: BM25, RAG đa chỉ mục & Contextual Retrieval",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["🔎|BM25", "🗂️|Multi-index", "🧷|Contextual retrieval", "🏆|Reranking"],
    topics: ["BM25 lexical search", "Semantic search", "Hybrid search", "Reciprocal rank fusion", "Multi-index RAG pipeline", "Contextual Retrieval", "Reranking"],
    docs: [
      { t: "Introducing Contextual Retrieval", u: "https://www.anthropic.com/news/contextual-retrieval" },
      { t: "Embeddings", u: P + "build-with-claude/embeddings" }
    ] },

  /* ---------------- MODULE 4: FEATURES OF CLAUDE ---------------- */
  { id: 22, module: 4, file: "bai-22-extended-thinking.html", ready: true, games: true,
    title: "Extended Thinking & Effort",
    vi: "Suy luận mở rộng (extended thinking) & mức nỗ lực",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["🧠|Extended thinking", "💭|Thinking blocks", "🎚️|Effort", "🔒|Redacted thinking"],
    topics: ["Extended thinking", "budget_tokens", "Thinking blocks", "Interleaved thinking", "Effort parameter", "Thinking with tool use"],
    docs: [
      { t: "Building with extended thinking", u: P + "build-with-claude/extended-thinking" },
      { t: "Extended thinking tips", u: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#leverage-thinking-and-interleaved-thinking-capabilities" },
      { t: "Effort", u: P + "build-with-claude/effort" }
    ] },
  { id: 23, module: 4, file: "bai-23-vision-pdf.html", ready: true, games: true,
    title: "Image & PDF Support",
    vi: "Xử lý hình ảnh (vision) & tài liệu PDF",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["🖼️|Vision", "📄|PDF", "📏|Image size", "🔢|Image tokens"],
    topics: ["Vision", "Image content block", "base64 / URL source", "Image size limits", "PDF support", "Document block"],
    docs: [
      { t: "Vision", u: P + "build-with-claude/vision" },
      { t: "PDF support", u: P + "build-with-claude/pdf-support" }
    ] },
  { id: 24, module: 4, file: "bai-24-citations.html", ready: true, games: true,
    title: "Citations & Search Results",
    vi: "Trích dẫn nguồn (citations) & khối kết quả tìm kiếm",
    domains: ["B", "P"], academy: "Building with the Claude API",
    icons: ["📑|Citations", "🔗|Sources", "✅|Grounding", "🔍|Search results"],
    topics: ["Citations", "Document citations", "char_location / page_location", "Search result content blocks", "Grounded answers"],
    docs: [
      { t: "Citations", u: P + "build-with-claude/citations" },
      { t: "Search results", u: P + "build-with-claude/search-results" }
    ] },
  { id: 25, module: 4, file: "bai-25-prompt-caching.html", ready: true, games: true,
    title: "Prompt Caching",
    vi: "Bộ nhớ đệm prompt (prompt caching)",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["🗃️|Prompt caching", "📍|cache_control", "⏳|TTL", "💰|Cost saving"],
    topics: ["Prompt caching", "cache_control", "Cache breakpoints", "Cache TTL", "cache_creation_input_tokens", "cache_read_input_tokens", "Minimum cacheable length"],
    docs: [
      { t: "Prompt caching", u: P + "build-with-claude/prompt-caching" }
    ] },
  { id: 26, module: 4, file: "bai-26-files-batch-context.html", ready: true, games: true,
    title: "Files API, Batch Processing & Context Management",
    vi: "Files API, xử lý theo lô (Batch) & quản lý ngữ cảnh",
    domains: ["B"], academy: "Building with the Claude API",
    icons: ["📂|Files API", "📦|Message Batches", "🧹|Context editing", "🧮|Cost"],
    topics: ["Files API", "file_id", "Message Batches API", "Batch discount", "Context editing", "Compaction", "Memory tool"],
    docs: [
      { t: "Files API", u: P + "build-with-claude/files" },
      { t: "Batch processing", u: P + "build-with-claude/batch-processing" },
      { t: "Context editing", u: P + "build-with-claude/context-editing" }
    ] },

  /* ---------------- MODULE 5: MCP ---------------- */
  { id: 27, module: 5, file: "bai-27-gioi-thieu-mcp.html", ready: true, games: true,
    title: "Introducing the Model Context Protocol",
    vi: "Giới thiệu MCP: kiến trúc host – client – server",
    domains: ["A"], academy: "Introduction to Model Context Protocol",
    icons: ["🧩|MCP", "🏠|Host", "🔌|Client", "🗄️|Server"],
    topics: ["Model Context Protocol", "Host", "MCP client", "MCP server", "Tools / Resources / Prompts", "JSON-RPC", "Transports (stdio, Streamable HTTP)"],
    docs: [
      { t: "MCP – Introduction", u: MCP + "docs/getting-started/intro" },
      { t: "MCP – Architecture overview", u: MCP + "docs/learn/architecture" },
      { t: "Introduction to Model Context Protocol (Academy)", u: AC + "introduction-to-model-context-protocol" }
    ] },
  { id: 28, module: 5, file: "bai-28-xay-dung-mcp-server.html", ready: true, games: true,
    title: "Building an MCP Server: Tools, Resources & Prompts",
    vi: "Xây dựng MCP server: tools, resources, prompts & MCP Inspector",
    domains: ["A"], academy: "Introduction to Model Context Protocol",
    icons: ["🛠️|Tools", "📄|Resources", "💬|Prompts", "🔍|Inspector"],
    topics: ["Python SDK (FastMCP)", "Defining tools", "Defining resources", "Resource templates", "Defining prompts", "MCP Inspector"],
    docs: [
      { t: "MCP – Build an MCP server", u: MCP + "docs/develop/build-server" },
      { t: "MCP – Server concepts", u: MCP + "docs/learn/server-concepts" }
    ] },
  { id: 29, module: 5, file: "bai-29-mcp-client-tich-hop.html", ready: true, games: true,
    title: "Building an MCP Client & Connecting MCP to Claude",
    vi: "Xây dựng MCP client & kết nối MCP vào Claude (API, Claude Desktop, Claude Code)",
    domains: ["A"], academy: "Introduction to Model Context Protocol",
    icons: ["🔌|Client", "🖥️|Claude Desktop", "🌐|MCP connector", "📡|Remote MCP"],
    topics: ["Implementing a client", "ClientSession", "Client concepts", "MCP connector (Messages API)", "Remote MCP servers", "Claude Desktop config"],
    docs: [
      { t: "MCP – Build an MCP client", u: MCP + "docs/develop/build-client" },
      { t: "MCP – Client concepts", u: MCP + "docs/learn/client-concepts" },
      { t: "MCP connector (Claude API)", u: P + "agents-and-tools/mcp-connector" }
    ] },
  { id: 30, module: 5, file: "bai-30-mcp-nang-cao.html", ready: true, games: true,
    title: "MCP Advanced: Sampling, Notifications, Roots & Transports",
    vi: "MCP nâng cao: sampling, notifications, roots, transport & xác thực",
    domains: ["A"], academy: "MCP: Advanced Topics",
    icons: ["🎲|Sampling", "🔔|Notifications", "🌳|Roots", "🔐|Authorization"],
    topics: ["Sampling", "Elicitation", "Progress notifications", "Logging", "Roots", "stdio vs Streamable HTTP", "Authorization (OAuth)"],
    docs: [
      { t: "MCP – Specification", u: MCP + "specification/latest" },
      { t: "MCP – Transports", u: MCP + "specification/latest/basic/transports" },
      { t: "MCP – Authorization", u: MCP + "specification/latest/basic/authorization" }
    ] },

  /* ---------------- MODULE 6: AGENTS ---------------- */
  { id: 31, module: 6, file: "bai-31-workflows-vs-agents.html", ready: true, games: true,
    title: "Workflows vs Agents: Chaining, Routing & Parallelization",
    vi: "Workflow và agent: chaining, routing, parallelization, orchestrator-workers",
    domains: ["A"], academy: "Building with the Claude API – Agents and workflows",
    icons: ["⛓️|Chaining", "🔀|Routing", "⚡|Parallelization", "🎼|Orchestrator"],
    topics: ["Augmented LLM", "Prompt chaining", "Routing", "Parallelization", "Orchestrator-workers", "Evaluator-optimizer", "Workflows vs agents"],
    docs: [
      { t: "Building effective agents", u: "https://www.anthropic.com/engineering/building-effective-agents" },
      { t: "Building with the Claude API (Academy)", u: AC + "building-with-the-claude-api" }
    ] },
  { id: 32, module: 6, file: "bai-32-agents-context-engineering.html", ready: true, games: true,
    title: "Agents & Tools: Environment Inspection & Context Engineering",
    vi: "Agent & tool: quan sát môi trường & kỹ thuật quản lý ngữ cảnh",
    domains: ["A"], academy: "Building with the Claude API – Agents and workflows",
    icons: ["🤖|Agent loop", "👀|Environment", "🧠|Context engineering", "🧾|Memory"],
    topics: ["Agent loop", "Environment inspection", "Context engineering", "Context rot", "Compaction", "Structured note-taking", "Sub-agents"],
    docs: [
      { t: "Effective context engineering for AI agents", u: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" },
      { t: "Building effective agents", u: "https://www.anthropic.com/engineering/building-effective-agents" }
    ] },
  { id: 33, module: 6, file: "bai-33-claude-agent-sdk.html", ready: true, games: true,
    title: "Claude Agent SDK",
    vi: "Claude Agent SDK: xây agent tùy biến",
    domains: ["A"], academy: "Claude Platform 101",
    icons: ["🧰|Agent SDK", "🐍|Python", "🟦|TypeScript", "🔒|Permissions"],
    topics: ["Claude Agent SDK", "query()", "Built-in tools", "Custom tools", "Permissions", "Sessions", "Subagents", "Hooks"],
    docs: [
      { t: "Agent SDK overview", u: "https://code.claude.com/docs/en/agent-sdk/overview" },
      { t: "Building agents with the Claude Agent SDK", u: "https://claude.com/blog/building-agents-with-the-claude-agent-sdk" }
    ] },
  { id: 34, module: 6, file: "bai-34-agent-skills.html", ready: true, games: true,
    title: "Introduction to Agent Skills",
    vi: "Agent Skills: đóng gói chuyên môn cho Claude",
    domains: ["A"], academy: "Introduction to agent skills",
    icons: ["🎒|Skills", "📄|SKILL.md", "🪜|Progressive disclosure", "📦|Bundled files"],
    topics: ["Agent Skills", "SKILL.md", "Frontmatter (name, description)", "Progressive disclosure", "Skills in API / Claude apps / Claude Code", "Skill authoring best practices"],
    docs: [
      { t: "Agent Skills overview", u: P + "agents-and-tools/agent-skills/overview" },
      { t: "Skill authoring best practices", u: P + "agents-and-tools/agent-skills/best-practices" },
      { t: "Introduction to agent skills (Academy)", u: AC + "introduction-to-agent-skills" }
    ] },
  { id: 35, module: 6, file: "bai-35-human-agent-teams.html", ready: true, games: true,
    title: "Building Effective Human-Agent Teams",
    vi: "Phối hợp người – agent hiệu quả & an toàn",
    domains: ["A", "F"], academy: "Building effective human-agent teams · AI Fluency for builders",
    icons: ["🤝|Human-agent team", "🧑‍⚖️|Oversight", "🛡️|Safety", "📈|Trust"],
    topics: ["Human-in-the-loop", "Delegation to agents", "Oversight", "Checkpoints", "Prompt injection risk", "Responsible use"],
    docs: [
      { t: "Building effective human-agent teams (Academy)", u: AC + "building-effective-human-agent-teams" },
      { t: "AI Fluency for builders (Academy)", u: AC + "ai-fluency-for-builders" }
    ] },

  /* ---------------- MODULE 7: CLAUDE CODE ---------------- */
  { id: 36, module: 7, file: "bai-36-claude-code-101.html", ready: true, games: true,
    title: "Claude Code 101: Setup & How It Works",
    vi: "Claude Code 101: cài đặt, cách hoạt động & permission modes",
    domains: ["A"], academy: "Claude Code 101",
    icons: ["💻|Claude Code", "⌨️|CLI", "🧩|IDE", "🔒|Permissions"],
    topics: ["Claude Code overview", "Installation", "Agentic loop", "Tools (Read/Edit/Bash)", "Permission modes", "Plan mode", "IDE integrations"],
    docs: [
      { t: "Claude Code overview", u: CC + "overview" },
      { t: "Quickstart", u: CC + "quickstart" },
      { t: "Claude Code 101 (Academy)", u: AC + "claude-code-101" }
    ] },
  { id: 37, module: 7, file: "bai-37-claude-md-context.html", ready: true, games: true,
    title: "CLAUDE.md, Memory & Context Management",
    vi: "CLAUDE.md, bộ nhớ dự án & quản lý ngữ cảnh",
    domains: ["A"], academy: "Claude Code in action",
    icons: ["📘|CLAUDE.md", "🧠|Memory", "🧹|/compact", "🗺️|Plan mode"],
    topics: ["CLAUDE.md", "Memory hierarchy", "/init", "/clear", "/compact", "Plan mode", "Thinking modes", "Common workflows"],
    docs: [
      { t: "Manage Claude's memory", u: CC + "memory" },
      { t: "Common workflows", u: CC + "common-workflows" },
      { t: "Claude Code best practices", u: "https://code.claude.com/docs/en/best-practices" }
    ] },
  { id: 38, module: 7, file: "bai-38-commands-subagents-skills.html", ready: true, games: true,
    title: "Custom Commands, Subagents & Skills in Claude Code",
    vi: "Slash command tùy biến, subagent & skill trong Claude Code",
    domains: ["A"], academy: "Claude Code in action · Introduction to agent skills",
    icons: ["⌘|Slash commands", "👥|Subagents", "🎒|Skills", "🔌|Plugins"],
    topics: ["Custom slash commands", "$ARGUMENTS", "Subagents", ".claude/agents", "Skills", "Plugins", "Output styles"],
    docs: [
      { t: "Slash commands", u: "https://code.claude.com/docs/en/commands" },
      { t: "Subagents", u: CC + "sub-agents" },
      { t: "Agent Skills in Claude Code", u: CC + "skills" },
      { t: "Plugins", u: CC + "plugins" }
    ] },
  { id: 39, module: 7, file: "bai-39-hooks-mcp-settings.html", ready: true, games: true,
    title: "Hooks, MCP Servers & Settings",
    vi: "Hooks, MCP server & cấu hình (settings) trong Claude Code",
    domains: ["A"], academy: "Claude Code in action",
    icons: ["🪝|Hooks", "🧩|MCP", "⚙️|settings.json", "🔐|Security"],
    topics: ["Hooks (PreToolUse, PostToolUse…)", "claude mcp add", "MCP scopes", "settings.json", "Permissions allow/deny", "Security"],
    docs: [
      { t: "Hooks reference", u: CC + "hooks" },
      { t: "Connect Claude Code to tools via MCP", u: CC + "mcp" },
      { t: "Settings", u: CC + "settings" },
      { t: "Security", u: CC + "security" }
    ] },
  { id: 40, module: 7, file: "bai-40-claude-code-in-action.html", ready: true, games: true,
    title: "Claude Code in Action: GitHub, Headless Mode & Automation",
    vi: "Claude Code thực chiến: GitHub Actions, headless mode & tự động hóa",
    domains: ["A"], academy: "Claude Code in action",
    icons: ["🐙|GitHub Actions", "🤖|Headless", "🔁|CI/CD", "🌲|Worktrees"],
    topics: ["GitHub Actions", "Headless mode (claude -p)", "CI/CD", "Git worktrees", "Parallel sessions", "Code review"],
    docs: [
      { t: "Claude Code GitHub Actions", u: CC + "github-actions" },
      { t: "Headless mode", u: CC + "headless" },
      { t: "Claude Code in action (Academy)", u: AC + "claude-code-in-action" }
    ] },

  /* ---------------- MODULE 8: CAPSTONE ---------------- */
  { id: 41, module: 8, file: "bai-41-tong-ket-du-an-cuoi.html", ready: true, games: true,
    title: "Capstone: Designing a Production Claude Application",
    vi: "Dự án cuối khóa: thiết kế ứng dụng Claude cho môi trường production",
    domains: ["B", "A", "P", "F"], academy: "Building with the Claude API – Final assessment",
    icons: ["🏗️|Architecture", "✅|Checklist", "📈|Evals", "🚀|Production"],
    topics: ["Reference architecture", "Choosing features", "Cost & latency optimization", "Evals in CI", "Guardrails", "Production checklist"],
    docs: [
      { t: "Building effective agents", u: "https://www.anthropic.com/engineering/building-effective-agents" },
      { t: "Reducing latency", u: P + "test-and-evaluate/strengthen-guardrails/reduce-latency" },
      { t: "Building with the Claude API (Academy)", u: AC + "building-with-the-claude-api" }
    ] }
];

/* pct của mỗi track = % số bài có track đó là track chính (domains[0]) */
(function () {
  const ds = window.EXAM.domains, n = window.SYLLABUS.length;
  Object.keys(ds).forEach((k) => {
    ds[k].pct = Math.round(window.SYLLABUS.filter((l) => l.domains[0] === k).length / n * 1000) / 10;
  });
})();
