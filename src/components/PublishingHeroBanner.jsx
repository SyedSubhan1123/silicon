export default function PublishingHeroBanner() {
  return (
    <section className="relative w-full">
      {/* Background image with overlay */}
      <div
        className="relative w-full min-h-[450px] md:h-[480px] lg:h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409662/cta2_gfik8p.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Publishing services background"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-10 py-12 md:py-0">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT: Book Image */}
            <div className="flex justify-center md:justify-start">
              <figure className="relative w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756410182/book1_1_gkqxfd.webp"
                  alt="Sample book cover preview"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* RIGHT: Text + CTA */}
            <div className="flex flex-col text-center md:text-left text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-snug">
                Get your book published by us & enjoy
                <span className="text-yellow-400"> all distribution perks</span>{" "}
                without any upfront cost.
              </h1>

              <p className="mt-3 max-w-xl mx-auto md:mx-0 text-sm sm:text-base text-white/80 leading-relaxed">
                Move your manuscript to market—editing, formatting & promoting
                your book. Our publishing services handle all of it for you.
              </p>

              {/* CTA Button */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                <a
                  href="tel:+1323 989 1095"
                  className="flex items-center justify-center w-full sm:w-auto px-6 h-12 gap-2 rounded-full bg-emerald-500 text-black font-bold text-base hover:bg-white hover:text-black transition animate-pulse"
                >
                  {/* Phone Icon */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path>
                  </svg>
                  <span>(323) 989 1095</span>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.Tawk_API) {
                      window.Tawk_API.toggle(); // opens/closes the widget
                    } else {
                      console.error("Tawk API not loaded yet!");
                    }
                  }}
                  href="tel:+1 323 989 1095"
                  className="flex items-center justify-center w-full sm:w-auto px-6 h-12 gap-2 rounded-full bg-yellow-500 text-blac font-bold text-base"
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
