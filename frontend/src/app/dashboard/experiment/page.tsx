"use client";

import React, { useState } from "react";
import { ChevronDown, Search, User } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

// --- MOCK DATA (Dữ liệu giả lập) ---

// 1. Data cho Tab Overview (Biểu đồ ngang)
const overviewData = [
  { name: "C1", modelA: 85, modelB: 70 },
  { name: "C2", modelA: 80, modelB: 75 },
  { name: "C3", modelA: 40, modelB: 60 },
  { name: "C4", modelA: 35, modelB: 45 },
  { name: "C5", modelA: 70, modelB: 72 },
  { name: "C6", modelA: 65, modelB: 68 },
];

// 2. Data cho Tab Phase (Biểu đồ đường)
const phaseData = [
  { name: "Phase 1", acc: 20, f1: 40, pre: 50, rec: 30 },
  { name: "Phase 2", acc: 50, f1: 55, pre: 70, rec: 45 },
  { name: "Phase 3", acc: 45, f1: 50, pre: 65, rec: 40 },
  { name: "Phase 4", acc: 80, f1: 90, pre: 85, rec: 70 },
  { name: "Phase 5", acc: 100, f1: 110, pre: 120, rec: 90 },
];

// 3. Data cho Tab Label (Biểu đồ cột đứng)
const labelData = [
  { name: "Label 1", val1: 150, val2: 140 },
  { name: "Label 2", val1: 140, val2: 120 },
  { name: "Label 3", val1: 170, val2: 140 },
  { name: "Label 4", val1: 180, val2: 170 },
  { name: "Label 5", val1: 160, val2: 190 },
  { name: "Label 6", val1: 130, val2: 160 },
];

// --- CÁC COMPONENT TAB CON ---

const OverviewTab = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-zinc-400 mb-4 text-sm font-medium">Compare models</h3>
    <div className="flex-1 w-full min-h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={overviewData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#27272a"
            horizontal={false}
          />
          <XAxis type="number" stroke="#71717a" fontSize={10} hide />
          <YAxis
            dataKey="name"
            type="category"
            stroke="#a1a1aa"
            fontSize={11}
            width={30}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              borderColor: "#27272a",
              color: "#fff",
            }}
            cursor={{ fill: "transparent" }}
          />
          <Bar
            dataKey="modelA"
            fill="#8b5cf6"
            radius={[0, 4, 4, 0]}
            barSize={12}
          />{" "}
          {/* Tím */}
          <Bar
            dataKey="modelB"
            fill="#ec4899"
            radius={[0, 4, 4, 0]}
            barSize={12}
          />{" "}
          {/* Hồng */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const PhaseTab = () => (
  <div className="h-full flex flex-col">
    {/* Các nút filter giả lập */}
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
      {[
        "Accuracy",
        "F1 - Score",
        "Precision",
        "Recall",
        "Balanced Acc",
        "Others",
      ].map((item, i) => (
        <button
          key={i}
          className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
            i === 0
              ? "bg-[#2a2a2e] text-[#d4d4d8] border-[#3f3f46]" // Active state
              : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>

    <h3 className="text-zinc-400 mb-2 text-sm font-medium">Phase trend</h3>
    <div className="flex-1 w-full min-h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={phaseData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#27272a"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#71717a"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis
            stroke="#71717a"
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              borderColor: "#27272a",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="acc"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3, fill: "#3b82f6" }}
          />
          <Line
            type="monotone"
            dataKey="f1"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={{ r: 3, fill: "#8b5cf6" }}
          />
          <Line
            type="monotone"
            dataKey="pre"
            stroke="#ec4899"
            strokeWidth={2}
            dot={{ r: 3, fill: "#ec4899" }}
          />
          <Line
            type="monotone"
            dataKey="rec"
            stroke="#14b8a6"
            strokeWidth={2}
            dot={{ r: 3, fill: "#14b8a6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const LabelTab = () => (
  <div className="h-full flex flex-col">
    {/* Filter Buttons */}
    <div className="flex gap-8 mb-6 justify-center text-xs font-medium text-zinc-500">
      <span className="text-[#d4d4d8] border-b-2 border-[#d4d4d8] pb-1">
        F1 - Score
      </span>
      <span className="hover:text-zinc-300 cursor-pointer">Precision</span>
      <span className="hover:text-zinc-300 cursor-pointer">Recall</span>
      <span className="hover:text-zinc-300 cursor-pointer">Others</span>
    </div>

    <div className="flex-1 w-full min-h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={labelData} barGap={4}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#27272a"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#71717a"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis
            stroke="#71717a"
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              borderColor: "#27272a",
              color: "#fff",
            }}
            cursor={{ fill: "#27272a", opacity: 0.4 }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
          <Bar
            name="Class"
            dataKey="val1"
            fill="#8b5cf6"
            radius={[4, 4, 0, 0]}
            barSize={10}
          />
          <Bar
            name="Sentibel"
            dataKey="val2"
            fill="#ec4899"
            radius={[4, 4, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// --- TRANG CHÍNH ---

export default function ExperimentPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "phase" | "label">(
    "overview"
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        {/* Breadcrumb / Title mockup */}
        <div className="flex gap-4 text-sm font-medium text-zinc-500">
          <span className="text-zinc-700">Experiment</span>
          <span>About Us</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            <User size={14} className="text-zinc-400" />
          </div>
          <ChevronDown size={14} className="text-zinc-600" />
        </div>
      </div>

      {/* Version Selector */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 bg-[#18181b] border border-zinc-800 text-xs px-4 py-2 rounded-full text-[#d4d4d8] hover:border-zinc-700 transition">
          <span className="text-zinc-500">Version :</span>
          <span className="font-semibold text-orange-200">V0 (Raw Model)</span>
          <ChevronDown size={12} />
        </button>
      </div>

      {/* MAIN CARD WITH TABS */}
      <div className="w-full">
        {/* Tab Headers - Styled like Folders */}
        <div className="flex items-end pl-4">
          {/* Tab 1: Overview */}
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-8 py-3 rounded-t-xl text-sm font-medium transition-all relative ${
              activeTab === "overview"
                ? "bg-[#18181b] text-white z-10" // Active style
                : "bg-[#09090b] text-zinc-600 hover:text-zinc-400"
            }`}
          >
            Overview
          </button>

          {/* Tab 2: Phase */}
          <button
            onClick={() => setActiveTab("phase")}
            className={`px-8 py-3 rounded-t-xl text-sm font-medium transition-all relative -ml-4 ${
              activeTab === "phase"
                ? "bg-[#18181b] text-white z-10 shadow-[-4px_0_10px_rgba(0,0,0,0.5)]"
                : "bg-[#0c0c0e] text-zinc-600 hover:text-zinc-400"
            }`}
          >
            Phase
          </button>

          {/* Tab 3: Label */}
          <button
            onClick={() => setActiveTab("label")}
            className={`px-8 py-3 rounded-t-xl text-sm font-medium transition-all relative -ml-4 ${
              activeTab === "label"
                ? "bg-[#18181b] text-white z-10 shadow-[-4px_0_10px_rgba(0,0,0,0.5)]"
                : "bg-[#09090b] text-zinc-600 hover:text-zinc-400"
            }`}
          >
            Label
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="bg-[#18181b] rounded-b-2xl rounded-tr-2xl p-8 min-h-[600px] border-t-0 border border-[#18181b] shadow-xl relative z-0">
          {/* Content Animation Wrapper */}
          <div className="animate-in fade-in zoom-in duration-300 h-full">
            {activeTab === "overview" && <OverviewTab />}
            {activeTab === "phase" && <PhaseTab />}
            {activeTab === "label" && <LabelTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
