import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Camera } from "lucide-react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";




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
import BTC from "../public/btc.jpg";
import PRONOIA from "../public/pronoia.jpg";
import ADDA from "../public/adda.jpg";
import PRITUL from "../public/pritul.jpg";
import SAMI from "../public/sami.jpg";
import MUHID from "../public/muhid.jpg";
import TAHIA from "../public/tahia.jpg";
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



        {/* Events Section */}
        <section id="events" className="py-24 flex justify-center items-center">
          <div className="container text-center">
            <div className="mb-16">
              <Badge className="mb-4 mx-auto">Upcoming</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#83C044] mb-6">
                Events & Workshops
              </h2>
              <p className="mt-4 text-white max-w-[600px] mx-auto">
                Join us for workshops, photo walks, and exhibitions to enhance your photography skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {[
                {
                  title: "Break the Circle",
                  description: "Learn techniques for capturing compelling urban landscapes and street scenes.",
                  image: "1",
                },
                {
                  title: "Pronoia - Intra-IUT Photo Exhibition",
                  description: "Explore the beauty of nature through your lens with guidance from experienced photographers.",
                  image: "2",
                },
                {
                  title: "Artisan Adda",
                  description: "Showcase featuring the best works from our members throughout the year.",
                  image: "3",
                },
              ].map((event, index) => (
                <Card
                  key={index}
                  className="group duration-300 bg-transparent shadow-none border-none"
                >
                  <div className="aspect-[3/4] relative overflow-hidden rounded-none">
                    <Image
                      src={event.image === "1" ? BTC : event.image === "2" ? PRONOIA : ADDA}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 text-center bg-transparent rounded-lg ">
                    <h3 className="text-xl text-[#83C044] font-bold">{event.title}</h3>
                    <p className="mt-4 text-sm text-white">{event.description}</p>
                    <Button className="mt-6 w-fit mx-auto gap-2 bg-[#83C044] text-black hover:bg-[#6ea837]">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="gap-2 rounded-full px-8 mx-auto">
                View All Events <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="py-24">
          <div className="container mx-auto text-center">
            <div className="text-center mb-16">
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl text-[#83C044] font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Alumni Say</h2>
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
                <Card key={index} className="bg-background border-none shadow-md text-center p-6 flex flex-col justify-between h-full">
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
                        <path
                          d="M13.4 36C9.4 36 6.2 34.6667 3.8 32C1.4 29.2 0.2 25.8667 0.2 22C0.2 18.4 1.13333 15.0667 3 12C4.86667 8.93333 7.4 6.4 10.6 4.4C13.8 2.4 17.4667 1.06667 21.6 0.4L23.8 5.2C20.6 6.13333 17.8667 7.33333 15.6 8.8C13.3333 10.2667 11.8 12 11 14C10.2 16 10.0667 18.1333 10.6 20.4C12.0667 19.7333 13.6667 19.4 15.4 19.4C17.9333 19.4 20.0667 20.2667 21.8 22C23.5333 23.7333 24.4 25.8667 24.4 28.4C24.4 31.0667 23.4667 33.2667 21.6 35C19.7333 35.6667 17.4 36 13.4 36ZM34.2 36C30.2 36 27 34.6667 24.6 32C22.2 29.2 21 25.8667 21 22C21 18.4 21.9333 15.0667 23.8 12C25.6667 8.93333 28.2 6.4 31.4 4.4C34.6 2.4 38.2667 1.06667 42.4 0.4L44.6 5.2C41.4 6.13333 38.6667 7.33333 36.4 8.8C34.1333 10.2667 32.6 12 31.8 14C31 16 30.8667 18.1333 31.4 20.4C32.8667 19.7333 34.4667 19.4 36.2 19.4C38.7333 19.4 40.8667 20.2667 42.6 22C44.3333 23.7333 45.2 25.8667 45.2 28.4C45.2 31.0667 44.2667 33.2667 42.4 35C40.5333 35.6667 38.2 36 34.2 36Z"
                        />
                      </svg>
                      <p className="text-muted-foreground">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <div className="relative h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          src={testimonial.image === "1" ? BTC : testimonial.image === "2" ? PRONOIA : ADDA}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 flex justify-center items-center">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Team</Badge>
              <h2 className="text-3xl text-[#83C044] font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet The Leadership</h2>
              <p className="mt-4 text-white max-w-[600px] mx-auto">
                The passionate individuals behind IUTPS who work tirelessly to create opportunities for our members
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
                      src={member.image === "1" ? PRITUL : member.image === "2" ? SAMI : member.image === "3" ? MUHID : TAHIA}
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
                  <h3 className="text-xl text-[#83C044] font-bold text-center">{member.name}</h3>
                  <p className="text-[#0D7C70] font-medium text-center">{member.role}</p>
                  <p className="mt-2 text-sm text-white text-center padding-10">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-24 flex justify-center items-center">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <Badge className="mb-4">Contact Us</Badge>
                <h2 className="text-3xl font-bold text-[#83C044] tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="mt-4 text-white max-w-[500px]">
                  Have questions or want to join IUTPS? Reach out to us and we'll get back to you as soon as possible.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="h-5 w-5 text-[#83C044]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#83C044]">Email Us</h3>
                      <p className="text-white mt-1">contact@iutps.edu</p>
                      <p className="text-sm text-white mt-1">We'll respond within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="h-5 w-5 text-[#83C044]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#83C044]">Visit Us</h3>
                      <p className="text-white mt-1">IUT Campus, Photography Building, Room 101</p>
                      <p className="text-sm text-white mt-1">Open Monday-Friday, 9am-5pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="h-5 w-5 text-[#83C044]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#83C044]">Call Us</h3>
                      <p className="text-white mt-1">+123 456 7890</p>
                      <p className="text-sm text-white mt-1">Available during business hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4 text-white">Follow Us</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-6">
                      <Link href="#" className="flex items-center gap-2 text-[#83C044] hover:text-white">
                        <Instagram className="h-5 w-5" />
                        <span>Instagram</span>
                      </Link>
                      <Link href="#" className="flex items-center gap-2 text-[#83C044] hover:text-white">
                        <Facebook className="h-5 w-5" />
                        <span>Facebook</span>
                      </Link>
                      <Link href="#" className="flex items-center gap-2 text-[#83C044] hover:text-white">
                        <Twitter className="h-5 w-5" />
                        <span>Twitter</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>




        {/* Footer */}
        <footer className="border-t py-12 flex justify-center items-center bg-[#0d0c1f]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <Camera className="h-6 w-6 text-[#83C044]" />
                  <span className="text-xl font-bold tracking-tight text-[#83C044]">IUTPS</span>
                </div>
                <p className="text-sm text-white mb-6">
                  IUT Photographic Society is dedicated to promoting photography as both an art form and a means of
                  documentation.
                </p>
                <div className="flex gap-4">
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-[#83C044]">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-[#83C044]">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-[#83C044]">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4 text-[#83C044]">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="#home" className="text-white hover:text-[#83C044] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="text-white hover:text-[#83C044] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#gallery" className="text-white hover:text-[#83C044] transition-colors">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="#events" className="text-white hover:text-[#83C044] transition-colors">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="#team" className="text-white hover:text-[#83C044] transition-colors">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-white hover:text-[#83C044] transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4 text-[#83C044]">Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                      Photography Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                      Equipment Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                      Membership
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4 text-[#83C044]">Contact</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-0.5 text-[#83C044]" />
                    <span className="text-white">contact@iutps.edu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-[#83C044]" />
                    <span className="text-white">IUT Campus, Photography Building, Room 101</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-0.5 text-[#83C044]" />
                    <span className="text-white">+123 456 7890</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-white">
                © {new Date().getFullYear()} IUT Photographic Society. All rights reserved. Developed by Tahsin Islam
              </div>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-white hover:text-[#83C044] transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>






      </main>
    </div>
  );
}