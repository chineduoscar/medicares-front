import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus(
      "Thank you for contacting us! Message delivery is not connected yet."
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-white">

      {/* Page Heading */}
      <div className="bg-slate-50 px-5 py-16 text-center sm:px-8 sm:py-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Get in Touch
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          We're here to help you with anything related to your health
          or our services.
        </p>
      </div>

      {/* Contact Content */}
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">

        {/* Left: Contact Information */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Let's talk
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Whether you have questions, need support, or want to book
            a service, our team is always ready to assist you quickly
            and professionally.
          </p>

          <div className="mt-8 space-y-6">

            {/* Email */}
            <a
              href="mailto:support@medicares.com"
              className="group flex items-center gap-4 text-slate-600 transition hover:text-blue-600"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3 7 9 6 9-6"
                  />
                </svg>
              </span>

              <span className="break-all text-base font-medium sm:text-lg">
                support@medicares.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+2348000000000"
              className="group flex items-center gap-4 text-slate-600 transition hover:text-green-600"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-100">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69a2 2 0 0 1 1.74 2.05Z"
                  />
                </svg>
              </span>

              <span className="text-base font-medium sm:text-lg">
                +234 800 000 0000
              </span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 text-slate-600">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <span className="text-base font-medium sm:text-lg">
                Nigeria
              </span>
            </div>

          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-100 sm:p-8 lg:p-10">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-3 block text-sm font-medium text-slate-700 sm:text-base"
              >
                Full Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-slate-200 px-5 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-3 block text-sm font-medium text-slate-700 sm:text-base"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-200 px-5 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-3 block text-sm font-medium text-slate-700 sm:text-base"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                required
                className="w-full resize-y rounded-xl border border-slate-200 px-5 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-100 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Send Message

              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2 11 13"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m22 2-7 20-4-9-9-4 20-7Z"
                />
              </svg>
            </button>

            {/* Form Status */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm leading-6 text-slate-600"
              >
                {status}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;