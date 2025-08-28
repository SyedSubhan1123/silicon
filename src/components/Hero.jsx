import { useState } from "react";

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 1200);
  };

  return (
    <section className="relative isolate min-h-full bg-white overflow-hidden">
      {/* RIGHT: Hero collage */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden lg:flex w-[60%] items-center justify-center"
        style={{ clipPath: "ellipse(85% 120% at 100% 50%)" }}
      >
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409314/cta1_ndstqx.webp"
            type="image/jpg"
          />
          <img
            src="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409314/cta1_ndstqx.webp"
            alt="Hero background"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="w-full h-[90vh] object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      </div>

      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -left-10 -z-10 h-[460px] w-[720px] rotate-[4deg]"
        style={{
          background:
            "radial-gradient(90% 90% at 10% 10%, rgba(12,212,215,.18) 0%, rgba(255,221,87,.18) 35%, rgba(199,210,254,.18) 60%, rgba(255,255,255,0) 80%)",
        }}
      />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Hero text */}
          <div className="relative">
            <div className="bg-white p-6 sm:p-8 shadow-2xl border-4 border-t-amber-300 border-b-amber-300 border-l-amber-300 border-r-white rounded-md">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-gray-800 shadow-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                TOP-TIER BOOK PUBLISHING
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
                Book Publishing Company
              </h1>

              <ul className="mt-5 space-y-3 text-[14px] sm:text-base text-gray-800">
                {[
                  "Custom book publishing: eBooks, paperbacks & distribution.",
                  "Premium book cover design.",
                  "Strategic book marketing funnels.",
                  "In-house team with publishing consultancy & support.",
                  "Distribution to major platforms including Amazon & Kindle.",
                  "End-to-end service: design, launch & scale.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mt-1 h-5 w-5 flex-none text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
                >
                  Get Started
                </a>
                <a
                  href="#live-chat"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Live Chat
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="relative flex flex-col items-center lg:items-start">
            {/* Badge */}
            <div className="absolute -top-3 right-30 z-20 hidden sm:flex">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-[10px] font-extrabold uppercase tracking-wider text-white shadow">
                50% OFF
              </div>
            </div>

            {/* Form */}
            <div className="relative w-full max-w-md rounded-3xl bg-white p-2 shadow-2xl ring-1 ring-black/5">
              <div className="rounded-2xl bg-emerald-500 p-6 sm:p-7">
                <div className="mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-yellow-200">
                    Do You Have a Manuscript Ready?
                  </p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    PUBLISH YOUR BOOK NOW
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Your Message"
                    className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Connect With Our Expert"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="mt-2 text-sm text-white bg-green-700 p-2 rounded-md">
                      Message sent successfully!
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mt-2 text-sm text-white bg-red-500 p-2 rounded-md">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Model image */}
            <div className="mt-8 lg:mt-10 lg:absolute lg:-right-12 lg:top-[12%] hidden lg:block">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409264/hero-img_fxgu2s.webp"
                  type="image/png"
                />
                <img
                  src="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409264/hero-img_fxgu2s.webp"
                  alt="Smiling author holding a notebook"
                  className="h-[300px] w-auto lg:h-[420px] object-contain rounded-[28px]"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ribbon */}
      <div className="mt-10 lg:mt-16">
        <div className="mx-auto w-full px-6 lg:px-0 shadow-2xl">
          <div className="grid grid-cols-1 overflow-hidden shadow-2xl ring-1 ring-black/5 sm:grid-cols-3">
            <div className="col-span-2 bg-white px-6 py-3 text-center text-[13px] font-semibold tracking-wide text-gray-900 sm:text-sm">
              KEEP ALL THE RIGHTS & REVENUES OF YOUR BOOK.
            </div>
            <a
              href="#get-published"
              className="block bg-amber-400 px-6 py-3 text-center text-[13px] font-extrabold uppercase tracking-wide text-black transition hover:bg-amber-300 sm:text-sm"
            >
              GET PUBLISHED TODAY!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
