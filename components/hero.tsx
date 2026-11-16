import { Download, Mail } from 'lucide-react'
import { highlights, profile } from '@/lib/resume-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-pink/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80">
          <span className="size-2 rounded-full bg-pink" aria-hidden="true" />
          Open to opportunities
        </p>
        <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 font-heading text-xl font-medium text-accent md:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 text-pretty">
          Over 10 years of experience delivering technology solutions across healthcare,
          education, and business environments.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Download className="size-5" aria-hidden="true" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail className="size-5" aria-hidden="true" />
            Get in touch
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {highlights.map((item, i) => (
            <div key={item.label} className="flex flex-col gap-1 bg-primary p-5 md:p-6">
              <dt className="order-2 text-sm leading-snug text-white/65">{item.label}</dt>
              <dd
                className={`order-1 font-heading text-4xl font-bold ${i % 2 === 0 ? 'text-accent' : 'text-pink'}`}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
