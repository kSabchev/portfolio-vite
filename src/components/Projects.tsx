import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { selectedProjects, prototypes } from '../data/resume'
import { FadeIn, Section, SectionHeading, TechBadge } from './ui'

export function Projects() {
  return (
    <Section id="projects" className="border-t border-zinc-200 dark:border-zinc-800">
      <FadeIn>
        <SectionHeading eyebrow="Projects" title="Selected works" />
      </FadeIn>

      <div className="space-y-8">
        {selectedProjects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.06}>
            <article className="overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-sm dark:border-indigo-500/30 dark:bg-zinc-900">
              {project.image && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="max-h-96 w-full border-b border-zinc-200 object-cover object-top dark:border-zinc-800"
                    loading="lazy"
                  />
                </a>
              )}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                    {i === 0 ? 'Featured' : 'Selected'}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>
                {project.highlights && (
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {project.highlights.map((h) => (
                      <li key={h.slice(0, 32)}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      <GitHubIcon size={15} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      {/* Prototype grid */}
      <FadeIn>
        <h3 className="mb-6 mt-14 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          More projects
        </h3>
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-2">
        {prototypes.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
              {project.image && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-44 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </a>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h4>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                      >
                        <ExternalLink size={14} /> Live demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-300"
                      >
                        <GitHubIcon size={14} /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
