"use client";

import Image from "next/image";
import {
  Snowflake,
  Github,
  CandyCane,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { url } from "inspector";

interface Member {
  id: number;
  name: string;
  studentId: string;
  classId: string;
  color?: string; // Màu đặc biệt cho thành viên đầu tiên (để làm hiệu ứng picker)
}

// 2. Tạo Data bên ngoài (7 thành viên)
const MEMBERS_DATA: Member[] = [
  {
    id: 1,
    name: "Nguyễn Hồng Phát",
    studentId: "22521072",
    classId: "KHMT2202.3",
  },
  {
    id: 2,
    name: "Trần Văn B",
    studentId: "22521073",
    classId: "KHMT2202.3",
  },
  {
    id: 3,
    name: "Lê Thị C",
    studentId: "22521074",
    classId: "KHMT2202.3",
  },
  {
    id: 4,
    name: "Phạm Văn D",
    studentId: "22521075",
    classId: "KHMT2202.3",
  },
  {
    id: 5,
    name: "Hoàng Thị E",
    studentId: "22521076",
    classId: "KHMT2202.3",
  },
  {
    id: 6,
    name: "Vũ Văn F",
    studentId: "22521077",
    classId: "KHMT2202.3",
  },
  {
    id: 7,
    name: "Đặng Thị G",
    studentId: "22521078",
    classId: "KHMT2202.3",
  },
];

export default function AboutUsPage() {
  return (
    <div className=" w-full font-sans overflow-x-hidden bg-[image:var(--background-gradient)] dark ">
      {/* --- HERO --- */}
      <section className=" relative text-white py-20 px-40 md:px-12 flex flex-col items-center justify-center text-center">
        <Image
          src="https://res.cloudinary.com/dpqv7ag5w/image/upload/v1765888145/image_1770_vdqjbu.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-bottom scale-105 origin-bottom "
        />
        {/* Decorative Snowflakes */}
        <Snowflake className="absolute top-10 left-10 w-8 h-8 opacity-50 animate-pulse" />
        <Snowflake className="absolute bottom-10 right-20 w-12 h-12 opacity-40 animate-bounce" />
        <Snowflake className="absolute top-20 right-1/4 w-6 h-6 opacity-60 " />

        <div className="z-10 max-w-4xl mt-10">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-90">
            <Snowflake className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-semibold">
              Season&apos;s Greetings from Our Team
            </span>
            <Snowflake className="w-5 h-5" />
          </div>

          <h1 className="torn-paper text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            Predicting Academic <br /> Success with AI
            <svg width="0" height="0">
              <filter id="torn">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="2"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="3"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </svg>
          </h1>

          <p className="text-sm md:text-base max-w-2xl text-semibold mx-auto text-[#2A2B2C] mb-8 leading-relaxed">
            Empowering educators and students with cutting-edge machine learning
            technologies to analyze and predict academic outcomes using real
            datasets.
          </p>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#CDAA7D]">
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

      {/* ---  DATASET --- */}
      <section className="bg-[#FAF8EF] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#6D8B74] uppercase tracking-widest mb-10">
          Dataset Used
        </h2>

        <div className="max-w-[70vw] mx-auto bg-white rounded-lg shadow-xl overflow-hidden ">
          <div className="bg-black text-white p-3 flex items-center justify-between text-xs">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span>MOOC/Dataset.csv</span>
          </div>
          <div className="p-0">
            <div className=" relative w-full h-[65vh] con bg-gray-100 flex items-center justify-center text-gray-400">
              <Image
                fill
                priority
                src="https://res.cloudinary.com/dpqv7ag5w/image/upload/v1766056719/image_1775_1_wixlwr.png"
                alt="dataset info image"
                className="object-cover object-contain  origin-bottom "
              />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-6 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel tincidunt lacinia, ligula diam fringilla lectus, in varius
          risus augue a erat.
        </p>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="bg-[#0F1110] py-20 px-6 md:px-20 relative">
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className=" bg-[linear-gradient(to_bottom,#2A2C2B_70  %,#303231_100%)] shadow-xxl shadow-black/30 p-8 rounded-md hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Courses</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, ligula diam fringilla lectus,
              in varius risus augue a erat. Cras at enim mi.
            </p>
          </div>

          {/* Card 1 */}
          <div className=" bg-[linear-gradient(to_bottom,#2A2C2B_70  %,#303231_100%)] shadow-xxl shadow-black/30 p-8 rounded-md hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Courses</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, ligula diam fringilla lectus,
              in varius risus augue a erat. Cras at enim mi.
            </p>
          </div>

          {/* Card 1 */}
          <div className=" bg-[linear-gradient(to_bottom,#2A2C2B_70  %,#303231_100%)] shadow-xxl shadow-black/30 p-8 rounded-md hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Courses</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, ligula diam fringilla lectus,
              in varius risus augue a erat. Cras at enim mi.
            </p>
          </div>

          {/* Card 1 */}
          <div className=" bg-[linear-gradient(to_bottom,#2A2C2B_70  %,#303231_100%)] shadow-xxl shadow-black/30 p-8 rounded-md hover:bg-white/10 transition duration-300">
            <h3 className="text-white font-serif text-xl mb-4">Courses</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, ligula diam fringilla lectus,
              in varius risus augue a erat. Cras at enim mi.
            </p>
          </div>
        </div>
      </section>

      {/* ---  MEMBERS --- */}
      <section className="py-16  px-6 md:px-12 relative overflow-hidden">
        {/* Decorations */}
        <Image
          src="https://res.cloudinary.com/dpqv7ag5w/image/upload/v1765888145/image_1770_vdqjbu.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-bottom scale-105 origin-bottom "
        />
        <div className="absolute top-4 left-4 text-[#A02826]">
          <Snowflake className="w-24 h-24" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <Snowflake className="text-[#FFD700] w-6 h-6" />
          </div>

          <div className="flex">
            <h2 className="text-3xl font-serif text-[#efc69] z-10 font-bold">
              Members
            </h2>
            <div className="m-auto w-[60vw] grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {MEMBERS_DATA.map((member, index) => (
                <div
                  key={member.id}
                  className="flex items-center gap-4 relative group"
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden border-2 border-[#FFD700] shadow-lg">
                    <Image
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                      alt="avatar"
                      width={64}
                      height={64}
                    />
                  </div>

                  {/* Info */}
                  <div className="text-white">
                    <p className="font-bold text-lg leading-tight">
                      {member.name}
                    </p>
                    <p className="text-sm text-white/80 font-mono mt-0.5">
                      {member.studentId}
                    </p>

                    <p className="text-xs text-[#FFD700] font-mono tracking-wide uppercase opacity-90">
                      {member.classId}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Cây thông trang trí (vẽ bằng CSS hoặc SVG) */}
          <div className="absolute bottom-0 right-0 opacity-30">
            <CandyCane className="mt-10 w-24 h-24" />
          </div>
        </div>
      </section>

      {/* ---  FOOTER --- */}
      <footer className="bg-[#1a1a1a] h-[50vh] mt-15 text-gray-400 py-12 px-6 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dpqv7ag5w/image/upload/v1766052281/Footer_37_ijf3v4.png')] "></div>

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
