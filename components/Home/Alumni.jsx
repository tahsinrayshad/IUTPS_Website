"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Aperture, Focus, ChevronLeft, ChevronRight } from "lucide-react";
import alumniData from "@/data/alumni.json";
import RABBI from "@/public/rabbi.jpg";
import CHAYON from "@/public/chayon.jpg";
import AFIF from "@/public/afif.jpg";
import ZARIF from "@/public/zarif.jpg";
import XENAN from "@/public/xenan.jpg";
import XAMI from "@/public/xami.jpg";


export default function Alumni() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + itemsPerView >= alumniData.testimonials.length ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [itemsPerView]);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= alumniData.testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, alumniData.testimonials.length - itemsPerView) : prev - 1
    );
  };

  return (
    <>
      {/* Alumni Carousel Section */}
      <section className="py-24 px-8 lg:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Simple header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {alumniData.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {alumniData.subtitle}
            </p>
            <div className="w-24 h-1 bg-[#83C044] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#83C044] hover:bg-[#83C044]/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#83C044] hover:bg-[#83C044]/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {alumniData.testimonials.map((testimonial, index) => {
                  const images = [RABBI, CHAYON, AFIF, ZARIF, XENAN, XAMI];

                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 px-4"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <div className="group bg-gray-900 rounded-xl border border-gray-700 p-8 hover:shadow-xl hover:shadow-[#83C044]/20 hover:border-[#83C044]/50 transition-all duration-300 h-full">
                        {/* Profile image */}
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <Image
                              src={images[index]}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="rounded-full object-cover border-4 border-[#83C044]/20 group-hover:border-[#83C044] transition-colors duration-300"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#83C044] rounded-full flex items-center justify-center">
                              <Camera className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-gray-300 text-center leading-relaxed mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        {/* Name and role */}
                        <div className="text-center">
                          <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                          <p className="text-sm text-[#83C044] font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(alumniData.testimonials.length / itemsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerView) === index
                      ? 'bg-[#83C044] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Simple bottom accent */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400">
              <div className="w-8 h-px bg-[#83C044]"></div>
              <Camera className="w-4 h-4 text-[#83C044]" />
              <div className="w-8 h-px bg-[#83C044]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
