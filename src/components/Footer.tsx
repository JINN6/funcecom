// src/components/Footer.tsx
import React from 'react';
import { SendHorizontal } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mt-16">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
       
          <div className="text-2xl font-semibold">Ghost Productions</div>

         
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i> 
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i> 
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-instagram"></i> 
            </a>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Returns</a></li>
              <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-blue-400">Sitemap</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
  <h3 className="font-semibold w-[260px] flex justify-start text-lg mb-4">Subscribe</h3>
  <div className="flex h-[60px] w-[260px]  justify-center gap-2 items-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-grow p-3 bg-white text-black border border-2 border-red-500 rounded-lg"
    />
    <button className="w-[30%] h-[40px] bg-red-500 text-white rounded-full flex items-center justify-center ">
      <SendHorizontal />
    </button>
  </div>
</div>

        </div>

       <br /> <div className="w-full text-center py-4  text-black">
  <hr className="border-t border-gray-600 w-[90%] mx-auto" />
  
  <p className="text-sm mt-2">All rights reserved © 2024</p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
