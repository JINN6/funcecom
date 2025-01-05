"use client";

import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCards";
import { Product } from "@/pages/types"; // Ensure this is correctly imported
import Navbar from "@/components/Navbar"; // Import Navbar component
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Homee = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setSuccessMessage(`${product.name} has been added to the cart!`);
      setTimeout(() => setSuccessMessage(""), 3000);
      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = typeof product.price === "string" ? parseFloat(product.price) : product.price;
      return total + price;
    }, 0);
  };

  const proceedToCheckout = () => {
    setIsCheckout(true);
    localStorage.setItem("orderPlaced", "true");
    setCart([]);
    localStorage.removeItem("cart");
    alert("Order has been placed! Thank you for shopping with us.");
  };

  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <div>
      <Navbar /> {/* Remove cart prop from here */}
      <div className="relative min-h-screen py-6 bg-red-100">
        <div className="container mx-auto px-4">
          <header className="flex flex-col items-center mb-8" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-gray-800 text-center">Our Products</h1>
            <button
              onClick={toggleCart}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              {showCart ? "Hide Cart" : "Show Cart"}
            </button>
            {successMessage && (
              <div className="mt-2 text-green-600 font-semibold">{successMessage}</div>
            )}
          </header>

          {showCart && (
            <section className="mt-8 bg-white shadow-lg rounded-lg p-6" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="divide-y divide-gray-200">
                    {cart.map((product) => (
                      <li key={product.id} className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <span className="text-gray-800">{product.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-800 font-semibold">₹ {product.price}</span>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex justify-between items-center text-xl font-semibold text-gray-800">
                    <span>Total:</span>
                    <span>₹ {calculateTotal().toFixed(2)}</span>
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <button
                      onClick={() => {
                        setCart([]);
                        localStorage.removeItem("cart");
                      }}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700"
                    >
                      Clear Cart
                    </button>
                    <button
                      onClick={proceedToCheckout}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </section>
          )}

          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </main>

          {isCheckout && (
            <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg text-center shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Thank You for Your Order!
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your order has been placed successfully. We will process it shortly.
                </p>
                <button
                  onClick={() => {
                    setIsCheckout(false);
                    window.location.reload();
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
                >
                  Go to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homee;
