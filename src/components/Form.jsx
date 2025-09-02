import { useState } from "react";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setMessage("✅ Thank you! Your request has been sent.");
        form.reset();
      } else {
        setMessage("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      setMessage("❌ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        name="name"
        type="text"
        required
        placeholder="Full Name"
        className="h-11 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="h-11 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        className="h-11 w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Write a Message"
        className="w-full rounded-md border border-white/20 bg-white text-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ffd139]"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#ffd139] px-4 text-sm font-semibold uppercase tracking-wide text-[#0f2c50] shadow hover:brightness-95 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Consult With Our Expert"}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
