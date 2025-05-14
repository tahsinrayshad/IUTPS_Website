import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import BTC from "@/public/btc.jpg";
import PRONOIA from "@/public/pronoia.jpg";
import ADDA from "@/public/adda.jpg";

export default function Alumni() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-24 px-20">
        <div className=" mx-auto text-center">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl text-[#83C044] font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Alumni Say
            </h2>
            <p className="mt-4 text-white max-w-[600px] mx-auto">
              Hear from our community about their experiences with IUTPS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Joining IUTPS was one of the best decisions I made during my time at IUT. The workshops and community support helped me develop my skills tremendously.",
                name: "Alex Johnson",
                role: "Photography Student",
                image: "1",
              },
              {
                quote:
                  "The mentorship and feedback I received from senior members helped me win my first photography competition. IUTPS is more than just a society, it's a family.",
                name: "Sarah Chen",
                role: "Portrait Photographer",
                image: "2",
              },
              {
                quote:
                  "The exhibitions organized by IUTPS gave me the confidence to showcase my work. The technical workshops were invaluable for improving my photography skills.",
                name: "Michael Lee",
                role: "Landscape Photographer",
                image: "3",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background border-none shadow-md text-center p-6 flex flex-col justify-between h-full"
              >
                <CardContent className="flex flex-col items-center justify-between h-full">
                  <div className="mb-6 text-primary/30">
                    <svg
                      width="45"
                      height="36"
                      viewBox="0 0 45 36"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-4"
                    >
                      <path d="M13.4 36C9.4 36 6.2 34.6667 3.8 32C1.4 29.2 0.2 25.8667 0.2 22C0.2 18.4 1.13333 15.0667 3 12C4.86667 8.93333 7.4 6.4 10.6 4.4C13.8 2.4 17.4667 1.06667 21.6 0.4L23.8 5.2C20.6 6.13333 17.8667 7.33333 15.6 8.8C13.3333 10.2667 11.8 12 11 14C10.2 16 10.0667 18.1333 10.6 20.4C12.0667 19.7333 13.6667 19.4 15.4 19.4C17.9333 19.4 20.0667 20.2667 21.8 22C23.5333 23.7333 24.4 25.8667 24.4 28.4C24.4 31.0667 23.4667 33.2667 21.6 35C19.7333 35.6667 17.4 36 13.4 36ZM34.2 36C30.2 36 27 34.6667 24.6 32C22.2 29.2 21 25.8667 21 22C21 18.4 21.9333 15.0667 23.8 12C25.6667 8.93333 28.2 6.4 31.4 4.4C34.6 2.4 38.2667 1.06667 42.4 0.4L44.6 5.2C41.4 6.13333 38.6667 7.33333 36.4 8.8C34.1333 10.2667 32.6 12 31.8 14C31 16 30.8667 18.1333 31.4 20.4C32.8667 19.7333 34.4667 19.4 36.2 19.4C38.7333 19.4 40.8667 20.2667 42.6 22C44.3333 23.7333 45.2 25.8667 45.2 28.4C45.2 31.0667 44.2667 33.2667 42.4 35C40.5333 35.6667 38.2 36 34.2 36Z" />
                    </svg>
                    <p className="text-muted-foreground">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="relative h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={
                          testimonial.image === "1"
                            ? BTC
                            : testimonial.image === "2"
                            ? PRONOIA
                            : ADDA
                        }
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
