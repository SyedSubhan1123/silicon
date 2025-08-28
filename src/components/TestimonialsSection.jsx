export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jhone Fems, Sr",
      text: "They delivered my book in just two months, more than I ever expected with such finesse.",
      img: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411796/testimonials1_1_zzhkbv.webp",
    },
    {
      name: "Jhone Brave, Sr",
      text: "Working with them was seamless. They understood my vision and made it real.",
      img: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411808/testimonials1_2_vfchh9.webp",
    },
    {
      name: "Kouri James",
      text: "A smooth experience, from shaping my ideas into clear, concise milestones. Couldn’t be any happier with the end-to-end results.",
      img: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411819/testimonials1_3_ezxmds.webp",
    },
  ];

  const stats = [
    { value: "750+", label: "Published Books (in Print)" },
    { value: "#1", label: "Times NYT Bestsellers" },
    { value: "45+", label: "Bestsellers" },
    { value: "BCC", label: "Featured Best Ghostwriting Agency" },
  ];

  return (
    <section className="relative isolate w-full bg-gray-50 text-gray-900">
      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          Testimonials from Satisfied Clients
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-sm md:text-base leading-relaxed text-gray-600">
          Our book publishing portfolio is well-decorated with best-sellers. We have hands over the
          copyright after finishing titles to their respected authors across the world while maintaining 100% ownership.
          Here are a few of them.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="relative cursor-pointer rounded-xl bg-white text-black p-6 shadow-md min-h-[200px]
                        hover:scale-105 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 group-hover:text-gray-100">
                {t.text}
              </p>

              {/* Avatar */}
              <div className="absolute left-1/2 -bottom-6 h-14 w-14 -translate-x-1/2 rounded-full bg-white shadow-md overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-xl bg-[#44C08D] opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
            </article>
          ))}
        </div>
      </div>

      {/* Stats band */}
      <div className="relative border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i}>
                <dt className="text-3xl font-extrabold text-[#072C49]">{s.value}</dt>
                <dd className="mt-1 text-xs md:text-sm text-gray-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
