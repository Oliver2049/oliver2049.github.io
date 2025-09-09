// Custom Image component for Decap CMS with size options
CMS.registerEditorComponent({
  id: 'sized-image',
  label: 'Sized Image',
  fields: [
    {
      name: 'src',
      label: 'Image',
      widget: 'image',
      hint: 'Upload or select an image',
    },
    {
      name: 'alt',
      label: 'Alt Text',
      widget: 'string',
      hint: 'Alternative text for accessibility',
    },
    {
      name: 'size',
      label: 'Size',
      widget: 'select',
      default: 'medium',
      options: [
        { label: 'Small (300px)', value: 'small' },
        { label: 'Medium (500px)', value: 'medium' },
        { label: 'Large (700px)', value: 'large' },
        { label: 'Full Width', value: 'full' },
      ],
      hint: 'Choose the display size for the image',
    },
    {
      name: 'caption',
      label: 'Caption (optional)',
      widget: 'string',
      required: false,
      hint: 'Optional caption to display below the image',
    },
  ],
  pattern: /^<CustomImage src="([^"]+)" alt="([^"]*)" size="([^"]+)"(?: caption="([^"]*)")?\s*\/>$/,
  fromBlock: function (match) {
    return {
      src: match[1],
      alt: match[2],
      size: match[3],
      caption: match[4] || '',
    }
  },
  toBlock: function (obj) {
    const caption = obj.caption ? ` caption="${obj.caption}"` : ''
    return `<CustomImage src="${obj.src}" alt="${obj.alt}" size="${obj.size}"${caption} />`
  },
  toPreview: function (obj) {
    const sizeClasses = {
      small: 'max-w-xs',
      medium: 'max-w-md',
      large: 'max-w-2xl',
      full: 'w-full',
    }
    const sizeClass = sizeClasses[obj.size] || sizeClasses.medium
    const caption = obj.caption
      ? `<p style="text-align: center; font-style: italic; color: #666; margin-top: 8px;">${obj.caption}</p>`
      : ''

    return `
      <div style="margin: 24px 0; text-align: center;">
        <img 
          src="${obj.src}" 
          alt="${obj.alt}"
          style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
          class="${sizeClass}"
        />
        ${caption}
      </div>
    `
  },
})
