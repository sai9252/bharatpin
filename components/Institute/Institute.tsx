"use client";

import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import coachinglogo from "@/public/coachinglogo.jpeg";
import coaching from "@/public/coaching.jpg";
import RatingComponent from "./rating-component";
import ReviewsComponent from "./review";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import { BookOpen, GraduationCap, Star, Users } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import ImageUploader from "./ImageUpload";

export default function BusinessListing() {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("About");

  // Handle smooth scrolling
  const handleScrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const firstRowFields = ["Name", "Email"];
  const secondRowFields = ["Contact", "Location"];

  const AboutSection = () => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className=" mx-auto bg-white  rounded-lg">
        <div className="mb-6">
          <div className="flex">
            <Image
              src={coaching}
              alt="Rankers Coaching Classes"
              className="w-48 h-44 object-contain rounded-lg mb-4"
            />
            <div className="flex items-center mb-6 ml-6">
              <GraduationCap className="mr-2" size={48} />
              <h1 className="text-2xl font-bold text-yellow-600">
                Rankers Coaching Classes
              </h1>
            </div>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            With over 1 year of experience, Rankers Coaching Classes in
            Bangalore has established itself as a pioneer in competitive and
            board-level exam preparation. We have been at the forefront of
            helping students achieve their academic goals and excel in various
            examinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <BookOpen className="mr-3 text-green-600" />
              <h2 className="text-xl font-semibold text-green-800">
                Exam Preparation
              </h2>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>NEET</li>
              <li>JEE (Mains and Advanced)</li>
              <li>OlympNEET</li>
              <li>NTSE</li>
              <li>KVPY</li>
              <li>IISER</li>
              <li>NITs</li>
              <li>IIITs</li>
              <li>12th Board Exams</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <Star className="mr-3 text-blue-600" />
              <h2 className="text-xl font-semibold text-blue-800">
                Our Achievements
              </h2>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Excellent marks in CBSE</li>
              <li>Top performers in ICSE</li>
              <li>Outstanding results in ISC</li>
              <li>Consistent SSLC success</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <Users className="mr-3 text-orange-600" />
            <h2 className="text-xl font-semibold text-orange-800">
              Our Faculty
            </h2>
          </div>
          <p className="text-gray-700">
            Our expert faculty provides customized study material and brings
            profound knowledge to every class. We offer comprehensive coaching
            from foundation to advanced levels, ensuring personalized attention
            and academic excellence.
          </p>
        </div>
      </div>
    </div>
  );

  // Report Incorrect Section
  const ReportIncorrectSection = () => <FormSection title="Report Incorrect" />;

  // Own Business Section
  const OwnBusinessSection = () => <FormSection title="Claim Report" />;

  // Reusable Form Component
  const FormSection: React.FC<{ title: string }> = ({ title }) => (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4 ">
          {firstRowFields.map((field) => (
            <div key={field}>
              <label className="block mb-2 text-sm">{field}</label>
              <Input
                type="text"
                placeholder={`Enter ${field}`}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {secondRowFields.map((field) => (
            <div key={field}>
              <label className="block mb-2 text-sm">{field}</label>
              <Input
                type="text"
                placeholder={`Enter ${field}`}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}
        </div>
        {title === "Report Incorrect" && (
          <div>
            <Label className="block mb-2 font-normal">Report Type</Label>
            <Select>
              <SelectTrigger className="w-full p-2 border rounded-md">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Business Name">
                  Business Name Incorrect/Missing
                </SelectItem>
                <SelectItem value="Phone Number">
                  Phone Number Incorrect/Missing
                </SelectItem>
                <SelectItem value="Email">Email Incorrect/Missing</SelectItem>
                <SelectItem value="Website">
                  Wrong Website link/Missing
                </SelectItem>
                <SelectItem value="Location">
                  Location Address Incorrect/Missing
                </SelectItem>
                <SelectItem value="Other Information">
                  Other Information
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        <div>
          <label className="block mb-2 text-sm">Description</label>
          <Textarea
            className="w-full p-2 border rounded-md"
            rows={4}
          ></Textarea>
        </div>
        <div className=" flex w-full justify-center">
          <Button
            type="submit"
            className=" w-[10rem] bg-yellow-500/90 text-white p-2 rounded-md hover:bg-yellow-500/80"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-5 rounded-lg">
      <Head>
        <title>
          Rankers Coaching Classes - JP Nagar, Bangalore | GetProlist
        </title>
        <meta
          name="description"
          content="Rankers Coaching Classes in JP Nagar, Bangalore - Coaching for NEET, JEE, Mains and more"
        />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Business Information */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Business Details */}
          <div className="w-full lg:w-2/3">
            {/* Business Banner */}
            {/* <div className='relative h-98'> */}
            {/* <div className="  relative w-full h-84 rounded-lg overflow-hidden mb-8">        
          <Image 
            src={coachinglogo}
            alt="Rankers Coaching Classes" 
            layout="fill" 
            priority
          />

        </div>
        <div className="absolute bottom-2 left-10 bg-white h-25 w-35 rounded-lg shadow-lg flex justify-center items-center">
            <Image src={coaching} alt="Rankers Logo" width={70} height={70} />
          </div>    */}

            <div className="relative w-full mb-5">
              <div className="relative">
                <Image
                  src={coachinglogo}
                  alt="Rankers Coaching"
                  width={1200}
                  height={400}
                  className="rounded-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center  p-4">
                  <h1 className="text-md  sm:text-md md:text-xl lg:text-2xl font-semibold text-white text-center px-4 ">
                    Rankers Coaching Classes - JP Nagar, Bangalore
                  </h1>

                  <RatingComponent />

                  <Dialog>
                    <DialogTrigger asChild>
                      <Link href={"#reviews"}>
                        <Button
                          onClick={handleScrollToReviews}
                          className="sm:max-w-[425px] bg-yellow-500/90 text-white p-2 rounded-md hover:bg-yellow-500/80 text-sm px-3 py-1.5"
                        >
                          Add Your Review
                        </Button>
                      </Link>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* </div> */}

            <div className=" mx-auto my-8">
              <div className="flex  rounded-md lg:gap-10 md:gap-5 gap-3 overflow-hidden my-5">
                {["About", "ReportIncorrect", "OwnBusiness"].map(
                  (tab, index) => (
                    <Button
                      key={tab}
                      className={`flex-1 text-center ${
                        activeTab === tab
                          ? " bg-orange-600/90 text-white hover:bg-orange-500 "
                          : " bg-gray-200 text-black hover:bg-gray-200"
                      } ${
                        index === 0
                          ? "rounded-l-md"
                          : index === 2
                          ? "rounded-r-md"
                          : "border-x"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "OwnBusiness"
                        ? "Own this Business?"
                        : tab.replace(/([A-Z])/g, " $1").trim()}
                    </Button>
                  )
                )}
              </div>
              {activeTab === "About" && <AboutSection />}
              {activeTab === "ReportIncorrect" && <ReportIncorrectSection />}
              {activeTab === "OwnBusiness" && <OwnBusinessSection />}
            </div>

            {/* Galleries */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 uppercase md:text-sm tracking-wider pb-1 pl-2">
                Galleries
              </h2>
              <div className="h-1 w-full bg-gray-300/90 relative rounded-full">
                <div
                  className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <div className="items-center space-y-2 my-4">
                <ImageUploader />
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 uppercase md:text-sm tracking-wider pb-1 pl-2">
                AMENITIES
              </h2>
              <div className="h-1 w-full bg-gray-300/90 relative rounded-full">
                <div
                  className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  CCTV Camera
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  AC Class Rooms
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Trained Staff
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800uppercase md:text-sm tracking-wider pb-2 pl-2">
                ADDITIONAL INFORMATION
              </h2>
              <div className="h-1 w-full bg-gray-300/90 relative rounded-full">
                <div
                  className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Placements</p>
                  <p className="font-medium">No</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Institute Type</p>
                  <p className="font-medium">
                    Coaching Institute, Training Institute
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Mode of Instruction</p>
                  <p className="font-medium">Offline</p>
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-80 uppercase md:text-sm tracking-wider pb-2 pl-2">
                OTHER DETAILS
              </h2>
              <div className="h-1 w-full bg-gray-300/90 relative rounded-full">
                <div
                  className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Contact Person :</p>
                  <p className="font-medium">Dhirendra Kumar</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Payment Accepted :</p>
                  <p className="font-medium">
                    Debit Card, UPI, Net Banking, Cheques, Cash
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 pl-2 uppercase md:text-sm tracking-wider pb-2">
                WORKING HOURS
              </h2>
              <div className="h-1 w-full bg-gray-300/90 relative rounded-full">
                <div
                  className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                {[
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY",
                ].map((day) => (
                  <div
                    key={day}
                    className="bg-gray-100 p-3 rounded-lg text-center"
                  >
                    <p className="font-medium text-sm">{day}</p>
                    <p className="text-gray-600 text-sm">06:00 AM - 09:00 PM</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div ref={reviewsRef} id="reviews">
              <ReviewsComponent />
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="w-full lg:w-1/3">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="md:text-xl font-medium text-gray-800 mb-4 uppercase text-sm tracking-wider text-center">
                CONTACT INFORMATION
              </h2>
              <div className="h-1 w-full bg-orange-600/90  rounded-full"></div>
              <div className="space-y-3">
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm mt-1">
                    Rathna Mahal, 20th Main Road, Beside Samveet School, 5th
                    Phase, KR Layout, Phase 5 JP Nagar, Bangalore, 560078
                  </p>
                </div>
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>7829958305</div>
                </div>
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <div>info.cc.classes@gmail.com</div>
                </div>
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>Send Enquiry by Email</div>
                </div>
                <div className="flex items-center p-3">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <div>Get Information via SMS</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="md:text-xl font-medium text-gray-800 mb-4 uppercase text-sm tracking-wider text-center">
                CONTACT US
              </h2>
              <div className="h-1 w-full bg-orange-600/90  rounded-full mb-4"></div>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border-b-gray-300   focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border-b-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone no."
                    className="w-full p-3 border-b-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Location"
                    className="w-full p-3 border-b-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></Textarea>
                </div>
                <div className="flex justify-center w-full">
                  <Button
                    type="submit"
                    className="w-[10rem]  bg-yellow-500/90 text-white p-2 rounded-md hover:bg-yellow-500/80  transition duration-300"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>

            {/* GetProlist Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="md:text-xl font-medium text-gray-800 mb-4 uppercase text-sm tracking-wider">
                GetProlist :
              </h2>
              <div className="h-1 w-full bg-orange-600/90 rounded-full"></div>
              <div className="space-y-3">
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>080-69578467</div>
                </div>
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>help@getprolist.com</div>
                </div>
                <div className="flex items-start p-3">
                  <div className="bg-orange-600/90 p-2 rounded-lg mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    Getprolist Info Technologies Pvt. Ltd., #16-9-570/1, Sri
                    Krishnavaram, Rajendra Nagar, Kakinada, Andhra Pradesh
                    533003
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
