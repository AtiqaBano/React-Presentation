import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffaf5]">
        <p className="text-xl font-semibold text-gray-900">
          Loading product...
        </p>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffaf5]">
        <p className="text-xl font-semibold text-red-500 mb-4">
          Product not found
        </p>

        <Link
          to="/products"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Add to cart
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/cart");
  };

  // Increase quantity
  const increaseProductQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseProductQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] py-12 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-8 hover:text-orange-700"
        >
          ← Back to Products
        </Link>

        {/* Product Detail Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="grid md:grid-cols-2 gap-10 p-6 md:p-10">

            {/* Product Image */}
            <div className="bg-orange-50 rounded-2xl p-5 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-5">

                <span className="text-yellow-500 text-xl">
                  ⭐
                </span>

                <span className="text-gray-700 font-semibold">
                  {product.rating}
                </span>

                <span className="text-gray-400">
                  / 5
                </span>

              </div>

              {/* Price */}
              <p className="text-3xl md:text-4xl font-bold text-orange-600 mt-6">
                PKR {product.price}
              </p>

              {/* Badge */}
              {product.badge && (
                <span className="mt-5 bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full w-fit">
                  🔥 {product.badge}
                </span>
              )}

              {/* Description */}
              <p className="text-gray-700 text-lg leading-8 mt-6">
                {product.description}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 mt-8 pt-8">

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">

                  <span className="font-semibold text-gray-900">
                    Quantity:
                  </span>

                  <button
                    onClick={decreaseProductQuantity}
                    className="w-9 h-9 border border-gray-300 rounded-lg text-gray-700 hover:border-orange-500 hover:text-orange-500 transition"
                  >
                    −
                  </button>

                  <span className="font-semibold text-gray-900 min-w-5 text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseProductQuantity}
                    className="w-9 h-9 border border-gray-300 rounded-lg text-gray-700 hover:border-orange-500 hover:text-orange-500 transition"
                  >
                    +
                  </button>

                </div>

                {/* Add To Cart */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition duration-300 shadow-md"
                >
                  🛒 Add {quantity > 1 ? `${quantity} Items` : "to Cart"}
                </button>

                {/* Buy Now */}
                <button
                  onClick={handleAddToCart}
                  className="w-full mt-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold py-4 rounded-xl transition duration-300"
                >
                  Buy Now
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🚀</div>

            <h3 className="font-bold text-gray-900">
              Fast Delivery
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Fresh food delivered quickly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">✨</div>

            <h3 className="font-bold text-gray-900">
              Fresh & Quality
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Made with fresh ingredients.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🌙</div>

            <h3 className="font-bold text-gray-900">
              Midnight Cravings
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Perfect food for late-night cravings.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetail;