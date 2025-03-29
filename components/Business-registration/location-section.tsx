"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LocationSectionProps {
  formData: {
    address: string
    landmark?: string
    zipCode: string
    location?: string
    subLocation?: string
  }
  setFormData: (data: LocationSectionProps["formData"]) => void
}

export default function LocationSection({ formData, setFormData }: LocationSectionProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [locations, setLocations] = useState<string[]>([])
  const [subLocations, setSubLocations] = useState<string[]>([])

  // Simulate fetching locations
  useEffect(() => {
    setLocations(["Acharya Layout", "Banashankari", "Jayanagar", "Koramangala"])
  }, [])

  // Simulate fetching sub-locations when location changes
  useEffect(() => {
    if (formData.location) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setSubLocations(["Area 1", "Area 2", "Area 3", "Area 4"])
        setIsLoading(false)
      }, 1000)
    } else {
      setSubLocations([])
    }
  }, [formData.location])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="border-t pt-6 mt-6">
      <h2 className="text-2xl font-medium mb-4">Location</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="address">
            Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="landmark">Landmark</Label>
            <Input
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="Landmark"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">
              Zip Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">
            Location <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Select value={formData.location} onValueChange={(value) => handleSelectChange("location", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subLocation">
            Sub Location <span className="text-red-500">*</span>
          </Label>
          {isLoading ? (
            <div className="text-sm text-muted-foreground">Loading...</div>
          ) : (
            <div className="relative">
              <Select
                value={formData.subLocation}
                onValueChange={(value) => handleSelectChange("subLocation", value)}
                disabled={!formData.location}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Sub Location" />
                </SelectTrigger>
                <SelectContent>
                  {subLocations.map((subLocation) => (
                    <SelectItem key={subLocation} value={subLocation}>
                      {subLocation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

