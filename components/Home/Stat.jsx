import React from "react";

export default function Stat() {
  return (
    <>
      {/* Navigation */}
      <section className="py-16 bg-[#12102A] min-h-[10vh]">
        <div className=" mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#83C044]">200+</span>
              <span className="mt-2 text-sm text-white/70">Active Members</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#83C044]">50+</span>
              <span className="mt-2 text-sm text-white/70">
                Events Organized
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#83C044]">10+</span>
              <span className="mt-2 text-sm text-white/70">Exhibitions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#83C044]">15+</span>
              <span className="mt-2 text-sm text-white/70">
                Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
