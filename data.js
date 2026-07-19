/*
 * NỘI DUNG CÓ THỂ CHỈNH SỬA
 * Cập nhật thông tin ở đây; ba trang sẽ tự động dùng dữ liệu mới.
 */
window.PORTFOLIO_DATA = {
  student: {
    fullName: "Nguyễn Phương Anh",
    studentId: "25022712",
    dateOfBirth: "[CẬP NHẬT SAU]",
    className: "[CẬP NHẬT SAU]",
    major: "Văn hóa và Truyền thông xuyên quốc gia",
    university: "Trường Đại học Ngoại ngữ — ĐHQGHN (ULIS)",
    introduction: "Mình quan tâm đến cách văn hóa dịch chuyển qua biên giới, được kể lại trên nền tảng số và tạo nên những cộng đồng mới. Portfolio này ghi lại hành trình học cách tìm kiếm, hợp tác, sáng tạo và sử dụng công nghệ có trách nhiệm.",
    quote: "Mỗi thông điệp đi qua một biên giới đều mang theo một câu chuyện văn hóa.",
    profileImage: "1784379710102_8972250725667587981_8972250725667587981_0396a951212b9f0ce94778fc1e460bd7.jpg",
    secondaryImage: "1784379710054_8972250725667587981_8972250725667587981_db216c7719dbb5e2393c818b6cca388a.jpg"
  },
  course: {
    name: "Nhập môn công nghệ số và ứng dụng TTNT",
    code: "ULIS.C4",
    teacher: "[TÊN GIẢNG VIÊN — CẬP NHẬT SAU]",
    year: "2026"
  },
  culturalKeywords: ["CULTURE", "MEDIA", "문화", "VĂN HÓA", "COMMUNICATION", "文化", "KẾT NỐI", "TRANSNATIONAL"],
  milestones: [
    { phase: "Chặng 01", date: "Khởi đầu", title: "Sắp xếp thế giới số", text: "Từ những thao tác tệp cơ bản, mình xây nền tảng làm việc ngăn nắp và có thể kiểm chứng.", icon: "folder" },
    { phase: "Chặng 02", date: "Khám phá", title: "Theo dấu dòng chảy Hallyu", text: "Học cách tìm và đánh giá nguồn để nhìn Hallyu như một hiện tượng truyền thông xuyên quốc gia.", icon: "globe" },
    { phase: "Chặng 03", date: "Thử nghiệm", title: "Đặt câu hỏi cho AI", text: "Từ prompt đơn giản đến cấu trúc có vai trò, ràng buộc và tiêu chí chống bịa đặt.", icon: "spark" },
    { phase: "Chặng 04", date: "Cộng tác", title: "Kết nối một nhóm làm việc", text: "Phối hợp Trello, Google Docs và Discord để giữ tiến độ, tài liệu và giao tiếp cùng một nhịp.", icon: "network" },
    { phase: "Chặng 05", date: "Sáng tạo", title: "Biến ý tưởng thành nội dung", text: "Kết hợp nhiều công cụ AI nhưng vẫn giữ vai trò biên tập và dấu ấn cá nhân ở sản phẩm cuối.", icon: "media" },
    { phase: "Chặng 06", date: "Phản tư", title: "Chọn trách nhiệm làm la bàn", text: "Minh bạch, kiểm chứng và trích dẫn trở thành nguyên tắc cho mọi hành trình công nghệ tiếp theo.", icon: "compass" }
  ],
  stats: [
    { value: 6, suffix: "/6", label: "Bài tập hoàn thành" },
    { value: 9, suffix: "+", label: "Công cụ đã trải nghiệm" },
    { value: 5, suffix: "", label: "Năng lực cốt lõi" },
    { value: 1, suffix: "", label: "La bàn trách nhiệm" }
  ],
  assignments: [
    {
      id: "01", category: "Nền tảng số", pages: 5,
      title: "Thực hành quản lý tệp",
      shortTitle: "File systems",
      description: "Làm quen với cấu trúc thư mục và các thao tác tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp.",
      objective: "Hoàn thành chuỗi thao tác quản lý tệp và thư mục trên Windows theo đúng trình tự.",
      process: "Thực hành từng bước, ghi nhận kết quả và dùng hình ảnh làm minh chứng.",
      challenge: "Duy trì đúng cấu trúc và tên tệp qua nhiều bước liên tiếp.",
      learned: "Phân biệt rõ sao chép, di chuyển, xóa tạm thời và xóa vĩnh viễn.",
      tools: ["File Explorer", "DOCX", "PDF"],
      file: "bài 1.pdf", preview: "assets/previews/assignment-1.png", icon: "folder"
    },
    {
      id: "02", category: "Nghiên cứu", pages: 7,
      title: "Tìm kiếm & đánh giá nguồn học thuật",
      shortTitle: "Hallyu research",
      description: "Khảo sát Hallyu như một hiện tượng văn hóa và truyền thông xuyên quốc gia qua hệ thống nguồn có chọn lọc.",
      objective: "Tìm kiếm, sàng lọc và đánh giá tài liệu học thuật liên quan trực tiếp đến chuyên ngành.",
      process: "Xây bộ từ khóa, khoanh giai đoạn từ 2015 đến nay và đối chiếu nhiều loại nguồn.",
      challenge: "Giữ phạm vi đủ hẹp để có trọng tâm nhưng đủ rộng để phản ánh nhiều khía cạnh Hallyu.",
      learned: "Đánh giá độ tin cậy, tính liên quan, tác giả, phương pháp và giá trị sử dụng của nguồn.",
      tools: ["Google Scholar", "KOFICE", "Academic sources"],
      file: "bài 2.pdf", preview: "assets/previews/assignment-2.png", icon: "globe"
    },
    {
      id: "03", category: "AI & nội dung", pages: 6,
      title: "Phát triển kỹ năng viết prompt",
      shortTitle: "Prompt design",
      description: "Thiết kế ba cấp độ prompt cho các tác vụ học tập và phân tích sự khác biệt trong chất lượng đầu ra.",
      objective: "Thử nghiệm prompt cho tóm tắt, giải thích và tạo câu hỏi ôn tập.",
      process: "Bổ sung vai trò, ngữ cảnh, ràng buộc, cấu trúc đầu ra và tiêu chí chống bịa đặt.",
      challenge: "Giảm ảo giác và tránh câu trả lời chung chung, thiếu chiều sâu.",
      learned: "Một prompt hiệu quả cần mục tiêu, giới hạn, ngữ cảnh và định dạng rõ ràng.",
      tools: ["Generative AI", "Prompting", "Active Recall"],
      file: "bài 3.pdf", preview: "assets/previews/assignment-3.png", icon: "spark"
    },
    {
      id: "04", category: "Cộng tác", pages: 7,
      title: "Cộng tác trực tuyến trong dự án nhóm",
      shortTitle: "Connected team",
      description: "Phân tích cách Trello, Google Docs và Discord hỗ trợ phối hợp công việc, tài liệu và trao đổi nhóm.",
      objective: "Ứng dụng công cụ hợp tác trực tuyến và phản tư về hiệu quả trong dự án nhóm.",
      process: "Thiết lập luồng công việc, phân công, quản lý tài nguyên và tổng hợp ưu điểm, hạn chế.",
      challenge: "Phối hợp thời gian, theo dõi tiến độ và tránh phân tán tài liệu.",
      learned: "Công cụ chỉ hiệu quả khi đi cùng quy ước giao tiếp và trách nhiệm cập nhật.",
      tools: ["Trello", "Google Docs", "Discord"],
      file: "bài 4.pdf", preview: "assets/previews/assignment-4.png", icon: "network"
    },
    {
      id: "05", category: "AI & nội dung", pages: 9,
      title: "AI tạo sinh & sáng tạo nội dung",
      shortTitle: "Creative media",
      description: "Kết hợp Gemini, ChatGPT và Canva AI để phát triển dự án về ứng dụng AI trong quá trình tự học ngoại ngữ.",
      objective: "Dùng ba công cụ AI tạo sinh để phát triển một sản phẩm có tính độc bản và phản tư.",
      process: "Gemini lên ý tưởng, ChatGPT phát triển nội dung, Canva AI trực quan hóa; sau đó biên tập bằng kinh nghiệm cá nhân.",
      challenge: "Giữ cấu trúc súc tích và bảo đảm sản phẩm cuối mang dấu ấn người học.",
      learned: "Phân vai công cụ theo thế mạnh, đánh giá đầu ra và chủ động bổ sung góc nhìn cá nhân.",
      tools: ["Gemini", "ChatGPT", "Canva AI"],
      file: "bài 5.pdf", preview: "assets/previews/assignment-5.png", icon: "media"
    },
    {
      id: "06", category: "Đạo đức số", pages: 6,
      title: "Sử dụng AI có trách nhiệm",
      shortTitle: "Ethical compass",
      description: "Phản tư về trung thực học thuật, trích dẫn, quyền sở hữu trí tuệ và bộ nguyên tắc cá nhân khi dùng AI.",
      objective: "Phân tích chính sách, vấn đề đạo đức và đề xuất nguyên tắc sử dụng AI trong học tập.",
      process: "Đối chiếu chính sách, mô tả prompt và đầu ra, đánh giá chỉnh sửa và nhận diện ranh giới hỗ trợ–gian lận.",
      challenge: "Cân bằng hiệu quả công nghệ với sự phát triển năng lực cá nhân.",
      learned: "Luôn công khai mức độ sử dụng AI, kiểm chứng đầu ra và chịu trách nhiệm với sản phẩm cuối.",
      tools: ["AI ethics", "Policy analysis", "Citation"],
      file: "bài 6.pdf", preview: "assets/previews/assignment-6.png", icon: "compass"
    }
  ],
  skills: [
    { name: "Nghiên cứu & đánh giá nguồn", group: "Research", note: "Đọc nguồn bằng tư duy phản biện" },
    { name: "Kể chuyện xuyên văn hóa", group: "Culture", note: "Nhìn thông điệp trong bối cảnh" },
    { name: "Prompt design", group: "Technology", note: "Đặt câu hỏi có cấu trúc" },
    { name: "Cộng tác số", group: "Communication", note: "Phối hợp người, việc và kênh" },
    { name: "Biên tập nội dung", group: "Media", note: "Giữ tiếng nói cá nhân" },
    { name: "Đạo đức AI", group: "Responsibility", note: "Minh bạch và kiểm chứng" },
    { name: "Quản lý tệp", group: "Technology", note: "Nền tảng cho quy trình rõ ràng" },
    { name: "Tự học & phản tư", group: "Growth", note: "Biến trải nghiệm thành tiến bộ" }
  ],
  reflection: {
    label: "BẢN NHÁP CÓ THỂ THAY THẾ",
    title: "Lá thư gửi phiên bản mình ở điểm khởi đầu",
    paragraphs: [
      "Trước sáu bài tập, mình thường nghĩ công nghệ số chỉ là tập hợp những công cụ cần biết cách bấm. Sau hành trình này, mình hiểu rằng công cụ luôn đi cùng lựa chọn: chọn nguồn nào để tin, chọn cách nào để cộng tác, chọn điều gì để giữ lại như tiếng nói riêng.",
      "Mình tiến bộ rõ nhất ở khả năng đặt câu hỏi và tổ chức quy trình. Từ một thư mục có cấu trúc đến một prompt có ràng buộc, tất cả đều dạy mình rằng sự rõ ràng không làm giảm sáng tạo — nó tạo không gian để ý tưởng đi xa hơn.",
      "Điều khó nhất là cân bằng tốc độ của AI với nhịp suy nghĩ của chính mình. Mình học cách dừng lại để kiểm chứng, sửa, trích dẫn và tự hỏi sản phẩm cuối có thật sự phản ánh điều mình hiểu hay không.",
      "Phía trước, mình muốn tiếp tục khám phá cách truyền thông số đưa những sản phẩm văn hóa vượt biên giới, đồng thời xây dựng năng lực nghiên cứu đủ vững để kể các câu chuyện ấy chính xác, có chiều sâu và có trách nhiệm."
    ],
    before: ["Dùng công cụ theo từng tác vụ", "Tìm nguồn theo từ khóa rộng", "Xem AI như nơi cho câu trả lời"],
    after: ["Thiết kế quy trình có mục tiêu", "Đánh giá nguồn theo tiêu chí", "Xem AI như cộng sự cần kiểm chứng"]
  },
  thankYou: {
    heading: "Cảm ơn vì đã đồng hành cùng hành trình này.",
    message: "Em trân trọng những chỉ dẫn đã giúp mỗi bài tập không chỉ là một sản phẩm để hoàn thành, mà còn là một dịp để đặt câu hỏi, thử nghiệm và trưởng thành hơn trong cách học.",
    signature: "Nguyễn Phương Anh"
  }
};
