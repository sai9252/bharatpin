"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CategorySectionProps {
  formData: {
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
  }
  setFormData: (data: CategorySectionProps["formData"]) => void
}

export default function CategorySection({ formData, setFormData }: CategorySectionProps) {
  const categories = ["Restaurant", "Retail", "Healthcare", "Education", "Technology", "Finance", "Entertainment"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (paymentType: string, checked: boolean) => {
    setFormData({
      ...formData,
      paymentAccepted: {
        ...formData.paymentAccepted,
        [paymentType]: checked,
      },
    })
  }

  return (
    <div className="border-t pt-6 mt-6">
      <h2 className="text-2xl font-medium mb-4">Category</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="category">
            Select Category <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactPerson">Contact Person</Label>
            <Input
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Contact person"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="establishedDate">Established Date</Label>
            <Input
              id="establishedDate"
              name="establishedDate"
              type="text"
              value={formData.establishedDate}
              onChange={handleChange}
              placeholder="Established Date"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Payment Accepted</Label>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="cash"
                checked={formData.paymentAccepted.cash}
                onCheckedChange={(checked) => handleCheckboxChange("cash", checked as boolean)}
              />
              <label
                htmlFor="cash"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cash
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="cheques"
                checked={formData.paymentAccepted.cheques}
                onCheckedChange={(checked) => handleCheckboxChange("cheques", checked as boolean)}
              />
              <label
                htmlFor="cheques"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cheques
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="creditCard"
                checked={formData.paymentAccepted.creditCard}
                onCheckedChange={(checked) => handleCheckboxChange("creditCard", checked as boolean)}
              />
              <label
                htmlFor="creditCard"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Credit Card
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="debitCard"
                checked={formData.paymentAccepted.debitCard}
                onCheckedChange={(checked) => handleCheckboxChange("debitCard", checked as boolean)}
              />
              <label
                htmlFor="debitCard"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Debit Card
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="netBanking"
                checked={formData.paymentAccepted.netBanking}
                onCheckedChange={(checked) => handleCheckboxChange("netBanking", checked as boolean)}
              />
              <label
                htmlFor="netBanking"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Net Banking
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="upi"
                checked={formData.paymentAccepted.upi}
                onCheckedChange={(checked) => handleCheckboxChange("upi", checked as boolean)}
              />
              <label
                htmlFor="upi"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                UPI
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="about">About</Label>
          <Textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About your business"
            className="min-h-[150px]"
          />
        </div>
      </div>
    </div>
  )
}

