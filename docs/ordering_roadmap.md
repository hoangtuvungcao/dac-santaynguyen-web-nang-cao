# Tài Liệu Định Hướng Phát Triển Chức Năng Đặt Hàng (Ordering Roadmap)
## Dự Án: Website Quảng Bá Đặc Sản Tây Nguyên

---

## 1. Mục Tiêu Lộ Trình
Chức năng đặt hàng (E-commerce Order System) là bước phát triển tiếp theo sau khi hoàn thiện giao diện giới thiệu và danh mục dữ liệu ở Chương 1. Tài liệu này mô tả chi tiết kiến trúc, quy trình làm việc (workflow) và lộ trình 3 giai đoạn triển khai tính năng đặt hàng.

---

## 2. Quy Trình Đặt Hàng Tổng Quan (Ordering Workflow)

```text
[Khách hàng xem sản phẩm]
          │
          ▼
 [Bấm "Thêm vào giỏ"] ──────► (Lưu giỏ hàng vào LocalStorage / Memory State)
          │
          ▼
   [Mở Giỏ Hàng] ───────────► (Xem danh sách, điều chỉnh số lượng, tổng tiền)
          │
          ▼
 [Tiến Hành Đặt Hàng] ──────► (Nhập Họ tên, SĐT, Địa chỉ giao hàng, Ghi chú)
          │
          ▼
[Chọn Phương Thức TT] ──────► (Chuyển khoản QR Code COD / MoMo / VNPay)
          │
          ▼
  [Xác Nhận Đơn Hàng] ──────► (Hiển thị Mã đơn hàng + Gửi Notification)
```

---

## 3. Lộ Trình Triển Khai 3 Giai Đoạn (3-Phase Roadmap)

### Giai Đoạn 1: Quản Lý Giỏ Hàng Phía Client (Client-side Cart Management)
- **Mục tiêu:** Xử lý toàn bộ logic giỏ hàng ngay tại trình duyệt.
- **Tính năng:**
  - Thêm / Xóa / Thay đổi số lượng sản phẩm trong giỏ.
  - Lưu trữ trạng thái giỏ hàng bằng `localStorage` để không bị mất khi làm mới trang.
  - Bộ đếm Badge hiển thị tổng số lượng món đồ trên Header.
  - Tự động tính toán: Giá gốc, Giảm giá, Phí vận chuyển, Tổng thanh toán.

### Giai Đoạn 2: Form Đặt Hàng & Kiểm Lỗi (Checkout Form & Validation)
- **Mục tiêu:** Cho phép khách hàng nhập thông tin nhận hàng chuẩn xác.
- **Tính năng:**
  - Modal / Trang Checkout với Form thông tin:
    - Họ và tên (bắt buộc)
    - Số điện thoại (kiểm tra định dạng SĐT Việt Nam: 10 chữ số)
    - Địa chỉ giao hàng (Tỉnh/Thành, Quận/Huyện, Xã/Phường, Số nhà)
    - Ghi chú giao hàng
  - Lựa chọn hình thức thanh toán:
    - Thanh toán khi nhận hàng (COD)
    - Chuyển khoản ngân hàng qua Mã VietQR tự động
  - Phản hồi Toast notification thông báo đặt hàng thành công.

### Giai Đoạn 3: Tích Hợp Backend API & Cơ Sở Dữ Liệu (Backend Integration & Payment Gateway)
- **Mục tiêu:** Lưu trữ đơn hàng thực sự và tích hợp cổng thanh toán.
- **Tính năng:**
  - Xây dựng API Node.js / Express hoặc Firebase Firestore lưu trữ bảng `orders`.
  - Tích hợp Webhook tự động kiểm tra số dư chuyển khoản ngân hàng (SeAPay / Casso / VNPay API).
  - Gửi email tự động xác nhận đơn hàng kèm mã tracking cho khách hàng.
  - Trang Quản trị Đơn hàng (Admin Order Management Dashboard) dành cho nhóm quản lý.

---

## 4. Mô Hình Dữ Liệu Đơn Hàng (Order Schema Proposal)

```json
{
  "orderId": "ORD-20260806-001",
  "createdAt": "2026-08-06T20:30:00Z",
  "customer": {
    "fullName": "Nguyễn Văn A",
    "phone": "0987654321",
    "email": "nguyenvana@gmail.com",
    "address": "123 Lê Duẩn, TP. Buôn Ma Thuột, Đắk Lắk"
  },
  "items": [
    {
      "productId": "sp-01",
      "productName": "Cà Phê Robusta Măng Đen Nguyên Chất",
      "price": 185000,
      "quantity": 2
    },
    {
      "productId": "sp-05",
      "productName": "Bò Một Nắng Muối Kiến Vàng Krông Pa",
      "price": 340000,
      "quantity": 1
    }
  ],
  "subtotal": 710000,
  "shippingFee": 30000,
  "discount": 0,
  "totalAmount": 740000,
  "paymentMethod": "COD",
  "paymentStatus": "PENDING",
  "orderStatus": "PROCESSING"
}
```
