

const Home = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[calc(100vh-96px)] lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start">
          <span className="mb-5 text-sm font-bold uppercase tracking-wide text-blue-500 sm:text-base lg:text-lg">
            We are here for you
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-800 sm:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to{" "}
            <span className="text-blue-600">Medicares</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            At Medicares, your health and well-being come first.
            We provide reliable and modern healthcare services
            designed to support you and your loved ones every step
            of the way.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:text-lg"
            >
              Contact a Doctor
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-7 py-4 text-base font-bold text-blue-600 transition-all duration-300 hover:bg-blue-50 sm:text-lg"
            >
              Learn More About Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </span>
              Quality Healthcare
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </span>
              Patient-Focused Care
            </div>
          </div>
        </div>

        {/* Right Image Gallery */}
        <div className="relative mx-auto w-full max-w-162.5 lg:max-w-none">

          {/* Decorative Background */}
          <div className="absolute -right-8 top-10 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl sm:h-56 sm:w-56" />

          <div className="relative grid grid-cols-2 items-center gap-4 sm:gap-6">

            {/* Main Doctor Image */}
            <div className="relative mt-12 h-70 overflow-hidden rounded-2xl bg-blue-600 shadow-xl shadow-blue-100 sm:mt-16 sm:h-[400px] lg:mt-24 lg:h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85"
                alt="Doctor ready to provide healthcare"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Two Stacked Images */}
            <div className="flex flex-col gap-4 sm:gap-6">

              <div className="h-52.5 overflow-hidden rounded-2xl bg-blue-800 shadow-xl shadow-blue-100 sm:h-[300px] lg:h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85"
                  alt="Female healthcare professional"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>

              <div className="h-52.5 overflow-hidden rounded-2xl bg-rose-400 shadow-xl shadow-rose-100 sm:h-[260px] lg:h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=800&q=85"
                  alt="Medical professional in a clinical setting"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;