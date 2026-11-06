export type PostSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: { title: string; paragraphs: string[] }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  introduction: string[];
  sections: PostSection[];
  faq?: { question: string; answer: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "cach-chon-tui-tote-cho-sinh-vien-da-nang",
    title: "Cách chọn túi tote phù hợp cho sinh viên Đà Nẵng",
    excerpt: "Từ kích thước, chất liệu đến màu sắc: hướng dẫn chọn một chiếc tote vừa lịch học, dễ phối đồ và phù hợp nhịp sống sinh viên.",
    category: "Tote Guide",
    author: "Homecase",
    publishedAt: "2026-11-06",
    readingTime: "8 phút đọc",
    coverImage: "/images/tote-green-lifestyle.png",
    coverAlt: "Sinh viên mang túi tote Homecase phối màu kem và xanh tại Đà Nẵng",
    introduction: [
      "Một ngày của sinh viên Đà Nẵng có thể bắt đầu ở giảng đường, tiếp tục bằng ca làm thêm và kết thúc bằng một cuộc hẹn cùng bạn bè. Vì vậy, chiếc túi hằng ngày cần đủ gọn để di chuyển nhưng cũng đủ rộng cho tài liệu, bình nước và đồ cá nhân.",
      "Túi tote được yêu thích nhờ phom đơn giản và dễ phối. Để sử dụng thuận tiện lâu dài, bạn nên cân nhắc nhu cầu, kích thước, chất liệu và độ chắc chắn thay vì chỉ chọn theo hình ảnh bên ngoài.",
    ],
    sections: [
      {
        id: "nhu-cau-su-dung",
        title: "Xác định nhu cầu sử dụng túi tote",
        paragraphs: [
          "Hãy bắt đầu bằng việc liệt kê những món đồ bạn thường mang. Lịch học một hoặc hai môn sẽ khác với ngày cần laptop, giáo trình, sạc, bình nước và áo khoác mỏng.",
          "Nếu thường xuyên di chuyển bằng xe máy, hãy ưu tiên chiếc túi dễ ôm sát người, quai không quá dài và đồ bên trong được sắp xếp gọn. Một chiếc túi đẹp nhưng không hợp lịch trình sẽ nhanh chóng bị bỏ quên.",
        ],
        bullets: ["Đi học hằng ngày", "Mang laptop hoặc máy tính bảng", "Đi làm thêm", "Đi chơi và chụp ảnh", "Mang đồ cho lịch trình cả ngày"],
      },
      {
        id: "kich-thuoc",
        title: "Chọn kích thước phù hợp với lịch học",
        paragraphs: [
          "Đối với tài liệu A4, túi nên đủ rộng để giấy không bị cong. Nếu mang laptop, hãy kiểm tra kích thước thiết bị và chừa thêm khoảng trống cho túi chống sốc.",
          "Túi quá nhỏ khiến đồ bị dồn và quai chịu lực lớn. Túi quá rộng lại bất tiện nếu bạn chỉ mang vài món. Kích thước khoảng 35–40 cm là mốc tham khảo, nhưng lựa chọn cuối cùng nên dựa trên đồ dùng thực tế.",
        ],
      },
      {
        id: "chat-lieu-cotton",
        title: "Chất liệu cotton có phù hợp không?",
        paragraphs: [
          "Cotton tạo cảm giác gần gũi, mềm và phù hợp phong cách đời thường. Chất liệu này dễ in hình nên tote cotton thường có nhiều lựa chọn màu sắc và đồ họa.",
          "Túi cotton không thay thế túi chống nước. Khi gặp mưa, hãy bảo vệ thiết bị điện tử bằng túi chống sốc hoặc lớp bọc riêng. Với đồ khô và nhu cầu đi học thông thường, cotton là lựa chọn dễ sử dụng.",
        ],
      },
      {
        id: "mau-sac",
        title: "Chọn màu túi dễ phối đồ",
        paragraphs: [
          "Màu kem và trắng phù hợp phong cách nhẹ nhàng nhưng cần được giữ sạch thường xuyên. Xanh dương tạo điểm nhấn trẻ trung và phối tốt với denim, áo trắng hoặc trang phục trung tính.",
          "Nếu tủ đồ có nhiều màu, hãy chọn túi có một màu chủ đạo rõ ràng. Nếu thường mặc đồ cơ bản, thiết kế phối hai màu có thể làm tổng thể sinh động hơn mà không cần nhiều phụ kiện.",
        ],
      },
      {
        id: "quai-va-duong-may",
        title: "Kiểm tra quai đeo và đường may",
        paragraphs: [
          "Quai túi là vị trí chịu lực nhiều nhất. Hãy quan sát phần nối giữa quai và thân túi, ưu tiên đường may đều và có gia cố. Quai quá mảnh có thể gây khó chịu khi túi nặng.",
          "Đáy túi và các góc cũng cần được kiểm tra vì thường xuyên ma sát. Khi nhận sản phẩm, nên thử đặt đồ thường dùng vào túi để đánh giá cảm giác đeo thực tế.",
        ],
      },
      {
        id: "goi-y-homecase",
        title: "Gợi ý túi tote Homecase cho sinh viên",
        paragraphs: [
          "Homecase giới thiệu các mẫu tote cotton trong khoảng 50.000–150.000 đồng, tập trung vào xanh, kem và trắng. Daily Blue phù hợp nhu cầu cơ bản; Ocean Carry có phom rộng hơn; Duo Tone tạo điểm nhấn cho trang phục.",
          "Trước khi đặt, hãy xem kích thước cụ thể và liên hệ Homecase nếu cần tư vấn theo loại laptop hoặc lượng đồ thường mang.",
        ],
      },
      {
        id: "bao-quan",
        title: "Cách bảo quản túi tote dùng được lâu",
        paragraphs: [
          "Lấy hết đồ khỏi túi sau những ngày sử dụng nhiều và xử lý vết bẩn sớm. Khi giặt, hãy xem hướng dẫn đi kèm, thao tác nhẹ và tránh chất tẩy mạnh trên phần in.",
          "Sau khi làm sạch, phơi túi nơi thoáng gió và hạn chế nắng gắt kéo dài. Khi không dùng, gấp theo đường tự nhiên hoặc treo bằng quai ở nơi khô ráo.",
        ],
        bullets: ["Không để vật sắc nhọn trực tiếp trong túi", "Không mang vượt tải trọng phù hợp", "Xử lý vết bẩn trước khi khô", "Để túi khô hoàn toàn trước khi cất"],
      },
    ],
    faq: [
      { question: "Túi tote có đựng được laptop không?", answer: "Có, nếu kích thước túi phù hợp với laptop. Bạn nên dùng thêm túi chống sốc và kiểm tra kích thước sản phẩm trước khi đặt." },
      { question: "Túi cotton có giặt được không?", answer: "Thông thường có thể làm sạch túi cotton, nhưng nên theo hướng dẫn của từng sản phẩm, giặt nhẹ và tránh chất tẩy mạnh để bảo vệ màu và hình in." },
      { question: "Sinh viên nên chọn túi màu gì?", answer: "Màu kem, trắng và xanh đều dễ phối. Hãy chọn theo tủ đồ và mức độ bạn sẵn sàng chăm sóc; màu sáng thường cần vệ sinh thường xuyên hơn." },
      { question: "Homecase có giao hàng tại Đà Nẵng không?", answer: "Homecase có hỗ trợ giao hàng nội thành Đà Nẵng. Hãy liên hệ hotline 076 367 2210 để xác nhận khu vực, thời gian và chi phí tại thời điểm đặt." },
    ],
  },
  {
    slug: "5-cach-phoi-do-voi-tui-tote-xanh",
    title: "5 cách phối đồ với túi tote xanh",
    excerpt: "Năm công thức đơn giản giúp chiếc tote xanh trở thành điểm nhấn trẻ trung cho trang phục đi học và đi chơi.",
    category: "Daily Style",
    author: "Homecase",
    publishedAt: "2026-11-05",
    readingTime: "5 phút đọc",
    coverImage: "/images/tote-blue-basic.png",
    coverAlt: "Túi tote xanh Homecase dùng làm phụ kiện phối đồ hằng ngày",
    introduction: ["Túi tote xanh nổi bật nhưng không khó phối. Khi giữ bảng màu trang phục gọn gàng, chiếc túi có thể trở thành điểm nhấn cho cả outfit đi học lẫn cuối tuần."],
    sections: [
      { id: "ao-thun-trang", title: "Áo thun trắng và denim", paragraphs: ["Áo trắng giữ tổng thể sáng, denim tạo cảm giác đời thường và chiếc tote xanh trở thành điểm nhấn chính."] },
      { id: "so-mi", title: "Sơ mi rộng và quần kaki", paragraphs: ["Sơ mi rộng phối cùng quần kaki mang lại cảm giác gọn gàng nhưng không quá trang trọng. Chọn giày trắng để liên kết các mảng màu."] },
      { id: "trung-tinh", title: "Trang phục trung tính", paragraphs: ["Đen, xám, kem hoặc nâu nhạt giúp màu xanh nổi bật vừa đủ. Cách phối này hợp khi bạn muốn outfit đơn giản nhưng vẫn có điểm nhớ."] },
      { id: "layer", title: "Layer cho ngày nhiều hoạt động", paragraphs: ["Áo thun, sơ mi khoác ngoài và quần ống rộng tạo nhiều lớp nhẹ. Giữ tối đa hai hoặc ba màu chính để tổng thể không bị rối."] },
      { id: "tone-sur-tone", title: "Phối tone-sur-tone", paragraphs: ["Kết hợp tote xanh với một chi tiết xanh nhỏ như mũ, viền áo hoặc tất để outfit có sự liên kết tự nhiên."], subsections: [{ title: "Mẹo nhỏ", paragraphs: ["Hai sắc xanh không cần giống hệt nhau. Chênh lệch nhẹ về sắc độ thường tạo cảm giác tự nhiên hơn."] }] },
    ],
  },
  {
    slug: "cach-giat-va-bao-quan-tui-tote-cotton",
    title: "Cách giặt và bảo quản túi tote cotton",
    excerpt: "Quy trình làm sạch nhẹ nhàng giúp túi cotton giữ phom, màu sắc và hình in tốt hơn sau nhiều lần sử dụng.",
    category: "Tote Care",
    author: "Homecase",
    publishedAt: "2026-11-04",
    readingTime: "6 phút đọc",
    coverImage: "/images/tote-blue-lifestyle.png",
    coverAlt: "Túi tote cotton xanh Homecase cần được vệ sinh và bảo quản đúng cách",
    introduction: ["Túi tote thường tiếp xúc với bàn học, yên xe và nhiều bề mặt khác. Làm sạch đúng lúc giúp túi gọn gàng hơn, nhưng thao tác quá mạnh có thể ảnh hưởng đến màu và hình in."],
    sections: [
      { id: "kiem-tra", title: "Kiểm tra hướng dẫn và lấy hết đồ ra", paragraphs: ["Đọc hướng dẫn sản phẩm trước khi giặt. Lấy hết đồ, vụn giấy và kiểm tra các ngăn để tránh vật nhỏ làm bẩn thêm khi vệ sinh."] },
      { id: "xu-ly-vet-ban", title: "Xử lý vết bẩn trước", paragraphs: ["Dùng khăn ẩm hoặc bàn chải mềm xử lý nhẹ khu vực bẩn. Không chà mạnh lên hình in và nên thử dung dịch ở một góc nhỏ trước."], bullets: ["Vết bụi: phủi hoặc dùng khăn khô", "Vết thức ăn: xử lý sớm bằng xà phòng dịu", "Vết mực: tránh tự dùng chất tẩy mạnh"] },
      { id: "giat", title: "Giặt nhẹ bằng nước mát", paragraphs: ["Nếu sản phẩm cho phép, ưu tiên giặt tay nhẹ với nước mát. Không xoắn mạnh vì có thể làm túi mất phom."] },
      { id: "phoi", title: "Phơi ở nơi thoáng gió", paragraphs: ["Để nước thoát tự nhiên, chỉnh phom rồi phơi nơi thoáng. Hạn chế nắng gắt kéo dài để giảm nguy cơ phai màu."], subsections: [{ title: "Trước khi cất", paragraphs: ["Đảm bảo túi khô hoàn toàn. Độ ẩm còn lại có thể tạo mùi khi túi được gấp và cất kín."] }] },
    ],
  },
];

export const featuredPost = posts[0];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(value: string) {
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}
