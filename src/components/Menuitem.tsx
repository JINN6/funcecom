"use client";

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

// Define the type for the product
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCardGrid = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      price: 600,
      image: "https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 659,
      image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
    },
    {
      id: 3,
      name: "Classic Cheese Pizza",
      price: 999,
      image: "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY=",
    },
    {
      id: 4,
      name: "Mushroom Pepper Pizza",
      price: 500,
      image: "https://www.delmonte.com/sites/default/files/MushroomPepPizza_0076.jpg",
    },
    {
      id: 5,
      name: "Spinach Artichoke Pizza",
      price: 1500,
      image: "https://thefirstmess.com/wp-content/uploads/2021/06/vegan-spinach-artichoke-pizza-5.jpg",
    },
    {
      id: 6,
      name: "Homemade Dough Pizza",
      price: 450,
      image: "https://www.simplyrecipes.com/thmb/ubjavzLA-BJm5ZTA7D6gehdGXdk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-2d-ee202758ce084fc4a88917816df9fc07.jpg",
    },
  ];

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const checkout = () => {
    alert(
      `Your order has been placed!\n\nItems:\n${cart
        .map((item) => `- ${item.name}: ₹${item.price}`)
        .join("\n")}\n\nTotal: ₹${calculateTotal()}`
    );
    setCart([]);
  };

  return (
    <div className="relative text-center p-10 bg-cover bg-center bg-gray-100 mt-[60px]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Hot Selling Items!</h1>
      
      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt[60px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white shadow-lg rounded-xl duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div onClick={() => addToCart(product)}>
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <span className="text-gray-500 uppercase text-xs">Category</span>
                <p className="text-lg font-bold text-gray-700 mt-2 truncate">{product.name}</p>
                <div className="flex items-center mt-4">
                  <p className="text-lg font-semibold text-gray-900">Rs.{product.price}</p>
                  <div className="ml-auto cursor-pointer">
                    <FaShoppingCart className="text-blue-600 w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Preview */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="py-2 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-900 font-semibold">₹{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-4 text-lg font-semibold">
              <span>Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>

            <button
              onClick={checkout}
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardGrid;
