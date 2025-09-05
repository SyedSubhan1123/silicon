export default function StoryCTABanner({
  art = {
    book1: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411759/book2_e9iwat.webp",
    book2: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411767/book3_cbtjqz.webp",
    tablet: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411776/book4_jqlrc8.webp",
    phone: "https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411785/book5_ioxiep.webp",
  },
}) {
  return (
    <section
      className="relative w-full bg-[#2a2623] overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411034/cta3_jbxlzq.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 py-12">
        <div className="grid grid-cols-12 items-center gap-8">

          {/* LEFT - Book / Devices */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start relative">

            {/* Mobile (stacked images) */}
            <div className="flex flex-col items-center gap-4 md:hidden">
              <img src={art.book1} alt="Book 1" className="w-[160px] h-auto object-contain" />
              <img src={art.book2} alt="Book 2" className="w-[160px] h-auto object-contain" />
              <img src={art.tablet} alt="Tablet" className="w-[200px] h-auto object-contain" />
              <img src={art.phone} alt="Phone" className="w-[120px] h-auto object-contain" />
            </div>

            {/* Desktop (overlapping absolute images) */}
            <div className="hidden md:block relative h-[280px] w-full">
              <img
                src={art.book1}
                alt="Book 1"
                className="absolute left-0 top-0 w-[160px] h-[240px] object-contain z-10"
              />
              <img
                src={art.book2}
                alt="Book 2"
                className="absolute left-[120px] top-1 w-[160px] h-[240px] object-contain z-20"
              />
              <img
                src={art.tablet}
                alt="Tablet"
                className="absolute left-[250px] top-[-10px] w-[190px] h-[260px] object-contain z-30"
              />
              <img
                src={art.phone}
                alt="Phone"
                className="absolute left-[430px] top-[15px] w-[100px] h-[200px] object-contain z-40"
              />
            </div>
          </div>

          {/* RIGHT - Text + CTA */}
          <div className="col-span-12 md:col-span-6 text-center md:text-left">
            <h3 className="text-white text-[22px] md:text-[24px] font-semibold leading-snug">
              Got a Story in Mind?
            </h3>
            <h2 className="mt-2 text-[40px] md:text-[48px] font-extrabold leading-tight text-yellow-400">
              LET US HELP
            </h2>
            <p className="mt-3 text-white text-[14px] md:text-[18px] max-w-[520px] font-medium mx-auto md:mx-0">
              Consult our experts, and we’ll transform your thoughts into words.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              {/* Phone Button */}
              <a
                href="tel:+13239891095"
                className="flex items-center justify-center w-full sm:w-[50%] h-12 gap-2 no-underline bg-emerald-500 text-black px-4 py-2 rounded-full text-base cursor-pointer hover:bg-white hover:text-black transition font-bold animate-pulse"
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
                <span>(323) 989 1095</span>
              </a>

              {/* Live Chat Placeholder */}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (window.Tawk_API) {
                    window.Tawk_API.toggle(); // opens/closes the widget
                  } else {
                    console.error("Tawk API not loaded yet!");
                  }
                }}
                href="#"
                className="hidden sm:inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold bg-yellow-500 text-gray-900 border border-gray-200 shadow-md hover:bg-gray-100 active:translate-y-[1px]"
              >
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
