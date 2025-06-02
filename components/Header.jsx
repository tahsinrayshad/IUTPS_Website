import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../public/pslogo1.svg";
import { MobileNav } from "@/components/mobile-nav";

export default function Header() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-100 bg-[#0d0c1f] shadow-md">
        <div className="mx-auto py-4 md:px-20 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" width={30} height={30} />
          </Link>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Gallery
            </Link>
            <Link
              href="/events"
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Events
            </Link>
            <Link
              href="/team"
              className="text-white hover:text-[#83C044] transition-all duration-300 transform hover:scale-105"
            >
              Team
            </Link>
            <Link
              href="/contact"
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

    </>
  );
}
