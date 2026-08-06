# Nhật Ký Phân Công Công Việc & Tiến Độ Cộng Tác Nhóm 3 Người
## Dự Án: Website Quảng Bá Đặc Sản Tây Nguyên (Chương 1)

---

## 1. Thông Tin Nhóm Dự Án
- **Tên dự án:** Website Đặc Sản Tây Nguyên (`dac-san-tay-nguyen`)
- **Số lượng thành viên:** 3 người
- **Thời gian khởi tạo:** Tháng 08/2026

---

## 2. Bảng Phân Công Nhiệm Vụ Chi Tiết (Matrix Assignment)

```text
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên        | Vai Trò Ban Đầu (Gộp)                   | Tệp Tin Đảm Nhận                  | Trạng Thái Tiến Độ     |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 1      | Trưởng Nhóm + Phân Tích Hệ Thống       | - docs/requirements.md             | [x] Hoàn thành 100%    |
|                   | (Leader & System Analyst)              | - docs/work_log.md                 |                        |
|                   |                                        | - Quản lý Repository & PR          |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 2      | Phụ Trách Frontend                     | - index.html                       | [x] Hoàn thành 100%    |
|                   | (UI/UX Developer)                      | - css/style.css                    |                        |
|                   |                                        | - js/main.js                       |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 3      | Phụ Trách Dữ Liệu + Thư Ký Dự Án       | - data/products.json (10+ SP)      | [x] Hoàn thành 100%    |
|                   | (Data Specialist & Secretary)          | - assets/images/                   |                        |
|                   |                                        | - docs/ordering_roadmap.md         |                        |
|                   |                                        | - README.md, package.json          |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
```

---

## 3. Nhật Ký Tiến Độ Làm Việc (Work Log Entries)

### Ngày 06/08/2026:
- **Thành viên 1:**
  - Khởi tạo repository Git, cấu hình `.gitignore`, chia nhánh làm việc (`main`, `dev`).
  - Soạn thảo tài liệu phân tích hệ thống `docs/requirements.md` định nghĩa tác nhân, yêu cầu chức năng và schema dữ liệu.
  - Lập bảng phân công nhóm 3 người và khởi tạo file `docs/work_log.md`.
- **Thành viên 2:**
  - Thiết kế cấu trúc ngữ nghĩa HTML5 trong `index.html` với 6 nội dung cơ bản: Giới thiệu Tây Nguyên, Danh sách 10 sản phẩm, Phân loại sản phẩm, Nguồn gốc, Khối liên hệ, Modal định hướng đặt hàng.
  - Viết `css/style.css` tạo bảng màu đất đỏ bazan `#EA580C`, hỗ trợ responsive & Dark mode.
  - Viết `js/main.js` xử lý Fetch API nạp dữ liệu động, bộ lọc danh mục và live search.
- **Thành viên 3:**
  - Tổng hợp dữ liệu 10 sản phẩm đặc sản Tây Nguyên chuẩn hóa vào `data/products.json`.
  - Chuẩn bị tài nguyên hình ảnh trong thư mục `assets/images/`.
  - Soạn thảo định hướng phát triển chức năng đặt hàng `docs/ordering_roadmap.md`.
  - Hoàn thiện tài liệu `README.md` và `package.json`.

---

## 4. Bảng Kiểm Duyệt Yêu Cầu Giai Đoạn 1 (Checklist Verification)

- [x] Đã gộp 5 vai trò thành 3 vị trí làm việc rõ ràng.
- [x] Đã khởi tạo cấu trúc thư mục dự án chuẩn (`assets/`, `css/`, `js/`, `data/`, `docs/`).
- [x] Đã tạo `data/products.json` chứa **10 sản phẩm đặc sản Tây Nguyên** kèm thông tin nguồn gốc.
- [x] Đã có nội dung Giới thiệu Tây Nguyên.
- [x] Đã có tính năng Phân loại sản phẩm và ô Tìm kiếm sản phẩm.
- [x] Đã có Trang / Khối Liên hệ gửi thông tin.
- [x] Đã có Tài liệu Định hướng phát triển chức năng đặt hàng (`docs/ordering_roadmap.md`).
- [x] Đã có tài liệu `README.md` mô tả cấu trúc, công cụ và hướng dẫn chạy.
