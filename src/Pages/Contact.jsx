import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="bg-zinc-950 text-white">

      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight">
            We'd love to
            <span className="text-orange-500 block">
              hear from you.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mt-6">
            Got a question, feedback, or just a serious midnight craving?
            Drop us a message and we'll get back to you.
          </p>

        </div>

      </section>

      <section className="bg-zinc-900/50 px-6 md:px-12 lg:px-20 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Let's talk about
              <span className="text-orange-500 block">
                your cravings.
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-lg">
              Whether you have a question about our menu, delivery,
              or anything else, our team is ready to help.
            </p>


            <div className="flex items-start gap-5 mt-10">

              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-orange-500/10 border border-orange-500/20 rounded-2xl text-2xl">
                📍
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Our Location
                </h3>

                <p className="text-zinc-500 mt-2">
                  Karachi, Pakistan
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 mt-7">

              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-orange-500/10 border border-orange-500/20 rounded-2xl text-2xl">
                📞
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Phone
                </h3>

                <p className="text-zinc-500 mt-2">
                  +92 300 1234567
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 mt-7">

              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-orange-500/10 border border-orange-500/20 rounded-2xl text-2xl">
                ✉️
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Email
                </h3>

                <p className="text-zinc-500 mt-2">
                  hello@midnightcravings.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 mt-7">

              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-orange-500/10 border border-orange-500/20 rounded-2xl text-2xl">
                🌙
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Opening Hours
                </h3>

                <p className="text-zinc-500 mt-2">
                  Every day • 6 PM - 3 AM
                </p>
              </div>

            </div>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-7 md:p-10">

            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              Send a Message
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Tell us what's on your mind.
            </h2>

            {submitted && (
              <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400">
                <p className="font-semibold">
                  ✓ Message sent successfully!
                </p>

                <p className="text-sm mt-1 text-green-400/80">
                  Thanks for contacting Midnight Cravings. We'll get back to
                  you soon.
                </p>
              </div>
            )}


            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >
              <div className="grid sm:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition placeholder:text-zinc-600"
                  />

                </div>


                <div>

                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition placeholder:text-zinc-600"
                  />

                </div>

              </div>

              <div className="mt-5">

                <label className="block text-sm font-semibold mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition placeholder:text-zinc-600"
                />

              </div>

              <div className="mt-5">

                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition placeholder:text-zinc-600"
                />

              </div>


              <div className="mt-5">

                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition placeholder:text-zinc-600 resize-none"
                ></textarea>

              </div>


              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-full font-bold mt-6 transition duration-300 hover:scale-[1.01]"
              >
                Send Message 🍔
              </button>

            </form>

          </div>

        </div>

      </section>


      <section className="px-6 md:px-12 lg:px-20 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              Why Choose Us?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              We're Always Here
            </h2>

            <p className="text-zinc-400 mt-4">
              Great food, great service, even at midnight.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:-translate-y-1 transition duration-300">

              <div className="text-5xl">
                🛵
              </div>

              <h3 className="text-xl font-bold mt-5">
                Fast Delivery
              </h3>

              <p className="text-zinc-500 mt-3">
                Hot and fresh food delivered to your doorstep in around
                30 minutes.
              </p>

            </div>

            <div className="text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:-translate-y-1 transition duration-300">

              <div className="text-5xl">
                🍳
              </div>

              <h3 className="text-xl font-bold mt-5">
                Freshly Made
              </h3>

              <p className="text-zinc-500 mt-3">
                Every order is prepared fresh using quality ingredients.
              </p>

            </div>


            <div className="text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:-translate-y-1 transition duration-300">

              <div className="text-5xl">
                🌙
              </div>

              <h3 className="text-xl font-bold mt-5">
                Open Till 3 AM
              </h3>

              <p className="text-zinc-500 mt-3">
                Your midnight cravings are always welcome here.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-20">

        <div className="max-w-7xl mx-auto bg-orange-500 rounded-3xl p-10 md:p-16 text-black text-center">

          <h2 className="text-3xl md:text-5xl font-extrabold">
            Hungry yet?
          </h2>

          <p className="mt-4 text-black/70 text-lg">
            Your next favorite meal is just one click away.
          </p>

          <Link
            to="/products"
            className="inline-block bg-black text-white px-8 py-3.5 rounded-full font-bold mt-7 hover:bg-zinc-800 transition"
          >
            Explore Menu 🍔
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Contact;