# Tìm Hiểu Về REST API với NODEJS

1. Hướng dẫn đầu tiên: Tạo một REST API với Nodejs
    1. Sử dụng câu lệnh: `$` npm init  //để tạo gói .json cho npm
    2. Cài đặt nodejs express: `$` npm install --save express
    3. Cài đặt phần mềm Postman để có thể xem host thực hiện Request API

2. Hướng dẫn thêm nhiều Routes cho API
    1. Tạo Routes cho API
    2. Sử dụng các request cho API:
        1. GET: được sử dụng để lấy thông tin từ sever theo URI đã cung cấp.
        2. HEAD: giống với GET nhưng response trả về không có body, chỉ có header
        3. POST: gửi thông tin tới sever thông qua các biểu mẫu http( đăng kí chả hạn..)
        4. PUT: ghi đè tất cả thông tin của đối tượng với những gì được gửi lên
        5. PATCH: ghi đè các thông tin được thay đổi của đối tượng.
        6. DELETE: xóa tài nguyên trên server.
        7. CONNECT: thiết lập một kết nối tới server theo URI.
        8. OPTIONS: mô tả các tùy chọn giao tiếp cho resource.
        9. TRACE: thực hiện một bài test loop - back theo đường dẫn đến resource.
3. Xử lý lỗi và cài đặt dự án nâng cao
    1. Cài đặt nodemon: `$` npm install --save-dev nodemon   //nodemon là một npm được sử dụng cho dev kiểm tra và Xử lý lỗi
    2. Thêm trong package.json dòng "start": "nodemon server.js" tại vị trí "scripts"
    3. Sử dụng lênh: `$` npm start   //dùng để gọi nodemon server.js có trong package.json 
    4. Khi bạn thay đỗi 1 dòng code thì server sẽ được khởi động lại và cập nhât mới
4. Phân tích cú pháp và Xử lý CORS
    1. Cài đặt body-parser: `$` npm install --save body-parser
    2. Xử lý CORS
5. MongoDB và Mongoose
    1. Sử dụng cloud mongoDB
    2. Cài đặt mongoose: `$` npm install --save mongoose
6. Mongoose validation
    1. Trong phần models của products sử thuộc tính trong Schema gồm type và thêm required: true
    2. Thiết kế lại json

7. Quản lý đơn đặt hàng
    1. Tạo models cho orders

8. Truy vấn Populating với Mongoose.
    1. Sử dụng thuộc tính .populate('<name collection>') nằm trên .exec() truy vấn tới <collection> tới Id đang dùng.

9. Uploading một ảnh.
    1. Cài đặt multer: `$` npm install --save multer

10. Bổ sung đăng ký người dùng 
    1. Cài đặt bộ mã hóa bcrypt: `$` npm install --save bcrypt

11. Thêm người dùng đăng nhập và JWT Signning
    1. Cài đặt JWT: `$` npm install --save jsonwebtoken

12. Bảo vệ JWT

13. Bổ sung Controllers

    
# Kết Thúc Nội Dung