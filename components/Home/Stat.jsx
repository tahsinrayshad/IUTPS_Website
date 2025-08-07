"use client"

import React, { useState, useEffect, useRef } from "react";
import { Camera, Aperture, Eye, Palette } from 'lucide-react';
import statsData from '@/data/stats.json';

export default function Stat() {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCountingAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCountingAnimation = () => {
    statsData.stats.forEach((stat, index) => {
      setTimeout(() => {
        const target = parseInt(stat.number.replace('+', ''));
        animateCounter(stat.id, target);
      }, index * 300);
    });
  };

  const animateCounter = (id, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCountedValues(prev => ({ ...prev, [id]: Math.floor(current) }));
    }, 40);
  };

  const colors = ['#83C044', '#83C044', '#83C044', '#83C044']; // Consistent header green

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-black w-full overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Simple Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group text-center transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Simple Card */}
              <div className="relative p-8 rounded-3xl bg-white/5 border border-gray-600/20 hover:border-[#83C044]/40 transition-all duration-300 group-hover:scale-105 hover:bg-white/10">
                {/* Number */}
                <div 
                  className="text-5xl md:text-6xl font-bold mb-4 transition-all duration-700"
                  style={{ color: colors[index] }}
                >
                  {countedValues[stat.id] || 0}+
                </div>
                
                {/* Label */}
                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#83C044]/90 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ 
                    boxShadow: `0 0 30px ${colors[index]}30, inset 0 0 20px ${colors[index]}10`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
