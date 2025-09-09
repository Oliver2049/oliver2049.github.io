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
    // For images from CMS uploads (static/images path), use regular img tag to avoid optimization issues
    const isUploadedImage = src && src.includes('/static/images/')

    // If className contains size classes, use them for manual resize
    const sizeClasses = className || ''
    const hasCustomSize = sizeClasses.includes('max-w-') || sizeClasses.includes('w-')

    // Always use regular img tag for uploaded images or when custom sizing is needed
    if (hasCustomSize || isUploadedImage) {
      return (
        <div className="my-6 flex justify-center">
          <img
            src={src || ''}
            alt={alt || ''}
            className={`rounded-lg shadow-md ${hasCustomSize ? sizeClasses : 'max-w-full h-auto'} block`}
            style={style}
            onError={(e) => {
              console.error('Image failed to load:', src)
              e.currentTarget.style.display = 'none'
            }}
            {...props}
          />
        </div>
      )
    }

    // Default behavior for other images (use optimized Image component) but wrapped in div
    const imgWidth = typeof width === 'string' ? parseInt(width) : width || 800
    const imgHeight = typeof height === 'string' ? parseInt(height) : height || 400
    const combinedClassName = `rounded-lg shadow-md ${className || ''}`

    return (
      <div className="my-6 flex justify-center">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={imgWidth}
          height={imgHeight}
          className={combinedClassName}
          style={style}
          {...props}
        />
      </div>
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
