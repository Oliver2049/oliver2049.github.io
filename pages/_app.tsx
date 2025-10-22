// _app.tsx with const
import React from 'react'
import '../css/tailwind.scss'
import '../css/prism.scss'
import '../css/extra.scss'
import '../css/fonts.scss'
import 'katex/dist/katex.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { AppProps } from 'next/app'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

NProgress.configure({ showSpinner: true })

// Route change progress bar handlers
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <title>Oliver's Blog</title>
        <meta
          name="description"
          content="Welcome to Oliver's Cyber Station, a blog about cybersecurity, penetration testing, and SOC analysis."
        />
        <meta property="og:title" content="Oliver's Blog" />
        <meta
          property="og:description"
          content="Welcome to Oliver's Cyber Station, a blog about cybersecurity, penetration testing, and SOC analysis."
        />
        <meta
          property="og:image"
          content="https://oliver2049-github-io.pages.dev/static/images/default-preview.png"
        />
        <meta property="og:url" content="https://oliver2049-github-io.pages.dev" />
        <meta property="og:type" content="website" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <div className="font-sans">
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </div>
    </ThemeProvider>
  )
}
