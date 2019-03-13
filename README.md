

# ModelingSportStore
# Đồ án training NodeApi
Thành viên
* Hoàng Thế Quyền *
* Anh Linh
## Hướng dẫn chạy đồ án
*-- 1. Set up project: npm install hoặc yarn install*
*-- 2. Start project: npm start hoặc yarn start*

## Các chức năng chính
### 1 Phân hệ khách
* [x] **1.1 Trang chủ**
  * [x] Hiển thị sản phẩm theo tên A-Z 
  * [x] Hiển thị sản phẩm theo tên Z-A 
  * [x] Hiển thị sản phẩm tăng theo giá
  * [x] Hiển thị sản phẩm giảm theo giá
* [x] **1.2 Hệ thống Menu Lọc Sản Phầm**
  * [x] Hiển thị danh sách sản phầm theo Brand
  * [x] Hiển thị danh sách sản phầm theo Price
  * [x] Hiển thị danh sách sản phầm theo Size
  * [x] Hiển thị danh sách sản phầm theo Colour
  * [x] Hiển thị danh sách sản phầm theo Features

* [x] **1.4 Xem chi tiết sản phẩm**
  * [x] Hiển thị các thông tin sau
    * [x] Hình ảnh
    * [x] Giá bán
    * [x] Mô tả
    * [x] Xuất xử
    * [x] Loại
    * [x] Nhà sản xuất
    
* [ ] **1.5 Tìm kiếm sản phẩm** 
  * [ ] Cho phép tìm kiếm theo nhiều tiêu chí: tên, giá, loại, nhà sản xuất
* [x] **1.6 Đăng nhập**
* [x] **1.7 Đăng ký**
### 2 Phân hệ người dùng đã đăng nhập
* [x] **2.1 Có đầy đủ chức năng của phân hệ khách**
* [x] **2.3 Chọn mua sản phẩm**
  * [x] Cho phép chọn mua sản phẩm khi xem chi tiết 
* [x] **2.4 Điều chỉnh thông tin sản phẩm đang chọn mua (quản lý giỏ hàng)**
* [x] **2.5 Thanh toán**
  * [x] Lưu thông tin sản phẩm khách hàng chọn mua và cập nhật lại số lượng bán, số lượng tồn tương ứng cho từng sản phẩm
* [x] **2.6 Xem lịch sử mua hàng**
  * [x] Xem danh sách các đơn hàng đã từng đặt theo thứ tự từ mới đến cũ
  * [ x Xem chi tiết từng đơn hàng và trạng thái của các đơn hàng này
### 3 Phân hệ quản trị (Admin)
* [x] **3.1 Dashboard**
  * [x] Hiển thị danh sách các chức năng mà admin có thể sử dụng
* [x] **3.2 Quản lý sản phẩm, loại sản phẩm, nhà sản xuất**
* [x] **3.3 Quản lý đơn hàng**
  * [x] Thể hiện danh sách đơn hàng theo thứ tự giảm dần của ngày lập
  * [x] Cho phép admin thực hiện việc cập nhật trạng thái đơn hàng(chưa giao, đang giao, đã giao). Đơn hàng đã giao sẽ có thể hiện khác với đơn hàng chưa giao (VD: text màu khác, background màu khác,...)
