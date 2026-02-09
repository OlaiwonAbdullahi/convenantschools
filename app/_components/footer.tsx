"use client";

import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-pink-400 mb-6">
              God&apos;s Covenant College
            </h3>
            <p className="font-nunito text-blue-100/70 leading-relaxed mb-6">
              A premier educational institution dedicated to nurturing young
              minds with academic excellence and spiritual growth through
              faith-based learning.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <IconBrandFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <IconBrandInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <IconBrandTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <IconBrandLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 font-nunito text-blue-100/60">
              <li>
                <Link
                  href="/about"
                  className="hover:text-pink-400 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-pink-400 transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="hover:text-pink-400 transition-colors"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/news-events"
                  className="hover:text-pink-400 transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/portal"
                  className="hover:text-pink-400 transition-colors"
                >
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6">Contact Us</h4>
            <ul className="space-y-5 font-nunito text-blue-100/60">
              <li className="flex gap-4 items-start">
                <IconMapPin className="text-pink-500 shrink-0" size={22} />
                <span>
                  12 Church Street, Academic District, <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <IconPhone className="text-pink-500 shrink-0" size={22} />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex gap-4 items-center">
                <IconMail className="text-pink-500 shrink-0" size={22} />
                <span>info@godscovenantcollege.edu</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Updates */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6">
              Stay Updated
            </h4>
            <p className="font-nunito text-blue-100/60 mb-6">
              Subscribe to stay updated with our latest activities and news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-3 w-full focus:outline-none focus:border-pink-500 font-nunito"
              />
              <button className="bg-pink-500 px-4 py-3 rounded-r-md hover:bg-pink-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="font-nunito text-blue-100/40 text-sm">
            &copy; {currentYear} God&apos;s Covenant College. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
