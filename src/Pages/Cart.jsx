import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();
  console.log("CART RENDER:", cart);

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
        <div className="text-center">

          <div className="text-7xl mb-6">
            🛒
          </div>

          <h1 className="text-4xl font-bold">
            Your cart is empty
          </h1>

          <p className="text-zinc-500 mt-4">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7 bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-full font-bold transition"
          >
            Explore Menu 🍔
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 md:px-12 lg:px-20 py-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Your Order
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Shopping Cart 🛒
          </h1>

        </div>


        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col sm:flex-row gap-5"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-xl"
                />


                {/* Product Info */}
                <div className="flex-1">

                  <p className="text-orange-500 text-sm font-semibold">
                    {item.category}
                  </p>

                  <h2 className="text-2xl font-bold mt-1">
                    {item.name}
                  </h2>

                  <p className="text-orange-500 font-bold mt-2">
                    PKR {item.price}
                  </p>


                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-5">

                    <button
  onClick={() => {
    console.log("MINUS CLICKED", item.id);
    decreaseQuantity(item.id);
  }}
  className="w-9 h-9 rounded-lg border border-zinc-700 hover:border-orange-500 transition"
>
  −
</button>

                    <span className="font-bold min-w-5 text-center">
                      {item.quantity}
                    </span>

                    <button
  onClick={() => {
    console.log("PLUS CLICKED", item.id);
    increaseQuantity(item.id);
  }}
  className="w-9 h-9 rounded-lg border border-zinc-700 hover:border-orange-500 transition"
>
  +
</button>

                  </div>

                </div>


                {/* Right Side */}
                <div className="flex sm:flex-col justify-between items-end">

                  <p className="text-xl font-bold">
                    PKR {item.price * item.quantity}
                  </p>

                  <button
  onClick={() => {
    console.log("REMOVE CLICKED", item.id);
    removeFromCart(item.id);
  }}
  className="text-red-400 hover:text-red-300 text-sm font-semibold"
>
  Remove
</button>

                </div>

              </div>

            ))}

          </div>


          {/* Order Summary */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 h-fit">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="border-t border-zinc-800 mt-6 pt-6 space-y-4">

              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>PKR {cartTotal}</span>
              </div>

              <div className="flex justify-between text-zinc-400">
                <span>Delivery</span>
                <span>PKR 150</span>
              </div>

              <div className="border-t border-zinc-800 pt-4 flex justify-between">
                <span className="text-lg font-bold">
                  Total
                </span>

                <span className="text-xl font-extrabold text-orange-500">
                  PKR {cartTotal + 150}
                </span>
              </div>

            </div>


            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl mt-7 transition">
              Proceed to Checkout
            </button>


            <Link
              to="/products"
              className="block text-center text-zinc-400 hover:text-orange-500 mt-5 transition"
            >
              ← Continue Shopping
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Cart;