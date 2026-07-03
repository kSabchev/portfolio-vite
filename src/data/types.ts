export type SocialIcon = 'github' | 'linkedin' | 'mail'

export interface SocialLink {
  name: string
  url: string
  icon: SocialIcon
}

export interface Profile {
  name: string
  title: string
  focus: string[]
  location: string
  email: string
  photo: string
  cvUrl: string
  summary: string[]
  social: SocialLink[]
}

export interface ImpactHighlight {
  stat: string
  text: string
}

export interface ExperienceEntry {
  project: string
  client: string
  duration: string
  blurb: string
  bullets: string[]
  stack: string[]
}

export interface Project {
  title: string
  description: string
  highlights?: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  stack: string[]
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface LeadershipItem {
  icon: 'mentoring' | 'interviews' | 'docs'
  text: string
}

export interface EducationEntry {
  school: string
  degree: string
}

export interface Certification {
  name: string
}

export interface Language {
  name: string
  level: string
}

export interface GamingShot {
  image?: string
  caption: string
}
