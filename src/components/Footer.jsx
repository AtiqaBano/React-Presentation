function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-orange-500">Midnight</span> Cravings
            </h2>

            <p className="text-zinc-500 mt-4 max-w-sm leading-relaxed">
              Late nights, big cravings and delicious food delivered
              straight to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-zinc-500">
              <a href="/" className="hover:text-orange-500 transition">
                Home
              </a>

              <a href="/about" className="hover:text-orange-500 transition">
                About
              </a>

              <a href="/products" className="hover:text-orange-500 transition">
                Products
              </a>

              <a href="/contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Opening Hours
            </h3>

            <p className="text-zinc-500">
              Monday - Sunday
            </p>

            <p className="text-orange-500 font-semibold mt-2">
              6:00 PM - 3:00 AM
            </p>

            <p className="text-zinc-500 mt-4">
              📍 Karachi, Pakistan
            </p>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-600 text-sm">
          © 2026 Midnight Cravings. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;