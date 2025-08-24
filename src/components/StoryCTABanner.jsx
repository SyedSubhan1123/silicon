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
      style={{ backgroundImage: `url('/assets/cta3.jpg')` }}
    >
      {/* container */}
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 py-10">
        <div className="grid grid-cols-12 items-center gap-6">

          {/* LEFT - books/devices */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start relative">
            
            {/* Mobile layout (stacked & centered) */}
            <div className="flex md:hidden flex-wrap justify-center gap-3">
              <img src={art.book1} alt="Book 1" className="w-24 h-36 object-contain" />
              <img src={art.book2} alt="Book 2" className="w-24 h-36 object-contain" />
              <img src={art.tablet} alt="Tablet" className="w-28 h-40 object-contain" />
              <img src={art.phone} alt="Phone" className="w-16 h-32 object-contain" />
            </div>

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
            <p className="mt-3 text-white/80 text-[14px] md:text-[15px] max-w-[520px] mx-auto md:mx-0">
              Consult our experts, and we’ll transform your thoughts into words.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-300 active:translate-y-[1px]"
              >
                Consult Our Experts
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold bg-white text-gray-900 border border-gray-200 shadow-md hover:bg-gray-100 active:translate-y-[1px]"
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
