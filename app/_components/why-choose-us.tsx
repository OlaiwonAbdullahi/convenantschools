"use client";

import {
  IconShieldCheck,
  IconStar,
  IconUsers,
  IconTrophy,
  IconCpu,
  IconPlant,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconShieldCheck,
    title: "Safe Environment",
    description:
      "A secure and nurturing campus designed for the safety and well-being of every student.",
  },
  {
    icon: IconStar,
    title: "Quality Education",
    description:
      "Internationally recognized curriculum taught by passionate and experienced educators.",
  },
  {
    icon: IconUsers,
    title: "Small Class Sizes",
    description:
      "Ensuring individual attention and personalized learning paths for every child.",
  },
  {
    icon: IconTrophy,
    title: "Sports & Arts",
    description:
      "Developing talents beyond the classroom through comprehensive extracurricular programs.",
  },
  {
    icon: IconCpu,
    title: "Modern Facilities",
    description:
      "State-of-the-art laboratories and tech-enabled classrooms for 21st-century learning.",
  },
  {
    icon: IconPlant,
    title: "Character Building",
    description:
      "Instilling Christian values and leadership skills that last a lifetime.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-blue-950 mb-6">
            Why Choose Us
          </h2>
          <p className="font-nunito text-slate-600 text-lg">
            Discover the unique advantages that make God&apos;s Covenant College
            the perfect place for your child&apos;s growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all duration-300"
            >
              <div className="mb-6 bg-pink-50 p-2 rounded-md w-fit">
                <feature.icon
                  className="text-pink-500"
                  size={40}
                  strokeWidth={1}
                />
              </div>
              <h3 className="text-xl font-playfair font-bold text-blue-950 mb-3">
                {feature.title}
              </h3>
              <p className="font-nunito text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
