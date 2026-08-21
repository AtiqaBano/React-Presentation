import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Products load nahi ho rahe.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl animate-bounce">🍔</div>

          <p className="text-zinc-400 mt-4 text-lg">
            Loading delicious cravings...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
        <div className="text-center">

          <p className="text-red-500 text-xl font-semibold">
            {error}
          </p>

          <p className="text-zinc-500 mt-3">
            Check karo ke backend server localhost:5001 par running hai.
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="bg-zinc-950 text-white min-h-screen">

      {/* Page Header */}
      <section className="px-6 md:px-12 lg:px-20 pt-20 pb-12">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Our Menu
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
            Choose Your
            <span className="text-orange-500">
              {" "}Craving
            </span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mt-5">
            From juicy burgers to cheesy pizzas and sweet midnight treats,
            we've got something for every craving.
          </p>

        </div>

      </section>


      {/* Product Count */}
      <section className="px-6 md:px-12 lg:px-20 pb-8">

        <div className="max-w-7xl mx-auto">

          <p className="text-zinc-500">
            Showing{" "}
            <span className="text-white font-semibold">
              {products.length}
            </span>{" "}
            delicious items
          </p>

        </div>

      </section>


      {/* Products */}
      <section className="px-6 md:px-12 lg:px-20 py-10 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {products.map((product) => (

              <div
                key={product.id}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition duration-300"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {product.badge}
                    </span>
                  )}

                </div>


                {/* Content */}
                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <p className="text-orange-500 text-sm font-medium">
                      {product.category}
                    </p>

                    <p className="text-yellow-400 text-sm">
                      ⭐ {product.rating}
                    </p>

                  </div>


                  <h2 className="text-2xl font-bold mt-3">
                    {product.name}
                  </h2>


                  <p className="text-zinc-500 text-sm leading-relaxed mt-3">
                    {product.description}
                  </p>


                  {/* Price + Button */}
                  <div className="flex items-center justify-between mt-6">

                    <div>

                      <p className="text-zinc-500 text-xs">
                        Price
                      </p>

                      <p className="text-orange-500 text-2xl font-extrabold">
                        Rs. {product.price}
                      </p>

                    </div>


                    <Link
                      to={`/products/${product.id}`}
                      className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-full font-semibold transition"
                    >
                      View Item
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Products;