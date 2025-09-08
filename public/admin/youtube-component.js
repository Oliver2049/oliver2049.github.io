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

// Override default image component to include size options
CMS.registerEditorComponent({
  id: 'image',
  label: 'Image',
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
  ],
  pattern: /^!\[([^\]]*)\]\(([^)]+)\)(?:\{([^}]*)\})?$/,
  fromBlock: function (match) {
    const alt = match[1] || ''
    const src = match[2] || ''
    const sizeMatch = match[3] ? match[3].match(/size:(\w+)/) : null
    const size = sizeMatch ? sizeMatch[1] : 'medium'
    
    return {
      alt: alt,
      src: src,
      size: size,
    }
  },
  toBlock: function (obj) {
    return `![${obj.alt}](${obj.src}){size:${obj.size}}`
  },
  toPreview: function (obj) {
    const sizeMap = {
      small: '300px',
      medium: '500px', 
      large: '700px',
      full: '100%',
    }
    const width = sizeMap[obj.size] || '500px'
    
    return `
      <div style="text-align: center; margin: 20px 0;">
        <img src="${obj.src}" alt="${obj.alt}" style="max-width: ${width}; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
      </div>
    `
  },
})
