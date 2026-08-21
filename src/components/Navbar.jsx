import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();

  const navLinkStyle = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-orange-500"
        : "text-white hover:text-orange-500"
    }`;

  return (
    <nav className="bg-black text-white px-6 md:px-12 py-5 relative">

      {/*  TOP NAVBAR  */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-orange-500">Midnight</span> Cravings
        </Link>


        {/*  DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/products" className={navLinkStyle}>
            Products
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>

        </div>


        {/*  DESKTOP RIGHT SIDE  */}
        <div className="hidden md:flex items-center gap-3">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative border border-zinc-700 hover:border-orange-500 px-4 py-2.5 rounded-full font-semibold transition duration-300"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="ml-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>


          {/* Order Now */}
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold transition duration-300"
          >
            Order Now
          </Link>

        </div>


        {/*  MOBILE MENU BUTTON  */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white hover:text-orange-500 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/*  MOBILE MENU  */}
      {menuOpen && (
        <div className="md:hidden mt-6 border-t border-zinc-800 pt-6">

          <div className="flex flex-col gap-5">

            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>


            {/* Mobile Cart */}
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border border-zinc-700 hover:border-orange-500 px-5 py-3 rounded-xl font-semibold transition"
            >
              <span>🛒 Cart</span>

              {cartCount > 0 && (
                <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>


            {/* Mobile Order Now */}
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white text-center px-5 py-3 rounded-full font-semibold transition duration-300"
            >
              Order Now 🍔
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;