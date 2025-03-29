"use client";

import type React from "react";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessInfoSection from "./business-info-section";
import LocationSection from "./location-section";
import CategorySection from "./category-section";
import WorkingHoursSection from "./working-hours-section";
import ImageUploadSection from "./image-upload-section";

export default function BusinessRegistrationForm() {
  interface FormData {
    businessName: string;
    website: string;
    email: string;
    landline1: string;
    landline2: string;
    landline3: string;
    phone: string;
    phone2: string;
    whatsapp: string;
    tollFree: string;
    locationUrl: string;
    address: string;
    landmark: string;
    zipCode: string;
    location: string;
    subLocation: string;
    category: string;
    contactPerson: string;
    establishedDate: string;
    paymentAccepted: {
      cash: boolean;
      cheques: boolean;
      creditCard: boolean;
      debitCard: boolean;
      netBanking: boolean;
      upi: boolean;
    };
    about: string;
    workingHours: {
      monday: { status: string; from: string; to: string };
      tuesday: { status: string; from: string; to: string };
      wednesday: { status: string; from: string; to: string };
      thursday: { status: string; from: string; to: string };
      friday: { status: string; from: string; to: string };
      saturday: { status: string; from: string; to: string };
      sunday: { status: string; from: string; to: string };
    };
    logo: File | null;
    photos: File[];
  }

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    website: "",
    email: "",
    landline1: "",
    landline2: "",
    landline3: "",
    phone: "",
    phone2: "",
    whatsapp: "",
    tollFree: "",
    locationUrl: "",
    address: "",
    landmark: "",
    zipCode: "",
    location: "",
    subLocation: "",
    category: "",
    contactPerson: "",
    establishedDate: "",
    paymentAccepted: {
      cash: false,
      cheques: false,
      creditCard: false,
      debitCard: false,
      netBanking: false,
      upi: false,
    },
    about: "",
    workingHours: {
      monday: { status: "Open", from: "09:00 AM", to: "06:00 PM" },
      tuesday: { status: "Open", from: "09:00 AM", to: "06:00 PM" },
      wednesday: { status: "Open", from: "09:00 AM", to: "06:00 PM" },
      thursday: { status: "Open", from: "09:00 AM", to: "06:00 PM" },
      friday: { status: "Open", from: "09:00 AM", to: "06:00 PM" },
      saturday: { status: "Open", from: "09:00 AM", to: "06:00 PM" },
      sunday: { status: "Close", from: "", to: "" },
    },
    logo: null,
    photos: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          <h1 className="text-2xl font-bold">BUSINESS ADD</h1>
        </div>
        <Button type="submit" className="bg-sky-400 hover:bg-sky-500">
          LIST
        </Button>
      </div>

      <div className="text-right mb-4">
        <span className="text-red-500">( * )</span> Mark fields are mandatory
      </div>

      <div className="space-y-8">
        <BusinessInfoSection
          formData={formData}
          setFormData={(data) => setFormData((prev) => ({ ...prev, ...data }))}
        />
        <LocationSection
          formData={formData}
          setFormData={(data) => setFormData((prev) => ({ ...prev, ...data }))}
        />
        <CategorySection
          formData={formData}
          setFormData={(data) =>
            setFormData((prev) => ({ ...prev, ...data }))
          }
        />
        <WorkingHoursSection formData={formData} setFormData={(data) =>
            setFormData((prev) => ({
              ...prev,
              ...data,
              workingHours: {
                ...prev.workingHours,
                ...(data.workingHours || {}),
              },
            }))
          } />
        <ImageUploadSection formData={formData} setFormData={(data) =>
            setFormData((prev) => ({ ...prev, ...data }))
          } />

        <div className="mt-6">
          <Button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Save
          </Button>
          <Button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Save
          </Button>
          <Button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
