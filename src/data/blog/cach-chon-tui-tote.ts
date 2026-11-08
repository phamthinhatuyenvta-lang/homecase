// Dữ liệu bài SEO chính (URL đích Google Ads).
// Giữ nguyên các trường cũ của bạn, mở rộng thêm các trường OPTIONAL (đánh dấu ★).

export type Subsection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  numbered?: string[]; // ★ danh sách đánh số (các bước / checklist)
  subsections?: Subsection[]; // ★ H3
  table?: { caption: string; headers: string[]; rows: string[][] }; // ★
  callout?: { title: string; text: string }; // ★ khung lưu ý
  products?: {
  name: string;
  price: string;
  image: string;
  alt: string;
  href: string;
}[];
  cta?: boolean; // ★ chèn khối CTA sau section này
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string; // ★ <title> riêng cho SEO
  metaDescription: string; // ★
  keywords: string[]; // ★ chỉ dùng cho metadata, không nhồi vào bài
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string; // ★
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  keyTakeaways: string[]; // ★ tóm tắt nhanh đầu bài (tốt cho người đọc lướt)
  introduction: string[];
  sections: Section[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[]; // ★ link nội bộ
};

export const toteGuidePost: BlogPost = {
  slug: "cach-chon-tui-tote-cho-sinh-vien-da-nang",
  title: "Cách chọn túi tote phù hợp cho sinh viên Đà Nẵng",
  metaTitle: "Cách chọn túi tote cho sinh viên Đà Nẵng | Homecase",
  metaDescription:
    "Hướng dẫn chọn túi tote cho sinh viên: cách xác định nhu cầu, chọn kích thước, chất liệu cotton, màu dễ phối, kiểm tra quai và đường may, kèm cách bảo quản và giải đáp thắc mắc.",
  keywords: [
    "túi tote sinh viên",
    "cách chọn túi tote",
    "túi tote Đà Nẵng",
    "túi tote cotton",
    "túi tote đi học",
    "túi tote đựng laptop",
  ],
  excerpt:
    "Từ kích thước, chất liệu đến màu sắc: hướng dẫn chọn một chiếc tote vừa lịch học, dễ phối đồ và phù hợp nhịp sống sinh viên.",
  category: "Tote Guide",
  author: "Homecase",
  publishedAt: "2026-11-06",
  updatedAt: "2026-11-07",
  readingTime: "10 phút đọc",
  coverImage: "/images/cachchon.png",
  coverAlt:
    "Sinh viên mang túi tote Homecase phối màu kem và xanh tại Đà Nẵng",

  keyTakeaways: [
    "Liệt kê đồ bạn mang mỗi ngày trước, rồi mới chọn túi.",
    "Kích thước khoảng 35–40 cm là mốc tham khảo; hãy đối chiếu với tài liệu A4 và laptop của bạn.",
    "Cotton nhẹ, dễ phối nhưng không chống nước: cần lớp bọc riêng cho thiết bị điện tử.",
    "Kiểm tra quai, chân quai và đáy túi vì đây là nơi chịu lực nhiều nhất.",
    "Homecase có các mẫu tote cotton trong khoảng 50.000–150.000 đồng.",
  ],

  introduction: [
    "Một ngày của sinh viên Đà Nẵng có thể bắt đầu ở giảng đường, tiếp tục bằng ca làm thêm và kết thúc bằng một cuộc hẹn cùng bạn bè. Vì vậy, chiếc túi hằng ngày cần đủ gọn để di chuyển nhưng cũng đủ rộng cho tài liệu, bình nước và đồ cá nhân.",
    "Túi tote được yêu thích nhờ phom đơn giản và dễ phối. Miệng túi rộng giúp bạn bỏ đồ vào và lấy ra nhanh, trọng lượng nhẹ nên không nặng vai, còn kiểu dáng cơ bản hợp với cả áo thun, sơ mi lẫn đồng phục.",
    "Tuy nhiên, để dùng thuận tiện lâu dài, bạn nên cân nhắc nhu cầu, kích thước, chất liệu và độ chắc chắn thay vì chỉ chọn theo hình ảnh bên ngoài. Bài viết này đi qua từng tiêu chí theo thứ tự bạn nên kiểm tra khi chọn túi tote cho sinh viên, kèm bảng so sánh và danh sách kiểm tra để bạn đối chiếu nhanh.",
  ],

  sections: [
    {
      id: "nhu-cau-su-dung",
      title: "Xác định nhu cầu sử dụng túi tote",
      paragraphs: [
        "Hãy bắt đầu bằng việc liệt kê những món đồ bạn thường mang. Lịch học một hoặc hai môn sẽ khác với ngày cần laptop, giáo trình, sạc, bình nước và áo khoác mỏng.",
        "Nếu thường xuyên di chuyển bằng xe máy, hãy ưu tiên chiếc túi dễ ôm sát người, quai không quá dài và đồ bên trong được sắp xếp gọn. Một chiếc túi đẹp nhưng không hợp lịch trình sẽ nhanh chóng bị bỏ quên.",
      ],
      bullets: [
        "Đi học hằng ngày",
        "Mang laptop hoặc máy tính bảng",
        "Đi làm thêm",
        "Đi chơi và chụp ảnh",
        "Mang đồ cho lịch trình cả ngày",
      ],
      table: {
        caption: "Đối chiếu nhu cầu với điều cần ưu tiên ở túi",
        headers: ["Nhu cầu", "Thường mang theo", "Nên ưu tiên"],
        rows: [
          [
            "Đi học",
            "Vở, giáo trình, bình nước, ví",
            "Đủ rộng để tài liệu không bị cong, quai chắc",
          ],
          [
            "Mang laptop",
            "Laptop hoặc máy tính bảng, sạc",
            "Kích thước vừa thiết bị, có túi chống sốc bên trong",
          ],
          [
            "Đi làm thêm",
            "Đồ cá nhân, áo khoác mỏng",
            "Gọn, nhẹ, dễ vệ sinh",
          ],
          [
            "Đi chơi, chụp ảnh",
            "Điện thoại, ví, kính, đồ nhỏ",
            "Kiểu dáng và màu sắc dễ phối đồ",
          ],
        ],
      },
    },
    {
      id: "kich-thuoc",
      title: "Chọn kích thước phù hợp với lịch học",
      paragraphs: [
        "Đối với tài liệu A4, túi nên đủ rộng để giấy không bị cong. Nếu mang laptop, hãy kiểm tra kích thước thiết bị và chừa thêm khoảng trống cho túi chống sốc.",
        "Túi quá nhỏ khiến đồ bị dồn và quai chịu lực lớn. Túi quá rộng lại bất tiện nếu bạn chỉ mang vài món. Kích thước khoảng 35–40 cm là mốc tham khảo, nhưng lựa chọn cuối cùng nên dựa trên đồ dùng thực tế.",
      ],
      subsections: [
        {
          title: "Cách đo nhanh trước khi đặt túi",
          paragraphs: [
            "Bạn không cần dụng cụ phức tạp. Chỉ cần một chiếc thước và vài phút là có thể biết túi nào vừa với mình.",
          ],
          bullets: [
            "Đo chiều ngang và chiều dọc của laptop hoặc tập tài liệu lớn nhất bạn hay mang.",
            "Cộng thêm một khoảng trống nhỏ cho túi chống sốc hoặc bìa bảo vệ.",
            "Đối chiếu với kích thước ghi trên trang sản phẩm, rồi nhắn Homecase nếu bạn chưa chắc.",
          ],
        },
        {
          title: "Đừng chọn túi quá lớn chỉ để cho chắc",
          paragraphs: [
            "Túi rộng dễ khiến bạn mang theo nhiều thứ không cần thiết, vai mỏi hơn và túi nhanh mất dáng. Hãy chọn kích thước vừa đủ cho ngày nhiều đồ nhất trong tuần của bạn.",
          ],
        },
      ],
    },
    {
      id: "chat-lieu-cotton",
      title: "Chất liệu cotton có phù hợp không?",
      paragraphs: [
        "Cotton tạo cảm giác gần gũi, mềm và phù hợp phong cách đời thường. Chất liệu này dễ in hình nên tote cotton thường có nhiều lựa chọn màu sắc và đồ họa.",
        "Túi cotton không thay thế túi chống nước. Khi gặp mưa, hãy bảo vệ thiết bị điện tử bằng túi chống sốc hoặc lớp bọc riêng. Với đồ khô và nhu cầu đi học thông thường, cotton là lựa chọn dễ sử dụng.",
      ],
      subsections: [
        {
          title: "Ưu điểm của túi tote cotton",
          paragraphs: [],
          bullets: [
            "Nhẹ và mềm, dễ gấp gọn khi không dùng.",
            "Bề mặt vải phù hợp với nhiều kiểu in và thiết kế đơn giản.",
            "Dễ làm sạch hơn nhiều loại túi cứng nếu chăm sóc đúng cách.",
          ],
        },
        {
          title: "Điều cần lưu ý",
          paragraphs: [],
          bullets: [
            "Vải cotton thường không chống nước.",
            "Màu sáng dễ lộ vết bẩn, cần vệ sinh thường xuyên hơn.",
            "Đồ nặng hoặc có góc nhọn có thể làm túi nhanh mất form.",
          ],
        },
      ],
      callout: {
        title: "Mẹo cho những ngày mưa ở Đà Nẵng",
        text: "Hãy để sẵn một túi zip hoặc túi chống nước nhỏ trong túi tote để bảo vệ laptop, giấy tờ và điện thoại khi trời đổi thời tiết.",
      },
      cta: true,
    },
    {
      id: "mau-sac",
      title: "Chọn màu túi dễ phối đồ",
      paragraphs: [
        "Màu kem và trắng phù hợp phong cách nhẹ nhàng nhưng cần được giữ sạch thường xuyên. Xanh dương tạo điểm nhấn trẻ trung và phối tốt với denim, áo trắng hoặc trang phục trung tính.",
        "Nếu tủ đồ có nhiều màu, hãy chọn túi có một màu chủ đạo rõ ràng. Nếu thường mặc đồ cơ bản, thiết kế phối hai màu có thể làm tổng thể sinh động hơn mà không cần nhiều phụ kiện.",
      ],
      table: {
        caption: "So sánh nhanh các tông màu phổ biến",
        headers: ["Màu", "Phối đồ", "Lưu ý khi dùng"],
        rows: [
          [
            "Kem, trắng",
            "Nhẹ nhàng, hợp phong cách tối giản",
            "Dễ lộ vết bẩn, cần vệ sinh thường xuyên",
          ],
          [
            "Xanh dương",
            "Trẻ trung, hợp denim, áo trắng, đồ trung tính",
            "Nên tránh phơi nắng gắt kéo dài để giữ màu",
          ],
          [
            "Phối hai màu",
            "Tạo điểm nhấn mà không cần nhiều phụ kiện",
            "Chọn trang phục còn lại đơn giản để tổng thể không rối",
          ],
        ],
      },
    },
    {
      id: "quai-va-duong-may",
      title: "Kiểm tra quai đeo và đường may",
      paragraphs: [
        "Quai túi là vị trí chịu lực nhiều nhất. Hãy quan sát phần nối giữa quai và thân túi, ưu tiên đường may đều và có gia cố. Quai quá mảnh có thể gây khó chịu khi túi nặng.",
        "Đáy túi và các góc cũng cần được kiểm tra vì thường xuyên ma sát. Khi nhận sản phẩm, nên thử đặt đồ thường dùng vào túi để đánh giá cảm giác đeo thực tế.",
      ],
      numbered: [
        "Quai có đủ bản để không hằn vai khi mang đồ nặng không?",
        "Chiều dài quai có hợp với cách mang của bạn (đeo vai hoặc xách tay)?",
        "Chân quai, nơi quai nối vào thân túi, có đường may đều và được gia cố không?",
        "Đường may hai bên và đáy túi có đều, không thừa chỉ, không hở mép?",
        "Miệng túi có gọn, không bị sổ chỉ sau khi thử bỏ đồ vào?",
      ],
    },
    {
      id: "goi-y-homecase",
      title: "Gợi ý túi tote Homecase cho sinh viên",
      paragraphs: [
        "Homecase giới thiệu các mẫu tote cotton trong khoảng 50.000–150.000 đồng, tập trung vào xanh, kem và trắng. Daily Blue phù hợp nhu cầu cơ bản; Ocean Carry có phom rộng hơn; Duo Tone tạo điểm nhấn cho trang phục.",
        "Trước khi đặt, hãy xem kích thước cụ thể và liên hệ Homecase nếu cần tư vấn theo loại laptop hoặc lượng đồ thường mang.",
      ],
      table: {
        caption: "Chọn mẫu Homecase theo nhu cầu",
        headers: ["Mẫu", "Phù hợp với", "Gợi ý"],
        rows: [
          [
            "Daily Blue",
            "Nhu cầu cơ bản hằng ngày",
            "Chọn khi bạn cần một chiếc tote dễ dùng, dễ phối",
          ],
          [
            "Ocean Carry",
            "Người mang nhiều đồ hơn",
            "Phom rộng hơn, đối chiếu kích thước với laptop và tài liệu",
          ],
          [
            "Duo Tone",
            "Người muốn có điểm nhấn",
            "Thiết kế phối màu, hợp với trang phục đơn giản",
          ],
        ],
      },
      cta: true,
    },
    {
      id: "bao-quan",
      title: "Cách bảo quản túi tote dùng được lâu",
      paragraphs: [
        "Lấy hết đồ khỏi túi sau những ngày sử dụng nhiều và xử lý vết bẩn sớm. Khi giặt, hãy xem hướng dẫn đi kèm, thao tác nhẹ và tránh chất tẩy mạnh trên phần in.",
        "Sau khi làm sạch, phơi túi nơi thoáng gió và hạn chế nắng gắt kéo dài. Khi không dùng, gấp theo đường tự nhiên hoặc treo bằng quai ở nơi khô ráo.",
      ],
      bullets: [
        "Không để vật sắc nhọn trực tiếp trong túi",
        "Không mang vượt tải trọng phù hợp",
        "Xử lý vết bẩn trước khi khô",
        "Để túi khô hoàn toàn trước khi cất",
      ],
    },
  ],

  faq: [
    {
      question: "Túi tote có đựng được laptop không?",
      answer:
        "Có, nếu kích thước túi phù hợp với laptop. Bạn nên dùng thêm túi chống sốc và kiểm tra kích thước sản phẩm trước khi đặt.",
    },
    {
      question: "Túi cotton có giặt được không?",
      answer:
        "Thông thường có thể làm sạch túi cotton, nhưng nên theo hướng dẫn của từng sản phẩm, giặt nhẹ và tránh chất tẩy mạnh để bảo vệ màu và hình in.",
    },
    {
      question: "Sinh viên nên chọn túi màu gì?",
      answer:
        "Màu kem, trắng và xanh đều dễ phối. Hãy chọn theo tủ đồ và mức độ bạn sẵn sàng chăm sóc; màu sáng thường cần vệ sinh thường xuyên hơn.",
    },
    {
      question: "Homecase có giao hàng tại Đà Nẵng không?",
      answer:
        "Homecase có hỗ trợ giao hàng nội thành Đà Nẵng. Hãy liên hệ hotline 076 367 2210 để xác nhận khu vực, thời gian và chi phí tại thời điểm đặt.",
    },
  ],

  // Đổi thành slug 2 bài còn lại của bạn
  relatedSlugs: [
    "tui-tote-dung-laptop-cho-sinh-vien",
    "tui-tote-gia-sinh-vien-duoi-150k",
    "5-cach-phoi-do-voi-tui-tote-xanh",
  ],
};
