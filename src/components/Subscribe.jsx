import { useState } from "react";
import axios from "axios";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.post("http://localhost:3001/api/subscribe", {
      email: email,
    });

    setIsLoading(false);
    console.log(response.data);

    setMessage(response.data.message);

    setEmail("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
          Subscribe for Latest Doctor Updates
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">
          Get health tips, doctor availability, and important updates delivered
          straight to your inbox.
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Enter your email
          </label>

          <input
            id="subscribe-email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="min-w-0 flex-1 rounded-xl border border-slate-300 px-5 py-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="submit"
            className={`rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition duration-300 hover:bg-blue-700 sm:min-w-[175px] ${isLoading && "cursor-not-allowed bg-blue-700/50"}`}
          >
            Subscribe
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <p role="status" className="mt-4 text-sm text-slate-600">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
