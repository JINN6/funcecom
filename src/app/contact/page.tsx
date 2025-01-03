
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const ContactUs = () => {
  return (
    <div><Navbar />
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <header className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            We'd love to hear from you. Whether you have a question or just want to say hello, feel free to reach
            out!
          </p>
        </header>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center sm:text-left">Get In Touch</h2>
          <p className="text-gray-600 mb-6 text-center sm:text-left">
            We're here to help! If you have any questions or need assistance, please fill out the form below or
            contact us directly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 text-gray-600">
              <i className="fas fa-phone-alt text-3xl text-blue-600"></i>
              <span className="text-xl">+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <i className="fas fa-envelope text-3xl text-blue-600"></i>
              <span className="text-xl">support@yourdomain.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <i className="fas fa-map-marker-alt text-3xl text-blue-600"></i>
              <span className="text-xl">123 Your Address, City, Country</span>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us A Message</h2>

          <form className="space-y-6">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-md w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-md w-full"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border rounded-md w-full h-40"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactUs;
