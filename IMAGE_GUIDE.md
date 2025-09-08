# 🖼️ How to Add Images in Decap CMS

## Problem Fixed!

The issue was that the CMS wasn't properly handling image uploads in the markdown body field. I've fixed this by:

1. ✅ Updated MDXComponents to properly handle `<img>` tags
2. ✅ Added image editor components to the CMS config
3. ✅ Set proper media folder paths

## How to Add Images in CMS Body Field

### Method 1: Drag & Drop (Recommended)

1. Go to your CMS at https://olivercyberstation.netlify.app/admin/
2. Create/edit a blog post or note
3. In the **Body** field, simply **drag and drop** an image file
4. The CMS will automatically upload it and insert the correct markdown syntax

### Method 2: Upload Button

1. In the Body field, click the image button in the toolbar
2. Upload your image file
3. Add alt text for accessibility
4. The image will be inserted automatically

### Method 3: Manual Markdown

If you want to manually reference existing images:

```markdown
![Description of image](/static/images/your-image.jpg)
```

## Available Images for Testing

You can test with these existing images in your `/static/images/` folder:

- `/static/images/tailblaze-intro.jpg`
- `/static/images/nextjs-static-site.jpg`
- `/static/images/photo-content-creation.jpg`

## Example Post with Image

Here's how your markdown should look:

```markdown
# My Blog Post

This is some text before the image.

![A beautiful screenshot](/static/images/tailblaze-intro.jpg)

This is some text after the image. You can also use **bold text** and _italics_.

<ColoredText color="blue">And colored text too!</ColoredText>
```

## Image Features

- ✅ Auto-optimized by Next.js
- ✅ Responsive and mobile-friendly
- ✅ Proper alt text for accessibility
- ✅ Beautiful styling with rounded corners and shadows
- ✅ Works in both light and dark themes

## Test It Now!

1. Go to https://olivercyberstation.netlify.app/admin/
2. Create a new blog post
3. Try dragging an image into the Body field
4. Publish and check your live site!

The images should now appear properly in your published posts! 🎉
