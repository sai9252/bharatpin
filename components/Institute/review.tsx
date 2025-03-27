"use client";

import type React from "react";

import { ReactNode, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Review {
  timestamp: ReactNode;
  name: string;
  email: string;
  comment: string;
  rating: number;
}

export default function ReviewsComponent() {
  const [activeTab, setActiveTab] = useState<"reviews" | "write">("write");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    setNewReview({
      ...newReview,
      rating: selectedRating,
    });
  };

  const handleStarHover = (hoveredRating: number) => {
    setHoverRating(hoveredRating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    // Add the new review with the current rating
    const reviewToAdd = {
      ...newReview,
      rating: rating,
      timestamp: new Date().toLocaleString(), // Add a timestamp
    };

    setReviews([...reviews, reviewToAdd]);

    // Reset form
    setNewReview({
      name: "",
      email: "",
      comment: "",
      rating: 0,
    });

    // Switch to reviews tab to show the newly added review
    setActiveTab("reviews");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex gap-3 mb-4">
        <button
          className={cn(
            "px-4 py-2 rounded-lg font-medium",
            activeTab === "reviews"
              ? "bg-orange-600/90 text-white"
              : "bg-white border border-gray-300"
          )}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </button>
        <button
          className={cn(
            "px-4 py-2 rounded-lg font-medium",
            activeTab === "write"
              ? "bg-orange-600/90 text-white"
              : "bg-white border border-gray-300"
          )}
          onClick={() => setActiveTab("write")}
        >
          Write Review
        </button>
      </div>

      <div className="py-6 border-t">
        {activeTab === "reviews" ? (
          reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="border rounded-lg p-4">
                   <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            review.rating >= star
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-transparent text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{review.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{review.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No reviews yet. Be the first to write a review!
            </div>
          )
        ) : (
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={newReview.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="rating">Rating</Label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => handleStarHover(star)}
                    onMouseLeave={handleStarLeave}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        (hoverRating || rating) >= star
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-transparent text-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="comment">Your Review</Label>
              <Textarea
                id="comment"
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                placeholder="Share your experience with Rankers Coaching Classes - JP Nagar, Bangalore"
                required
                rows={4}
                className="text-sm "
              />
            </div>

            <Button
              type="submit"
              className="bg-yellow-500/90 text-white p-2 rounded-md hover:bg-yellow-500/80"
            >
              Submit Review
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
