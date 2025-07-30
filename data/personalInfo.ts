import { CareerEntry, Milestone, FAQ, PersonalInfo } from '@/types/personalInfo'

export const personalInfo: PersonalInfo = {
  name: 'Oliver Doan',
  title: 'Security Analyst',
  description:
    'A dedicated passionate security analyst with a strong passion for penetration testing and system hardening. My goal is to study and analyse cyber threats and mitigate them through hands-on security testing, and threat analysis.',
  skills: [
    'Identity and Access Management',
    'Active Directory',
    'Network Security',
    'Windows',
    'Linux',
    'Threat & Vulnerability Management',
    'Cloud Security',
  ],
  currentRole: '',
  socialLinks: {
    linkedin: 'linkedin.com/in/oliver-doan',
  },
  contact:
    'For a full and updated résumé, please see my LinkedIn page. If you have any question, feel free to send me a message using this contact form.',
}

export const careerTimeline: CareerEntry[] = [
  {
    period: '2023 - 2025',
    company: 'Deakin University',
    description:
      "Pursuing Master's degree in Information Technology - Cyber Security. Studying network security, penetration testing, and system hardening while working on real-world security challenges.",
    positions: [
      {
        title: 'Master of Information Technology - Cyber Security',
        period: '2023 - 2025',
      },
    ],
  },
  {
    period: 'May 2025',
    company: 'Personal Project',
    description:
      'Building a Security Information and Event Management (SIEM) monitoring system using Azure Sentinel to detect and analyze global attack patterns.',
    positions: [
      {
        title: 'SIEM Security Analyst',
        period: 'May 2025',
        description: 'Implementing Azure Sentinel to catch attackers around the world.',
      },
    ],
  },
  {
    period: 'March 2025 - May 2025',
    company: 'Deakin Detonator Toolkit',
    description:
      'Contributed as a developer to update and implement new offensive security tools including Zerologon, Netcat, and Dig into the Deakin Detonator Toolkit.',
    positions: [
      {
        title: 'Security Tool Developer',
        period: 'March 2025 - May 2025',
        description:
          'Enhanced functionality and usability of offensive security tools within the toolkit.',
      },
    ],
  },
  {
    period: 'July 2024 - October 2024',
    company: 'Deakin Detonator Toolkit',
    description:
      'Worked as a Security Engineer to fix and update baselines of offensive tools such as Netcat, Hashcat, and NbtScan.',
    positions: [
      {
        title: 'Security Engineer',
        period: 'July 2024 - October 2024',
        description: 'Tested and validated tool functionality to ensure standards compliance.',
      },
    ],
  },
  {
    period: 'March 2024 - May 2024',
    company: 'Personal Projects',
    description:
      'Conducted multiple forensic analysis projects including digital forensics investigation, steganography recovery, and computer fraud investigation using various security tools.',
    achievements: [
      'Completed full forensic analysis on disk images using Autopsy and Sleuth Kit',
      'Recovered hidden credentials using steganography tools like stegbreak and zsteg',
      'Investigated computer fraud cases with digital forensics methodologies',
    ],
    positions: [
      {
        title: 'Forensic Analyst',
        period: 'March 2024 - May 2024',
        description: 'Specialized in digital forensics, steganography, and fraud investigation.',
      },
    ],
  },
]

export const personalMilestones: Milestone[] = [
  {
    year: 2025,
    description:
      'Developed SIEM monitoring system using Azure Sentinel to detect global cyber threats and analyze attack patterns in real-time.',
    project: 'Azure Sentinel SIEM Project',
  },
  {
    year: 2024,
    description:
      'Completed comprehensive forensic analysis projects, mastering tools like Autopsy, John the Ripper, and various steganography detection tools.',
    project: 'Digital Forensics Case Studies',
  },
  {
    year: 2023,
    description:
      "Started cybersecurity journey by enrolling in Master's program at Deakin University, transitioning from general IT to specialized security focus.",
    project: 'Cybersecurity Career Transition',
  },
  {
    year: 2010,
    description:
      'Wrote my first line of code in Python at age 14. Created a simple calculator application that sparked my interest in programming and eventually led to cybersecurity.',
  },
]

// Common questions and answers about Oliver Doan
export const faqData: FAQ[] = [
  {
    question: 'Who is Oliver Doan?',
    answer:
      "Oliver Doan is a cybersecurity specialist with expertise in penetration testing, system hardening, and security architecture. He's passionate about protecting digital assets and educating others about cybersecurity best practices.",
  },
  {
    question: "What are Oliver's main skills?",
    answer:
      "Oliver's core skills include penetration testing, vulnerability assessment, network security, incident response, digital forensics, and security compliance frameworks.",
  },
  {
    question: 'Where has Oliver worked?',
    answer:
      'Oliver has experience in various cybersecurity roles focusing on enterprise security, threat hunting, and security consulting.',
  },
  {
    question: "What is Oliver's educational background?",
    answer:
      "Oliver graduated with a Master's degree in Cybersecurity from Deakin University, where he focused on advanced security topics and practical threat analysis.",
  },

  {
    question: 'When did Oliver start in cybersecurity?',
    answer:
      'Oliver started his cybersecurity journey at age 23 in 2023, beginning with programming and gradually transitioning into security-focused roles.',
  },
  {
    question: 'What type of content does Oliver create?',
    answer:
      'Oliver creates content about cybersecurity, penetration testing tutorials, system hardening guides, and security best practices through his blog.',
  },
  {
    question: 'How can I contact Oliver?',
    answer:
      'You can connect with Oliver on LinkedIn at linkedin.com/in/oliver-doan or use the contact form on his website.',
  },
]
