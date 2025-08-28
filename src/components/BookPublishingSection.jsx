import React from "react";

export default function BookPublishingSection() {
  const bullets = [
    "A premium cover to get your book noticed.",
    "eBook conversion to any format including HTML.",
    "Keep all revenues from your eBooks with our suggested price.",
    "The final step to get your ebook selling is publishing.",
    "Marketplace integration by having accounts on all platforms.",
    "Free setup for those new to the ghostwriting industry.",
  ];

  return (
    <section className="relative w-full bg-[#f9fafb] py-12 md:py-16">
      {/* Card */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
        {/* Right soft wave / gradient background */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[46%]">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "ellipse(70% 110% at 100% 50%)",
              background:
                "radial-gradient(120% 90% at 100% 20%, rgba(255,224,138,0.35) 0%, rgba(255,224,138,0.0) 60%), radial-gradient(100% 80% at 100% 80%, rgba(255,182,193,0.28) 0%, rgba(255,182,193,0.0) 60%)",
              filter: "saturate(1.1)",
            }}
          />

          {/* Vertical dotted accent on the right */}
          <div className="absolute right-6 top-16 flex flex-col items-center gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="block h-1.5 w-1.5 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative px-6 py-10 md:px-12 md:py-12">
          {/* Heading */}
          <h2 className="text-[22px] leading-snug font-semibold text-gray-900 tracking-tight md:text-3xl">
            <span className="block">
              BOOK PUBLISHING Hassle-Free & Affordable
            </span>
            <span className="block">Get Published with Us Now</span>
          </h2>

          {/* Sub copy */}
          <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-gray-600 md:text-[15px]">
            The publishing industry has evolved considerably in the last decade,
            with digital disruption, piracy, changing reading habits, the rise
            of audiobooks, increased competition, production complexities, and
            newer platforms. A one-stop publishing solution can streamline your
            path to a successful publication with services, clear revenue
            splits, and wider distribution.
          </p>

          {/* Image + bullet list side by side */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2 md:items-center">
            {/* IMAGE */}
            <div className="w-full h-60 md:h-96 overflow-hidden rounded-md shadow-sm">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409656/women-image_swh1rr.webp"
                  type="image/webp"
                />
                <img
                  src="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409656/women-image_swh1rr.webp"
                  alt="Author sitting between bookshelves"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>

            {/* Bulleted feature list */}
            <div>
              <ul className="list-disc pl-5 text-gray-700 text-[14px] leading-7 md:text-[15px] md:leading-8">
                {bullets.map((item, idx) => (
                  <li key={idx} className="marker:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                <a
                  href="tel:+12082914545"
                  className="flex items-center justify-center w-full sm:w-[50%] h-12 gap-2 no-underline bg-emerald-500 text-white px-4 py-2 rounded-full text-base cursor-pointer hover:bg-[#ffffff] hover:text-black transition font-bold animate-pulse"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path>
                  </svg>
                  <span>(208) 291 4545</span>
                </a>

                <a
                  href="#"
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 w-full sm:w-[50%]"
                >
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
