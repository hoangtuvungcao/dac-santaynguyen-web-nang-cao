# Roadmap Phát Triển Chức Năng Đặt Hàng

## 1. Mục tiêu
Dự án hiện tại đang tập trung vào trang web giới thiệu đặc sản Tây Nguyên. Trong giai đoạn tiếp theo, hệ thống sẽ phát triển thêm quy trình đặt hàng trực tuyến nhằm giúp khách hàng dễ dàng lựa chọn sản phẩm, kiểm tra giỏ hàng và gửi đơn hàng.

## 2. Mục tiêu nghiệp vụ
- Cho phép người dùng xem danh sách sản phẩm và chọn mua nhanh.
- Tạo giỏ hàng tạm thời cho từng khách truy cập.
- Cung cấp biểu mẫu đặt hàng với thông tin người nhận và phương thức liên hệ.
- Xác nhận đơn hàng sau khi khách gửi yêu cầu.
- Hỗ trợ quản trị viên theo dõi trạng thái đơn hàng.

## 3. Luồng người dùng đề xuất
1. Khách truy cập xem danh sách sản phẩm trên trang chủ.
2. Chọn sản phẩm và bấm nút “Thêm vào giỏ”.
3. Hệ thống hiển thị giỏ hàng với số lượng và tổng tiền.
4. Khách nhập thông tin người nhận và yêu cầu giao hàng.
5. Hệ thống gửi xác nhận đơn hàng và lưu dữ liệu vào cơ sở dữ liệu hoặc file dữ liệu tạm.

## 4. Giai đoạn phát triển

### Giai đoạn 1 – Hoàn thiện catalog và lựa chọn sản phẩm
- Hoàn thiện thẻ sản phẩm có ảnh, giá, nguồn gốc.
- Thêm nút “Mua ngay” hoặc “Thêm vào giỏ”.
- Chuẩn hóa dữ liệu JSON với các trường: `price`, `unit`, `stock`, `featured`.

### Giai đoạn 2 – Quản lý giỏ hàng
- Tạo giỏ hàng ở phía client bằng JavaScript.
- Cho phép tăng/giảm số lượng và xóa sản phẩm.
- Hiển thị tổng tiền tạm tính.

### Giai đoạn 3 – Biểu mẫu đặt hàng
- Tạo form gồm: họ tên, số điện thoại, địa chỉ, ghi chú.
- Kiểm tra dữ liệu đầu vào trước khi gửi.
- Hiển thị thông báo thành công hoặc lỗi.

### Giai đoạn 4 – Xác nhận và lưu đơn hàng
- Lưu đơn hàng vào local storage hoặc API giả lập.
- Gửi thông báo xác nhận cho khách hàng.
- Cung cấp trạng thái: Chờ xác nhận / Đang chuẩn bị / Hoàn tất.

### Giai đoạn 5 – Mở rộng cho thương mại điện tử
- Tích hợp thanh toán trực tuyến.
- Quản lý tài khoản khách hàng.
- Thêm lịch sử đơn hàng và theo dõi vận chuyển.

## 5. Yêu cầu kỹ thuật đề xuất
- Sử dụng JavaScript để quản lý trạng thái giỏ hàng.
- Tách dữ liệu sản phẩm khỏi giao diện bằng `data/products.json`.
- Tăng cường xử lý lỗi và phản hồi người dùng bằng toast hoặc modal.
- Giữ giao diện thân thiện, tối giản và phù hợp với phong cách Tây Nguyên.

## 6. Tiêu chí hoàn thành
- Người dùng có thể chọn sản phẩm và thêm vào giỏ hàng.
- Hệ thống hiển thị đúng thông tin đơn hàng trước khi xác nhận.
- Đơn hàng được lưu và hiển thị trạng thái rõ ràng.
- Quy trình đặt hàng có thể chạy trên môi trường local mà không cần cấu hình phức tạp.
