"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

const pagesData = [
  { label: "About Us", path: "about-us" },
  { label: "Terms & Conditions", path: "TC" },
  { label: "Our Services", path: "our-services" },
  { label: "Company Description", path: "company-description" },
  { label: "Frequently Asked Questions", path: "FAQ" },
  { label: "Privacy Policy", path: "privacy-policy" },
  { label: "Why Us", path: "why-us" },
];

const Others = () => {

    const pathname = usePathname();
    const currentPath = pathname.split("/").pop();

  return (
    <div className="md:w-[35%] mt-2.5">
          <div className="bg-orange-600/90 rounded-xl text-white p-3 text-4xl">
            Other Pages
          </div>
          <div className="space-y-5 mt-4 rounded-lg bg-gray-100 w-full lg:p-4 p-2">
            <div className="flex flex-col lg:gap-3 md:gap-1 md:items-left lg:p-6 p-3 md:text-md text-sm">
              {pagesData.map((page, index) => (
                <Link
                  key={index}
                  href={`/other-pages/${page.path}`}
                  className={`flex items-center gap-1 border-b-2 border-transparent hover:border-b-gray-300 ${
                    currentPath === page.path ? "border-b-orange-600" : ""
                  } p-1`}
                >
                  <FaCaretRight className="w-5 h-5" />
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Others