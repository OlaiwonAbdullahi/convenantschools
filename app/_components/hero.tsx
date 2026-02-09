"use client";

import {
  IconBook,
  IconSchool,
  IconHeart,
  IconSparkles,
} from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-32 overflow-hidden bg-blue-950 rounded-b-[3.5rem]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-[#001F3F]/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl flex items-center flex-col justify-center mx-auto py-12">
          <div className="flex items-center gap-2 border border-pink-500/30 bg-pink-500/5 px-4 py-1.5 rounded-full mb-8 animate-fade-in">
            <IconSparkles className="text-pink-400" size={16} />
            <span className="text-pink-100 text-xs font-nunito font-semibold tracking-wider uppercase">
              Currently Accepting Applications
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-playfair font-bold leading-tight mb-8">
            <span className="text-white">Nurturing Young Minds</span>
            <br />
            <span className="text-pink-400">With Faith & Knowledge</span>
          </h1>
          <p className="text-base md:text-lg text-blue-100/70 max-w-2xl mb-12 leading-relaxed text-center font-nunito animate-fade-in delay-300">
            God&apos;s Covenant College blends academic excellence with
            Christian values to prepare tomorrow&apos;s leaders through a
            dedicated, faith-focused learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto animate-fade-in delay-500">
            <a href="/contact">
              <button className="w-full sm:w-auto bg-pink-500 text-white px-8 py-3.5 rounded-md font-nunito font-bold hover:bg-pink-600 transition-colors">
                Apply Now
              </button>
            </a>
            <button className="w-full sm:w-auto border border-pink-500 text-pink-50 px-8 py-3.5 rounded-md font-nunito font-bold hover:bg-pink-500/10 transition-colors">
              Schedule Tour
            </button>
          </div>
        </div>

        <div className="hidden grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
          {[
            {
              icon: IconBook,
              title: "Academic Excellence",
              description:
                "Curriculum designed to inspire curiosity and foster critical thinking.",
            },
            {
              icon: IconHeart,
              title: "Christian Values",
              description:
                "Building character through biblical principles and a nurturing environment.",
            },
            {
              icon: IconSchool,
              title: "Holistic Growth",
              description:
                "Developing well-rounded individuals through sports, arts, and leadership.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0">
                <feature.icon className="text-pink-400" size={28} />
              </div>
              <div>
                <h3 className="text-white font-playfair font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-100/60 font-nunito text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
