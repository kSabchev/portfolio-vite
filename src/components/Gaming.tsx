import { Gamepad2 } from 'lucide-react'
import { gamingIntro, gamingShots } from '../data/resume'
import { FadeIn, Section, SectionHeading } from './ui'

export function Gaming() {
  return (
    <Section id="gaming" className="border-t border-zinc-200 dark:border-zinc-800">
      <FadeIn>
        <SectionHeading eyebrow="Off duty" title="The gaming corner" />
        <p className="-mt-4 mb-10 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-300">{gamingIntro}</p>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-3">
        {gamingShots.map((shot, i) => (
          <FadeIn key={shot.caption} delay={i * 0.06}>
            {shot.image ? (
              <img
                src={shot.image}
                alt={shot.caption}
                className="h-44 w-full rounded-xl border border-zinc-200 object-cover dark:border-zinc-800"
                loading="lazy"
              />
            ) : (
              <div className="flex h-44 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
                <Gamepad2 className="text-zinc-400 dark:text-zinc-500" size={28} />
                <p className="text-xs text-zinc-400 dark:text-zinc-500">{shot.caption}</p>
              </div>
            )}
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
