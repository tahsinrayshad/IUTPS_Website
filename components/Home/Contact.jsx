import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import { Instagram, Facebook, Twitter, Menu } from "lucide-react";


export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-20 bg-black">
        
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#83C044] tracking-tighter sm:text-4xl md:text-5xl">
                Get In Touch
              </h2>
              <p className="mt-4 text-white max-w-[500px]">
                Have questions or want to join IUTPS? Reach out to us and we'll
                get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#83C044]/10 p-3 rounded-full border border-[#83C044]/20">
                    <Mail className="h-5 w-5 text-[#83C044]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#83C044]">Email Us</h3>
                    <p className="text-white mt-1">contact@iutps.edu</p>
                    <p className="text-sm text-gray-400 mt-1">
                      We'll respond within 24-48 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#83C044]/10 p-3 rounded-full border border-[#83C044]/20">
                    <MapPin className="h-5 w-5 text-[#83C044]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#83C044]">Visit Us</h3>
                    <p className="text-white mt-1">
                      IUT Campus, Photography Building, Room 101
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Open Monday-Friday, 9am-5pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#83C044]/10 p-3 rounded-full border border-[#83C044]/20">
                    <Phone className="h-5 w-5 text-[#83C044]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#83C044]">Call Us</h3>
                    <p className="text-white mt-1">+123 456 7890</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Available during business hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium mb-4 text-white">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-6">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-[#83C044] hover:text-white transition-colors duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-[#83C044] hover:text-white transition-colors duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-[#83C044] hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                      <span>Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-[#83C044]/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-[#83C044]">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none text-white mb-2 block"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-[#83C044]/30 bg-black/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83C044] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none text-white mb-2 block"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-[#83C044]/30 bg-black/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83C044] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none text-white mb-2 block"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-[#83C044]/30 bg-black/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83C044] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none text-white mb-2 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[150px] w-full rounded-md border border-[#83C044]/30 bg-black/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83C044] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full bg-[#83C044] hover:bg-[#83C044]/80 text-black font-semibold">Send Message</Button>
              </form>
            </div>
          </div>
        
      </section>
    </>
  );
}
