import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="relative w-full text-white">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411831/cta4_ineo2a.webp')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12 items-stretch relative">
          {/* LEFT */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Contact us today to receive a{" "}
              <br className="hidden sm:block" /> free consultation
            </h2>
            <p className="inline-block rounded px-2 py-1 text-sm font-semibold tracking-wide text-[#0f2c50] bg-[#ffd139]">
              Speak with our consultant now
            </p>

            <div className="mt-6 space-y-3 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#ffd139]" />
                <span>info@b4blurb.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#ffd139]" />
                <a href="tel:+1 323 989 1095">(323) 989 1095</a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#ffd139]" />
                <span>123 Main Street, New York, USA</span>
              </div>
            </div>
          </div>

          {/* MIDDLE: Form */}
          <div className="lg:col-span-4">
            <div className="relative rounded-xl bg-[#1f3b63]/95 px-6 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-xl font-bold">Get in touch</h3>
              <p className="mt-1 text-sm text-white/80 leading-relaxed">
                Use the form below to contact us regarding your ghostwriting
                concerns. Please be as detailed as possible.
              </p>

              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-11 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-11 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-11 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
                />
                <textarea
                  placeholder="Write a Message"
                  rows="4"
                  className="w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
                ></textarea>

                <button
                  type="button"
                  className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#ffd139] px-4 text-sm font-semibold uppercase tracking-wide text-[#0f2c50] shadow hover:brightness-95"
                >
                  Consult With Our Expert
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Floating Image */}
          <div className="lg:col-span-2 absolute hidden lg:flex justify-center lg:justify-end items-center w-[320px] h-[420px] top-8 -right-4">
            <img
              src="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756411837/women-pic_za2ohx.webp"
              alt="Consultant"
              className="h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative w-full bg-[#0e2950]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 py-3 text-xs sm:text-sm text-white/80">
          <div className="flex-1">
            © Your Book Publisher {new Date().getFullYear()} | All rights reserved.
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#" className="hover:underline">
              Terms &amp; Condition
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* Social icons */}
          {/* <div className="flex items-center gap-3 ml-4">
            <a href="#" className="hover:text-[#ffd139]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#ffd139]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#ffd139]">
              <FaLinkedinIn />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
