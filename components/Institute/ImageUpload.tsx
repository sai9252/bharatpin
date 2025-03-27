import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ImageUploader = () => {
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
}

const handleFileChange = (event: FileChangeEvent): void => {
    const newFiles = Array.from(event.target.files);
    const validImageFiles = newFiles.filter((file: File) => 
        file.type.startsWith('image/')
    );
    
    setImages((prevImages: File[]) => [...prevImages, ...validImageFiles]);
};

  const handleRemoveImage = (indexToRemove: number) => {
    setImages(prevImages => 
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSubmit = () => {
    if (images.length > 0) {
      // Here you would typically handle the image upload to a server
      console.log('Submitting images:', images);
      
      // Clear images after submission
      setImages([]);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className=" mx-auto p-4 border rounded-lg">
        <div className='flex space-x-5'>

      <div 
        onClick={() => fileInputRef.current?.click()}
        className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg w-[10rem] p-4 text-center hover:bg-gray-50 transition flex"
        >
        <Input 
          ref={fileInputRef}
          type="file" 
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          />
        <div className="flex flex-col items-center justify-center ">
          <Upload className=" text-gray-400 mb-2" />
          <p className="text-gray-600">Upload Photos</p>
        </div>
      </div>
          

      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image 
                src={URL.createObjectURL(image)} 
                alt={`uploaded ${index}`}
                className="w-full h-20 object-contain rounded"
                width={200}
                height={80}
              />
              <button 
                onClick={() => handleRemoveImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      </div>


      {images.length > 0 && (
        <div className='flex justify-center m-5'>
        <Button 
          onClick={handleSubmit}
          className="sm:max-w-[425px] bg-yellow-500/90 text-white p-2 rounded-md hover:bg-yellow-500/80 text-sm px-3 py-1.5"
          >
          Submit Images
        </Button>
            </div>
      )}
    </div>
  );
};

export default ImageUploader;