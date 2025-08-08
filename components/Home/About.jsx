import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Camera } from "lucide-react";
import { ArrowRight, Mail, Phone } from "lucide-react";

import TeamPS from "@/public/teamps.jpg";
import aboutData from "@/public/data/about.json";


export default function About() {
    // Icon mapping for dynamic rendering
    const iconMap = {
        Users: Users,
        Award: Award,
        Camera: Camera,
        ArrowRight: ArrowRight
    };

    return (
        <>
        {/* About Section */}
        <section id="about" className="px-20 py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Photography-themed background elements */}
            <div className="absolute inset-0 opacity-15">
                {/* Camera aperture rings */}
                <div className="absolute top-16 left-16 w-52 h-52 rounded-full border-2 border-[#83C044]/70"></div>
                <div className="absolute top-20 left-20 w-44 h-44 rounded-full border-2 border-[#83C044]/50"></div>
                
                {/* Film strip elements */}
                <div className="absolute bottom-20 right-10 w-32 h-6 bg-[#83C044]/40 rounded shadow-lg shadow-[#83C044]/20"></div>
                <div className="absolute bottom-24 right-14 w-24 h-4 bg-[#83C044]/50 rounded shadow-lg shadow-[#83C044]/20"></div>
                
                {/* Lens focus marks */}
                <div className="absolute top-1/3 right-1/4 flex gap-2">
                    <div className="w-2 h-8 bg-[#83C044]/60 rounded-full"></div>
                    <div className="w-2 h-6 bg-[#83C044]/50 rounded-full"></div>
                    <div className="w-2 h-10 bg-[#83C044]/60 rounded-full"></div>
                </div>
                
                {/* Additional camera elements */}
                <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-[#83C044]/40 rounded-lg transform rotate-45"></div>
                <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-[#83C044]/20 rounded-full"></div>
            </div>
            
            <div className=" px-4 mx-auto relative z-10">
                    <div className="min-h-[80vh] md:min-h-[100vh] flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                      {/* Left Column */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 relative">
                        <div className="max-w-[600px] mx-auto relative">
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#83C044] mb-6">
                            {aboutData.title}
                          </h2>
        
                          <div className="space-y-4 text-white mb-8 relative">
                            {/* Single gradient line decoration */}
                            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-[#83C044]/60 via-[#83C044]/30 to-transparent rounded-full"></div>
                            {aboutData.description.map((paragraph, index) => (
                              <p key={index} className="text-base md:text-lg leading-relaxed text-justify">
                                {paragraph}
                              </p>
                            ))}
                          </div>
        
                          <Button className="gap-3 bg-gradient-to-r from-[#83C044] to-[#6ea837] text-black hover:from-[#6ea837] hover:to-[#5a8f2d] px-10 py-6 text-base font-bold relative overflow-hidden group shadow-2xl shadow-[#83C044]/40 hover:shadow-3xl hover:shadow-[#83C044]/60 transition-all duration-500 hover:scale-110 hover:-translate-y-1 rounded-xl border-2 border-[#83C044]/30 hover:border-[#83C044]/60">
                            {/* Enhanced multi-layered flash effects */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-800"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                            
                            {/* Glowing border effect */}
                            <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300"></div>
                            
                            <span className="relative z-10 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">{aboutData.button.text}</span>
                            <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-xl" />
                            
                            {/* Sparkle effects */}
                            <div className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-3 left-6 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </Button>
                        </div>
                      </div>
        
                      {/* Right Column */}
                      <div className="w-full md:w-1/2 order-1 md:order-2 relative">
                        <div className="relative max-w-[700px] mx-auto">
                          {/* Enhanced Camera lens rings behind the image */}
                          <div className="absolute inset-0 rounded-full border-4 border-[#83C044]/30 scale-110 shadow-xl shadow-[#83C044]/15 pointer-events-none"></div>
                          <div className="absolute inset-0 rounded-full border-3 border-[#83C044]/35 scale-105 shadow-lg shadow-[#83C044]/10 pointer-events-none"></div>
                          <div className="absolute inset-0 rounded-full border-2 border-[#83C044]/40 scale-100 pointer-events-none"></div>
                          
                          <div className="relative">
                            {/* Main image with enhanced photography frame */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl z-10 group border-4 border-gray-800 hover:border-[#83C044]/50 transition-all duration-500">
                              {/* Enhanced Film strip border effect */}
                              <div className="absolute inset-0 border-8 border-black rounded-xl z-20"></div>
                              <div className="absolute top-3 left-3 right-3 h-3 bg-gradient-to-r from-[#83C044]/60 via-[#83C044]/30 to-[#83C044]/60 rounded-full z-20 shadow-lg"></div>
                              <div className="absolute bottom-3 left-3 right-3 h-3 bg-gradient-to-r from-[#83C044]/60 via-[#83C044]/30 to-[#83C044]/60 rounded-full z-20 shadow-lg"></div>
                              
                              {/* Film strip holes */}
                              <div className="absolute top-4 left-8 w-2 h-2 bg-black rounded-full z-25"></div>
                              <div className="absolute top-4 right-8 w-2 h-2 bg-black rounded-full z-25"></div>
                              <div className="absolute bottom-4 left-8 w-2 h-2 bg-black rounded-full z-25"></div>
                              <div className="absolute bottom-4 right-8 w-2 h-2 bg-black rounded-full z-25"></div>
                              
                              {/* Enhanced Camera focus overlay */}
                              <div className="absolute inset-6 border-3 border-[#83C044]/70 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 shadow-lg shadow-[#83C044]/30"></div>
                              <div className="absolute inset-8 border-2 border-white/50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"></div>
                              
                              <Image
                                src={TeamPS}
                                alt="IUTPS"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                              />
                              
                              {/* Rounded vignette overlay - darker on 4 sides */}
                              <div className="absolute inset-0 rounded-xl pointer-events-none z-15" 
                                   style={{
                                     background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)'
                                   }}>
                              </div>
                              
                              {/* Enhanced Photography grid overlay */}
                              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                                <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                                  {[...Array(9)].map((_, i) => (
                                    <div key={i} className="border border-[#83C044]/70 shadow-sm"></div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Camera viewfinder overlay */}
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-25"></div>
                            </div>
                            
                            {/* Enhanced Camera settings indicators */}
                            <div className="absolute -bottom-10 left-0 flex gap-6 text-sm text-[#83C044] font-mono bg-black/80 px-4 py-2 rounded-lg border border-[#83C044]/30 shadow-lg">
                              <span className="border-r border-[#83C044]/30 pr-3">f/2.8</span>
                              <span className="border-r border-[#83C044]/30 pr-3">1/60s</span>
                              <span>ISO 400</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
        </section>
        </>
    );
    }
