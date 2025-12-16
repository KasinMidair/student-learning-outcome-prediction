"use client";

import React, { useState } from "react";
import { Search, Calendar, User, FileText, Video, PenTool } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// --- Components con cho gọn code ---

// 1. Tab Content: Users Information (Ảnh 2)
const UsersInfoTab = () => {
  const users = Array.from({ length: 8 }).map((_, i) => ({
    id: `U_32132${i}`,
    name: "Nguyen Van A",
    school: [40, 60, 40, 50][i % 4],
  }));

  return (
    <div className="animate-in fade-in zoom-in duration-300">
      <Table>
        <TableHeader>
          <TableRow className="border-zinc-700 hover:bg-transparent">
            <TableHead className="text-zinc-400">User Id</TableHead>
            <TableHead className="text-zinc-400">User Name</TableHead>
            <TableHead className="text-zinc-400">School</TableHead>
            <TableHead className="text-zinc-400">...</TableHead>
            <TableHead className="text-zinc-400 text-right">...</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((u, i) => (
            <TableRow key={i} className="border-zinc-800 hover:bg-zinc-800/50">
              <TableCell className="text-zinc-300 font-mono">{u.id}</TableCell>
              <TableCell className="text-zinc-300">{u.name}</TableCell>
              <TableCell className="text-zinc-300">{u.school}</TableCell>
              <TableCell className="text-zinc-600">---</TableCell>
              <TableCell className="text-zinc-600 text-right">---</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center p-4 text-zinc-500 text-xs mt-4">
        <span>1 2 3 ... 50 &gt;</span>
      </div>
    </div>
  );
};

// 2. Tab Content: Course Information (Ảnh 3 - Dashboard Charts)
const CourseInfoTab = () => {
  // Mock Data Charts
  const lineData = [
    { name: "Jan", val1: 4000, val2: 2400 },
    { name: "Feb", val1: 3000, val2: 1398 },
    { name: "Mar", val1: 2000, val2: 9800 },
    { name: "Apr", val1: 2780, val2: 3908 },
    { name: "May", val1: 1890, val2: 4800 },
    { name: "Jun", val1: 2390, val2: 3800 },
  ];
  const pieData = [
    { name: "Video", value: 4, color: "#4ade80" },
    { name: "Exercise", value: 17, color: "#fbbf24" },
    { name: "Exam", value: 79, color: "#f87171" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* LEFT COLUMN (Info + Stats + Donut) */}
      <div className="lg:col-span-5 space-y-6">
        {/* Description Box */}
        <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 text-sm text-zinc-300 space-y-4">
          <p>
            <FileText className="inline w-4 h-4 mr-2 text-orange-400" />
            About this course: ¡Buscamos promover llevemos el desarrollo gfhfgh
            física de nuestros atletas.
          </p>
          <div className="flex gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-red-400" /> Start: 16/09/2025
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-green-400" /> End: 16/01/2026
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Total students", val: "10,000", icon: User },
            { label: "Videos", val: "24", icon: Video },
            { label: "Exercises", val: "60", icon: PenTool },
            { label: "Exams", val: "2", icon: FileText },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700 flex flex-col justify-center items-center text-center hover:bg-zinc-800 transition"
            >
              <item.icon className="w-6 h-6 mb-2 text-zinc-400" />
              <span className="text-xl font-bold text-white">{item.val}</span>
              <span className="text-xs text-zinc-500">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 h-[220px] flex items-center relative">
          <ResponsiveContainer width="40%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={40}
                outerRadius={55}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-white font-bold block">Resrc</span>
          </div>

          <div className="flex-1 pl-4 space-y-2 text-xs">
            {pieData.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-zinc-300"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  {item.name}
                </div>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (Charts) */}
      <div className="lg:col-span-7 space-y-6">
        {/* Chart 1: Learning Outcome */}
        <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 h-[300px]">
          <h3 className="text-sm font-semibold text-white mb-4">
            Learning outcome distribution
          </h3>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={lineData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#3f3f46"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#71717a"
                fontSize={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="#71717a"
                fontSize={10}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#27272a",
                  border: "none",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="val1"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="val2"
                stroke="#d946ef"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2: General Distribution */}
        <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 h-[300px]">
          <h3 className="text-sm font-semibold text-white mb-4">
            ........... distribution
          </h3>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={lineData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#3f3f46"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#71717a"
                fontSize={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="#71717a"
                fontSize={10}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#27272a",
                  border: "none",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="val1"
                stroke="#fbbf24"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="val2"
                stroke="#4ade80"
                strokeWidth={2}
                dot={{ r: 4, fill: "#4ade80" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [activeTab, setActiveTab] = useState<"info" | "users">("info");

  return (
    <div className="p-8 min-h-screen bg-black text-white font-sans relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header Info */}
      <div className="mb-6">
        <div className="inline-block bg-zinc-800 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 border border-zinc-700 mb-4">
          ID: C_1232343
        </div>

        <div className="flex justify-end gap-4 text-sm text-zinc-400 mb-2">
          <span>Experiment</span>
          <span>About Us</span>
        </div>
      </div>

      {/* Main Container Card */}
      <div className="bg-[#18181b]/90 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Search Bar absolute positioning like design */}
        <div className="absolute top-6 right-6 w-64">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-orange-400" />
            <Input
              placeholder=""
              className="pl-9 h-9 bg-transparent border-zinc-600 text-zinc-300 rounded-full focus:border-orange-500"
            />
          </div>
        </div>

        {/* Custom Tabs Header */}
        <div className="flex items-center px-6 pt-6 border-b border-zinc-800/50">
          <button
            onClick={() => setActiveTab("info")}
            className={`pb-4 px-4 text-sm font-bold transition-all border-b-2 ${
              activeTab === "info"
                ? "text-white border-white"
                : "text-zinc-500 border-transparent hover:text-zinc-300"
            }`}
          >
            Course Infomation
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`pb-4 px-4 text-sm font-bold transition-all border-b-2 ${
              activeTab === "users"
                ? "text-white border-white"
                : "text-zinc-500 border-transparent hover:text-zinc-300"
            }`}
          >
            Users Infomation
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-gradient-to-br from-[#18181b] to-[#09090b] min-h-[600px]">
          {activeTab === "info" ? <CourseInfoTab /> : <UsersInfoTab />}
        </div>
      </div>

      {/* Footer Pagination Mockup (chỉ hiện khi cần) */}
      <div className="text-center mt-6 text-zinc-600 text-xs">
        1 2 3 ... 50 {">"}
      </div>
    </div>
  );
}
