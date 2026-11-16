import { experience } from '@/lib/resume-data'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading id="experience-title" eyebrow="Career" title="Professional Experience" />
      <ol className="relative flex flex-col gap-8 border-l-2 border-border pl-6 md:pl-10">
        {experience.map((job, i) => (
          <li key={`${job.role}-${job.period}`} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[33px] top-2 size-4 rounded-full border-4 border-background md:-left-[49px] ${i === 0 ? 'bg-accent' : 'bg-primary'}`}
            />
            <article className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-balance">{job.role}</h3>
                  <p className="mt-1 font-medium text-pink">{job.organization}</p>
                </div>
                <p className="w-fit shrink-0 rounded-full bg-orange-soft px-3 py-1 text-sm font-semibold text-[#b4480b]">
                  {job.period}
                </p>
              </div>
              <ul className="mt-5 flex flex-col gap-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
