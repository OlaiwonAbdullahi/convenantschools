"use client";

import { useState, useEffect } from "react";
import { IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Parent",
    content:
      "God's Covenant College has been a blessing for my children. The balance between academic rigor and moral values is exactly what we were looking for.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Mr. David Okonkwo",
    role: "Parent",
    content:
      "The teachers here are truly dedicated. They don't just teach subjects; they mentor and guide the students towards becoming responsible leaders.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Jessica Williams",
    role: "Alumni",
    content:
      "The foundation I received at this college helped me excel at university. The critical thinking skills and discipline I learned are invaluable.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-blue-950 mb-6">
            What Parents Say
          </h2>
          <div className="h-1 w-20 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards Slider */}
          <div className="relative h-[400px] md:h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center text-center ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="mb-8 p-3 bg-pink-50 rounded-full">
                  <IconQuote
                    className="text-pink-500 transform rotate-180"
                    size={40}
                  />
                </div>

                <p className="font-nunito text-slate-700 text-xl md:text-2xl italic leading-relaxed mb-10 px-4 md:px-0">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-blue-950 font-bold font-nunito text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-pink-500 font-medium text-sm uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-pink-500 w-8" : "bg-pink-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
