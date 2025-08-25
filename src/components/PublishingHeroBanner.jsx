export default function PublishingHeroBanner() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div
        className="relative min-h-[480px] md:h-[480px] lg:h-[400px] w-full overflow-hidden"
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
            <div className="flex items-center justify-center">
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
