import { visit } from 'unist-util-visit'
import type { Node } from 'unist'

interface ImageNode extends Node {
  type: 'image'
  url: string
  alt?: string
  data?: {
    hProperties?: {
      className?: string
    }
  }
}

interface TextNode extends Node {
  type: 'text'
  value: string
}

// Remark plugin to handle image size attributes from markdown like ![alt](src){size:medium}
export function remarkImageSize() {
  return (tree: Node) => {
    visit(tree, 'paragraph', (node: any) => {
      if (!node.children || node.children.length < 2) return

      const imageNode = node.children.find((child: any) => child.type === 'image')
      const textNode = node.children.find((child: any) => 
        child.type === 'text' && child.value && child.value.includes('{size:')
      )

      if (imageNode && textNode) {
        const sizeMatch = textNode.value.match(/\{size:(\w+)\}/)
        if (sizeMatch) {
          const size = sizeMatch[1]
          const sizeClasses = {
            small: 'max-w-xs',
            medium: 'max-w-md', 
            large: 'max-w-2xl',
            full: 'w-full'
          }
          
          const className = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.medium
          
          // Add className to image node
          if (!imageNode.data) imageNode.data = {}
          if (!imageNode.data.hProperties) imageNode.data.hProperties = {}
          imageNode.data.hProperties.className = `${className} mx-auto block`
          
          // Remove the size text node
          node.children = node.children.filter((child: any) => child !== textNode)
        }
      }
    })
  }
}
