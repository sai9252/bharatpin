'use client'

import React from 'react'
import Image from "next/image"
import Spinner from "@/public/Spin@1x-1.0s-200px-200px.svg"

const loading = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        
        <Image ref={Spinner} alt="Spinner Logo" src={Spinner}/>
    </div>
  )
}

export default loading
