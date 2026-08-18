import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-orange-500"
        : "text-white hover:text-orange-500"
    }`;

  return (
    <nav className="bg-black text-white px-6 md:px-12 py-5 flex items-center justify-between">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        <span className="text-orange-500">Midnight</span> Cravings
      </Link>

      {/* Navigation */}
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

      {/* Order Button */}
      <Link
        to="/products"
        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold transition duration-300"
      >
        Order Now
      </Link>

    </nav>
  );
}

export default Navbar;