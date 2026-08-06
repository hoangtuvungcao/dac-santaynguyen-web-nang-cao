# Dự Án Web Đặc Sản Tây Nguyên (`dac-san-tay-nguyen`)

> **Bài Thực Hành 1: Khởi Tạo Dự Án Web & Kiến Trúc Nhóm (Chương 1)**  
> **Môn Học:** Phát Triển Ứng Dụng Web  
> **Quy Mô Nhóm:** 3 Thành Viên  
> **GitHub Repository:** https://github.com/hoangtuvungcao/dac-santaynguyen-web-nang-cao

---

## 1. Giới Thiệu Dự Án
Dự án trang web quảng bá, giới thiệu nông sản và các sản phẩm đặc sản đặc trưng của vùng đất đại ngàn Tây Nguyên (Cà phê Robusta Măng Đen/Gia Nghĩa, Mật ong rừng Kon Tum, Tiêu đen Buôn Ma Thuột, Măng khô Lâm Đồng, Bơ sáp Buôn Hồ, Hoa atiso Đà Lạt...). Nội dung chính bao gồm giới thiệu văn hóa, nguồn gốc và catalogue sản phẩm.

Ở **Chương 1**, dự án tập trung hoàn thiện **kiến trúc dự án, tổ chức thư mục, chuẩn hóa dữ liệu JSON, phân công nhiệm vụ nhóm 3 người và lập tài liệu định hướng phát triển chức năng đặt hàng**.

---

## 2. Phân Công Công Việc Cho Nhóm 3 Người (Chi Tiết Vai Trò Thành Viên 1)

Dựa trên 5 vai trò ban đầu, nhóm 3 thành viên phân chia các nhiệm vụ trọng tâm như sau:

| Thành viên | Vai trò gộp | Nhiệm vụ đảm nhận |
| :--- | :--- | :--- |
| **Thành viên 1** | **Trưởng nhóm & Phân tích hệ thống** *(Leader & System Analyst)* | - Quản lý Repository Git/GitHub, thiết lập nhánh (`main`, `dev`, `leader`) & quy trình duyệt PR.<br>- Lập tài liệu phân tích yêu cầu, tác nhân & kiến trúc hệ thống (`docs/requirements.md`).<br>- Ghi nhận nhật ký tiến độ, kiểm tra commit log & quản lý phân công (`docs/work_log.md`). |
| **Thành viên 2** | **Phụ trách Frontend (UI/UX)** *(UI/UX Developer)* | - Xây dựng cấu trúc ngữ nghĩa HTML5 (`index.html`) chứa các phân đoạn hiển thị.<br>- Thiết kế CSS (`css/style.css`): tông màu đất đỏ bazan mộc mạc & layout responsive.<br>- Lập trình JavaScript (`js/main.js`): Fetch dữ liệu bất đồng bộ, bộ lọc danh mục & tìm kiếm live search. |
| **Thành viên 3** | **Phụ trách Dữ liệu & Thư ký dự án** *(Data Specialist & Secretary)* | - Thu thập & chuẩn hóa tệp dữ liệu `data/products.json` chứa các sản phẩm đặc sản Tây Nguyên.<br>- Quản lý thư mục tài nguyên hình ảnh sản phẩm (`assets/images/`).<br>- Lập tài liệu định hướng đặt hàng (`docs/ordering_roadmap.md`) & hoàn thiện `README.md`. |

---

### 📌 Nhiệm Vụ Cụ Thể Của Thành Viên 1 (Leader & System Analyst)

1. **Quản Lý Git Repository & Control Flow:**
   - Khởi tạo Repository trên GitHub và kết nối remote origin.
   - Thiết lập cấu trúc phân nhánh: `main` (Production), `dev` (Integration), `leader` (Leader workspace), `lenguyen` (Feature branch).
   - Tiến hành Review code, kiểm soát mã hóa UTF-8 và merge Pull Request #1 vào `main`.

2. **Phân Tích Hệ Thống & Viết Tài Liệu `docs/requirements.md`:**
   - Xác định 3 Tác nhân chính (Khách xem web, Khách mua sắm, Quản trị viên).
   - Xây dựng 11 Yêu cầu chức năng (FR-01 đến FR-11) và Yêu cầu phi chức năng.
   - Chuẩn hóa JSON Schema cho `data/products.json`.

3. **Ghi Nhật Ký Commit & Quản Lý Tiến Độ `docs/work_log.md`:**
   - Tạo ma trận phân công nhiệm vụ (Matrix assignment) nhóm 3 người.
   - Kiểm tra commit logs (`f514fc7`, `4a447a8`, `2b2822d`, `5ace755`) và ghi nhận lịch sử Code Review.
   - Đánh giá bảng kiểm duyệt hoàn thành nhiệm vụ Chương 1.

---

## 3. Cấu Trúc Thư Mục Dự Án

```text
dac-san-tay-nguyen/
├── assets/
│   └── images/              # Tài nguyên hình ảnh sản phẩm & banner
├── css/
│   └── style.css            # Stylesheet chính (Tone màu Đất đỏ Bazan, Layout Responsive)
├── js/
│   └── main.js              # JavaScript xử lý Fetch API, render sản phẩm, bộ lọc, tìm kiếm
├── data/
│   └── products.json        # File JSON chứa dữ liệu các đặc sản Tây Nguyên
├── docs/
│   ├── requirements.md      # Tài liệu phân tích yêu cầu, tác nhân & kiến trúc hệ thống (Thành viên 1)
│   ├── ordering_roadmap.md  # Tài liệu định hướng & lộ trình chức năng Đặt hàng (Thành viên 3)
│   └── work_log.md          # Nhật ký phân công công việc, commit log & checklist (Thành viên 1)
├── index.html               # Trang web chính hiển thị đầy đủ các phân đoạn
├── README.md                # Tài liệu hướng dẫn & tổng quan dự án
├── .gitignore               # Cấu hình các tệp bỏ qua khi dùng Git
└── package.json             # Thông tin dự án & lệnh thực thi
```

---

## 4. Hướng Dẫn Chạy Dự Án

### Cách 1: Mở Trực Tiếp File HTML
1. Mở thư mục dự án `dac-san-tay-nguyen`.
2. Nhấp đúp chuột vào tệp `index.html` để mở trực tiếp bằng trình duyệt web (Chrome, Firefox, Edge).

### Cách 2: Chạy Server Bằng Python
1. Mở Terminal tại thư mục dự án.
2. Chạy lệnh:
   ```bash
   python3 -m http.server 3000
   ```
3. Truy cập địa chỉ `http://localhost:3000` trên trình duyệt.

### Cách 3: Chạy Qua Package Script (NPM)
1. Mở Terminal tại thư mục dự án.
2. Chạy lệnh:
   ```bash
   npm start
   ```
3. Truy cập địa chỉ `http://localhost:3000` trên trình duyệt.
