"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Grape } from "lucide-react";
import Footer from "@/components/Footer";
import Menuitem from "@/components/Menuitem";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto">
      <Navbar />

      <section className="h-auto w-full lg:h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[5%] py-8 lg:py-0">
        <div
          className="flex-1 flex justify-center items-center mb-8 lg:mb-0 lg:order-1"
          data-aos="fade-left"
        >
          <img
            src="/ger.webp"
            alt="Burger"
            className="w-[70%] sm:w-[80%] lg:w-[80%] rounded-full"
          />
        </div>
        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
          <div className="w-[70%] sm:w-[80%] lg:w-[40%] mx-auto lg:mx-0 bg-red-100 text-center text-red-500 py-2 rounded-[20px] flex justify-center items-center">
            More than Faster <Grape />
          </div>
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-6">
            Be The Fastest <br /> In Delivering <br /> Your{" "}
            <span className="text-red-500">Food</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-lg">
            Fresh, tasty, organic dishes with juicy flavors, crunchy <br />
            textures, cheesy delights, savory aromas, healthy options, <br />
            and zesty meals.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 mt-6 justify-center lg:justify-start">
            <Link href="/menu">
              <button className="hover:bg-black px-7 py-2 bg-red-500 rounded-[55px] text-white">
                Order Now
              </button>
            </Link>
            <Link href="/menu">
              <button className="hover:bg-black hover:text-white hover:border-black px-7 py-2 border-2 border-red-500 rounded-[55px]">
                View
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Menuitem />

      <section
        className="w-full h-auto py-16 mt-20 lg:mt-0 bg-red-100 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <h1 className="text-red-500 text-center text-xl sm:text-xl lg:text-2xl">
          What we Serve
        </h1>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center pt-4">
          Your Favourite Food <br />
          Delivery Partner
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-evenly pt-14 gap-8">
          <div
            className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[25%] h-[320px] rounded-[10px] p-4 mb-6"
            data-aos="flip-left"
          >
            <img
              className="rounded-full w-[120px] h-[120px] mx-auto"
              src="/devboy.webp"
              alt="Easy To Order"
            />
            <h1 className="font-bold text-[30px] text-center mt-10">
              Easy To Order
            </h1>
            <p className="text-center">
              The sun set, casting beautiful <br />
              colors across skies.
            </p>
          </div>

          <div
            className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[25%] h-[320px] rounded-[10px] p-4 mb-6"
            data-aos="flip-up"
          >
            <img
              className="rounded-full w-[120px] h-[120px] mx-auto"
              src="/book.jpg"
              alt="Fastest Delivery"
            />
            <h1 className="font-bold text-[30px] text-center mt-10">
              Fastest Delivery
            </h1>
            <p className="text-center">
              The sun set, casting beautiful <br />
              colors across skies.
            </p>
          </div>

          <div
            className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[25%] h-[320px] rounded-[10px] p-4 mb-6"
            data-aos="flip-right"
          >
            <img
              className="rounded-full w-[120px] h-[120px] mx-auto"
              src="/wqaiter.jpg"
              alt="Best Quality"
            />
            <h1 className="font-bold text-[30px] text-center mt-10">
              Best Quality
            </h1>
            <p className="text-center">
              The sun set, casting beautiful <br />
              colors across skies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
