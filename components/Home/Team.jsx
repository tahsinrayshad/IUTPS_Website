import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Facebook, Twitter, Menu } from "lucide-react";
import PRITUL from "@/public/pritul.jpg";
import SAMI from "@/public/sami.jpg";
import MUHID from "@/public/muhid.jpg";
import TAHIA from "@/public/tahia.jpg";

export default function Team() {
  return (
    <>
      {/* Team Section */}
      <section id="team" className="py-24 px-20 flex justify-center items-center">
        <div className="">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl text-[#83C044] font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet The Leadership
            </h2>
            <p className="mt-4 text-white max-w-[600px] mx-auto">
              The passionate individuals behind IUTPS who work tirelessly to
              create opportunities for our members
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[
              {
                name: "Mehabub Rahman Pritul",
                role: "President",
                image: "1",
                bio: "Photography enthusiast with 5+ years of experience in portrait and landscape photography.",
              },
              {
                name: "Ittehad Rahman Sami",
                role: "Vice President (Administration)",
                image: "2",
                bio: "Award-winning photographer specializing in street photography and documentary.",
              },
              {
                name: "Muhid Rahman",
                role: "Vice President (Operations)",
                image: "3",
                bio: "Passionate about architectural photography and teaching photography basics.",
              },
              {
                name: "Tahiatul Benta Mustafiz",
                role: "Treasurer",
                image: "4",
                bio: "Event organizer and nature photographer with a keen eye for detail.",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative mx-auto w-80 h-80 overflow-hidden rounded-lg mb-6">
                  <Image
                    src={
                      member.image === "1"
                        ? PRITUL
                        : member.image === "2"
                        ? SAMI
                        : member.image === "3"
                        ? MUHID
                        : TAHIA
                    }
                    alt={member.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-black"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-black"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl text-[#83C044] font-bold text-center">
                  {member.name}
                </h3>
                <p className="text-[#0D7C70] font-medium text-center">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-white text-center padding-10">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
