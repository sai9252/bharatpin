// pages/business/rankers-coaching-classes.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import coachinglogo from "@/public/coachinglogo.jpg";
import coaching from "@/public/coaching.jpg"

export default function BusinessListing() {
  return (
    <div className="min-h-screen bg-gray-50 mt-5 rounded-lg">
      <Head>
        <title>Rankers Coaching Classes - JP Nagar, Bangalore | GetProlist</title>
        <meta name="description" content="Rankers Coaching Classes in JP Nagar, Bangalore - Coaching for NEET, JEE, Mains and more" />
      </Head>
    

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Business Banner */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
          <Image 
            src={coachinglogo}
            alt="Rankers Coaching Classes" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
          <div className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-md">
            <Image src={coaching} alt="Rankers Logo" width={50} height={50} />
          </div>
        </div>

        {/* Business Information */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Business Details */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Rankers Coaching Classes - JP Nagar, Bangalore</h1>
            
            <div className="flex items-start text-gray-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">Rathna Mahal, 20th Main Road, Beside Samveet School, 5th Phase, KR Layout, Phase 5 JP Nagar, Bangalore, 560078</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <p className="text-gray-700 mb-4">
                1+ year in classes business with best results. Rankers Coaching Classes in Bangalore has pioneered the competitive as well as board level preparation. We have been at the forefront of helping students to achieve their goals of cracking examinations. Also, we have helped our students score excellent marks in examinations like CBSE, ICSE,ISC,SSLC. Our expert faculty provides customized study material. We provide coaching for NEET, JEE (Mains and Adv), OlympNEET, NTSE, KVPY, Iiser, NITs,IIITs and 12th board exams. From foundation to advanced courses, Rankers Coaching Classes offers an excellent service to student community. We have experienced and dedicated teachers who have profound knowledge.
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4 uppercase md:text-sm tracking-wider border-b pb-2">AMENITIES</h2>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  CCTV Camera
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AC Class Rooms
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trained Staff
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4 uppercase md:text-sm tracking-wider border-b pb-2">ADDITIONAL INFORMATION</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Placements</p>
                  <p className="font-medium">No</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Institute Type</p>
                  <p className="font-medium">Coaching Institute, Training Institute</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Mode of Instruction</p>
                  <p className="font-medium">Offline</p>
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4 uppercase md:text-sm tracking-wider border-b pb-2">OTHER DETAILS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Contact Person :</p>
                  <p className="font-medium">Dhirendra Kumar</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">Payment Accepted :</p>
                  <p className="font-medium">Debit Card, UPI, Net Banking, Cheques, Cash</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4 uppercase md:text-sm tracking-wider border-b pb-2">WORKING HOURS</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                {['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'].map((day) => (
                  <div key={day} className="bg-gray-100 p-3 rounded-lg text-center">
                    <p className="font-medium text-sm">{day}</p>
                    <p className="text-gray-600 text-sm">06:00 AM - 09:00 PM</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex gap-3 mb-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">Reviews (0)</button>
                <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-medium">Write Review</button>
              </div>
              <div className="py-6 text-center border-t">
                <p className="text-gray-600">Reviews of Rankers Coaching Classes - JP Nagar, Bangalore</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="w-full lg:w-1/3">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4 uppercase md:text-sm tracking-wider text-center">CONTACT INFORMATION</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>7829958305</div>
                </div>
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>info.cc.classes@gmail.com</div>
                </div>
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>Send Enquiry by Email</div>
                </div>
                <div className="flex items-center p-3">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>Get Information via SMS</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4 uppercase sm:text-sm tracking-wider text-center">CONTACT US</h2>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone no." 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows={3} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition duration-300"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* GetProlist Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4 uppercase text-sm tracking-wider">GetProlist :</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>080-69578467</div>
                </div>
                <div className="flex items-center p-3 border-b">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>help@getprolist.com</div>
                </div>
                <div className="flex items-start p-3">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    Getprolist Info Technologies Pvt. Ltd., #16-9-570/1, Sri Krishnavaram, Rajendra Nagar, Kakinada, Andhra Pradesh 533003
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}