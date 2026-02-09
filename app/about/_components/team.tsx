import React from "react";
import Image from "next/image";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const members = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 20 years in education, Dr. Johnson leads our school with vision and compassion.",
    },
    {
      name: "Mr. David Chen",
      role: "Vice Principal (Academic)",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Mr. Chen oversees our rigorous academic programs and curriculum development.",
    },
    {
      name: "Mrs. Elena Rodriguez",
      role: "Head of Student Welfare",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Mrs. Rodriguez is dedicated to ensuring the emotional and social well-being of every student.",
    },
    {
      name: "Rev. Michael Smith",
      role: "School Chaplain",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Rev. Smith provides spiritual guidance and oversees our character-building programs.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-semibold uppercase tracking-wider">
            Meet Our Leaders
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#001F3F] mt-2 mb-4">
            Dedicated to Excellence
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Our leadership team is comprised of experienced educators and
            visionaries committed to nurturing the next generation.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-4/5 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#001F3F]">
                {member.name}
              </h4>
              <p className="text-pink-600 font-medium text-sm mb-3 uppercase tracking-wide">
                {member.role}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
