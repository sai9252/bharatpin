"use client";

import React, { useEffect, useState, useRef } from "react";
import teach from "@/public/teaching.png";
import boy from "@/public/boy.jpg";
import hospital from "@/public/Hospital.jpg";
import house from "@/public/house.png";
import paper from "@/public/paper.png";
import ring from "@/public/ring.jpg";
import slam from "@/public/Slam.jpg";
import city from "@/public/city.jpg";
import home from "@/public/home.png";
import man from "@/public/man.webp";
import wbook from "@/public/WBook.jpg";
import finalw from "@/public/finalW.jpg";
import ips from "@/public/ips.png";
import preksis from "@/public/preksis.png";
import blackstars from "@/public/blackstars.png";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";
import hyderabad from "@/public/hyderabad.png";
import chennai from "@/public/chennai.png";
import delhi from "@/public/delhi.png";
import banglore from "@/public/banglore.png";
import mumbai from "@/public/mumbai.png";
import kolkata from "@/public/kolkata.png";

import {
  Select,

} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { BiCategory } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { SearchCheck, Quote, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoLocationSharp } from "react-icons/io5";

const AnimatedCounter = ({
  end,
  duration = 3000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = null;
    countRef.current = 0;
    setCount(0);

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;

      if (progress < duration) {
        // Easing function for smoother animation
        const easeOutQuad = (t: number) => t * (2 - t);
        const easedProgress = easeOutQuad(progress / duration);

        countRef.current = Math.floor(easedProgress * end);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        countRef.current = end;
        setCount(end);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const getImageUrl = (iconName: string) => {
  switch (iconName) {
    case "teach":
      return teach;
    case "boy":
      return boy;
    case "hospital":
      return hospital;
    case "house":
      return house;
    case "paper":
      return paper;
    case "ring":
      return ring;
    default:
      return "";
  }
};

interface Card {
  id: number;
  name: string;
  location: string;
  stars: number;
  imageSrc: string;
  dark: boolean;
}

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Sample data - in a real app, you would pass this as props
  const cards = [
    { id: 1, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 2, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 3, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 4, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 5, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 6, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 7, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 8, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 9, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 10, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 11, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 12, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 13, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 14, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
    { id: 15, username: "@rgierigierimgiprmmgpmdgdfgdnsgngfsj" },
  ];

  // Updated data with gym properties matching the image
  const Viewcards = [
    {
      id: 1,
      name: "Cult.Fit - Powai(en)",
      location: "Powai, Mumbai",
      stars: 5,
      imageSrc: "/view1.jpg",
      width: 300, // Define width
      height: 200,
      dark: true,
    },
    {
      id: 2,
      name: "Smith's Sanctuary - Satkriti",
      location: "Hebbal, Bangalore",
      stars: 5,
      imageSrc: "/view2.jpg",
      width: 300, // Define width
      height: 200,
      dark: false,
    },
    {
      id: 3,
      name: "TAIBB Fitness",
      location: "Andheri West, Mumbai",
      stars: 4,
      imageSrc: "/view3.jpg",
      width: 300, // Define width
      height: 200,
      dark: true,
    },
    {
      id: 4,
      name: "Power Gym",
      location: "Goregaon East, Pune",
      stars: 5,
      imageSrc: "/view3.jpg",
      width: 300, // Define width
      height: 200,
      dark: false,
    },
    // Add more gyms for continuous scrolling
    {
      id: 5,
      name: "Fitness Hub",
      location: "Koramangala, Bangalore",
      stars: 4,
      imageSrc: "/view2.jpg",
      width: 300, // Define width
      height: 200,
      dark: false,
    },
    {
      id: 6,
      name: "Elite Workout Center",
      location: "Bandra, Mumbai",
      stars: 5,
      imageSrc: "/view1.jpg",
      width: 300, // Define width
      height: 200,
      dark: true,
    },
  ];

  const categories = [
    { id: 1, name: "Coaching Institutes", icon: "teach" },
    { id: 2, name: "Collages", icon: "boy" },
    { id: 3, name: "Hospitals & Clinics", icon: "hospital" },
    { id: 4, name: "Restaurants", icon: "house" },
    { id: 5, name: "Packers and Movers", icon: "paper" },
    { id: 6, name: "Jewellery Shops", icon: "ring" },
    { id: 7, name: "Coaching Institutes", icon: "teach" },
    { id: 8, name: "Collages", icon: "boy" },
    { id: 9, name: "Hospitals & Clinics", icon: "hospital" },
    { id: 10, name: "Restaurants", icon: "house" },
    { id: 11, name: "Coaching Institutes", icon: "teach" },
    { id: 12, name: "Collages", icon: "boy" },
    { id: 13, name: "Hospitals & Clinics", icon: "hospital" },
    { id: 14, name: "Restaurants", icon: "house" },
    { id: 15, name: "Packers and Movers", icon: "paper" },
    { id: 16, name: "Jewellery Shops", icon: "ring" },
    { id: 17, name: "Coaching Institutes", icon: "teach" },
    { id: 18, name: "Collages", icon: "boy" },
    { id: 19, name: "Hospitals & Clinics", icon: "hospital" },
    {
      id: 20,
      name: "View More",
      component: (
        <>
          {/* Small and medium screens: first icon */}
          <IoChevronDownCircleOutline className="lg:hidden w-8 h-8" />

          {/* Large screens and up: second icon */}
          <FiArrowRightCircle className="hidden lg:block w-8 h-8" />
        </>
      ),
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId: number;
    let startTime: number | null = null;

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Scroll 1px every 30ms (adjust for faster/slower scrolling)
      const position = (elapsed / 30) % (scrollContainer?.scrollWidth || 1);

      // Reset position when we reach the end to create infinite effect
      if (
        scrollContainer &&
        scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 1
      ) {
        scrollContainer.scrollLeft = 0;
        startTime = timestamp;
      } else {
        if (scrollContainer) {
          scrollContainer.scrollLeft = position;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      startTime = null;
      animationId = requestAnimationFrame(scroll);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationId);

      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.disconnect();
      }
    };
  }, []);

  const stats = [
    { icon: GoShieldCheck, value: 5564, label: "TRUSTED BUSINESS" },
    { icon: BiCategory, value: 41, label: "CATEGORIES" },
    { icon: IoLocationOutline, value: 2193, label: "LOCATIONS" },
    { icon: SearchCheck, value: 598, label: "SEARCH KEYWORDS" },
  ];

  // Render stars based on rating
  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }
        />
      ));
  };

  const renderCard = (card: Card, isDuplicate: boolean = false) => (
    <div
      key={isDuplicate ? `dup-${card.id}` : card.id}
      className="flex-shrink-0 w-60 mx-2 bg-white rounded-lg overflow-hidden shadow border border-gray-200"
    >
      <div className="relative w-full h-32">
        <div
          className={`absolute inset-0 ${card.dark ? "bg-gray-900" : "bg-white"
            } flex items-center justify-center`}
        >
          {card.dark ? (
            <Image
              src={card.imageSrc}
              alt={card.name}
              fill
              style={{ objectFit: "contain" }}
            />
          ) : (
            <Image
              src={card.imageSrc}
              alt={card.name}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-sm truncate">{card.name}</h3>
        <p className="text-gray-500 text-xs mb-2">{card.location}</p>

        <div className="flex items-center">{renderStars(card.stars)}</div>
      </div>
    </div>
  );

  return (
    <div className="poppins space-y-5 mt-5">
      <div className="md:flex hidden h-[18rem] gap-4 justify-center">
        {/* Large Image (Takes 50% width) */}
        <div className="lg:flex-[2] md:hidden lg:flex sm:flex w-full items-center relative justify-center">
          <Image
            src={home}
            alt="Home Logo"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="lg:w-60 md:w-50 md:h-26 w-40 h-20 bg-white rounded-t-3xl flex absolute rounded-br-3xl shadow-lg bottom-5 left-5">
            <p className=" md:text-lg text-sm p-3">
              Looking for <br />{" "}
              <span className=" font-semibold">Interior Design</span> <br />
              <span className="text-[16px] text-orange-600 font-normal">
                Book Now
              </span>
            </p>
          </div>
        </div>
        

        {/* Smaller Image 1 (Takes 25% width) */}
        <div className="lg:flex-1 md:flex items-center justify-center md:relative hidden">
          <Image
            src={wbook}
            alt="Work Logo"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-0 left-4 rounded-b-2xl bg-orange-600 text-white w-28 flex items-center justify-center shadow-lg">
            <p className="p-2">Education</p>
          </div>
        </div>

        {/* Smaller Image 2 (Takes 25% width) */}
        <div className="lg:flex-1 md:flex items-center justify-center md:relative hidden">
          <Image
            src={man}
            alt="Man Logo"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-0 left-4 rounded-b-2xl bg-orange-600 text-white w-28 flex items-center justify-center shadow-lg">
            <p className="p-2">Real Estate</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-md p-4 md:p-8 flex flex-col space-y-5">
        <div className="text-2x md:text-3xl font-semibold md:flex hidden">
          <h1>
            India&apos;s Best Local Search{" "}
            <span className="text-orange-600/90">Engine</span>
          </h1>
        </div>
       
        <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-5">
        <div className="md:flex flex-col lg:flex-row space-y-2 ">
          <div className="space-y-2 md:flex space-x-4 h-full items-center">
        <Select>
          <div className="flex justify-center items-center border rounded-lg px-2">
        <IoLocationSharp />
            <Input
              className="w-full md:w-[250px] border-0"
              placeholder="Select Location"
              />
              </div>
          </Select>

          <Select>
          <div className="flex justify-center items-center border rounded-lg px-2">
            <Input
              className="w-full md:w-[250px]  border-0"
              placeholder="Type Something...."
            />
            </div>
          </Select>
          </div>
          <div className="flex items-center justify-center md:justify-start md:items-start pt-1 w-full">
          <Button className="w-40 bg-orange-600/90 text-white hover:bg-orange-600/90 cursor-pointer">Search</Button>
          </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-10 mx-5 ">
        <div className="">
          {/* Small screens (2 columns, 3 rows) */}
          <div className="grid grid-cols-5 gap-4 md:hidden ">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center text-center justify-top cursor-pointer "
              >
                {category.component ? (
                  <div className="text-xs flex flex-col items-center text-center justify-top gap-3 cursor-pointer mr-4 ">
                    <div className="w-10 h-10 border  border-gray-400 rounded-full p-[3px]  shadow-md transition-shadow duration-300 hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                      {category.component}
                    </div>
                    {category.name}
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12  border border-gray-400 rounded-lg p-2 shadow-md transition-shadow duration-300  hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                      <Image
                        src={getImageUrl(category.icon)}
                        alt={`${category.name} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs">{category.name}</span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Medium screens (4 columns, 2 rows) */}
          <div className="hidden md:grid lg:hidden grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center text-center justify-top cursor-pointer"
              >
                {category.component ? (
                  <div className="text-sm flex flex-col items-center text-center justify-center gap-3 cursor-pointer mr-4 mt-3 ">
                    <div className="w-11 h-11 border  border-gray-400 rounded-full p-[5px]  shadow-md transition-shadow duration-300 hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                      {category.component}
                    </div>
                    {category.name}
                  </div>
                ) : (
                  <>
                    <div className="w-18 h-18 border border-gray-400  rounded-lg p-5 shadow-md transition-shadow duration-300  hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                      <Image
                        src={getImageUrl(category.icon)}
                        alt={`${category.name} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm">{category.name}</span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Large screens (6 columns, 1 row) */}
          <div className="hidden lg:grid grid-cols-10 justify-center space-x-4 p-3 space-y-6 items-center">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center text-center justify-top h-[8rem]  cursor-pointer"
              >
                {category.component ? (
                  <div className="text-sm flex flex-col items-center text-center justify-top gap-2 cursor-pointer mr-8  ">
                    <div className="w-14 h-14 border  border-gray-400 rounded-full p-[11px]  shadow-md transition-shadow duration-300 hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                      {category.component}
                    </div>
                    {category.name}
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 border  border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                      <Image
                        src={getImageUrl(category.icon)}
                        alt={`${category.name} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm">{category.name}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="flex justify-between items-center border border-gray-300 rounded-md md:p-8 p-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex flex-col items-center space-y-3">
              <Icon className="md:w-8 md:h-6 w-6 h-6" />
              <h1 className="md:text-2xl text-lg font-semibold">
                {isVisible ? <AnimatedCounter end={stat.value} /> : 0}
              </h1>
              <div className="md:text-sm text-xs text-gray-600 font-medium text-center">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="md:text-2xl text-xl font-semibold">Recent Comments</h1>

      <div className="md:flex justify-center lg:gap-8 md:gap-3 relative md:space-y-0 space-y-3 p-5 lg:p-10 bg-[#ea580c] rounded-xl">
        <div className="bg-white flex lg:p-5 p-4 rounded-t-4xl rounded-br-4xl">
          <Quote className="w-15 h-15 pt-4 rotate-180" />
          <p className="p-3 flex flex-col space-y-3">
            <span className="md:text-md lg:text-lg text-sm">
              Best schools for kids.Their methods are unique.Supportive and
              motivating teachers
            </span>
            <span className="font-semibold md:text-lg text-md">
              Kalki Saaho
            </span>
            <span>****</span>
            <span>@............setrdtfygchkguks</span>
          </p>
        </div>
        <div className="bg-white flex lg:p-5 p-4 rounded-t-4xl rounded-br-4xl">
          <Quote className="w-15 h-15 pt-4 rotate-180" />
          <p className="p-3 flex flex-col space-y-3">
            <span className="md:text-md lg:text-lg text-sm">
              Best schools for kids.Their methods are unique.Supportive and
              motivating teachers
            </span>
            <span className="font-semibold md:text-lg text-md">
              Kalki Saaho
            </span>
            <span>****</span>
            <span>@............setrdtfygchkguks</span>
          </p>
        </div>
      </div>

      <h1 className=" md:text-2xl text-xl  font-semibold">Recent Listed</h1>

      <div className="w-full m-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="w-[50rem]" >
            {cards.map((card, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="w-56">
                  <Card className="w-56">
                    <CardContent className="flex aspect-square items-center justify-center w-56">
                      <div
                        key={card.id}
                        className="flex-shrink-0 md:w-44 w-48 border  border-gray-300 bg-gray-100 p-2 pb-8 rounded-2xl space-y-3"
                      >
                        <Image
                          src={slam}
                          alt="Slam Logo"
                          className="w-52 h-40 rounded-2xl"
                        />
                        <p className="underline text-sm break-words">
                          {card.username}
                        </p>
                        <a
                          href="/Explore"
                          className="flex gap-1 text-sm items-center"
                        >
                          Explore more
                          <MoveRight
                            className="text-orange-600 flex items-center"
                            size={16}
                          />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex justify-between items-center pt-5">
        <h1 className="md:text-2xl text-xl  font-semibold">Popular Cities</h1>
        <Link href="/Explore" className="flex gap-1 ">
          Explore more
          <MoveRight className="text-orange-600 flex items-center" />
        </Link>
      </div>

      <div className="flex items-center justify-evenly relative  border border-gray-300 rounded-2xl">
        <div className="flex justify-center">
          <div className="md:w-40 md:h-40 w-20 h-20 rounded-full bg-teal-200 bg-opacity-30 absolute md:mr-32 mr-16"></div>
          <Image
            src={city}
            alt="city Logo"
            className="md:w-60 md:h-60 w-30 h-30 m-5 relative "
          />
        </div>
        <div className=" w-[60%] flex md:flex-col pb-5">
          <div className="flex w-full ">
            <div className="flex w-full flex-col md:flex-row items-top md:space-y-12 justify-evenly ">
              <div className="flex flex-col items-center justify-center  pt-10">
                <Image src={hyderabad} alt="hyd logo" width={80} height={80} className=""/>
                <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
                  Hyderabad
                  <span className="md:text-[18px] text-[14px] text-orange-600/90 font-medium">
                    790 lisitings
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center justify-center mt-7">
                <Image
                  src={mumbai}
                  alt="mumbai logo"
                  width={60}
                  height={80}
                  className="mt-8"
                />
                <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
                  Mumbai
                  <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                    529 lisitings
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center justify-center md:pt-3 pt-15">
                <Image src={delhi} alt="delhi logo" width={60} height={80} />
                <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
                  New Delhi
                  <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                    734 lisitings
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="md:flex flex-col md:flex-row w-full  items-top md:space-y-12  justify-evenly">
              <div className="flex flex-col items-center justify-center md:pt-17 pt-15">
                <Image src={chennai} alt="pune logo" width={60} height={80} />
                <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
                  Chennai
                  <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                    615 lisitings
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center justify-center md:mt-14.5 mt-12.5">
                <Image
                  src={banglore}
                  alt="banglore logo"
                  width={70}
                  height={80}
                />
                <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
                  Banglore
                  <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                    1597 lisitings
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center justify-center md:mt-0 mt-10">
                <Image
                  src={kolkata}
                  alt="kolkata logo"
                  width={80}
                  height={80}
                />
                <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
                  Kolkota
                  <span className="md:text-[18px] text-[14px]  text-orange-600/90  font-medium">
                    629 lisitings
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="md:text-3xl text-xl  font-semibold">Recent Views</h1>

      <div className="relative w-full overflow-hidden py-4 bg-gray-100">
        {/* The outer container with hidden overflow */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* First set of cards */}
          {Viewcards.map((card) => renderCard(card))}

          {/* Duplicate cards to create seamless infinite scroll effect */}
          {Viewcards.map((card) => renderCard(card, true))}
        </div>

        {/* Fade effect on edges */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative py-2">
        <div className="flex flex-col md:flex-row border border-gray-300 p-5 lg:p-16 justify-center items-center rounded-lg md:gap-10 gap-3">
          <div className="h-5 w-5 rounded-full bg-red-500 absolute top-0 lg:left-45 md:left-40 left-20 "></div>
          <div className="h-5 w-5 rounded-full bg-red-500 absolute bottom-0 lg:right-45 md:right-40 right-20"></div>
          <div className="h-5 w-5 rounded-full border bg-white border-gray-400 absolute bottom-0 lg:right-55 md:right-50 right-30"></div>
          <div className="h-5 w-5 rounded-full border border-gray-400 absolute bg-white top-0 lg:left-55 md:left-50 left-30"></div>
          <div className="relative">
            <Image
              src={blackstars}
              alt="stars Logo"
              className="absolute rotate-180 left-30 md:left-40 lg:left-60  "
            />
            <Image
              src={finalw}
              alt="FinalW Logo"
              className="w-[10rem] sm:w-[12rem] md:w-[14rem] lg:w-[18rem] xl:w-[20rem] border border-yellow-400 rounded-t-full "
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/3 p-2 sm:p-4">
          <div className="flex font-semibold flex-col text-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">TOP RATED</span>
            <span className="font-normal text-xs sm:text-sm md:text-base lg:text-lg mt-1 md:mt-2 px-2 sm:px-4">
              Love fiercely, live fully, and embrace every moment as if it were your last. In the tapestry of life, make
              every thread count.
            </span>
          </div>
        </div>
        
          <div className="flex flex-row md:flex-col lg:flex-row gap-6 justify-center items-center">
            <div className="border border-gray-300 rounded-full p-2 md:p-3 lg:p-4 h-25 w-25 md:h-30 md:w-30 lg:h-40 lg:w-40  flex items-center justify-center">
              <Image
                src={preksis}
                alt="Preksis Logo"
                width={80}
                height={80}
                className="md:w-30 md:h-30 w-20 h-20 object-contain md:ml-5 ml-3 "
              />
            </div>
            <div className="border border-gray-300 rounded-full p-2 md:p-3 lg:p-4 h-25 w-25 md:h-30 md:w-30 lg:h-40 lg:w-40  flex items-center justify-center">
              <Image
                src={ips}
                alt="IPS Logo"
                width={80}
                height={80}
                className="md:w-30 md:h-30 w-20 h-20 object-contain rounded-full"
              />
            </div>
            <div className="border border-gray-300 rounded-full p-2 md:p-3 lg:p-4 h-25 w-25 md:h-30 md:w-30 lg:h-40 lg:w-40 flex items-center justify-center">
              <Image
                src={ips}
                alt="IPS Logo"
                width={100}
                height={100}
                className="md:w-30 md:h-30 w-20 h-20 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
