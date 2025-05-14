import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Camera } from "lucide-react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

import { Instagram, Facebook, Twitter, Menu } from "lucide-react";
import Logo from "@/public/pslogo1.svg";
import TeamPS from "@/public/teamps.jpg";

import P2 from "@/public/p2.jpg";
import P3 from "@/public/p3.jpg";
import P4 from "@/public/p4.jpg";
import P5 from "@/public/p5.jpg";
import P6 from "@/public/p6.jpg";
import P7 from "@/public/p7.jpg";
import BTC from "@/public/btc.jpg";
import PRONOIA from "@/public/pronoia.jpg";
import ADDA from "@/public/adda.jpg";
import PRITUL from "@/public/pritul.jpg";
import SAMI from "@/public/sami.jpg";
import MUHID from "@/public/muhid.jpg";
import TAHIA from "@/public/tahia.jpg";
import { MobileNav } from "@/components/mobile-nav";
import Hero from "@/components/Home/Hero";
import Stat from "@/components/Home/Stat";
import About from "@/components/Home/About";
import Gallery from "@/components/Home/Gallary";
import Event from "@/components/Home/Event";
import Alumni from "@/components/Home/Alumni";
import Team from "@/components/Home/Team";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div className="min-h-90vh flex flex-col bg-[#12102A]">
      {/* Navigation */}

      {/* Main Content */}
      
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}     

        <Stat/>

        {/* About Section */}
        <About/>

        {/* Gallery Section */}
        <Gallery/>

        {/* Events Section */}
        <Event/>

        {/* Testimonials Section */}
        <Alumni/>

        {/* Team Section */}
        <Team/>

        {/* Contact Section */}
       <Contact/>
      
    </div>
  );
}
