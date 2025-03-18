'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Business = () => {
  const pathname = usePathname();
  const isNotAddBusinessPage = pathname !== '/addBusiness';

  if (!isNotAddBusinessPage) return null; // Hide if it's the add business page

  return (
    <div>
      <div className="bg-gray-100 rounded-3xl md:m-6 m-2 md:px-20 md:py-12 px-10 py-5">
        <div className="flex flex-col justify-between items-center gap-4">
          <h1 className="md:text-5xl text-2xl font-semibold">
            Do you have business ?
          </h1>
          <span className="md:text-[17px]">
            Sell your product online FOR FREE. It&apos;s easier than you think !{" "}
          </span>
          <Link href="/addBusiness" target="_top">
            <Button className="text-white h-11 w-48">
              Add Business, It&apos;s Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Business;
