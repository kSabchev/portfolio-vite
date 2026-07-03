import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function SectionHeading({ id, eyebrow, title }: { id?: string; eyebrow: string; title: string }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
      {label}
    </span>
  )
}

export function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ children, id, className = '' }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-20 scroll-mt-16 ${className}`}>
      {children}
    </section>
  )
}
