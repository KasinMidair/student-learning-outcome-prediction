"use client";

import React from "react";
import {
  BookOpen,
  Calendar,
  PlayCircle,
  FileText,
  Award,
  Users,
} from "lucide-react";

// Giả định đường dẫn import giữ nguyên như của bạn
import { StatCard } from "@/components/ui/stat-card";
import { CustomPieChart } from "@/components/pie-chart";
import { RateBarChart } from "@/components/rate-bar-chart";
import { CustomLineChart } from "@/components/line-chart";
import { InfoShape } from "./info-shape";

// --- DỮ LIỆU MOCK UP ---
const barData = [
  { name: "Excellent", rate: 45 },
  { name: "Good", rate: 60 },
  { name: "Average", rate: 85 },
];

const pieData = [
  { name: "Exam", value: 79, color: "#F5B562" },
  { name: "Exercise", value: 17, color: "#EFC690" },
  { name: "Video", value: 4, color: "#67AA50" },
];

const lineData = [
  { name: "Jan", score: 14000 },
  { name: "Feb", score: 11000 },
  { name: "Mar", score: 17000 },
  { name: "Apr", score: 15000 },
  { name: "Jun", score: 21000 },
  { name: "Jul", score: 25000 },
  { name: "Aug", score: 19000 },
  { name: "Sep", score: 22000 },
];

export default function CourseDashboard() {
  return (
    // Container chính: căn giữa, padding, giới hạn chiều rộng
    <div className="w-full min-h-screen bg-[#09090b] text-white p-6 flex justify-center font-sans">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* --- CỘT TRÁI (Chiếm 5/12) --- */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          {/* 1. KHỐI INFO SHAPE LỚN */}
          {/* Lưu ý: InfoShape cần có chiều cao cụ thể hoặc auto để SVG giãn ra */}
          <div className="w-full relative">
            <InfoShape className="w-full min-h-[450px]">
              <div className="p-6 pr-12 flex flex-col h-full justify-between">
                {/* Phần Top: Thông tin khóa học */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-3 w-full">
                      <div className="mt-1">
                        <BookOpen className="w-5 h-5 text-[#EFC690]" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-400 text-xs uppercase tracking-wider">
                          Course Name :
                        </span>
                        <h2 className="text-zinc-100 font-semibold text-lg leading-tight max-w-[80%]">
                          toi xin loi hoc cai nay met qua
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 mb-4">
                    {/* Dates */}
                    <div className="space-y-3 min-w-[140px]">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-[#ff5f5f] w-4 h-4" />
                        <div className="flex flex-col text-xs text-zinc-400">
                          <span>Start date:</span>
                          <span className="text-white font-medium">
                            16/09/2025
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="text-[#67AA50] w-4 h-4" />
                        <div className="flex flex-col text-xs text-zinc-400">
                          <span>End date:</span>
                          <span className="text-white font-medium">
                            16/01/2026
                          </span>
                        </div>
                      </div>
                      <p className="text-[10px] text-green-500 italic pl-6">
                        Available now
                      </p>
                    </div>

                    {/* Description */}
                    <div className="flex gap-2">
                      <BookOpen className="text-[#EFC690] w-4 h-4 mt-1 shrink-0" />
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-4">
                        About this course: ¡Buscamos promover llevemos el
                        desarrollo física de nuestros atletas. ¡Unite y juntos
                        llevemos el a otro nivel!...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phần Bottom: 4 Stats Cards */}
                {/* Grid 2x2 cho 4 ô vuông nhỏ */}
                <div className="grid grid-cols-2 gap-4 w-[70%] sm:w-[60%] lg:w-[55%]">
                  {/* Card 1 */}
                  <div className="bg-[#1f2120] rounded-xl p-3 shadow-lg border border-white/5">
                    <StatCard
                      label="Students"
                      value="10k"
                      icon={Users}
                      // Truyền thêm class nhỏ gọn nếu cần chỉnh StatCard
                    />
                  </div>
                  {/* Card 2 */}
                  <div className="bg-[#1f2120] rounded-xl p-3 shadow-lg border border-white/5">
                    <StatCard label="Videos" value="24" icon={PlayCircle} />
                  </div>
                  {/* Card 3 */}
                  <div className="bg-[#1f2120] rounded-xl p-3 shadow-lg border border-white/5">
                    <StatCard label="Exercises" value="60" icon={FileText} />
                  </div>
                  {/* Card 4 */}
                  <div className="bg-[#1f2120] rounded-xl p-3 shadow-lg border border-white/5">
                    <StatCard label="Exams" value="2" icon={Award} />
                  </div>
                </div>
              </div>
            </InfoShape>
          </div>

          {/* 2. PIE CHART CARD (Nằm dưới InfoShape) */}
          <div className="relative w-full bg-[#18181b] rounded-3xl p-6 shadow-xl border border-white/5 flex flex-col justify-center items-center min-h-[250px]">
            {/* Text Resrc ở giữa */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Resrc
              </span>
            </div>
            {/* Chart */}
            <div className="w-full h-[200px]">
              <CustomPieChart data={pieData} />
            </div>
          </div>
        </div>

        {/* --- CỘT PHẢI (Chiếm 7/12) --- */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          {/* 3. BAR CHART CARD */}
          <div className="w-full h-[320px] bg-[#18181b] rounded-3xl p-6 shadow-xl border border-white/5">
            <RateBarChart data={barData} tittle="Monthly Pass Rate of Users" />
          </div>

          {/* 4. LINE CHART CARD */}
          <div className="w-full flex-1 min-h-[300px] bg-[#18181b] rounded-3xl p-6 shadow-xl border border-white/5">
            <CustomLineChart
              title="Number of comments by phase"
              data={lineData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
