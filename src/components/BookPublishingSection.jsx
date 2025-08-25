import React from "react";

// Replace the placeholder <div> with an <img /> tag when you have the final asset.
// Example:
//   <img src={yourImage} alt="Author sitting between bookshelves" className="w-full h-full object-cover" />

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
              <span key={i} className="block h-1.5 w-1.5 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative px-6 py-10 md:px-12 md:py-12">
          {/* Heading */}
          <h2 className="text-[22px] leading-snug font-semibold text-gray-900 tracking-tight md:text-3xl">
            <span className="block">BOOK PUBLISHING Hassle-Free & Affordable</span>
            <span className="block">Get Published with Us Now</span>
          </h2>

          {/* Sub copy */}
          <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-gray-600 md:text-[15px]">
            The publishing industry has evolved considerably in the last decade, with digital disruption, piracy, changing
            reading habits, the rise of audiobooks, increased competition, production complexities, and newer platforms. A
            one-stop publishing solution can streamline your path to a successful publication with services, clear revenue
            splits, and wider distribution.
          </p>

          {/* Image + bullet list side by side */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2 md:items-center">
            {/* IMAGE PLACEHOLDER — replace with <img/> later */}
            <div className="w-full h-60 md:h-96 overflow-hidden rounded-md border border-gray-200 bg-gray-50 shadow-sm flex items-center justify-center text-gray-400 text-xs">
              <img src="/assets/women-image.jpg" alt="women-image" className="w-full h-full object-contain" />
            </div>

            {/* Bulleted feature list */}
            <ul className="list-disc pl-5 text-gray-700 text-[14px] leading-7 md:text-[15px] md:leading-8">
              {bullets.map((item, idx) => (
                <li key={idx} className="marker:text-gray-400">
                  {item}
                </li>
              ))}
              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                <a
                  href="tel:+1 208 291 4545"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                 📞 208 291 4545
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                >
                  Live Chat
                </a>
              </div>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
}
