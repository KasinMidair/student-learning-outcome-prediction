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

// Import các component của bạn (Giả sử đường dẫn đúng như cấu trúc dự án)
import { StatCard } from "@/components/ui/stat-card";
import { CustomPieChart } from "@/components/pie-chart";
import { RateBarChart } from "@/components/rate-bar-chart";
import { CustomLineChart } from "@/components/line-chart";
import { Shape } from "@/components/ui/shape"; // Component Shape bạn đã tạo
import { InfoShape } from "./info-shape";

// --- DỮ LIỆU MOCK UP (GIỐNG HÌNH 100%) ---

const barData = [
  { name: "Excellent", rate: 45 },
  { name: "Good", rate: 60 },
  { name: "Average", rate: 85 },
];

const pieData = [
  { name: "Exam", value: 79, color: "#F5B562" }, // Màu cam
  { name: "Exercise", value: 17, color: "#EFC690" }, // Màu da
  { name: "Video", value: 4, color: "#67AA50" }, // Màu xanh lá
];

// Lưu ý: Component LineChart của bạn hiện tại chỉ vẽ 1 đường.
// Để giống hình (3 đường), bạn cần update component LineChart như hướng dẫn trước.
// Ở đây tôi dùng dữ liệu 1 đường đại diện để code chạy được.
const lineData = [
  { name: "Jan", score: 14000 },
  { name: "Feb", score: 11000 },
  { name: "Mar", score: 17000 },
  { name: "Apr", score: 15000 },
  { name: "Jun", score: 21000 },
  { name: "Jul", score: 25000 },
  { name: "Aug", score: 19000 },
  { name: "Aug", score: 22000 },
];

export default function CourseDashboard() {
  return (
    <div className=" text-white  p-6 font-sans flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          <div className="border-t-0 relative -z-1">
            <InfoShape className="w-full">
              {/* Course Name */}
              <div className="flex justify-between">
                <div className="flex items-start gap-3 w-full">
                  <BookOpen className=" w-6 h-6" />
                  <div>
                    <span className="text-zinc-400 text-sm">
                      Course Name :{" "}
                    </span>
                    <span className="text-zinc-200 font-medium">
                      toi xin loi hoc cai nay met qua
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Cột ngày tháng */}
                  <div className="space-y-2 min-w-[180px]">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#ff5f5f] w-6 h-6" />
                      <span className="text-sm text-zinc-400">
                        Start date: <span>16/09/2025</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#67AA50] w-6 h-6" />
                      <span className="text-sm ">
                        End date:{" "}
                        <span className="text-zinc-200">16/01/2026</span>
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 pl-6 italic">
                      This course is available
                    </p>
                  </div>

                  {/* Cột mô tả */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 min-w-4">
                      <BookOpen className="text-[#EFC690] w-4 h-4" />
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      About this course: ¡Buscamos promover llevemos el
                      desarrollo gfhfgh física de nuestros atletas...
                    </p>
                  </div>
                </div>
              </div>
              {/* number info */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="shadow-lg shadow-black/20 rounded-xl overflow-hidden">
                  <StatCard
                    label="Total students"
                    value="10,000"
                    subtext=""
                    icon={Users}
                  />
                </div>
                <div className="shadow-lg shadow-black/20 rounded-xl overflow-hidden">
                  <StatCard
                    label="Videos"
                    value="24"
                    subtext=""
                    icon={PlayCircle}
                  />
                </div>
                <div className="shadow-lg shadow-black/20 rounded-xl overflow-hidden">
                  <StatCard
                    label="Exercises"
                    value="60"
                    subtext=""
                    icon={FileText}
                  />
                </div>
                <div className="shadow-lg shadow-black/20 rounded-xl overflow-hidden">
                  <StatCard label="Exams" value="2" subtext="" icon={Award} />
                </div>
              </div>
            </InfoShape>
          </div>

          {/* 3. PIE CHART CARD */}
          <div className="relative">
            {/* Component PieChart của bạn */}
            <CustomPieChart data={pieData} tittle="sdfsdf" />

            {/* TEXT "Resrc" Ở GIỮA (Tuyệt chiêu CSS Absolute) */}
            <div className="absolute top-[58%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center">
              <span className="text-2xl font-medium text-zinc-200 tracking-wide">
                Resrc
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          <div className="h-[320px]">
            <RateBarChart data={barData} tittle="Monthly Pass Rate of Users" />
          </div>

          <div className="flex-1 min-h-[300px]">
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
