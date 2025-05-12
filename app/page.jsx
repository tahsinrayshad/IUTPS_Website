import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Camera } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


import { Instagram, Facebook, Twitter , Menu} from "lucide-react";
import Logo from "../public/pslogo1.svg";
import TeamPS from "../public/teamps.jpg";
import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  return (
    <div className="min-h-90vh flex flex-col bg-[#12102A]">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-[#0d0c1f] shadow-md">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" width={30} height={30} />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#home" 
              className="text-[#83C044] hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              About
            </Link>
            <Link 
              href="#gallery" 
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Gallery
            </Link>
            <Link 
              href="#events" 
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Events
            </Link>
            <Link 
              href="#team" 
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Team
            </Link>
            <Link 
              href="#contact" 
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Join Us Button and Mobile Navigation */}
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex bg-[#83C044] hover:bg-[#91d34e] text-[#0d0c1f] font-medium transition-colors duration-300">
              Join Us
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[100vh] flex items-center">
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
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6 text-left">
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
                  <Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white">
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white">
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-white/80 hover:text-white">
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </Link>
                </div>
              </div>

              {/* Optional Right Column */}
              <div className="hidden md:block"></div>
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-16 bg-[#12102A]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[#83C044]">200+</span>
                <span className="mt-2 text-sm text-white/70">Active Members</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[#83C044]">50+</span>
                <span className="mt-2 text-sm text-white/70">Events Organized</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[#83C044]">10+</span>
                <span className="mt-2 text-sm text-white/70">Exhibitions</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[#83C044]">15+</span>
                <span className="mt-2 text-sm text-white/70">Years of Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-[#12102A]">
          <div className="container px-4 mx-auto">
            <div className="min-h-[80vh] md:min-h-[100vh] flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
              {/* Left Column */}
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="max-w-[600px] mx-auto">
                  <Badge className="mb-4">About Us</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#83C044] mb-6">
                    About IUTPS
                  </h2>
                  
                  <div className="space-y-4 text-white mb-8">
                    <p className="text-base md:text-lg">
                      The IUT Photographic Society (IUTPS) is a vibrant community of photography enthusiasts dedicated
                      to exploring the art and science of photography.
                    </p>
                    <p className="text-base md:text-lg">
                      Founded in 2010, we've been providing a platform for students to develop their skills,
                      showcase their work, and connect with fellow photographers.
                    </p>
                    <p className="text-base md:text-lg">
                      Our mission is to promote photography as both an art form and a means of documentation,
                      while fostering creativity and technical excellence among our members.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-white mb-8">
                    <div className="flex flex-col p-4 bg-[#1a1835] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-[#83C044]" />
                        <span className="font-medium">Community</span>
                      </div>
                      <p className="text-sm text-gray-300">Connect with like-minded photographers</p>
                    </div>
                    <div className="flex flex-col p-4 bg-[#1a1835] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-[#83C044]" />
                        <span className="font-medium">Excellence</span>
                      </div>
                      <p className="text-sm text-gray-300">Develop your skills and techniques</p>
                    </div>
                    <div className="flex flex-col p-4 bg-[#1a1835] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Camera className="h-5 w-5 text-[#83C044]" />
                        <span className="font-medium">Creativity</span>
                      </div>
                      <p className="text-sm text-gray-300">Express yourself through photography</p>
                    </div>
                  </div>

                  <Button className="gap-2 bg-[#83C044] text-black hover:bg-[#6ea837] px-6 py-4">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative aspect-[4/3] max-w-[600px] mx-auto">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                    <Image src={TeamPS} alt="Logo" width={1200} height={1200} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-48 md:h-48 bg-[#83C044]/10 rounded-lg -z-10"></div>
                  <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 bg-[#83C044]/10 rounded-lg -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        


      </main>
    </div>
  );
}