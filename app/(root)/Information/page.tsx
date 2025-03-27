import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

import {
  FaPhoneAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  return (
    <div className="border border-gray-300 rounded-xl mt-3 poppins ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:px-15 md:px-8 px-0" >
        {/* First section - Links */}

        <div className="flex p-5 lg:p-8 items-center  ">
  <ul className="flex flex-col items-start space-y-2 border-b-gray-300 w-[15rem]">
    {[
      { label: "About Us", path: "about-us" },
      { label: "Terms & Conditions", path: "TC" },
      { label: "Our Services", path: "our-services" },
      { label: "Company Description", path: "company-description" },
      { label: "Frequently Asked Questions", path: "FAQ" },
      { label: "Privacy Policy", path: "privacy-policy" },
      { label: "Why Us", path: "why-us" },
    ].map((item) => (
      <li key={item.label}>
        <Link
          href={`/other-pages/${item.path}`}
          className="hover:text-black hover:font-semibold"
          target="_top"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Middle section - Logo and description */}
        <div
          className="poppins p-8 hidden md:flex md:flex-col md:items-center md:justify-center 
    lg:flex lg:items-center lg:justify-center lg:flex-col"
        >
          <Image src={logo} alt="Logo Image" className="w-40 h-16" />
          <span>Getprolist (Getprolist Info Technologies Pvt.</span>
          <span>Ltd.) digital platform was built to offer business</span>
          <span>information in your locality. yoou can browse</span>
          <span>thr.... </span>
          <div className="flex gap-3 p-3">
            {[FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map(
              (Icon, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Button className="w-7 h-7 rounded-full bg-black">
                    <Icon color="white" />
                  </Button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right section - Contact info for lg and md */}
        <div
          className="poppins p-8 space-y-2 
    hidden md:flex md:flex-col lg:flex lg:flex-col justify-center"
        >
          <h1 className="text-3xl">Have Questions?</h1>
          <div className="flex gap-4 items-center">
            <FaPhoneAlt />
            080-69578467
          </div>
          <div className="flex gap-4 items-center">
            <FaWhatsapp />
            7901313236
          </div>
          <Button className="sm:w-50">help@getprolist.com</Button>
          <h1>24/7 Dedicated Customer Support</h1>
        </div>

        {/* Contact info for sm only */}
        <div
          className="poppins p-8 space-y-2 border-b-gray-300 border
    sm:block md:hidden lg:hidden"
        >
          <h1 className="text-3xl">Have Questions?</h1>
          <div className="flex gap-4 items-center">
            <FaPhoneAlt />
            080-69578467
          </div>
          <div className="flex gap-4 items-center">
            <FaWhatsapp />
            7901313236
          </div>
          <Button>help@getprolist.com</Button>
          <h1>24/7 Dedicated Customer Support</h1>
        </div>

        {/* Logo and description for sm only */}
        <div
          className="flex items-center justify-center flex-col poppins p-8 
    sm:flex md:hidden lg:hidden"
        >
          <Image src={logo} alt="Logo Image" className="w-40 h-16" />
          <span>Getprolist (Getprolist Info Technologies Pvt.</span>
          <span>Ltd.) digital platform was built to offer business</span>
          <span>information in your locality. yoou can browse</span>
          <span>thr.... </span>
          <div className="flex gap-3 p-3">
            {[FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map(
              (Icon, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Button className="w-7 h-7 rounded-full bg-black">
                    <Icon color="white" />
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className=" border border-t-gray-300 flex justify-center items-center p-3">
        &copy; 2024 Getprolist Info Technologies Pvt. Ltd. - All Rights Reserved
      </div>
    </div>
  );
};

export default Information;
