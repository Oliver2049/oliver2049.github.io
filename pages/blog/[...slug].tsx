import fs from 'fs'
import Head from 'next/head'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import 'katex/dist/katex.min.css'
import React from 'react'
import { Post, BlogPostProps, convertToPosts } from '@/types'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'PostLayout'

interface SlugParams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps, SlugParams> = async ({ params }) => {
  const { slug } = params as SlugParams
  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug || '') === slug.join('/'))

  // Convert to Post type first
  const processedPosts = convertToPosts(allPosts)

  // Ensure prev and next are properly serializable
  let prev = processedPosts[postIndex + 1] || null
  let next = processedPosts[postIndex - 1] || null

  // Make sure external property is a string or null/undefined for serialization
  if (prev) {
    prev = {
      ...prev,
      external: prev.external || null,
    }
  }

  if (next) {
    next = {
      ...next,
      external: next.external || null,
    }
  }

  const post = await getFileBySlug('blog', slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', author)
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(processedPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return { props: { post, authorDetails, prev, next } }
}

export default function Blog({ post, authorDetails, prev, next }: BlogPostProps): React.ReactNode {
  const { mdxSource, toc, frontMatter } = post

  // Generate meta tags for static export
  const url = `${siteMetadata.siteUrl}/blog/${frontMatter.slug}`
  const ogImage = frontMatter.images?.[0] || frontMatter.image || siteMetadata.socialBanner
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteMetadata.siteUrl}${ogImage}`
  
  return (
    <>
      <Head>
        <title>{`${frontMatter.title} – ${siteMetadata.title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={frontMatter.summary} />
        
        {/* Additional meta tags for LinkedIn profile editor */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={frontMatter.title} />
        <meta name="twitter:image:alt" content={frontMatter.title} />
        <meta name="author" content="Oliver Doan" />
        
        {/* Open Graph meta tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={frontMatter.summary} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:image" content={ogImageUrl} />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:creator" content={siteMetadata.twitter} />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.summary} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        {/* Article meta tags */}
        {frontMatter.date && <meta property="article:published_time" content={new Date(frontMatter.date).toISOString()} />}
        {frontMatter.tags && frontMatter.tags.map((tag: string) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        
        {/* JSON-LD structured data for better LinkedIn compatibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": frontMatter.title,
              "description": frontMatter.summary,
              "image": ogImageUrl,
              "datePublished": frontMatter.date ? new Date(frontMatter.date).toISOString() : undefined,
              "dateModified": frontMatter.date ? new Date(frontMatter.date).toISOString() : undefined,
              "author": {
                "@type": "Person",
                "name": "Oliver Doan",
                "url": `${siteMetadata.siteUrl}/about`
              },
              "publisher": {
                "@type": "Organization",
                "name": siteMetadata.title,
                "url": siteMetadata.siteUrl
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": url
              },
              "keywords": frontMatter.tags?.join(', ') || '',
              "url": url
            })
          }}
        />
        
        <link rel="canonical" href={url} />
      </Head>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
