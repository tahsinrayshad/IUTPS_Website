import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye } from "lucide-react";


import P2 from "@/public/p2.jpg";
import P3 from "@/public/p3.jpg";
import P4 from "@/public/p4.jpg";
import P5 from "@/public/p5.jpg";
import P6 from "@/public/p6.jpg";
import P7 from "@/public/p7.jpg";


export default function Gallery() {
return (
    <>
      {/* Gallary */}
        <section
                id="gallery"
                className="py-24 flex justify-center items-center px-20"
              >
                <div className="">
                  <div className="text-center mb-16">
                    <Badge className="mb-4 ">Our Work</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#83C044] mb-6">
                      Featured Gallery
                    </h2>
                    <p className="mt-4 text-white max-w-[600px] mx-auto">
                      Explore the stunning work captured by our talented members
                      across various photography genres
                    </p>
                  </div>
      
                  <Tabs defaultValue="btc" className="w-full">
                    <div className="flex justify-center mb-12">
                      <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1">
                        <TabsTrigger
                          value="btc"
                          className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Break the Circle
                        </TabsTrigger>
                        <TabsTrigger
                          value="pronoia"
                          className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Pronoia
                        </TabsTrigger>
                        <TabsTrigger
                          value="iut"
                          className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Shoot at IUT
                        </TabsTrigger>
                        <TabsTrigger
                          value="walk"
                          className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          Photo Walks
                        </TabsTrigger>
                      </TabsList>
                    </div>
      
                    <TabsContent value="btc" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div
                            key={item}
                            className="group relative overflow-hidden rounded-lg"
                          >
                            <Image
                              src={P2}
                              alt={`Nature photography ${item}`}
                              width={600}
                              height={400}
                              className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <h3 className="text-white font-medium">
                                Nature Landscape {item}
                              </h3>
                              <p className="text-white/80 text-sm mt-1">
                                By IUTPS Member
                              </p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 w-fit bg-transparent text-white border-white hover:bg-white hover:text-black"
                              >
                                <Eye className="mr-2 h-4 w-4" /> View Full Size
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
      
                    <TabsContent value="pronoia" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div
                            key={item}
                            className="group relative overflow-hidden rounded-lg"
                          >
                            <Image
                              src={P3}
                              alt={`Portrait photography ${item}`}
                              width={600}
                              height={400}
                              className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <h3 className="text-white font-medium">
                                Portrait Study {item}
                              </h3>
                              <p className="text-white/80 text-sm mt-1">
                                By IUTPS Member
                              </p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 w-fit bg-transparent text-white border-white hover:bg-white hover:text-black"
                              >
                                <Eye className="mr-2 h-4 w-4" /> View Full Size
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
      
                    <TabsContent value="iut" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div
                            key={item}
                            className="group relative overflow-hidden rounded-lg"
                          >
                            <Image
                              src={P4}
                              alt={`Street photography ${item}`}
                              width={600}
                              height={400}
                              className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <h3 className="text-white font-medium">
                                Street Scene {item}
                              </h3>
                              <p className="text-white/80 text-sm mt-1">
                                By IUTPS Member
                              </p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 w-fit bg-transparent text-white border-white hover:bg-white hover:text-black"
                              >
                                <Eye className="mr-2 h-4 w-4" /> View Full Size
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
      
                    <TabsContent value="walk" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div
                            key={item}
                            className="group relative overflow-hidden rounded-lg"
                          >
                            <Image
                              src={P6}
                              alt={`Architecture photography ${item}`}
                              width={600}
                              height={400}
                              className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <h3 className="text-white font-medium">
                                Architectural Study {item}
                              </h3>
                              <p className="text-white/80 text-sm mt-1">
                                By IUTPS Member
                              </p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 w-fit bg-transparent text-white border-white hover:bg-white hover:text-black"
                              >
                                <Eye className="mr-2 h-4 w-4" /> View Full Size
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
      
                  <div className="mt-12 text-center">
                    <Button className="gap-2 bg-[#83C044] text-black hover:bg-[#6ea837] px-6 py-4">
                        View All <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
        </section>

    </>
);
}