"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  useEffect(() => {
    AOS.init({ once: true }); 
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.acceptTerms) {
      alert("You must accept the terms and conditions!");
      return;
    }
    alert("Account created successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen py-12 bg-gray-50">
        <div className="container mx-auto px-6">
         
          <header
            className="mb-12 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl font-bold text-gray-800">Create an Account</h1>
            <p className="mt-4 text-xl text-gray-600">
              Sign up to get started with our services.
            </p>
          </header>

         
          <section
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form onSubmit={handleSubmit}>
             
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-lg font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                  required
                />
              </div>

            
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-lg font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                  required
                />
              </div>

              
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-lg font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your password"
                  required
                />
              </div>

            
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-lg font-semibold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              
              <div className="mb-6">
                <label
                  htmlFor="acceptTerms"
                  className="flex items-center space-x-2 text-gray-700 text-lg"
                >
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="text-blue-600 focus:ring-blue-600"
                  />
                  <span className="text-sm">
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="text-blue-600 hover:underline"
                    >
                      terms and conditions
                    </a>
                    .
                  </span>
                </label>
              </div>

            
              <div className="flex justify-center mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Sign Up
                </button>
              </div>
            </form>

          
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:underline"
                >
                  Log in here
                </a>
              </p>
            </div>
          </section>

        
          <section
            className="mt-16 bg-gray-100 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Benefits of Joining
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Joining our platform comes with many exciting benefits. Here are just a
              few reasons to sign up today:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Exclusive Offers
                </h3>
                <p className="text-gray-600">
                  Get access to exclusive offers and promotions available only to members.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-600">
                  Enjoy personalized recommendations based on your preferences and interests.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Early Access
                </h3>
                <p className="text-gray-600">
                  Be the first to know about new product launches and updates, and enjoy early
                  access to sales.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
