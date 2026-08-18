function About() {
  return (
    <main className="bg-zinc-950 text-white">

      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              Our Story
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight">
              Food made for
              <span className="text-orange-500 block">
                midnight moments.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              Midnight Cravings started with one simple idea:
              everyone deserves a delicious meal when the craving hits,
              no matter what time it is.
            </p>

            <p className="text-zinc-500 leading-relaxed mt-5">
              From juicy burgers and crispy fries to cheesy pizzas and
              refreshing drinks, we prepare every order fresh and deliver
              it straight to your doorstep.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
              alt="Burger"
              className="w-full h-[450px] object-cover rounded-3xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-black p-6 rounded-2xl">
              <p className="text-3xl font-extrabold">
                3 AM
              </p>

              <p className="font-semibold">
                Still serving ❤️
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-zinc-900/50 px-6 md:px-12 lg:px-20 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            We make late-night food better.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6">
            No boring meals. No compromise on quality.
            Just fresh ingredients, bold flavors and food that makes
            your night a little better.
          </p>

        </div>

      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              What we believe
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500 transition">
              <div className="text-4xl">
                🥬
              </div>

              <h3 className="text-xl font-bold mt-5">
                Fresh Ingredients
              </h3>

              <p className="text-zinc-500 mt-3 leading-relaxed">
                We use quality ingredients and prepare every order fresh.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500 transition">
              <div className="text-4xl">
                ❤️
              </div>

              <h3 className="text-xl font-bold mt-5">
                Made With Love
              </h3>

              <p className="text-zinc-500 mt-3 leading-relaxed">
                Every meal is prepared with care because good food matters.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500 transition">
              <div className="text-4xl">
                🌙
              </div>

              <h3 className="text-xl font-bold mt-5">
                Always There
              </h3>

              <p className="text-zinc-500 mt-3 leading-relaxed">
                Your cravings don't follow a schedule, and neither do we.
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

          <a
            href="/products"
            className="inline-block bg-black text-white px-8 py-3.5 rounded-full font-bold mt-7 hover:bg-zinc-800 transition"
          >
            Explore Menu 🍔
          </a>

        </div>

      </section>

    </main>
  );
}

export default About;