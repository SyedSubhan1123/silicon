export default function PublishingHeroBanner() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div
        className="relative max-h-[480px] md:h-[480px] lg:h-[400px] w-full overflow-hidden"
        style={{
          backgroundImage: `url('/assets/cta2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        {/* Content container */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 md:px-10 py-10 md:py-0">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 items-center">

            {/* LEFT: IMAGE */}
<<<<<<< HEAD
            <div className="hidden sm:flex items-center justify-center">
=======
            <div className="hidden sm:hidden md:flex lg:flex items-center justify-center">
>>>>>>> ab7da37bbc40f739ed0a2d238b365bbe2a22cfa6
              <div className="relative w-32 sm:w-40 md:w-52 lg:w-78 xl:w-72 aspect-[3/4] rounded-md overflow-hidden">
                <img
                  src="/assets/book1.png"
                  alt="Book Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* RIGHT: HEADLINE + CTA */}
            <div className="flex flex-col justify-center text-center md:text-left text-white">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-extrabold leading-snug">
                Get your book published by us & enjoy

                <span className="text-yellow-400"> all distribution perks</span>{" "}
                without any upfront cost.
              </h1>

              <p className="mt-3 max-w-xl mx-auto md:mx-0 text-sm sm:text-base text-white/80 leading-relaxed">
                Move your manuscript to market—editing, formatting & promoting
                your book. Our publishing services handle all of it for you.
              </p>

              {/* CTA buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                <a
                  href="tel:+1 208 291 4545"
                  className="flex items-center justify-center w-full sm:w-[50%] h-12 gap-2 no-underline bg-emerald-600 text-white px-4 py-2 rounded-full text-base cursor-pointer hover:bg-white hover:text-black transition font-bold animate-pulse"
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
                {/* <a
                  href="#"
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                >
                  Live Chat
                </a> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
