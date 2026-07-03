import { experience } from '../data/resume'
import { FadeIn, Section, SectionHeading, TechBadge } from './ui'

export function Experience() {
  return (
    <Section id="experience" className="border-t border-zinc-200 dark:border-zinc-800">
      <FadeIn>
        <SectionHeading eyebrow="Experience" title="Enterprise client projects" />
        <p className="-mt-6 mb-10 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Senior Software Engineer · 2018 — present
        </p>
      </FadeIn>

      <ol className="relative space-y-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {experience.map((entry, i) => (
          <li key={entry.project} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-4 ring-white dark:bg-indigo-400 dark:ring-zinc-950" />
            <FadeIn delay={i * 0.05}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{entry.project}</h3>
                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                  {entry.duration}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">{entry.client}</p>
              <p className="mt-2 text-sm italic text-zinc-500 dark:text-zinc-400">{entry.blurb}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {entry.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {entry.stack.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  )
}
