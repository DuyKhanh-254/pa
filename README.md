# Portfolio học tập — Nguyễn Phương Anh

Portfolio ba trang dành cho sinh viên ngành **Văn hóa và Truyền thông xuyên quốc gia**, ULIS.

## Chạy website

Yêu cầu: Node.js.

```powershell
npm run dev
```

Mở: `http://127.0.0.1:4173/`

Không cần cài thêm package. Server phát triển dùng module có sẵn của Node.js.

## Cấu trúc

- `index.html`: giới thiệu, hồ sơ cá nhân, hành trình 6 chặng và thống kê.
- `assignments.html`: sáu bài tập với sáu bố cục khác nhau; PDF được nhúng nguyên file trong website.
- `reflection.html`: bản đồ kỹ năng, đối chiếu trước/sau, thư phản tư và lời cảm ơn.
- `data.js`: nguồn nội dung chung cần chỉnh sửa khi bổ sung thông tin cá nhân.
- `styles.css`: design tokens, layout, hiệu ứng và chế độ giảm chuyển động.
- `script.js`: render nội dung, bộ lọc, modal PDF, counter và reveal khi cuộn.
- `assets/generated/`: ảnh nền, minh họa hành trình và sticker do Codex tạo trực tiếp.
- `assets/previews/`: ảnh bìa xem trước được tạo từ trang đầu của từng PDF.

## Nội dung đang chờ cập nhật

Các trường `dateOfBirth`, `className`, `teacher` trong `data.js` đang được ghi rõ là `[CẬP NHẬT SAU]`. Thay giá trị tại đó, website sẽ tự hiển thị nội dung mới.

Các file `bài 1.pdf` đến `bài 6.pdf`, `bài 1.docx` và ảnh gốc được giữ nguyên.
