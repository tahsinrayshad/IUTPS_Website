import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../public/pslogo1.svg";
import { MobileNav } from "@/components/mobile-nav";
import { Instagram, Facebook, Twitter, Camera, Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <>
      {/* Navigation */}
     <footer className="border-t py-12 flex justify-center items-center bg-black px-20">
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

    </>
  );
}
