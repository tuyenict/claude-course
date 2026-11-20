# Danh sách điểm cần xác minh (確認事項)

Các agent ghi lại khi gen bài ngày 2026-11-20: những thông tin chưa xác minh được từ nguồn chính thức. Cần rà soát trước khi dùng làm tài liệu chính thức.

## Bài 1
- Link cũ about-claude/models/overview vẫn mở được, nhưng trang trả về URL chuẩn là /docs/en/models/overview. curl trong sandbox không lấy được mã HTTP (trả 000), nên chưa xác nhận đây là redirect 301 hay chỉ là alias.
- Thuộc tính `display_name` trong ví dụ Python `client.models.list()` và JSON mẫu của Models API ở câu 6 (giá trị của claude-opus-4-6) dựa trên cấu trúc SDK quen thuộc. Trang Models overview chỉ nêu các trường max_input_tokens, max_tokens, capabilities và line.
- Danh sách các gói Claude apps (Free, Pro, Max, Team, Enterprise) và điều kiện gói cho Research/Enterprise Search lấy từ trang khóa Claude 101 và kết quả tìm kiếm trên support.claude.com. Chưa mở trang so sánh gói đầy đủ.
- Cột 'Bám theo khóa Academy' của bảng 9 module trong bài đã được bỏ vì chưa xác minh tên từng khóa. Bài chỉ trỏ tới trang about.html.
- Năm thành lập Anthropic không có trên trang Company nên bài không nêu.

## Bài 2
- Không đọc được nội dung từng bài học của khóa AI Fluency (anthropic.com/ai-fluency/* chuyển hướng sang anthropic.skilljar.com, nơi chặn truy cập tự động). Định nghĩa trong bài lấy từ các PDF chính thức (Framework, Key Terminology Cheat Sheet, The 4Ds: Delegation/Description/Discernment/Diligence), không lấy từ lời giảng video.
- Lời giảng chi tiết của các bài 'Project planning and Delegation', 'Deep Dive 2: Effective Prompting Techniques' và 'Description-Discernment loop' chưa đọc được. Phần áp dụng vào lập kế hoạch dự án và các bảng ví dụ do bài học tự soạn, và trong bài đã ghi rõ đó là minh họa.
- Báo cáo AI Fluency Index chỉ xác nhận 3 hành vi thuộc Discernment. Việc gắn 8 hành vi còn lại với từng D là cách đọc của bài học, và trong bài đã ghi chú như vậy.
- Thông tin '14 bài, khoảng 4 giờ' lấy từ trang khóa học trên academy.claude.com (kiểm tra ngày 2026-11-20) và có thể thay đổi.
- Cách gọi 'inner loop / outer loop' trong tài liệu K-12 Train the Trainer không xác minh được, vì trang chỉ trả về phần điều hướng. Bài học không dùng cách gọi này.
- Hai link docs trong syllabus (khóa Academy và trang academy.claude.com/all) vẫn hoạt động nên không cần sửa. Bài học có trích nguồn bổ sung là các PDF chính thức.

## Bài 3
- Ví dụ hội thoại, kết quả mong đợi trong phần Thực hành (vd '48,213 token ≈ 4.8%') và các bảng 'chỉ dẫn dễ trôi → viết lại' do tác giả soạn minh họa dựa trên nguyên tắc của khóa Academy, không trích nguyên văn từ tài liệu.
- Nội dung chi tiết từng bài trong khóa Academy 'AI capabilities and limitations': chỉ đọc được outline, mục tiêu và mô tả trên trang khóa học, không đọc được nội dung bài giảng.
- Trong bài tập 1 có gợi ý so sánh với model claude-haiku-4-5-20251001. ID này có trong danh sách model hỗ trợ của trang Token counting, nhưng không nằm trong bảng 'Latest models' của Models overview.
- Phần 'context awareness' gọi task budgets là beta theo trang Context windows. Chưa mở trang task budgets để xem header beta cụ thể.

## Bài 4
- Styles (preset/custom styles in Claude.ai): the current Help Center personalization article does not mention Styles. It lists only profile instructions, project instructions and Skills, so the lesson presents Styles as a legacy concept and points to instructions/Skills. Whether the Styles feature still exists in the current UI is unconfirmed.
- Plan availability for project instructions: the personalization article contradicts itself, saying projects are available to all plans but that project instructions are for paid plans only. The lesson does not state a plan restriction for instructions.
- The Help Center does not give a time limit for Research, other than '5 or more tool calls over 1-3 minutes'.
- The research model (Claude Opus 5.5 with Opus 4.8 fallback) and artifact dates and limits (legacy cutoff 2026-09-16, 100 MB / 25,000 docs, 20 MB/file, 1 GB) come from the Help Center as checked on 2026-11-20 and may change.
- The academy.claude.com Claude 101 page lists only lesson titles. Per-lesson content was not available, so the scope follows the course outline and the Help Center articles.
- Organization instructions taking precedence over profile instructions comes from a search-result summary of the 'Set organization instructions' article. That page was not fetched directly.

## Bài 5
- Hai nguồn ghi khác nhau về SSO ở gói Team: trang pricing ghi Team có SSO, còn trang Roles and permissions xếp 'Manage SSO / auth' vào nhóm chỉ có ở Enterprise. Bài học ghi chú cả hai và khuyên người học xác nhận lại với Anthropic.
- Trạng thái beta của Claude Tag: Help Center ghi 'beta', còn claude.com/docs ghi 'public beta'.
- Giá Enterprise (tối thiểu 20 seat, thanh toán theo năm, cộng phí sử dụng theo giá API) và quy mô gói Team (2–150 người) lấy từ trang pricing. Đây là số liệu dễ thay đổi, bài đã ghi 'kiểm tra ngày 2026-11-20'. Giá theo seat bằng USD không đưa vào bài.
- Trang Roles and permissions trình bày dạng bảng, không đọc được rõ quyền nào thuộc role nào. Mô tả role trong bài kết hợp trang này với bài 'Your groups' của Academy. Ví dụ, ý 'Admin không quản lý billing' lấy từ Academy, trong khi Help Center ghi Admin 'can handle some billing'.
- Đã đọc đủ ba trang khóa học Academy trong docs (link còn hoạt động, không cần sửa). Riêng trang bài học con 'what-is-claude-cowork' của khóa Cowork trả 404 khi đoán URL, nên nội dung Cowork lấy chủ yếu từ Help Center.
- Ví dụ hội thoại về prompt injection trong bài là minh họa do bài tự dựng, không phải ví dụ nguyên văn của Anthropic (bài đã ghi rõ là minh họa).

## Bài 6
- Lesson cites the IPA guides 「安全なウェブサイトの作り方」 and 「セキュア・プログラミング講座」 only in general terms. No specific section was read or quoted (the note in the lesson says so too).
- Fetched on 2026-11-20 and likely to change: SDK versions, anthropic-version 2026-10-21, model IDs. The lesson marks each with the check date.
- The Python exception for 402 billing_error and 413 request_too_large is not in the SDK's table; the lesson writes the generic APIStatusError.
- The Academy page for 'Claude Platform 101' (in the syllabus 'academy' field) was not opened. Only the 'Building with the Claude API' course outline was read.

## Bài 7
- The academy.claude.com course page for 'Building with the Claude API' (tried /courses/claude-with-the-anthropic-api) returned 404, so the scope and order were not checked against the Academy course outline.
- Old URL .../prompt-engineering/system-prompts still loads, but WebFetch got the 'Prompting best practices' page instead (it seems to redirect or be merged). The role section is 'Give Claude a role'.
- Old URL api/messages still returns the reference, but the docs pages link to api/messages/create. Changing the link is optional.
- Messages API reference: WebFetch read only the first 100K characters (the page is about 1.3M characters). The full response schema and every stop_reason value were not read; the lesson uses only end_turn, max_tokens and refusal, which appear in the Using the Messages API page.
- The 'Limitations' section of Mid-conversation system messages was not read in full. The rule 'cannot be the first entry' comes from the Using the Messages API page, and the 400 error for invalid positions comes from the placement rules.
- Prefill example: the lesson keeps the docs' model ID claude-sonnet-4-5 (legacy). It was not confirmed whether that alias is still callable; Models overview still lists Claude Sonnet 4.5.
- Model IDs, context window (1M), max output (128K), the 100,000-message limit and the message-thread expiry are as of the docs on 2026-11-20 and may change.

## Bài 8
- Khoảng giá trị cho phép của temperature (vd 0.0–1.0) ở API cũ 2023-06-01: tài liệu hiện hành không còn mô tả nên bài không nêu khoảng giá trị.
- Định nghĩa chi tiết của top_p/top_k: Messages API reference hiện hành không còn hai tham số này; bài chỉ mô tả chung là cách giới hạn tập token ứng viên khi lấy mẫu.
- Việc chuỗi stop sequence đã khớp có nằm trong văn bản trả về hay không: tài liệu không nói rõ nên bài không khẳng định.
- Nguồn có sự khác biệt về ngày (kết quả tìm kiếm có nhắc 2026-08-20 trong ghi chú SDK và 2026-10-07 trong release notes); bài chỉ dùng thông tin trong migration guide 2026-10-21, không nêu ngày chính xác bắt đầu áp dụng.
- Trang khóa Academy không cho xem nội dung bài 'Temperature' (chỉ có tên bài trong outline), nên không đối chiếu được với giáo trình đó.

## Bài 9
- Could not read the Academy curriculum for 'Building with the Claude API'. anthropic.skilljar.com returned 403, so the lesson's scope follows the docs, not the course outline.
- The 'about 2 seconds' quoted in the hint text is not used. The TTFT improvement in Exercise 1 is only described qualitatively: the docs give no specific latency figure.
- The docs do not say what the default thinking display is on Opus 5.5, where thinking is always on. The lesson only warns that index 0 may be a thinking block. It does not claim a default.
- The model 'claude-opus-5' together with tool_choice 'any' comes from the doc example. The lesson notes that Opus 5.5 and Sonnet 5.5 reject forced tool use, based on the Claude API errors page.
- Numbers that can change (128K max output, the 10-minute threshold, 2 SDK retries, 'stable' status of eager_input_streaming) are marked as checked on 2026-11-20.

## Bài 10
- Mẫu kinh điển 'prefill ```json + stop_sequences ["```"]' (Hình 4, câu hỏi 10) dựa trên nội dung khóa Academy 'Building with the Claude API'. Trang anthropic.skilljar.com trả 403 nên chưa đối chiếu được; tài liệu docs chỉ có riêng ví dụ prefill và ví dụ stop_sequences.
- Mình chưa đọc được nội dung khóa Academy tương ứng (skilljar trả 403), nên phạm vi và thứ tự bài bám theo docs thay vì outline của khóa.
- Ví dụ Pydantic Field(ge=1, le=5) được chuyển thành minimum/maximum rồi bị SDK bỏ đi: mình suy ra từ phần mô tả SDK transformation, không có ví dụ nguyên văn trong tài liệu.
- Ghi chú 'temperature không hỗ trợ trên Claude 4.7+' (giải thích câu 1) lấy từ trang Using the Messages API. Mình không kiểm tra riêng trên từng model.
- Model ID 'claude-sonnet-4-5' trong ví dụ prefill lấy nguyên từ tài liệu (alias của Sonnet 4.5, một model cũ). Trang Models overview chỉ ghi tên model và nói alias trỏ tới ID có ngày, không in chuỗi alias này.

## Bài 11
- Chưa đọc trang khóa Academy (Building with the Claude API / Claude with Amazon Bedrock / Claude on Google Cloud) để đối chiếu phạm vi và thứ tự bài giảng; academy/skilljar từng chặn truy cập tự động (403).
- Ô tool use system prompt tokens với tool_choice any/tool của Opus 5.5 và Sonnet 5.5 để trống trong trang Pricing; bài ghi '— (không ghi)'.
- Giá batch của Haiku 5.5 khi prompt > 100,000 token không có trong phần trích xuất, nên bài không nêu.
- Số lần retry mặc định của Python SDK chưa được xác minh; code mẫu đặt max_retries=5 tường minh, và việc SDK tự retry lỗi 429 là theo hiểu biết chung về SDK, chưa đối chiếu với tài liệu.
- Cách đọc e.body / e.response.headers của anthropic.RateLimitError và client.messages.with_raw_response chưa đối chiếu với tài liệu SDK trong lần này.
- Bảng chi phí ví dụ (chatbot 10,000 request/ngày) là số tự tính từ bảng giá, không phải số liệu do Anthropic công bố.
- Tất cả giá, giới hạn và model ID là theo tài liệu, kiểm tra ngày 2026-11-20; trước khi dùng vào ngân sách thật cần xem lại trang Pricing và Rate limits.

## Bài 12
- Trang be-clear-and-direct hiện chuyển hướng (redirect) về Prompting best practices. Mình đề xuất đổi sang anchor #be-clear-and-direct, nhưng như vậy sẽ trùng trang với link thứ 3 của bài. Có thể cân nhắc thay bằng trang test-and-evaluate/develop-tests.
- Các trang riêng về Console prompt generator / prompt improver (prompting-tools, prompt-generator) đều chuyển hướng về Prompting best practices, nên mình không đọc được chi tiết tính năng trong Console. Bài chỉ nhắc tới Prompt generator notebook (metaprompt) mà trang Overview có dẫn, và câu Console là nơi 'soạn và thử prompt trong trình duyệt' lấy từ trang Models overview.
- Không truy cập được nội dung bài học Academy 'Being clear and direct' / 'Being specific' (Skilljar trả 403 và yêu cầu đăng ký). Thứ tự bài trong khóa chỉ biết qua kết quả tìm kiếm.
- Danh sách 'các loại ngữ cảnh nên đưa vào' (mục đích, đối tượng, workflow, định nghĩa hoàn thành) là gợi ý của bài học, không phải danh sách nguyên văn trong tài liệu hiện hành. Bài đã ghi rõ điều này.
- Model ID claude-opus-5-5 và câu 'prefill ở lượt assistant cuối trả lỗi 400 từ Claude 4.6' theo tài liệu, kiểm tra ngày 2026-11-20. Đây là thông tin dễ thay đổi.

## Bài 13
- Không có trang tài liệu riêng về 'Prompt templates and variables' trên platform.claude.com (URL đó cũng chuyển về Prompting best practices). Nội dung phần template lấy từ tutorial chương 4 trên GitHub và từ cú pháp {{VAR}} trong các ví dụ của tài liệu.
- Không đọc được outline khóa Academy 'Building with the Claude API' (academy.claude.com/course/claude-with-the-anthropic-api trả 404). Phạm vi bài bám theo topics trong syllabus và trang Prompting best practices.
- Tutorial GitHub không công bố nguyên văn output của Claude trong ví dụ 'Yo Claude'. Các câu trả lời trong khung chat chỉ là minh họa, chỉ giữ ý 'Dear Claude' như tutorial mô tả.
- Các anchor (#structure-prompts-with-xml-tags, #use-examples-effectively, #long-context-prompting) trong docFixes được suy ra từ tiêu đề mục, chưa kiểm tra riêng từng anchor.
- Ghi chú chung: scratchpad dùng chung với các agent chạy song song (một agent khác đã ghi đè file scratch p2.html/p3.html). Bài 13 đã chuyển sang tên file riêng b13-*. Hai file đầu ra đã được kiểm tra nguyên vẹn, nhưng các agent khác có thể bị lẫn file scratch.

## Bài 14
- Both syllabus doc links (chain-of-thought, chain-prompts) redirect to the Prompting best practices page. The #anchor fragments in docFixes are inferred from the heading names and were not opened one by one.
- The Academy course outline (Building with the Claude API · Real world prompting) could not be read: anthropic.skilljar.com returned 403. The lesson's scope follows the GitHub course and Claude Docs.
- The GitHub page for the real_world_prompting folder does not render notebook cells. Content was taken from the raw .ipynb files for notebooks 01 and 03 only; notebooks 02, 04 and 05 were not read in detail and are described by title only.
- The context compaction page was not read. The glossary entry 'Nén ngữ cảnh' is a general description, not taken from that page.
- The parallel-steps principle for chaining is general design reasoning plus the docs' subagent guidance; the current chain-prompts page does not mention parallel chains directly.
- The IPA reference (共通フレーム / 安全なウェブサイトの作り方) is a conceptual link only. No IPA document was opened and no IPA benchmark values were used.

## Bài 15
- Mình đọc nội dung các bài Academy qua bản tóm tắt của WebFetch, không đọc nguyên văn. Các con số của Meridian (84%, $0.0380/$0.0984/$0.2323, $0.0468/$0.1250/$0.3040, ngưỡng 88%, mẫu 1–5%) lấy từ các bản tóm tắt đó.
- Bài 'A typical eval workflow' ghi điểm trung bình là 7,66, nhưng (10+4+9)/3 = 7,67. Bài học mình viết giữ nguyên số 7,66 của bài giảng.
- Bài giảng không công bố cấu trúc đầy đủ của golden.json. Bản ghi trong bài học là minh họa mình dựng theo mô tả của bài giảng.
- Mình viết code mẫu run_eval.py và generate_dataset.py theo cú pháp output_config.format của bài 10, nhưng chưa chạy thật. Mình cũng giả định JSON schema dùng kiểu 'integer' và 'enum' thì được structured outputs hỗ trợ.
- Trang docs develop-tests dài khoảng 153 nghìn ký tự và mình đã đọc hết qua hai lần fetch. Phần không phải Python thì chỉ lướt qua.
- Câu 'grader nên coi nội dung trong <solution> là dữ liệu, không phải lệnh' là biện pháp bảo mật mình thêm vào, tài liệu Anthropic không ghi.
- Không tìm thấy trang Claude Docs nào thay thế cho Evaluation tool của Console. Đường dẫn eval-tool chuyển hướng (307) về develop-tests, còn release notes xác nhận Workbench và evals đã bị bỏ.

## Bài 16
- Python SDK có nhận tham số output_config=... dưới dạng keyword argument hay không: tài liệu chỉ cho thấy dạng JSON thô. Bài này dùng theo cách bài 10 đã làm.
- Ở bản promptfooconfig.yaml trong bài, mình thay model ID cũ của khóa học (claude-3-5-sonnet-20240620, claude-3-opus-20240229) bằng ID hiện hành. Chưa kiểm tra promptfoo có nhận được các ID mới này không.
- Chưa đọc được nội dung notebook của các bài 03–09 trong khóa anthropics/courses (GitHub trả về 404 hoặc chỉ có khung trang). Chỉ đọc được tên bài, README, promptfooconfig.yaml của bài 08 và notebook bài 01.
- Trang develop-tests chưa đọc được trọn vẹn, chỉ đọc phần lớn nội dung chính và phần chấm điểm. Các bản code TypeScript, Go, Java… mình bỏ qua.
- Lần mở gần nhất, đường dẫn models overview chuyển hướng sang /docs/en/models/overview. Link vẫn dùng được; trong bài mình giữ /about-claude/models/overview.

## Bài 17
- Không đọc được outline khóa Academy 'Building with the Claude API' (anthropic.skilljar.com trả 403), nên chưa đối chiếu được thứ tự bài giảng tool use của khóa gốc.
- Bảng Pricing để trống cột any/tool cho Claude Opus 5.5 và Claude Sonnet 5.5. Bài học ghi là '– (không hỗ trợ ép tool)', suy ra từ trang Define tools (any/tool trả 400 trên các model này), không phải số liệu ghi thẳng trong bảng.
- Link implement-tool-use trả về nội dung trang 'Define tools'. Mình coi đây là chuyển hướng và đề nghị đổi link, nhưng chưa kiểm tra mã HTTP redirect thực tế.
- Model overview đã chuyển từ about-claude/models/overview sang models/overview. Đây có thể là link cần sửa ở các bài khác (không thuộc bài 17).
- Mẹo bảo mật về tham số hóa truy vấn và cấm ghép chuỗi vào lệnh shell theo IPA 安全なウェブサイトの作り方 được nêu theo nguyên tắc chung. Chưa trích dẫn số mục cụ thể trong tài liệu IPA vì không có tài liệu đó trong phiên này.
- Thư mục scratchpad dùng chung với các agent song song: các file tạm p2–p5.html của mình đã bị agent khác ghi đè. Mình đã chép bản của mình sang scratchpad/b17/ và ghép bài từ bản này. Đã kiểm tra lại nội dung cuối của bài, nhưng các agent khác dùng tên tạm chung có thể gặp xung đột tương tự.

## Bài 18
- Không đọc được trang khóa Academy 'Building with the Claude API' (skilljar chặn truy cập tự động), nên phạm vi và thứ tự bài bám theo topics trong syllabus và Claude Docs.
- Link implement-tool-use trả về nội dung trang 'Define tools' (url trong metadata là define-tools). Có thể đây là redirect; nên thay link trong syllabus bằng define-tools.
- Kết quả Bài tập 3 (Haiku 5.5 chấp nhận tool_choice tool, Opus 5.5 trả 400) suy ra từ bảng trong Define tools, chưa gọi API thật để kiểm tra.
- Trong code mẫu tool runner, đặt max_iterations ngay trong lệnh tool_runner(...) là cách tài liệu dùng ở mục 'Taking over message history'. Ví dụ cơ bản của tài liệu không có tham số này.
- Code mẫu agent_loop.py và parallel_tools.py do tác giả bài viết dựa trên các bước trong tài liệu, chưa chạy thử với API thật.

## Bài 19
- Không đọc trang khóa Academy 'Building with the Claude API' cho bài này, nên phạm vi bám theo syllabus và 4 trang docs.
- Trang Computer use tool chỉ đọc được 100.000/132.268 ký tự đầu. Thông tin computer use trong bài (phiên bản computer_toolset_20260801, beta header của bản cũ, khoảng 1.000–1.800 token mỗi ảnh chụp màn hình, các khuyến nghị bảo mật) lấy từ phần đã đọc.
- Tài liệu không nêu con số cụ thể cho thời gian chạy tối đa của mỗi lần gọi code execution (chỉ có mã lỗi execution_time_exceeded) và giới hạn số vòng lặp của pause_turn, nên bài không đưa ra số.
- Mọi giá, giới hạn và phiên bản tool (web search $10/1.000 lượt, code execution 1.550 giờ miễn phí và $0,05/giờ, 5 GiB RAM, 30 ngày, 974/745 token của text editor) lấy theo tài liệu, kiểm tra ngày 2026-11-20. Các số này có thể thay đổi.
- Code mẫu (pause_turn loop, handler text editor, tái sử dụng container) viết dựa trên ví dụ trong docs nhưng chưa được chạy thật với API.

## Bài 20
- anthropic.skilljar.com returned 403. The lesson list (RAG and Agentic Search: Introducing RAG, Text chunking strategies, Text embeddings, The full RAG flow, Implementing the RAG flow, BM25, Multi-Index RAG) was read from academy.claude.com instead. The content of each video lesson could not be read.
- The three chunking strategies (by size with overlap, by structure, by sentence/semantics) and the code-unit strategy are presented from general knowledge that matches the Academy lesson title. No official Anthropic page describing them in detail was read. The example values (800 characters, 100 overlap, 5 sentences) are labelled in the lesson as illustrations, not recommendations.
- The Claude Cookbook RAG guide: the prose says Claude 3 Haiku and Claude 3.5 Sonnet, but the code uses claude-haiku-5-5 and claude-sonnet-5-5. The lesson cites only the metric definitions and k=3, not the benchmark numbers.
- The prompt-injection, access-control and PII-masking guidance comes from the IPA security rules and general practice. It is not quoted from an Anthropic RAG document.
- Voyage AI pricing was not included. The docs only point to the MongoDB pricing page.

## Bài 21
- Đề cương chi tiết khóa Academy 'Building with the Claude API' (anthropic.skilljar.com trả 403): thiết kế lớp Retriever đa chỉ mục (add_document/search) trong bài được mô tả theo hướng chung, chưa đối chiếu được với bài giảng gốc
- Giá trị BM25 k1=1.2, b=0.75 trong code mẫu và hằng số rrf_k=60 mặc định trong Retriever là giá trị quy ước phổ biến, không lấy từ tài liệu Anthropic (cookbook dùng biến thể có trọng số weight*1/(rank+1))
- Chữ ký Voyage vo.rerank(query, documents, model, top_k) và các trường results[].index / relevance_score lấy từ kết quả tìm kiếm tài liệu MongoDB/SDK, chưa đọc trực tiếp trang API reference
- Chi phí $1.02 / triệu token tài liệu là số của bài viết năm 2024 (dùng Claude 3 Haiku); giá với các model hiện hành có thể khác
- Hàng 'Contextual BM25 hybrid' trong cookbook có số liệu không nhất quán (phần chữ 86.43/93.21/94.99% vs kết quả chạy 88.86/92.31/95.23%), nên đã bỏ khỏi bảng
- Ước tính reranking 100–200 ms và ~$0.002/truy vấn là số ước lượng của notebook cookbook (Cohere), phụ thuộc giá nhà cung cấp

## Bài 22
- Không đọc được nội dung khóa Academy 'Building with the Claude API' (anthropic.skilljar.com trả 403), nên chưa đối chiếu được phạm vi và thứ tự bài giảng gốc về thinking.
- Trang Extended thinking hiện xếp extended thinking (type enabled + budget_tokens) vào nhóm legacy. Bài học lấy adaptive thinking + effort làm nội dung chính và đổi trọng tâm so với tên bài trong syllabus ('Extended Thinking & Effort'). Cân nhắc đổi tiêu đề syllabus thành 'Thinking (adaptive/extended) & Effort'.
- Link 'Extended thinking tips' trong syllabus chuyển hướng sang trang 'Prompting best practices'; nội dung mẹo lấy từ mục 'Leverage thinking and interleaved thinking capabilities' của trang đó.
- Bài tập 3: tài liệu chỉ nói việc gửi lại thinking block trong lượt tool use là bắt buộc và block bị sửa sẽ trả lỗi 400. Tài liệu không nói rõ việc bỏ hẳn thinking block (thay vì sửa) với adaptive thinking dẫn tới lỗi gì, nên bài học chỉ mô tả hậu quả một cách thận trọng.
- Mọi model ID, giá, effort mặc định, các giới hạn (1.024, 32K, 21.333, 128K/64K) và beta header đã đối chiếu với tài liệu, kiểm tra ngày 2026-11-20. Các giá trị này dễ thay đổi.

## Bài 23
- Không đọc được trang khóa Academy 'Building with the Claude API' (anthropic.skilljar.com trả 403), nên chưa đối chiếu được phạm vi và thứ tự bài giảng gốc về image/PDF.
- Trang Vision chỉ ghi mức High-resolution áp dụng cho 'Claude 4.7 and later models', không liệt kê từng model. Việc Haiku 5.5 / Sonnet 5.5 thuộc mức High-res là suy ra từ câu đó; tài liệu chỉ nêu tên cụ thể Opus 5.5 (trong ví dụ chi phí). Bài học không ghi tên Haiku 5.5 / Sonnet 5.5 là High-res.
- Ước lượng chi phí PDF 100 trang trong bài là phép tính tự làm từ con số theo trang (1.500–3.000 token văn bản, ≤ 1.568 token ảnh), không phải số liệu tài liệu công bố; bài đã ghi rõ điều này.
- Bài tập 3 nói cache có thể không được tạo nếu tài liệu ngắn hơn độ dài cache tối thiểu: chi tiết thuộc trang Prompt caching (bài 25), chưa đọc trong lượt này.
- Mức giảm giá 50% của Message Batches lấy từ chú thích giá ở trang Models overview, không lấy từ trang Batch processing.
- Mọi giới hạn, giá và model ID (claude-opus-5-5, claude-sonnet-5-5, Haiku 4.5 $1/MTok, Opus 5.5 $4/MTok) đều theo tài liệu, kiểm tra ngày 2026-11-20, và có thể thay đổi.

## Bài 24
- Mình chưa đọc được trang khóa học Academy ("Building with the Claude API") để đối chiếu phạm vi và thứ tự bài giảng, vì anthropic.skilljar.com chặn truy cập tự động. Nội dung bài chỉ dựa trên hai trang docs: Citations và Search results.
- Model ID claude-opus-5-5 lấy từ code mẫu và danh sách supportedModels trên chính hai trang docs, kiểm tra ngày 2026-11-20. Mình chưa đối chiếu riêng với trang Models overview.
- Tài liệu chỉ ghi trường title của document 'bị giới hạn độ dài', không nêu con số cụ thể. Bài không ghi con số nào.
- Bài tập 4 nói request trộn search result bật/tắt citations sẽ bị 'từ chối'. Tài liệu chỉ ghi chung là 'results in an error', không nêu mã lỗi cụ thể. Mã 400 chỉ được tài liệu nêu cho trường hợp dùng chung citations với structured outputs.
- Phần bảo mật (escape chống XSS, kiểm soát scheme của link, chống prompt injection trong tài liệu) là khuyến nghị bổ sung theo tinh thần IPA「安全なウェブサイトの作り方」. Hai trang docs của Anthropic không có nội dung này, và mình cũng chưa trích điều khoản IPA cụ thể.

## Bài 25
- Mình chưa mở trang khóa Academy "Building with the Claude API" để đối chiếu phạm vi và thứ tự bài giảng. Nội dung bài chỉ dựa trên tài liệu platform.claude.com.
- Phần chi tiết về cache diagnostics lấy từ trang cache-diagnostics. Ví dụ code trên trang này dùng client.beta.messages, nhưng metadata của trang lại ghi status: stable. Mình giữ nguyên cách gọi client.beta.messages như trong ví dụ của tài liệu.
- Ví dụ tính chi phí (10 request, tài liệu 100k token, tổng $0,68) và phép tính điểm hòa vốn là do mình tự tính từ bảng giá trên trang Prompt caching (kiểm tra ngày 2026-11-20), tài liệu không có sẵn các con số này.
- Callout bảo mật về ứng dụng multi-tenant là khuyến nghị theo IPA, không lấy từ tài liệu Anthropic. Trong tay chưa có tài liệu IPA gốc nên chưa trích dẫn được mục cụ thể.

## Bài 26
- Chưa đọc trang khóa Academy 'Building with the Claude API' cho bài này. Phạm vi bài bám theo các trang docs, chưa đối chiếu với thứ tự bài giảng của khóa.
- Ví dụ tính chi phí (10.000 review × 200 input token) dùng số token giả định để minh họa. Đơn giá batch của Haiku 5.5 thì lấy từ trang Batch processing (kiểm tra 2026-11-20).
- Python SDK (`client.messages.batches.results`, `outcome.message.content[0].text`, `client.beta.messages.count_tokens` với `context_management`): theo các ví dụ trong docs, chưa chạy thử thật.
- Chi tiết trang Batch processing: dòng 'mỗi organization có tối đa 100 workspace' lấy từ cảnh báo trên trang Files API. Trang rate limits của Batches API chưa đọc, nên bài không nêu con số rate limit cụ thể của batch.
- Hàm `safe_path` mẫu cho memory tool do bài tự viết theo các khuyến nghị bảo mật trong docs, không phải code chính thức của Anthropic.

## Bài 27
- Trang MCP hiện hành phục vụ đặc tả 2026-07-28 (dạng stateless, có server/discover, không còn initialize). Khóa Academy 'Introduction to Model Context Protocol' có thể vẫn dạy theo mô hình initialize/session cũ. Mình chỉ đọc được outline của khóa, chưa xem nội dung từng bài giảng. Bài học có ghi chú rõ chỗ khác nhau giữa hai mô hình.
- Phần MCP trong code Bài tập 3 (client.list_tools / client.call_tool, thuộc tính t.inputSchema) là pseudo-code viết theo mẫu trong trang Architecture. Mình chưa đối chiếu với API thật của MCP Python SDK; bài 28–29 sẽ làm phần này.
- Đáp án câu 7 nói Messages API dùng input_schema, còn MCP dùng inputSchema: mình dựa vào bài 17 và tài liệu MCP, không đọc lại trang tool use của Claude trong lần gen này.
- Chưa đọc các trang Authorization spec, Versioning và client-concepts chi tiết. Phần Multi Round-Trip Requests (MRTR) và elicitation chỉ tóm tắt theo trang Architecture và trang Streamable HTTP.

## Bài 28
- Python version requirement conflicts between sources: the Build an MCP server tutorial says Python 3.10+, the python-sdk README says 3.11+. The lesson shows 3.11+ and notes the 3.10+ figure.
- The exact import path of ToolAnnotations in SDK v2 was not confirmed. The lesson only comments that it is likely in mcp.types.
- The import path of ResourceError and ResourceNotFoundError was not confirmed (their error codes -32602/-32603 were). The sample code uses a plain KeyError instead.
- The academy course outline for 'Introduction to Model Context Protocol' could not be read (anthropic.skilljar.com returned 403). The lesson scope follows the syllabus topics and the MCP docs.
- These Inspector commands are built from the documented 'pass the server launch command' pattern, not copied verbatim: 'npx @modelcontextprotocol/inspector uv --directory ... run weather.py' and the '--cli uv run weather.py --method tools/list' variant.
- The DocumentMCP example (docs_server.py, read_doc/edit_document, format_doc/summarize_doc) was written to illustrate the lesson. It is not official sample code; it uses only API that was verified.

## Bài 29
- Không đọc được trang khóa Academy 'Introduction to Model Context Protocol' (anthropic.skilljar.com trả 403), nên chưa đối chiếu được thứ tự bài giảng của khóa gốc.
- Bài giải thích ClientSession theo hai nguồn: ví dụ helpers của Anthropic (ClientSession + initialize) và hướng dẫn MCP (Client, SDK 2.0.0+). Chưa xác minh được ClientSession có còn hoạt động trong MCP Python SDK 2.0.0+ không.
- Code client Python trong bài đã rút gọn từ mã chính thức (gộp chat_loop vào main, bỏ dòng log [Calling tool ...]) và chưa chạy thử thật.
- anthropic-version '2026-10-21' và các beta header (mcp-client-2025-11-20, mcp-client-2026-09-15) chép từ tài liệu kiểm tra ngày 2026-11-20, có thể thay đổi.
- Bài tập 2: chuỗi khối kết quả mong đợi ['text','mcp_tool_use','mcp_tool_result','text'] là suy luận minh họa, tài liệu không nêu nguyên văn.

## Bài 30
- Nội dung chi tiết từng bài của khóa Academy "MCP: Advanced topics": chỉ đọc được outline (11 bài, khoảng 1,5 giờ) trên academy.claude.com. anthropic.skilljar.com trả lỗi 403, nên không xác minh được video/walkthrough của khóa dùng mô hình legacy nào.
- Callout liên hệ IPA (「安全なウェブサイトの作り方」) chỉ gắn chung với các nhóm biện pháp xác thực, CSRF và chuyển hướng mở. Mình không có tài liệu IPA trong tay nên không trích số mục cụ thể; đây là điểm cần kiểm tra lại.
- Code mẫu ở Bài tập 2 (Python anthropic SDK, model claude-haiku-5-5) và Bài tập 3 (HMAC bằng thư viện chuẩn) chưa được chạy thử. Model ID đã đối chiếu với Models overview ngày 2026-11-20.
- Bài không có code dùng MCP Python/TypeScript SDK cho MRTR/elicitation, vì tài liệu đã đọc không cho biết API của SDK v2 cho các tính năng này. Các ví dụ dùng JSON-RPC thô lấy từ đặc tả.

## Bài 31
- Trang Academy academy.claude.com/courses/building-with-the-claude-api chỉ đọc được tên các bài trong phần 'Agents and workflows' (Agents and workflows, Parallelization workflows, Chaining workflows, Routing workflows, Agents and tools, Environment inspection, Workflows vs agents, Quiz). Chưa đọc được nội dung chi tiết từng video. anthropic.skilljar.com trả 403.
- Code mẫu chain/parallel/route trong bài được viết lại theo mô tả notebook basic_workflows.ipynb (chỉ đọc được chữ ký hàm và phần tóm tắt), không chép nguyên văn từ notebook. Notebook orchestrator_workers và evaluator_optimizer chưa đọc nội dung code.
- Bài 'Building effective agents' hiện ghi rằng nhiều công cụ đã thay đổi từ 12/2024 và cách tiếp cận mới nằm trong tài liệu 'Managed Agents'. Chưa đọc tài liệu Managed Agents.
- Các số liệu 90,2%, ~4×, ~15×, 'tới 90%' lấy từ bài multi-agent research system (đo trên Claude Opus 4 / Sonnet 4). Đây là số đo nội bộ tại thời điểm bài viết, có thể không còn đúng với các model hiện hành.
- Model ID (claude-opus-5-5, claude-sonnet-5-5, claude-haiku-5-5) và context window 1M lấy từ trang Models overview, kiểm tra ngày 2026-11-20. Chưa chạy thử code mẫu với API thật.

## Bài 32
- Không đọc được trang khóa Academy 'Building with the Claude API – Agents and workflows' (trường academy) để đối chiếu phạm vi/thứ tự bài giảng; nội dung bám theo 2 bài engineering trong docs.
- Tham số chi tiết của compaction (trigger mặc định, edit compact_20260112, tham số compaction) chỉ đọc ở mức tổng quan: trang Compaction overview và đoạn nhắc trong trang Context editing; chưa đọc các trang con compaction-on-demand / compaction-threshold.
- Câu nói rằng tài liệu IPA「安全なウェブサイトの作り方」có khuyến nghị chống directory traversal dựa trên trí nhớ, chưa mở tài liệu IPA để trích dẫn mục cụ thể.
- Các ví dụ hội thoại (sửa test hóa đơn) và tình huống trong quiz là minh họa do bài học tự dựng, không lấy từ tài liệu Anthropic.

## Bài 33
- Không tìm thấy khóa 'Claude Platform 101' trên academy.claude.com (trang chủ chỉ hiện 3 khóa AI Fluency / capabilities / human-agent teams), nên chưa đối chiếu được phạm vi và thứ tự bài giảng với khóa Academy tương ứng.
- Link syllabus cũ trả redirect: platform.claude.com/docs/en/agent-sdk/overview trả 307 sang code.claude.com; bài anthropic.com/engineering trả 308 sang claude.com/blog. Bài học đã dùng URL mới trong #sources, còn syllabus.js vẫn giữ link cũ (xem docFixes).
- Code mẫu chỉ dùng alias model ('sonnet', 'opus') như ví dụ chính thức, không dùng model ID đầy đủ; mình chưa đối chiếu với trang Models overview.
- Mọi giới hạn mặc định (độ sâu subagent 3, đồng thời 20, hook timeout 600 giây, Node 18.14+, Python 3.10+) lấy từ trang docs ngày 2026-11-20 và phụ thuộc phiên bản SDK / Claude Code; các con số này có thể thay đổi.
- Ví dụ tool get_stock trong bài là ví dụ tự viết theo đúng mẫu API chính thức (weather tool), chưa chạy thử thực tế.

## Bài 34
- Phần so sánh Skill với CLAUDE.md / hooks / subagents / MCP (khối .compare ở phần Claude Code): mình không đọc được nội dung chi tiết của bài 4 trong khóa Academy. Phần này tóm từ các mô tả ngắn trên trang Claude Code skills (mục troubleshooting về hooks và mục Related resources).
- Trang skills-guide chỉ đọc được 100.000 / 145.606 ký tự. Phần đã đọc không nhắc tới beta header nào, và trang overview ghi status là stable. Vì vậy bài viết rằng hiện không cần beta header, nhưng chưa xác minh được phần cuối của trang.
- Phạm vi chia sẻ custom Skill trên claude.ai: tài liệu chỉ nói rằng Skill được upload dạng zip trong cài đặt và không đồng bộ sang API. Mình chưa đọc trang trợ giúp support.claude.com để biết Skill dùng được cho cá nhân hay cả tổ chức.
- Model ID claude-opus-5-5 lấy từ ví dụ trong skills-guide và danh sách supportedModels của trang overview. Mình chưa mở trang Models overview để đối chiếu (kiểm tra ngày 2026-11-20).
- Đoạn code xử lý pause_turn có giới hạn 10 lần là code mình tự viết theo mô tả trong tài liệu, không chép nguyên văn từ trang nguồn. Code này chưa được chạy thử với API thật.
- Link Academy trong syllabus (AC + 'introduction-to-agent-skills' = https://academy.claude.com/courses/introduction-to-agent-skills) vẫn hoạt động, nên không cần sửa.

## Bài 35
- Trang Academy 'Building effective human-agent teams' chỉ công bố tên bài và 4 nguyên tắc (không có mô tả chi tiết từng bài); phần diễn giải 4 nguyên tắc và checklist tổ chức trong bài là tổng hợp từ framework của Anthropic và tài liệu Claude Code, không phải nội dung nguyên văn của khóa.
- Bậc thang gradual release 4 bậc (chỉ đọc → đề xuất → làm có duyệt → tự làm việc thường lệ) là mô hình minh họa của bài học, không phải phân loại chính thức của Anthropic.
- Số liệu từ 'Measuring AI agent autonomy in practice' (20%→>40% auto-approve, 5%→9% interrupt, 35%/32%, 0,8% trên 998.481 tool call) lấy qua bản tóm tắt WebFetch, chưa đối chiếu từng câu trong bài gốc.
- Không dùng model ID trong code mẫu (code dùng Agent SDK không cần model); trang mitigate-jailbreaks nhắc 'Claude Haiku 5.5' nhưng chưa xác minh với Models overview nên không đưa vào bài.
- Không mở được nội dung chi tiết từng bài học bên trong khóa Academy (cần đăng nhập).

## Bài 36
- Trang Permission modes dài hơn giới hạn WebFetch: chỉ đọc được khoảng 100000/121282 ký tự đầu, phần chi tiết về critical paths ở cuối trang chưa đọc.
- Bảng yêu cầu model của auto mode chỉ được tóm lược trong bài (nêu các model KHÔNG được hỗ trợ), không chép đủ danh sách vì dễ thay đổi.
- Thuật ngữ 'Headless / print mode' cho claude -p lấy từ hiểu biết chung về CLI reference; trang này chưa được đọc trong lần gen (Quickstart chỉ ghi 'Run one-off query, then exit').
- Phần JetBrains chỉ dựa trên trang Overview (plugin cần CLI cài riêng); trang jetbrains.md chưa được đọc.
- Scratchpad bị các agent song song dùng chung: file tạm p2.html/p3.html bị agent khác ghi đè giữa chừng. Mình đã viết lại vào thư mục riêng b36x/ và đối chiếu lại nội dung bài cuối cùng (check-lesson báo ✓), nhưng nên đặt tên file tạm riêng cho từng agent.

## Bài 37
- Link anthropic.com/engineering/claude-code-best-practices trả 308 chuyển hướng vĩnh viễn sang code.claude.com/docs/en/best-practices. Bài học dùng nội dung của trang mới; cần sửa link trong syllabus (xem docFixes).
- Trang Academy 'Claude Code in action' chỉ có dàn ý 9 bài, không có nội dung chi tiết từng bài. Phạm vi bài học bám theo dàn ý đó.
- Trang permission-modes không ghi rõ plan được lưu ở đâu (chỉ nhắc ~/.claude/plans/ trong mục protected paths), nên bài học không nêu vị trí lưu plan.
- Số liệu dễ thay đổi đều ghi kèm 'kiểm tra ngày 2026-11-20': effort mặc định medium cho Opus 5.5 / Sonnet 5.5 / Haiku 5.5 / Fable 5.2; ngưỡng auto-compact khoảng 967K cho model 1M; TTL prompt cache khoảng 1 giờ (subscription) / 5 phút (API key); các mốc phiên bản v2.1.277 và v2.1.283.
- Hình 2 (SVG mức dùng context) chỉ để minh họa, không theo tỉ lệ. Các số 22,225 / 17,095 token là số ví dụ của tài liệu.

## Bài 38
- Link slash-commands: WebFetch trả về nội dung giống trang Skills (cùng độ dài 119715 ký tự) và không có mục riêng cho custom commands. Có lẽ link đã chuyển hướng sang /skills nhưng chưa xác nhận được mã redirect, vì curl không truy cập được domain (mã 000).
- Trang Skills hiện hành không ghi rõ đường dẫn ~/.claude/commands/ cho command cá nhân, nên bài học không nhắc tới.
- Giới hạn subagent (lồng tối đa 3 tầng, tối đa 20 subagent chạy đồng thời, cảnh báo khi tổng description vượt 15.000 token) lấy từ tài liệu Subagents, kiểm tra ngày 2026-11-20. Các số này có thể thay đổi theo phiên bản.
- Chưa đọc trang khóa Academy 'Claude Code in action' và 'Introduction to agent skills' (trang skilljar trước đó chặn truy cập tự động). Phạm vi bài dựa trên trường topics trong syllabus.
- Trang Plugins overview (CC + 'plugins') vẫn hoạt động, không cần sửa. Nội dung chi tiết lấy thêm từ trang con plugins/create.

## Bài 39
- WebFetch chỉ đọc được khoảng 100.000 ký tự đầu của trang Hooks reference (tổng khoảng 295.000 ký tự). Vì vậy schema input riêng của từng sự kiện và đầy đủ các trường quyết định (ví dụ chi tiết PermissionRequest, decision của Stop) chưa được đối chiếu hết. Bài chỉ dùng các trường đã thấy trong phần đọc được và trong trang hooks-guide.
- Model ID 'claude-sonnet-5' và 'claude-opus-5-5' chỉ xuất hiện trong ví dụ của trang Settings. Chưa đối chiếu với trang Models overview của platform.claude.com.
- Trang khóa Academy 'Claude Code in Action' không có bài riêng về MCP và settings. Phần MCP và settings của bài lấy hoàn toàn từ code.claude.com, không có khóa Academy tương ứng.
- Các con số đều theo tài liệu, kiểm tra ngày 2026-11-20, và dễ thay đổi theo phiên bản: timeout 600/30/60 giây, giới hạn 10.000 ký tự, giới hạn chặn 8 lần của Stop hook, MCP output 10.000/25.000 token, 50.000 ký tự, tên tool tối đa 128 ký tự.
- Bài có nhắc tới tài liệu IPA (安全なウェブサイトの作り方, セキュア・プログラミング講座) nhưng không trích số liệu nào. Chưa đọc trực tiếp các tài liệu IPA này.

## Bài 40
- Link CC + "headless" vẫn mở được bình thường (không chuyển hướng), nhưng tiêu đề trang hiện là "Run Claude Code programmatically", không còn là "Headless mode". Có thể cân nhắc đổi trường t trong syllabus; mình chưa sửa vì bị cấm chỉnh syllabus.js.
- Không đọc được các trang con: Code Review costs/setup/customize, CLI reference, trang security.md của claude-code-action, migration guide. Vì vậy bài không nêu giá Code Review hay danh sách đầy đủ các input của Action.
- Mọi số phiên bản Claude Code (v2.1.302: Manual mode là mặc định của -p; v2.1.259: có --permission-prompts) và các giới hạn (stdin 10MB, chờ background 10 phút, exit code 143) lấy từ tài liệu ngày 2026-11-20 và dễ thay đổi.
- Phần kiểm chứng (verify) dựa trên mục tiêu học tập ghi trên trang khóa Academy "Claude Code in action". Mình chưa đọc nội dung chi tiết từng bài của khóa (Scheduled tasks and headless, GitHub Actions and Code Review, Trust it).
- Phần bảo mật có đối chiếu với IPA「安全なウェブサイトの作り方」và「セキュア・プログラミング講座」theo nguyên tắc chung (quản lý credential, đặc quyền tối thiểu, kiểm tra dữ liệu ngoài). Mình chưa mở tài liệu IPA để trích chương mục cụ thể, nên đây là điểm cần xác nhận lại.

## Bài 41
- Mình chỉ ghi giá của Claude Haiku 5.5 là 'từ $0.10 / từ $0.50' mỗi MTok, đúng như trang Models overview. Trang Batch processing cho thấy giá chia bậc theo độ dài prompt (mốc 100.000 tokens), nhưng mình chưa đọc trang Pricing nên không ghi chi tiết.
- Mình không đọc được phần so sánh các cách chấm điểm (code-based, human, LLM-based) trong trang develop-tests vì WebFetch bị cắt ở 100k ký tự. Phần so sánh ưu nhược điểm trong bài dựa trên phần đã đọc được và các ví dụ của trang.
- Đoạn code mẫu dùng thuộc tính `cache_control` ở cấp cao nhất kèm `client.messages.stream(...)` của Python SDK, cùng các lớp lỗi `anthropic.RateLimitError` và `anthropic.APIStatusError` với `e.response.headers`. Cách gọi này suy ra từ tài liệu API, mình chưa chạy thử với phiên bản SDK hiện tại.
- Trong đoạn sàng lọc, mình chỉ dùng `output_config.format` và không đặt chung với `effort`, vì tài liệu không có ví dụ nào gộp hai trường này trong cùng một `output_config`.
- Trang Academy 'Building with the Claude API' chỉ cho biết mục Final Assessment là một bài quiz, không có nội dung chi tiết. Phần capstone trong bài là tổng hợp do mình biên soạn, không phải nội dung chính thức của Academy.
- Các ghi chú về IPA (安全なウェブサイトの作り方, セキュア・プログラミング講座, 共通フレーム, 非機能要求グレード) chỉ nêu nguyên tắc chung, không trích con số nào. Mình chưa đối chiếu với tài liệu IPA gốc.