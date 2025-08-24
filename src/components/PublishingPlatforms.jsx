export default function PublishingPlatforms({
  titleTop = "We Book Publishing Company",
  titleBottom = "On All Leading Platforms!",

  logos = [
    { alt: "Amazon Kindle", src: "/assets/slider1.jpg" },
    { alt: "CreateSpace", src: "/assets/slider2.jpg" },
    { alt: "Apple iBooks", src: "/assets/slider3.jpg" },
    { alt: "IngramSpark", src: "/assets/slider4.jpg" },
    { alt: "AbeBooks.com", src: "/assets/slider5.jpg" },
    { alt: "Amazon Kindle", src: "/assets/slider6.jpg" },
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

        {/* Parent div for all logos */}
        <div className="flex flex-wrap justify-center gap-6 pb-10">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="w-40 h-24 flex items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm"
            >
              {/* Child div for the picture */}
              <div className="flex items-center justify-center w-full h-full p-3">
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt || "logo"}
                    className="max-h-10 w-auto object-contain opacity-90 filter  grayscale-0 transition"
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
