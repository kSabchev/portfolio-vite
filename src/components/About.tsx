import { keyImpact, profile } from '../data/resume'
import { FadeIn, Section, SectionHeading } from './ui'

export function About() {
  return (
    <Section id="about">
      <FadeIn>
        <SectionHeading eyebrow="About" title="Frontend depth, full-system understanding" />
      </FadeIn>
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <FadeIn className="space-y-4">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed text-zinc-600 dark:text-zinc-300">
              {paragraph}
            </p>
          ))}
        </FadeIn>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {keyImpact.map((item, i) => (
            <FadeIn key={item.stat} delay={i * 0.08}>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{item.stat}</p>
                <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  )
}
