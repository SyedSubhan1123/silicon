export default function PublishingPlatforms({
  titleTop = "We Publish Your Book",
  titleBottom = "On All Leading Platforms!",
  logos = [
    { alt: "Amazon Kindle", src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409329/slider1_cqnsau.webp" },
    { alt: "CreateSpace", src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409344/slider2_ozgvpg.webp" },
    { alt: "Apple iBooks", src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409358/slider3_fxsd2x.webp" },
    { alt: "IngramSpark", src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409365/slider4_yysdy6.webp" },
    { alt: "AbeBooks.com", src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409376/slider5_uox25r.webp" },
    { alt: "Amazon Kindle", src: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409384/slider6_hedjwt.webp" },
  ],
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="pb-4 pt-8 text-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {titleTop}
          </h2>
          <p className="mt-1 text-xl font-bold text-gray-800 sm:text-2xl">
            {titleBottom}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center gap-6 pb-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="w-36 h-20 flex items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-400 transition-all duration-200"
            >
              <div className="flex items-center justify-center w-full h-full p-3">
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-semibold text-gray-600">
                    {logo.alt}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
