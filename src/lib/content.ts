// Single source of truth for every section rendered on the page.

import { base } from '$app/paths';

export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  current?: boolean;
  featured?: boolean;
  note?: string;
};

export type CaseStudy = {
  title: string;
  where: string;
  when: string;
  url?: string;
  context: string;
  did: string[];
  metrics: { value: string; label: string }[];
  note?: string;
};

export type Project = {
  name: string;
  period: string;
  url?: string;
  description: string;
  tags: string[];
};

export type Education = {
  school: string;
  degree: string;
  note?: string;
  period: string;
};

export type Certification = {
  abbr: string;
  name: string;
  period: string;
  url: string;
};

export type Link = { label: string; url: string; external?: boolean };

// ---------------------------------------------------------------------------
// Identity
// ---------------------------------------------------------------------------
export const identity = {
  name: 'Gaanesh Theivasigamani',
  role: 'Security Engineer',
  location: 'Singapore',
  email: 'gaanesh@u.nus.edu',
  portrait: `${base}/Me.jpg`,
  // Displayed at 104px. The full portrait is 282 KB and is kept only for the
  // Open Graph card, which needs a large image.
  avatar: `${base}/Me-avatar.jpg`,
  // Set to a path under static/ once a CV exists; the button renders from this.
  cv: '',
  hello:
    "Hi, I'm Gaanesh. I'm a security engineer in Singapore who breaks things on purpose, then figures out what happened.",
  sub: {
    lead: 'Offensive security and digital forensics, plus the automation nobody else wants to write. Currently an ',
    strong: 'Analyst at GIC',
    tail: " on the cybersecurity technology track. Before that, agentic AI for security operations at GovTech's Cyber Security Group."
  }
};

export const links = {
  github: 'https://github.com/GaaneshT',
  linkedin: 'https://www.linkedin.com/in/gaanesht/',
  twitter: 'https://x.com/PlantSecurity',
  blog: 'https://blog.gaanesh.com',
  tools: 'https://tools.gaanesh.com'
};

// Top bar. Anchors stay on this page; the rest point at the subdomains.
export const navLinks: Link[] = [
  { label: 'Work', url: '#selected' },
  { label: 'Projects', url: '#projects' },
  { label: 'Tools', url: links.tools, external: true },
  { label: 'Writing', url: links.blog, external: true },
  { label: 'Contact', url: '#contact' }
];

// Under the intro paragraph.
export const leadLinks: Link[] = [
  { label: 'GitHub', url: links.github },
  { label: 'LinkedIn', url: links.linkedin },
  { label: 'Blog', url: links.blog },
  { label: 'Tools', url: links.tools }
];

// Footer.
export const footerLinks: Link[] = [
  { label: 'GitHub', url: links.github },
  { label: 'LinkedIn', url: links.linkedin },
  { label: 'Twitter', url: links.twitter },
  { label: 'Blog', url: links.blog },
  { label: 'Tools', url: links.tools }
];

export const institutions = ['NUS', 'GIC', 'GovTech', 'CSA', 'HTX'];

// ---------------------------------------------------------------------------
// Selected work
// ---------------------------------------------------------------------------
export const cases: CaseStudy[] = [
  {
    title: 'Automating the write-up nobody wants to do',
    where: 'GovTech · Cyber Security Group',
    when: '2026',
    context:
      'Every DFIR investigation ends in a written report, and producing it is slow manual work that happens when an analyst is already tired. The open question was how much of an investigation an autonomous agent could reasonably carry.',
    did: [
      'Built a self-reporting structure that drafts investigation write-ups from findings instead of leaving it to a human at the end.',
      'Researched autonomous agents for DFIR investigations: what can be delegated, where the reasoning breaks down, and which steps still need a person.'
    ],
    metrics: [],
    note: 'Internship work inside GovTech CSG. Implementation details stay internal.'
  },
  {
    title: 'Answering security questions in seconds, not hours',
    where: 'GIC',
    when: '2025',
    context:
      'Routine security questions meant a person digging through scattered internal documentation, and cloud security requests sat in a five-day queue.',
    did: [
      'Built an internal RAG chatbot on an agentic architecture, so the system retrieves and reasons rather than keyword-matching.',
      'Automated the manual cloud security workflows behind the queue.',
      'Wired security checks into CI/CD through API integrations so problems surface at commit time.'
    ],
    metrics: [
      { value: '~1 hr to ~20 s', label: 'average response time' },
      { value: '5 days to ~2 min', label: 'cloud security SLA' }
    ]
  },
  {
    title: 'Security tools that never send your data anywhere',
    where: 'tools.gaanesh.com',
    when: '2025 to now',
    url: links.tools,
    context:
      'Most online utilities for security work ask you to upload the very thing you are trying to keep private. I kept needing these tools and kept not trusting where the data went.',
    did: [
      'Built a suite of utilities that run entirely in the browser: no uploads, no server, nothing leaves the tab.',
      'Self-hosted and open to anyone, so the privacy claim can be checked rather than taken on trust.'
    ],
    metrics: []
  }
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const experience: Experience[] = [
  {
    role: 'Analyst',
    org: 'GIC',
    period: 'Mar 2026 – present',
    current: true,
    featured: true,
    note: 'Returned full-time after interning here in 2025',
    bullets: ['Cybersecurity analyst on the 2026 GPP Technology Track.']
  },
  {
    role: 'Cybersecurity Intern',
    org: 'GovTech Singapore',
    period: 'Jan – Mar 2026 · 3 months',
    featured: true,
    bullets: [
      'Agentic AI for cybersecurity operations: built a self-reporting structure for investigation write-ups, and researched autonomous agents for DFIR.'
    ]
  },
  {
    role: 'Vulnerability Researcher',
    org: 'National University of Singapore',
    period: 'Jul 2024 – Dec 2025 · 1.5 years',
    featured: true,
    bullets: [
      'Part of the NUS Vulnerability Disclosure Programme, a year-long NSWS contract.',
      'Tested university systems and reported through the disclosure process.'
    ]
  },
  {
    role: 'Cybersecurity Intern',
    org: 'GIC',
    period: 'May – Aug 2025 · 4 months',
    featured: true,
    bullets: [
      'Built an internal RAG chatbot with an agentic architecture. Average response time dropped from ~1 hour to ~20 seconds.',
      'Wrote automation that retired manual workflows, cutting SLA from 5 days to ~2 minutes on key cloud security processes.',
      'Embedded security checks into CI/CD via API integrations.'
    ]
  },
  {
    role: 'Undergraduate TA · CS2107 Intro to Information Security',
    org: 'National University of Singapore',
    period: 'Aug – Dec 2024 · 4 months',
    bullets: [
      'Designed hands-on challenges spanning cryptography, web security, forensics, and reverse engineering.',
      'Ran interactive sessions that improved student engagement and learning outcomes.'
    ]
  },
  {
    role: 'Cyber AI Analytics Intern',
    org: 'Home Team Science and Technology Agency (HTX)',
    period: 'May – Aug 2024 · 4 months',
    bullets: [
      'Vulnerability discovery across multiple applications.',
      'Configured and deployed an ELK stack for analysis and visualisation.',
      'Used Burp Suite for deep API analysis, surfacing hidden functionality and vulnerabilities.'
    ]
  },
  {
    role: 'Cybersecurity Specialist',
    org: 'Cyber Security Agency of Singapore (CSA)',
    period: 'Aug 2021 – Aug 2023 · 2 years',
    featured: true,
    bullets: [
      'Acquired forensic evidence (system artefacts, logs) to support root-cause analysis during cyber incidents.',
      'Performed digital forensics across files, network, system logs, and memory captures to determine attack vectors.',
      'Liaised with CII providers and victim entities to coordinate incident response and mitigation.'
    ]
  }
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    name: 'tools.gaanesh.com',
    period: '2025 to now',
    url: links.tools,
    description:
      'A suite of self-hosted utilities I kept needing. Runs entirely in your browser. No uploads, no server, nothing leaves the tab.',
    tags: ['Browser-only', 'No uploads', 'Privacy-first']
  },
  {
    name: 'IR Dojo, a CTF for everyone',
    period: 'Dec 2021 – Mar 2022',
    description: 'A CTF focused on digital forensics and malware analysis. Won the MCI Idea! Award.',
    tags: ['DFIR', 'Education']
  },
  {
    name: 'BuildOn Singapore Hackathon',
    period: 'Aug 2020',
    description: 'A bed-sorting algorithm built on React + AWS for hospital capacity. Reached the semi-finals.',
    tags: ['React', 'AWS']
  },
  {
    name: 'Live Smart Singapore Hackathon (ACRA)',
    period: 'Jul – Aug 2020',
    description: 'Automated form-processing pipeline on React + AWS. Top-5 finalist.',
    tags: ['React', 'AWS', 'Automation']
  }
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education: Education[] = [
  {
    school: 'National University of Singapore',
    degree: 'B. Computing in Information Security',
    note: 'Honours with Distinction',
    period: '2023 – 2025'
  },
  {
    school: 'Singapore Polytechnic',
    degree: 'Diploma in Aerospace Electronics, Diploma+ in Aviation Management',
    period: '2017 – 2020'
  }
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
const CERT_URL = 'https://www.linkedin.com/in/gaanesht/details/certifications/';

export const certifications: Certification[] = [
  { abbr: 'CISSP', name: 'Certified Information Systems Security Professional', period: 'Dec 2025 – Dec 2028', url: CERT_URL },
  { abbr: 'OSCP', name: 'OffSec Certified Professional', period: 'Issued Mar 2024', url: CERT_URL },
  { abbr: 'OSWE', name: 'OffSec Web Expert', period: 'Issued Jul 2024', url: CERT_URL },
  { abbr: 'GREM', name: 'GIAC Reverse Engineering Malware', period: 'Nov 2024 – Nov 2028', url: CERT_URL },
  { abbr: 'GCFA', name: 'GIAC Certified Forensic Analyst', period: 'Jun 2024 – Jun 2028', url: CERT_URL },
  { abbr: 'CEH', name: 'Certified Ethical Hacker', period: 'Apr 2024 – Apr 2027', url: CERT_URL },
  { abbr: 'CCDL2', name: 'Certified CyberDefender Level 2', period: 'May 2026 – May 2030', url: CERT_URL },
  { abbr: 'OSAI', name: 'OffSec AI Red Teamer', period: 'Issued 2026', url: CERT_URL }
];

export const earnedCerts = certifications.filter((c) => !/^enrolled/i.test(c.period));
export const pendingCerts = certifications.filter((c) => /^enrolled/i.test(c.period));

// ---------------------------------------------------------------------------
// Section copy
// ---------------------------------------------------------------------------
export const copy = {
  // The "What I do" paragraph carries inline <b> emphasis, so its markup lives
  // in Skills.svelte.
  contactLine:
    'Open to security work, interesting problems, or a conversation about breaking things. I usually reply within a day.',
  footer: `© ${new Date().getFullYear()} ${identity.name} · ${identity.location}`
};
