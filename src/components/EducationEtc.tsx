import { Award, GraduationCap, Languages as LanguagesIcon } from 'lucide-react'
import { certifications, education, languages } from '../data/resume'
import { FadeIn, Section } from './ui'

export function EducationEtc() {
  return (
    <Section className="border-t border-zinc-200 py-14 dark:border-zinc-800">
      <div className="grid gap-8 sm:grid-cols-3">
        <FadeIn>
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" size={20} />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-50">
                Education
              </h3>
              {education.map((entry) => (
                <p key={entry.school} className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">{entry.school}</span>
                  <br />
                  {entry.degree}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="flex items-start gap-3">
            <Award className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" size={20} />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-50">
                Certifications
              </h3>
              {certifications.map((cert) => (
                <p key={cert.name} className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {cert.name}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="flex items-start gap-3">
            <LanguagesIcon className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" size={20} />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-50">
                Languages
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{lang.name}</span> — {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
