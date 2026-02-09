import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-pink-600 uppercase bg-pink-50 rounded-full">
              Our Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#001F3F]">
              Excellence Since 1998
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded on the principles of integrity, respect, and academic
              rigor, our school has been a cornerstone of quality education for
              over two decades. We believe that every child has the potential to
              achieve greatness when provided with the right environment and
              guidance.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our holistic approach combines a demanding curriculum with robust
              extracurricular programs, ensuring that our students develop not
              just intellectually, but also socially and emotionally. We take
              pride in our diverse community and our commitment to fostering a
              lifelong love for learning.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-slate-100">
              <div>
                <p className="text-4xl font-bold text-pink-600">25+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-pink-600">10k+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  Graduates Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl ">
              <img
                src="/hero.png"
                alt="Students in classroom"
                width={800}
                height={600}
                className="object-cover w-full h-[500px] transform transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
