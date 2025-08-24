


export default function PublishedWorksSection() {
  const covers = [
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
    "/assets/img4.jpg",
    "/assets/img5.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img8.jpg",
  ];


  return (
    <section className="w-full bg-white">
      {/* Wrapper width closely matches the screenshot's readable measure */}
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 pt-12 pb-16">
        {/* Heading block */}
        <header className="text-center">
          <h2 className="text-[22px] leading-tight md:text-[34px] md:leading-[1.15] font-extrabold tracking-[-0.01em] text-gray-900">
            Some of Our Published Works
          </h2>
          <p className="mx-auto mt-3 md:mt-4 max-w-[860px] text-[13px] md:text-[15px] leading-relaxed text-gray-600">
            At Falcon Book Publishers, we’ve helped countless authors move from idea to published work
            through a craft-first approach and a collaborative editorial process. Here are some of the
            public works we’ve managed across genres such as memoirs, thrillers, romance, and sci‑fi. Swap
            any of the placeholder book covers with your own to mirror the branding pieces you see in the
            shot.
          </p>
        </header>

        {/* Covers grid — exactly 8 items in a 4×2 layout on md+ */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {covers.map((src, i) => (
            <figure
              key={i}
              className="group bg-white rounded-lg shadow-sm ring-1 ring-gray-200/80 overflow-hidden">
              {/* Aspect ratio approximates a book cover (3:4) */}
              <div className="relative aspect-[2/3] bg-gray-100">
                {/* Replace `src` with your real image path */}
                <img
                  src={src}
                  alt={`Published book cover ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Soft hover lift to match modern card feel from the reference */}
                <div className="pointer-events-none absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-10 bg-black"></div>


              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
