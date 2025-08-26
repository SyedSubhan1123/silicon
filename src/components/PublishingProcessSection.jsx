export default function PublishingProcessSection({
  steps = [
    {
      k: 1,
      label: "Step 1",
      title: "Connect With Us",
      text:
        "The initial step is where we gather your book's details and the outcomes you expect. We'll outline timelines, goals, and everything this model now entails.",
    },
    {
      k: 2,
      label: "Step 2",
      title: "How we communicate",
      text:
        "We brief you on the process in clear, simple terms so we can align with your schedule and project scope. You'll get practical tips and a realistic preview of what's next.",
    },
    {
      k: 3,
      label: "Step 3",
      title: "Draft Reviews",
      text:
        "This stage is where you start to see your ideas refined as we present drafts for your feedback. Iteration is fast and focused so nothing moves forward without your nod.",
    },
  ],
}) {
  return (
    <section className="relative w-full bg-[#f6f7fb]">
      {/* Left glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-300/40 via-rose-200/40 to-amber-200/40 blur-2xl"
      />

      {/* Right concentric rings (decorative) */}
      <div className="pointer-events-none absolute right-8 top-10 h-[280px] w-[280px] select-none opacity-70">
        <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f0c2dc" />
              <stop offset="100%" stopColor="#e8a3cc" />
            </linearGradient>
          </defs>
          {/* outer ring */}
          <circle cx="140" cy="140" r="120" stroke="url(#ring)" strokeWidth="3" fill="none" />
          {/* mid ring */}
          <circle cx="140" cy="140" r="96" stroke="url(#ring)" strokeWidth="3" fill="none" />
          {/* inner ring */}
          <circle cx="140" cy="140" r="72" stroke="url(#ring)" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1120px] px-4 md:px-6 pt-12 pb-20">
        {/* Heading & subhead */}
        <header className="text-center">
          <h2 className="text-[22px] md:text-[34px] font-extrabold tracking-[-0.01em] text-gray-900">
            Our Streamlined Book Publishing Process
          </h2>
          <p className="mx-auto mt-2 md:mt-3 max-w-[860px] text-[12px] md:text-[14.5px] leading-relaxed text-gray-500">
            Meet the team behind B4 Blurb. With years of experience in the design industry, we prepare
            manuscripts for a smooth ride from brief to book-on-your-shelf. Below is how we keep things simple and
            predictable.
          </p>
        </header>

        {/* Cards row */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s) => (
            <article
              key={s.k}
              className="rounded-2xl  cursor-pointer hover:scale-110 transition-all duration-300 bg-white hover:bg-emerald-500 hover:text-white px-5 py-6 md:px-7 md:py-8 ring-1 ring-black/5 group shadow-2xl"
            >
              <span className="inline-flex items-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-500 text-white text-[11px] md:text-[12px] font-semibold px-3 py-1 shadow-xl">
                {s.label}
              </span>
              <h3 className="mt-3 text-[17px] md:text-[20px] font-semibold text-gray-900 group-hover:text-white tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[12.5px] md:text-[14px] leading-relaxed group-hover:text-white text-gray-600">
                {s.text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
