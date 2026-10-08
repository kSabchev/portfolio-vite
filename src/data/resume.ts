import type {
  Profile,
  ImpactHighlight,
  ExperienceEntry,
  Project,
  SkillGroup,
  LeadershipItem,
  EducationEntry,
  Certification,
  Language,
  GamingShot,
} from './types'

export const profile: Profile = {
  name: 'Kaloyan Sabchev',
  title: 'Senior Software Engineer',
  focus: ['React', 'TypeScript', 'Distributed Systems'],
  location: 'Sofia, Bulgaria',
  email: 'kaloyansabchev@gmail.com',
  photo: '/images/Kaloyan.jpg',
  cvUrl: '/cv-kaloyan-sabchev.pdf',
  summary: [
    'Senior Software Engineer with 8+ years of experience building scalable enterprise systems across aviation, cloud automation, regulatory reporting, and infrastructure platforms. Strong focus on React, TypeScript, frontend architecture, and distributed systems, with backend experience in Java, Node.js, Python, and REST APIs.',
    'Experienced in mission-critical systems, cloud automation, microservice integrations, CI/CD workflows, and production deployments. Known for combining frontend specialization with full-system understanding, technical ownership, mentoring, and strong documentation habits.',
  ],
  social: [
    { name: 'GitHub', url: 'https://github.com/kSabchev', icon: 'github' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kaloyan-sabchev-678658154/',
      icon: 'linkedin',
    },
    { name: 'Email', url: 'mailto:kaloyansabchev@gmail.com', icon: 'mail' },
  ],
}

export const keyImpact: ImpactHighlight[] = [
  {
    stat: '100k+',
    text: 'aviation safety messages processed daily by frontend systems I built',
  },
  {
    stat: 'Millions',
    text: 'of virtual machines managed by hybrid-cloud automation services I developed',
  },
  {
    stat: 'SAP + Customs',
    text: 'enterprise reporting interfaces integrated with SAP and customs infrastructure',
  },
  {
    stat: '3 engineers',
    text: 'mentored, plus internal documentation still used by teams years later',
  },
]

export const experience: ExperienceEntry[] = [
  {
    project: 'Aviation Safety Information Platform — EUROCONTROL',
    client: 'Indra Avitech',
    duration: '6 months',
    blurb: 'Mission-critical aviation platform supporting European air navigation operations.',
    bullets: [
      'Designed and implemented React UI modules for a distributed platform processing 100k+ NOTAM safety messages daily.',
      'Improved operator workflows used in high-availability aviation safety environments.',
      'Collaborated with backend and infrastructure teams working on microservice-based systems.',
    ],
    stack: ['React', 'Kafka', 'Microservices'],
  },
  {
    project: 'Hybrid Cloud Infrastructure Automation Platform',
    client: 'VMware / Broadcom',
    duration: '1 year',
    blurb: 'Automation platform supporting large-scale hybrid cloud infrastructure.',
    bullets: [
      'Developed automation services using TypeScript and object-oriented JavaScript.',
      'Built infrastructure automation workflows supporting service provisioning and deployment.',
      'Integrated VMware platforms including NSX-T, vRealize Automation, and Orchestrator.',
    ],
    stack: ['TypeScript', 'VMware SDDC', 'IaC', 'CI/CD'],
  },
  {
    project: 'Enterprise Regulatory Reporting Platform',
    client: 'Philip Morris International',
    duration: '2 years 3 months',
    blurb: 'Enterprise system for customs declarations and regulatory compliance.',
    bullets: [
      'Built React and TypeScript modules for regulatory reporting workflows.',
      'Implemented dashboards, forms, validation flows, and API integrations.',
      'Worked within AWS-based enterprise infrastructure integrated with SAP systems.',
    ],
    stack: ['React', 'TypeScript', 'AWS', 'REST APIs'],
  },
  {
    project: 'Customs Declaration Management System',
    client: 'IBM Netherlands · Dutch Customs Authority',
    duration: '3 years 6 months',
    blurb: 'Enterprise platform managing customs declaration workflows under Dutch trade regulations.',
    bullets: [
      'Joined as a backend developer and later transitioned into frontend development, contributing to the migration from JSP to Angular.',
      'Developed backend services, Angular UI modules, and DB2 integrations.',
      'Built Python installation scripts and deployment automation for environment setup and full system deployments.',
      'Authored documentation and setup guides used by engineering teams during rollout.',
    ],
    stack: ['Java', 'Angular', 'Docker', 'DB2', 'Python', 'WebSphere'],
  },
  {
    project: 'Digital Driver Operations Platform',
    client: 'Rheinbahn AG',
    duration: '2 months',
    blurb: 'Mobile operations platform enabling paperless workflows for public transport drivers.',
    bullets: [
      'Built React components integrated with Sitecore CMS.',
      'Implemented UI features supporting operational communication and driver workflows.',
    ],
    stack: ['React', 'Sitecore'],
  },
]

export const selectedProjects: Project[] = [
  {
    title: 'Dota 2 Draft Analyzer',
    description:
      'A full-stack drafting assistant for Dota 2 that goes beyond hero picking: it analyzes both teams in real time, ranks ban threats, predicts lane outcomes, recommends counter-items, and estimates win probability with a model trained on professional match data.',
    highlights: [
      'React + TypeScript + Redux Toolkit frontend with a live three-column drafting interface',
      'Node.js/Express backend ingesting professional match data from the OpenDota API into SQLite',
      'Logistic-regression win-probability model with cross-validation and temperature calibration — measurably outperforms the hand-crafted heuristic it replaced',
      'Mechanics-based item recommendation engine (counter-items derived from hero reliances and vulnerabilities, not hard-coded pairs)',
      'Backtesting pipeline and 58 backend tests validating the scoring and model layers',
    ],
    image: '/images/dota-draft-analyzer.png',
    liveUrl: 'https://dota-app1.vercel.app/',
    githubUrl: 'https://github.com/kSabchev',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'SQLite', 'OpenDota API', 'Logistic Regression'],
  },
  {
    title: 'Phone Repair CRM',
    description:
      'A self-hosted repair-ticket system for a phone repair shop. Staff can register devices, search and update repair tickets, and print customer and service copies. The interface is in Bulgarian.',
    image: '/images/phone-repair-crm.png',
    liveUrl: 'https://crazyphone-demo.onrender.com/',
    githubUrl: 'https://github.com/kSabchev/crazyPhoneCRM',
    stack: ['Node.js', 'Express', 'SQLite', 'JavaScript'],
  },
]

export const prototypes: Project[] = [
  {
    title: 'E-commerce Platform Prototype',
    description: 'Amazon-inspired React app with Stripe payment integration and checkout flow.',
    image: '/images/amazon-clone-mine.png',
    liveUrl: 'https://clone-kaloyan.web.app/',
    stack: ['React', 'Firebase', 'Stripe'],
  },
  {
    title: 'Streaming Platform Prototype',
    description: 'Netflix-inspired React app with authentication and Stripe payment flow.',
    image: '/images/netflix-clone.jpeg',
    liveUrl: 'https://netflix-clone-decff.web.app/profile',
    stack: ['React', 'Redux', 'Firebase', 'Stripe'],
  },
  {
    title: 'Video Platform Prototype',
    description: 'YouTube-inspired React application focused on media browsing UI.',
    image: '/images/youtube-clone-mine.png',
    liveUrl: 'https://clone-42eb6.web.app',
    stack: ['React'],
  },
  {
    title: 'Booking Platform Prototype',
    description: 'Airbnb-inspired React application focused on listing UI and booking-style flows.',
    image: '/images/airbnb-clone-screenshot.png',
    liveUrl: 'https://react-airbnb-clone-3c87d.web.app/',
    stack: ['React'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'Redux', 'RTK Query', 'Angular', 'RxJS', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'Java', 'Spring / JEE', 'REST APIs', 'Python'],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: ['AWS', 'Docker', 'Terraform', 'VMware NSX-T', 'OpenShift', 'CI/CD'],
  },
  {
    label: 'Data & Messaging',
    skills: ['PostgreSQL', 'MongoDB', 'DB2', 'Kafka'],
  },
  {
    label: 'Tools & Practices',
    skills: ['Git', 'Jenkins', 'Agile/Scrum', 'Code Reviews', 'Deployment Automation'],
  },
  {
    label: 'AI Harnesses',
    skills: ['Claude', 'ChatGPT'],
  },
]

export const leadership: LeadershipItem[] = [
  {
    icon: 'mentoring',
    text: 'Mentored 3 junior developers, supporting onboarding and the technical growth of many colleagues across assigned projects.',
  },
  {
    icon: 'interviews',
    text: 'Participated in technical recruitment interviews.',
  },
  {
    icon: 'docs',
    text: 'Created engineering documentation and process guides used by teams long after delivery.',
  },
]

export const education: EducationEntry[] = [
  {
    school: 'Technical University of Sofia',
    degree: "Bachelor's Degree, Industrial Engineering",
  },
]

export const certifications: Certification[] = [
  { name: 'Oracle Certified Associate — Java SE 8 Programmer' },
]

export const languages: Language[] = [
  { name: 'Bulgarian', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'Basic' },
]

export const gamingIntro =
  'Before I wrote software I played a lot of it — gaming is what pulled me toward programming in the first place. These days it fuels side projects like the Dota 2 Draft Analyzer.'

export const gamingShots: GamingShot[] = [
  { caption: 'Screenshot slot — drop an image at public/images/gaming-1.png' },
  { caption: 'Screenshot slot — drop an image at public/images/gaming-2.png' },
  { caption: 'Screenshot slot — drop an image at public/images/gaming-3.png' },
]
