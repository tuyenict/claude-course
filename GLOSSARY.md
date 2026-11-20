# Bảng thuật ngữ dùng chung (Claude Course)

Lệnh `/claude-bai` tra bảng này để dịch nhất quán và tự thêm thuật ngữ mới vào cuối.
Nguyên tắc: giữ nguyên thuật ngữ tiếng Anh như trong tài liệu Anthropic; cột "Nghĩa tiếng Việt" dùng trong `data-vi`.

| English term | Nghĩa tiếng Việt | Ghi chú |
|---|---|---|
| Large language model (LLM) | Mô hình ngôn ngữ lớn | |
| Prompt | Lời nhắc / câu lệnh đầu vào | Giữ nguyên "prompt" |
| Prompt engineering | Kỹ thuật viết prompt | |
| System prompt | Lời nhắc hệ thống | Tham số `system` |
| Token | Token (đơn vị văn bản) | Không dịch |
| Context window | Cửa sổ ngữ cảnh | Tổng token model xem được trong 1 lượt |
| Hallucination | Ảo giác (bịa thông tin) | |
| Knowledge cutoff | Mốc dữ liệu huấn luyện | |
| Agent | Tác tử (agent) | Thường giữ nguyên "agent" |
| Agentic loop | Vòng lặp agent | |
| Workflow | Quy trình (luồng cố định) | Đối lập với agent |
| Tool use | Sử dụng công cụ | |
| Tool definition | Định nghĩa công cụ | name, description, input_schema |
| Client tool | Công cụ phía client | Ứng dụng tự thực thi |
| Server tool | Công cụ phía server | Anthropic thực thi |
| Streaming | Truyền dữ liệu từng phần | |
| Structured outputs | Đầu ra có cấu trúc | |
| Evaluation (eval) | Đánh giá | |
| Grading | Chấm điểm | code-based / model-based |
| Retrieval Augmented Generation (RAG) | Sinh văn bản tăng cường truy xuất | |
| Embedding | Vector nhúng | |
| Chunking | Chia đoạn văn bản | |
| Extended thinking | Suy luận mở rộng | |
| Prompt caching | Bộ nhớ đệm prompt | |
| Citations | Trích dẫn nguồn | |
| Model Context Protocol (MCP) | Giao thức ngữ cảnh mô hình | |
| Guardrails | Hàng rào an toàn | |
| Jailbreak | Vượt rào (bẻ khóa) | |
| Prompt injection | Chèn lệnh độc hại vào prompt | |
| Human-in-the-loop | Có con người tham gia kiểm duyệt | |
| Public benefit corporation (PBC) | Công ty vì lợi ích cộng đồng | Loại hình công ty của Anthropic · bài 1 |
| Claude model family | Họ mô hình Claude | Fable, Opus, Sonnet, Haiku (Mythos giới hạn) · bài 1 |
| Model ID | Mã định danh mô hình | Tham số `model` · bài 1 |
| Pinned snapshot | Bản chụp cố định | Mọi model ID, kể cả không ngày · bài 1 |
| Alias | Bí danh | Trỏ tới ID có ngày (mô hình trước 4.6) · bài 1 |
| Max output | Số token đầu ra tối đa | bài 1 |
| Reliable knowledge cutoff | Mốc kiến thức đáng tin cậy | Khác Training data cutoff · bài 1 |
| Adaptive thinking | Suy luận thích ứng | Điều chỉnh bằng `effort` · bài 1 |
| Effort | Mức nỗ lực | Tham số `effort`: low…max · bài 1 |
| Retirement | Ngừng hỗ trợ (mô hình) | bài 1 |
| Models API | API liệt kê mô hình | max_input_tokens, max_tokens, capabilities, line · bài 1 |
| Claude Managed Agents | Agent được quản lý | Harness chạy trên hạ tầng Anthropic · bài 1 |
| Surface | Bề mặt sản phẩm | Terminal, IDE, desktop, web… · bài 1 |
| Agentic coding tool | Công cụ lập trình dạng agent | Claude Code · bài 1 |
| Constitutional AI | AI theo hiến pháp | bài 1 |
| Constitution | Hiến pháp (của Claude) | bài 1 |
| Hard constraints | Ràng buộc cứng | bài 1 |
| Anthropic Academy | Học viện Anthropic | academy.claude.com · bài 1 |
| AI Fluency | Năng lực AI | effective, efficient, ethical, safe · bài 2 |
| 4D Framework (The 4Ds) | Khung 4D | Delegation, Description, Discernment, Diligence · bài 2 |
| Human-AI interaction modes | Chế độ tương tác giữa người và AI | Automation / Augmentation / Agency · bài 2 |
| Automation | Tự động hóa | AI thực thi theo chỉ dẫn cụ thể · bài 2 |
| Augmentation | Tăng cường (cộng tác) | người và AI là thinking partners · bài 2 |
| Agency | Tự chủ (AI hành động thay mặt) | chế độ tương tác trong AI Fluency; khác với 'agent' · bài 2 |
| Delegation | Giao việc (phân công) | Problem/Platform Awareness, Task Delegation · bài 2 |
| Problem Awareness | Hiểu rõ vấn đề | bài 2 |
| Platform Awareness | Hiểu rõ nền tảng AI | bài 2 |
| Task Delegation | Phân chia tác vụ | bài 2 |
| Description | Mô tả (truyền đạt) | Product / Process / Performance · bài 2 |
| Product Description | Mô tả đầu ra | bài 2 |
| Process Description | Mô tả cách làm | bài 2 |
| Performance Description | Mô tả cách cư xử | bài 2 |
| Discernment | Thẩm định (đánh giá) | Product / Process / Performance · bài 2 |
| Product Discernment | Thẩm định đầu ra | bài 2 |
| Process Discernment | Thẩm định cách làm | bài 2 |
| Performance Discernment | Thẩm định cách cư xử | bài 2 |
| Description-Discernment loop | Vòng lặp mô tả – thẩm định | bài 2 |
| Diligence | Cẩn trọng (trách nhiệm) | Creation / Transparency / Deployment · bài 2 |
| Creation Diligence | Cẩn trọng khi tạo ra | bài 2 |
| Transparency Diligence | Minh bạch | bài 2 |
| Deployment Diligence | Cẩn trọng khi sử dụng/chia sẻ | bài 2 |
| AI Diligence Statement | Tuyên bố về việc dùng AI | bài 2 |
| AI Fluency Index | Chỉ số năng lực AI | báo cáo Anthropic, 11 hành vi · bài 2 |
| Observable behaviors | Hành vi quan sát được | bài 2 |
| Next-token prediction | Dự đoán token tiếp theo | Cơ chế sinh văn bản của LLM · bài 3 |
| Generative AI | AI tạo sinh | Khác classification / prediction AI · bài 3 |
| Pretraining | Tiền huấn luyện | bài 3 |
| Fine-tuning | Tinh chỉnh | bài 3 |
| Tokenizer | Bộ tách token | Tokenizer mới từ Claude Opus 4.7 · bài 3 |
| Working memory | Trí nhớ làm việc | Cách gọi context window trong Academy · bài 3 |
| Context rot | Suy giảm do ngữ cảnh quá dài | Recall giảm khi token tăng · bài 3 |
| Attention budget | Ngân sách chú ý | bài 3 |
| Token counting API | API đếm token | /v1/messages/count_tokens, miễn phí · bài 3 |
| Compaction | Nén ngữ cảnh | Server-side, beta · bài 3 |
| Context awareness | Nhận biết ngữ cảnh còn lại | bài 3 |
| Training data | Dữ liệu huấn luyện | bài 3 |
| Training data cutoff | Mốc dữ liệu huấn luyện | Phạm vi rộng hơn reliable knowledge cutoff; GLOSSARY hiện dịch 'Knowledge cutoff' giống vậy · bài 3 |
| Grounding | Neo vào nguồn | bài 3 |
| Best-of-N verification | Kiểm chứng qua N lần chạy | bài 3 |
| Steerability | Khả năng điều khiển | bài 3 |
| Sycophancy | Xu nịnh, chiều theo người dùng | Tác dụng phụ fine-tuning · bài 3 |
| Verbosity | Dài dòng | bài 3 |
| Over-caution | Thận trọng quá mức | bài 3 |
| Confidence calibration | Hiệu chỉnh độ tự tin | bài 3 |
| Reasoning drift | Suy luận trôi lệch | bài 3 |
| Projects | Dự án | Không gian làm việc có knowledge, instructions, memory riêng · bài 4 |
| Project knowledge | Kho tri thức dự án | bài 4 |
| Project instructions | Hướng dẫn dự án | bài 4 |
| Artifact | Sản phẩm độc lập | Mở bên cạnh chat; giữ nguyên 'artifact' · bài 4 |
| Web search | Tìm kiếm web | Claude apps; luôn có trích dẫn · bài 4 |
| Web fetch | Đọc nội dung URL | bài 4 |
| Research | Nghiên cứu chuyên sâu | Tính năng Claude apps, gói trả phí · bài 4 |
| Memory | Bộ nhớ | Lưu theo chủ đề giữa các chat · bài 4 |
| Chat search | Tìm trong lịch sử chat | bài 4 |
| Incognito chat | Chat ẩn danh | bài 4 |
| Connectors | Trình kết nối | Dựa trên MCP · bài 4 |
| Skills | Kỹ năng | Agent Skills; progressive disclosure · bài 4 |
| Profile instructions | Hướng dẫn cá nhân | Áp dụng mọi chat · bài 4 |
| Model selector | Bộ chọn mô hình | bài 4 |
| Least privilege | Đặc quyền tối thiểu | bài 4 |
| Claude Cowork | Cowork (giao tác vụ nhiều bước cho Claude) | Tên sản phẩm, giữ nguyên · bài 5 |
| Claude Tag | Claude Tag (Claude là thành viên trong Slack) | Tên sản phẩm, beta · bài 5 |
| Permission mode | Chế độ cấp quyền | Manual / Auto / Skip · bài 5 |
| Connector | Trình kết nối | Always allow / Needs approval / Always ask / Blocked · bài 5 |
| Scheduled task | Tác vụ định kỳ | Cowork, /schedule · bài 5 |
| Routine | Tác vụ thường trực | Claude Tag; tối đa 1 lần/giờ, UTC · bài 5 |
| Global instructions | Chỉ dẫn toàn cục | bài 5 |
| Folder instructions | Chỉ dẫn theo thư mục | bài 5 |
| Channel memory | Bộ nhớ của kênh | Claude Tag · bài 5 |
| Proactivity / ambient | Tính chủ động | Claude trả lời/nhắc việc khi không được tag · bài 5 |
| Plugin | Gói mở rộng | skills + connectors + sub-agents · bài 5 |
| Knowledge worker | Người lao động tri thức | bài 5 |
| Single sign-on (SSO) | Đăng nhập một lần | bài 5 |
| Identity provider (IdP) | Nhà cung cấp danh tính | Okta, Entra ID, OneLogin · bài 5 |
| SCIM | Đồng bộ thư mục người dùng | Enterprise · bài 5 |
| JIT provisioning | Cấp phát tức thời | bài 5 |
| Domain capture / claiming | Thu nhận tên miền | Không đảo ngược được · bài 5 |
| Custom role | Vai trò tùy chỉnh | Enterprise · bài 5 |
| Union rule | Quy tắc hợp quyền | bài 5 |
| Spend cap | Giới hạn chi tiêu | ceiling / group cap / override · bài 5 |
| Audit logs | Nhật ký kiểm toán | Chỉ metadata · bài 5 |
| Compliance API | API tuân thủ | Nội dung hội thoại, Enterprise · bài 5 |
| Data retention | Thời hạn lưu trữ dữ liệu | bài 5 |
| Rollout plan | Kế hoạch triển khai | bài 5 |
| Work-along companion | Tài liệu đồng hành | bài 5 |
| Agentic | Mang tính agent, tự hành động | bài 5 |
| Multiplayer | Nhiều người cùng tham gia | Claude Tag: một Claude cho cả channel · bài 5 |
| Destructive (tool) | Có tính phá hủy | bài 5 |
| Claude API | API của Claude | RESTful API tại https://api.anthropic.com · bài 6 |
| Claude Console | Bảng điều khiển dành cho nhà phát triển | platform.claude.com · bài 6 |
| Playground | Sân thử nghiệm prompt | Trong Console · bài 6 |
| Organization | Tổ chức | Đơn vị thanh toán & quản trị cao nhất · bài 6 |
| Workspace | Không gian làm việc | ID tiền tố wrkspc_ · bài 6 |
| Default Workspace | Workspace mặc định | Không đổi tên/archive/xóa · bài 6 |
| API key | Khóa API | sk-ant-api... · bài 6 |
| Personal key | Key cá nhân | bài 6 |
| Service account | Tài khoản dịch vụ | Cho workload tự động/dùng chung · bài 6 |
| Workspace key (legacy) | Key thuộc workspace (kiểu cũ) | bài 6 |
| Workload Identity Federation (WIF) | Liên kết danh tính workload | bài 6 |
| Key expiration | Thời hạn của key | bài 6 |
| Client SDK | Bộ thư viện client chính thức | bài 6 |
| Content block | Khối nội dung | bài 6 |
| Request ID | Mã định danh request | Header request-id · bài 6 |
| Rate limit | Giới hạn tốc độ | bài 6 |
| Spend limit | Giới hạn chi tiêu | bài 6 |
| Secrets manager | Trình quản lý bí mật | bài 6 |
| Stateless API | API phi trạng thái | Messages API: luôn gửi toàn bộ lịch sử · bài 7 |
| Multi-turn conversation | Hội thoại nhiều lượt | bài 7 |
| Messages array | Mảng tin nhắn | Tham số messages · bài 7 |
| Turn | Lượt (hội thoại) | Các lượt cùng vai liên tiếp được gộp · bài 7 |
| Role prompting | Gán vai trò | Đặt vai trò trong system prompt · bài 7 |
| Mid-conversation system message | Tin nhắn hệ thống giữa hội thoại | role: system sau lượt user; không phá cache · bài 7 |
| Prefill | Điền trước câu trả lời | Lỗi 400 trên Claude 4.6 trở về sau · bài 7 |
| Synthetic assistant message | Lượt assistant tổng hợp | Do dev tự viết · bài 7 |
| Message threads | Luồng tin nhắn | Beta, header message-threads-2026-08-12 · bài 7 |
| Sliding window | Cửa sổ trượt | Chỉ giữ N lượt gần nhất · bài 7 |
| Temperature | Nhiệt độ lấy mẫu | Độ ngẫu nhiên khi sinh; bị gỡ khỏi API version 2026-10-21 (gửi lên => 400) · bài 8 |
| Sampling parameters | Tham số lấy mẫu | temperature, top_p, top_k · bài 8 |
| Nucleus sampling (top_p) | Lấy mẫu hạt nhân | Tham số top_p · bài 8 |
| Deterministic | Tất định | Claude không đảm bảo kể cả temperature 0 · bài 8 |
| Stop sequence | Chuỗi dừng | Tham số stop_sequences (request) / trường stop_sequence (response) · bài 8 |
| Stop reason | Lý do dừng | Trường stop_reason, 7 giá trị · bài 8 |
| Truncation | Cắt cụt | stop_reason max_tokens / model_context_window_exceeded · bài 8 |
| Fallback model | Model dự phòng | Thử lại khi refusal · bài 8 |
| Refusal | Từ chối | stop_reason refusal, HTTP 200, chi tiết trong stop_details · bài 8 |
| Usage | Thống kê token | input_tokens, output_tokens, cache_*_input_tokens · bài 8 |
| Tool runner | Bộ chạy tool tự động | Helper SDK xử lý vòng lặp tool · bài 8 |
| Pre-warm (cache) | Làm nóng bộ nhớ đệm | max_tokens = 0 · bài 8 |
| Server-sent events (SSE) | Sự kiện gửi từ máy chủ | Giao thức của streaming Messages API · bài 9 |
| Time to first token (TTFT) | Thời gian tới token đầu tiên | bài 9 |
| Delta | Mảnh cập nhật | text_delta, input_json_delta, thinking_delta, signature_delta · bài 9 |
| Partial JSON | JSON từng phần | Trường partial_json của input_json_delta · bài 9 |
| Fine-grained tool streaming | Streaming tool chi tiết | Bật bằng eager_input_streaming trên từng tool · bài 9 |
| Error event | Sự kiện lỗi | Lỗi giữa stream sau HTTP 200, vd overloaded_error · bài 9 |
| Error recovery | Khôi phục lỗi | Tiếp tục stream bị ngắt · bài 9 |
| Accumulate / accumulator | Gom / bộ gom | vd get_final_message() · bài 9 |
| Buffering | Đệm | API đệm tool input mặc định · bài 9 |
| Message Batches API | API xử lý lô | Bất đồng bộ, poll kết quả · bài 9 |
| JSON outputs | Đầu ra JSON | output_config.format · bài 10 |
| Strict tool use | Dùng công cụ chế độ nghiêm ngặt | strict: true trên tool · bài 10 |
| JSON Schema | Lược đồ JSON | bài 10 |
| Constrained decoding | Giải mã có ràng buộc | Cơ chế của structured outputs · bài 10 |
| Grammar-constrained sampling | Lấy mẫu có ràng buộc bằng ngữ pháp | Tên trong tài liệu strict tool use · bài 10 |
| Grammar (compiled grammar) | Ngữ pháp (đã biên dịch) | Cache 24 giờ từ lần dùng cuối · bài 10 |
| Stop sequences | Chuỗi dừng | Tham số stop_sequences · bài 10 |
| Output consistency | Tính nhất quán của đầu ra | bài 10 |
| Parse | Phân tích cú pháp | bài 10 |
| Validate | Kiểm tra hợp lệ | bài 10 |
| Property ordering | Thứ tự thuộc tính | required trước, optional sau · bài 10 |
| Union type | Kiểu hợp | anyOf hoặc mảng kiểu; tối đa 16 · bài 10 |
| Agentic workflow | Quy trình kiểu agent | bài 10 |
| Zero Data Retention (ZDR) | Không lưu giữ dữ liệu | bài 10 |
| Model selection | Chọn mô hình | Cân bằng capabilities, speed, cost · bài 11 |
| Efficiency-first / Capability-first | Ưu tiên hiệu quả / ưu tiên năng lực | Hai chiến lược chọn model khởi đầu · bài 11 |
| Input tokens / Output tokens | Token đầu vào / đầu ra | bài 11 |
| MTok | Triệu token | Đơn vị tính giá · bài 11 |
| Token counting | Đếm token | /v1/messages/count_tokens · bài 11 |
| Batch API (Message Batches) | Xử lý theo lô | Giảm 50% · bài 11 |
| Data residency | Lưu trú dữ liệu | Tham số inference_geo · bài 11 |
| Fast mode | Chế độ nhanh | bài 11 |
| Rate limits | Giới hạn tốc độ | RPM / ITPM / OTPM · bài 11 |
| Usage tier | Hạng sử dụng | Start, Build, Scale, Custom, Evaluation · bài 11 |
| Token bucket | Thùng token | Thuật toán rate limiting · bài 11 |
| Ramp limit | Giới hạn tăng tốc | ramp_limit_exceeded · bài 11 |
| Amazon Bedrock | Nền tảng AI của AWS | Endpoint bedrock-mantle, model ID có tiền tố anthropic. · bài 11 |
| Google Vertex AI / Agent Platform | Nền tảng AI của Google Cloud | Claude Models on Google Cloud (Google managed) · bài 11 |
| Global / Regional endpoint | Endpoint toàn cầu / theo vùng | Regional/multi-region +10% · bài 11 |
| Success criteria | Tiêu chí thành công | Specific, Measurable, Achievable, Relevant · bài 12 |
| Golden rule (Key test) | Quy tắc vàng (phép thử người đồng nghiệp) | Đồng nghiệp bối rối thì Claude cũng bối rối · bài 12 |
| Explicit instructions | Chỉ dẫn tường minh | bài 12 |
| Context / Motivation | Ngữ cảnh / lý do (động cơ) | Lý do đằng sau chỉ dẫn, giúp Claude khái quát hóa · bài 12 |
| Constraints | Ràng buộc | bài 12 |
| Sequential steps | Các bước tuần tự | Đánh số khi thứ tự/tính đầy đủ quan trọng · bài 12 |
| Preamble | Lời mở đầu | Kiểu 'Here is...' · bài 12 |
| Prompt generator | Trình tạo prompt | Metaprompt notebook trong Claude Cookbook · bài 12 |
| Task fidelity | Độ chính xác nhiệm vụ | Chiều tiêu chí thành công · bài 12 |
| Model-specific guidance | Hướng dẫn riêng từng model | bài 12 |
| Iterate | Lặp cải tiến | bài 12 |
| XML tags | Thẻ XML | Đánh dấu ranh giới các phần của prompt / đầu ra · bài 13 |
| Nesting (nested tags) | Lồng thẻ | <documents> › <document index="n"> · bài 13 |
| XML format indicators | Chỉ báo định dạng XML | Yêu cầu viết một phần câu trả lời trong thẻ có tên mô tả · bài 13 |
| Prompt template | Mẫu prompt | Khung cố định + biến · bài 13 |
| Variables / placeholder | Biến thay thế / chỗ giữ chỗ | {{VAR}} trong ví dụ của Anthropic · bài 13 |
| Multishot prompting | Prompt nhiều ví dụ | Còn gọi là few-shot; khuyến nghị 3–5 ví dụ · bài 13 |
| Few-shot / One-shot / Zero-shot | Ít ví dụ / một ví dụ / không ví dụ | Số shot = số ví dụ · bài 13 |
| Edge case | Trường hợp biên | bài 13 |
| Long context prompting | Prompt ngữ cảnh dài | Đầu vào 20k+ token · bài 13 |
| Metadata | Siêu dữ liệu | vd <source> · bài 13 |
| Ground responses in quotes | Neo câu trả lời vào trích dẫn | bài 13 |
| Chain of thought (CoT) | Chuỗi suy luận | "Let Claude think" · bài 14 |
| Thinking block | Khối suy luận | type "thinking" + signature · bài 14 |
| Summarized thinking | Suy luận tóm tắt | display: "summarized" · bài 14 |
| Interleaved thinking | Suy luận xen kẽ | Suy nghĩ giữa các lần gọi tool · bài 14 |
| Reasoning extraction | Trích xuất suy luận | stop_details.category của refusal · bài 14 |
| Prompt chaining | Chuỗi prompt | bài 14 |
| Self-correction | Tự sửa lỗi | Nháp → rà soát → sửa · bài 14 |
| Prompt engineering lifecycle | Vòng đời viết prompt | bài 14 |
| Subagent | Tác tử con | bài 14 |
| Context compaction | Nén ngữ cảnh | bài 14 |
| Prompt evaluation | Đánh giá prompt | Đi cùng prompt engineering · bài 15 |
| Eval workflow | Quy trình đánh giá | prompt → dataset → Claude → grader → sửa & lặp · bài 15 |
| Test case | Ca kiểm thử | bài 15 |
| Test dataset / eval dataset | Bộ dữ liệu kiểm thử | bài 15 |
| Golden answer | Đáp án chuẩn | Viết trước khi chạy model · bài 15 |
| Held-out test set | Tập kiểm thử giữ riêng | Chỉ dùng xác thực cuối · bài 15 |
| Synthetic test data | Dữ liệu kiểm thử tổng hợp | Do Claude sinh · bài 15 |
| Stratify | Phân tầng | Tỉ lệ loại case như production · bài 15 |
| Grader | Bộ chấm điểm | code / LLM / human · bài 15 |
| LLM judge | Mô hình làm giám khảo | LLM-based grading, nên dùng model khác · bài 15 |
| Rubric | Bảng tiêu chí chấm | bài 15 |
| Exact match | So khớp chính xác | bài 15 |
| Cosine similarity | Độ tương đồng cosine | Đo consistency · bài 15 |
| Likert scale | Thang Likert | vd 1–5 · bài 15 |
| Ordinal scale | Thang thứ bậc | bài 15 |
| Accuracy floor | Ngưỡng độ chính xác tối thiểu | Đặt theo cái giá của lỗi · bài 15 |
| Cost per completed task | Chi phí trên mỗi tác vụ hoàn thành | run cost ÷ số tác vụ đúng · bài 15 |
| Smoke eval | Eval kiểm tra nhanh | Chạy trong CI mỗi PR · bài 15 |
| Drift | Trôi dạt hiệu năng | bài 15 |
| Code-based grading | Chấm điểm bằng code | exact match, keyword, regex · bài 16 |
| Human grading | Chấm điểm bởi con người | expert review, UX panel · bài 16 |
| Model-based / LLM-based grading | Chấm điểm bằng mô hình | bài 16 |
| LLM-as-judge | Mô hình làm giám khảo | bài 16 |
| Likert scale / Ordinal scale | Thang Likert / thang thứ bậc | 1–5 · bài 16 |
| Harmlessness screen | Màn lọc vô hại | Haiku sàng lọc input · bài 16 |
| Indirect prompt injection | Chèn lệnh gián tiếp | qua nội dung bên thứ ba · bài 16 |
| Untrusted content | Nội dung không tin cậy | bài 16 |
| Red-teaming | Kiểm thử đối kháng | bài 16 |
| Prompt leak | Rò rỉ prompt | bài 16 |
| Post-processing | Hậu xử lý | lọc output · bài 16 |
| Threat model | Mô hình mối đe dọa | bài 16 |
| Tool-use contract | Hợp đồng tool use | Bạn khai báo tool, Claude quyết định gọi, code/server thực thi · bài 17 |
| User-defined tool | Tool do người dùng định nghĩa | Client thực thi; loại phổ biến nhất · bài 17 |
| Anthropic-schema tool | Tool có schema do Anthropic công bố | memory, bash, text_editor, computer, browser – client thực thi · bài 17 |
| input_schema | Lược đồ đầu vào | Object JSON Schema của tool · bài 17 |
| input_examples | Ví dụ đầu vào | Tùy chọn, ~100–200 token mỗi mẫu · bài 17 |
| tool_use block | Khối tool_use | id, name, input · bài 17 |
| tool_result block | Khối kết quả công cụ | tool_use_id, content, is_error; trong message user · bài 17 |
| Tool use system prompt | System prompt cho tool | API tự dựng khi có tools; tốn token cố định theo model · bài 17 |
| Namespacing | Tiền tố phân vùng tên | github_list_prs · bài 17 |
| Dispatch | Điều phối tới hàm xử lý | bài 17 |
| Side effects | Tác dụng phụ | bài 17 |
| Parallel tool use | Gọi công cụ song song | Nhiều khối tool_use trong một assistant message · bài 18 |
| Forced tool use | Ép gọi công cụ | tool_choice any / tool; không hỗ trợ trên Opus 5.5, Sonnet 5.5, Fable 5.2/5.1, Mythos 5.2/5.1 · bài 18 |
| Tool description | Mô tả công cụ | Tài liệu khuyên ≥ 3–4 câu · bài 18 |
| Anthropic-schema client tool | Công cụ phía client theo schema của Anthropic | text editor, bash, computer use – bạn thực thi · bài 19 |
| Server-side agentic loop | Vòng lặp agent phía server | API tự gọi server tool nhiều lần; có thể trả pause_turn · bài 19 |
| Dynamic filtering | Lọc động | web_search/web_fetch _20260209 trở lên · bài 19 |
| Data exfiltration | Rò rỉ dữ liệu ra ngoài | Rủi ro chính của web fetch · bài 19 |
| Cache bypass | Bỏ qua bộ nhớ đệm | use_cache: false (web_fetch_20260309+) · bài 19 |
| Sandboxed container | Vùng chứa cách ly | Môi trường code execution, không Internet · bài 19 |
| Sub-tool | Công cụ con | bash_code_execution, text_editor_code_execution · bài 19 |
| Schema-less tool | Công cụ không cần khai báo schema | Text editor tool · bài 19 |
| Programmatic tool calling | Gọi tool bằng chương trình | Gọi tool từ code trong code execution · bài 19 |
| Computer use | Điều khiển máy tính | Bộ client tool computer_toolset_20260801 · bài 19 |
| Web search tool | Công cụ tìm kiếm web | Server tool · bài 19 |
| Web fetch tool | Công cụ tải nội dung trang web | Server tool · bài 19 |
| Code execution tool | Công cụ thực thi mã | Server tool · bài 19 |
| Text editor tool | Công cụ soạn thảo văn bản | Client tool, name str_replace_based_edit_tool · bài 19 |
| Knowledge base | Kho tri thức | Tập tài liệu nguồn của hệ RAG · bài 20 |
| Chunk overlap | Phần chồng lấp giữa các đoạn | Lặp lại phần cuối chunk trước ở đầu chunk sau · bài 20 |
| Embedding model | Mô hình nhúng | vd voyage-4 (Voyage AI) · bài 20 |
| Embedding dimension | Số chiều vector | voyage-4 mặc định 1024 · bài 20 |
| Semantic similarity / Semantic search | Độ tương đồng / tìm kiếm ngữ nghĩa | bài 20 |
| Dot product | Tích vô hướng | bài 20 |
| Nearest neighbor search | Tìm láng giềng gần nhất | bài 20 |
| Vector database | Cơ sở dữ liệu vector | bài 20 |
| Top-k | k kết quả đứng đầu | Số chunk đưa vào prompt · bài 20 |
| Matryoshka embeddings | Embedding thô → mịn (rút gọn được) | Giữ chiều đầu rồi chuẩn hóa lại · bài 20 |
| Quantization | Lượng tử hóa | Tham số output_dtype của Voyage AI · bài 20 |
| Reranker | Mô hình xếp hạng lại | bài 20 |
| Precision / Recall / MRR | Độ chính xác / Độ phủ / Thứ hạng nghịch đảo trung bình | Chỉ số đánh giá truy xuất · bài 20 |
| Lexical search | Tìm kiếm theo từ khóa | Khớp từ chính xác, vd BM25 · bài 21 |
| BM25 (Best Matching 25) | Hàm xếp hạng BM25 | Dựa trên TF-IDF; tham số k1, b · bài 21 |
| TF-IDF | Tần suất từ – nghịch đảo tần suất văn bản | bài 21 |
| Semantic search | Tìm kiếm ngữ nghĩa | So khớp vector embedding · bài 21 |
| Hybrid search | Tìm kiếm lai | BM25 + embeddings + rank fusion · bài 21 |
| Rank fusion | Hợp nhất thứ hạng | bài 21 |
| Reciprocal Rank Fusion (RRF) | Hợp nhất thứ hạng nghịch đảo | Cộng 1/(k + rank) · bài 21 |
| Multi-index RAG pipeline | Pipeline RAG đa chỉ mục | bài 21 |
| Contextual Retrieval | Truy xuất có ngữ cảnh | Kỹ thuật của Anthropic (2024) · bài 21 |
| Contextual Embeddings | Embedding có ngữ cảnh | bài 21 |
| Contextual BM25 | BM25 có ngữ cảnh | bài 21 |
| Reranking | Xếp hạng lại | bài 21 |
| Recall@k | Độ phủ tại k | failure rate = 1 − recall@k · bài 21 |
| Pass@k | Tỉ lệ đạt tại k | Dùng trong cookbook Contextual Retrieval · bài 21 |
| Golden chunk | Chunk chuẩn (đáp án) | Nhãn đúng trong bộ eval truy xuất · bài 21 |
| Thinking | Suy luận | Khối content type thinking, đứng trước text · bài 22 |
| budget_tokens | Ngân sách token suy luận | Extended thinking thủ công (legacy); ≥ 1.024, < max_tokens · bài 22 |
| Signature | Chữ ký (bản mã hóa suy luận) | Opaque, gửi lại nguyên vẹn · bài 22 |
| Redacted thinking | Suy luận bị che | Block redacted_thinking, trường data · bài 22 |
| Preserving thinking blocks | Giữ nguyên khối suy luận | Bắt buộc trong lượt tool use · bài 22 |
| Progress update | Cập nhật tiến độ | Thinking block ngắn giữa tool call (model mới) · bài 22 |
| Thinking block clearing | Dọn khối suy luận | Context editing clear_thinking_20251015 · bài 22 |
| Vision | Khả năng hiểu hình ảnh | Claude chỉ hiểu ảnh, không tạo/chỉnh sửa ảnh · bài 23 |
| Image content block | Khối nội dung hình ảnh | {"type": "image", "source": {...}} · bài 23 |
| Document block | Khối tài liệu | PDF và text/plain; trường tùy chọn title, context, citations · bài 23 |
| Base64 source | Nguồn mã hóa base64 | Bắt buộc media_type · bài 23 |
| URL source | Nguồn theo đường dẫn | bài 23 |
| Files API | API quản lý file | GA, không cần beta header; tham chiếu bằng file_id; phạm vi workspace · bài 23 |
| Media type (MIME type) | Kiểu nội dung | image/png, application/pdf, text/plain · bài 23 |
| Visual token / Patch | Token hình ảnh / ô ảnh | Mỗi khối 28×28 px = 1 visual token · bài 23 |
| Resolution tier | Mức phân giải | Standard / High-resolution · bài 23 |
| Downsample / Downscale | Giảm độ phân giải / thu nhỏ ảnh | bài 23 |
| Padding | Đệm ảnh | Cạnh phải/dưới lên bội số 28 px · bài 23 |
| Bounding box | Khung bao | [x1, y1, x2, y2] theo pixel · bài 23 |
| Many-image request | Request nhiều ảnh | Hơn 20 ảnh, giới hạn kích thước chặt hơn · bài 23 |
| Rasterize | Raster hóa | Chuyển trang PDF thành ảnh điểm · bài 23 |
| Human oversight | Con người giám sát | bài 23 |
| cited_text | Đoạn văn được trích | Không tính output token · bài 24 |
| char_location / page_location / content_block_location | Vị trí theo ký tự / trang / khối nội dung | Kiểu citation theo loại document · bài 24 |
| Custom content document | Tài liệu nội dung tùy chỉnh | source.type: "content", không chia thêm · bài 24 |
| Search result content block | Khối nội dung kết quả tìm kiếm | type: "search_result" · bài 24 |
| search_result_location | Vị trí trong kết quả tìm kiếm | Citation của search_result · bài 24 |
| Exclusive end index | Chỉ số cuối không bao gồm | bài 24 |
| citations_delta | Delta trích dẫn | Streaming, mỗi delta 1 citation · bài 24 |
| Grounded answer | Câu trả lời bám nguồn (có căn cứ) | bài 24 |
| Cache breakpoint | Điểm ngắt cache | Block gắn cache_control; tối đa 4 mỗi request · bài 25 |
| Automatic caching | Cache tự động | cache_control ở cấp cao nhất của request · bài 25 |
| Explicit cache breakpoint | Điểm ngắt cache tường minh | cache_control trên từng block · bài 25 |
| Prompt prefix | Tiền tố prompt | Thứ tự tools → system → messages · bài 25 |
| Cache hit / cache miss | Trúng / trượt cache | bài 25 |
| Cache write / cache read | Ghi cache / đọc cache | Ghi 1,25× (5m) hoặc 2× (1h); đọc 0,1× ở đa số model · bài 25 |
| TTL (time to live) | Thời gian sống của cache | Mặc định 5 phút, tùy chọn 1h · bài 25 |
| Lookback window | Cửa sổ nhìn lùi | 20 block mỗi breakpoint · bài 25 |
| Minimum cacheable prompt length | Độ dài tối thiểu để cache | 512/1.024/2.048/4.096 token theo model · bài 25 |
| Cache invalidation | Làm mất hiệu lực cache | bài 25 |
| Cache diagnostics | Chẩn đoán cache | diagnostics.previous_message_id → cache_miss_reason · bài 25 |
| Pre-warming | Làm nóng cache trước | max_tokens: 0 · bài 25 |
| Workspace isolation | Cô lập theo workspace | bài 25 |
| file_id | Mã định danh tệp | source.type: "file" · bài 26 |
| container_upload | Khối tải tệp vào container | Dùng với code execution tool · bài 26 |
| Asynchronous processing | Xử lý bất đồng bộ | bài 26 |
| custom_id | Mã tự đặt của request | Ghép kết quả batch với request · bài 26 |
| Throughput | Thông lượng | bài 26 |
| Best-effort | Cố gắng tối đa, không bảo đảm | Cache hit trong batch · bài 26 |
| Context editing | Chỉnh sửa ngữ cảnh | Beta, context-management-2025-06-27 · bài 26 |
| Memory tool | Công cụ bộ nhớ | memory_20250818, client tool · bài 26 |
| Just-in-time context retrieval | Truy xuất ngữ cảnh đúng lúc cần | bài 26 |
| Path traversal | Tấn công vượt thư mục | Bắt buộc chặn trong memory handler · bài 26 |
| MCP host | Ứng dụng chủ | Ứng dụng AI điều phối các MCP client (Claude Desktop, Claude Code, VS Code) · bài 27 |
| MCP client | Máy khách MCP | Một client cho mỗi server · bài 27 |
| MCP server | Máy chủ MCP | Cung cấp tools/resources/prompts · bài 27 |
| Data layer | Tầng dữ liệu | JSON-RPC 2.0 · bài 27 |
| Transport layer | Tầng truyền tải | stdio, Streamable HTTP · bài 27 |
| Primitive | Khối nguyên thủy | Tools, Resources, Prompts, Elicitation · bài 27 |
| Resources | Tài nguyên | Dữ liệu ngữ cảnh có URI, ứng dụng điều khiển · bài 27 |
| Resource template | Mẫu tài nguyên | URI có tham số · bài 27 |
| Elicitation | Khơi gợi thông tin từ người dùng | elicitation/create · bài 27 |
| Capabilities | Năng lực | Khai báo tính năng client/server hỗ trợ · bài 27 |
| Stateless | Phi trạng thái | MCP 2026-07-28: mọi request mang _meta · bài 27 |
| Notification | Thông báo | Thông điệp JSON-RPC không có id · bài 27 |
| stdio transport | Truyền tải qua luồng chuẩn | stdin/stdout, newline-delimited · bài 27 |
| Streamable HTTP | HTTP có hỗ trợ luồng | POST tới một endpoint, SSE tùy chọn · bài 27 |
| DNS rebinding | Tấn công gán lại DNS | Chặn bằng kiểm tra Origin · bài 27 |
| Token passthrough | Chuyển tiếp token nguyên trạng | Anti-pattern bị cấm trong MCP · bài 27 |
| Building blocks (primitives) | Khối xây dựng | Tools, resources, prompts · bài 28 |
| Resource | Tài nguyên | Dữ liệu chỉ đọc theo URI, application-controlled · bài 28 |
| Direct resource | Tài nguyên trực tiếp | URI cố định, resources/list · bài 28 |
| Prompt (MCP) | Mẫu prompt | User-controlled, đối số luôn là chuỗi · bài 28 |
| MCPServer | MCPServer | Lớp server cấp cao Python SDK 2.x (tên cũ FastMCP); không dịch · bài 28 |
| Decorator | Bộ trang trí | @mcp.tool / @mcp.resource / @mcp.prompt · bài 28 |
| Type hints | Gợi ý kiểu | Nguồn sinh inputSchema · bài 28 |
| Tool annotations | Chú thích hành vi tool | Gợi ý cho client, không phải bảo mật · bài 28 |
| MIME type | Kiểu nội dung | mime_type của resource · bài 28 |
| URI | Định danh tài nguyên thống nhất | bài 28 |
| Parameter completion | Gợi ý giá trị tham số | completion/complete · bài 28 |
| Caching hints | Gợi ý bộ nhớ đệm | ttlMs, cacheScope (spec 2026-07-28) · bài 28 |
| MCP Inspector | Trình kiểm tra MCP | Web / CLI / TUI · bài 28 |
| Protocol era | Thời kỳ giao thức | legacy vs modern 2026-07-28 · bài 28 |
| Host (MCP) | Ứng dụng chủ | Ứng dụng người dùng tương tác, điều phối các MCP client · bài 29 |
| Multi Round-Trip Requests (MRTR) | Yêu cầu nhiều vòng | InputRequiredResult + inputResponses + requestState · bài 29 |
| Roots | Thư mục gốc được phép | Deprecated từ giao thức 2026-07-28 · bài 29 |
| Sampling | Lấy mẫu – server nhờ client gọi LLM | Deprecated từ giao thức 2026-07-28 · bài 29 |
| MCP connector | Trình kết nối MCP | Messages API, beta, tham số mcp_servers · bài 29 |
| MCPToolset | Bộ cấu hình tool MCP | type mcp_toolset trong tools · bài 29 |
| Allowlist / Denylist | Danh sách cho phép / danh sách chặn | bài 29 |
| Client-side MCP helpers | Hàm hỗ trợ MCP phía client | async_mcp_tool, mcp_message, mcp_resource_to_content/file · bài 29 |
| Custom connector | Trình kết nối tùy chỉnh | Thêm remote MCP server vào Claude.ai/Desktop · bài 29 |
| Transport | Tầng vận chuyển | stdio, Streamable HTTP, SSE · bài 29 |
| stdio | Kênh vào/ra chuẩn | Server chạy như tiến trình con cục bộ · bài 29 |
| Tool search tool | Công cụ tìm kiếm tool | Dùng với defer_loading · bài 29 |
| Message pattern | Mẫu tương tác | request–response, multi round-trip, subscribe–notify · bài 30 |
| InputRequiredResult | Kết quả cần thêm input | resultType: "input_required" · bài 30 |
| requestState | Trạng thái request mờ (opaque) | Client gửi trả nguyên văn; server coi là input không tin cậy · bài 30 |
| Deprecated | Không còn khuyến nghị, sẽ bị gỡ | Cửa sổ deprecation tối thiểu 12 tháng (MCP) · bài 30 |
| Authorization | Ủy quyền | OAuth 2.1 cho MCP qua HTTP · bài 30 |
| PKCE | Proof Key for Code Exchange (khóa chứng minh khi đổi mã) | MCP yêu cầu S256 khi có thể · bài 30 |
| Confused deputy | Kẻ ủy quyền bị lừa | bài 30 |
| Client ID Metadata Document (CIMD) | Tài liệu metadata định danh client | Thay cho Dynamic Client Registration · bài 30 |
| Agentic systems | Hệ thống mang tính tác tử | Tên chung cho workflow và agent · bài 31 |
| Augmented LLM | LLM được tăng cường | LLM + retrieval + tools + memory · bài 31 |
| Gate | Cổng kiểm tra | Kiểm tra bằng code giữa các bước chaining · bài 31 |
| Routing | Định tuyến | Phân loại rồi chuyển tới một nhánh · bài 31 |
| Separation of concerns | Tách biệt trách nhiệm | bài 31 |
| Parallelization | Song song hóa | Biến thể sectioning / voting · bài 31 |
| Sectioning | Chia phần | bài 31 |
| Voting | Bỏ phiếu | bài 31 |
| Orchestrator-workers | Điều phối viên – các worker | Subtask do LLM xác định lúc chạy · bài 31 |
| Synthesizer | Bộ tổng hợp | bài 31 |
| Evaluator-optimizer | Đánh giá – tối ưu | bài 31 |
| Ground truth | Sự thật từ môi trường | Kết quả tool / chạy code · bài 31 |
| Stopping condition | Điều kiện dừng | bài 31 |
| Compounding errors | Lỗi cộng dồn | bài 31 |
| Agent-computer interface (ACI) | Giao diện agent–máy tính | bài 31 |
| Poka-yoke | Chống sai sót từ thiết kế | Ví dụ: bắt buộc đường dẫn tuyệt đối · bài 31 |
| Context engineering | Kỹ thuật quản lý ngữ cảnh | Tuyển chọn toàn bộ token vào model ở mỗi lượt · bài 32 |
| Environment inspection | Quan sát môi trường | bài 32 |
| Right altitude | Đúng độ cao | Mức cụ thể của system prompt · bài 32 |
| Just-in-time context | Truy xuất ngữ cảnh đúng lúc | bài 32 |
| Progressive disclosure | Tiết lộ dần dần | bài 32 |
| Tool result clearing | Xóa kết quả tool | clear_tool_uses_20250919 · bài 32 |
| Structured note-taking / agentic memory | Ghi chú có cấu trúc / trí nhớ tác tử | bài 32 |
| Sub-agent | Agent con | Context sạch, trả tóm tắt · bài 32 |
| Long-horizon task | Tác vụ dài hạn | bài 32 |
| Claude Agent SDK | Bộ công cụ xây agent của Claude | Tên cũ: Claude Code SDK; gói claude-agent-sdk / @anthropic-ai/claude-agent-sdk · bài 33 |
| Agent harness | Khung chạy agent | Phần điều phối vòng lặp model–tool, quyền, ngữ cảnh · bài 33 |
| Built-in tools | Công cụ dựng sẵn | Read, Edit, Write, Glob, Grep, Bash, WebSearch, WebFetch, Agent… · bài 33 |
| Custom tool | Công cụ tùy biến | @tool / tool() trong Agent SDK · bài 33 |
| In-process MCP server | Máy chủ MCP chạy trong tiến trình | create_sdk_mcp_server / createSdkMcpServer · bài 33 |
| Session | Phiên làm việc | continue / resume / fork · bài 33 |
| Fork session | Rẽ nhánh phiên | fork_session / forkSession · bài 33 |
| Hook | Móc sự kiện | PreToolUse, PostToolUse, Stop… · bài 33 |
| Agentic search | Tìm kiếm kiểu agent | Đối lập semantic search · bài 33 |
| Agent Skills | Kỹ năng cho agent | Thư mục có SKILL.md, nạp theo nhu cầu · bài 34 |
| SKILL.md | File định nghĩa Skill | Không dịch tên file · bài 34 |
| YAML frontmatter | Phần đầu YAML | name, description · bài 34 |
| Pre-built Agent Skills | Skill dựng sẵn | pptx, xlsx, docx, pdf · bài 34 |
| Custom Skills | Skill tùy chỉnh | bài 34 |
| Bundled files | File đi kèm | Level 3 của Skill · bài 34 |
| Degrees of freedom | Mức độ tự do | high / medium / low · bài 34 |
| Feedback loop | Vòng phản hồi | validator → sửa → lặp · bài 34 |
| Human-agent team | Đội người – agent | Bài 35 · bài 35 |
| Single-player / Multiplayer AI | AI cá nhân / AI cho nhóm | Bài 35 · bài 35 |
| North star | Kim chỉ nam (mục tiêu chung viết ra) | Written north star · bài 35 |
| Gradual release | Trao quyền dần dần | Bài 35 · bài 35 |
| Team norms | Chuẩn mực làm việc của nhóm | Bài 35 · bài 35 |
| Oversight | Giám sát | Bài 35 · bài 35 |
| Checkpoint | Điểm kiểm tra | Cũng là snapshot của /rewind trong Claude Code · bài 35 |
| Acceptance tests | Kiểm thử chấp nhận | AI Fluency for builders · bài 35 |
| Description Chain | Chuỗi mô tả | AI Fluency for builders · bài 35 |
| Prompt fatigue | Mệt mỏi vì bị hỏi phê duyệt liên tục | bài 35 |
| Sandbox | Môi trường cô lập | bài 35 |
| Agentic harness | Khung điều phối agent | Lớp bao quanh model: cung cấp tools, quản lý ngữ cảnh · bài 36 |
| Plan mode | Chế độ lập kế hoạch | Không sửa source tới khi duyệt plan · bài 36 |
| Auto mode | Chế độ tự động | Classifier duyệt hành động chạy nền · bài 36 |
| Classifier | Bộ phân loại an toàn | Trong auto mode · bài 36 |
| Protected paths | Đường dẫn được bảo vệ | .git, .claude, .bashrc, .mcp.json… · bài 36 |
| Session (resume / fork) | Phiên làm việc (tiếp tục / rẽ nhánh) | Resume giữ session ID, fork tạo ID mới · bài 36 |
| Auto memory | Bộ nhớ tự động | MEMORY.md · bài 36 |
| CLAUDE.md | Tệp chỉ dẫn dự án | Claude Code đọc đầu mỗi phiên; là context, không phải luật cứng · bài 37 |
| CLAUDE.local.md | Chỉ dẫn cá nhân trong dự án | Thêm vào .gitignore · bài 37 |
| Memory hierarchy | Phân cấp bộ nhớ | managed policy → user → project → local · bài 37 |
| Managed policy | Chính sách do tổ chức quản lý | Managed CLAUDE.md / managed settings · bài 37 |
| Import (@path) | Nhập tệp | Tối đa 4 hop, không giảm context · bài 37 |
| External import | Import bên ngoài | Trỏ ra ngoài thư mục làm việc, cần phê duyệt · bài 37 |
| Path-specific rule | Quy tắc theo đường dẫn | .claude/rules/ với frontmatter paths · bài 37 |
| Scope | Phạm vi | bài 37 |
| Effort level | Mức nỗ lực | low/medium/high/xhigh/max · bài 37 |
| Common workflows | Quy trình thường dùng | bài 37 |
| Deterministic instruction | Chỉ dẫn cưỡng chế | hook, deny rule, managed settings – đối lập với CLAUDE.md/prompt · bài 37 |
| Git worktree | Cây làm việc git riêng | claude --worktree · bài 37 |
| Slash command | Lệnh gạch chéo | Lệnh bắt đầu bằng / ở đầu tin nhắn · bài 38 |
| Custom slash command | Lệnh tùy biến | File .claude/commands/*.md; nay là dạng cũ của skill · bài 38 |
| Skill / Agent Skill | Kỹ năng | Thư mục có SKILL.md · bài 38 |
| Frontmatter | Phần khai báo đầu file | Khối YAML giữa hai dòng --- · bài 38 |
| Dynamic context injection | Chèn ngữ cảnh động | Cú pháp !`cmd` · bài 38 |
| Fork (context: fork) | Rẽ nhánh | Chạy skill trong subagent mới · bài 38 |
| Manifest (plugin.json) | Tệp khai báo | .claude-plugin/plugin.json · bài 38 |
| Marketplace | Danh mục plugin | .claude-plugin/marketplace.json · bài 38 |
| Namespace | Không gian tên | Tiền tố plugin-name: · bài 38 |
| Install scope | Phạm vi cài đặt | User / Project / Local · bài 38 |
| Output style | Phong cách phản hồi | bài 38 |
| Settings (settings.json) | Cấu hình | Claude Code: user / project / local / managed · bài 39 |
| Precedence | Thứ tự ưu tiên | Managed > CLI > local > project > user · bài 39 |
| Managed settings | Cấu hình do tổ chức quản lý | managed-settings.json, MDM, server-managed · bài 39 |
| Permission rule | Quy tắc quyền | allow / ask / deny; thứ tự đánh giá deny → ask → allow · bài 39 |
| Workspace trust | Tin cậy thư mục làm việc | bài 39 |
| Hook event | Sự kiện hook | PreToolUse, PostToolUse, Stop, SessionStart… · bài 39 |
| Matcher | Bộ lọc khớp | Lọc hook theo tên tool, hỗ trợ / và regex · bài 39 |
| Hook handler | Trình xử lý hook | command, http, mcp_tool, prompt, agent · bài 39 |
| Exit code | Mã thoát | 0 = thành công, 2 = chặn · bài 39 |
| Lifecycle | Vòng đời | bài 39 |
| Fail-open / fail-closed | Mặc định mở / mặc định đóng | bài 39 |
| Tool search | Tìm kiếm tool | Nạp định nghĩa MCP tool theo nhu cầu · bài 39 |
| Headless mode / Non-interactive mode | Chế độ không tương tác | claude -p / --print · bài 40 |
| Bare mode | Chế độ tối giản | --bare: bỏ tự nạp hooks, plugins, MCP, CLAUDE.md · bài 40 |
| Permission rule syntax | Cú pháp quy tắc quyền | vd Bash(git diff *) · bài 40 |
| Trigger phrase | Cụm từ kích hoạt | Mặc định @claude · bài 40 |
| Interactive mode / Automation mode | Chế độ tương tác / chế độ tự động | claude-code-action: không có / có input prompt · bài 40 |
| Reusable workflow | Workflow tái sử dụng | GitHub Actions · bài 40 |
| Workload identity federation | Liên kết danh tính workload | OIDC thay cho secret dài hạn · bài 40 |
| Review level | Mức độ review | Code Review: Quick / Standard / Deep · bài 40 |
| Capstone | Dự án cuối khóa | bài 41 |
| Reference architecture | Kiến trúc tham chiếu | bài 41 |
| Production | Môi trường vận hành thật | bài 41 |
| Latency | Độ trễ | bài 41 |
| Baseline latency | Độ trễ cơ sở | bài 41 |
| Regression | Hồi quy | bài 41 |
| Continuous integration (CI) | Tích hợp liên tục | bài 41 |
| Exponential backoff | Lùi thời gian theo cấp số nhân | bài 41 |
