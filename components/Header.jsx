"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { href: "/", label: "Home", hasDropdown: false },
    { href: "/about", label: "About", hasDropdown: false },
    { 
      href: "/events", 
      label: "Events", 
      hasDropdown: true,
      dropdownItems: [
        { href: "/btc", label: "BTC", icon: ExternalLink },
        { href: "/pronoia", label: "Pronoia", icon: Sparkles },
      ]
    },
    { href: "/team", label: "Members", hasDropdown: false },
    { href: "/gallery", label: "Gallery", hasDropdown: false },
    { href: "/contact", label: "Contact", hasDropdown: false },
  ];

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Glass morphism backdrop */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        
        {/* Navigation */}
        <header className={`relative transition-all duration-500 ${
          isScrolled 
            ? "shadow-2xl shadow-emerald-500/10 border-b border-white/10" 
            : "shadow-lg"
        }`}>
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#83C044] to-transparent opacity-60" />
          
          <div className="mx-auto py-5 md:px-20 px-6 flex items-center justify-between">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#83C044]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                <Image 
                  src="/pslogo1.svg" 
                  alt="IUTPS Logo" 
                  width={36} 
                  height={36} 
                  className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl tracking-wide">IUTPS</h1>
                <p className="text-[#83C044]/80 text-xs font-medium">Photography Society</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`
                      group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
                      flex items-center gap-1
                      ${isActive(item.href) 
                        ? "text-[#83C044] bg-[#83C044]/10 shadow-lg shadow-[#83C044]/20" 
                        : "text-white/90 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === item.href ? "rotate-180" : ""
                      }`} />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#83C044]/0 via-[#83C044]/10 to-[#83C044]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#83C044] rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.href && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="group flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-[#83C044]/10 transition-all duration-200"
                          >
                            <dropdownItem.icon className="w-4 h-4 text-[#83C044]" />
                            <span className="font-medium">{dropdownItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="flex items-center gap-3">
              
              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>

          {/* Bottom glow effect */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </header>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
}
