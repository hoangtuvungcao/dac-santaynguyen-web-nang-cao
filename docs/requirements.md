# Tài Liệu Yêu Cầu Kỹ Thuật & Phân Tích Kiến Trúc Hệ Thống (Chương 1)
## Dự Án: Website Quảng Bá & Giới Thiệu Đặc Sản Tây Nguyên

> **Người thực hiện:** Thành viên 1 - Trưởng nhóm & Phân tích hệ thống *(Leader & System Analyst)*  
> **Repository:** https://github.com/hoangtuvungcao/dac-santaynguyen-web-nang-cao  
> **Cập nhật lần cuối:** 06/08/2026  

---

## 1. Tổng Quan Dự Án & Phạm Vi Chương 1

### 1.1 Tổng quan
Dự án xây dựng ứng dụng Web giới thiệu, quảng bá và thương mại hóa các nông sản đặc sản vùng đất đại ngàn Tây Nguyên (Cà phê Robusta Măng Đen, Hạt Macca Đắk Lắk, Tiêu đen Chư Sê, Mật ong rừng Gia Lai, Bơ sáp Buôn Hồ, Măng khô Lâm Đồng...).

### 1.2 Mục tiêu Chương 1
Chương 1 chưa yêu cầu hoàn thiện giao diện E-commerce phức tạp. Trọng tâm cốt lõi bao gồm:
1. **Kiến trúc hệ thống & Tổ chức thư mục chuẩn hóa.**
2. **Quy trình cộng tác Git/GitHub (Branching strategy & Code Review).**
3. **Phân công nhiệm vụ nhóm 3 người từ 5 vai trò gốc.**
4. **Cấu trúc dữ liệu JSON (`data/products.json`) đạt tiêu chuẩn UTF-8.**
5. **Giao diện ngữ nghĩa HTML5/CSS3 chuẩn hỗ trợ hiển thị 6 nội dung nhiệm vụ chung.**
6. **Tài liệu định hướng phát triển quy trình Đặt hàng (Ordering Workflow).**

---

## 2. Mô Tả Tác Nhân Hệ Thống (Actors Specification)

Dưới sự phân tích của **Thành viên 1 (Leader & System Analyst)**, hệ thống xác định 3 tác nhân chính:

```text
+------------------------+-----------------------------------------------------------------+
| Tác Nhân (Actor)       | Vai Trò & Hành Vi Trong Hệ Thống                                |
+------------------------+-----------------------------------------------------------------+
| 1. Khách Truy Cập      | - Đọc nội dung giới thiệu văn hóa và thiên nhiên Tây Nguyên.    |
|    (Guest Visitor)     | - Xem danh sách nông sản đặc sản nổi bật.                       |
|                        | - Tìm kiếm sản phẩm theo tên/tỉnh thành, lọc theo danh mục.    |
|                        | - Xem thông tin nguồn gốc (Đắk Lắk, Gia Lai, Kon Tum, ...).     |
|                        | - Gửi phản hồi qua biểu mẫu Liên hệ.                            |
+------------------------+-----------------------------------------------------------------+
| 2. Khách Mua Sắm       | - Xem thông tin giá, đơn vị tính (g/kg/chai).                   |
|    (Shopping Customer) | - Chọn sản phẩm và xem trước hướng dẫn quy trình Đặt hàng.      |
|    *(Lộ trình phát triển)*| - Điền thông tin giao hàng & chọn phương thức thanh toán.       |
+------------------------+-----------------------------------------------------------------+
| 3. Quản Trị Viên       | - Quản lý Repository GitHub, phân quyền và duyệt Pull Request.  |
|    (Leader / Admin)    | - Kiểm duyệt chuẩn mã hóa UTF-8 và chất lượng mã nguồn.         |
|                        | - Bảo trì cấu trúc dữ liệu JSON và cập nhật bài viết mới.       |
+------------------------+-----------------------------------------------------------------+
```

---

## 3. Quy Trình Quản Lý Git & Phân Nhánh (Thành Viên 1 Thiết Lập)

Thành viên 1 quy định quy trình làm việc Git nhằm đảm bảo mã nguồn trên nhánh `main` luôn hoạt động ổn định:

### 3.1 Cấu trúc nhánh (Branching Strategy)
- `main`: Nhánh chạy chính thức (Production ready code). Chỉ chấp nhận code đã qua kiểm duyệt PR.
- `dev`: Nhánh tích hợp tính năng chung của nhóm.
- `leader`: Nhánh làm việc riêng của Thành viên 1 (Tài liệu phân tích, quản lý tiến độ, cấu hình repo).
- `lenguyen` / `feature/*`: Nhánh phát triển tính năng riêng của các thành viên.

### 3.2 Quy trình Pull Request & Code Review
1. Thành viên phát triển tính năng trên nhánh riêng (VD: `feature/frontend` hoặc `lenguyen`).
2. Kiểm tra mã hóa tệp tin đảm bảo chuẩn **UTF-8 (no BOM)** trước khi commit.
3. Tạo Pull Request (PR) hướng về nhánh `main` / `dev`.
4. **Thành viên 1 (Leader)** tiến hành review code:
   - Kiểm tra syntax HTML/CSS/JS và tính tương thích trên trình duyệt.
   - Kiểm tra hiển thị tiếng Việt có dấu, tránh lỗi charset (`ISO-8859-1` / mojibake).
   - Tiến hành merge PR và gắn nhãn (Label).

---

## 4. Yêu Cầu Chức Năng Chi Tiết (Functional Requirements)

### 4.1 Giới Thiệu Tây Nguyên (About Section)
- **FR-01:** Khối Hero giới thiệu vẻ đẹp đại ngàn, thổ nhưỡng đất đỏ bazan và nông sản hữu cơ.
- **FR-02:** Hiển thị thông tin đặc sản đặc trưng các tỉnh (Đắk Lắk, Gia Lai, Kon Tum, Lâm Đồng, Đắk Nông).

### 4.2 Quản Lý & Hiển Thị Sản Phẩm (Catalog System)
- **FR-03:** Nạp bất đồng bộ danh sách sản phẩm từ `data/products.json` chứa **≥ 10 sản phẩm**.
- **FR-04:** Bộ lọc danh mục sản phẩm (Cà phê, Mật ong, Tiêu, Măng khô, Trái cây, Trà thảo dược...).
- **FR-05:** Ô tìm kiếm tức thì (Live Search) hỗ trợ gõ tên sản phẩm hoặc tên vùng miền.

### 4.3 Thông Tin Nguồn Gốc (Origin Details)
- **FR-06:** Thẻ sản phẩm hiển thị rõ địa danh xuất xứ (Đắk Nông, Kon Tum, Đắk Lắk, Lâm Đồng...).
- **FR-07:** Mô tả chi tiết quy trình thu hoạch tự nhiên và cam kết chất lượng sạch.

### 4.4 Trang & Khối Liên Hệ (Contact System)
- **FR-08:** Biểu mẫu gửi thông tin liên hệ (Họ tên, Email, Số điện thoại, Nội dung).
- **FR-09:** Cung cấp thông tin địa chỉ văn phòng hỗ trợ, Email và Hotline chính thức.

### 4.5 Định Hướng Chức Năng Đặt Hàng (Ordering Roadmap)
- **FR-10:** Xây dựng khối hướng dẫn 4 bước đặt hàng (Chọn SP -> Ghi chú -> Xác nhận -> Nhận hàng).
- **FR-11:** Lập tài liệu lộ trình 3 giai đoạn phát triển giỏ hàng và thanh toán (`docs/ordering_roadmap.md`).

---

## 5. Yêu Cầu Phi Chức Năng (Non-Functional Requirements)

- **NFR-01 (Mã hóa UTF-8):** Tất cả tệp tệp tin (`.html`, `.css`, `.js`, `.json`, `.md`) bắt buộc lưu trữ chuẩn **UTF-8**, không bị lỗi hiển thị tiếng Việt có dấu.
- **NFR-02 (Thiết kế Giao diện):** Sử dụng tông màu mộc mạc Đất đỏ Bazan (`#8a4b16`, `#f8f4ed`), typography chuẩn hỗ trợ tiếng Việt.
- **NFR-03 (Responsive):** Hiển thị mượt mà trên Desktop (≥1024px), Tablet (768px-1023px) và Mobile (<767px).
- **NFR-04 (Hiệu năng):** Tải dữ liệu JSON nhanh chóng dưới 200ms.

---

## 6. Cấu Trúc Dữ Liệu Sản Phẩm (`data/products.json`)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "name", "category", "price", "origin", "description"],
    "properties": {
      "id": { "type": ["string", "integer"] },
      "name": { "type": "string" },
      "category": { "type": "string" },
      "price": { "type": "string" },
      "origin": { "type": "string" },
      "description": { "type": "string" },
      "image": { "type": "string" }
    }
  }
}
```
