# Tài Liệu Yêu Cầu Kỹ Thuật & Phân Tích Kiến Trúc Hệ Thống (Chương 1)
## Dự Án: Website Quảng Bá & Giới Thiệu Đặc Sản Tây Nguyên
> **Người soạn thảo:** Thành viên 1 - Trưởng nhóm & Phân tích hệ thống (Leader & System Analyst)

---

## 1. Tổng Quan Dự Án
- **Tên dự án:** Web Quảng Bá Đặc Sản Tây Nguyên (`dac-san-tay-nguyen`)
- **Phạm vi Chương 1:** Chưa yêu cầu giao diện thương mại điện tử hoàn chỉnh, tập trung xây dựng **kiến trúc dự án, công cụ, cấu trúc dữ liệu JSON, phân công nhiệm vụ nhóm 3 người và quy trình cộng tác**.
- **Mục tiêu chính:**
  1. Giới thiệu văn hóa, thiên nhiên và thổ nhưỡng Tây Nguyên.
  2. Hiển thị danh mục ít nhất 10 sản phẩm đặc sản vùng miền.
  3. Phân loại sản phẩm rõ ràng theo từng danh mục.
  4. Cung cấp thông tin nguồn gốc (tỉnh/huyện, quy trình sản xuất).
  5. Thiết lập kênh/trang liên hệ tương tác người dùng.
  6. Định hướng kiến trúc và luồng phát triển cho chức năng Đặt hàng (Ordering Workflow).

---

## 2. Các Tác Nhân Trong Hệ Thống (Actors Specification)

Dưới sự phân tích của **Thành viên 1**, hệ thống xác định 3 tác nhân chính tương tác với ứng dụng:

```text
+------------------------+-----------------------------------------------------------------+
| Tác Nhân (Actor)       | Hành Vi & Quyền Hạn Trong Hệ Thống                              |
+------------------------+-----------------------------------------------------------------+
| 1. Khách Truy Cập      | - Xem thông tin giới thiệu Tây Nguyên & bài viết văn hóa.       |
|    (Guest Visitor)     | - Xem danh sách 10+ sản phẩm đặc sản.                           |
|                        | - Lọc sản phẩm theo danh mục và Tìm kiếm theo từ khóa.          |
|                        | - Xem Quick View modal thông tin nguồn gốc sản phẩm.            |
|                        | - Gửi phản hồi/thắc mắc qua Form liên hệ.                       |
+------------------------+-----------------------------------------------------------------+
| 2. Khách Mua Sắm       | - Thêm/xóa sản phẩm trong giỏ hàng tạm thời.                    |
|    (Shopping Customer) | - Xem tổng giá trị đơn hàng và số lượng món.                   |
|    *(Định hướng)*      | - Nhập thông tin giao hàng & chọn phương thức thanh toán.       |
+------------------------+-----------------------------------------------------------------+
| 3. Quản Trị Viên       | - Quản lý Repository Git/GitHub, duyệt Pull Request.           |
|    (Admin / Leader)    | - Cập nhật dữ liệu JSON `products.json` khi có sản phẩm mới.    |
|                        | - Bảo trì giao diện và kiểm soát lỗi hệ thống.                  |
+------------------------+-----------------------------------------------------------------+
```

---

## 3. Quy Trình Quản Lý Git & Workflow (Thành Viên 1 Thiết Lập)

1. **Chiến Lược Phân Nhánh (Branching Strategy):**
   - `main`: Nhánh ổn định chứa phiên bản release nộp bài.
   - `dev`: Nhánh tích hợp mã nguồn chung của nhóm.
   - `feature/role1-analyst`: Nhánh làm việc của Thành viên 1 (Docs & Requirement).
   - `feature/role2-frontend`: Nhánh làm việc của Thành viên 2 (HTML/CSS/JS).
   - `feature/role3-data`: Nhánh làm việc của Thành viên 3 (JSON & Images).

2. **Quy Trình Kiểm Duyệt Pull Request (Code Review):**
   - Thành viên hoàn thành nhiệm vụ -> Đẩy code lên nhánh `feature/*` tương ứng.
   - Tạo Pull Request hướng về nhánh `dev`.
   - **Thành viên 1 (Leader)** tiến hành review code, kiểm tra syntax và merge vào `dev`.
   - Sau khi kiểm thử hoàn tất, merge `dev` vào `main` để push lên GitHub.

---

## 4. Yêu Cầu Chức Năng Chi Tiết (Functional Requirements)

### 4.1 Phân Đoạn Giới Thiệu (About Section)
- **FR-01:** Hiển thị Banner Hero hoành tráng truyền tải thông điệp Nông sản hữu cơ Tây Nguyên.
- **FR-02:** Giới thiệu nét đặc trưng 5 tỉnh Tây Nguyên (Đắk Lắk, Gia Lai, Kon Tum, Lâm Đồng, Đắk Nông).

### 4.2 Quản Lý & Hiển Thị Sản Phẩm (Catalog System)
- **FR-03:** Nạp động danh sách sản phẩm từ file `data/products.json` (**≥ 10 sản phẩm**).
- **FR-04:** Phân loại theo 5 danh mục (*Cà Phê & Ca Cao*, *Hạt Dinh Dưỡng*, *Gia Vị Núi Rừng*, *Mật Ong & Dược Liệu*, *Đặc Sản Khô*).
- **FR-05:** Lọc tức thì khi người dùng bấm vào các nút Tab danh mục.
- **FR-06:** Ô tìm kiếm Live Search lọc theo Tên sản phẩm, Tên vùng xuất xứ.

### 4.3 Thông Tin Nguồn Gốc & Chi Tiết (Origin & Quick View)
- **FR-07:** Hiển thị địa danh nguồn gốc (Măng Đen, Krông Pa, Chư Sê, Cầu Đất...) trên từng thẻ sản phẩm.
- **FR-08:** Mở Modal Quick View xem chi tiết mô tả, đơn vị tính, đơn giá khi người dùng bấm "Xem".

### 4.4 Hệ Thống Liên Hệ (Contact System)
- **FR-09:** Biểu mẫu gửi thông tin gồm Họ tên, Email, Số điện thoại và Nội dung góp ý.
- **FR-10:** Thông tin liên hệ trực tiếp (Hotline, Email, Địa chỉ Buôn Ma Thuột).

### 4.5 Định Hướng Chức Năng Đặt Hàng (Ordering Roadmap)
- **FR-11:** Nút "Thêm vào giỏ" phản hồi Toast notification và tăng bộ đếm Giỏ hàng trên Header.
- **FR-12:** Xây dựng tài liệu định hướng phát triển quy trình Đặt hàng (`docs/ordering_roadmap.md`).

---

## 5. Schema Định Dạng Dữ Liệu (`data/products.json`)
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "name", "category", "price", "origin", "image"],
    "properties": {
      "id": { "type": "string" },
      "name": { "type": "string" },
      "category": { "type": "string" },
      "categoryName": { "type": "string" },
      "price": { "type": "number" },
      "originalPrice": { "type": "number" },
      "unit": { "type": "string" },
      "origin": { "type": "string" },
      "rating": { "type": "number" },
      "reviewsCount": { "type": "integer" },
      "image": { "type": "string" },
      "description": { "type": "string" },
      "badge": { "type": "string" },
      "inStock": { "type": "boolean" }
    }
  }
}
```
