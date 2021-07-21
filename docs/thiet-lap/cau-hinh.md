---
sidebar_label: "Cấu hình"
sidebar_position: 3
---

# Cấu hình hệ thống

Sau khi hoàn tất cài đặt hệ thống Novabolt, bước tiếp theo là thiết lập cấu hình cho hệ thống. Đây là bước hết sức quan
trọng do đó yêu cầu bạn thực hiện thật sự cẩn thận và đầy đủ.

## Tính năng gửi Email tự động

Novabolt thực hiện gửi email trong rất nhiều tình huống bao gồm: xác thực đăng ký tài khoản, thông báo đơn hàng, thông
báo giao dịch... do đó bạn cần thiết lập tính năng này một cách cẩn thận và đầy đủ.

Tại tệp `.env` di chuyển tới các trường dưới đây và tiến hành bổ sung thông tin SMTP để hệ thống có thể thực hiện gửi
email:

```txt title=".env"
MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"
```

:::tip Khuyến cáo

Tránh sử dụng các dịch vụ email cá nhân (personal email) như Gmail, Outlook... nếu như bạn không muốn gặp các vấn đề
liên quan đến spam hoặc bảo mật phát sinh trong quá trình sử dụng. Thay vào đó hãy sử dụng các dịch vụ email giao dịch
(transactional email) như Mailgun, Postmark, Sendgrid...

:::

## Tài khoản Quản trị viên (Admin)

Novabolt thực hiện quản lý quyền truy cập dành cho quản trị viên tại tệp `.env`, để cấp quyền truy cập, hãy nhập email
của quản trị viên đã sử dụng để đăng ký tài khoản trên hệ thống tại trường sau, phân cách bằng dấu phẩy

```txt title=".env"
ADMIN_EMAILS=admin@novabolt.dev,admin2@novabolt.dev,admin3@novabolt.dev
```

## Đường dẫn tới trang Quản trị

Novabolt cho phép bạn tùy chỉnh đường dẫn để truy cập vào trang Quản trị (mặc định là `/admin`). Để thực hiện, hãy mở
tệp `.env` và thêm vào trường sau

```txt title=".env"
ADMIN_PREFIX=admin
```
