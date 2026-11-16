import type { Metadata } from 'next'
import { competencies, education, experience, institution, profile, techStack } from '@/lib/resume-data'

export const metadata: Metadata = {
  title: 'Resume | Benard Oneka',
  robots: { index: false },
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-[800px] bg-white px-10 py-10 text-[13px] leading-relaxed text-foreground">
      <header className="border-b-4 border-accent pb-4">
        <h1 className="font-heading text-3xl font-bold">{profile.name}</h1>
        <p className="font-medium text-pink">{profile.title}</p>
        <p className="mt-1 text-muted-foreground">
          {profile.email} | Phone: {profile.phone} | LinkedIn: {profile.linkedin}
        </p>
      </header>

      <section className="mt-5">
        <h2 className="font-heading text-base font-bold uppercase tracking-wider">Professional Summary</h2>
        <p className="mt-1">{profile.summary}</p>
      </section>

      <section className="mt-5">
        <h2 className="font-heading text-base font-bold uppercase tracking-wider">Core Competencies</h2>
        <p className="mt-1">
          <strong>Software Development</strong> ({techStack.join(', ')}) ·{' '}
          {competencies.filter((c) => c !== 'Software Development').join(' · ')}
        </p>
      </section>

      <section className="mt-5">
        <h2 className="font-heading text-base font-bold uppercase tracking-wider">Professional Experience</h2>
        {experience.map((job) => (
          <article key={job.role + job.period} className="mt-3 break-inside-avoid">
            <h3 className="font-semibold">
              {job.role} | {job.organization} | {job.period}
            </h3>
            <ul className="mt-1 list-disc pl-5">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-5 break-inside-avoid">
        <h2 className="font-heading text-base font-bold uppercase tracking-wider">Education</h2>
        <ol className="mt-1 list-decimal pl-5">
          {education.map((e) => (
            <li key={e.credential}>
              {e.credential}, {institution}
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
