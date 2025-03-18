'use client'

import RegisterW from "@/public/RegisterW.jpg";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="flex flex-col lg:flex-row border my-10 border-gray-300 rounded-xl p-4 md:p-8 poppins">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 py-4 md:py-10 lg:py-36 px-4 md:px-30 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Login</h1>
        <h2 className="text-gray-600 mt-2 text-sm md:text-base">
          Please enter your details below to sign in.
        </h2>

        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 mt-4">
            Login successful!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 mt-4 md:mt-8">
          {/* Email Field */}
          <div className="flex flex-col w-full">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full md:w-[25rem] h-10">
              <div className="bg-orange-600 p-2.5 flex items-center justify-center">
                <MdOutlineEmail className="text-white w-5 h-5 " />
              </div>
              <Input
                name="email"
                placeholder="E-mail address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`flex-1 p-2 outline-none ${errors.email ? "border-red-500" : ""} border-0`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field - Fixed the name and type attributes */}
          <div className="flex flex-col w-full">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full md:w-[25rem] h-10">
              <div className="bg-orange-600 p-2.5 flex items-center justify-center">
                <MdOutlineLock className="text-white w-5 h-5" />
              </div>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`flex-1 p-2 outline-none ${errors.password ? "border-red-500" : ""}  border-0`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-xs md:text-sm font-medium leading-none">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <Button type="submit" className="w-full md:w-[25rem]">
            Login
          </Button>
        </form>

        {/* Registration Link */}
        <p className="flex my-3 items-center justify-center w-full md:w-[25rem] text-xs md:text-sm">
          Not yet registered?{" "}
          <Link href="/register" target="_parent">
            <Button
              variant="link"
              className="text-orange-700/90 hover:cursor-pointer text-xs md:text-sm"
              
            >
              Register Now
            </Button>
          </Link>
        </p>
        
        {/* Forgot Password Button */}
        <Button className="w-full md:w-[25rem] bg-gray-200 text-black hover:bg-gray-100 text-xs md:text-sm">
          Forget Password
        </Button>
      </div>

      {/* Image Section - Hidden on mobile */}
      <div className="hidden lg:flex justify-center lg:w-1/2 items-center">
        <Image
          src={RegisterW}
          alt="Auth"
          className="rounded-xl w-full h-auto max-h-[45rem] object-cover"
        />
      </div>
    </div>
  );
};

export default Login;