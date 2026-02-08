"use client";

import Link from "next/link";

const CTABanner = () => {
  return (
    <section className="bg-blue-950 py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
              Ready to Give Your Child <br />
              <span className="text-pink-400">the Best Start?</span>
            </h2>
            <p className="font-nunito text-blue-100/70 text-lg md:text-xl leading-relaxed">
              Enrollment for the 2025/2026 academic session is currently
              ongoing. Join our family today and let&apos;s build a future of
              excellence together.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/admissions">
              <button className="bg-pink-500 text-white px-10 py-5 rounded-md font-nunito font-bold text-lg hover:bg-pink-600 transition-colors shadow-none uppercase tracking-wider">
                Start Admission Process
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
