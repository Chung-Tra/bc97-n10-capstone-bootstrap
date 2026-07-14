# [BC_97-N10] Capstone Bootstrap

Website tĩnh xây dựng bằng Bootstrap 5 và CSS3, dựa theo giao diện mẫu: [Masterwork — W3Layouts](https://demo.w3layouts.com/demos_new/template_demo/03-03-2021/masterwork-liberty-demo_Free/423112365/web/index.html)

## Link nộp bài

| Hạng mục | Link |
|---|---|
| Source code (GitHub) | Chính repo này |
| Website (Vercel) | [bc97-n10-capstone-bootstrap.vercel.app](https://bc97-n10-capstone-bootstrap.vercel.app/) |
| Video demo (YouTube) | *(cập nhật sau khi quay — 14/07)* |
| File phân chia công việc | [`[BC_97-N10] - TimeLine.xlsx`](<./[BC_97-N10] - TimeLine.xlsx>) |

## Các trang đã hoàn thành

| Trang | Nội dung |
|---|---|
| `index.html` | Header, Hero, Why Choose Us, About Company, Stats, Company Values, Explore Solutions, General FAQs, Completed Projects, Testimonials, CTA, Footer |
| `about.html` | Breadcrumb, Intro, 3 khối giới thiệu, Features, Video intro (modal), Form Get Free Quote (modal), Logo khách hàng, Our Creative Team, CTA |
| `service.html` | Our Best Services (4 mục icon), Strategy 1–6 quanh ảnh tròn, Some More Features |
| `contact.html` | Form Drop us a Message, 3 thẻ địa chỉ / điện thoại / mail, bản đồ |
| `blog.html` | Bài nổi bật (carousel), lưới 6 card, phân trang |
| `blog-single.html` | Bài viết chi tiết, trích dẫn, Prev/Next Post, bình luận, Related posts, form Leave a reply |
| `landing-single.html` | Trang one page ghép toàn bộ section của các trang trên |

Tất cả trang dùng chung header, footer và một file `css/styles.css`, bố cục bám theo bản mẫu W3Layouts.

## Ghi chú kỹ thuật

- Bootstrap 5.3.3 và Font Awesome 6.2.0 được tải sẵn vào repo (`css/bootstrap.min.css`, `js/bootstrap.bundle.min.js`, `css/fontawesome/`, `css/webfonts/`) — deploy không phụ thuộc CDN; riêng font chữ Nunito lấy từ Google Fonts giống bản mẫu.
- Dropdown, tabs, accordion, carousel, modal đều dùng Bootstrap có sẵn thay cho jQuery/Owl Carousel của mẫu; JS tự viết duy nhất là bộ đếm số liệu trong `js/index.js`.
- Ảnh nằm gọn trong `img/`, các ảnh không dùng đã được dọn để deploy nhẹ và sạch.

## Thành viên và phân công

| Thành viên | Phân công |
|---|---|
| Trà Chí Chung | Setup dự án, Header, Hero, Why Choose Us, About Company, Company Values, Completed Projects, Testimonials, Responsive, Deploy, Video demo, CTA, Footer, FAQs, kiểm thử chéo hằng ngày, rà soát lỗi toàn trang, QA bản hoàn thiện |
| Ngô Minh Mỹ | Không thấy làm |

Tiến độ chi tiết theo từng ngày (11/07–14/07) được ghi trong file `[BC_97-N10] - TimeLine.xlsx`.
