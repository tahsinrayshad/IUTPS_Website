import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Camera } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye } from "lucide-react";


import { Instagram, Facebook, Twitter , Menu} from "lucide-react";
import Logo from "../public/pslogo1.svg";
import TeamPS from "../public/teamps.jpg";
import PSLogo from "../public/pslogo-dark.png"
import P1 from "../public/p1.jpg";
import P2 from "../public/p2.jpg";
import P3 from "../public/p3.jpg";
import P4 from "../public/p4.jpg";
import P5 from "../public/p5.jpg";
import P6 from "../public/p6.jpg";
import P7 from "../public/p7.jpg";
import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  return (
    <div className="min-h-90vh flex flex-col bg-[#12102A]">
      {/* Navigation */}
      <header className="sticky top-0 z-100 bg-[#0d0c1f] shadow-md">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" width={30} height={30} />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#home" 
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
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
        <section id="home" className="relative min-h-[90vh] flex items-center">
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
                  <Button size="lg" className="rounded-md bg-[#83C044] hover:bg-[#91d34e] text-[#0d0c1f] font-medium transition-colors duration-300">
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
              <div className="hidden md:block">
                <div className="flex items-center justify-center overflow-hidden rounded-lg z-10">
                    <Image src={PSLogo} alt="IUTPS" height={400} />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-16 bg-[#12102A] min-h-[10vh]">
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
                      <Image src={TeamPS} alt="IUTPS" width={800} height={800} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        




        {/* Gallery Section */}
        <section id="gallery" className="py-24 flex justify-center items-center">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 ">Our Work</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#83C044] mb-6">Featured Gallery</h2>
              <p className="mt-4 text-white max-w-[600px] mx-auto">
                Explore the stunning work captured by our talented members across various photography genres
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
                    <div key={item} className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={P2}
                        alt={`Nature photography ${item}`}
                        width={600}
                        height={400}
                        className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-medium">Nature Landscape {item}</h3>
                        <p className="text-white/80 text-sm mt-1">By IUTPS Member</p>
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
                    <div key={item} className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={P3}
                        alt={`Portrait photography ${item}`}
                        width={600}
                        height={400}
                        className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-medium">Portrait Study {item}</h3>
                        <p className="text-white/80 text-sm mt-1">By IUTPS Member</p>
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
                    <div key={item} className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={P4}
                        alt={`Street photography ${item}`}
                        width={600}
                        height={400}
                        className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-medium">Street Scene {item}</h3>
                        <p className="text-white/80 text-sm mt-1">By IUTPS Member</p>
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
                    <div key={item} className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={P6}
                        alt={`Architecture photography ${item}`}
                        width={600}
                        height={400}
                        className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-medium">Architectural Study {item}</h3>
                        <p className="text-white/80 text-sm mt-1">By IUTPS Member</p>
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
              <Button variant="outline" className="gap-2 rounded-full px-8">
                View Full Gallery <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}