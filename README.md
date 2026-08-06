# Dự Án Web Đặc Sản Tây Nguyên (`dac-san-tay-nguyen`)

> **Bài Thực Hành 1: Khởi Tạo Dự Án Web & Kiến Trúc Nhóm (Chương 1)**  
> **Môn Học:** Phát Triển Ứng Dụng Web  
> **Quy Mô Nhóm:** 3 Thành Viên  
> **Repository:** https://github.com/hoangtuvungcao/dac-santaynguyen-web-nang-cao

---

## 1. Giới Thiệu Dự Án
Dự án trang web quảng bá, giới thiệu nông sản và các sản phẩm đặc sản đặc trưng của vùng đất đại ngàn Tây Nguyên (Cà phê Robusta Măng Đen, Hạt Macca Đắk Lắk, Tiêu đen Chư Sê, Mật ong rừng Gia Lai, Bò một nắng Krông Pa...).

Ở **Chương 1**, dự án tập trung hoàn thiện **kiến trúc dự án, tổ chức thư mục, chuẩn hóa dữ liệu JSON, phân công nhiệm vụ nhóm 3 người và lập tài liệu định hướng phát triển chức năng đặt hàng**.

---

## 2. Phân Công Công Việc Cho Nhóm 3 Người (Chi Tiết Vai Trò Thành Viên 1)

Dựa trên 5 vai trò ban đầu, nhóm 3 người phân chia các nhiệm vụ trọng tâm như sau:

| Thành viên | Vai trò gộp | Nhiệm vụ đảm nhận |
| :--- | :--- | :--- |
| **Thành viên 1** | **Trưởng nhóm & Phân tích hệ thống** *(Leader & Analyst)* | - Quản lý Repository Git/GitHub, thiết lập nhánh (`main`, `dev`, `feature/*`) & quy trình PR.<br>- Lập tài liệu phân tích yêu cầu, tác nhân & kiến trúc hệ thống (`docs/requirements.md`).<br>- Ghi nhận nhật ký tiến độ & quản lý phân công công việc (`docs/work_log.md`). |
| **Thành viên 2** | **Phụ trách Frontend (UI/UX)** *(UI/UX Developer)* | - Xây dựng cấu trúc HTML5 (`index.html`) chứa 6 phân đoạn chính.<br>- Thiết kế CSS (`css/style.css`): tông màu đất đỏ bazan, responsive & Light/Dark mode.<br>- Lập trình JavaScript (`js/main.js`): Fetch API, bộ lọc danh mục, live search & Quick view modal. |
| **Thành viên 3** | **Phụ trách Dữ liệu & Thư ký dự án** *(Data Specialist & Secretary)* | - Thu thập & xây dựng tệp dữ liệu `data/products.json` chứa **10 sản phẩm** đặc sản có thông tin nguồn gốc.<br>- Quản lý thư mục tài nguyên hình ảnh (`assets/images/`).<br>- Lập tài liệu định hướng đặt hàng (`docs/ordering_roadmap.md`) & hỗ trợ hoàn thiện `README.md`. |

---

### 📌 Nhiệm Vụ Cụ Thể Của Thành Viên 1 (Leader & System Analyst)

1. **Quản Lý Git Repository & Workflow:**
   - Khởi tạo Repository trên GitHub và kết nối máy cục bộ.
   - Thiết lập quy định đặt tên nhánh:
     - `main`: Nhánh chạy chính (Production ready).
     - `dev`: Nhánh tích hợp phát triển chung.
     - `feature/ui-design`, `feature/data-json`, `feature/docs`: Các nhánh tính năng.
   - Quản lý và duyệt Pull Request (PR) của các thành viên trước khi merge vào `main`.

2. **Phân Tích Hệ Thống & Viết Tài Liệu `requirements.md`:**
   - Mô tả phạm vi dự án và mục tiêu Chương 1.
   - Xác định 3 Tác nhân chính (Khách xem web, Khách mua sắm, Quản trị viên).
   - Chi tiết hóa 12 Yêu cầu chức năng (FR-01 đến FR-12) và Yêu cầu phi chức năng.
   - Đồng bộ Schema dữ liệu `products.json`.

3. **Theo Dõi Tiến Độ & Ghi Nhật Ký `work_log.md`:**
   - Tạo ma trận phân công nhiệm vụ (Matrix assignment).
   - Ghi nhận nhật ký commit, tiến độ thực hiện theo ngày của từng thành viên.
   - Kiểm duyệt Checklist hoàn thành bài tập Chương 1.

---

## 3. Cấu Trúc Thư Mục Dự Án

```text
dac-san-tay-nguyen/
├── assets/
│   └── images/              # Tài nguyên hình ảnh sản phẩm & banner
├── css/
│   └── style.css            # Stylesheet chính (Bazan color system, Responsive, Dark Mode)
├── js/
│   └── main.js              # JavaScript xử lý Fetch API, bộ lọc, tìm kiếm, modal
├── data/
│   └── products.json        # File JSON chứa dữ liệu 10+ sản phẩm đặc sản
├── docs/
│   ├── requirements.md      # Tài liệu mô tả yêu cầu, tác nhân & kiến trúc hệ thống (Thành viên 1)
│   ├── ordering_roadmap.md  # Tài liệu định hướng & lộ trình chức năng Đặt hàng (Thành viên 3)
│   └── work_log.md          # Nhật ký phân công công việc & minh chứng nhóm 3 người (Thành viên 1)
├── index.html               # Trang web chính (Giới thiệu, Sản phẩm, Liên hệ, Modal)
├── README.md                # Tài liệu hướng dẫn & tổng quan dự án
├── .gitignore               # Cấu hình các tệp bỏ qua khi dùng Git
└── package.json             # Thông tin dự án & lệnh thực thi
```

---

## 4. Hướng Dẫn Chạy Dự Án

### Cách 1: Mở Trực Tiếp File HTML
1. Mở thư mục dự án `dac-san-tay-nguyen`.
2. Mở tệp `index.html` bằng trình duyệt web (Chrome, Firefox, Edge).

### Cách 2: Chạy Server Bằng Node.js / NPM
1. Mở Terminal tại thư mục dự án.
2. Chạy lệnh:
   ```bash
   npm start
   ```
3. Truy cập địa chỉ `http://localhost:3000` trên trình duyệt.
