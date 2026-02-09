import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-[#001F3F]/80 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center text-white">
        <h1 className="mb-6 text-5xl md:text-7xl font-playfair font-bold animate-fade-in">
          About Our School
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-blue-50/90 animate-fade-in delay-200">
          Nurturing the leaders of tomorrow through academic excellence,
          character building, and spiritual growth.
        </p>
        <div className="mt-10 flex justify-center gap-4 animate-fade-in delay-300">
          <div className="h-1 w-20 bg-pink-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
