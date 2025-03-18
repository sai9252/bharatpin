'use client'

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

const AnimatedCounter = ({ end, duration = 3000 }: { end: number; duration?: number }) => {
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
      if (scrollContainer && scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 10) {
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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
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

  interface Card {
    id: number;
    name: string;
    location: string;
    stars: number;
    imageSrc: string;
    dark: boolean;
  }

  const renderCard = (card: Card, isDuplicate: boolean = false) => (
    <div
      key={isDuplicate ? `dup-${card.id}` : card.id}
      className="flex-shrink-0 w-64 mx-2 bg-white rounded-lg overflow-hidden shadow border border-gray-200"
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


  return (
    <div className="poppins space-y-5 mt-5">
      <div className="flex h-[20rem] gap-4">
        {/* Large Image (Takes 50% width) */}
        <div className="flex-[2] flex items-center relative justify-center">
          <Image
            src={home}
            alt="Home Logo"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className=" w-60 h-26 bg-white rounded-t-3xl flex absolute rounded-br-3xl shadow-lg bottom-4 left-4">
            <p className=" text-lg p-4 ">
              Looking for <br />{" "}
              <span className=" font-semibold">Interior Design</span> <br />
              <span className="text-[16px] text-orange-600 font-normal">
                Book Now
              </span>
            </p>
          </div>
        </div>

        {/* Smaller Image 1 (Takes 25% width) */}
        <div className="flex-1 flex items-center justify-center relative">
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
        <div className="flex-1 flex items-center justify-center relative">
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

      <div className="border border-gray-300 rounded-md p-8 flex flex-col space-y-5">
        <div className="text-3xl font-semibold">
          <h1>
            India&apos;s Best Local Search{" "}
            <span className="text-orange-600">Engine</span>
          </h1>
        </div>
        <div className="flex space-x-10">
          <Select>
            <SelectTrigger className="w-[250px]">
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
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Enter Locaton" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">1</SelectItem>
                <SelectItem value="banana">2</SelectItem>
                <SelectItem value="blueberry">3</SelectItem>
                <SelectItem value="grapes">4</SelectItem>
                <SelectItem value="pineapple">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className="w-52">Search</Button>
        </div>
      </div>

      <div className="flex flex-col space-y-10 mx-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center text-sm gap-3 ">
            <Image
              src={teach}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]"
            />
            Coaching Institutes
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={boy}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)] "
            />
            Collages
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={hospital}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]  "
            />
            Hospitals & Clinics
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={house}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]  hover:drop-shadow-lg"
            />
            Restaurants
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={paper}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]  hover:drop-shadow-lg"
            />
            Packers and Movers
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image

              src={ring}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)] "
            />
            Jewellery Shops
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center text-sm gap-3 ">
            <Image
              src={teach}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)] "
            />
            Coaching Institutes
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={boy}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)] "
            />
            Collages
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={hospital}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]  "
            />
            Hospitals & Clinics
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={house}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]  hover:drop-shadow-lg"
            />
            Restaurants
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={paper}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)]  hover:drop-shadow-lg"
            />
            Packers and Movers
          </div>
          <div className="flex flex-col items-center text-sm gap-3">
            <Image
              src={ring}
              alt="Coaching Logo"
              className="w-25 h-25 border border-gray-400 rounded-lg p-5 shadow-md transition-shadow duration-300 
               hover:shadow-[6px_6px_12px_rgba(255,100,100,0.3)] "
            />
            Jewellery Shops
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="flex justify-between items-center border border-gray-300 rounded-md p-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex flex-col items-center space-y-3">
              <Icon className="w-8 h-6" />
              <h1 className="text-2xl font-semibold">
                {isVisible ? <AnimatedCounter end={stat.value} /> : 0}
              </h1>
              <div className="text-sm text-gray-600 font-medium text-center">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="text-3xl font-semibold">Recent Comments</h1>

      <div className="flex items-center gap-8 p-10 bg-[#ea580c] rounded-xl">
        <div className="bg-white flex p-5 rounded-t-4xl rounded-br-4xl">
          <Quote className="w-15 h-15 rotate-180" />
          <p className="p-3 flex flex-col space-y-3">
            <span className="text-lg">
              Best schools for kids.Their methods are unique.Supportive and
              motivating teachers
            </span>
            <span className="font-semibold text-lg">Kalki Saaho</span>
            <span>****</span>
            <span>@............setrdtfygchkguks</span>
          </p>
        </div>
        <div className="bg-white flex p-5 rounded-t-4xl rounded-br-4xl">
          <Quote className="w-15 h-15 rotate-180" />
          <p className="p-3  flex flex-col space-y-3">
            <span className="text-xl">
              Best schools for kids.Their methods are unique.Supportive and
              motivating teachers
            </span>
            <span className="font-semibold text-xl">Kalki Saaho</span>
            <span>****</span>
            <span>@............setrdtfygchkguks</span>
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-semibold">Recent Listed</h1>

      <div className="w-full overflow-hidden py-4">
        {/* The outer container with hidden overflow */}
        <div className="flex w-full items-center">

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth mx-10  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          >
            <div className="flex gap-3 p-3">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 w-52 mx-4 border border-gray-300 bg-gray-100 p-2 pb-8 rounded-2xl space-y-3"
                >
                  <Image
                    src={slam}
                    alt="Slam Logo"
                    className="w-52 h-40 rounded-2xl"
                  />
                  <p className="underline text-sm break-words">
                    {card.username}
                  </p>
                  <a href="/Explore" className="flex gap-1 text-sm items-center">
                    Explore more
                    <MoveRight
                      className="text-orange-600 flex items-center"
                      size={16}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Optional fade effect on edges */}

      </div>

      <div className="flex justify-between items-center pt-5">
        <h1 className="text-3xl font-semibold">Popular Cities</h1>
        <Link href="/Explore" className="flex gap-1 ">
          Explore more
          <MoveRight className="text-orange-600 flex items-center" />
        </Link>
      </div>

      <div className="flex items-center justify-evenly p-10 border border-gray-300 rounded-2xl">
        <div className="w-80 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-teal-200 bg-opacity-30 absolute mr-32 "></div>
          <Image src={city} alt="city Logo" className="w-60 h-60 m-5 relative" />
        </div>
        <div className="flex justify-around w-[60%]">
          <div className="flex flex-col justify-between space-y-10 p-5">
            <p className="flex flex-col font-semibold text-2xl items-center gap-2">
              Hyderabad
              <span className="text-[18px] text-orange-600 font-normal">
                790 lisitings
              </span>
            </p>
            <p className="flex flex-col font-semibold text-2xl items-center gap-2">
              Pune
              <span className="text-[18px] text-orange-600 font-normal">
                615 lisitings
              </span>
            </p>
          </div>
          <div className="flex  flex-col justify-between space-y-10 p-5">
            <p className="flex flex-col font-semibold text-2xl items-center gap-2">
              Mumbai
              <span className="text-[18px] text-orange-600 font-normal">
                529 lisitings
              </span>
            </p>
            <p className="flex flex-col font-semibold text-2xl items-center gap-2">
              Banglore
              <span className="text-[18px] text-orange-600 font-normal">
                1597 lisitings
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-between space-y-10 p-5">
            <p className="flex flex-col font-semibold text-2xl items-center gap-2">
              Kolkota
              <span className="text-[18px] text-orange-600 font-normal">
                629 lisitings
              </span>
            </p>
            <p className="flex flex-col font-semibold text-2xl items-center gap-2">
              New Delhi
              <span className="text-[18px] text-orange-600 font-normal">
                734 lisitings
              </span>
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-semibold">Recent Views</h1>

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
        <div className="flex border border-gray-300 p-16 justify-center items-center gap-8 rounded-lg ">
          <div className="h-5 w-5 rounded-full bg-red-500 absolute top-0 left-45"></div>
          <div className="h-5 w-5 rounded-full bg-red-500 absolute bottom-0 right-45"></div>
          <div className="h-5 w-5 rounded-full border bg-white border-gray-400 absolute bottom-0 right-55"></div>
          <div className="h-5 w-5 rounded-full border border-gray-400 absolute bg-white top-0 left-55"></div>
          <Image
            src={blackstars}
            alt="stars Logo"
            className="absolute top-23 rotate-180 left-80"
          />
          <Image
            src={finalw}
            alt="FinalW Logo"
            className="object-contain w-[18rem] border-2 border-yellow-400 rounded-t-full mx-5 "
          />
          <p className="flex font-semibold flex-col text-2xl p-8">
            TOP RATED
            <span className="font-normal text-sm">
              Love fiercely, live fully, and embrace every moment as if it were
              your last. In the tapestry of life, make every thread count.
            </span>
          </p>
          <div className="border border-gray-300 rounded-full p-4 md:h-25 h-15 w-40 flex items-center justify-center">
            <Image src={preksis} alt="Preksis Logo" width={80} height={80} />
          </div>
          <div className="border border-gray-300 rounded-full p-4 md:h-25 h-15 w-40 flex items-center justify-center">
            <Image
              src={ips}
              alt="Preksis Logo"
              className="object-contain rounded-full"
            />
          </div>
          <div className="border border-gray-300 rounded-full p-4 md:h-25 h-15 w-40 flex items-center justify-center">
            <Image
              src={ips}
              alt="Preksis Logo"
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
