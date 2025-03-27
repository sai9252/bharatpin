"use client"

import type React from "react"
import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function RatingComponent() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)


  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating)
  }

  const handleStarHover = (hoveredRating: number) => {
    setHoverRating(hoveredRating)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }




  return (
    <div className="flex flex-col md:gap-3 lg:gap-4 gap-2 max-w-md mx-auto justify-center items-center ">
      <div className="p-3 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center w-full max-w-md mx-auto lg:p-4 p-1 rounded-lg space-y-2 sm:space-y-0 sm:space-x-2">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={handleStarLeave}
            className="focus:outline-none"
            aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
          >
            <Star
              className={`w-6 h-6 transition-colors duration-200 ${
                (hoverRating || rating) >= star
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-transparent text-gray-400"
              }`}
            />
          </button>
        ))}
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-white font-medium flex justify-center items-center  gap-1 ">
          {rating} <span className="text-gray-400 text-xs">of 5 reviews</span>
        </span>
      </div>

      <Button
          type="submit"
          className='bg-orange-600/90 text-white hover:bg-orange-500/90 text-sm ml-2'
        >
          Rate
        </Button>
    </div>
      </div>      
    </div>
  )
}

