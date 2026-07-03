import { skillGroups } from '../data/resume'
import { FadeIn, Section, SectionHeading, TechBadge } from './ui'

export function Skills() {
  return (
    <Section id="skills" className="border-t border-zinc-200 dark:border-zinc-800">
      <FadeIn>
        <SectionHeading eyebrow="Skills" title="Core technologies" />
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.label} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
