# 🖼️ Hướng Dẫn Sử Dụng Images Có Thể Thay Đổi Kích Thước

## 🎯 Vấn Đề Đã Được Giải Quyết!

Trước đây: ❌ Images bị quá to, không thể chỉnh size
Bây giờ: ✅ Có thể chọn size image dễ dàng!

## 📷 2 Loại Image Buttons Trong CMS:

### 1. **Image (Basic)** 📷
- Upload image bình thường
- Kích thước mặc định (lớn)
- Không thể chỉnh size

### 2. **Image (Resizable)** 🎨 **← SỬ DỤNG CÁI NÀY!**
- Upload image với tùy chọn size
- Có thể thêm caption
- 4 kích thước để chọn:
  - **Small (300px)** - Cho icon, avatar
  - **Medium (500px)** - Kích thước vừa phải
  - **Large (700px)** - Cho ảnh chính
  - **Full Width** - Toàn bộ chiều rộng

## 🎯 Cách Sử Dụng:

### Trong CMS Editor:
1. Click nút **"Image (Resizable)"** 🎨
2. **Upload ảnh** hoặc chọn từ thư viện
3. **Nhập Alt Text** (mô tả ảnh)
4. **Chọn Size**:
   - Small: Ảnh nhỏ (300px)
   - Medium: Ảnh vừa (500px) ⭐ **Khuyên dùng**
   - Large: Ảnh lớn (700px)
   - Full Width: Toàn màn hình
5. **Thêm Caption** (tùy chọn) - chú thích dưới ảnh
6. Click **Insert**

### Kết Quả:
```html
<CustomImage src="/static/images/your-image.jpg" alt="Mô tả ảnh" size="medium" caption="Chú thích ảnh" />
```

## 📱 Responsive Design:
- ✅ **Tự động responsive** trên mobile
- ✅ **Rounded corners** đẹp mắt
- ✅ **Shadow effect** chuyên nghiệp
- ✅ **Caption styling** nhất quán

## 💡 Khuyên Dùng:

### 🏆 **Best Practices:**
- **Medium (500px)**: Cho hầu hết ảnh trong bài viết
- **Small (300px)**: Cho ảnh minh họa nhỏ, icon
- **Large (700px)**: Cho ảnh quan trọng, screenshot
- **Full Width**: Cho ảnh banner, landscape

### ⚡ **Ví Dụ Sử Dụng:**
```markdown
Đây là ảnh nhỏ minh họa:
<CustomImage src="/static/images/icon.png" alt="Icon" size="small" />

Đây là ảnh chính của bài viết:
<CustomImage src="/static/images/main.jpg" alt="Ảnh chính" size="large" caption="Screenshot của hệ thống" />
```

## 🧪 Test Ngay:
1. Vào: https://olivercyberstation.netlify.app/admin/
2. Tạo blog post mới
3. Tìm nút **"Image (Resizable)"** 🎨
4. Upload ảnh và chọn size!

Bây giờ bạn có thể control size của images một cách dễ dàng! 🎉
