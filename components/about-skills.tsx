import { Code2, GraduationCap } from 'lucide-react'
import { competencies, profile, techStack } from '@/lib/resume-data'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <SectionHeading id="about-title" eyebrow="About me" title="Professional Summary" />
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{profile.summary}</p>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-orange-soft p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <p className="leading-relaxed">
              <span className="font-semibold">Currently pursuing</span> a Bachelor of Applied
              Technology (Software Development) at Brigham Young University–Idaho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading id="skills-title" eyebrow="What I bring" title="Core Competencies" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-primary p-7 text-primary-foreground">
            <div className="flex items-center gap-3">
              <Code2 className="size-6 text-accent" aria-hidden="true" />
              <h3 className="font-heading text-xl font-semibold">Software Development</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-heading text-xl font-semibold">Professional Skills</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {competencies
                .filter((c) => c !== 'Software Development')
                .map((skill, i) => (
                  <li key={skill} className="flex items-center gap-3 text-sm font-medium">
                    <span
                      className={`size-2 shrink-0 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-pink'}`}
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
