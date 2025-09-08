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
  // Custom styling components
  ColoredText,
  Highlight,
  Badge,
  Alert,
  InlineCode,
  Box,
  // Override default img tag to use our Image component
  img: ({ src, alt, width, height, ...props }) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={typeof width === 'string' ? parseInt(width) : width || 800}
      height={typeof height === 'string' ? parseInt(height) : height || 400}
      className="rounded-lg shadow-md my-4"
      {...props}
    />
  ),
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
