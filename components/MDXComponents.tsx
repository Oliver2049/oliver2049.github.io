/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import Image from './Image'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import dynamic from 'next/dynamic'
import Gist from './Gist'
import YouTube from './YouTube'
import CustomImage from './CustomImage'
import { ColoredText, Highlight, Badge, Alert, InlineCode, Box } from './StyledText'

interface WrapperProps {
  layout: string
  [key: string]: any
}

interface MDXLayoutRendererProps {
  layout: string
  mdxSource: string
  [key: string]: any
}

export const MDXComponents: MDXComponentsType = {
  Image,
  TOCInline,
  pre: ({ children, ...props }) => <Pre {...props}>{children}</Pre>,
  BlogNewsletterForm: BlogNewsletterForm,
  Gist,
  YouTube,
  CustomImage,
  // Custom styling components
  ColoredText,
  Highlight,
  Badge,
  Alert,
  InlineCode,
  Box,
  // Override default img tag to support manual resizing with className and size attributes
  img: ({ src, alt, width, height, style, className, ...props }: any) => {
    // Check if this is from our custom markdown format with size info
    const parentElement = typeof window !== 'undefined' ? document.querySelector(`img[src="${src}"]`)?.parentElement : null
    
    // If className contains size classes, use them for manual resize
    const sizeClasses = className || ''
    const hasCustomSize = sizeClasses.includes('max-w-') || sizeClasses.includes('w-')
    
    // For images from CMS uploads (static/images path), use regular img tag to avoid optimization issues
    const isUploadedImage = src && src.includes('/static/images/')
    
    if (hasCustomSize || isUploadedImage) {
      // Use regular img tag with Tailwind classes for manual resize or uploaded images
      return (
        <img 
          src={src || ''} 
          alt={alt || ''} 
          className={`rounded-lg shadow-md my-4 mx-auto block ${hasCustomSize ? sizeClasses : 'max-w-full h-auto'}`}
          onError={(e) => {
            console.error('Image failed to load:', src)
            e.currentTarget.style.display = 'none'
          }}
          {...props}
        />
      )
    }
    
    // Default behavior for other images (use optimized Image component)
    const imgWidth = typeof width === 'string' ? parseInt(width) : width || 800
    const imgHeight = typeof height === 'string' ? parseInt(height) : height || 400
    const combinedClassName = `rounded-lg shadow-md my-4 ${className || ''}`
    
    return (
      <Image 
        src={src || ''} 
        alt={alt || ''} 
        width={imgWidth}
        height={imgHeight}
        className={combinedClassName}
        style={style}
        {...props} 
      />
    )
  },
  wrapper: ({ layout, ...rest }: WrapperProps) => {
    const Layout = dynamic(() => import(`../layouts/${layout}`), {
      ssr: true,
    })
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: MDXLayoutRendererProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}