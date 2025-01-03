"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();

  
  useEffect(() => {
    const orderPlaced = localStorage.getItem("orderPlaced");

    if (orderPlaced) {
      alert("Order has been placed! Thank you for shopping with us.");
      localStorage.removeItem("orderPlaced"); 
    } else {
      router.push("/"); 
    }
  }, [router]);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-lg">Your order has been successfully placed!</p>
      <div className="mt-6">
        <button
          onClick={() => router.push("/")}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Checkout;
