"use client";

import Image from "next/image";
import {
  Snowflake,
  Github,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className=" w-full font-sans overflow-x-hidden bg-[var(--background-gradient)] ">
      {/* --- HERO --- */}
      <section className=" relative text-white py-20 px-40 md:px-12 flex flex-col items-center justify-center text-center">
        <Image
          src="https://res.cloudinary.com/dpqv7ag5w/image/upload/v1765888145/image_1770_vdqjbu.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-bottom scale-105 origin-bottom"
        />
        {/* Decorative Snowflakes */}
        <Snowflake className="absolute top-10 left-10 w-8 h-8 opacity-50 animate-pulse" />
        <Snowflake className="absolute bottom-10 right-20 w-12 h-12 opacity-40 animate-bounce" />
        <Snowflake className="absolute top-20 right-1/4 w-6 h-6 opacity-60" />

        <div className="z-10 max-w-4xl mt-10">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-90">
            <Snowflake className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-semibold">
              Season&apos;s Greetings from Our Team
            </span>
            <Snowflake className="w-5 h-5" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            Predicting Academic <br /> Success with AI
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto opacity-90 mb-8 leading-relaxed">
            Empowering educators and students with cutting-edge machine learning
            technologies to analyze and predict academic outcomes using real
            datasets.
          </p>

          {/* Ribbon Bow Decoration (CSS mockup or SVG) */}
          <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4">
            {/* Bạn có thể thay bằng ảnh cái nơ thật */}
            <svg
              width="300"
              height="300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2ZM12 2C12 2 4 4 4 10C4 16 12 22 12 22M12 2C12 2 20 4 20 10C20 16 12 22 12 22"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ---  DARK INTRO --- */}
      <section className=" text-white py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        <div className="space-y-6 z-10">
          <div className="flex items-center gap-2 text-[#CDAA7D]">
            <span className="border border-[#CDAA7D] px-2 py-0.5 rounded text-xs">
              Our Mission
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#CDAA7D]">
            Predicting Academic <br /> Success with AI
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt lacinia, ligula diam fringilla lectus,
            in varius risus augue a erat. Cras at enim mi. Mauris ut dignissim
            tortor.
          </p>
        </div>

        {/* Abstract 3D Snowflake Graphic */}
        <div className="relative flex justify-center items-center opacity-30 md:opacity-100">
          <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-[#333] rounded-full flex items-center justify-center animate-spin-slow">
            <Snowflake className="w-40 h-40 text-[#222]" />
          </div>
        </div>
      </section>

      {/* --- SECTION 3: DATASET (CREAM) --- */}
      <section className="bg-[#FAF8EF] py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#6D8B74] uppercase tracking-widest mb-10">
          Dataset Used
        </h2>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          {/* Mockup giao diện Dataset (thay bằng ảnh thật của bạn) */}
          <div className="bg-[#1e293b] text-white p-3 flex items-center justify-between text-xs">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span>MOOC/Dataset.csv</span>
          </div>
          <div className="p-0">
            {/* Placeholder Image */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
              <p>[ Insert Dataset Screenshot Here ]</p>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-6 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel tincidunt lacinia, ligula diam fringilla lectus, in varius
          risus augue a erat.
        </p>
      </section>

      {/* --- SECTION 4: CONTENT GRID (DARK) --- */}
      <section className="bg-[#0F1110] py-20 px-6 md:px-20 relative">
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="border border-white/10 bg-white/5 p-8 rounded hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Courses</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, ligula diam fringilla lectus,
              in varius risus augue a erat. Cras at enim mi.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border border-white/10 bg-white/5 p-8 rounded hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Features</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In
              condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
              Nulla fringill.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border border-white/10 bg-white/5 p-8 rounded hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Analytics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae.
            </p>
          </div>
          {/* Card 4 */}
          <div className="border border-white/10 bg-white/5 p-8 rounded hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Predictions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
              vitae est. Mauris placerat eleifend leo.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: MEMBERS (RED) --- */}
      <section className="bg-[#B93836] py-16 px-6 md:px-12 relative overflow-hidden">
        {/* Decorations */}
        <div className="absolute top-4 left-4 text-[#A02826]">
          <Snowflake className="w-24 h-24" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <Snowflake className="text-[#FFD700] w-6 h-6" />
            <h2 className="text-3xl font-serif text-[#FFD700] font-bold">
              Members
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5].map((member) => (
              <div
                key={member}
                className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
              >
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden border-2 border-[#FFD700]">
                  {/* Avatar Placeholder */}
                  <Image
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member}`}
                    alt="avatar"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold text-sm">Nguyen Hong Phat</p>
                  <p className="text-xs text-white/70">20521763</p>
                  <p className="text-[10px] text-[#FFD700] uppercase">
                    KHTN2020
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Cây thông trang trí (vẽ bằng CSS hoặc SVG) */}
          <div className="absolute bottom-0 right-0 opacity-30">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
              <path d="M50 10 L10 90 H90 Z" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-6 border-t border-gray-800 relative">
        {/* Giả lập hình nền quả thông/gỗ bằng gradient */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-xs md:text-sm">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">
              Data Sources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Kaggle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  University API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Research Papers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Github size={18} />
              </a>
            </div>
            <div className="mt-6">
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 border-none rounded-l px-3 py-2 text-white w-full focus:ring-1 ring-[#B93836]"
                />
                <button className="bg-[#B93836] text-white px-3 py-2 rounded-r hover:bg-[#8e2b29]">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-xs text-gray-600 relative z-10">
          © 2025 AI Prediction Team. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
