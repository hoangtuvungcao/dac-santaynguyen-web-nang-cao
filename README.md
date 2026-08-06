# Dự Án Web Đặc Sản Tây Nguyên (`dac-san-tay-nguyen`)

> **Bài Thực Hành 1: Khởi Tạo Dự Án Web & Kiến Trúc Nhóm (Chương 1)**  
> **Môn Học:** Phát Triển Ứng Dụng Web  
> **Quy Mô Nhóm:** 3 Thành Viên  

---

## 1. Giới Thiệu Dự Án
Dự án trang web quảng bá, giới thiệu nông sản và các sản phẩm đặc sản đặc trưng của vùng đất đại ngàn Tây Nguyên (Cà phê Robusta Măng Đen, Hạt Macca Đắk Lắk, Tiêu đen Chư Sê, Mật ong rừng Gia Lai, Bò một nắng Krông Pa...).

Ở **Chương 1**, dự án tập trung hoàn thiện **kiến trúc dự án, tổ chức thư mục, chuẩn hóa dữ liệu JSON, phân công nhiệm vụ nhóm 3 người và lập tài liệu định hướng phát triển chức năng đặt hàng**.

---

## 2. Phân Công Công Việc Cho Nhóm 3 Người

Nhóm đã tổng hợp và gộp 5 vai trò gợi ý ban đầu thành **3 vị trí làm việc** rõ ràng như sau:

| Thành viên | Vai trò gộp | Nhiệm vụ đảm nhận |
| :--- | :--- | :--- |
| **Thành viên 1** | **Trưởng nhóm & Phân tích hệ thống** | - Quản lý Repository Git/GitHub, quản lý quy trình phân chia nhánh & PR.<br>- Soạn thảo tài liệu yêu cầu hệ thống `docs/requirements.md` (Mô tả tác nhân, chức năng, kiến trúc).<br>- Theo dõi nhật ký tiến độ làm việc nhóm `docs/work_log.md`. |
| **Thành viên 2** | **Phụ trách Frontend (UI/UX)** | - Thiết kế giao diện HTML5 (`index.html`) gồm: Giới thiệu Tây Nguyên, Danh sách sản phẩm, Phân loại, Nguồn gốc, Liên hệ.<br>- Xây dựng CSS (`css/style.css`): tông màu đất đỏ bazan, responsive, Light/Dark mode.<br>- Lập trình JavaScript (`js/main.js`): Fetch API, bộ lọc danh mục, live search & Quick view modal. |
| **Thành viên 3** | **Phụ trách Dữ liệu & Thư ký dự án** | - Thu thập & xây dựng file dữ liệu `data/products.json` chứa **10 sản phẩm** đặc sản có thông tin nguồn gốc.<br>- Quản lý thư mục tài nguyên hình ảnh `assets/images/`.<br>- Lập tài liệu định hướng đặt hàng `docs/ordering_roadmap.md` & hoàn thiện `README.md`. |

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
│   ├── requirements.md      # Tài liệu mô tả yêu cầu, tác nhân & kiến trúc hệ thống
│   ├── ordering_roadmap.md  # Tài liệu định hướng & lộ trình chức năng Đặt hàng
│   └── work_log.md          # Nhật ký phân công công việc & minh chứng nhóm 3 người
├── index.html               # Trang web chính (Giới thiệu, Sản phẩm, Liên hệ, Modal)
├── README.md                # Tài liệu hướng dẫn & tổng quan dự án
├── .gitignore               # Cấu hình các tệp bỏ qua khi dùng Git
└── package.json             # Thông tin dự án & lệnh thực thi
```

---

## 4. Các Nội Dung Đã Triển Khai Trong Trang Web
1. **Giới thiệu Tây Nguyên:** Khối thông tin về con người, thiên nhiên và văn hóa đặc sản vùng cao nguyên.
2. **Danh sách sản phẩm:** 10 sản phẩm đặc sản hiển thị dạng lưới thẻ trực quan (Robusta Măng Đen, Macca Đắk Lắk, Tiêu Chư Sê, Bò một nắng...).
3. **Phân loại sản phẩm:** Bộ lọc tương tác phân theo danh mục (*Cà Phê & Ca Cao*, *Hạt Dinh Dưỡng*, *Gia Vị Núi Rừng*, *Mật Ong & Dược Liệu*, *Đặc Sản Khô*).
4. **Thông tin nguồn gốc:** Hiển thị chi tiết địa danh gốc (Đắk Lắk, Gia Lai, Kon Tum, Lâm Đồng, Đắk Nông) trên từng thẻ sản phẩm.
5. **Trang Liên hệ:** Biểu mẫu gửi góp ý/đơn hàng sỉ và thông tin địa chỉ hỗ trợ.
6. **Định hướng chức năng đặt hàng:** Tích hợp nút "Thêm vào giỏ" và Modal lộ trình phát triển quy trình Đặt hàng.

---

## 5. Hướng Dẫn Chạy Dự Án

### Cách 1: Mở Trực Tiếp File HTML (Đơn giản nhất)
1. Mở thư mục dự án `dac-san-tay-nguyen`.
2. Mở tệp `index.html` trực tiếp bằng trình duyệt web bất kỳ (Chrome, Firefox, Edge).

### Cách 2: Chạy Server Bằng Node.js / NPM
1. Mở Terminal tại thư mục `dac-san-tay-nguyen`.
2. Chạy lệnh:
   ```bash
   npm start
   # Hoặc dùng npx serve
   npx serve -l 3000
   ```
3. Truy cập địa chỉ `http://localhost:3000` trên trình duyệt.

### Cách 3: Sử Dụng Extension Live Server (VS Code)
1. Mở thư mục dự án trong Visual Studio Code.
2. Nhấp chuột phải vào `index.html` chọn **Open with Live Server**.
