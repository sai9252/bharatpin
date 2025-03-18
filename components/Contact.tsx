"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdHome } from "react-icons/md";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): string => {
    for (const key in formData) {
      if (!formData[key as keyof typeof formData].trim()) {
        return "All fields are mandatory";
      }
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    // Clear form and errors if valid
    setFormData({
      name: "",
      email: "",
      mobile: "",
      location: "",
      description: "",
    });
    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset success message after 3 seconds
  };

  return (
    <div className="md:px-20 md:py-10 sm:px-10 sm:py-5 px-2 py-2">
      <div className="md:flex md:flex-row gap-8">
        <div className="md:w-[65%]">
          <div className="space-x-20 space-y-5">
            <div className="border-b-4 border-b-orange-600/90 text-4xl font-semibold lexend py-4 w-full">
              Contact Us
            </div>
            <div className="border border-gray-300 rounded-lg">
              <form
                className="space-y-4 md:px-10 px-3 py-12"
                onSubmit={handleSubmit}
              >
                {error && <div className="text-red-600 text-lg">{error}</div>}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <Input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <Textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                />

                {submitted && (
                  <div className="text-green-600 text-lg">
                    Details submitted successfully!
                  </div>
                )}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-black text-gray-300 px-6 py-2 w-28 h-10"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] mt-2.5">
          <div className="bg-orange-600/90 rounded-xl text-white p-3 text-4xl">
            Office Address
          </div>
          <div className="space-y-5 mt-4 rounded-lg bg-gray-100 w-full  p-5">
            <div className="flex gap-4 items-center md:text-lg text-sm">
              <div className="min-w-10 h-10 rounded-lg bg-orange-600/90  flex justify-center items-center">
                <FaPhoneAlt color="white" className=" w-5 h-5" />
              </div>
              <div>080-69578467</div>
            </div>
            <div className="flex gap-4 items-center md:text-lg text-sm">
              <div className="min-w-10 h-10 rounded-lg bg-orange-600/90  flex justify-center items-center">
                <IoMail color="white" className=" w-5 h-5" />
              </div>
              <div>help@getprolist.com</div>
            </div>
            <div className="flex gap-4 md:text-lg text-sm">
              <div className="min-w-10 h-10 rounded-lg bg-orange-600/90  flex justify-center items-center ">
                <MdHome color="white" className=" w-5 h-5" />
              </div>
              <span>
                Getprolist Info Technologies Pvt.Ltd.,
                <br />
                #69-3-17/1H, Sri Srinivasa Plaza, 2nd Floor,
                <br />
                Nagavanam, Rajendra Nagar, Kakinada,
                <br />
                Andhra Pradesh,533003.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
