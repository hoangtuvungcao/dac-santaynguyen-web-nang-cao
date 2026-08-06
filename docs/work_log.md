# Nhật Ký Phân Công Công Việc & Tiến Độ Cộng Tác Nhóm 3 Người
## Dự Án: Website Quảng Bá Đặc Sản Tây Nguyên (Chương 1)

> **Người quản lý nhật ký:** Thành viên 1 - Trưởng nhóm & Phân tích hệ thống *(Leader & System Analyst)*  
> **Repository:** https://github.com/hoangtuvungcao/dac-santaynguyen-web-nang-cao  

---

## 1. Bảng Phân Công Nhiệm Vụ Chi Tiết (Matrix Assignment)

```text
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên        | Vai Trò Ban Đầu (Gộp)                   | Tệp Tin Đảm Nhận                  | Trạng Thái Tiến Độ     |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 1      | Trưởng Nhóm + Phân Tích Hệ Thống       | - docs/requirements.md             | [x] Hoàn thành 100%    |
| (Leader)          | (Leader & System Analyst)              | - docs/work_log.md                 |                        |
|                   |                                        | - Quản lý Repository & Duyệt PR    |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 2      | Phụ Trách Frontend                     | - index.html                       | [x] Hoàn thành 100%    |
| (Developer)       | (UI/UX Developer)                      | - css/style.css                    |                        |
|                   |                                        | - js/main.js                       |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
| Thành Viên 3      | Phụ Trách Dữ Liệu + Thư Ký Dự Án       | - data/products.json (10+ SP)      | [x] Hoàn thành 100%    |
| (Data & Secretary)| (Data Specialist & Secretary)          | - assets/images/                   |                        |
|                   |                                        | - docs/ordering_roadmap.md         |                        |
|                   |                                        | - README.md, package.json          |                        |
+-------------------+----------------------------------------+------------------------------------+------------------------+
```

---

## 2. Nhật Ký Commit & Lịch Sử Kiểm Duyệt Code (Commit Logs Audit)

Dưới sự giám sát của **Thành viên 1**, lịch sử commit và Pull Request của dự án được ghi nhận minh bạch như sau:

| Commit Hash | Tác giả (Author) | Thông điệp Commit (Commit Message) | Nội dung thực hiện / Ghi chú review |
| :--- | :--- | :--- | :--- |
| `f514fc7` | `hoangtuvungcao` | `Fix lỗi encoding UTF-8 hiển thị tiếng Việt cho index.html` | **Thành viên 1:** Khắc phục sự cố mã hóa charset `ISO-8859-1` gây lỗi hiển thị ký tự tiếng Việt có dấu. |
| `4a447a8` | `lenguyen26` | `Merge pull request #1 from hoangtuvungcao/lenguyen` | **Thành viên 1:** Duyệt và Merge PR #1 tích hợp base website của Thành viên 2 vào nhánh `main`. |
| `1359e90` | `lenguyen26` | `fix UTF4` | Cập nhật cấu hình tệp tin nhánh `lenguyen`. |
| `e0c7977` | `lenguyen26` | `fix loi UTF4` | Xử lý lỗi tệp tin nhánh `lenguyen`. |
| `2b2822d` | `lenguyen26` | `hoan thien base co ban webiste` | **Thành viên 2:** Đẩy mã nguồn HTML5, CSS layout, JavaScript filter và `products.json`. |
| `5ace755` | `hoangtuvungcao` | `khởi tạo dự án ban đầu` | **Thành viên 1:** Khởi tạo cấu trúc dự án, tạo nhánh `leader`, tạo tài liệu `requirements.md` & `work_log.md`. |
| `aa65a5d` | `hoangtuvungcao` | `Cập nhật tài liệu phân tích hệ thống và nhật ký làm việc cho Thành viên 1` | **Thành viên 1:** Cập nhật nội dung chi tiết vai trò Leader & Analyst. |

---

## 3. Nhật Ký Tiến Độ Chi Tiết Của Thành Viên 1 (Leader Log)

### Ngày 06/08/2026:
- **08:00 - 09:30:** Khởi tạo Repository trên GitHub `dac-santaynguyen-web-nang-cao`, cấu hình `.gitignore`, tạo các nhánh làm việc (`main`, `dev`, `leader`).
- **09:30 - 11:30:** Họp phân công công việc nhóm 3 người, gộp 5 vai trò ban đầu thành 3 vị trí phù hợp với năng lực thành viên.
- **13:00 - 15:30:** Soạn thảo tài liệu Phân tích hệ thống [docs/requirements.md](file:///home/vantrong/123456789/docs/requirements.md):
  - Xác định 3 Tác nhân hệ thống.
  - Xây dựng 11 Yêu cầu chức năng (FR-01 đến FR-11) và Yêu cầu phi chức năng.
  - Chuẩn hóa JSON Schema cho `data/products.json`.
- **15:30 - 17:30:** Đánh giá & Kiểm duyệt Pull Request #1 từ nhánh `lenguyen`:
  - Kiểm tra giao diện HTML, CSS layout và script xử lý tìm kiếm/lọc sản phẩm.
  - Phát hiện và sửa lỗi mã hóa charset `ISO-8859-1` trên `index.html`, chuyển đổi tệp về chuẩn **UTF-8 (no BOM)**.
- **17:30 - 19:00:** Hoàn thiện nhật ký làm việc [docs/work_log.md](file:///home/vantrong/123456789/docs/work_log.md) và đồng bộ tài liệu tổng quan [README.md](file:///home/vantrong/123456789/README.md).

---

## 4. Bảng Kiểm Duyệt Hoàn Thành Nhiệm Vụ Chương 1 (Leader Checklist)

- [x] **Repository & Branching:** Đã khởi tạo GitHub repo, thiết lập các nhánh `main`, `dev`, `leader` và duyệt PR.
- [x] **Tài liệu Phân tích hệ thống:** File `docs/requirements.md` mô tả đầy đủ tác nhân, quy trình Git, yêu cầu & schema dữ liệu.
- [x] **Cấu trúc Dự án:** Đã phân chia chuẩn các thư mục `assets/images/`, `css/`, `js/`, `data/`, `docs/`.
- [x] **Dữ liệu JSON:** File `data/products.json` chứa các sản phẩm đặc sản Tây Nguyên hiển thị thông tin giá & nguồn gốc.
- [x] **Chuẩn UTF-8:** Đã khắc phục hoàn toàn lỗi mã hóa tiếng Việt có dấu trên `index.html`.
- [x] **Tài liệu Hướng dẫn & Nhật ký:** Đã hoàn thiện `docs/work_log.md` và `README.md` sẵn sàng nộp bài.
