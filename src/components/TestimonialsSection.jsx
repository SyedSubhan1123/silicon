export default function TestimonialsSection() {
  return (
    <section className="relative isolate w-full bg-gray-50 text-gray-900">
      {/* Subtle grayscale faces at the far left/right (replace URLs) */}
      <div className="pointer-events-none absolute inset-0 flex justify-between opacity-20">
        <div
          className="hidden md:block h-full w-40 bg-center bg-cover grayscale"
          style={{ backgroundImage: "url('/images/testimonials/bg-left.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="hidden md:block h-full w-40 bg-center bg-cover grayscale"
          style={{ backgroundImage: "url('/images/testimonials/bg-right.jpg')" }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        {/* Heading + subtext */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          Testimonials from Satisfied Clients
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-sm md:text-base leading-relaxed text-gray-600">
          Our book publishing portfolio is well‑decorated with best‑sellers. We have hands over the
          copyright after finishing titles to their respected authors across the world while maintaining 100% ownership.
          Here are a few of them.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {/* Primary (green) card */}
          <article className="relative rounded-xl bg-[#44C08D] text-white p-6 shadow-lg min-h-[180px]">
            <h3 className="text-lg font-semibold">Jonah Hunt</h3>
            <p className="mt-2 text-sm leading-relaxed">
              My experience with our team has been superb — from developmental editing to publication
              and book marketing. It’s the best in the ghostwriting industry.
            </p>
            {/* bottom notch for avatar */}
            <div className="absolute left-1/2 -bottom-6 h-12 w-12 -translate-x-1/2 rounded-full bg-white shadow" />
          </article>

          {/* Secondary cards */}
          <article className="relative rounded-xl bg-white p-6 shadow min-h-[180px]">
            <h3 className="text-lg font-semibold text-gray-900">Neil Anderson, Sr</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              They delivered my book in just two months, more than I ever expected with such finesse.
            </p>
            <div className="absolute left-1/2 -bottom-6 h-12 w-12 -translate-x-1/2 rounded-full bg-white shadow" />
          </article>

          <article className="relative rounded-xl bg-white p-6 shadow min-h-[180px]">
            <h3 className="text-lg font-semibold text-gray-900">Kouri James</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              A smooth experience, from shaping my ideas into clear, concise milestones. Couldn’t be any
              happier with the end‑to‑end results.
            </p>
            <div className="absolute left-1/2 -bottom-6 h-12 w-12 -translate-x-1/2 rounded-full bg-white shadow" />
          </article>
        </div>

        {/* Avatars row (replace src with real images) */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center">
            <img
              src="/assets/testimonials1 (1).jpg"
              alt="Avatar — replace with Jonah Hunt image"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/testimonials1 (2).jpg"
              alt="Avatar — replace with Neil Anderson image"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/testimonials1 (3).jpg"
              alt="Avatar — replace with Kouri James image"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="relative border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <dt className="text-3xl font-extrabold">750+</dt>
              <dd className="mt-1 text-xs md:text-sm text-gray-500">Published Books (in Print)</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold">#1</dt>
              <dd className="mt-1 text-xs md:text-sm text-gray-500">Times NYT Bestsellers</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold">45+</dt>
              <dd className="mt-1 text-xs md:text-sm text-gray-500">Bestsellers</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold">BCC</dt>
              <dd className="mt-1 text-xs md:text-sm text-gray-500">Featured Best Ghostwriting Agency</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
