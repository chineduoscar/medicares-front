const services = [
  {
    title: "Find a Specialist",
    href: "#contact",
    color: "bg-blue-50",
    iconColor: "bg-blue-100 text-blue-600",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16 16 5 5"
        />
      </svg>
    ),
  },
  {
    title: "Book Appointment",
    href: "#contact",
    color: "bg-green-50",
    iconColor: "bg-green-100 text-green-600",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 3v6m8-6v6M4 10h16m-8 4v3m-1.5-1.5h3"
        />
      </svg>
    ),
  },
  {
    title: "Online Consultation",
    href: "#contact",
    color: "bg-purple-50",
    iconColor: "bg-purple-100 text-purple-600",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 13 2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Emergency Care",
    href: "#contact",
    color: "bg-red-50",
    iconColor: "bg-red-100 text-orange-600",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 19V8h18v11M7 8V5h10v3M3 13h18M7 19v2m10-2v2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10v6m-3-3h6"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            YOUR HEALTH, OUR PRIORITY
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Our patients are our priority. We provide quality
            healthcare services you can trust.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className={`group flex min-h-[155px] flex-col items-center justify-center rounded-2xl ${service.color} p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${service.iconColor} transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-800 sm:text-xl">
                {service.title}
              </h3>

              <span className="mt-2 text-sm font-medium text-slate-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explore service →
              </span>
            </a>
          ))}
        </div>

        {/* About Healthcare Section */}
        <div
          id="about"
          className="mt-20 grid scroll-mt-24 grid-cols-1 items-center gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-20"
        >
          {/* Text Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-blue-600">
              Compassionate care, always
            </span>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
              We Truly Care About Your Health
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              At Medicares, every patient matters. Our team of
              dedicated doctors and healthcare professionals are
              committed to providing compassionate, reliable, and
              personalized care whenever you need it.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-100 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Learn More
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
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Healthcare Image */}
          <div className="group relative">
            <div className="absolute -inset-3 rounded-3xl bg-blue-100/70 blur-xl transition duration-500 group-hover:bg-blue-200/70" />

            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Healthcare professional caring for a patient"
              loading="lazy"
              className="relative h-[300px] w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 group-hover:scale-[1.01] sm:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;