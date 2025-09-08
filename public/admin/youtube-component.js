// Custom YouTube component for Decap CMS
CMS.registerEditorComponent({
  id: 'youtube',
  label: 'YouTube',
  fields: [
    {
      name: 'id',
      label: 'YouTube Video ID',
      widget: 'string',
      hint: "Just the video ID from the URL (e.g., 'dQw4w9WgXcQ' from https://www.youtube.com/watch?v=dQw4w9WgXcQ)",
    },
    {
      name: 'title',
      label: 'Video Title (optional)',
      widget: 'string',
      required: false,
      hint: 'Optional title to display above the video',
    },
  ],
  pattern: /^<YouTube id="([^"]+)"(?: title="([^"]*)")?\s*\/>$/,
  fromBlock: function (match) {
    return {
      id: match[1],
      title: match[2] || '',
    }
  },
  toBlock: function (obj) {
    const title = obj.title ? ` title="${obj.title}"` : ''
    return `<YouTube id="${obj.id}"${title} />`
  },
  toPreview: function (obj) {
    const title = obj.title ? `<h3>${obj.title}</h3>` : ''
    return `
      ${title}
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/${obj.id}" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    `
  },
})

// Custom Image component with size options
CMS.registerEditorComponent({
  id: 'custom-image',
  label: 'Image (Resizable)',
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
      hint: 'Describe the image for accessibility',
    },
    {
      name: 'size',
      label: 'Size',
      widget: 'select',
      options: [
        { label: 'Small (300px)', value: 'small' },
        { label: 'Medium (500px)', value: 'medium' },
        { label: 'Large (700px)', value: 'large' },
        { label: 'Full Width', value: 'full' },
      ],
      default: 'medium',
      hint: 'Choose the image size',
    },
    {
      name: 'caption',
      label: 'Caption (optional)',
      widget: 'string',
      required: false,
      hint: 'Optional caption below the image',
    },
  ],
  pattern: /^<CustomImage src="([^"]+)" alt="([^"]*)" size="([^"]*)"(?: caption="([^"]*)")?\s*\/>$/,
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
    const sizeMap = {
      small: '300px',
      medium: '500px', 
      large: '700px',
      full: '100%',
    }
    const width = sizeMap[obj.size] || '500px'
    const caption = obj.caption ? `<p style="text-align: center; font-style: italic; margin-top: 8px;">${obj.caption}</p>` : ''
    
    return `
      <div style="text-align: center; margin: 20px 0;">
        <img src="${obj.src}" alt="${obj.alt}" style="max-width: ${width}; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
        ${caption}
      </div>
    `
  },
})
