export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-pink">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
    </div>
  )
}
