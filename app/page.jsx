import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Logo from "../public/pslogo.svg";
import PS from "../public/ps.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" width={30} height={30} />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
            <Link href="#events" className="text-gray-700 hover:text-blue-600">Events</Link>
            <Link href="#team" className="text-gray-700 hover:text-blue-600">Team</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>

          {/* Join Us Button */}
          <div className="flex items-center">
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
              Join Us
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 -z-10">
            <div className="relative h-full w-full">
              <Image 
                src={PS} 
                alt="Photography background" 
                layout="fill" 
                objectFit="cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column (Content) */}
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Capturing Moments, Creating Memories
                </h1>
                <p className="text-lg text-white/90">
                  IUT Photographic Society is a community of passionate photographers dedicated to exploring the art and
                  science of photography.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="rounded-md bg-blue-600 hover:bg-blue-700">
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
                <div className="flex items-center gap-6 pt-6">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </Link>
                </div>
              </div>
              
              {/* Right Column (Empty for layout balance) */}
              <div className="hidden md:block"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}