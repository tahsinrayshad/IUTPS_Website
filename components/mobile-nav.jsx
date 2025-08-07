"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Home, User, Calendar, Users, Camera, Phone, ExternalLink, Sparkles, ChevronDown } from "lucide-react"
import Image from "next/image"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [eventsExpanded, setEventsExpanded] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { 
      href: "/events", 
      label: "Events", 
      icon: Calendar, 
      hasDropdown: true,
      subItems: [
        { href: "/btc", label: "BTC", icon: ExternalLink },
        { href: "/pronoia", label: "Pronoia", icon: Sparkles },
      ]
    },
    { href: "/team", label: "Members", icon: Users },
    { href: "/gallery", label: "Gallery", icon: Camera },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  const isActive = (href) => pathname === href

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden relative group text-white hover:bg-white/10 transition-all duration-300" 
        >
          <div className="relative">
            <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#83C044]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full max-w-sm p-0 bg-black/95 backdrop-blur-xl text-white border-l border-white/10"
      >
        {/* Header */}
        <SheetHeader className="px-6 py-6 border-b border-white/10">
          <SheetTitle className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              onClick={() => setOpen(false)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#83C044]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                <Image src="/pslogo1.svg" alt="Logo" width={32} height={32} className="relative z-10" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">IUTPS</h1>
                <p className="text-[#83C044]/80 text-xs font-medium">Photography Society</p>
              </div>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.href}>
                {/* Main Navigation Item */}
                {item.hasDropdown ? (
                  <button
                    onClick={() => setEventsExpanded(!eventsExpanded)}
                    className={`
                      group flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 w-full
                      ${isActive(item.href) || item.subItems?.some(subItem => isActive(subItem.href))
                        ? "text-[#83C044] bg-[#83C044]/10 shadow-lg shadow-[#83C044]/20 border border-[#83C044]/20" 
                        : "text-white/80 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    <div className="relative">
                      <item.icon className={`w-5 h-5 transition-all duration-300 ${
                        isActive(item.href) || item.subItems?.some(subItem => isActive(subItem.href)) 
                          ? "text-[#83C044]" 
                          : "text-white/60 group-hover:text-[#83C044]"
                      }`} />
                      {(isActive(item.href) || item.subItems?.some(subItem => isActive(subItem.href))) && (
                        <div className="absolute inset-0 bg-[#83C044]/20 rounded-full blur-sm" />
                      )}
                    </div>
                    <span className="relative z-10 flex-1 text-left">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      eventsExpanded ? "rotate-180" : ""
                    }`} />
                    
                    {/* Active indicator */}
                    {(isActive(item.href) || item.subItems?.some(subItem => isActive(subItem.href))) && (
                      <div className="w-2 h-2 bg-[#83C044] rounded-full animate-pulse" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      group flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300
                      ${isActive(item.href) 
                        ? "text-[#83C044] bg-[#83C044]/10 shadow-lg shadow-[#83C044]/20 border border-[#83C044]/20" 
                        : "text-white/80 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    <div className="relative">
                      <item.icon className={`w-5 h-5 transition-all duration-300 ${
                        isActive(item.href) ? "text-[#83C044]" : "text-white/60 group-hover:text-[#83C044]"
                      }`} />
                      {isActive(item.href) && (
                        <div className="absolute inset-0 bg-[#83C044]/20 rounded-full blur-sm" />
                      )}
                    </div>
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="ml-auto w-2 h-2 bg-[#83C044] rounded-full animate-pulse" />
                    )}
                  </Link>
                )}

                {/* Dropdown Sub-items */}
                {item.hasDropdown && eventsExpanded && (
                  <div className="ml-6 mt-2 space-y-1 overflow-hidden">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setOpen(false)}
                        className={`
                          group flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 border-l-2
                          ${isActive(subItem.href) 
                            ? "text-[#83C044] bg-[#83C044]/10 border-[#83C044] shadow-md" 
                            : "text-white/70 hover:text-white hover:bg-white/5 border-white/20 hover:border-[#83C044]/50"
                          }
                        `}
                      >
                        <div className="relative">
                          <subItem.icon className={`w-4 h-4 transition-all duration-300 ${
                            isActive(subItem.href) ? "text-[#83C044]" : "text-white/50 group-hover:text-[#83C044]"
                          }`} />
                          {isActive(subItem.href) && (
                            <div className="absolute inset-0 bg-[#83C044]/20 rounded-full blur-sm" />
                          )}
                        </div>
                        <span className="relative z-10">{subItem.label}</span>
                        
                        {/* Active indicator for sub-items */}
                        {isActive(subItem.href) && (
                          <div className="ml-auto w-1.5 h-1.5 bg-[#83C044] rounded-full animate-pulse" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Footer CTA */}
        <div className="px-6 py-6 border-t border-white/10">
          <Button 
            className="w-full group relative overflow-hidden bg-gradient-to-r from-[#83C044] to-[#91d34e] hover:from-[#91d34e] hover:to-[#83C044] text-black font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setOpen(false)}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Join Our Community
            </span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
          
          <p className="text-center text-white/60 text-xs mt-3">
            Connect with fellow photographers
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
