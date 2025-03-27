"use client";

import RegisterW from "@/public/RegisterW.jpg";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FaUser } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLock, MdPhone } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import OTPInput from "./OTPInput";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [verify, setVerify] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Check if any field is empty
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address with @.";
    } else if (formData.email.toLowerCase().includes("@gmail.com")) {
      newErrors.email = "Gmail addresses are not allowed.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, "");
      if (digitsOnly.length !== 10) {
        newErrors.phone = "Please enter exactly 10 digits for phone number.";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!isChecked) {
      newErrors.terms = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerify = () => {
    setVerify(true);
    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
    setIsPhoneVerified(true);
    toast.success('Phone number verified successfully');
    setOtpSent(false);
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Only allow digits to be entered
    const digitsOnly = input.replace(/\D/g, "");
    // Limit to 10 digits maximum
    const limitedInput = digitsOnly.slice(0, 10);

    setFormData({
      ...formData,
      phone: limitedInput,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isPhoneVerified) {
      toast.error("Please verify your phone number");
      return false;
    }
    if (isValid) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };


  return (
    <div className="flex flex-col lg:flex-row border my-10 border-gray-300 rounded-xl p-4 md:p-8 poppins">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 py-4 md:py-10 lg:py-36 px-4 md:px-30 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Register</h1>
        <h2 className="text-gray-600 mt-2 text-sm md:text-base">
          Please enter your details below to sign up.
        </h2>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 mt-4">
            Registration successful! Thank you for signing up.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-5 mt-4 md:mt-8"
          >
            {/* Full Name Field */}
            <div className="flex flex-col w-full md:w-[30rem]">
              <div className="flex items-center border rounded-md overflow-hidden w-full h-9">
                <div className="bg-orange-600  p-[9px] flex items-center justify-center">
                  <FaUser className="text-white w-5 h-5" />
                </div>
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="flex-1  border-0"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs md:text-sm mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email and Phone Fields */}
            <div className="flex gap-1">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-[30rem]">
                <div className="flex flex-col w-full md:w-1/2">
                  <div className="flex items-center border rounded-md overflow-hidden w-full h-10">
                    <div className="bg-orange-600 p-[9px] flex items-center justify-center">
                      <MdOutlineEmail className="text-white w-5 h-5" />
                    </div>
                    <Input
                      name="email"
                      placeholder="E-mail address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1  border-0"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
                  <div className="flex  items-center border rounded-md overflow-hidden w-full h-10">
                    <div className="bg-orange-600  p-[9px] flex items-center justify-center">
                      <MdPhone className="text-white w-5 h-5" />
                    </div>
                    <Input
                    type="tel"
                      name="phone"
                      placeholder="Phone No."
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="flex-1  border-0"
                      disabled={isPhoneVerified}
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                  {!errors.phone && otpSent ? (
                    <div className="space-y-2">
                      <h3 className="text-green-800 text-[11px] mt-2">
                        Enter the OTP sent to your mobile number
                      </h3>
                      <div className="flex">
                        <OTPInput/>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {formData.phone.length === 10  && !isPhoneVerified && !errors.phone && !verify && (
                <Button
                  type="submit"
                  onClick={handleVerify}
                  className="bg-orange-600/90 text-white hover:text-white  hover:bg-orange-500  h-10 w-20 "
                >
                  Send OTP
                </Button>
              )}
              {formData.phone  && !isPhoneVerified && !errors.phone && verify &&  (
                <Button
                  type="submit"
                  onClick={handleVerifyOTP}
                  className="bg-blue-600/90 text-white hover:text-white  hover:bg-blue-500  h-10 w-20 "
                >
                  verify
                </Button>
              )}
            </div>

            {/* Password Fields */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-[30rem]">
              <div className="flex flex-col w-full md:w-1/2">
                <div className="flex items-center border rounded-md overflow-hidden w-full h-10">
                  <div className="bg-orange-600 p-[9px] flex items-center justify-center">
                    <MdOutlineLock className="text-white w-5 h-5" />
                  </div>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="flex-1  border-0"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs md:text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
                <div className="flex items-center border rounded-md overflow-hidden w-full h-10">
                  <div className="bg-orange-600 p-[9px] flex items-center justify-center">
                    <MdOutlineLock className="text-white w-5 h-5" />
                  </div>
                  <Input
                    name="confirmPassword"
                    placeholder="Confirm-password"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="flex-1  border-0"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs md:text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                checked={isChecked}
                onCheckedChange={(checked: boolean) => setIsChecked(!!checked)}
              />
              <label
                htmlFor="terms"
                className="text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the terms and conditions
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs md:text-sm">{errors.terms}</p>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full md:w-[30rem]">
              Register
            </Button>
          </form>
        )}

        {/* Login Link */}
        <p className="flex my-3 w-full md:w-[30rem] items-center justify-center text-xs md:text-sm">
          Already Member?{" "}
          <Link href="/login" target="_parent">
            <Button
              variant="link"
              className="text-orange-700/90 hover:cursor-pointer text-xs md:text-sm"
            >
              Click here to login
            </Button>
          </Link>
        </p>
      </div>

      {/* Image Section - Hidden on mobile */}
      <div className="hidden lg:flex justify-center lg:w-1/2 items-center">
        <Image
          src={RegisterW}
          alt="Auth Image"
          className="rounded-xl w-full h-auto max-h-[45rem] object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
