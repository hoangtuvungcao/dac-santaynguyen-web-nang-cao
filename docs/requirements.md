# Tài Liệu Yêu Cầu Kỹ Thuật & Phân Tích Kiến Trúc Hệ Thống (Chương 1)
## Dự Án: Website Quảng Bá & Giới Thiệu Đặc Sản Tây Nguyên

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

## 2. Các Tác Nhân Trong Hệ Thống (Actors)
1. **Khách Truy Cập Vô Danh (Guest Visitor):**
   - Đọc thông tin giới thiệu Tây Nguyên, xem danh sách sản phẩm, lọc theo loại, tìm kiếm theo từ khóa.
   - Xem chi tiết sản phẩm (nguồn gốc, đơn giá, đánh giá).
   - Gửi phản hồi/thông tin qua biểu mẫu liên hệ.
2. **Khách Hàng Mua Sắm (Shopping Customer - Định hướng tương lai):**
   - Thêm sản phẩm vào giỏ hàng cá nhân.
   - Điền thông tin giao hàng và chọn phương thức thanh toán.
   - Theo dõi trạng thái đơn hàng.
3. **Quản Trị Viên / Trưởng Nhóm (Admin / Maintainer):**
   - Quản lý repository GitHub, kiểm duyệt Pull Request.
   - Cập nhật danh mục dữ liệu `products.json`.
   - Cấu hình và bảo trì trang web.

---

## 3. Phân Công Công Việc Nhóm 3 Người (Role Allocation)

Gộp 5 vai trò ban đầu thành 3 vị trí chính cho nhóm 3 thành viên:

```text
+-----------------------------------------------------------------------------------+
|                          BẢNG PHÂN CÔNG NHÓM 3 NGƯỜI                             |
+----------------------+------------------------------------------------------------+
| Thành viên           | Vai trò & Trách nhiệm chính                                |
+----------------------+------------------------------------------------------------+
| Thành viên 1         | - Trưởng nhóm (Leader) & Phân tích hệ thống (System Analyst)|
|                      | - Cấu hình Git/GitHub, quản lý workflow & PR.              |
|                      | - Phân tích yêu cầu, tác nhân & tài liệu `requirements.md`.|
|                      | - Ghi nhận nhật ký tiến độ nhóm (`work_log.md`).          |
+----------------------+------------------------------------------------------------+
| Thành viên 2         | - Phụ trách Frontend (UI/UX Developer)                     |
|                      | - Thiết kế layout HTML5 (`index.html`) & CSS (`style.css`).|
|                      | - Xây dựng Responsive & Chế độ Sáng/Tối (Light/Dark mode). |
|                      | - Viết JS (`main.js`): nạp dữ liệu, lọc, tìm kiếm & modal. |
+----------------------+------------------------------------------------------------+
| Thành viên 3         | - Phụ trách Dữ liệu (Data Specialist) & Thư ký (Secretary)  |
|                      | - Xây dựng file JSON chuẩn `products.json` (10+ sản phẩm). |
|                      | - Quản lý kho hình ảnh `assets/images/`.                   |
|                      | - Viết `README.md` & tài liệu định hướng đặt hàng (`roadmap`)|
+----------------------+------------------------------------------------------------+
```

---

## 4. Yêu Cầu Chức Năng (Functional Requirements)

### 4.1 Giới Thiệu Tây Nguyên (About Section)
- **FR-01:** Khối banner giới thiệu nét đẹp thiên nhiên, con người và nông sản đại ngàn Tây Nguyên.
- **FR-02:** Thông tin các tỉnh có đặc sản (Đắk Lắk, Gia Lai, Kon Tum, Lâm Đồng, Đắk Nông).

### 4.2 Danh Sách & Phân Loại Sản Phẩm (Product Catalog)
- **FR-03:** Nạp dữ liệu bất đồng bộ từ `data/products.json` chứa **ít nhất 10 sản phẩm**.
- **FR-04:** Phân loại sản phẩm theo danh mục: *Cà Phê & Ca Cao*, *Hạt Dinh Dưỡng*, *Gia Vị Núi Rừng*, *Mật Ong & Dược Liệu*, *Đặc Sản Khô*.
- **FR-05:** Bộ lọc theo danh mục dạng Button/Tab tương tác trực quan.
- **FR-06:** Ô tìm kiếm thời gian thực (Live Search) theo tên hoặc vùng xuất xứ.

### 4.3 Thông Tin Nguồn Gốc (Origin Details)
- **FR-07:** Thẻ sản phẩm và Modal chi tiết thể hiện rõ xuất xứ (Vd: Măng Đen - Kon Tum, Krông Năng - Đắk Lắk, Chư Sê - Gia Lai).
- **FR-08:** Hiển thị nhãn chứng nhận/đặc trưng (Nhãn: Bán chạy, Mới, Hữu cơ, Truyền thống).

### 4.4 Trang & Khối Liên Hệ (Contact System)
- **FR-09:** Biểu mẫu nhận thông tin góp ý/đặt hàng sỉ gồm: Họ tên, Email, Số điện thoại, Nội dung tin nhắn.
- **FR-10:** Hiển thị địa chỉ văn phòng đại diện, hotline hỗ trợ, email liên hệ và bản đồ/thông tin liên lạc.

### 4.5 Định Hướng Chức Năng Đặt Hàng (Order Roadmap)
- **FR-11:** Tích hợp nút "Thêm vào giỏ" xem trước số lượng trên Header.
- **FR-12:** Modal hiển thị thông tin lộ trình phát triển chức năng Đặt hàng (Giỏ hàng -> Điền địa chỉ -> Chọn thanh toán -> Xác nhận).

---

## 5. Cấu Trúc Dữ Liệu Sản Phẩm Schema (`products.json`)
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
