"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BusinessInfoSectionProps {
  formData: {
    businessName: string
    website?: string
    email?: string
    landline1?: string
    landline2?: string
    landline3?: string
    phone?: string
    phone2?: string
    whatsapp?: string
    tollFree?: string
    locationUrl?: string
  }
  setFormData: (data: BusinessInfoSectionProps["formData"]) => void
}

export default function BusinessInfoSection({ formData, setFormData }: BusinessInfoSectionProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="businessName">
          Business Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Business Name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Eg: http://www.google.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="landline1">Landline 1</Label>
          <Input
            id="landline1"
            name="landline1"
            value={formData.landline1}
            onChange={handleChange}
            placeholder="Landline 1"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="landline2">Landline 2</Label>
          <Input
            id="landline2"
            name="landline2"
            value={formData.landline2}
            onChange={handleChange}
            placeholder="Landline 2"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="landline3">Landline 3</Label>
          <Input
            id="landline3"
            name="landline3"
            value={formData.landline3}
            onChange={handleChange}
            placeholder="Landline 3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone2">Phone 2</Label>
          <Input id="phone2" name="phone2" value={formData.phone2} onChange={handleChange} placeholder="Phone 2" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">Whatsapp</Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Whatsapp"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tollFree">Toll Free</Label>
          <Input
            id="tollFree"
            name="tollFree"
            value={formData.tollFree}
            onChange={handleChange}
            placeholder="Toll Free"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="locationUrl">Location URL</Label>
          <Input
            id="locationUrl"
            name="locationUrl"
            value={formData.locationUrl}
            onChange={handleChange}
            placeholder="Location URL"
          />
        </div>
      </div>
    </div>
  )
}

