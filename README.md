#Tìm Hiểu Về REST API với NODEJS

1. Hướng dẫn đầu tiên: Tạo một REST API với Nodejs
    1. Sử dụng câu lệnh: '$' npm init  //để tạo gói .json cho npm
    2. Cài đặt nodejs express: '$' npm install --save express
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



#Kết Thúc Nội Dung