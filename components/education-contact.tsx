import { Award, Download, GraduationCap, Mail, Phone, UserRound as Linkedin } from 'lucide-react'
import { education, institution, profile } from '@/lib/resume-data'
import { SectionHeading } from '@/components/section-heading'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading id="education-title" eyebrow="Learning" title="Education" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => {
            const isDegree = item.type === 'Degree'
            const Icon = isDegree ? GraduationCap : Award
            return (
              <li key={item.credential} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <span
                  className={`flex size-11 items-center justify-center rounded-xl ${isDegree ? 'bg-accent text-accent-foreground' : 'bg-pink-soft text-pink'}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold leading-snug">{item.credential}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{institution}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const contacts = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinHref },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-pink">Contact</p>
          <h2 id="contact-title" className="mt-2 font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {"Let's work together."}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            Recruiters and employers can download my full resume or reach out directly.
          </p>
          <a
            href={profile.resumePath}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Download className="size-5" aria-hidden="true" />
            Download Resume (PDF)
          </a>
        </div>
        <ul className="flex flex-col gap-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(label === 'LinkedIn' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-accent hover:bg-white/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-white/60">{label}</span>
                  <span className="block break-words font-medium">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-white/55">
          {`© ${new Date().getFullYear()} ${profile.name}. ${profile.title}.`}
        </p>
      </footer>
    </section>
  )
}
