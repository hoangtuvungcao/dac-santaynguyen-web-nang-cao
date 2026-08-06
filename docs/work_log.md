# Nhật Ký Phân Công Công Việc & Tiến Độ Cộng Tác Nhóm 3 Người
## Dự Án: Website Quảng Bá Đặc Sản Tây Nguyên (Chương 1)
> **Quản lý nhật ký:** Thành viên 1 - Trưởng nhóm & Phân tích hệ thống (Leader & System Analyst)

---

## 1. Thông Tin Nhóm Dự Án
- **Tên dự án:** Website Đặc Sản Tây Nguyên (`dac-san-tay-nguyen`)
- **Số lượng thành viên:** 3 người
- **Repository:** https://github.com/hoangtuvungcao/dac-santaynguyen-web-nang-cao

---

## 2. Bảng Phân Công Nhiệm Vụ Chi Tiết (Matrix Assignment)

```text
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên        | Vai Trò Ban Đầu (Gộp)                   | Tệp Tin Đảm Nhận                  | Trạng Thái Tiến Độ     |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 1      | Trưởng Nhóm + Phân Tích Hệ Thống       | - docs/requirements.md             | [ ] Hoàn thành 100%    |
| (Leader)          | (Leader & System Analyst)              | - docs/work_log.md                 |                        |
|                   |                                        | - Quản lý Repository & PR          |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 2      | Phụ Trách Frontend                     | - index.html                       | [ ] Hoàn thành 100%    |
| (Developer)       | (UI/UX Developer)                      | - css/style.css                    |                        |
|                   |                                        | - js/main.js                       |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 3      | Phụ Trách Dữ Liệu + Thư Ký Dự Án       | - data/products.json (10+ SP)      | [ ] Hoàn thành 100%    |
| (Data & Secretary)| (Data Specialist & Secretary)          | - assets/images/                   |                        |
|                   |                                        | - docs/ordering_roadmap.md         |                        |
|                   |                                        | - README.md, package.json          |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
```

---

## 3. Nhật Ký Tiến Độ Làm Việc Của Thành Viên 1 (Leader Log)

### Ngày 06/08/2026:
- **08:00 - 09:30:** Khởi tạo Repository trên GitHub `dac-santaynguyen-web-nang-cao`, cấu hình file `.gitignore`, phân quyền nhóm.
- **09:30 - 11:30:** Khảo sát yêu cầu bài tập Chương 1, họp nhóm 3 người gộp 5 vai trò ban đầu thành 3 vị trí phù hợp với năng lực từng bạn.
- **13:00 - 15:30:** Viết tài liệu phân tích hệ thống `docs/requirements.md`:
  - Mô tả chi tiết 3 Tác nhân hệ thống.
  - Xây dựng 12 Yêu cầu chức năng (FR-01 đến FR-12).
  - Chuẩn hóa JSON Schema cho dữ liệu sản phẩm.
- **15:30 - 17:00:** Thiết lập chiến lược chia nhánh Git (`main`, `dev`, `feature/*`) và định rõ quy trình kiểm duyệt Pull Request.
- **17:00 - 18:30:** Tổng hợp nhật ký làm việc `docs/work_log.md` và hỗ trợ kiểm tra tính đồng bộ dự án trước khi nộp bài.

---

## 4. Nhật Ký Cộng Tác Nhóm (Team Contributions Log)

- **Thành viên 2 (Frontend):**
  - Hoàn thành giao diện ngữ nghĩa HTML5 `index.html`.
  - Thiết kế stylesheet `css/style.css` chuẩn màu đất đỏ bazan, hỗ trợ responsive & Dark mode.
  - Viết `js/main.js` nạp dữ liệu Fetch API, bộ lọc danh mục và live search.
- **Thành viên 3 (Dữ liệu & Thư ký):**
  - Chuẩn hóa file `data/products.json` chứa 10 sản phẩm đặc sản Tây Nguyên.
  - Thu thập hình ảnh sản phẩm vào `assets/images/`.
  - Lập tài liệu định hướng đặt hàng `docs/ordering_roadmap.md` và tài liệu tổng quan `README.md`.

---

## 5. Bảng Kiểm Duyệt Hoàn Thành Bài Tập Chương 1 (Leader Checklist)

- [x] **Quản lý Repository:** Git repo đã khởi tạo, kết nối remote và push mã nguồn thành công.
- [x] **Tài liệu Phân tích:** File `docs/requirements.md` mô tả đầy đủ tác nhân, yêu cầu & kiến trúc.
- [x] **Cấu trúc Thư mục:** Đã phân chia chuẩn các thư mục `assets/`, `css/`, `js/`, `data/`, `docs/`.
- [x] **Dữ liệu JSON:** File `data/products.json` chứa 10 sản phẩm đặc sản có thông tin nguồn gốc.
- [x] **Giao diện Web:** Hiển thị 6 phần yêu cầu (Giới thiệu, 10 SP, Phân loại, Nguồn gốc, Liên hệ, Định hướng đặt hàng).
- [x] **Nhật ký & README:** File `docs/work_log.md` và `README.md` đã ghi nhận phân công chi tiết cho 3 người.
