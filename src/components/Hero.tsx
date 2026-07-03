import { ArrowDown, FileDown, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../data/resume'
import { SocialIcons } from './SocialIcons'

export function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pt-16">
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <MapPin size={14} /> {profile.location}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-indigo-600 dark:text-indigo-400 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-2 text-base font-medium text-zinc-500 dark:text-zinc-400">
            {profile.focus.join(' • ')}
          </p>
          <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            8+ years building scalable enterprise systems — aviation, cloud automation, regulatory
            reporting, and infrastructure platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
            >
              <FileDown size={16} /> Download CV
            </a>
            <SocialIcons links={profile.social} />
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src={profile.photo}
          alt={profile.name}
          className="h-36 w-36 rounded-full border-4 border-indigo-600/20 object-cover shadow-lg dark:border-indigo-400/20 md:h-48 md:w-48"
        />
      </div>
    </section>
  )
}
