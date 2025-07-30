import { Project } from '@/types/project'

const projectsData: Project[] = [
  {
    title: 'Tailblaze',
    description: `A modern, feature-rich blog theme built with Next.js and Tailwind CSS. This theme provides a powerful yet easy-to-use platform for bloggers, developers, and content creators.`,
    imgSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    href: 'https://github.com/yourusername/tailblaze',
    github: 'https://github.com/yourusername/tailblaze',
    techstack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
  },
  {
    title: 'Portfolio Website',
    description: `A sleek, responsive portfolio template built with React and styled with Tailwind CSS. Perfect for showcasing your work, skills, and experience.`,
    imgSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    href: 'https://github.com/yourusername/portfolio',
    github: 'https://github.com/yourusername/portfolio',
    techstack: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
]

export default projectsData
