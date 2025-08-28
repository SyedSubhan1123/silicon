export default function PublishedWorksSection() {
  const covers = [
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410047/img1_caou5l.webp", title: "The Silent Dawn", author: "Jane Doe" },
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410344/img2_rtcerg.webp", title: "Winds of Time", author: "Michael Smith" },
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410362/img3_xd7rqx.webp", title: "Echoes of Tomorrow", author: "Ava Johnson" },
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410393/img4_zsx2b1.webp", title: "Shadows Within", author: "Daniel Lee" },
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410910/img5_ruydcs.webp", title: "Boundless Skies", author: "Emily Carter" },
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410918/img6_hajnjh.webp", title: "Fragments of Light", author: "David Kim" },
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410931/img7_lz2xql.webp", title: "Lost Horizons", author: "Sophia Martinez" },
    { src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410941/img8_fk9vke.webp", title: "Dreamcatcher", author: "Ethan Brown" },
  ];

  return (
    <section className="w-full bg-white">
      {/* Wrapper */}
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 pt-12 pb-16">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-[22px] leading-tight md:text-[34px] md:leading-[1.15] font-extrabold tracking-[-0.01em] text-gray-900">
            Some of Our Published Works
          </h2>
          <p className="mx-auto mt-3 md:mt-4 max-w-[860px] text-[13px] md:text-[15px] leading-relaxed text-gray-600">
            At Falcon Book Publishers, we’ve helped countless authors move from idea to published work
            through a craft-first approach and a collaborative editorial process. Here are some of the
            published works we’ve managed across genres such as memoirs, thrillers, romance, and sci-fi.
          </p>
        </header>

        {/* Covers Grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {covers.map((cover, i) => (
            <figure
              key={i}
              className="group bg-white rounded-lg shadow-sm ring-1 ring-gray-200/80 overflow-hidden"
            >
              {/* Book Cover */}
              <div className="relative aspect-[2/3] bg-gray-100">
                <img
                  src={cover.src}
                  srcSet={`${cover.src}?w=200 200w, ${cover.src}?w=400 400w, ${cover.src}?w=800 800w`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  alt={`${cover.title} by ${cover.author}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-10 bg-black"></div>
              </div>

              {/* Caption */}
              <figcaption className="p-2 text-center text-xs text-gray-600">
                <span className="font-medium text-gray-800">{cover.title}</span>
                <br />
                <span className="italic">{cover.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
