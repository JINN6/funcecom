"use client"
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <header className="mb-12 text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-gray-800">Our Professional Services</h1>
            <p className="mt-4 text-xl text-gray-600">Explore our wide range of services designed to meet your needs.</p>
          </header>
          <section className="bg-white p-8 rounded-lg shadow-lg mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Core Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
                <div className="text-center mb-4">
                  <i className="fas fa-cogs text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Service One</h3>
                <p className="text-gray-600">We provide high-quality engineering solutions to optimize your processes and improve efficiency.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
                <div className="text-center mb-4">
                  <i className="fas fa-paint-brush text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Creative Design</h3>
                <p className="text-gray-600">Our creative design services help bring your vision to life with captivating and innovative designs.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
                <div className="text-center mb-4">
                  <i className="fas fa-laptop-code text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
                <p className="text-gray-600">We specialize in developing scalable, high-performance websites and web applications tailored to your needs.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
                <div className="text-center mb-4">
                  <i className="fas fa-chart-line text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Consulting</h3>
                <p className="text-gray-600">Our consulting services provide expert advice to help your business achieve sustainable growth and success.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
                <div className="text-center mb-4">
                  <i className="fas fa-users text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Team Training</h3>
                <p className="text-gray-600">We offer specialized team training programs to empower your workforce with the skills they need to excel.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
                <div className="text-center mb-4">
                  <i className="fas fa-shield-alt text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cyber Security</h3>
                <p className="text-gray-600">Our cyber security services ensure that your data and infrastructure are secure from evolving digital threats.</p>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              We are committed to delivering outstanding services with exceptional customer satisfaction. Here&rsquo;s why you should choose us:
            </p>
            <ul className="list-inside list-disc text-gray-600 space-y-4">
              <li className="text-xl">Expert team of professionals with years of experience in the industry.</li>
              <li className="text-xl">Tailored solutions to meet the specific needs of your business.</li>
              <li className="text-xl">Affordable pricing without compromising on quality.</li>
              <li className="text-xl">A customer-first approach focused on delivering value.</li>
              <li className="text-xl">Continuous support and ongoing consultation for your success.</li>
            </ul>
          </section>
          <section className="bg-black p-12 rounded-lg text-white text-center" data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-6">Let&rsquo;s Work Together</h2>
            <p className="text-lg mb-6">Ready to take your business to the next level? Get in touch with us today and let&rsquo;s discuss how we can help!</p>
            <button className="hover:bg-white hover:text-black border border-white bg-black text-white px-6 py-3 rounded-lg text-xl transition">Contact Us</button>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
