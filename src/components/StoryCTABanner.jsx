export default function StoryCTABanner({
  art = {
    book1: "/assets/book2.png",
    book2: "/assets/book3.png",
    tablet: "/assets/book4.png",
    phone: "/assets/book5.png",
  },
}) {
  return (
    <section
      className="relative w-full bg-[#2a2623] overflow-hidden"
      style={{ backgroundImage: `url('/assets/cta3.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* container */}
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 py-10">
        <div className="grid grid-cols-12 items-center gap-6">

          {/* LEFT - books/devices */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start relative">

            {/* Mobile layout (stacked & centered) */}


            {/* Desktop layout (absolute overlap) */}
            <div className="hidden md:block relative h-[260px] w-full">
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
                className="absolute left-[240px] top-[-12px] w-[180px] h-[260px] object-contain z-30"
              />
              <img
                src={art.phone}
                alt="Phone"
                className="absolute left-[400px] top-[10px] w-[100px] h-[200px] object-contain z-40"
              />
            </div>
          </div>

          {/* RIGHT - text & CTAs */}
          <div className="col-span-12 md:col-span-6 text-center md:text-left">
            <h3 className="text-white text-[22px] md:text-[24px] font-semibold leading-snug">
              Got a Story in Mind?
            </h3>
            <h2 className="mt-2 text-[42px] md:text-[48px] font-extrabold leading-tight text-yellow-400">
              LET US HELP
            </h2>
            <p className="mt-3 text-white text-[14px] md:text-[18px] max-w-[520px] font-semibold mx-auto md:mx-0">
              Consult our experts, and we’ll transform your thoughts into words.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
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
              <a
                href="#"
                className="hidden sm:inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold bg-white text-gray-900 border border-gray-200 shadow-md hover:bg-gray-100 active:translate-y-[1px]"
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
