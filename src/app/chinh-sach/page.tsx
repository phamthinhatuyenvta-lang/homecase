import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Chính sách mua hàng | HOMECASE",
  description:
    "Thông tin về giao hàng, thanh toán, kiểm tra sản phẩm và đổi trả khi mua túi tote cotton tại HOMECASE.",
};

const policySections = [
  {
    id: "dat-hang",
    title: "1. Chính sách đặt hàng",
    content: (
      <>
        <p>
          Khách hàng có thể gửi yêu cầu mua túi tote qua form đặt hàng trên
          website hoặc liên hệ trực tiếp với HOMECASE qua hotline và các kênh
          mạng xã hội được công bố trên website.
        </p>

        <p>
          Sau khi nhận được yêu cầu, HOMECASE sẽ liên hệ để xác nhận sản phẩm,
          màu sắc, số lượng, địa chỉ nhận hàng, chi phí vận chuyển và hình thức
          thanh toán trước khi xử lý đơn.
        </p>

        <p>
          Việc gửi form trên website chưa được xem là đơn hàng đã xác nhận.
          Đơn hàng chỉ được xử lý sau khi HOMECASE và khách hàng đã thống nhất
          đầy đủ thông tin.
        </p>
      </>
    ),
  },
  {
    id: "thanh-toan",
    title: "2. Chính sách thanh toán",
    content: (
      <>
        <p>
          HOMECASE sẽ thông báo các phương thức thanh toán đang được áp dụng
          trong quá trình xác nhận đơn hàng.
        </p>

        <p>
          Khách hàng cần kiểm tra kỹ tên sản phẩm, số lượng, giá sản phẩm, phí
          vận chuyển và tổng số tiền trước khi thực hiện thanh toán.
        </p>

        <p>
          HOMECASE không yêu cầu khách hàng cung cấp mật khẩu, mã OTP hoặc
          thông tin đăng nhập tài khoản ngân hàng.
        </p>
      </>
    ),
  },
  {
    id: "giao-hang",
    title: "3. Chính sách giao hàng",
    content: (
      <>
        <h3>Phạm vi giao hàng</h3>

        <p>
          HOMECASE nhận giao hàng tại Đà Nẵng và các khu vực khác theo khả năng
          hỗ trợ của đơn vị vận chuyển tại thời điểm đặt hàng.
        </p>

        <h3>Phí vận chuyển</h3>

        <p>
          Phí vận chuyển được xác định dựa trên địa chỉ nhận hàng, số lượng sản
          phẩm và phương thức giao hàng. Mức phí cụ thể sẽ được thông báo trước
          khi khách hàng xác nhận đơn.
        </p>

        <p>
          Ưu đãi miễn phí giao hàng nội thành Đà Nẵng từ 149.000 đồng chỉ được
          áp dụng khi chương trình đang còn hiệu lực và đơn hàng đáp ứng đầy đủ
          điều kiện được thông báo.
        </p>

        <h3>Thời gian giao hàng</h3>

        <p>
          Thời gian giao hàng dự kiến sẽ được HOMECASE thông báo khi xác nhận
          đơn. Thời gian thực tế có thể thay đổi do thời tiết, ngày lễ, địa chỉ
          nhận hàng hoặc hoạt động của đơn vị vận chuyển.
        </p>
      </>
    ),
  },
  {
    id: "kiem-tra",
    title: "4. Kiểm tra sản phẩm khi nhận hàng",
    content: (
      <>
        <p>
          Khi nhận hàng, khách hàng nên kiểm tra tình trạng bao bì, số lượng,
          mẫu mã và màu sắc của sản phẩm trước khi hoàn tất việc nhận hàng nếu
          điều kiện giao nhận cho phép.
        </p>

        <p>
          Nếu phát hiện sản phẩm có dấu hiệu hư hỏng, giao sai mẫu hoặc thiếu
          sản phẩm, khách hàng nên chụp ảnh hoặc quay video để HOMECASE có căn
          cứ kiểm tra và hỗ trợ.
        </p>
      </>
    ),
  },
  {
    id: "doi-tra",
    title: "5. Chính sách đổi trả",
    content: (
      <>
        <h3>Trường hợp được hỗ trợ</h3>

        <ul>
          <li>Sản phẩm được giao không đúng mẫu hoặc màu đã xác nhận.</li>
          <li>Sản phẩm bị lỗi hoặc hư hỏng trước khi khách hàng sử dụng.</li>
          <li>Đơn hàng bị giao thiếu sản phẩm so với nội dung xác nhận.</li>
        </ul>

        <h3>Điều kiện đổi trả</h3>

        <ul>
          <li>Sản phẩm chưa qua sử dụng và chưa được giặt.</li>
          <li>Sản phẩm còn nguyên tình trạng ban đầu.</li>
          <li>
            Khách hàng cung cấp thông tin đơn hàng và hình ảnh thể hiện vấn đề
            của sản phẩm.
          </li>
        </ul>

        <p>
          Khách hàng vui lòng liên hệ HOMECASE sớm sau khi nhận hàng để được
          kiểm tra từng trường hợp cụ thể. Phương án đổi sản phẩm hoặc xử lý
          khác sẽ được hai bên thống nhất trước khi thực hiện.
        </p>
      </>
    ),
  },
  {
    id: "bao-quan",
    title: "6. Hướng dẫn bảo quản",
    content: (
      <>
        <ul>
          <li>Không ngâm túi trong nước quá lâu.</li>
          <li>Ưu tiên giặt nhẹ bằng tay với nước mát.</li>
          <li>Không sử dụng chất tẩy mạnh trực tiếp lên bề mặt túi.</li>
          <li>Phơi túi ở nơi thông thoáng và tránh nắng gắt kéo dài.</li>
          <li>Không đựng đồ vật vượt quá khả năng chịu lực của túi.</li>
        </ul>

        <p>
          Tình trạng phai màu hoặc thay đổi bề mặt do sử dụng và bảo quản không
          đúng hướng dẫn có thể không được xem là lỗi sản phẩm.
        </p>
      </>
    ),
  },
  {
    id: "lien-he",
    title: "7. Thông tin hỗ trợ",
    content: (
      <>
        <p>
          Nếu cần hỏi thêm về giao hàng hoặc đổi trả, khách hàng có thể liên hệ
          HOMECASE qua:
        </p>

        <ul>
          <li>
            Hotline:{" "}
            <a href="tel:0763672210" className="policy-link">
              076 367 2210
            </a>
          </li>

          <li>
            Email:{" "}
            <a
              href="mailto:homecasedana@gmail.com"
              className="policy-link"
            >
              homecasedana@gmail.com
            </a>
          </li>

          <li>Địa chỉ: 71 Ngũ Hành Sơn, Đà Nẵng</li>
        </ul>

        <Link href="/lien-he" className="button-primary mt-5 inline-flex">
          Liên hệ HOMECASE
        </Link>
      </>
    ),
  },
];

export default function PolicyPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#fff9f2]">
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[#60717e]"
          >
            <Link
              href="/"
              className="transition hover:text-[#3c9dea] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
            >
              Trang chủ
            </Link>

            <span aria-hidden="true">/</span>

            <span aria-current="page" className="font-bold text-slate-900">
              Chính sách
            </span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside>
              <div className="rounded-3xl border border-[#3c9dea]/15 bg-white p-6 lg:sticky lg:top-28">
                <h2 className="text-lg font-bold text-slate-900">
                  Nội dung chính
                </h2>

                <nav
                  aria-label="Mục lục chính sách"
                  className="mt-4 flex flex-col gap-2"
                >
                  {policySections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-[#60717e] transition hover:bg-[#3c9dea]/10 hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147bc8]"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0">
              <header className="rounded-3xl bg-[#3c9dea] px-6 py-10 text-white sm:px-10 sm:py-14">
                <p className="font-bold uppercase tracking-[0.16em] text-white/80">
                  HOMECASE
                </p>

                <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                  Chính sách mua hàng
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                  Thông tin về đặt hàng, thanh toán, giao hàng và đổi trả sản
                  phẩm tại HOMECASE.
                </p>

                <p className="mt-5 text-sm font-semibold text-white/80">
                  Cập nhật lần cuối: 06/11/2026
                </p>
              </header>

              <div className="mt-8 space-y-6">
                {policySections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 rounded-3xl border border-[#3c9dea]/15 bg-white p-6 shadow-sm sm:p-8"
                  >
                    <h2 className="text-2xl font-bold text-slate-900">
                      {section.title}
                    </h2>

                    <div className="policy-content mt-5">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}