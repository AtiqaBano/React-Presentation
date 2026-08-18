import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-zinc-950 text-white">

      <section className="min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12 lg:px-20 py-16">

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-orange-500 font-semibold tracking-[4px] uppercase mb-5">
              Open Till 3 AM
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Late Nights.
              <br />
              <span className="text-orange-500">
                Big Cravings.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-lg leading-relaxed">
              Your favorite midnight meals, freshly made and delivered
              straight to your door. Because cravings don't follow a clock.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/products"
                className="bg-orange-500 hover:bg-orange-600 px-7 py-3.5 rounded-full font-bold transition duration-300"
              >
                Order Now 🍔
              </Link>

              <Link
                to="/products"
                className="border border-zinc-700 hover:border-orange-500 hover:text-orange-500 px-7 py-3.5 rounded-full font-bold transition duration-300"
              >
                Explore Menu
              </Link>

            </div>

            <div className="flex gap-8 mt-10 pt-8 border-t border-zinc-800">

              <div>
                <h3 className="text-2xl font-bold">30+</h3>
                <p className="text-zinc-500 text-sm">
                  Menu Items
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">4.8 ⭐</h3>
                <p className="text-zinc-500 text-sm">
                  Customer Rating
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">30 min</h3>
                <p className="text-zinc-500 text-sm">
                  Avg. Delivery
                </p>
              </div>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-90"></div>

              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
                alt="Delicious burger"
                className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] object-cover rounded-full shadow-2xl border-8 border-zinc-900"
              />

              <div className="absolute -bottom-4 -left-4 md:left-0 bg-white text-black rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-xs text-zinc-500">
                  Tonight's Favorite
                </p>

                <p className="font-bold text-lg">
                  Midnight Zinger 🍔
                </p>

                <p className="text-orange-500 font-bold">
                  Rs. 499
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-zinc-900/50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              What are you craving?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Explore Categories
            </h2>

            <p className="text-zinc-400 mt-4">
              Pick your favorite and satisfy your midnight cravings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500 rounded-2xl p-6 text-center transition duration-300 cursor-pointer">
              <div className="text-5xl group-hover:scale-110 transition duration-300">
                🍔
              </div>

              <h3 className="font-bold text-xl mt-4">
                Burgers
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Juicy & loaded
              </p>
            </div>

            <div className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500 rounded-2xl p-6 text-center transition duration-300 cursor-pointer">
              <div className="text-5xl group-hover:scale-110 transition duration-300">
                🍕
              </div>

              <h3 className="font-bold text-xl mt-4">
                Pizza
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Hot & cheesy
              </p>
            </div>

            <div className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500 rounded-2xl p-6 text-center transition duration-300 cursor-pointer">
              <div className="text-5xl group-hover:scale-110 transition duration-300">
                🍟
              </div>

              <h3 className="font-bold text-xl mt-4">
                Fries
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Crispy & tasty
              </p>
            </div>

            <div className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500 rounded-2xl p-6 text-center transition duration-300 cursor-pointer">
              <div className="text-5xl group-hover:scale-110 transition duration-300">
                🥤
              </div>

              <h3 className="font-bold text-xl mt-4">
                Drinks
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Cold & refreshing
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">

            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
                🔥 Hot right now
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Popular Tonight
              </h2>
            </div>

            <a
              href="/products"
              className="text-orange-500 hover:text-orange-400 font-semibold mt-5 md:mt-0"
            >
              View Full Menu →
            </a>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-orange-500 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
                alt="Midnight Zinger"
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <span className="text-xs bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                  Bestseller
                </span>

                <h3 className="text-xl font-bold mt-4">
                  Midnight Zinger
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Crispy chicken, fresh lettuce & special sauce.
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-orange-500 font-bold text-lg">
                    Rs. 499
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Order
                  </button>
                </div>

              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-orange-500 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
                alt="Loaded Fries"
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <span className="text-xs bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                  Hot Pick
                </span>

                <h3 className="text-xl font-bold mt-4">
                  Loaded Fries
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Crispy fries loaded with cheese & sauces.
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-orange-500 font-bold text-lg">
                    Rs. 349
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Order
                  </button>
                </div>

              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-orange-500 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"
                alt="Midnight Pizza"
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <span className="text-xs bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                  Fan Favorite
                </span>

                <h3 className="text-xl font-bold mt-4">
                  Midnight Pizza
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Cheesy, loaded and baked fresh every night.
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-orange-500 font-bold text-lg">
                    Rs. 899
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Order
                  </button>
                </div>

              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-orange-500 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
                alt="Crispy Wings"
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <span className="text-xs bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                  Spicy 🔥
                </span>

                <h3 className="text-xl font-bold mt-4">
                  Crispy Wings
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Crispy chicken wings with our signature sauce.
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-orange-500 font-bold text-lg">
                    Rs. 599
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Order
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-zinc-900/50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
              Why us?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Why Midnight Cravings?
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-orange-500 transition">
              <div className="text-5xl">
                🛵
              </div>

              <h3 className="text-xl font-bold mt-5">
                Fast Delivery
              </h3>

              <p className="text-zinc-500 mt-3">
                Hot food delivered to your doorstep in around 30 minutes.
              </p>
            </div>


            <div className="text-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-orange-500 transition">
              <div className="text-5xl">
                🍳
              </div>

              <h3 className="text-xl font-bold mt-5">
                Freshly Made
              </h3>

              <p className="text-zinc-500 mt-3">
                Every order is prepared fresh when you order.
              </p>
            </div>


            <div className="text-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-orange-500 transition">
              <div className="text-5xl">
                🌙
              </div>

              <h3 className="text-xl font-bold mt-5">
                Open Till 3 AM
              </h3>

              <p className="text-zinc-500 mt-3">
                Cravings don't wait, and neither do we.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;