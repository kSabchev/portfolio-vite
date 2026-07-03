import { BookOpen, MessageSquare, Users } from 'lucide-react'
import { leadership } from '../data/resume'
import { FadeIn, Section, SectionHeading } from './ui'

const ICONS = {
  mentoring: Users,
  interviews: MessageSquare,
  docs: BookOpen,
} as const

export function Leadership() {
  return (
    <Section id="leadership" className="border-t border-zinc-200 dark:border-zinc-800">
      <FadeIn>
        <SectionHeading eyebrow="Leadership" title="Beyond the code" />
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-3">
        {leadership.map((item, i) => {
          const Icon = ICONS[item.icon]
          return (
            <FadeIn key={item.icon} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <Icon className="text-indigo-600 dark:text-indigo-400" size={22} />
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.text}</p>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </Section>
  )
}
