"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Calendar, 
  Award, 
  ArrowRight, 
  Camera, 
  Aperture, 
  Focus,
  Sparkles,
  Eye,
  Zap,
  Star
} from 'lucide-react'
import Image from "next/image"
import imgs1 from "@/public/img/img_1.jpeg"
import imgs2 from "@/public/img/img_2.jpg"
import imgs3 from "@/public/img/img_7.jpg"
import imgs4 from "@/public/img/img_9.jpeg"

const heroImages = [
  {
    src: imgs1,
    title: "Silent Connection",
    description: "Two hands reach across boundaries",
    mood: "Hopeful",
    credit: "Farabe"
  },
  {
    src: imgs2, 
    title: "Monochrome Walk",
    description: "A lone figure crossing paths with shadows",
    mood: "Solitude",
    credit: "A N M Shahriar"
  },
  {
    src: imgs3,
    title: "Twin Gaze",
    description: "Two cranes stare into stillness",
    mood: "Serene",
    credit: "MH Hridoy"
  },
  {
    src: imgs4,
    title: "Imprisoned Innocence",
    description: "A silent cry behind the iron bars",
    mood: "Melancholy",
    credit: "Tajdeed"
  }
]



export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length)
      }, 6000) // Slower transition for more artistic feel
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  // Photography-themed reveal effect for mood text
  useEffect(() => {
    const currentMood = heroImages[currentSlide].mood
    setIsTyping(true)
    setTypedText(currentMood) // Set text immediately
    
    // Brief focus animation duration
    setTimeout(() => {
      setIsTyping(false)
    }, 1000) // Focus animation lasts 1 second
  }, [currentSlide])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const currentImage = heroImages[currentSlide]

  return (
    <section ref={heroRef} className="relative h-[90vh] overflow-hidden">
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Multi-layered Overlay for Artistic Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/40 to-black/80" />
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 mix-blend-screen animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) scale(1.2)`,
              filter: 'blur(100px)'
            }}
          />
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className={`text-white transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="mb-8">
                

                {/* Dynamic Title */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="block opacity-90">Capture</span>
                  <span className="block text-[#83C044] flex items-center">
                    <span className={`transition-all duration-500 ${isTyping ? 'blur-sm scale-95' : 'blur-0 scale-100'}`}>
                      {typedText}
                    </span>
                    {isTyping && (
                      <span className="ml-2 flex items-center">
                        {/* Camera Focus Ring Animation */}
                        <div className="relative w-6 h-6">
                          <div className="absolute inset-0 border-2 border-[#83C044]/60 rounded-full animate-ping"></div>
                          <div className="absolute inset-1 border border-[#83C044] rounded-full animate-pulse"></div>
                          <div className="absolute inset-2 bg-[#83C044]/20 rounded-full animate-spin"></div>
                        </div>
                      </span>
                    )}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                  Join IUTPS and explore the world through your lens. Learn advanced techniques, 
                  create stunning art, and showcase your vision with fellow photography enthusiasts.
                </p>
              </div>

              

              {/* Image Mood Indicator */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-white/60 text-sm">Photo Credit:</span>
                <Badge 
                  variant="outline" 
                  className={`border-none text-xs ${
                    currentImage.mood === 'dramatic' ? 'bg-red-500/20 text-red-300' :
                    currentImage.mood === 'serene' ? 'bg-blue-500/20 text-blue-300' :
                    currentImage.mood === 'dynamic' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}
                >
                  {currentImage.credit}
                </Badge>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col space-y-3 bg-black/30 backdrop-blur-xl rounded-full px-4 py-6 border border-white/20">
          {heroImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group relative transition-all duration-300 ${
                index === currentSlide ? 'scale-125' : 'hover:scale-110'
              }`}
              title={image.title}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg shadow-white/50' 
                  : 'bg-white/40 hover:bg-white/60'
              }`} />
              {index === currentSlide && (
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-white animate-ping opacity-20" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Current Image Title Overlay */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
        <div className="writing-mode-vertical text-white/60 text-sm font-light tracking-widest">
          {currentImage.title.toUpperCase()}
        </div>
      </div>
    </section>
  )
}
