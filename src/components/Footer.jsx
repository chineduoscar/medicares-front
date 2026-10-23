
const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">

      {/* Footer Content */}
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:px-12 lg:py-16">

        {/* Brand Information */}
        <div>
          <a
            href="#home"
            className="text-3xl font-extrabold tracking-tight text-slate-800"
          >
            Medi<span className="text-blue-600">cares</span>
          </a>

          <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
            Providing reliable and modern healthcare services to
            ensure your well-being at every step.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Company
          </h3>

          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="#about"
                className="text-slate-600 transition hover:text-blue-600"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-slate-600 transition hover:text-blue-600"
              >
                Our Mission
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-slate-600 transition hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Contact
          </h3>

          <ul className="mt-5 space-y-4 text-slate-600">
            <li>
              Email:{" "}
              <a
                href="mailto:support@medicares.com"
                className="break-all transition hover:text-blue-600"
              >
                support@medicares.com
              </a>
            </li>

            <li>
              Phone:{" "}
              <a
                href="tel:+2348000000000"
                className="transition hover:text-blue-600"
              >
                +234 800 000 0000
              </a>
            </li>

            <li>Location: Nigeria</li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-slate-200 px-5 py-6 text-center">
        <p className="text-sm text-slate-500 sm:text-base">
          © {new Date().getFullYear()} Medicares. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;