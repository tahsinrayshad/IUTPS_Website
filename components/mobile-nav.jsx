"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Camera } from "lucide-react"
import Logo from "../public/pslogo1.svg";
import Image from "next/image"

export function MobileNav() {
  // Using explicit useState hook
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white" 
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-half max-w-[320px] sm:w-80 pr-0 bg-[#0d0c1f] text-white border-l border-gray-800"
      >
        <SheetHeader className="flex justify-center items-center">
          <SheetTitle className="flex items-center gap-2 text-white">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} alt="Logo" width={30} height={30} />
            </Link>
            <span>IUTPS</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col items-center gap-4">
          {[
            { href: "#home", label: "Home", active: true },
            { href: "#about", label: "About", active: false },
            { href: "#gallery", label: "Gallery", active: false },
            { href: "#events", label: "Events", active: false },
            { href: "#team", label: "Team", active: false },
            { href: "#contact", label: "Contact", active: false },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center py-2 text-base font-medium transition-colors ${
                item.active 
                  ? "text-[#83C044]" 
                  : "text-white hover:text-[#83C044]"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            className="mt-4 bg-[#83C044] text-[#0d0c1f] hover:bg-[#91d34e]"
          >
            Join Us
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
