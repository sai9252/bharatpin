"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
<<<<<<< HEAD
=======
import Cbook from "@/public/Cbook.jpg";
>>>>>>> dev
import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Input } from "./ui/input";


interface Institute {
  id: number;
  name: string;
  description: string;
  address: string;
  logo: string;
  rating: number;
  maxRating: number;
  type: string;
  fee: string;
  mode: string;
  category: string;
}

const AddBusiness = () => {
  const [activeButton, setActiveButton] = useState("all");
  const [starRating, setStarRating] = useState("default");
  const [feeCollection, setFeeCollection] = useState({
    fullFee: false,
    termFee: false,
  });
  const [instituteType, setInstituteType] = useState({
    coachingInstitute: false,
    trainingInstitute: false,
  });
  const [instructionMode, setInstructionMode] = useState({
    online: false,
    offline: false,
  });


  const [filteredInstitutes, setFilteredInstitutes] = useState<Institute[]>([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const institutes = useMemo(() => [
    {
      id: 1,
      name: "Aakash Institute - Bhaskar Nagar, Kakinada",
      description:
        "Aakash India's Best Coaching for NEET (UG), IIT JEE Mains, JEE Advanced...",
      address:
        "Door No. 24349 & 24310, Lakshmi Towers, Block 2, 5D Building Corner - Bhaskar Nagar, Kakinada - 533003",
      logo: "/akashLogo.png",
      rating: 3,
      maxRating: 5,
      type: "coaching",
      fee: "full",
      mode: "offline",
      category: "all",
    },
    {
      id: 2,
      name: "Rankers Coaching Classes - JP Nagar, Bangalore",
      description:
        "1+ year in classes business with best results. Rankers Coaching Classes...",
      address:
        "Rathna Mahal, 20th Main Road, Beside Samved School, 5th Phase, KR Layout, Phase 5 - JP Nagar, Bangalore - 560078",
      logo: "/coaching.jpg",
      rating: 4,
      maxRating: 5,
      type: "coaching",
      fee: "term",
      mode: "online",
      category: "location",
    },
    {
      id: 3,
      name: "Excel Training Institute - Marathahalli, Bangalore",
      description:
        "Premier training institute for professional development and career growth...",
      address: "456 Skill Plaza, Marathahalli Main Road, Bangalore - 560037",
      logo: "/akashLogo.png",
      rating: 5,
      maxRating: 5,
      type: "training",
      fee: "full",
      mode: "online",
      category: "category",
    },
  ], []);

  const applyFilters = useCallback(() => {
    let filtered = [...institutes];

    // Apply active button filter
    if (activeButton === "location") {
      filtered = filtered.filter(
        (institute) => institute.category === "location"
      );
    } else if (activeButton === "category") {
      filtered = filtered.filter(
        (institute) => institute.category === "category"
      );
    }

    // Apply star rating filter
    if (starRating !== "default") {
      filtered = filtered.filter(
        (institute) => institute.rating === parseInt(starRating)
      );
    }

    // Apply fee collection filter
    if (feeCollection.fullFee && !feeCollection.termFee) {
      filtered = filtered.filter((institute) => institute.fee === "full");
    } else if (!feeCollection.fullFee && feeCollection.termFee) {
      filtered = filtered.filter((institute) => institute.fee === "term");
    }

    // Apply institute type filter
    if (instituteType.coachingInstitute && !instituteType.trainingInstitute) {
      filtered = filtered.filter((institute) => institute.type === "coaching");
    } else if (
      !instituteType.coachingInstitute &&
      instituteType.trainingInstitute
    ) {
      filtered = filtered.filter((institute) => institute.type === "training");
    }

    // Apply instruction mode filter
    if (instructionMode.online && !instructionMode.offline) {
      filtered = filtered.filter((institute) => institute.mode === "online");
    } else if (!instructionMode.online && instructionMode.offline) {
      filtered = filtered.filter((institute) => institute.mode === "offline");
    }

    setFilteredInstitutes(filtered);
  }, [activeButton, starRating, feeCollection, instituteType, instructionMode, institutes]);
  
  useEffect(() => {
    applyFilters();
  }, [activeButton, applyFilters]);

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <div className="poppins space-y-7 mb-7 mt-5">
<<<<<<< HEAD
      <div className="flex items-center justify-center">
        <p className="text-sm md:text-base">
          HOME | <span className="text-orange-600/90">Coaching Institute</span>
=======
      <div className="relative h-98">
        <Image
          src={Cbook}
          alt="Rankers Coaching Classes"
          layout="fill"
          priority
          className="rounded-lg"
        />
        <p className="text-sm md:text-[30px] font-semibold top-10  absolute flex items-center justify-center w-full gap-1">
          HOME |<span className="text-orange-600/90"> Coaching Institute</span>
>>>>>>> dev
        </p>
      </div>
      <div className="border border-gray-300 rounded-md p-4 md:p-8 flex flex-col space-y-5">
        <div className="text-2x md:text-3xl font-semibold">
          <h1>
            India&apos;s Best Local Search{" "}
            <span className="text-orange-600/90">Engine</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-10">
          <Select>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <Input
              className="w-full md:w-[250px]"
              placeholder="Enter Location"
            />
          </Select>
          <Button className="w-full md:w-52">Search</Button>
        </div>
      </div>

      <div className="bg-gray-100/90 rounded-lg flex flex-col md:flex-row">
        {/* Filter button for mobile */}
        <div className="md:hidden w-full p-4 bg-white rounded-t-lg">
          <Button
            onClick={toggleFilterOptions}
            className="w-full flex items-center justify-center gap-2 bg-orange-600/90 hover:bg-orange-700/90"
          >
            <IoFilterOutline className="h-5 w-5" />
            {showFilterOptions ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Filter sidebar */}
        <div
          className={`flex flex-col space-y-5 p-4 md:p-10 w-full md:w-[25%] lg:w-[20%] ${
            showFilterOptions ? "block" : "hidden md:block"
          }`}
        >
          <div className="bg-white shadow-md rounded-lg p-3">
            <div className="flex items-center gap-2 bg-gray-100/90 p-1 px-3 rounded-md">
              <IoFilterOutline className="bg-orange-600/90 text-white rounded-lg h-7 w-7 p-1.5" />
              FILTER SEARCH
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 space-y-3">
            <div className="font-semibold text-xl">Star Rating</div>
            <div className="h-1 w-full bg-gray-300/90 relative">
              <div
                className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="">
              <RadioGroup
                value={starRating}
                onValueChange={(value) => setStarRating(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="r2" />
                  <Label htmlFor="r2">1 Star Rating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="r3" />
                  <Label htmlFor="r3">2 Star Rating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id="r4" />
                  <Label htmlFor="r4">3 Star Rating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4" id="r5" />
                  <Label htmlFor="r5">4 Star Rating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="r6" />
                  <Label htmlFor="r6">5 Star Rating</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 space-y-3">
            <div className="font-semibold text-xl">Fee Collection</div>
            <div className="h-1 w-full bg-gray-300/90 relative">
              <div
                className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="fullFee"
                checked={feeCollection.fullFee}
                onCheckedChange={(checked) =>
<<<<<<< HEAD
                  setFeeCollection({ ...feeCollection, fullFee: checked === true })
=======
                  setFeeCollection({
                    ...feeCollection,
                    fullFee: checked === true,
                  })
>>>>>>> dev
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="fullFee"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full Fee
                </label>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="termFee"
                checked={feeCollection.termFee}
                onCheckedChange={(checked) =>
<<<<<<< HEAD
                  setFeeCollection({ ...feeCollection, termFee: checked === true })
=======
                  setFeeCollection({
                    ...feeCollection,
                    termFee: checked === true,
                  })
>>>>>>> dev
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="termFee"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Term Fee
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 space-y-3">
            <div className="font-semibold text-xl">Institute Type</div>
            <div className="h-1 w-full bg-gray-300/90 relative">
              <div
                className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="coachingInstitute"
                checked={instituteType.coachingInstitute}
                onCheckedChange={(checked) =>
<<<<<<< HEAD
                  setInstituteType({ ...instituteType, coachingInstitute: checked === true })
=======
                  setInstituteType({
                    ...instituteType,
                    coachingInstitute: checked === true,
                  })
>>>>>>> dev
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="coachingInstitute"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Coaching Institute
                </label>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="trainingInstitute"
                checked={instituteType.trainingInstitute}
                onCheckedChange={(checked) =>
<<<<<<< HEAD
                  setInstituteType({ ...instituteType, trainingInstitute: checked === true })
=======
                  setInstituteType({
                    ...instituteType,
                    trainingInstitute: checked === true,
                  })
>>>>>>> dev
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="trainingInstitute"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Training Institute
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 space-y-3">
            <div className="font-semibold text-xl">Mode Of Instruction</div>
            <div className="h-1 w-full bg-gray-300/90 relative">
              <div
                className="h-1 bg-orange-600 absolute left-0 rounded-lg"
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="online"
                checked={instructionMode.online}
                onCheckedChange={(checked) =>
<<<<<<< HEAD
                  setInstructionMode({ ...instructionMode, online: checked === true })
=======
                  setInstructionMode({
                    ...instructionMode,
                    online: checked === true,
                  })
>>>>>>> dev
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="online"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Online
                </label>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="offline"
                checked={instructionMode.offline}
                onCheckedChange={(checked) =>
<<<<<<< HEAD
                  setInstructionMode({ ...instructionMode, offline: checked === true })
=======
                  setInstructionMode({
                    ...instructionMode,
                    offline: checked === true,
                  })
>>>>>>> dev
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="offline"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Offline
                </label>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          {/* Apply Filter Button */}
          <Button
            onClick={handleFilterButtonClick}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          >
            Apply Filters
          </Button>
=======
>>>>>>> dev
        </div>

        {/* Content area */}
        <div className="flex flex-col space-y-5 p-4 md:p-10 w-full">
          {/* Navigation buttons */}
          <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-3 space-y-3 md:space-y-0 md:space-x-4 lg:space-x-20">
            <div className="w-full md:w-[13rem]">
              <Button
                className={`flex items-center justify-center gap-2 w-full p-1.5 px-3 rounded-md 
<<<<<<< HEAD
                    ${activeButton === "all"
                    ? "bg-orange-600/90 text-white hover:bg-orange-600/90"
                    : "bg-gray-200 text-black hover:bg-gray-300 "
                  }
=======
                    ${
                      activeButton === "all"
                        ? "bg-orange-600/90 text-white hover:bg-orange-600/90"
                        : "bg-gray-200 text-black hover:bg-gray-300 "
                    }
>>>>>>> dev
                  `}
                onClick={() => setActiveButton("all")}
              >
                All Business
              </Button>
<<<<<<< HEAD
            </div>
            <div className="w-full md:w-[13rem]">
              <Button
                className={`flex items-center justify-center w-full gap-2 p-1.5 px-3 rounded-md
                    ${activeButton === "location"
                    ? "bg-orange-600/90 text-white hover:bg-orange-600/90"
                    : "bg-gray-200 text-black hover:bg-gray-300 "
                  }
                  `}
                onClick={() => setActiveButton("location")}
              >
                Filter Location
              </Button>
            </div>
            <div className="w-full md:w-[13rem]">
              <Button
                className={`flex items-center justify-center w-full gap-2 p-1.5 px-3 rounded-md
                    ${activeButton === "category"
                    ? "bg-orange-600/90 text-white hover:bg-orange-600/90"
                    : "bg-gray-200 text-black hover:bg-gray-300 "
                  }
                  `}
                onClick={() => setActiveButton("category")}
              >
                Filter Category
              </Button>
            </div>
=======
            </div>
            <div className="w-full md:w-[13rem]">
              <Button
                className={`flex items-center justify-center w-full gap-2 p-1.5 px-3 rounded-md
                    ${
                      activeButton === "location"
                        ? "bg-orange-600/90 text-white hover:bg-orange-600/90"
                        : "bg-gray-200 text-black hover:bg-gray-300 "
                    }
                  `}
                onClick={() => setActiveButton("location")}
              >
                Filter Location
              </Button>
            </div>
            <div className="w-full md:w-[13rem]">
              <Button
                className={`flex items-center justify-center w-full gap-2 p-1.5 px-3 rounded-md
                    ${
                      activeButton === "category"
                        ? "bg-orange-600/90 text-white hover:bg-orange-600/90"
                        : "bg-gray-200 text-black hover:bg-gray-300 "
                    }
                  `}
                onClick={() => setActiveButton("category")}
              >
                Filter Category
              </Button>
            </div>
>>>>>>> dev
          </div>

          {/* Institute listings */}
          <div>
            {filteredInstitutes.length > 0 ? (
              <div className="space-y-4">
                {filteredInstitutes.map((institute) => (
                  <div
                    key={institute.id}
                    className="bg-white rounded-lg shadow-md p-4 md:p-8 flex flex-col"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      {/* Logo */}
                      <Link href="/institute" target="_blank">
                        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 mx-auto md:mx-0">
                          <div className="relative w-full h-full">
                            <Image
                              src={institute.logo}
                              alt={`${institute.name} logo`}
                              width={96}
                              height={96}
                              className="rounded-md object-cover"
                            />
                          </div>
                        </div>
                      </Link>

                      {/* Institute info */}
                      <div className="flex-grow">
                        <div className="border-b-2 border-b-orange-600/90">
                          <Link href="/institute" target="_blank">
                            <h2 className="text-base md:text-lg font-semibold text-gray-800 flex items-center">
                              {institute.name}
                            </h2>
                          </Link>
                          <p className="text-xs md:text-sm text-gray-600 mb-2 flex items-center">
                            {institute.description}
                          </p>
                        </div>

                        <div className="flex items-start mt-2">
                          <div className="text-red-500 mt-1 mr-2 flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-geo-alt-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-700 mt-1">
                            {institute.address}
                          </p>
                        </div>

                        {/* Additional info badges */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
<<<<<<< HEAD
                            {institute.type === "coaching" ? "Coaching Institute" : "Training Institute"}
=======
                            {institute.type === "coaching"
                              ? "Coaching Institute"
                              : "Training Institute"}
>>>>>>> dev
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {institute.fee === "full" ? "Full Fee" : "Term Fee"}
                          </span>
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {institute.mode === "online" ? "Online" : "Offline"}
                          </span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center md:ml-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-start">
                        <div className="flex">
                          {[...Array(institute.maxRating)].map((_, i) => (
                            <svg
                              key={i}
<<<<<<< HEAD
                              className={`w-4 h-4 ${i < institute.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                                }`}
=======
                              className={`w-4 h-4 ${
                                i < institute.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
>>>>>>> dev
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
<<<<<<< HEAD
                        <p className="ml-1 w-10 text-sm text-gray-500">
=======
                        <p className="ml-1 text-sm text-gray-500">
>>>>>>> dev
                          {institute.rating} of {institute.maxRating}
                        </p>
                      </div>
                    </div>

                    {/* Contact buttons */}
<<<<<<< HEAD

=======
>>>>>>> dev
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-10 text-center">
<<<<<<< HEAD
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mt-4">No institutes found</h3>
                <p className="text-gray-500 mt-2">
                  No institutes match your current filter criteria. Please try adjusting your filters.
=======
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mt-4">
                  No institutes found
                </h3>
                <p className="text-gray-500 mt-2">
                  No institutes match your current filter criteria. Please try
                  adjusting your filters.
>>>>>>> dev
                </p>
                <Button
                  className="mt-4 bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => {
                    setActiveButton("all");
                    setStarRating("default");
                    setFeeCollection({ fullFee: false, termFee: false });
<<<<<<< HEAD
                    setInstituteType({ coachingInstitute: false, trainingInstitute: false });
=======
                    setInstituteType({
                      coachingInstitute: false,
                      trainingInstitute: false,
                    });
>>>>>>> dev
                    setInstructionMode({ online: false, offline: false });
                    applyFilters();
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBusiness;
