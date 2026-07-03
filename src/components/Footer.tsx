import { Mail } from 'lucide-react'
import { profile } from '../data/resume'
import { SocialIcons } from './SocialIcons'
import { FadeIn, Section, SectionHeading } from './ui'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Section id="contact" className="py-20 text-center">
        <FadeIn>
          <SectionHeading eyebrow="Contact" title="Get in touch" />
          <p className="mx-auto -mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
            Open to interesting frontend and full-stack opportunities. The fastest way to reach me is
            email.
          </p>
          <div className="mt-8 flex flex-col items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <SocialIcons links={profile.social} />
          </div>
        </FadeIn>
      </Section>
      <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript & Tailwind CSS
      </div>
    </footer>
  )
}
