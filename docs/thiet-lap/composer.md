---
sidebar_label: "Composer"
sidebar_position: 1
---

# Composer

Novabolt sử dụng một chương trình có tên gọi là [Composer](https://getcomposer.org) để quản lý các dependency và
extension. Bạn sẽ cần sử dụng composer nếu bạn muốn:

* Cài đặt và nâng cấp Novabolt
* Cài đặt, nâng cấp hoặc xóa bỏ các extension

Hướng dẫn này được cung cấp dưới dạng giải thích ngắn gọn về Composer. Chúng tôi thực sự khuyên bạn nên tham
khảo [tài liệu chính thức](https://getcomposer.org/doc/00-intro.md) để biết thêm thông tin.

:::note Composer v2

Trước đây, Composer đã gặp phải nhiều vấn đề lớn khi chạy trên shared hosting do sử dụng quá nhiều bộ nhớ. Vào năm 2020,
[Composer v2 đã được phát hành](https://blog.packagist.com/composer-2-0-is-now-available/) với những cải tiến về hiệu
suất và giảm thiểu mức sử dụng bộ nhớ giúp loại bỏ những vấn đề này. Do đó hãy đảm bảo rằng máy chủ của bạn đang sử dụng
Composer v2!

:::

## Composer là gì

> Composer là một công cụ để quản lý dependency trong PHP. Nó cho phép bạn khai báo các thư viện mà dự án của bạn phụ
> thuộc vào và nó sẽ quản lý (cài đặt / cập nhật) chúng cho bạn.
> — [Giới thiệu về Composer](https://getcomposer.org/doc/00-intro.md)

Mỗi bản cài đặt Novabolt chủ yếu bao gồm phần lõi Novabolt và một tập hợp các extension (phần mở rộng). Mỗi phần trong
số này có các dependency và phiên bản riêng.

Ngày trước, các nền tảng ứng dụng sẽ quản lý extension bằng cách yêu cầu người dùng tải lên các tệp zip có chứa mã nguồn
của extension. Điều đó có vẻ đơn giản, nhưng các vấn đề trở ngại nhanh chóng trở nên rõ ràng:

* Tải lên các tệp zip ngẫu nhiên từ internet dần trở thành một ý tưởng tồi. Việc yêu cầu các tiện ích mở rộng được tải
  xuống từ một nguồn trung tâm như Packagist khiến việc spam mã độc trở nên dễ dàng hơn, do đó hãy đảm bảo rằng mã nguồn
  được công bố trên GitHub cho các tiện ích mở rộng miễn phí/công khai.
* Giả sử Tiện ích mở rộng A yêu cầu v4 của một số thư viện và Tiện ích mở rộng B yêu cầu v5 của cùng thư viện đó. Với
  giải pháp dựa trên zip, một trong hai dependency có thể ghi đè lên dependency còn lại, gây ra tất cả các loại vấn đề
  không nhất quán. Hoặc cả hai sẽ cố gắng chạy cùng một lúc, điều này sẽ khiến PHP bị sập (bạn không thể khai báo hai
  lần cho cùng một class).
* Các tệp zip có thể gây ra rất nhiều đau đầu nếu cố gắng tự động hóa việc triển khai, chạy các bài kiểm tra tự động
  hoặc mở rộng quy mô đến nhiều nút máy chủ.
* Không có cách nào để đảm bảo dừng cài đặt các phiên bản tiện ích mở rộng xung đột hoặc đáp ứng các yêu cầu về phiên
  bản PHP và tiện ích mở rộng của hệ thống.
* Chắc chắn chúng ta có thể nâng cấp tiện ích mở rộng bằng cách thay thế tệp zip khác. Nhưng nâng cấp lõi của Novabolt
  thì sao? Và làm thế nào chúng ta có thể đảm bảo rằng các tiện ích mở rộng có thể khai báo phiên bản lõi nào mà chúng
  tương thích?

Composer có thể xử lý tất cả những vấn đề này và hơn thế nữa!

## Hướng dẫn cài đặt Composer

Giống như với bất kỳ phần mềm nào khác, Composer trước tiên phải được cài đặt trên máy chủ nơi Novabolt đang chạy. Có
một số tùy chọn tùy thuộc vào loại hình hosting/server bạn sử dụng.

### Dedicated Web Server

Trong trường hợp này, bạn có thể cài đặt theo đề xuất trong hướng dẫn cài
đặt [Composer](https://getcomposer.org/doc/00-intro.md#system-requirements)

### Managed/Shared hosting

Nếu Composer chưa được cài đặt sẵn (kiểm tra bằng cách chạy `composer --version`), bạn có thể sử dụng phương
pháp [cài đặt thủ công](https://getcomposer.org/composer-stable.phar). Chỉ cần tải tệp composer.phar lên bất cứ thư mục
nào trên hosting của bạn và chạy lệnh `/path/to/your/php8 composer.phar COMMAND` cho bất kỳ lệnh nào được ghi
là `composer COMMAND`

:::warning Cảnh báo

Một số bài viết trên internet sẽ đề cập đến việc bạn có thể sử dụng các công cụ như PHP shell. Nếu bạn không chắc mình
đang làm gì hoặc họ đang nói gì - hãy cẩn thận! Sử dụng web shell không được bảo vệ là **cực kỳ** nguy hiểm.

:::

## Hướng dẫn sử dụng Composer

Bạn sẽ cần sử dụng Composer qua giao diện dòng lệnh (**C**ommand-**l**ine **i**nterface - CLI). Do đó hãy đảm bảo bạn có
thể truy cập máy chủ của mình qua Secure Shell (SSH).

Sau khi đã cài đặt Composer, bạn sẽ có thể chạy các lệnh Composer trong SSH terminal của mình thông qua các
lệnh `composer COMMAND`

:::tip Lời khuyên

Sau hầu hết các lệnh, bạn sẽ muốn chạy `composer dump-autoload -a`. Về cơ bản, thao tác này sẽ giúp cache lại các tệp
PHP để chúng có thể chạy nhanh hơn.

:::

## Tôi không có quyền truy cập SSH

Hầu hết các nhà cung cấp dịch vụ hosting sẽ cấp quyền truy cập SSH cho bạn. Tuy nhiên nếu nhà cung cấp hosting của bạn
không có (và vì một lý do nào đó bạn không thể chuyển sang nhà cung cấp khác) bạn vẫn có một số tùy chọn như sau:

* Cài đặt Composer và chạy lệnh `composer install` trên máy tính của bạn. Sau đó tải các tệp dữ liệu lên host của bạn
  bằng các phần mềm FTP mà bạn tin dùng. Để thực hiện các sửa đổi (cập nhật Novabolt, cài đặt/cập nhật/gỡ bỏ tiện ích mở
  rộng), hãy tải xuống phiên bản hiện tại của Novabolt từ hosting của bạn và chạy bất kỳ lệnh composer nào bạn cần, sau
  đó thay thế tệp `composer.json`, `composer.lock` và thư mục `vendor` bằng bản sao cục bộ của bạn. Hãy đảm bảo bạn thực
  hiện sao lưu trước khi thực hiện việc này!

* Một số nhà cung cấp dịch vụ hosting có thể cung cấp **G**raphical **u**ser **i**nterface (GUI) để quản lý composer.
  Tất nhiên sử dụng CLI là tốt nhất, nhưng nếu GUI là phương thức duy nhất bạn có thể sử dụng, hãy tham khảo tài liệu từ
  nhà cung cấp để biết cách sử dụng nó.

Lưu ý rằng những cách giải quyết trên không được hỗ trợ chính thức! Cách duy nhất được hỗ trợ chính thức để cài đặt và
quản lý Novabolt là thông qua Composer.
