import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Camera } from "lucide-react";
import { ArrowRight, Mail, Phone } from "lucide-react";

import TeamPS from "@/public/teamps.jpg";


export default function About() {
    return (
        <>
        {/* Navigation */}
        <section id="about" className="px-20 py-16 md:py-24 bg-black">
            <div className=" px-4 mx-auto">
                    <div className="min-h-[80vh] md:min-h-[100vh] flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                      {/* Left Column */}
                      <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="max-w-[600px] mx-auto">
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#83C044] mb-6">
                            About IUTPS
                          </h2>
        
                          <div className="space-y-4 text-white mb-8">
                            <p className="text-base md:text-lg">
                              The IUT Photographic Society (IUTPS) is a vibrant
                              community of photography enthusiasts dedicated to
                              exploring the art and science of photography.
                            </p>
                            <p className="text-base md:text-lg">
                              Founded in 2010, we've been providing a platform for
                              students to develop their skills, showcase their work, and
                              connect with fellow photographers.
                            </p>
                            <p className="text-base md:text-lg">
                              Our mission is to promote photography as both an art form
                              and a means of documentation, while fostering creativity
                              and technical excellence among our members.
                            </p>
                          </div>
        
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-white mb-8">
                            <div className="flex flex-col p-4 bg-gray-900 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Users className="h-5 w-5 text-[#83C044]" />
                                <span className="font-medium">Community</span>
                              </div>
                              <p className="text-sm text-gray-300">
                                Connect with like-minded photographers
                              </p>
                            </div>
                            <div className="flex flex-col p-4 bg-gray-900 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Award className="h-5 w-5 text-[#83C044]" />
                                <span className="font-medium">Excellence</span>
                              </div>
                              <p className="text-sm text-gray-300">
                                Develop your skills and techniques
                              </p>
                            </div>
                            <div className="flex flex-col p-4 bg-gray-900 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Camera className="h-5 w-5 text-[#83C044]" />
                                <span className="font-medium">Creativity</span>
                              </div>
                              <p className="text-sm text-gray-300">
                                Express yourself through photography
                              </p>
                            </div>
                          </div>
        
                          <Button className="gap-2 bg-[#83C044] text-black hover:bg-[#6ea837] px-6 py-4">
                            Learn More <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
        
                      {/* Right Column */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative max-w-[700px] mx-auto">
                          <div className="relative">
                            {/* Top-right green L-shaped accent with rounded corners (behind) */}
                            <div className="absolute top-0 right-0 z-0">
                              <div className="bg-[#83C044] w-40 h-8 absolute -top-4 -right-4 rounded-md"></div>
                              <div className="bg-[#83C044] w-8 h-40 absolute -top-4 -right-4 rounded-md"></div>
                            </div>
        
                            {/* Bottom-right green L-shaped accent with rounded corners (behind) */}
                            <div className="absolute bottom-0 left-0 z-0">
                              <div className="bg-[#83C044] w-40 h-8 absolute -bottom-4 -left-4 rounded-md"></div>
                              <div className="bg-[#83C044] w-8 h-40 absolute -bottom-4 -left-4 rounded-md"></div>
                            </div>
        
                            {/* Main image with rounded corners (in front) */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl z-10">
                              <Image
                                src={TeamPS}
                                alt="IUTPS"
                                width={800}
                                height={800}
                              />
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
