"use client";

import Image from "next/image";

const Welcome = () => {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-4/3 relative rounded-2xl overflow-hidden">
              <img
                src="/school.png"
                alt="Students learning in a modern classroom"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-pink-500 rounded-full hidden md:block -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-pink-500 font-nunito font-bold tracking-widest uppercase text-sm mb-4 block">
              Welcome to our College
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-blue-950 mb-8 leading-tight">
              A Tradition of Excellence, <br />
              <span className="text-pink-600">Built on Faith.</span>
            </h2>

            <div className="space-y-6 font-nunito text-slate-700 text-lg leading-relaxed">
              <p>
                At God&apos;s Covenant College, we believe that education is
                more than just academic achievement. It is about the development
                of the whole person—mind, body, and spirit. Since our founding,
                we have been dedicated to providing a nurturing environment
                where students can discover their unique talents and prepare for
                a life of purpose.
              </p>
              <p>
                Our curriculum is designed to challenge students while providing
                the support they need to succeed. With small class sizes and
                passionate educators, we ensure that every child receives the
                individual attention they deserve. We integrate Christian values
                into every lesson, fostering a culture of integrity, respect,
                and service.
              </p>
              <p>
                Whether in the classroom, on the sports field, or in our
                creative arts studios, our students are encouraged to reach for
                excellence. We invite you to explore our vibrant community and
                see firsthand how we are raising the next generation of global
                leaders.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-blue-950 text-white px-8 py-3 rounded-md font-nunito font-bold hover:bg-blue-900 transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
