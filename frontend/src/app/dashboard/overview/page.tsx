"use client"; // 👈 QUAN TRỌNG: Bắt buộc phải có để chạy Recharts

import React from "react";
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
  BarChart,
  Bar,
  Legend,
} from "recharts";

import { StatCard } from "@/components/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import CustomLegend from "@/components/custom-legend";

// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---

const lineData = [
  { name: "Jan", score: 400 },
  { name: "Feb", score: 300 },
  { name: "Mar", score: 550 },
  { name: "Apr", score: 450 },
  { name: "May", score: 600 },
  { name: "Jun", score: 700 },
];

const pieData = [
  { name: "Excellent", value: 12, color: "#67AA50" },
  { name: "Good", value: 21, color: "#EFC690" },
  { name: "Failed", value: 67, color: "#F5B562" },
];

const barData = [
  { name: "1/2020", rate: 40 },
  { name: "3/2021", rate: 60 },
  { name: "3/2021", rate: 30 },
  { name: "3/2021", rate: 80 },
  { name: "3/2021", rate: 55 },
  { name: "3/2021", rate: 90 },
  { name: "3/2021", rate: 70 },
];

const chartData = barData.map((item) => ({
  ...item,
  remain: 100 - item.rate,
}));

// Custom Tooltip cho Dark Mode
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 p-2 rounded shadow-md text-xs text-white">
        <p className="font-semibold mb-1">{label}</p>
        <p style={{ color: payload[0].color }}>
          {payload[0].name}: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export default function OverviewPage() {
  return (
    <div className=" space-y-6 ">
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
        Overview
      </h1>

      {/* Row 1: 4 Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {[
          { label: "Total Students", val: "3,243", sub: "active in system" },
          {
            label: "Total Courses",
            val: "10,000",
            sub: "+2.1% from last month",
          },
          { label: "Completion Rate", val: "84%", sub: "courses completed" },
        ].map((item, i) => (
          <StatCard
            key={i}
            value={item.val}
            label={item.label}
            subtext={item.sub}
          />
        ))}
      </div>

      <div className="  grid grid-cols-1  md:grid-cols-[5fr_3fr]  gap-6 w-full">
        <div className="grid grid-cols-1 lg:grid-row-2  gap-y-6">
          {/* Line Chart Area - Chiếm 2 phần */}
          <Card className="col-span-1 lg:col-span-2 bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30 ">
            <CardHeader>
              <CardTitle className="text-xl font-medium">
                Monthly Student Enrollment in Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[80%] w-full pl-0 pr-10 ">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#636864ff" />
                  <XAxis
                    dataKey="name"
                    stroke="#fefeffff"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#f6f6ffff"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#fbbf24" /* Yellow-400 */
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#fbbf24" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr] gap-6">
            {/* Pass Rate Gauge */}
            <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  Pass Rate Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-46 h-36 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      className="text-zinc-800"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="14"
                      fill="transparent"
                      strokeDasharray={377}
                      strokeDashoffset={377 - (377 * 25) / 100}
                      className="text-green-500 transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-3xl font-bold text-white">25%</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500">
                  Total pass rate this month
                </p>
              </CardContent>
            </Card>

            {/* monthly top 5 pass rate */}
            <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30">
              <CardHeader>
                <CardTitle className="text-xl">
                  Top 7 Monthly Pass Rate of Users
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="colorGradient"
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="1"
                      >
                        <stop offset="o%" stopColor="#58D764" />
                        <stop offset="100%" stopColor="#FBE947" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#27272a"
                    />
                    <XAxis
                      dataKey="name"
                      stroke="#71717a"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />

                    <Tooltip
                      cursor={{ fill: "#27272a" }}
                      content={<CustomTooltip />}
                    />
                    <Bar
                      dataKey="rate"
                      stackId="total"
                      fill="#fbbf24"
                      barSize={30}
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill="url(#colorGradient)"
                          fillOpacity={0.8}
                        />
                      ))}
                    </Bar>
                    <Bar dataKey="remain" stackId="total" barSize={30}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill="#ffffff"
                          fillOpacity={0.1}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-[2fr_3fr] gap-6">
          {/* label distribution */}
          <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30">
            <CardHeader>
              <CardTitle className="text-xl font-medium">
                Learning outcome distribution
              </CardTitle>
            </CardHeader>
            <CardContent className=" h-[210px]  relative border-0 text-white">
              <div className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="40%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                      content={<CustomLegend />}
                      layout="vertical"
                      align="right"
                      verticalAlign="middle"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          {/* Leaderboard Table */}
          <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30overflow-hidden">
            <CardHeader className="flex flex-row justify-between items-center pb-2">
              <CardTitle className="text-sm">Leaderboard</CardTitle>
              <Button
                variant="link"
                size="sm"
                className="text-xs text-zinc-400 h-auto p-0"
              >
                Show more
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-zinc-800 hover:bg-transparent">
                    <TableHead className="text-zinc-500 h-8 text-xs font-medium">
                      User Name
                    </TableHead>
                    <TableHead className="text-zinc-500 h-8 text-xs text-right font-medium">
                      Courses
                    </TableHead>
                    <TableHead className="text-zinc-500 h-8 text-xs text-right font-medium">
                      Grade
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <TableRow
                      key={row}
                      className="border-zinc-800 hover:bg-zinc-800/50 transition-colors"
                    >
                      <TableCell className="py-2 text-xs text-zinc-300">
                        Nguyen Van A
                      </TableCell>
                      <TableCell className="py-2 text-xs text-right text-zinc-400">
                        40
                      </TableCell>
                      <TableCell className="py-2 text-xs text-right font-bold text-green-400">
                        A
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
