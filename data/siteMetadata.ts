import { SiteMetadata } from '@/types/siteMetadata'

const siteMetadata: SiteMetadata = {
  title: "Oliver's Cyber Station",
  author: 'Oliver',
  headerTitle: "Oliver's Cyber Station",
  description:
    'A dedicated passionate security analyst with a strong passion for penetration testing and system hardening. My goal is to study and analyse cyber threats and mitigate them through hands-on security testing, and threat analysis.',
  notes:
    'This is a personal blog where I share my knowledge and experiences in cybersecurity, penetration testing, and system hardening.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://oliver2049-github-io.pages.dev',
  siteRepo: 'https://github.com/oliver2049/oliver2049.github.io',
  siteLogo: '/CyberStation.png',
  image: '/avatar.jpg',
  socialBanner: '/images/banner.png',
  email: 'oliverdoan3001@gmail.com',
  github: 'https://github.com/Oliver2049',
  twitter: 'https://x.com/MinhTinon4',
  linkedin: 'https://www.linkedin.com/in/oliver-doan/',
  website: 'https://oliver2049-github-io.pages.dev',
  locale: 'en-US',
  keywords: 'cybersecurity, penetration testing, system hardening, security analyst, Oliver Doan',
  analytics: {
    googleAnalyticsId: '',
  },
  newsletter: {
    provider: process.env.MAILCHIMP_URL,
  },
  comment: {
    provider: 'disqus',
    disqusConfig: {
      shortname: 'oliver-cyber-station',
    },
    utterancesConfig: {
      repo: 'oliver2049/oliver2049.github.io',
      issueTerm: 'pathname',
      label: 'Comment',
      theme: 'github-light',
      darkTheme: 'github-dark',
    },
  },
  socialAccount: {
    twitter: '@MinhTinon4',
  },
  credit: {
    author: 'Oliver Doan',
    website: 'https://oliver2049.github.io',
    github: 'https://github.com/Oliver2049',
  },
}

export default siteMetadata
