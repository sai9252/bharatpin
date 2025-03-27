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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { BiCategory } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { SearchCheck, Quote, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import Slider from "react-slick";

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
              layout="fill"
              objectFit="contain"
            />
          ) : (
            <Image
              src={card.imageSrc}
              alt={card.name}
              layout="fill"
              objectFit="cover"
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
  };

  return (
    <div className="poppins space-y-5 mt-5">
      <div className="flex h-[18rem] gap-4 justify-center">
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

      <div className="flex flex-col space-y-10 mx-5">
        <div>
          {/* Small screens (2 columns, 3 rows) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300  hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                  <Image
                    src={getImageUrl(category.icon)}
                    alt={`${category.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Medium screens (3 columns, 2 rows) */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300  hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                  <Image
                    src={getImageUrl(category.icon)}
                    alt={`${category.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 text-sm">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Large screens (6 columns, 1 row) */}
          <div className="hidden lg:flex justify-between items-center">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                  <Image
                    src={getImageUrl(category.icon)}
                    alt={`${category.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large screens (6 columns, 1 row) */}
        <div className="hidden lg:flex justify-between items-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]">
                <Image
                  src={getImageUrl(category.icon)}
                  alt={`${category.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-3 text-sm">{category.name}</span>
            </div>
          ))}
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

        <div  className="w-full m-auto">
        <Slider {...settings} className="bg-gray-200/90 p-3 rounded-xl">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 md:w-40 w-48 border  border-gray-300 bg-gray-100 p-2 pb-8 rounded-2xl space-y-3"
              >
                <Image
                  src={slam}
                  alt="Slam Logo"
                  className="w-52 h-40 rounded-2xl"
                />
                <p className="underline text-sm break-words">{card.username}</p>
                <a href="/Explore" className="flex gap-1 text-sm items-center">
                  Explore more
                  <MoveRight
                    className="text-orange-600 flex items-center"
                    size={16}
                  />
                </a>
              </div>
            ))}
            </Slider>
          </div>

      <div className="flex justify-between items-center pt-5">
        <h1 className="md:text-2xl text-xl  font-semibold">Popular Cities</h1>
        <Link href="/Explore" className="flex gap-1 ">
          Explore more
          <MoveRight className="text-orange-600 flex items-center" />
        </Link>
      </div>

      <div className="flex items-center justify-evenly relative md:p-10 border border-gray-300 rounded-2xl">
        <div className="flex justify-center">
          <div className="md:w-40 md:h-40 w-20 h-20 rounded-full bg-teal-200 bg-opacity-30 absolute md:mr-32 mr-16"></div>
          <Image
            src={city}
            alt="city Logo"
            className="md:w-60 md:h-60 w-30 h-30 m-5 relative "
          />
        </div>
        <div className="md:flex justify-around w-[60%] space-y-5 ">
          <div className="flex md:flex-col items-center md:justify-center md:space-y-10  justify-around py-5 ">
            <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
              Hyderabad
              <span className="md:text-[18px] text-[14px] text-orange-600/90 font-medium">
                790 lisitings
              </span>
            </p>
            <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
              Pune
              <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                615 lisitings
              </span>
            </p>
          </div>
          <div className="flex md:flex-col items-center md:justify-center md:space-y-10 justify-around ">
            <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
              Mumbai
              <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                529 lisitings
              </span>
            </p>
            <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
              Banglore
              <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                1597 lisitings
              </span>
            </p>
          </div>
          <div className="flex md:flex-col items-center md:justify-center md:space-y-10  justify-around py-5 ">
            <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
              Kolkota
              <span className="md:text-[18px] text-[14px]  text-orange-600/90  font-medium">
                629 lisitings
              </span>
            </p>
            <p className="flex flex-col font-semibold lg:text-2xl md:text-xl text-md items-center gap-2">
              New Delhi
              <span className="md:text-[18px] text-[14px] text-orange-600/90  font-medium">
                734 lisitings
              </span>
            </p>
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
              className="absolute rotate-180 left-30 md:left-40 lg:left-55 "
            />
            <Image
              src={finalw}
              alt="FinalW Logo"
              className="object-contain lg:w-[18rem] md:w-[14rem] w-[10rem] border-2 border-yellow-400 rounded-t-full "
            />
          </div>
          <div className="flex justify-center items-center md:w-1/3 p-4">
            <p className="flex font-semibold flex-col text-center">
              <span className="lg:text-4xl md:text-3xl sm:text-2xl text-xl ">
                TOP RATED
              </span>
              <span className="font-normal lg:text-lg md:text-base sm:text-sm text-xs md:mt-2 mt-0 px-4">
                Love fiercely, live fully, and embrace every moment as if it
                were your last. In the tapestry of life, make every thread
                count.
              </span>
            </p>
          </div>
          <div className="flex flex-row md:flex-col lg:flex-row gap-6 justify-center items-center">
            <div className="border border-gray-300 rounded-full p-2 md:p-3 lg:p-4 h-20 w-20 md:h-25 md:w-25 lg:h-30 lg:w-30 flex items-center justify-center">
              <Image
                src={preksis}
                alt="Preksis Logo"
                width={80}
                height={80}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
            <div className="border border-gray-300 rounded-full p-2 md:p-3 lg:p-4 h-20 w-20 md:h-25 md:w-25 lg:h-30 lg:w-30 flex items-center justify-center">
              <Image
                src={ips}
                alt="IPS Logo"
                width={80}
                height={80}
                className="w-3/4 h-3/4 object-contain rounded-full"
              />
            </div>
            <div className="border border-gray-300 rounded-full p-2 md:p-3 lg:p-4 h-20 w-20 md:h-25 md:w-25 lg:h-30 lg:w-30 flex items-center justify-center">
              <Image
                src={ips}
                alt="IPS Logo"
                width={80}
                height={80}
                className="w-3/4 h-3/4 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
