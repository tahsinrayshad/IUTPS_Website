import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import BTC from "@/public/btc.jpg";
import PRONOIA from "@/public/pronoia.jpg";
import ADDA from "@/public/adda.jpg";


export default function Event() {
  return (
    <>
      {/* Events Section */}
              <section id="events" className="py-24 flex justify-center items-center px-20">
                <div className=" text-center">
                  <div className="mb-16">
                    <Badge className="mb-4 mx-auto">Upcoming</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#83C044] mb-6">
                      Events & Workshops
                    </h2>
                    <p className="mt-4 text-white max-w-[600px] mx-auto">
                      Join us for workshops, photo walks, and exhibitions to enhance
                      your photography skills
                    </p>
                  </div>
      
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {[
                      {
                        title: "Break the Circle",
                        description:
                          "Learn techniques for capturing compelling urban landscapes and street scenes.",
                        image: "1",
                      },
                      {
                        title: "Pronoia - Intra-IUT Photo Exhibition",
                        description:
                          "Explore the beauty of nature through your lens with guidance from experienced photographers.",
                        image: "2",
                      },
                      {
                        title: "Artisan Adda",
                        description:
                          "Showcase featuring the best works from our members throughout the year.",
                        image: "3",
                      },
                    ].map((event, index) => (
                      <Card
                        key={index}
                        className="group duration-300 bg-transparent shadow-none border-none"
                      >
                        <div className="aspect-[3/4] relative overflow-hidden rounded-none">
                          <Image
                            src={
                              event.image === "1"
                                ? BTC
                                : event.image === "2"
                                ? PRONOIA
                                : ADDA
                            }
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6 text-center bg-transparent rounded-lg ">
                          <h3 className="text-xl text-[#83C044] font-bold">
                            {event.title}
                          </h3>
                          <p className="mt-4 text-sm text-white">
                            {event.description}
                          </p>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-md bg-transparent border-white text-white hover:bg-white hover:text-black mt-6"
                                >
                                Learn More
                            </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
      
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