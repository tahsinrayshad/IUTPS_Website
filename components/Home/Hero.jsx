import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PSLogo from "@/public/pslogo-dark.png";
import { Instagram, Facebook, Twitter, Menu } from "lucide-react";
export default function Hero() {
  return (
    <>
      {/* Navigation */}
      <section className="md:px-20 min-h-[90vh] flex items-center justify-between">
          {/* Background Image */}
          {/* <div className="absolute inset-0 -z-10">
            <Image 
              src={PS} 
              alt="Photography background" 
              fill 
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/00" />
          </div> */}

          {/* Hero Content */}
          <div className=" mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6 text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Capturing Moments, Creating Memories
                </h1>
                <p className="text-lg text-white/90">
                  IUT Photographic Society is a community of passionate
                  photographers dedicated to exploring the art and science of
                  photography.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className="rounded-md bg-[#83C044] hover:bg-[#91d34e] hover:text-white text-[#0d0c1f] font-medium  duration-300 cursor-pointer tranition-all ease-in-out"
                  >
                    Explore Gallery
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-md bg-transparent border-white text-white hover:bg-white hover:text-black"
                  >
                    Join IUTPS
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-6">
                  <Link
                    href="#"
                    className="flex items-center  gap-2 text-white/80 hover:text-white"
                  >
                    <Instagram className=" h-8 w-8 " />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    <Facebook className="h-8 w-8" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    <Twitter className="h-8 w-8" />
                  </Link>
                </div>
              </div>

              {/* Optional Right Column */}
              <div className="hidden md:block">
                <div className="flex items-center justify-center overflow-hidden rounded-lg z-10">
                  <Image src={PSLogo} alt="IUTPS" height={400} />
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
