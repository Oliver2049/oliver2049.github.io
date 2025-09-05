import { Fragment } from 'react'
import { TimelineItem } from '@/types/timeline'

// Free nature stock images from Unsplash
const forestImage = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500'
const mountainImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500'
const beachImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500'
const waterfallImage = 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=500'
const houseImage = 'https://images.unsplash.com/photo-1753808645289-283497260e33?q=80&w=500'

const timelineData: TimelineItem[] = [
  {
    year: 'Aug 2025',
    position: 'right',
    title: 'Personal Project - Vulnerability Assessment Lab',
    content: (
      <Fragment>
        <ul>
          <li>
            Configured Nessus on a Windows VM and performed credentialed scans to identify
            vulnerabilities to strengthen system security.
          </li>
          <li>
            Installed vulnerable software (Log4j, older Chrome, Minecraft) and conducted advanced
            scans to test detection and response capabilities.
          </li>
          <li>
            Implemented remediation strategies and documented findings to provide actionable
            insights for improving system resilience.
          </li>
        </ul>
      </Fragment>
    ),
    image: beachImage,
    imageAlt: 'Pristine beach with crystal clear waters',
  },
  {
    year: '2023 - 2025',
    position: 'right',
    title: 'Education',
    content: (
      <Fragment>
        <p>
          Graduated from{' '}
          <b>
            <a
              href="https://www.deakin.edu.au/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Deakin University"
            >
              Deakin University
            </a>
          </b>
          , with a Master's degree in <b>Information Technology - Cyber Security</b>. During my time
          there, I studied and learned about various aspects of cybersecurity, including network
          security, penetration testing, and system hardening. I also worked on several projects
          that involved real-world security challenges.
        </p>
      </Fragment>
    ),
    image: beachImage,
    imageAlt: 'Pristine beach with crystal clear waters',
  },
  {
    year: 'May 2025 ',
    position: 'left',
    company: ' Personal Project - SIEM Monitoring using Azure Sentinel',
    content: (
      <Fragment>
        <div className="flex flex-row mb-2">
          Working on a personal project focused on Security Information and Event Management (SIEM)
          using Azure Sentinel to catch attckers around the world:
        </div>
        <ul>
          <li>
            Deployed Microsoft Sentinel with Log Analytics; ingested Windows Security Events,
            configured connectors, and built custom KQL queries to monitor failed logins and
            suspicious activity, enabling proactive detection of potential intrusions.
          </li>
          <li>
            Implemented Watchlist-based enrichment to map attacker IPs to geographic locations and
            performed incident triage, and visualising threats on an interactive attack map.
          </li>
        </ul>
      </Fragment>
    ),
  },
  {
    year: 'March 2025 - May 2025',
    position: 'left',
    company: 'Final year Project - Deakin Detonator Toolkit',
    content: (
      <Fragment>
        <ul>
          <li>
            Worked as a <b>Developer</b> to update and implement new offensive tools such as
            Zerologon, Netcat, and Dig into Deakin Detonator Toolkit.
          </li>
          <li>
            Implemented and tested new features for the tools to enhance their functionality and
            usability within the Toolkit.
          </li>
        </ul>
      </Fragment>
    ),
    image: forestImage,
    imageAlt: 'Dense green forest with sunlight filtering through trees',
  },
  {
    year: 'July 2024 - October 2024',
    position: 'right',
    company: 'Final year Project - Deakin Detonator Toolkit',
    content: (
      <Fragment>
        <ul>
          <li>
            Worked as a <b>Security Engineer</b> to fix and update baselines of the offensive tools
            such as Netcat, Hashcat, NbtScan.
          </li>
          <li>
            Tested and validated the functionality of the tools to ensure they meet the required
            standards and specifications within the Toolkit.
          </li>
        </ul>
      </Fragment>
    ),
    image: mountainImage,
    imageAlt: 'Majestic mountain peaks at sunset',
  },
  {
    year: 'August 2024',
    position: 'right',
    company: 'University Project - Web Vulnerabilities Lab',
    content: (
      <Fragment>
        <ul>
          <li>
            Conducted authenticated and unauthenticated scans on DVWA using Skipfish and httrack to
            evaluate differences in exposure based on access level.
          </li>
          <li>
            Identified SQL injection, session management, and other HTTP vulnerabilities; compared
            results to prioritize remediation efforts and strengthen web application security.
          </li>
        </ul>
      </Fragment>
    ),
    image: mountainImage,
    imageAlt: 'Majestic mountain peaks at sunset',
  },
  {
    year: 'July 2024',
    position: 'right',
    company: 'University Project - User Credentials Capture Lab',
    content: (
      <Fragment>
        <ul>
          <li>
            Captured unencrypted credentials using Ettercap to demonstrate real-world risks of
            insecure application-layer protocols.
          </li>
          <li>
            Showcased the need for encrypted channels and MFA to protect against password
            interception and credential theft.
          </li>
        </ul>
      </Fragment>
    ),
    image: mountainImage,
    imageAlt: 'Majestic mountain peaks at sunset',
  },
  {
    year: 'July 2024',
    position: 'right',
    company: 'University Project- Tunneling & VPN Analysis',
    content: (
      <Fragment>
        <ul>
          <li>
            Configured IP-in-IP, GRE, and SSH tunnels between Ubuntu & Kali VMs to simulate secure
            remote communication methods.
          </li>
          <li>
            Analyzed traffic using Wireshark and assessed vulnerabilities in tunneling protocols to
            propose mitigation strategies and improve secure network design.
          </li>
        </ul>
      </Fragment>
    ),
    image: mountainImage,
    imageAlt: 'Majestic mountain peaks at sunset',
  },
  {
    year: 'March 2024 - May 2024 ',
    position: 'left',
    company: 'Personal Project - Memory Analysis Case Study',
    content: (
      <Fragment>
        <ul>
          <li>
            Worked as a <b>Forensic Analyst</b> to analyse memory dump with <b>Volatility</b>;
            extracted app usage timeline, recovered user credentials, system info, and password
            using registry analysis and lsadump.
          </li>
        </ul>
      </Fragment>
    ),
  },
  {
    year: 'March 2024 - May 2024 ',
    position: 'left',
    company: 'Personal Project - Recovering secret information from images',
    content: (
      <Fragment>
        <ul>
          <li>
            Worked as a <b>Forensic Analyst</b> to recover hidden credentials using <b>stegbreak</b>
            , <b>jpseek</b>, <b>HxD</b>, and <b>zsteg</b>; reversed obfuscated data via Python to
            extract secrets from steganographic images.
          </li>
        </ul>
      </Fragment>
    ),
  },
  {
    year: 'March 2024 - May 2024',
    position: 'left',
    company: 'Personal Project - Forensic Analysis Case Study',
    content: (
      <Fragment>
        <ul>
          <li>
            Worked as a <b>Forensic Analyst</b> to conduct a full forensic analysis on a .DD disk
            image using tools like <b>Autopsy</b>, <b>Foremost</b>, <b>tsk_recover</b>, and
            <b>John the Ripper</b>. Verified image integrity through hashing, recovered deleted
            files, cracked a password-protected document, and identified hidden encrypted data.
          </li>
          <li>
            Document the entire process, including evidence collection, analysis steps, and
            findings, to create a comprehensive forensic report.
          </li>
        </ul>
      </Fragment>
    ),
    image: houseImage,
    imageAlt: 'House interior with forensic analysis tools',
  },

  {
    year: 'March 2024 - May 2024 ',
    position: 'left',
    company: 'Personal Project - Investigating Computer Fraud',
    content: (
      <Fragment>
        <ul>
          <li>
            Worked as a <b>Forensic Analyst</b> to investigate computer fraud cases involving
            unauthorized access to systems and data breaches, using digital forensics tools like
            Autopsy, Sleuth Kit, John the Ripper, and Hashcat.
          </li>
        </ul>
      </Fragment>
    ),
    image: waterfallImage,
    imageAlt: 'Cascading waterfall in lush forest',
  },
  {
    year: '2020',
    position: 'right',
    content: (
      <Fragment>
        <p>
          <b>Attracted to Cyber Security</b> after noticing the potential risks and vulnerabilities
          in cyber space and also from witnessing my a member of my family got scammed online. This
          sparked my interest in learning more about cybersecurity and how to protect against such
          threats.
        </p>
      </Fragment>
    ),
  },
]

export default timelineData
