// app/otherPages/aboutus/page.jsx
import React from "react";
import Image from "next/image";
import Aboutimg from "@/public/AboutUs.webp"; // Make sure the path is correct for your project structure

export default function AboutUs() {
  return (
    <div>
      <div className="border-b-4 border-b-orange-600/90 text-4xl font-semibold lexend py-4 w-full">
        About
      </div>
      
      {/* First section with image and text side by side on lg screens, stacked on smaller screens */}
      <div className="flex flex-col lg:flex-row gap-4 my-5 poppins">
        <div className="lg:w-1/2">
          <Image
            src={Aboutimg}
            alt="AboutUs Image"
            className="rounded-lg w-full h-auto"
            width={640}
            height={320}
            priority
          />
        </div>
        <div className="lg:w-1/2">
          <p>
            Getprolist (Getprolist Info Technologies Pvt. Ltd.) digital platform
            was built to offer business information in your locality. You can
            browse through the huge selection of best places to eat, drink and
            shop near you. Getprolist search allows you to easily and quickly
            travel throughout the country on your computer to take advantage of
            the free classifieds opportunities that you want, where you want, in
            all of our categories.
          </p>
        </div>
      </div>
      
      {/* Second section with additional text */}
      <div className="my-5 poppins">
        <p className="flex flex-col space-y-3">
          <span>
            Getprolist is a search engine that provides local search-related
            services to users across India through our website, incorporated with
            the aim to provide fast, free, reliable, and comprehensive information
            to our users.
          </span>
          <span>
            Our services are aimed at making several day-to-day tasks conveniently
            actionable and accessible to users through a single click online. We
            organize business information and leverage technology to eliminate
            barriers between businesses and their respective customers.
          </span>
          <span>
            Getprolist is a business information portal where local businesses can
            list themselves so that the people of their city can locate the right
            business for their needs conveniently and quickly.
          </span>
          <span>
            Most search engines give you a plethora of information from which
            relevant intelligence has to be culled. However, Getprolist gives you
            concise, precise, and exact data that can be used directly. We go
            beyond being a business listing portal by offering richer listings and
            user experience that today&apos;s people crave.
          </span>
        </p>
      </div>
    </div>
  );
}