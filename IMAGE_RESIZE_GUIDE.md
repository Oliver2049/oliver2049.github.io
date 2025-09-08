# 🖼️ Cách Thay Đổi Size Image Trong Body CMS

## 🎯 3 Cách Đơn Giản Để Chỉnh Size Image:

### Cách 1: Sử dụng HTML với style (Dễ nhất! ⭐)

Sau khi upload image trong CMS, bạn edit markdown và thay thế:

```html
<!-- Thay vì markdown: -->
![Alt text](/static/images/your-image.jpg)

<!-- Dùng HTML với style: -->
<img src="/static/images/your-image.jpg" alt="Alt text" style="width: 300px;" />

<!-- Hoặc dùng phần trăm: -->
<img src="/static/images/your-image.jpg" alt="Alt text" style="max-width: 50%; height: auto;" />
```

### Cách 2: Sử dụng width/height attributes

```html
<!-- Image nhỏ -->
<img src="/static/images/your-image.jpg" alt="Alt text" width="300" height="200" />

<!-- Image vừa -->
<img src="/static/images/your-image.jpg" alt="Alt text" width="500" height="300" />

<!-- Image lớn -->
<img src="/static/images/your-image.jpg" alt="Alt text" width="700" height="400" />
```

### Cách 3: Sử dụng Tailwind CSS classes

```html
<!-- Small -->
<img src="/static/images/your-image.jpg" alt="Alt text" class="w-64 h-auto rounded-lg mx-auto" />

<!-- Medium -->
<img src="/static/images/your-image.jpg" alt="Alt text" class="w-96 h-auto rounded-lg mx-auto" />

<!-- Large -->
<img src="/static/images/your-image.jpg" alt="Alt text" class="w-full max-w-2xl h-auto rounded-lg mx-auto" />
```

## 💡 Các Size Gợi Ý:

- **width: 200px** - Icon/avatar nhỏ
- **width: 300px** - Ảnh minh họa nhỏ  
- **width: 500px** - Ảnh bài viết vừa
- **width: 700px** - Ảnh chính lớn
- **max-width: 100%** - Toàn màn hình (responsive)

## 🚀 Quy Trình Nhanh:

1. **Upload image** bằng nút 📷 trong CMS
2. **Copy đường dẫn** image (VD: `/static/images/abc.jpg`)
3. **Thay thế markdown** bằng HTML có style:
   ```html
   <img src="/static/images/abc.jpg" alt="Mô tả" style="width: 400px; height: auto;" />
   ```
4. **Save & Publish**

## ✨ Tip Hay:
- Luôn thêm `height: auto` để giữ tỷ lệ ảnh
- Dùng `max-width` thay vì `width` cho responsive
- Thêm `mx-auto` class để căn giữa ảnh

Bây giờ bạn có thể control size image dễ dàng rồi! 🎉
