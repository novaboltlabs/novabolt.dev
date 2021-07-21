---
sidebar_label: "Cài đặt"
sidebar_position: 2
---

# Cài đặt

Novabolt được xây dựng dựa trên nền tảng framework Laravel do đó việc cài đặt hoàn toàn đơn giản nếu bạn đã từng có kinh
nghiệm đối với framework này.

## Yêu cầu máy chủ

Trước khi cài đặt Novabolt, việc đầu tiên là phải kiểm tra xem máy chủ của bạn có đáp ứng các yêu cầu hay không. Để tiến
hành cài đặt Novabolt, bạn sẽ cần:

* **Nginx** hoặc **Apache** (với _mod_rewrite_ được kích hoạt)
* **PHP >= 7.3** với các extension sau:
    * BCMath
    * Ctype
    * Fileinfo
    * JSON
    * Mbstring
    * OpenSSL
    * PDO
    * Tokenizer
    * XML
* **MySQL 5.7+**
* **SSH (command-line)** để sử dụng **Composer**

:::tip Lời khuyên

Bạn sẽ không thể cài đặt Novabolt bằng cách tải xuống tệp ZIP sau đó tải tệp lên máy chủ web của mình do Novabolt sử
dụng một trình soạn thảo để quản lý các thành phần phụ thuộc được gọi là [Composer](https://getcomposer.org/) vốn yêu
cầu phải thực hiện thông qua các dòng lệnh (command line).

Điều này không nhất thiết có nghĩa là bạn cần phải sử dụng VPS. Hầu hết các nhà cung cấp máy chủ đều hỗ trợ quyền truy
cập SSH, qua đó bạn có thể cài đặt Composer và Novabolt một cách dễ dàng.

:::

## Tiến hành cài đặt

### Khởi tạo dự án

Bạn có thể cài đặt Novabolt bằng cách chạy lệnh khởi tạo dự án với Composer trên màn hình terminal của bạn như sau:

```bash
composer create-project novaboltlabs/novabolt
```

Sau khi mã nguồn của Novabolt đã được tải về, bạn cần cung cấp thông tin môi trường hoạt động (environment) trong
tệp `.env`.

### Tải về các thư viện Javascript và CSS

Novabolt sử dụng Node để quản lý các thư viện CSS và Javascript, để tải về hãy sử dụng lệnh sau

```bash
npm install
```

Tiếp theo sử dụng laravel-mix để biên dịch các thư viện này bằng lệnh

```bash
npm run dev
```

hoặc sử dụng lệnh sau để biên dịch và kết hợp nén nội dung xuất ra (chỉ nên sử dụng trên môi trường thành phẩm
production environment) với lệnh

```bash
npm run prod
```

### Thiết lập cơ sở dữ liệu

Mở tệp `.env` và tiến hành cập nhật thông tin truy cập cơ sở dữ liệu của bạn tại các trường sau:

```txt title=".env"
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=novabolt
DB_USERNAME=root
DB_PASSWORD=
```

Tiếp đến sử dụng lệnh sau để khởi tạo cơ sở dữ liệu:

```bash
php artisan migrate
```
