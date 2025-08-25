export default function Footer() {
  return (
    <section className="relative w-full text-white">
      {/* subtle background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/cta4.jpg')" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12 items-stretch relative">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Contact us today to receive a <br className="hidden sm:block" /> free
              consultation
            </h2>
            <p className="mt-4 inline-block rounded px-1.5 py-0.5 text-sm font-semibold tracking-wide text-[#0f2c50] bg-[#ffd139]">
              Speak with our consultant now.
            </p>

            <div className="mt-6 space-y-3 text-sm md:text-base">
              <div>
                <p className="font-semibold text-white/90">Discuss Your Ideas</p>
                <a href="mailto:info@b4blurb.com" className="text-white/80">info@b4blurb.com</a>
              </div>
              <div>
                <p className="font-semibold text-white/90">Call us</p>
                <a className="text-white/80" href="tel:+1 208 291 4545">208 291 4545</a>
              </div>
            </div>
          </div>

          {/* MIDDLE: Form card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-xl bg-[#1f3b63]/95 px-5 sm:px-6 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-xl font-bold">Get in touch</h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 leading-relaxed">
                Use the form below to contact us regarding your ghostwriting concerns. Please be as detailed as possible.
              </p>

              <form className="mt-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Full Name" className="h-10 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]" />
                  <textarea
                    placeholder="Write a Message"
                    className="sm:row-span-2 h-10 sm:h-full min-h-[40px] w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
                  ></textarea>
                  <input type="email" placeholder="Email Address" className="h-10 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]" />
                  <input type="tel" placeholder="Phone Number" className="h-10 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]" />
                </div>

                <button type="button" className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#ffd139] px-4 text-sm font-semibold uppercase tracking-wide text-[#0f2c50] shadow hover:brightness-95">
                  Consult With Our Expert
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Floating Image */}
          <div className="lg:col-span-2 absolute hidden sm:hidden md:hidden lg:inline justify-center lg:justify-end items-center w-[350px] h-[450px] top-4 -right-4">
            <img
              src="/assets/women-pic.png"
              alt="Consultant"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative w-full bg-[#0e2950]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 py-3 text-xs sm:text-sm text-white/80">
          <div className="flex-1">© Your Book Publisher {new Date().getFullYear()} | All rights reserved.</div>
          <div className="hidden sm:block whitespace-nowrap">
            <a href="#" className="hover:underline">Terms &amp; Condition</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <button className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#ffd139] px-3 py-1.5 font-semibold text-[#0f2c50] shadow">
            <span className="text-base leading-none">💬</span>
            <span className="text-xs sm:text-sm leading-none">Chat</span>
          </button>
        </div>
      </div>
    </section>
  );
}
