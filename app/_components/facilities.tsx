"use client";

import Image from "next/image";

const facilities = [
  {
    name: "Modern Library",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Science Laboratory",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
  },
  {
    name: "Sports Complex",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c64b591d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Computer Lab",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Art Studio",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    name: "Music Room",
    image:
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1974&auto=format&fit=crop",
  },
];

const Facilities = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-blue-950 mb-6">
            Our Facilities
          </h2>
          <p className="font-nunito text-slate-600 text-lg">
            Providing the best tools and spaces for students to explore,
            experiment, and excel in their passions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-playfair font-bold tracking-wider uppercase px-4 text-center">
                  {facility.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
