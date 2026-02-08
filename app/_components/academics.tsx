"use client";

import { IconBallpen, IconSchool, IconBook } from "@tabler/icons-react";

const academics = [
  {
    icon: IconBallpen,
    title: "Nursery School",
    description:
      "A playful and nurturing environment for our youngest learners to develop social skills and early literacy.",
  },
  {
    icon: IconSchool,
    title: "Primary School",
    description:
      "A robust curriculum focused on core subjects, critical thinking, and character building for young minds.",
  },
  {
    icon: IconBook,
    title: "Secondary School",
    description:
      "Preparing students for global excellence through advanced academics, leadership, and specialized tracks.",
  },
];

const Academics = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-blue-950 mb-6">
            Our Academic Programs
          </h2>
          <p className="font-nunito text-slate-600 text-lg">
            We offer a comprehensive educational journey from foundations to
            graduation, ensuring every student reaches their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {academics.map((program, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 hover:border-pink-500 border-2 border-transparent group"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-500 transition-colors duration-300">
                <program.icon
                  className="text-pink-500 group-hover:text-white transition-colors duration-300"
                  size={32}
                />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-blue-950 mb-4">
                {program.title}
              </h3>
              <p className="font-nunito text-slate-600 leading-relaxed text-lg">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
