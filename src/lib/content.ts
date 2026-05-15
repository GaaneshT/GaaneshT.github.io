import { base } from '$app/paths';

export type ExpStatus = 'upcoming' | 'current' | 'past';

export type Experience = {
  company: string;
  role: string;
  duration: string;
  status: ExpStatus;
  sortKey: number;
  description: string[];
  logo: string;
  url?: string;
};

export type Education = {
  institution: string;
  degree: string;
  grade?: string;
  duration: string;
};

export type Certification = {
  name: string;
  short: string;
  logo: string;
  date: string;
};

export type Project = {
  name: string;
  duration: string;
  description: string;
  url?: string;
  tech?: string[];
};

export type Testimonial = {
  name: string;
  position: string;
  text: string;
  imageUrl?: string;
  date?: string;
  relationship?: string;
};

export type Social = {
  label: string;
  icon: string;
  url: string;
};

// ---------------------------------------------------------------------------
// Identity & voice
// ---------------------------------------------------------------------------
export const identity = {
  name: 'Gaanesh Theivasigamani',
  shortName: 'Gaanesh',
  handle: 'gaanesh',
  host: 'infosec',
  title: 'Security Engineer & Researcher',
  subtitle: 'NUS Information Security · Analyst @ GIC',
  // One-line hook for the hero
  punchline: 'Always learning, always building, always exploring.',
  // whoami output — short, factual, in their voice
  about: [
    "Hey there! I'm Gaanesh, a Cyber Security Enthusiast and Engineer at GIC!",
    "Feel free to reach out, I won't byte :)",
  ],
  email: 'gaaneshtheivasigamani@gmail.com',
  location: 'Singapore'
};

export const profileImage = `${base}/Me.jpg`;

export const navLinks = [
  { id: 'about',          label: 'about' },
  { id: 'experience',     label: 'experience' },
  { id: 'writing',        label: 'writing' },
  { id: 'certifications', label: 'certs' },
  { id: 'projects',       label: 'projects' },
  { id: 'education',      label: 'education' },
  { id: 'testimonials',   label: 'voices' }
];

export const socialLinks: Social[] = [
  { label: 'GitHub',   icon: 'fa-brands fa-github',     url: 'https://github.com/GaaneshT' },
  { label: 'LinkedIn', icon: 'fa-brands fa-linkedin',   url: 'https://www.linkedin.com/in/gaanesht/' },
  { label: 'X',        icon: 'fa-brands fa-x-twitter',  url: 'https://x.com/PlantSecurity' },
  { label: 'Blog',     icon: 'fa-solid fa-feather',     url: 'https://blog.gaanesh.com' },
  { label: 'Tools',    icon: 'fa-solid fa-screwdriver-wrench', url: 'https://tools.gaanesh.com' }
];

export const focusAreas = [
  { title: 'Offensive Security',   description: 'Pen testing, vuln research, exploit chains.' },
  { title: 'Digital Forensics',    description: 'IR, evidence acquisition, root-cause analysis.' },
  { title: 'AI for Sec Ops',       description: 'Build agentic systems for cybersecurity operations.' }
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const experience: Experience[] = [
  {
    company: 'GIC',
    role: 'Analyst · GPP Technology Track (Cybersecurity)',
    duration: 'Starts Mar 2026',
    status: 'current',
    sortKey: 202603,
    description: [
      'Returning full-time as an Analyst on the 2026 GPP Technology Track (Cybersecurity).'
    ],
    logo: `${base}/GIC_logo.jpg`,
    url: 'https://www.gic.com.sg'
  },
  {
    company: 'GovTech Singapore',
    role: 'Cybersecurity Intern · Cyber Security Group (CSG)',
    duration: 'Jan – Mar 2026 · 3 months',
    status: 'past',
    sortKey: 202603,
    description: [
      'Project: agentic AI for cybersecurity operations — autonomous triage, investigation, and response loops.'
    ],
    logo: `${base}/govtech_logo.gif`,
    url: 'https://www.tech.gov.sg'
  },
  {
    company: 'GIC',
    role: 'Cybersecurity Intern',
    duration: 'May – Aug 2025 · 4 months',
    status: 'past',
    sortKey: 202508,
    description: [
      'Built an internal RAG chatbot with an agentic architecture — average response time dropped from ~1 hour to ~20 seconds.',
      'Wrote automation that retired manual workflows, cutting SLA from 5 days to ~2 minutes on key cloud security processes.',
      'Embedded security checks into CI/CD via API integrations.',
      'Worked across Wiz, Snyk, and F5 for vulnerability management.',
      'Provisioned cloud infra with AWS + IaC.',
      'Awarded a return offer to the GIC Professionals Programme.'
    ],
    logo: `${base}/GIC_logo.jpg`
  },
  {
    company: 'National University of Singapore',
    role: 'Vulnerability Researcher · NUS VDP',
    duration: 'Jul 2024 – Dec 2025 · 1.5 years',
    status: 'past',
    sortKey: 202509,
    description: [
      'Part of the NUS Vulnerability Disclosure Programme — year-long NSWS contract.',
      'Conducted in-depth pen testing across NUS infrastructure, identifying and reporting security vulnerabilities.',
      'Collaborated with NUS IT to land secure remediations under NDA.'
    ],
    logo: `${base}/NUS_logo.png`
  },
  {
    company: 'National University of Singapore',
    role: 'Undergraduate TA · CS2107 Intro to Information Security',
    duration: 'Aug – Dec 2024 · 4 months',
    status: 'past',
    sortKey: 202412,
    description: [
      'Designed hands-on challenges spanning cryptography, web security, forensics, and reverse engineering.',
      'Ran interactive sessions that improved student engagement and learning outcomes.'
    ],
    logo: `${base}/NUS_logo.png`
  },
  {
    company: 'Home Team Science and Technology Agency (HTX)',
    role: 'Cyber AI Analytics Intern',
    duration: 'May – Aug 2024 · 4 months',
    status: 'past',
    sortKey: 202408,
    description: [
      'Vulnerability discovery across multiple applications.',
      'Configured and deployed an ELK stack for analysis and visualisation.',
      'Used Burp Suite for deep API analysis — surfaced hidden functionality and vulnerabilities.'
    ],
    logo: `${base}/HTX_logo.png`
  },
  {
    company: 'Cyber Security Agency of Singapore (CSA)',
    role: 'Cybersecurity Specialist',
    duration: 'Aug 2021 – Aug 2023 · 2 years',
    status: 'past',
    sortKey: 202308,
    description: [
      'Acquired forensic evidence (system artefacts, logs) to support root-cause analysis during cyber incidents.',
      'Performed digital forensics across files, network, system logs, and memory captures to determine attack vectors.',
      'Liaised with CII providers and victim entities to coordinate incident response and mitigation.'
    ],
    logo: `${base}/CSA_logo.jpg`
  }
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education: Education[] = [
  {
    institution: 'National University of Singapore',
    degree: 'B. Computing in Information Security (Hons. with Distinction)',
    grade: 'Honours · Distinction',
    duration: '2023 – 2025'
  },
  {
    institution: 'Singapore Polytechnic',
    degree: 'Diploma in Aerospace Electronics & Diploma+ in Aviation Management',
    duration: '2017 – 2020'
  }
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  { name: 'CISSP · Certified Information Systems Security Professional', short: 'CISSP', logo: `${base}/cissp_logo.png`, date: 'Dec 2025 – Dec 2028' },
  { name: 'OSAI · OffSec AI Red Teamer',                                 short: 'OSAI',  logo: `${base}/OSAI_logo.svg`,  date: 'Enrolled · Expected 2026' },
  { name: 'GREM · GIAC Reverse Engineering Malware',                     short: 'GREM',  logo: `${base}/GREM.png`,       date: 'Nov 2024 – Nov 2028' },
  { name: 'OSWE · OffSec Web Expert',                                    short: 'OSWE',  logo: `${base}/OSWE_logo.svg`,  date: 'Issued Jul 2024' },
  { name: 'GCFA · GIAC Certified Forensic Analyst',                      short: 'GCFA',  logo: `${base}/GCFA.png`,       date: 'Jun 2024 – Jun 2028' },
  { name: 'CEH · Certified Ethical Hacker',                              short: 'CEH',   logo: `${base}/CEH.png`,        date: 'Apr 2024 – Apr 2027' },
  { name: 'OSCP · OffSec Certified Professional',                        short: 'OSCP',  logo: `${base}/OSCP_logo.svg`,  date: 'Issued Mar 2024' },
  { name: 'CCDL2 · Certified CyberDefender Level 2',                     short: 'CCDL2',  logo: `${base}/CCDL2_logo.png`,  date: 'May 2026 - May 2030' }
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    name: 'tools.gaanesh.com',
    duration: '2025 — ongoing',
    description: 'A suite of self-hosted utilities I kept needing. Runs entirely in your browser — no uploads, no server, nothing leaves the tab.',
    url: 'https://tools.gaanesh.com',
    tech: ['Browser-only', 'No uploads', 'Privacy-first']
  },
  {
    name: 'IR Dojo — CTF for everyone',
    duration: 'Dec 2021 – Mar 2022',
    description: 'A CTF focused on digital forensics and malware analysis. Won the MCI Idea! Award.',
    tech: ['DFIR', 'Education']
  },
  {
    name: 'BuildOn Singapore Hackathon',
    duration: 'Aug 2020',
    description: 'A bed-sorting algorithm built on React + AWS for hospital capacity. Reached the semi-finals.',
    tech: ['React', 'AWS']
  },
  {
    name: 'Live Smart Singapore Hackathon (ACRA)',
    duration: 'Jul – Aug 2020',
    description: 'Automated form-processing pipeline on React + AWS. Top-5 finalist.',
    tech: ['React', 'AWS', 'Automation']
  }
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    name: 'Lee Jia Quan (Benny)',
    position: 'Computer Science · NUS',
    text:
      "Working alongside Gaanesh has been a truly inspiring experience. His enthusiasm and curiosity have consistently fueled my own motivation to tackle new and challenging projects. Gaanesh is always eager to engage in meaningful discussions, particularly about trending advancements in cybertech and their implications on our work.\n\nWhat stands out most about Gaanesh is his unwavering dedication and goal-oriented mindset. When he commits to a project, he ensures that it is not only completed on time but also meets his high personal standards. His openness to exchanging ideas and his focus on achieving results within the set timeline create a productive and enjoyable working environment.",
    imageUrl: `${base}/Benny.jpg`,
    date: '04 Jan 2025',
    relationship: 'Worked together at NUS'
  },
  {
    name: 'Guo GangQuan',
    position: 'Information Security · NUS',
    text:
      "Gaanesh is an exceptional team player who consistently motivates the team to exceed their potential. His strong communication skills and ability to collaborate effectively with diverse individuals make him a valuable asset in any group setting. With a solid academic background and a keen interest in cybersecurity, Gaanesh brings both knowledge and passion to his work. His problem-solving skills are remarkable — he is quick to suggest alternative solutions when plans don't unfold as expected, ensuring progress and success in challenging situations.",
    imageUrl: `${base}/GQ.jpg`,
    date: '04 Jan 2025',
    relationship: 'Worked together at NUS'
  }
];

// ---------------------------------------------------------------------------
// Stats — derived
// ---------------------------------------------------------------------------
export const stats = [
  { label: 'industry certifications', value: certifications.length },
  { label: 'security roles & internships', value: experience.length },
  { label: 'years in the field', value: '3+' }
];
