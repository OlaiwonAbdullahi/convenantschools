import React from "react";
import { Target, Eye, Shield, Award, Users, BookOpen } from "lucide-react";

const Missionandvision = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our academic and social endeavors.",
    },
    {
      icon: <Award className="w-8 h-8 text-pink-600" />,
      title: "Excellence",
      description:
        "Striving for the best in everything we do, from academics to sports and arts.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Community",
      description:
        "Fostering a sense of belonging and mutual respect among students, staff, and parents.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-pink-600" />,
      title: "Lifelong Learning",
      description:
        "Encouraging curiosity and a continuous passion for knowledge beyond the classroom.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          {/* Mission Card */}
          <div className="bg-[#001F3F] text-white p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Target className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="bg-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To provide a transformative educational experience that empowers
                students to reach their full potential, fostering academic
                excellence, moral integrity, and a commitment to serving society
                in a rapidly changing world.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Eye className="w-32 h-32 text-[#001F3F]" />
            </div>
            <div className="relative z-10">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#001F3F]" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-[#001F3F] mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be a global leader in education, recognized for nurturing
                innovative thinkers, compassionate leaders, and responsible
                global citizens who are prepared to shape a better future for
                humanity.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#001F3F] mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{value.icon}</div>
              <h4 className="text-xl font-bold text-[#001F3F] mb-3">
                {value.title}
              </h4>
              <p className="text-slate-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missionandvision;
