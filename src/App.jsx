import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/home";
import About from "./Pages/about";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
