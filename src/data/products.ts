export type Product = {
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  color: string;
  colorHex: string;
  material: string;
  size: string;
  badge: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "homecase-daily-blue",
    name: "Homecase Daily Blue",
    price: 79000,
    shortDescription: "Nhẹ tênh cho lịch học mỗi ngày",
    description: "Daily Blue là mẫu tote tối giản dành cho những ngày bạn cần mang theo vừa đủ. Phom đứng, quai dài và sắc xanh đặc trưng giúp chiếc túi dễ kết hợp cùng đồng phục, áo thun hoặc sơ mi.",
    image: "/images/3.png",
    alt: "Túi tote cotton xanh Homecase Daily Blue",
    color: "Xanh Homecase",
    colorHex: "#1673c9",
    material: "Vải cotton",
    size: "35 × 40 cm",
    badge: "Bán chạy",
    features: ["Quai đeo vai dài", "Đựng vừa tài liệu A4", "Thiết kế in HOMECASE tối giản"],
  },
  {
    slug: "homecase-campus-cream",
    name: "Homecase Campus Cream",
    price: 89000,
    shortDescription: "Sắc kem nhẹ nhàng, dễ phối mọi outfit",
    description: "Campus Cream mang tinh thần nhẹ nhàng của những buổi đến lớp. Tông kem sáng kết hợp chi tiết xanh giúp tổng thể trẻ trung nhưng vẫn tinh gọn, phù hợp cho cả đi học và đi chơi.",
    image: "/images/1.png",
    alt: "Người mẫu mang túi tote Homecase Campus Cream",
    color: "Kem phối xanh lá",
    colorHex: "#eee4d3",
    material: "Vải cotton",
    size: "36 × 41 cm",
    badge: "Mới",
    features: ["Tông kem dễ phối", "Đáy túi rộng", "Phù hợp đi học và dạo phố"],
  },
  {
    slug: "homecase-ocean-carry",
    name: "Homecase Ocean Carry",
    price: 109000,
    shortDescription: "Phom rộng cho sách vở và laptop",
    description: "Ocean Carry có phom mềm và không gian rộng rãi hơn cho lịch học bận rộn. Sắc xanh nổi bật tạo điểm nhấn, trong khi quai bản vừa giúp bạn đeo vai thoải mái.",
    image: "/images/2.png",
    alt: "Túi tote xanh Homecase Ocean Carry trên ghế xanh",
    color: "Xanh đại dương",
    colorHex: "#0758b0",
    material: "Vải cotton",
    size: "38 × 42 cm",
    badge: "Đi học",
    features: ["Không gian chứa rộng", "Quai may chắc chắn", "Đựng vừa laptop 14 inch"],
  },
  {
    slug: "homecase-minimal-white",
    name: "Homecase Minimal White",
    price: 69000,
    shortDescription: "Tối giản, sáng màu và dễ mang theo",
    description: "Minimal White tập trung vào sự đơn giản và linh hoạt. Thiết kế nhẹ, màu trắng kem và logo xanh tạo nên một chiếc tote dễ dùng cho nhiều phong cách hằng ngày.",
    image: "/images/4.png",
    alt: "Túi tote trắng kem Homecase Minimal White",
    color: "Trắng kem",
    colorHex: "#fff9f2",
    material: "Vải cotton",
    size: "34 × 38 cm",
    badge: "Tối giản",
    features: ["Trọng lượng nhẹ", "Dễ gấp gọn", "Phù hợp đồ dùng hằng ngày"],
  },
  {
    slug: "homecase-duo-tone",
    name: "Homecase Duo Tone",
    price: 139000,
    shortDescription: "Phối kem - xanh cho outfit nổi bật",
    description: "Duo Tone là phiên bản nổi bật nhất của Homecase với phần thân kem và đáy màu tương phản. Kích thước lớn, phom chắc và tinh thần trẻ trung giúp mẫu túi trở thành điểm nhấn của outfit.",
    image: "/images/5.png",
    alt: "Người mẫu đeo túi tote phối kem xanh Homecase Duo Tone",
    color: "Kem phối xanh dương",
    colorHex: "#3c9dea",
    material: "Vải cotton",
    size: "40 × 43 cm",
    badge: "Premium",
    features: ["Thiết kế hai tông màu", "Đáy túi rộng và chắc", "Phù hợp lịch học cả ngày"],
  },
];

export const featuredProducts = [products[0], products[2], products[4]];

export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("vi-VN").format(price)}đ`;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
