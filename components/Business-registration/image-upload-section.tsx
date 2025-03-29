"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"
import Image from "next/image"

interface ImageUploadSectionProps {
  formData: { logo: File | null; photos: File[] }
  setFormData: (data: { logo: File | null; photos: File[] }) => void
}

export default function ImageUploadSection({ formData, setFormData }: ImageUploadSectionProps) {
  const logoInputRef = useRef<HTMLInputElement>(null)
  const photosInputRef = useRef<HTMLInputElement>(null)

  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([])

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setLogoPreview(reader.result as string)
        setFormData({ ...formData, logo: file })
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const newPhotos = Array.from(files)
      // Create previews for all selected files
      const promises = newPhotos.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = () => {
            resolve(reader.result as string)
          }
          reader.readAsDataURL(file)
        })
      })

      Promise.all(promises).then((results) => {
        setPhotoPreviews([...photoPreviews, ...results])
        setFormData({ ...formData, photos: [...formData.photos, ...newPhotos] })
      })
    }
  }

  const removeLogo = () => {
    setLogoPreview(null)
    setFormData({ ...formData, logo: null })
    if (logoInputRef.current) {
      logoInputRef.current.value = ""
    }
  }

  const removePhoto = (index: number) => {
    const updatedPreviews = [...photoPreviews]
    updatedPreviews.splice(index, 1)
    setPhotoPreviews(updatedPreviews)

    const updatedPhotos = [...formData.photos]
    updatedPhotos.splice(index, 1)
    setFormData({ ...formData, photos: updatedPhotos })
  }

  return (
    <div className="border-t pt-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="logo">
            Logo <span className="text-red-500">*</span>
          </Label>
          <div className="flex flex-col items-start gap-4">
            <div className="relative">
              <input
                ref={logoInputRef}
                type="file"
                id="logo"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => logoInputRef.current?.click()}
                className="flex items-center gap-2"
              >
                <Upload size={16} />
                Choose File
              </Button>
              <span className="ml-2 text-sm text-muted-foreground">
                {formData.logo ? formData.logo.name : "No file chosen"}
              </span>
            </div>

            {logoPreview && (
              <div className="relative border rounded-md p-2 w-full max-w-[300px]">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6 rounded-full bg-background/80"
                  onClick={removeLogo}
                >
                  <X size={14} />
                </Button>
                <Image
                  src={logoPreview || "/placeholder.svg"}
                  alt="Logo preview"
                  className="w-full h-auto max-h-[200px] object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="photos">Photos</Label>
          <div className="flex flex-col items-start gap-4">
            <div className="relative">
              <input
                ref={photosInputRef}
                type="file"
                id="photos"
                accept="image/*"
                onChange={handlePhotosChange}
                multiple
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => photosInputRef.current?.click()}
                className="flex items-center gap-2"
              >
                <Upload size={16} />
                Choose Files
              </Button>
              <span className="ml-2 text-sm text-muted-foreground">
                {formData.photos.length > 0 ? `${formData.photos.length} file(s) selected` : "No files chosen"}
              </span>
            </div>

            {photoPreviews.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mt-2">
                {photoPreviews.map((preview, index) => (
                  <div key={index} className="relative border rounded-md p-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 rounded-full bg-background/80"
                      onClick={() => removePhoto(index)}
                    >
                      <X size={14} />
                    </Button>
                    <Image
                      src={preview || "/placeholder.svg"}
                      alt={`Photo preview ${index + 1}`}
                      className="w-full h-auto max-h-[150px] object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

