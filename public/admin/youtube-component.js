// Custom YouTube component for Decap CMS
CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    {
      name: "id",
      label: "YouTube Video ID",
      widget: "string",
      hint: "Just the video ID from the URL (e.g., 'dQw4w9WgXcQ' from https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
    },
    {
      name: "title",
      label: "Video Title (optional)",
      widget: "string",
      required: false,
      hint: "Optional title to display above the video"
    }
  ],
  pattern: /^<YouTube id="([^"]+)"(?: title="([^"]*)")?\s*\/>$/,
  fromBlock: function(match) {
    return {
      id: match[1],
      title: match[2] || ""
    };
  },
  toBlock: function(obj) {
    const title = obj.title ? ` title="${obj.title}"` : "";
    return `<YouTube id="${obj.id}"${title} />`;
  },
  toPreview: function(obj) {
    const title = obj.title ? `<h3>${obj.title}</h3>` : "";
    return `
      ${title}
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/${obj.id}" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    `;
  }
});
